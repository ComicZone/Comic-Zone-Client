import React from "react";
import "./Card.css";
import { HiFire } from "react-icons/hi";

export default function Card() {
	return (
		<>
			<div className="up">
				<div className="BookCard">
					<div className="middle">
						<div className="information">
							<div className="FirstContent">
								<HiFire className="fire" />
								<div className="FirstItem">
									<p>
										Peaceful <br /> Rath
									</p>
								</div>
							</div>

							<div className="SecondContent">
								<p>
									Price: <br /> $ 100
								</p>
							</div>

							<div className="ThirdContent">
								<button> BUY </button>
							</div>
						</div>
					</div>
				</div>

				<div className="writeUp">
					<h1 className="Heros">
						Heroes read <br /> about heroes
					</h1>
					<h5 className="DigitalMarket">
						Digital marketplace for all kind of comic books, easily find and read <br />{" "}
						your favorite comic hero's
					</h5>
					<button className="category">View by category</button>
				</div>

				<div className="BookCard2">
					<div className="middle">
						<div className="information">
							<div className="FirstContent">
								<HiFire className="fire" />
								<div className="FirstItem">
									<p>
										James <br /> Okoye
									</p>
								</div>
							</div>

							<div className="SecondContent">
								<p>
									Price: <br /> $ 100
								</p>
							</div>

							<div className="ThirdContent">
								<button> BUY </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
