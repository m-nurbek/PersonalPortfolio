import { TypeAnimation } from "react-type-animation";
import UniPhotoPng from "../assets/img/uni_photo.jpg";
import LabPhotoJPG from "../assets/img/lab_photo.jpg";
import StartupPhotoJPG from "../assets/img/startup_photo.jpg";
import { useEffect, useRef, useState} from "react";


function AboutMe() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const [isFirstVisible, setFirstVisible] = useState(false);
    const [isSecondVisible, setSecondVisible] = useState(false);
    const [isThirdVisible, setThirdVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
                if (entry.target === firstRef.current) {
                    setFirstVisible(entry.isIntersecting);
                } else if (entry.target === secondRef.current) {
                    setSecondVisible(entry.isIntersecting);
                } else if (entry.target === thirdRef.current) {
                    setThirdVisible(entry.isIntersecting);
                }
            });
        });

        if (firstRef.current) {
            observer.observe(firstRef.current);
        }
        if (secondRef.current) {
            observer.observe(secondRef.current);
        }
        if (thirdRef.current) {
            observer.observe(thirdRef.current);
        }

        return () => {
            if (firstRef.current) {
                observer.unobserve(firstRef.current);
            }
            if (secondRef.current) {
                observer.unobserve(secondRef.current);
            }
            if (thirdRef.current) {
                observer.unobserve(thirdRef.current);
            }
        }
    }, []);

    return (
        <>  
            <div ref={firstRef} className="aboutme_wrapper">
                {isFirstVisible ? <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "I'm a senior student of Engineering and Computer Science at NU",
                        700,
                        "I'm a senior student of Engineering and Computer Science at Nazarbayev University👨‍🎓",
                         // wait 1s before replacing "Mice" with "Hamsters"
                    ]}
                    wrapper="span"
                    speed={70}
                    className="text _1st"
                /> : <p></p>}
                <img src={UniPhotoPng} alt="photo in university" className="rightImage"/>
            </div>
            
            <div ref={secondRef} className="aboutme_wrapper">
                <img src={StartupPhotoJPG} alt="photo in university" className="leftImage"/>
                {isSecondVisible ?
                <TypeAnimation
                    sequence={[
                        "My journey has led me to co-found a tech startup, where I've been able to apply my knowledge and skills to real-world challenges",
                    ]}
                    wrapper="span"
                    speed={70}
                    className="text _2nd"
                /> : <p></p>}
            </div>
            
            <div ref={thirdRef} className="aboutme_wrapper">
                {isThirdVisible ?
                <TypeAnimation
                    sequence={[
                        "I thrive in fast-paced environments and love the thrill of turning ideas into reality",
                    ]}
                    wrapper="span"
                    speed={70}
                    className="text _3rd"
                /> : <p></p>}
                <img src={LabPhotoJPG} alt="photo in university" className="rightImage"/>
            </div>
        
        </>
    );
}

export default AboutMe;