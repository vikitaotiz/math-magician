import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
	  <h3 className="title"><Link to="/">Math Magician</Link></h3>
		<div>
		  <ul className="links">
			  <li><Link to="/">Home |</Link></li>
			  <li><Link to="/calculator">Calculator |</Link></li>
			  <li><Link to="/quotes">Quote</Link></li>
		  </ul>
	  </div>
  </div>
);

export default Navbar;
