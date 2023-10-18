import Nav from "./nav/nav";
import Main from "./main/main";
import './top.css'
export default function Top () {
    return (
        <div className="Top">
            <div className="wrap"> 
            <Nav />
            <Main />
            </div>
        </div>
    )
}