import config from '../config';
import TokenService from '../services/token-service';

const JournalsApiService = {
  getUserName() {
    return fetch(`${config.API_ENDPOINT}/users`, {
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
  getUserJournals() {
    return fetch(`${config.API_ENDPOINT}/users/journals`, {
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
  postJournal(newJournal) {
    return fetch(`${config.API_ENDPOINT}/journals`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: newJournal.title,
        location: newJournal.location,
        content: newJournal.content,
        start_date: newJournal.start_date.toJSON(),
        end_date: newJournal.end_date.toJSON(),
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  updateJournal(journalId, updateJournal) {
    return fetch(`${config.API_ENDPOINT}/journals/${journalId}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: updateJournal.title,
        location: updateJournal.location,
        content: updateJournal.content,
        start_date: updateJournal.start_date.toJSON(),
        end_date: updateJournal.end_date.toJSON(),
      })
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e));
        }
      });
  },
  deleteJournal(journalId) {
    return fetch(`${config.API_ENDPOINT}/journals/${journalId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e));
        }
      });
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