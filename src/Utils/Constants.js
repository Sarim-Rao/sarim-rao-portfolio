import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../data/user";
export const SocialLinks = [
	{
		id: 1,
		title: "Follow on GitHub",
		socialIcon: <FontAwesomeIcon icon={faGithub} />,
		href: INFO.socials.github,
		rel: "noreferrer",
	},
	{
		id: 2,
		title: "Follow on LinkedIn",
		socialIcon: <FontAwesomeIcon icon={faLinkedin} />,
		href: INFO.socials.linkedin,
	},
	{
		id: 3,
		title: "Follow on Instagram",
		socialIcon: <FontAwesomeIcon icon={faInstagram} />,
		href: INFO.socials.instagram,
	},
	{
		id: 4,
		title: INFO.main.email,
		socialIcon: <FontAwesomeIcon icon={faEnvelope} />,
		href: `mailto:${INFO.main.email}`,
	},
];

// Footer Links Data

export const FooterLinksData = [
	{
		id: 1,
		link: "/",
		text: "Home",
	},
	{
		id: 2,
		link: "/about",
		text: "About",
	},
	{
		id: 3,
		link: "/projects",
		text: "Projects",
	},
	{
		id: 4,
		link: "/articles",
		text: "Articles",
	},
	{
		id: 5,
		link: "/contact",
		text: "Contact",
	},
];

// Header Nav Data

export const HeaderNavData = [
	{
		id: 1,
		active: "home",
		link: "/",
		text: "Home",
		activeClass: "nav-item active",
		navClass: "nav-item",
	},
	{
		id: 2,
		text: "About",
		link: "/about",
		active: "about",
		activeClass: "nav-item active",
		navClass: "nav-item",
	},
	{
		id: 3,
		text: "Projects",
		link: "/projects",
		active: "projects",
		activeClass: "nav-item active",
		navClass: "nav-item",
	},
	{
		id: 4,
		text: "Articles",
		link: "/articles",
		active: "articles",
		activeClass: "nav-item active",
		navClass: "nav-item",
	},
	{
		id: 5,
		text: "Contact",
		link: "/contact",
		active: "contact",
		activeClass: "nav-item active",
		navClass: "nav-item",
	},
];
