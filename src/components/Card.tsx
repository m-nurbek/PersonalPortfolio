import { ReactNode } from "react";
import GithubSVG from "../assets/svg/Github";


interface Props {
    children?: ReactNode; // should be the svg component
    cover?: string;
    h1?: string;
    p?: string;
    year?: string;
    className?: string;
}

function Card({children, cover, h1, p, year, className} : Props) {
    const classStr = className ? ' ' + className : '';
    return (
    <>
        <div className={'card' + classStr}>
            <div className={cover ? cover : "cover"}>{children ? children : <GithubSVG />}</div>
            <h1>{h1 ? h1 : "instagram 📸"}</h1>
            <div className="caption">
                <p style={{whiteSpace: "wrap", width: "fit-content"}}>{p ? p :"Senior product designer"}</p>
                <span style={{whiteSpace: "nowrap"}}>/ {year ? year : 'now'}</span>
            </div>
        </div>
    </>
    );
}

export default Card;