import data from "./data"
import Item from "./item/item"
import './bottom.css'

export default function Bottom() {
    return (
        <div className="bottom">
            <div className="bottom_name">Explore Nearby</div>
            <div className="bottom_nearby">
                {data.map( (item,id) => (
                  <Item img={item.img} location={item.location} time={item.time} key={id} />
                ))}     
            </div>
        </div>
    )
}