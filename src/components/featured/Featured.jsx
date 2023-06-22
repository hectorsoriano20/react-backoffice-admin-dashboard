import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Donantes activos</h1>
                <MoreVertOutlinedIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} styles={buildStyles({pathColor: '#ff6d67', textColor: '#ff6d67'})}/>
                </div>
                {/* <p className="title">Capacidad de Pintas</p>
                <p className="amount">100</p> */}
            </div>
        </div>
    )
}

export default Featured