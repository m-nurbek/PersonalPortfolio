import './assets/css/style.scss';

import NavBar from './components/NavBar';
import Main from './components/Main';
import WorkExperience from './components/WorkExperience';
// import CurvesSVG from './assets/svg/CurvesSVG';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div id="page">
        <NavBar />
        <Main />
        <AboutMe />
        <WorkExperience />
        <Footer />
      </div>
    </>
  );
}

export default App;
