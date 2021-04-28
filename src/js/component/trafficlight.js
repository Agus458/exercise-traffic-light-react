import React, { useState } from "react";
import "../../styles/trafficlight.css";

export default function TrafficLight() {
	const [color, setColor] = useState("red");

	const updateColor = color => {
		setColor(color);
	};

	return (
		<div className="contenedor">
			<div className="trafficTop"></div>
			<div className="trafficLight">
				<div
					className={`redLight ${color == "red" ? "selected" : ""}`}
					onClick={() => {
						updateColor("red");
					}}></div>
				<div
					className={`yellowLight ${
						color == "yellow" ? "selected" : ""
					}`}
					onClick={() => {
						updateColor("yellow");
					}}></div>
				<div
					className={`greenLight ${
						color == "green" ? "selected" : ""
					}`}
					onClick={() => {
						updateColor("green");
					}}></div>
			</div>
		</div>
	);
}
