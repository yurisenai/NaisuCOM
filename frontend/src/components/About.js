import React from 'react';
import softwareImg from './assets/model1.png';
import founderImg from './assets/model2.png';
import contentImg from './assets/model3.png';

import './/styles/About.css'; // Import your CSS file

const About = () => {
  return (
      <div>
        <div className="about-container">
          <div className="words-container">
            <h1>The Story of NaisuXpress!</h1>
            <p>Welcome to NaisuXpress, where passion meets innovation in the vibrant universe of anime and manga. Born
              from a dream and sculpted by a love for storytelling, we are a sanctuary for creativity, a forge for
              digital artistry, and a launching pad for the next generation of artists and creators.</p>
            <h2>Our Genesis</h2>
            <p>The journey of NaisuXpress began with a simple yet profound desire: to transform the solitary spark of
              creativity into a blazing star. Our founder, inspired by a childhood immersed in the captivating
              worlds of manga and anime, recognized a gap in the creative landscape. Talented artists were
              struggling to find a platform that understood their passion, spoke their language, and had the tools
              they needed to bring their visions to life. NaisuXpress was created to bridge this gap, to be the
              beacon for those who dream in colors and think in stories.</p>
            <h2>Our Mission</h2>
            <p>At NaisuXpress, we believe in the power of storytelling and the magic of anime and manga. Our mission
              is to empower a community of artists, writers, and creators with the software tools they need to craft
              their stories, design their characters, and animate their dreams. We are more than a company; we are a
              collective of dreamers, artists, and fans dedicated to the art of anime and manga.</p>
            <p>Our platform is designed to be your digital atelier, equipped with state-of-the-art tools that cater
              specifically to the nuances of anime and manga creation. We provide a space where your art can
              flourish, your stories can resonate, and your visions can come alive.</p>
            <h2>What We Offer</h2>
            <p>NaisuXpress is not just about software tools; it’s about creating a community and a launching ground
              for artists. We offer a platform where up-and-coming creators can publish and promote their projects,
              gain visibility, attract funding, and gather a supportive community to push their creative boundaries.
              Our ecosystem is designed to support your journey from the first sketch to the final frame, ensuring
              your project not only reaches but captivates audiences worldwide.</p>
            <h2>Join Our Universe</h2>
            <p>Whether you’re sketching your first character or are ready to animate your latest series, NaisuXpress
              is here to ensure your creative journey is successful. We invite you to join our community, explore
              our tools, and elevate your project. With NaisuXpress, bring your unique vision to the global stage,
              and let’s create worlds, spin tales, and inspire the next generation of anime and manga enthusiasts
              together.</p>
            <p>Together, we’re not just making art; we’re setting the imagination free, crafting stories that
              resonate, and building the future of anime and manga. Welcome to NaisuXpress – where your dreams get
              animated.</p>

          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-image">
              <img src={softwareImg} alt="Yuri Beneche"/>
            </div>
            <h2>Lead Software Developer<br/>Yuri Beneche</h2>
            <p>With a mind that blends artistic vision with meticulous coding precision, Yuri Beneche is the mastermind
              behind our software. Their passion for anime and manga transcends the digital realm, infusing our tools
              with innovation and user-centric design..</p>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={founderImg} alt="Yuri Beneche"/>
            </div>
            <h2>Founder and CEO<br/>Yuri Beneche</h2>
            <p>Yuri Beneche embodies the spirit of NaisuXpress, turning a lifelong fascination with anime and manga into
              a platform that empowers artists worldwide. Their journey, fueled by the desire to provide resources and
              support lacking in their formative years, has shaped our mission: to unveil the global stage for emerging
              talents in anime and manga.</p>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={contentImg} alt="Yuri Beneche"/>
            </div>
            <h2>Content and Marketing Lead<br/>Yuri Beneche</h2>
            <p>At the heart of NaisuXpress’s voice is Yuri Beneche. With a flair for captivating storytelling and a
              strategic mindset, they’ve elevated our brand to resonate with artists and anime enthusiasts alike. Yuri
              not only promotes our platform but also champions the success stories of our community.</p>
          </div>
        </div>
      </div>

  );
}

export default About;
