import './App.css';
import Hamburger from 'hamburger-react'
import React, {useState} from 'react'

function SideMenu({open}) {

  return(
    <div className={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a>
    </div>
  );
}


function HomePage() {

  let opened = "SideMenuOpen";
  
  return (
    <div className="HomePage">
      <SideMenu open={opened}/>
      <Hamburger color="#faead6" size={40} onToggle={toggled => {
        if (toggled) {
          opened = "SideMenuOpen";
        } else {
          opened ="SideMenuClosed";
        }
      }} />
        <div className="center--text">
          <h3 class="tag">&lt;Name&gt;</h3>
          <p>
            Hi, My name is
            <br/>
            <strong id="name">Lukas Anson.</strong>
            <br/>
            <strong>I build things for the web.</strong>
          </p>
          <h3 class="tag">&lt;Name/&gt;</h3>
        </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="AboutPage">
      <h3 class="tag">&lt;About&gt;</h3>
      <div className="about--content">
        <p>I grew up in a small town in Iowa and when I went to college I fell in love with
          design and creating beutiful web components. I currently attend The <strong>University of 
          California San Deigo</strong> majoring in Design and Interaction with a minor in Computer Science.
          In my free time, I build web apps in <strong>Javascript</strong> and <strong>React</strong> while 
          trying to futher my CSS skills. Take a look at some of my projects down below!
        </p>
      </div>
      <h3 class="tag">&lt;About/&gt;</h3>
    </div>
  );
}

function ProjectItem() {
  return (
    <div className="item">

    </div>
  );
}

function WorksPage() {
  return (
    <div className="WorksPage">
      <h3 class="tag">&lt;Projects&gt;</h3>
      <div className="works--grid">
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
      </div>
      <h3 class="tag">&lt;Projects/&gt;</h3>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="ContactPage">

    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>
      <WorksPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
