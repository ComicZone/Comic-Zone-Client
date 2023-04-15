import React from "react";
import "./Card.css";
import { HiFire } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Books() {
		const navigate = useNavigate()
	const handleNavigate = () => {
		return navigate('/preview')
	}
	return (
		<>
			<div className="Down">

      <div className="BookCard3">
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
								<button onClick={handleNavigate}> BUY </button>
							</div>
						</div>
					</div>
				</div>



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
								<button onClick={handleNavigate}> BUY </button>
							</div>
						</div>
					</div>
				</div>


        
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
								<button onClick={handleNavigate}> BUY </button>
							</div>
						</div>
					</div>
				</div>



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
								<button onClick={handleNavigate}> BUY </button>
							</div>
						</div>
					</div>
				</div>



      </div>
		</>
	);
}
