import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [on, setOn] = useState("bg-danger");

	
	return (
		<div className="container d-flex justify-content-center">
			<div className="row bg-dark p-2">
				
					<div className={`bg-success ${on == "bg-success" ? "lights-on" : " "} lights align-top`} onClick={() => setOn(`bg-success`)}></div>
				
					<div className={`bg-warning ${on == "bg-warning" ? "lights-on" : " "} lights align-middle`} onClick={() => setOn(`bg-warning`)}></div>
				
					<div className={`bg-danger ${on == "bg-danger" ? "lights-on" : " "} lights align-bottom`} onClick={() => setOn(`bg-danger`)}></div>
					
					<button type="button" class="btn btn-secondary">Cambiar</button>
			</div>

			

			

		</div>
		
	);
};

export default Home;
