import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="card" className="col">
			<img
				src={props.image}
				className="card-img-top"
				alt={props.description}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};
