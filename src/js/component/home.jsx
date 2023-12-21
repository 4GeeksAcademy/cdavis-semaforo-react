import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [on, setOn] = useState("bg-danger");
	const [active, setActive] = useState("false");

	useEffect(() => {
		if(active){
			const interval = setInterval(() => {
				if(on == "bg-danger"){
					setOn("bg-warning")
				}else if(on == "bg-warning"){
					setOn("bg-success")
				}else if(on == "bg-success"){
					setOn("bg-danger")
				}
			}, 1000)
			return () => clearInterval(interval)

	
		}
	}, [active, on])

	
	return (
		<div className="container d-flex justify-content-center">
			<div className="row bg-dark p-2">
				
					<div className={`bg-success ${on == "bg-success" ? "lights-on" : " "} lights align-top`} onClick={() => setOn(`bg-success`)}></div>
				
					<div className={`bg-warning ${on == "bg-warning" ? "lights-on" : " "} lights align-middle`} onClick={() => setOn(`bg-warning`)}></div>
				
					<div className={`bg-danger ${on == "bg-danger" ? "lights-on" : " "} lights align-bottom`} onClick={() => setOn(`bg-danger`)}></div>

					<button onClick={() => setActive(!active)} type="button" className="btn btn-secondary">Cambiar</button>
			</div>

			

			

		</div>
		
	);
};

export default Home;
