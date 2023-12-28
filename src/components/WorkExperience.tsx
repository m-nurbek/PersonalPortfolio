import Card from "./Card";


function WorkExperience() {
    return (
        <>
            <div className="cards_wrapper">
                <div className="cards_wrapper_column">
                    <Card h1="perfe" p="co-founder of web-development agency" year="now" className="rotate_back"></Card>
                    <Card h1="academica.kz" p="python and frontend tutor" year="2023" className="rotate_back"></Card>
                </div>
                <div className="cards_wrapper_column">
                    <Card h1="agency of financial monitoring" p="AFM backend intern" year="now"></Card>
                    <Card h1="astana hub" p="“Digital Bridge” intern" year="2022"></Card>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;