import * as React from "react";
import { motion } from "framer-motion";

export default function Developer(props) {
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
          animate={props.click ? assignAnimation(0, "#00ffff").animate : ""}
          transition={assignAnimation(5, "#00ffff").transition}
          d="M48.617 52.613H21.7v-37.6h26.917v5.371H54v26.857h-5.383v5.372ZM71.9 3"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#fc1d1de1").animate : ""}
          transition={assignAnimation(5.2, "#fc1d1de1").transition}
          d="M88.025 52.625h-21.5V47.25H61.15V31.125h5.375V25.75h21.5v5.375H93.4v10.75H71.9v5.375h16.125v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#ffd903e1").animate : ""}
          transition={assignAnimation(5.4, "#ffd903e1").transition}
          d="M121.871 52.625h-10.75V47.25h10.75v5.375ZM111.121 47.25h-5.375v-5.375h-5.375V25.75h10.75v21.5ZM127.246 47.25h-5.375v-21.5h10.75v16.125h-5.375v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#fc1d1de1").animate : ""}
          transition={assignAnimation(5.8, "#fc1d1de1").transition}
          d="M166.467 52.625h-21.5V47.25h-5.375V31.125h5.375V25.75h21.5v5.375h5.375v10.75h-21.5v5.375h16.125v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#07cf00").animate : ""}
          transition={assignAnimation(6, "#07cf00").transition}
          d="M189.563 52.625h-10.75v-32.25h10.75v32.25Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#ffd903e1").animate : ""}
          transition={assignAnimation(6.2, "#ffd903e1").transition}
          d="M223.408 52.625h-21.5V47.25h-5.375V31.125h5.375V25.75h21.5v5.375h5.375V47.25h-5.375v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#00ffff").animate : ""}
          transition={assignAnimation(6.5, "#00ffff").transition}
          d="M246.504 58h-10.75V25.75h26.875v5.375h5.375v10.75h-5.375v5.375h-16.125V58Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#07cf00").animate : ""}
          transition={assignAnimation(6.7, "#07cf00").transition}
          d="M301.85 52.625h-21.5V47.25h-5.375V31.125h5.375V25.75h21.5v5.375h5.375v10.75h-21.5v5.375h16.125v5.375Z"
        />
        <motion.path
          animate={props.click ? assignAnimation(0, "#fc1d1de1").animate : ""}
          transition={assignAnimation(6.9, "#fc1d1de1").transition}
          d="M325.945 52.625h-10.75V25.75h5.375v5.375h5.375V25.75h16.125v5.375h-10.75V36.5h-5.375v16.125Z"
        />
      </g>
    </svg>
  );
}
