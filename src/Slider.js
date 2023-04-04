import './horizon.css';
import IMG1 from './Images/View-6.jpg';
import IMG2 from './Images/View-1.jpg';
import IMG3 from './Images/View-5.jpg';

function Slider () {
  return (

    <div className="container-fluid">
	<div className="row">

		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner carousel-slides">

    <div className="carousel-item active">
      <img src={IMG1} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src={IMG2} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src={IMG3} className="d-block w-100" alt="..."/>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
		
	</div>
	
</div>
  )
}

export default Slider;