import './item.css'

export default function Item({img , location , time}) {
    return(
        <div className="item">
            <div className="item_img">
                <img src={img} alt="loading" />
            </div>
            <div className="item_infor">
                <div className="item_infor-name">{location}</div>
                <div className="item_infor-time">{time}</div>
            </div>
        </div>
    )
}