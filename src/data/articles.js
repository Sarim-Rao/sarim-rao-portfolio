import React from "react";
import recursiveFunctionImage from "../images/recursivefunctionpic.png";
import colsure from "../images/colsure.png";
import coverage_1 from "../images/analyzing-code-coverage_1.png";
import coverage_2 from "../images/coverage_2.png";

function article_1() {
	return {
		date: "27 May 2024",
		title: "Important JavaScript Concepts to Know",
		description:
			"JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms with dynamic styling with animation, etc.",
		keywords: [
			"The Benefits of javascript",
			"sarim",
			"sarim rao",
			"javascript",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h1>Recursive Function</h1>

						<p>
							A recursive function is a function that calls itself
							somewhere within the body of the function. It will
							repeat calling itself until the desired output is
							achieved.
						</p>

						<img
							src={recursiveFunctionImage}
							alt="random"
							className="randImage"
						/>
					</div>

					<div className="paragraph">
						<h1>Closure</h1>

						<p>
							A closure gives you access to an outer function's
							scope from an inner function. In JavaScript,
							closures are created every time a function is
							created, at function creation time.
						</p>
						<p>
							A closure is closely related to lexical scope. It
							occurs when a function “remembers” the variables
							from its outer lexical scope, even after that outer
							function has finished executing.
						</p>
						<h3>Lexical Scope</h3>
						<img
							src={colsure}
							alt="colsure"
							className="colsureImage"
						/>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
	  date: "20 Feb 2025",
	  title: "Find unused JavaScript and CSS code with the Coverage tab",
	  description:
		"The Coverage panel helps you find unused JavaScript and CSS code. Removing unused code can speed up your page load and save the mobile data of your users.",
	  style: ``,
	  keywords: [
		"unused JavaScript",
		"unused Css",
		"Coverage tab",
	  ],
	  body: (
		<React.Fragment>
		  <div className="article-content">
			<div className="paragraph"> 
			  <img
				src={coverage_1}
				alt="coverage"
				className="coverageImage"
			  />
			  <p>
				The Coverage panel lets you record your page and view a report of the total used and unused bytes of CSS and Javascript resources, and track the code in the Sources panel.
			  </p>
			  <h2>Open the Coverage panel</h2>
			  <div>
				<p>1. Open Devtools.</p>
				<p>2. Open the Command Menu.</p>
				<p>
					3. Start typing coverage, select the Show Coverage command, and then press Enter to run the command. The Coverage panel opens in the Drawer.
				</p>
				<img
					src={coverage_2}
					alt="coverage steps"
					className="coverageStepsImage"
				/>
			  </div>
			</div>
		  </div>
		</React.Fragment>
	  ),
	};
  }

const myArticles = [article_1, article_2];

export default myArticles;
