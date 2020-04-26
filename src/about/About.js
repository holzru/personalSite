import React from "react";
import { Splash, NavBar, Footer } from "../shared";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main id="content">
        <Splash
          titleLines={["My Passions", "& Personality"]}
          imgUrl="/imgs/me-bg.jpg"
          imgAlt="pen and paper"
        />
        <div className="py-16">
          {/* --- Fun Facts --- */}
          <div className="outer-grid flex items-center flex-col-reverse lg:flex-row py-16">
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pr-16">
              <h2 className="text-4xl md:text-5xl pb-4">
                How did I get here?
              </h2>
              <p className="text-lg md:text-xl">
                After graduating from college with a chemistry degree, I decided to go work
                in the field to see what is was like before committing to graduate school.
                After a year I decided I wanted to do something else with my life.
                I took a cross-country roadtrip visiting friends along the way.
                After some wandering and soul searching I decided to pursue software
                enginnering. I attended the bootcamp App Academy, got hired by startup and
                have loved every minute.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/me.jpg"
                  alt="cats"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* --- Fun Facts --- */}
          {/* --- Kitties --- */}
          <div className="outer-grid bg-light-gray flex items-center flex-col lg:flex-row py-16">
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/cats.jpg"
                  alt="cats"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pl-16">
              <h2 className="text-4xl md:text-5xl pb-4">Cats Are Life</h2>
              <p className="text-lg md:text-xl">
                I'm the proud father of 2 cats, Lelu (long hair) & Waldo (short hair).
                A friend brought me Lelu after finding her wandering his neighorhood.
                Her long hair was dirt brown and matted, it took me nearly a month
                to restore her beautiful coat. I adopted Waldo late in his life, he had been a 
                neighborhood cat in my mom's neighborhood. One winter he fell very ill, I took
                him and nursed him back to health. He is now a happily retired house cat, who enjoys
                snuggles and lying in the sun.
              </p>
            </div>
          </div>
          {/* --- Kitties --- */}
          {/* --- Hobbies --- */}
          <div className="outer-grid flex items-center flex-col-reverse lg:flex-row py-16">
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pr-16">
              <h2 className="text-4xl md:text-5xl pb-4">
                What I do in my free time
              </h2>
              <p className="text-lg md:text-xl">
                I like spending time with family, we frequently go on vacations. You can see me
                putting my newphew to shame during our trip to Disneyland a few years ago. 
                I'm a fairly avid gamer, at the moment I am obsessed with a very niche game, I am a top 
                player and one of the founders of the game's number one guild. 
                Otherwise I like to hangout with friends, play basketball, and go to the movies. Though
                all of those have been put on hold by Corona. 
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/games.jpg"
                  alt="cats"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* --- Hobbies --- */}
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default About;
