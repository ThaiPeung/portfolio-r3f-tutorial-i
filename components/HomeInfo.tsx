import Link from "next/link";
import React from "react";
import { arrow } from "../public/assets/icons";

type InfoBoxType = {
  text: string;
  link: string;
  btnText: string;
};

const InfoBox = ({ text, link, btnText }: InfoBoxType) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link href={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img />
      </Link>
    </div>
  );
};

type RenderContentType = {
  [key: number]: React.ReactElement;
};

const renderContent: RenderContentType = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Thai</span> 🖥️
      <br />A Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Work with 2 companies and picked up many skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple project to success over the years"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for new dev? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo: React.FC<{
  currentStage: number;
}> = (props) => {
  return renderContent[props.currentStage] || null;
};

export default HomeInfo;
