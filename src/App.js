import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: " #57C278",
      corSegundaria: "#D9F7E9 ",
    },
    {
      nome: "Front End",
      corPrimaria: " #82CFFA",
      corSegundaria: "#E8FFFF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSegundaria: "#E9FFE3",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSegundaria: "rgba(241, 97, 101, 0.15)",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSegundaria: "rgba(220, 110, 190, 0.15)",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSegundaria: "rgba(255, 186, 5, 0.15)",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSegundaria: "rgba(255, 140, 42, 0.15)",
    },
  ];
  const [Colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicional = (colaborador) => {
    debugger;
    setColaboradores([...Colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicional(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSegundaria={time.corSegundaria}
          colaboradores={Colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
