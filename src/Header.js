import Logo from './Images/HRZN-03.png'

function Header () {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-home">
 <a className="navbar-brand mania-logo" href="#"> <img src={Logo} style={{width:'200px'}}  className="img-fluid"></img> </a>

  <ul className="nav justify-content">
  	
  	<li className="nav-item">
    	<a className="nav-link active" href="#">Home</a>
  	</li>
  	
  	<li className="nav-item">
    	<a className="nav-link" href="#">About</a>
  	</li>
  	
  	<li className="nav-item">
    	<a className="nav-link" href="#">Menu</a>
  	</li>
  	
  	<li className="nav-item">
    	<a className="nav-link">Contact</a>
  	</li>
	
	</ul>
</nav>

  );
}

export default Header;

