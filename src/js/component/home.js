import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./Cards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { element } from "prop-types";

//create your first component
export function Home() {
	const info = [
		{
			image: "https://picsum.photos/id/1041/367/267",
			imgdescription: "forest",
			title: "Waves",
			text: "Tauranga, New Zealand",
			button: "Click me"
		},

		{
			image: "https://picsum.photos/id/1015/367/267",
			imgdescription: "river",
			title: "Blue River",
			text: "Forsand, Norway",
			button: "Click me"
		},

		{
			image: "https://picsum.photos/id/1018/367/267",
			imgdescription: "road",
			title: "Winding Road",
			text: "Portree, United Kingdom",
			button: "Click me"
		},
		{
			image: "https://picsum.photos/id/1019/367/267",
			imgdescription: "sky",
			title: "Stormy Sky",
			text: "Coupeville, United States",
			button: "Click me"
		}
	];

	return (
		<div className="container-flex" id="app">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row" style={myStyle}>
					{info.map((element, i) => {
						return (
							<Cards
								key={i}
								image={element.image}
								imgdescription={element.imgdescription}
								title={element.title}
								text={element.text}
								button={element.button}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

const myStyle = {
	display: "flex",
	//flexDirection: "row",
	justifyContent: "space-between"
	//alignItems: "center"
};
