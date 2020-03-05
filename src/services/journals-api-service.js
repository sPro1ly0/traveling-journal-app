import config from '../config';
import TokenService from '../services/token-service';

const JournalsApiService = {
	getJournals() {
		return fetch(`${config.API_ENDPOINT}/journals`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`
			}
		})
			.then(res => 
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	},
	getJournal(journalId) {
		return fetch(`${config.API_ENDPOINT}/journals/${journalId}`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`
			}
		})
			.then(res => 
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	},
	postJournal(title, location, content, start_date, end_date) {
		return fetch(`${config.API_ENDPOINT}/journals`, {
			method: 'POST',
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				title,
				location,
				content,
				start_date,
				end_date,
			})
		})
			.then(res => 
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	},
	updateJournal(journalId, title, location, content, start_date, end_date) {
		return fetch(`${config.API_ENDPOINT}/journals/${journalId}`, {
			method: 'PATCH',
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				title,
				location,
				content,
				start_date,
				end_date,
			})
		})
			.then(res => 
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	},
	deleteJournal(journalId) {
		return fetch(`${config.API_ENDPOINT}/journals/${journalId}`, {
			method: 'DELETE',
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`
			}
		})
			.then(res => 
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	},
	getJournalComments(journalId) {
		return fetch(`${config.API_ENDPOINT}/journals/${journalId}/comments`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`
			}
		})
			.then(res => 
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	},
	postComment(journalId, text) {
		return fetch(`${config.API_ENDPOINT}/comments`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify({
				journal_id: journalId,
				text,
			}),
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			);
	}

};

export default JournalsApiService;