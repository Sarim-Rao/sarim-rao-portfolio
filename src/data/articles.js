import React from "react";
import recursiveFunctionImage from "../images/recursivefunctionpic.png";
import colsure from "../images/colsure.png";

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
						<p></p>

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
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
