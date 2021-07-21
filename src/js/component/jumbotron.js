import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a simple landing page built using React. Only three
				components were used, a Navbar, a Jumbotron, and a Card
				component. The Cards component was built with props for easy
				re-use.
			</p>

			<p className="lead">
				React JS was designed to provide high performance in mind. The
				core of the framework offers a virtual DOM program and
				server-side rendering, which makes complex apps run extremely
				fast.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn React!
			</a>
		</div>
	);
}
