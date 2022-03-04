import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div id="Resume" className="w-1/2 mt-64 text-justify ml-auto mr-60">
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">한국방송통신대학교</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              컴퓨터과학과
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • March 2021 - Feb 2023
            </code>
            <br />
            <br />
            <code className="text-blue_vs">패션공과대학교</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              International Trade & Marketing (BS)
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Jewelry Design (AAS)
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • August 2012 - May 2017
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">(주)노블전자지도</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Yeongdeungpo - Seoul, Korea{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• June 2021 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Framework7 프로그레시브 프레임워크 기반 Vue.js 프론트 웹 기능 개발.
              <br />• 맵박스 엔진 벡터맵으로 지자체 지도 개발 및 서버 관리(설치 및 배포)등의 업무.
              <br />• 공공 데이터 api를 활용을 위한 Ajax로 비동기 XML 데이터 파싱.
              <br />• 전자정부 프레임워크 백엔드 소스 관리 및 유지보수.
            </code>
            <br />
            <br />
            <code className="text-blue_vs">(주)스노우볼</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Gangnam - Seoul, Korea{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Dec 2020 - June 2021</code>
            <br />
            <code className="text-sm">
              <br />• React Native 앱 개발부 근무
              <br />• 파이어베이스를 이용한 데이터베이스 설계 및 인터페이스 구축.
              <br />• 회원가입, OAuth2 로그인, 사용자 프로필, 네이티브 하드웨어 연동, 다이어리 쓰기 및 소셜 커뮤니티, 퍼블리싱 작업.
              <br />• Naive Bayes 알고리즘을 이용한 자연어 분석과 Microsoft Speech-To-Text 활용 업무 담당.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• HTML, CSS, JavaScript를 활용한 인터랙티브 웹 개발.
              <br />• ECMA6 문법 이해와 AJAX를 이용한 서버 통신 기술.
              <br />• 컴포넌트 기반의 가상돔을 사용하는 리액트 기술.
              <br />• 자바스크립트 프레임워크인 Vue를 이용한 벡터맥 기능 개발.
              <br />• 객체 지향 언어인 JAVA를 이해, 오라클 데이터베이스를 ORM 프레임워크인 MYBATIS로 연동하는 기술.
              <br />• MAVEN 기반의 SPRING 프레임워크를 이해하며, 화면처리, 데이터처리, 공통 컴포넌트 사용을 실무에 적용할 수 있도록 프로젝트 진행.
              <br />• Apache Tomcat와 Firebase를 통한 서버 배포.
              <br />• 파이썬을 통해 웹 크롤울링 및 응용 소프트웨어 기술.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
