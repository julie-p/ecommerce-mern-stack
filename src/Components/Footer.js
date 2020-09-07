import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer__distributed">

			<div className="footer__left">

                <h3>Company Name</h3>

				<p className="footer__links">
					<Link to="/" className="footer__link">Home</Link>
					
					<Link to="/shop">Shop</Link>
				
					<Link>Sales</Link>
				
					<Link>About</Link>
					
					<Link>Faq</Link>
					
					<Link>Contact</Link>
				</p>

				<p className="footer__companyName">Company Name © 2020</p>
			</div>

			<div className="footer__center">

				<div>
					<p><span>129 Windfall Lane</span>Santa Ana, CA 92704</p>
				</div>

				<div>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<p><a href="mailto:example@company.com">example@company.com</a></p>
				</div>

			</div>

			<div className="footer__right">

				<p class="footer__companyAbout">
					<span>About the company</span><br></br>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer__icons">

                    <Link><FontAwesomeIcon icon={faFacebook}/></Link>
					<Link><FontAwesomeIcon icon={faTwitter}/></Link>
					<Link><FontAwesomeIcon icon={faInstagram}/></Link>

				</div>

			</div>

		</footer>
    )
};

export default Footer;
