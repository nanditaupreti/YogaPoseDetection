import React from "react";

import { poseImages } from "../../utils/pose_images";


import "../../output.css"

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
	return (
		<div className=" py-16 flex items-center justify-evenly">
			<div className="dropdown dropdown-bottom">
                
				<label tabIndex={0} className="btn m-1 text-xl btn-wide justify-center">
					{currentPose}
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
					aria-labelledby="dropdownMenuButton1"
				>
					{poseList.map((pose) => (
						<li onClick={() => setCurrentPose(pose)}>
							<div class="dropdown-item-container">
								<p className="dropdown-item-1">{pose}</p>
								<img
									src={poseImages[pose]}
									className="dropdown-img"
									alt={pose}
									width="32"
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
			{/* <div className="dropdown dropdown-container">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					id="pose-dropdown-btn"
					aria-expanded="false"
				>
					{currentPose}
				</button>
				<ul
					class="dropdown-menu dropdown-custom-menu"
					aria-labelledby="dropdownMenuButton1"
				>
					{poseList.map((pose) => (
						<li onClick={() => setCurrentPose(pose)}>
							<div class="dropdown-item-container">
								<p className="dropdown-item-1">{pose}</p>
								<img
									src={poseImages[pose]}
									className="dropdown-img"
								/>
							</div>
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
}
