import Card from "./Card";
import PerfeLogo from "/PerfeWhite.png";
import AcademicaLogo from "/AcademicaLogo.png";
import AstanaHubLogo from "/AstanaHubLogo.png";
import FMALogo from "/FMALogo.png";



function WorkExperience() {
    return (
        <>
            <div className="cards_wrapper">
                <div className="cards_wrapper_column">
                    <Card h1="perfe" p="co-founder of web-development agency" year="now" className="rotate_back" cover="perfeCover">
                        <img src={PerfeLogo} alt="Perfe Logo" />
                    </Card>
                    <Card h1="academica.kz" p="python and frontend tutor" year="2023" className="rotate_back" cover="academicaCover">
                        <img src={AcademicaLogo} alt="Academica Logo" />
                    </Card>
                </div>
                <div className="cards_wrapper_column">
                    <Card h1="financial Monitoring Agency" p="AFM backend intern" year="now" cover="fmaCover">
                        <img src={FMALogo} alt="FMA Logo" />
                    </Card>
                    <Card h1="astana hub" p="“Digital Bridge” intern" year="2022" cover="astanahubCover">
                        <img src={AstanaHubLogo} alt="AstanaHub Logo" />
                    </Card>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;