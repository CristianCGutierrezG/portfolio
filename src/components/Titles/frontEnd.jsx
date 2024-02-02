import * as React from "react";
import { motion } from "framer-motion";

export default function FrontEnd(props) {
  function assignAnimation(delay, newColor) {
    let style = {
      animate: {
        scale: [1, 1.5, 1],
        fill: ["#000000", newColor, newColor],
      },
      transition: {
        duration: 0.5,
        delay: delay,
      },
    };

    return style;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        isolation: "isolate",
        ...props.style,
      }}
      viewBox="0 0 364 73"
      width="364pt"
      height="73pt"
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h364v73H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" className="letters">
        <motion.path
          animate={props.click ? assignAnimation(0, "#07cf00").animate : ""}
          transition={assignAnimation(2.3, "#07cf00").transition}
          d="M47.415 55.313h-10.75V17.688h32.25v5.375h-21.5v10.75H63.54v5.375H47.415v16.125Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#ffd903e1").animate : ""}
          transition={assignAnimation(2.8, "#ffd903e1").transition}
          d="M86.636 55.313h-10.75V28.438h5.375v5.375h5.375v-5.375h16.125v5.375h-10.75v5.375h-5.375v16.125Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#fc1d1de1").animate : ""}
          transition={assignAnimation(3.3, "#fc1d1de1").transition}
          d="M136.606 55.313h-21.5v-5.375h-5.375V33.813h5.375v-5.375h21.5v5.375h5.375v16.125h-5.375v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#00ffff").animate : ""}
          transition={assignAnimation(3.8, "#00ffff").transition}
          d="M154.327 55.313h-5.375V28.438h21.5v5.375h5.375v21.5h-10.75v-21.5h-10.75v21.5Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#ffd903e1").animate : ""}
          transition={assignAnimation(4.1, "#ffd903e1").transition}
          d="M204.298 55.313h-10.75V39.188h-10.75v-5.375h10.75v-5.375h10.75v5.375h10.75v5.375h-10.75v16.125Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#07cf00").animate : ""}
          transition={assignAnimation(4.3, "#07cf00").transition}
          d="M254.269 55.313h-32.25V17.688h32.25v5.375h-21.5v10.75h16.125v5.375h-16.125v10.75h21.5v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#fc1d1de1").animate : ""}
          transition={assignAnimation(4.5, "#fc1d1de1").transition}
          d="M266.614 55.313h-5.375V28.438h21.5v5.375h5.375v21.5h-10.75v-21.5h-10.75v21.5Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#00ffff").animate : ""}
          transition={assignAnimation(4.8, "#00ffff").transition}
          d="M327.335 55.313H300.46v-5.375h-5.375v-10.75h5.375v-5.375h16.125v-10.75h10.75v32.25Z"
        />
      </g>
    </svg>
  );
}
