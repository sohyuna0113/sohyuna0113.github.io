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
          효율적인 코드, 유지보수가 쉬운 코드를 작성할 수 있는 개발자가 되기 위해 노력합니다.
          다방면으로 영역을 확장시킬 수 있는 코더가 되기 위하여 인터넷 강의와 개발책들을 적극적으로 읽고 기술 블로그를 쓰고 있습니다. 단순히 개발 언어를 공부하는 것이 아닌 소프트웨어와 컴퓨터 과학의 기본 개념을 익히기 위하여 방송통신대학교 컴퓨터 과학과에 입학하여 운영체제, 컴파일러 구성, 데이터베이스 시스템과 같은 과목을 통해 기본을 다지고 있습니다. 또한 코드살롱, 모각코와 같은 소모임을 적극적으로 참여해 타 분야 개발자들과의 교류를 중시하고 다양한 개발 분야에 대한 관심을 가지고 있습니다. XD, 스케치와 같은 디자인 툴로 기초 디자인 과정을 잡고, HTML/CSS로 레이아웃을 구성하며 JavaScript로 동적인 효과를 구현할 수 있습니다. 더 나아가 React와 Vue.js로 프론트엔드의 프레임워크를 구축하며, JAVA, Spring을 이용하여 MVC 기반 서버를 구축할 수 있습니다
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
