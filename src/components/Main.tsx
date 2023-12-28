import { animated, useSpring } from "react-spring";
import Photo from "../assets/img/photo.png";
import { useEffect, useState } from "react";

function Main() {
    const [xy, setXY] = useState([0, 0]);
    const props = useSpring({ xy });

    function handleMouseMove(event: { clientX: number; clientY: number; }) {
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        
        setXY([
            (event.clientX - middleX) / middleX  * 10, 
            (event.clientY - middleY) / middleY  * 1
        ]);
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    
    return (
        <main>
            <animated.div className='photo' style={window.innerWidth > 1400 ? {transform: props.xy.interpolate((x, y) => `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg)`)} : {}}>
                <div className='photo'>
                    <img src={Photo} alt="photo" />
                </div>
            </animated.div>
            <div className='info'>
                <animated.div style={window.innerWidth > 1400 ? {transform: props.xy.interpolate((x, y) => `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg)`)}: {}}>
                <h2>Hi👋 i'm</h2>
                <h1 style={{whiteSpace: "nowrap"}}>Nurbek Malikov</h1>
                <p>Crafting the unseen architecture of innovation as a backend developer at a dynamic startup</p>
                <button>Get in touch</button>
                </animated.div>
            </div>
        </main>
    );
}

export default Main;