import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import {useState} from 'react';

function App() {
  const [page,setPage]=useState("About")
  function renderPage(){
    if (page=="About"){
      return <About/>
    }
    if (page=="Work"){
      return <Work/>
    }
    if (page=="Contact"){
      return <Contact/>
    }
  }
  return (
    <body>
  <header id="banner">
    <h1>Julian Richardson</h1>
    <nav>
      <ul>
        <li onClick={()=>{setPage("About")}} ><a href="#about-me">About Me</a></li>
        <li onClick={()=>{setPage("Work")}}><a href="#work">Work</a></li>
        <li onClick={()=>{setPage("Contact")}}><a href="#contact-me">Contact Me</a></li>
        <li><a href="https://drive.google.com/file/d/1yetcovOAnjX5_K9jydt-4CYOqfKQ_Y8C/view?usp=sharing">Resume</a></li>
      </ul>
    </nav>
    <section>
    </section>
  </header>
  <main>
    <section>
      
  {renderPage()}   
      
    </section>
  </main>
  <footer>
  <div><a href="https://github.com/julianr3">Visit my Github Profile!</a></div>
  </footer>
</body>
  );
}

export default App;
