import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Expertise from './Components/Expertise';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Profiles from './Components/Profiles';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Expertise/>
      <Skills/>
      <Experience/>
      <Education/>
      <Profiles/>
     
    </div>
  );
}

export default App;
