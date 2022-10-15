import { useState } from "react";
import Logo from "../../img/logo.png";
import "./style.css";

function Header({ setFiltered, produtos, busca, setBusca }) {
  const [infoBusca, setInfoBusca] = useState("");

  function filter() {
    const info = busca.toString();
    const filtrar = produtos.filter(
      (elem) =>
        elem.name.toLowerCase().includes(busca) ||
        elem.category.toLowerCase().includes(busca)
    );
    setInfoBusca(info);
    setFiltered(filtrar);
  }

  return (
    <div className="divHeaderGlobal">
      <div className="divHeader">
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div className="divSearch">
          <input
            onChange={(event) => setBusca(event.target.value.toLowerCase())}
            type="text"
            placeholder="Digitar pesquisa"
          />
          <button onClick={filter} className="buttonDefault">
            Pesquisar
          </button>
        </div>
      </div>
      {infoBusca ? (
      <div className="infoSearch">
        <h3 className="search">
          Resultado para: <span>{busca}</span>
        </h3>
        <button onClick={() => {setFiltered(null); setInfoBusca(null)}} className="buttonDefault">Limpar busca</button>
      </div>) : (
        console.log()
      )}
    </div>
  );
}

export default Header;
