import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";
import { HeaderNavData } from "../../Utils/Constants";

const NavBar = ({ active }) => {
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							{HeaderNavData.map((item) => (
								<li
									className={
										(active = item.activeClass
											? item.navClass
											: item.navClass)
									}
								>
									<Link to={item.link}>{item.text}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
