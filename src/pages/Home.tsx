import React from "react";
import fotoCurriculo from "../assets/FotoCurriculo.jpg";
import { BsInstagram, BsJournalText } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex-[1_1_80%] text-center min-h-[100vh] items-center text-mainTextColor pt-8 bg-bioBgColor p-[30px_12px] hover:no-underline">
        <h2 className="text-[32px] mb-4 font-bold text-bioBorderColor text-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Lucas Levingston")

                .start();
            }}
          />
        </h2>
        <img
          className="w-[175px] h-[175px] rounded-[50%] mb-6 mx-auto"
          id="bio-image"
          src={fotoCurriculo}
          alt="Lucas Levingston"
        />
        <p className="max-w-[100%] min-h- p-3 text-center mx-auto text-bioBorderColor">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Olá, meu nome é Lucas Levingston e sou")
                .start();
            }}
          />
          <span className="text-mainColor">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(6000)
                  .typeString("Desenvolvedor Frond-End.")
                  .pauseFor(5000)
                  .deleteChars(10)
                  .typeString("Back-End.")
                  .pauseFor(5000)
                  .deleteChars(9)
                  .typeString("Full-Stack.")
                  .start();
              }}
            />
          </span>
          <p className="font-bold p-[25px] text-mainTextColor">
            <strong>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Seja bem-vindo!")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Seja bem-vindo!")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Seja bem-vindo!")
                    .pauseFor(2500)
                    .start();
                }}
              />
            </strong>
          </p>
        </p>
        <ul
          id="social-container"
          className="w-[200px] flex justify-center mx-auto list-none border-b-[1px] border-solid mb-[25px] pb-[25px]"
        >
          <li className="max-w-[60px] mx-auto">
            <a
              className="text-[30px] text-mainColor hover:text-mainColor"
              href="https://www.instagram.com/lucaolevingston/?hl=pt-br"
              target="_blank"
            >
              <BsInstagram />
            </a>
          </li>
          <li className=" max-w-[60px] mx-auto">
            <a
              className="text-[30px] text-mainColor hover:text-mainColor"
              href="https://www.linkedin.com/in/lucas-levingston-44b851231/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className=" max-w-[60px] mx-auto">
            <a
              className="text-[30px] text-mainColor hover:text-mainColor"
              href="https://www.facebook.com/LucasLevingston"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
        <div id="email-container" className="flex justify-center w-[100%]">
          <AiOutlineMail className=" text-[25px] mr-[15px] max-w-[20px] text-mainColor" />
          <a
            className=" text-none max-w-[225px] hover:text-mainTextColor"
            href="mailto:lucaslevingston94@gmail.com"
          >
            lucaslevingston94@gmail.com
          </a>
        </div>
        <div id="phone-container" className="flex justify-center pt-4 w-full ">
          <AiFillPhone className="text-[25px]   mr-[5px] max-w-[20px] text-mainColor" />
          <p className="text-none max-w-[225px]  hover:text-mainTextColor">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("(83) 99961-6220").start();
              }}
            />
          </p>
        </div>
        <div className="flex justify-center w-[100%]">
          <a
            className="hover:bg-transparent font-bold text-[13px]  bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px] w-[150px] justify-center flex"
            href="https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing"
            id="btn-projects"
            target="_blank"
          >
            <span className="text-mainTextColor">
              Ver curriculo
              {"     "}
            </span>
            <BsJournalText className="text-[18px] ml-[3px] max-w-[20px] fontbo text-mainTextColor" />
          </a>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
