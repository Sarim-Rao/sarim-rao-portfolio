import React from "react";
import "./styles/socials.css";
import { SocialLinks } from "../../Utils/Constants";

const Socials = () => {
	return (
		<div className="socials">
			{SocialLinks && SocialLinks.map((item) => (
				<div className="social" key={item.id}>
					<a href={item.href} target="_blank" rel="noreferrer">
						<div className="social-icon">{item.socialIcon}</div>
						<div className="social-text">{item.title}</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default Socials;
