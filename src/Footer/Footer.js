import React from 'react';
import './Footer.css';

function Footer() {

	let copyrightYear = new Date();

	return (
		<footer>
			<p>© {copyrightYear.getFullYear()} Sabrina Becker</p>
		</footer>
	);
}

export default Footer;