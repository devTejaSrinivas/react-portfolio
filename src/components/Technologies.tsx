import React from "react";
import { DiGit, DiMongodb, DiWindows } from "react-icons/di";
import {
  FaGit,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJupyter } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tech Stack </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbFileTypeSql className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiGit className="text-7xl text-red-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FcLinux className="text-7xl text-gray-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJupyter className="text-7xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsFill className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiWindows className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
