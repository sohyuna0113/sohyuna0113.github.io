import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/PythonLogo.png");
const ReactLogo = require("../assets/ReactLogo.png");
const TypescriptLogo = require("../assets/TypescriptLogo.png");
const JsLogo = require("../assets/JsLogo.png");
const NextLogo = require("../assets/NextLogo.png");
const TailwindLogo = require("../assets/TailwindLogo.png");
const SqlLogo = require("../assets/SqlLogo.png");
const ReduxLogo = require("../assets/ReduxLogo.png");
const FirebaseLogo = require("../assets/FirebaseLogo.png");
const MongoDBLogo = require("../assets/MongoDBLogo.png");
const NodeJSLogo = require("../assets/NodeJSLogo.png");
const DockerLogo = require("../assets/DockerLogo.png");
const ufo = require("../assets/ufoHome.png")

const About = () => {
  return (
    <div
      id="About"
      className="mx-60 items-center justify-center w-1/2 text-justify"
    >
      <div className="ufo">
        <img src={ufo} alt="ufo"></img>
      </div>
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            As a seasoned Vue front-end developer, I excel at crafting clean and maintainable code that not only meets the project's requirements but also ensures long-term scalability and efficiency. My agile development approach allows me to adapt swiftly to changing project demands, ensuring that I can deliver high-quality results on time. I'm well-versed in the CI/CD process, enabling seamless integration and continuous delivery of code changes. My effective communication skills are evident as I collaborate seamlessly with my team on Slack, ensuring that everyone is aligned and informed throughout the development cycle. Additionally, my proficiency in Git CLI, both on GitLab and GitHub, ensures efficient version control and collaboration, making me a valuable asset to any development team.
          </code>
          <br />
          <br />
          <code>Tech Stack:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            {/* <div className='flex flex-row col-start-1 mb-3'><code className='text-[#e6f1ff] underline'>Programming Languages</code></div>
            <div className='flex flex-row col-start-2 mb-3'><code className='text-[#e6f1ff] underline'>Libraries</code></div>
            <div className='flex flex-row col-start-3 mb-3'><code className='text-[#e6f1ff] underline'>Frameworks</code></div> */}
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={NextLogo}
                alt="Next Logo"
                className="h-5 mr-4 ml-3 text-yellow_vs"
              />
              <code>Next.js</code>
            </div>
            <div className="flex flex-row col-start-3 mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 mr-3 ml-3 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={TypescriptLogo}
                alt="Typescript Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>TypeScript</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 mr-4 ml-3 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row col-start-3 mb-3">
              <img
                src={ReduxLogo}
                alt="Redux Logo"
                className="h-5 mr-2 ml-3 text-yellow_vs"
              />
              <code>Redux</code>
            </div>
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 mr-4 ml-3 text-yellow_vs"
              />
              <code>Python</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase Logo"
                className="h-5 mr-2  ml-3 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>
            <div className="flex flex-row col-start-3 mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 mr-2  ml-3 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 mr-2 ml-3 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 mr-2 ml-3 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row col-start-3 mb-3">
              <img
                src={DockerLogo}
                alt="MongoDB Logo"
                className="h-5 mr-2  ml-3 text-yellow_vs"
              />
              <code>Docker</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
