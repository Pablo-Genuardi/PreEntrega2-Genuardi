
import { Link } from "react-router-dom"



export default function Categories() {
  return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/1"}>Modular</Link></li>
                <li><Link className="dropdown-item" to={"/category/2"}>Synths</Link></li>
                <li><Link className="dropdown-item" to={"/category/3"}>Drum Machines</Link></li>
                <li><Link className="dropdown-item" to={"/category/4"}>Controllers</Link></li>
                <li><a className="dropdown-item" href="#">Pedals + FX</a></li>
                <li><a className="dropdown-item" href="#">Pro Audio</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Used deparment</a></li>
            </ul>
        </li>
    )
}
