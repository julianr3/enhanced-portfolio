import React from 'react';
import horiseon from '../images/HoriseonWebpage.jpg';
import scheduler from '../images/workdayscheduler.jpg';
import dashboard from '../images/weatherdash.jpg';
import nostalgia from '../images/nostalgiatunes1.jpg';
import notes from '../images/note-taker.jpg';

function Work(props) {
    return (
        <article id="work">
        <h2>Work</h2>
        <section id="workdesk-section">
          <a href="https://julianr3.github.io/Horiseon-Accessibility-Refresher/">
            <img src={horiseon} alt="Horiseon Project"/>
            <h3>Horiseon Refresh
            </h3>
          </a>
          <a href="https://github.com/julianr3/workday-schedule">Workday Schedule Repository CLICK HERE!</a>
          <a href="https://julianr3.github.io/workday-schedule/">
            <img src={scheduler} alt="workday scheduler"/>
          </a>
          <a href="https://github.com/julianr3/weather-dashboard">Weather Dashboard Repository CLICK HERE!</a>
          <a href="https://julianr3.github.io/weather-dashboard/">
            <img src={dashboard} alt="weather dashbboard"/>
          </a>
          <a href="https://github.com/julianr3/nostalgia-tunes">Nostalgia Tunes Repository CLICK HERE!</a>
          <a href="https://lit-brook-35897.herokuapp.com/">
            <img src={nostalgia} alt="nostalgia tunes"/>
          </a>
          <a href="https://github.com/julianr3/note-taker">Nostalgia Tunes Repository CLICK HERE!</a>
          <a href="https://lit-brook-35897.herokuapp.com/">
            <img src={notes} alt="nostalgia tunes"/>
          </a>
        </section>
      </article>
    );
}

export default Work;