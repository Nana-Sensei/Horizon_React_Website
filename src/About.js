function About () {
  return (

    <div className="container-fluid about-pizza">
	
	<div className="row">

		<div className="col-md-1"></div>

		<div className="col-md-5 pizza-img">
			<img src="images/About.png" className="img-fluid"/>
		</div>

		<div className="col-md-5">
		  <h1 className="welcome">WELCOME TO THE TOASTED LIFE</h1>
		  <p className="about-text">PIZZAMANIA is the modern foodie’s answer to a wholesome, guilt-free and ridiculously 
			 delicious, hand-kneaded crust. The secret is the 80% hydration of our propietary 
			 special blend of Italian flour. This ensures a crisp, light, easy-to-digest, 
			 healthier and tastier base!
		  </p>

   	      <p className="about-text">Nourishing, wholesome and completely irresistible, PIZZAMANIA is on a mission to 
			 introduce our uniquely healthy yet undeniably tasty menu to our community of 
			 thinkers, doers, movers, shakers and lovers of life.
   	      </p>

		</div>

		<div className="col-md-1"></div>
		
	</div>
	
</div>
  )
}

export default About;