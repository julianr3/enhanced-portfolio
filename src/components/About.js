import React from 'react';
import myPicture from '../images/Professional.jpg'

function About(props) {
    return (
        <article id="about-me">
        <h2>About Me</h2>
        <img id="photo" src={myPicture} alt="Photo of Julian"/>
        <p>
          My name is Julian Richardson and I'm from Pittsburgh, Pennsylvania. I have served in the United States Navy as
          an Aviation Electrican and now I am currently
          studying to become a software developer. I enjoy adventures and new things! I am very detail-oriented with an
          outgoing personality.
        </p>
      </article>
    );
}

export default About;