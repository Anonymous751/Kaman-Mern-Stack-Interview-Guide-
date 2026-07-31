import "../HomeComponents/HomeComponentCss/FloatingDeveloperBackground.css";

import {
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiNpm,
  SiVercel,
  SiRailway,
  SiVite,
  SiRedux,
  SiCloudinary,
} from "react-icons/si";

import {
  TbBrandFramerMotion,
  TbRoute,
} from "react-icons/tb";

import {
  BiLogoVisualStudio,
} from "react-icons/bi";

import {
  PiStackSimpleFill,
} from "react-icons/pi";


const icons = [
  { Icon: SiReact, animation: "rotateFloat", color: "#61DAFB" },
  { Icon: SiNodedotjs, animation: "floatY", color: "#339933" },
  { Icon: SiExpress, animation: "driftX", color: "#ffffff" },
  { Icon: SiMongodb, animation: "swayRotate", color: "#47A248" },
  { Icon: SiJavascript, animation: "bounceSmall", color: "#F7DF1E" },
  { Icon: SiHtml5, animation: "diagonal", color: "#E34F26" },
  { Icon: FaCss3Alt, animation: "wave", color: "#1572B6" },
  { Icon: SiBootstrap, animation: "diagonal", color: "#7952B3" },
  { Icon: SiTailwindcss, animation: "floatY", color: "#06B6D4" },
  { Icon: SiGit, animation: "rotateSlow", color: "#F05032" },
  { Icon: SiGithub, animation: "driftX", color: "#ffffff" },
  { Icon: SiDocker, animation: "wave", color: "#2496ED" },
  { Icon: SiPostman, animation: "floatY", color: "#FF6C37" },
  { Icon: SiNpm, animation: "rotateSmall", color: "#CB3837" },
  { Icon: SiVercel, animation: "fade", color: "#ffffff" },
  { Icon: SiRailway, animation: "driftX", color: "#8B5CF6" },
  { Icon: SiVite, animation: "balloon", color: "#646CFF" },
  { Icon: SiRedux, animation: "pulse", color: "#764ABC" },
  { Icon: TbRoute, animation: "floatY", color: "#3B82F6" },
  { Icon: SiCloudinary, animation: "wave", color: "#3448C5" },
  { Icon: TbBrandFramerMotion, animation: "pulse", color: "#FF0055" },
  { Icon: BiLogoVisualStudio, animation: "rotateFloat", color: "#007ACC" },
  { Icon: FaNodeJs, animation: "floatY", color: "#68A063" },
  { Icon: PiStackSimpleFill, animation: "spin", color: "#F97316" },
];

const positions = [
  { left: "5%", top: "8%" },
  { left: "18%", top: "22%" },
  { left: "30%", top: "12%" },
  { left: "42%", top: "35%" },
  { left: "58%", top: "18%" },
  { left: "72%", top: "10%" },
  { left: "86%", top: "28%" },
  { left: "10%", top: "48%" },
  { left: "24%", top: "65%" },
  { left: "38%", top: "55%" },
  { left: "55%", top: "72%" },
  { left: "70%", top: "60%" },
  { left: "88%", top: "78%" },
  { left: "15%", top: "88%" },
  { left: "34%", top: "90%" },
  { left: "50%", top: "85%" },
  { left: "66%", top: "92%" },
  { left: "82%", top: "86%" },
  { left: "92%", top: "50%" },
  { left: "6%", top: "72%" },
];


export default function FloatingDeveloperBackground() {

  return (

    <div className="developer-bg">


      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
      <div className="blob blob4" />


      {positions.map((position, index) => {

  const { Icon, animation, color } = icons[index % icons.length];

  return (
    <Icon
      key={index}
      className={`tech-icon ${animation}`}
      style={{
        left: position.left,
        top: position.top,
        color: color,
        fontSize: `${40 + (index % 5) * 10}px`,
        animationDuration: `${12 + (index % 8)}s`,
        animationDelay: `${index * 0.4}s`,
      }}
    />
  );

})}

    </div>

  );

}