import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";
import { FooterLinksData } from "../../Utils/Constants";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						{FooterLinksData.map((item) => (
							<li className="footer-nav-link-item" key={item.id}>
								<Link to={item.link}>{item.text}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						&copy; 2024 Rao Sarim Ali. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
