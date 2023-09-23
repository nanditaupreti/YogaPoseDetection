

import { tutorials, fixCamera } from '../../utils/data'

export default function Tutorials() {
	return (
		<div className="flex flex-col container mx-auto h-screen px-48 py-32 bg-black-300">
			<h1 className="text-6xl">Basic Tutorials</h1>
			<div className="tutorials-content-container">
				{tutorials.map((tutorial) => (
					<p className="tutorials-content">{tutorial}</p>
				))}
			</div>
			<h1 className="text-6xl">Camera Not Working?</h1>
			<div className="tutorials-content-container">
				{fixCamera.map((points) => (
					<p className="tutorials-content">{points}</p>
				))}
			</div>
		</div>
	);
}