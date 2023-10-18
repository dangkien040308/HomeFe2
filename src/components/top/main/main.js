import {faBed, faHouse, faLocationDot , faMoneyBill} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './main.css'
export default function Main() {
    return (
        <div className="main">
           <div className="main_content">
              <h1>Your Dream House is just a click away</h1>
              <div>Stay in the loop with personalized alerts on new listings that match your criteria. Never miss out
              on your dream home again.</div>
              <button className="main_content_btn">Get Started</button>
           </div>

           <div className="main_block">
             <div className="main_block_name">
               Find a home that suits your budget
             </div>

             <div className="main_block_location main_block-input">
               <FontAwesomeIcon icon={faLocationDot} />
               <input type = "text" placeholder = "Search by city" />
             </div> 

             <div className="main_block_neighbour main_block-input">
               <FontAwesomeIcon icon={faHouse} />
               <input type = "text" placeholder = "Search by Neighborhood" />
             </div>

             <div className="main_block_wrap">
                <div className="main_block_budget main_block-input2">
                  <FontAwesomeIcon icon={faMoneyBill} />
                  <input type = "text" placeholder = "Select the budget" />
                </div>
                <div className="main_block_room main_block-input2">
                  <FontAwesomeIcon icon={faBed} />
                  <input type = "text" placeholder = "Number of rooms" />
                </div>
             </div>
             <div className="main_block_btn">Search properties</div> 
           </div>

        </div>
    )
}