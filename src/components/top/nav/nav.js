import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { faUser ,faHeart } from "@fortawesome/free-regular-svg-icons"
import './nav.css'
export default function Nav() {
    return (
        <div className="nav">
            <div className="nav_left">
                <span>Dihome</span>
                <span>Home</span>
                <span>ForOwners</span>
                <span>About</span>
                <span>Blog</span>
            </div>
            <div className="nav_right">
                <div className="nav_right_search">  
                  <input type="text" placeholder="Search" />
                  <button className="nav_right_btn"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                </div>
                <span><FontAwesomeIcon icon={faUser} /> </span>
                <span><FontAwesomeIcon icon={faHeart}/> </span>
            </div>
        </div>
    )
}