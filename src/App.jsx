import "./App.css";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import List from "./components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/texts.css";
import "./styles/buttons.css";
import Cart from "./components/Cart";
import Api from "./services/Api";

axios.defaults.baseURL =
  "https://hamburgueria-kenzie-json-serve.herokuapp.com/";


function App() {
  const [produtos, setProdutos] = useState();

  const [cart, setCart] = useState([]);

  const [filtered, setFiltered] = useState(null);

  const [busca, setBusca] = useState("");

  useEffect(() => {
        Api
      .get("products")
      .then((resp) => {
        setProdutos(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header
        setFiltered={setFiltered}
        produtos={produtos}
        busca={busca}
        setBusca={setBusca}
      />
      <main>
        <div className="listProducts">
          <List
            produtos={produtos}
            cart={cart}
            setCart={setCart}
            filtered={filtered}
            busca={busca}
          />
        </div>
        <Cart cart={cart} setCart={setCart} />
      </main>
    </div>
  );
}

export default App;
