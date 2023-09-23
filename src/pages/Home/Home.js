import React from "react";
import { Link } from "react-router-dom";

import "../../output.css";

export default function Home() {
	return (
		<div className="flex flex-col h-screen bg-slate-300">
			<div className="navbar bg-neutral text-neutral-content">
				<div className="navbar-start">
					<a href="/" className="btn btn-ghost normal-case text-xl">
						Physiotherapeautic Aid
					</a>
				</div>
				<div className="navbar-end">
					<Link to="/about" className="btn text-lg ">
						About
					</Link>
				</div>
			</div>
			<div className="container mx-auto px-48 py-32">
				<div className="card lg:card-side bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://ipfs.io/ipfs/Qma46xggUp6Qf26SQgeiL1T88aonEK4mAAhaio3E9FpT7H?filename=frontbtpimg.png"
							alt="Album"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-6xl font-black text-left">
							Physiotherapeautic Aid using ML and AI
						</h2>

						<div className="card-actions justify-end py-10">
							<button className="btn btn-primary ">
								<Link to="/start">Let's Start</Link>
							</button>
							<button className="btn btn-primary">
								<Link to="/tutorials">Tutorial</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
