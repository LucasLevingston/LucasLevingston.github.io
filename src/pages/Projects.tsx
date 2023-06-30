import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProjectsComponents, { Project } from "../components/ProjectsComponents";
import { FaShareAltSquare } from "react-icons/fa";
import { CRM1, CRM2, CRM3 } from "../assets/";

const projetos: Project[] = [
  {
    name: "CRM",
    sobre:
      "Este projeto está sendo desenvolvido no estágio. É um sistema de CRM, responsável pela integração dos dados obtidos pelos vendedores e armazenando os mesmos no banco de dados mongoDB com uma automação de envio de mensagens de texto para vendas, desde a entrada de dados de um cliente utilizando uma interface desenvolvida em React até a automação do envio de mensagens de WhatsApp. Javascript é a linguagem utilizada tanto no frontend quanto no backend, usando React e Node (com Express) respectivamente. Também foi utilizada a biblioteca Tailwind. Eu juntamente com minha equipe também entramos na área de Engenharia para desenvolvimento do projeto, utilizando diagrama de casos de uso, diagrama de classe, etc.",
    image1: "CRM1",
    image2: "CRM2",
    image3: "CRM3",
  },
  {
    name: "Campo Minado",
    sobre:
      "Campo minado foi um projeto na linguagem Java de um jogo já existente, onde o objetivo do jogo é o usuário abrir todos os campos do jogo sem abrir nenhum campo que esteja minado, caso ele abra, irá perder o jogo. Para a abertura de campos, utilizei o padrão observer. Quando tem um campo que esteja minado, os campos vizinhos irão avisar que tem entre 1 e 4 campos minados dentre os seus vizinhos. Com isso, abrindo campo por campo, até completar o jogo. Na parte gráfica utilizei o Jbutton, onde cada campo representa um botão. Utilizei a biblioteca do JUnit para os testes da aplicação.",
    image1: "",
    image2: "",
    image3: "",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col sm:flex-row w-[30]">
      <Sidebar />
      <div className="flex flex-col sm:max-w-[75%]  ml-auto mr-0 p-12 bg-aboutBgColor">
        <Header />
        <a
          className="hover:bg-transparent font-bold text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
          href="https://github.com/LucasLevingston"
          id="btn-projects"
        >
          <FaShareAltSquare className="text-[18px] ml-[2px] max-w-[20px] text-mainTextColor" />
          <span className="text-mainTextColor"> Ver repositórios</span>
        </a>
        <h2
          className="border-t border-solid pt-5 border-borderColor mb-5 text-2xl"
          id="skills-section-title"
        ></h2>
        <div>
          {projetos.map((projeto) => (
            <ProjectsComponents
              key={projeto.name}
              name={projeto.name}
              sobre={projeto.sobre}
              image1={projeto.image1}
              image2={projeto.image2}
              image3={projeto.image3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
