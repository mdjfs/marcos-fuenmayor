import { FC } from "react";
import { useThemedClasses } from "../../../hooks/useClasses";
import { TimeLineProps } from "./timeline.interfaces";
import "./timeline.scss";

export const Timeline: FC<TimeLineProps> = (props) => {
  const classes = useThemedClasses(props, "timeline");

  return (
    <div className={classes}>
      {props.lines.map(({ icon, content }, i) => (
        <>
          <div className="line">
            <div className="icon">{icon}</div>
            <div className="content">{content}</div>
          </div>
          {i + 1 < props.lines.length && <span className="separator" />}
        </>
      ))}
    </div>
  );
};

export default Timeline;
