import { FaAngular, FaGithub, FaPython, FaReact } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import {
  IoLogoElectron,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io5";
import { SiFlask, SiJava, SiNestjs, SiTypescript } from "react-icons/si";
import { useThemedClasses } from "../../../hooks/useClasses";
import Header from "../../atoms/header/header";
import Stack from "../../molecules/stack/stack";
import "./tech.scss";

export const Tech = () => {
  const className = useThemedClasses({}, "tech");
  return (
    <div className={className}>
      <div className="tech-header">
        <Header dimension="small">
          ¿Eres programador?{" "}
          <FaGithub
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://github.com/mdjfs", "_blank");
            }}
          />
        </Header>
        <Header dimension="large">Stack de tecnologías</Header>
      </div>
      <div className="stacks">
        <Stack icon={<FaReact color="#61dafb" />}>React & React Native</Stack>
        <Stack icon={<IoLogoIonic color="#4a8af9" />}>Ionic</Stack>
        <Stack icon={<SiFlask />}>Flask</Stack>
        <Stack icon={<IoLogoNodejs color="#689f63" />}>Node.js</Stack>
        <Stack icon={<SiNestjs color="#e0234e" />}>NestJS</Stack>
        <Stack icon={<FaAngular color="#c3002f" />}>Angular</Stack>
        <Stack icon={<IoLogoJavascript color="#f7df1e" />}>JavaScript</Stack>
        <Stack icon={<SiTypescript color="#2d79c7" />}>TypeScript</Stack>
        <Stack icon={<FaPython color="#346998" />}>Python</Stack>
        <Stack icon={<SiJava color="#e76f00" />}>Java</Stack>
      </div>
    </div>
  );
};

export default Tech;
