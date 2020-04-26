import React from "react";

import Project from "./Project";
import { Splash, NavBar, Footer } from "../shared";

const DESCRIPTIONS = {
  CHAT_APP: `
    Next2Me is a startup idea I've been working on with a couple friends. I recently quit my job, which gave my the opportunity
    to jump in head first and take the lead on the tech side.
    <br/><br/>
    We have two server projects, a GraphQL Rest API and a WebSocket messaging API .
    Both share a custom NPM package that allows them to connect to the same MongoDB database.
    We initially wanted to host on Heroku because of simplicity, but soon realized even their professional plans were tapping out at just a few hundred simultaneous WebSocket connnections.
    That lead us to AWS, where I took on the task of deploying everything to EC2 instances.
    Once successfully deployed, we were able to make improvements such as: disabling Node garbage collection and running it at our determined intervals and
    selecting hardware specialized for network connections for our messaging server. After that, we were able to hit 2000+ simultaneous connections pretty comfortably while paying the same price we were on Heroku
    (check out this <a class="link" href="https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/">article</a> to see most of what we did).
    <br/><br/>
    The app itself is written in React Native and is released on both the Android and iOS stores.
    We've taken on the approach of using <a class="link" href="https://reactjs.org/docs/hooks-intro.html">Hooks</a> and all functional components.
    This was an uneasy transition for those of us that had used React before, but we all soon came to love the elegance of this method.
    Another interesting approach we took was to create our own <a class="link" href="https://tailwindcss.com/">Tailwind.css</a> package for React Native.
    This is still hotly debated on the team, but I personally love the atomic approach to CSS.
  `,
};

const Projects = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main id="content">
        <Splash
          titleLines={["What I've Been", "Working On"]}
          imgUrl="/imgs/projects-bg.jpg"
          imgAlt="person coding"
        />
        <div>
          <Project
            name="Next2Me"
            techs={[
              "AWS",
              "MongoDB",
              "WebSocket",
              "Express",
              "Node",
              "GraphQL",
              "React Native"
            ]}
            description={DESCRIPTIONS.CHAT_APP}
            link="http://www.next2me.org"
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 300, maxWidth: 300 }}
            >
              <img
                src="/imgs/chat-app-screenshot.png"
                alt="chat app"
                className="absolute bottom-0 right-0"
                style={{
                  transform: "rotate(10deg) translate(10px, 200px)"
                }}
              />
            </div>
          </Project>
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Projects;
