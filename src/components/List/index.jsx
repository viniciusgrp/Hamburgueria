import { useState } from "react";
import "./style.css";

function List({ produtos, cart, setCart, filtered}) {

  function addProduct(id) {
    const produto = produtos.find((elem) => elem.id == id);

    const produtoCart = {
      ...produto,
      quantidade: 1,
    };

    const indexProduct = cart.findIndex((elem) => elem.name == produto.name);

    if (indexProduct == -1) {
      setCart([...cart, produtoCart]);
    } else {
      cart[indexProduct].quantidade++;
      setCart([...cart]);
    }
  }

  if (filtered) {
    return filtered.map((produto) => {
      return (
          <div className="produto">
            <div className="imgProduct">
              <img src={produto.img} alt="" />
            </div>
            <div className="productsInfo">
              <h2 className="title-3 nomeProduto">{produto.name}</h2>
              <p className="text-3">{produto.category}</p>
              <span className="productPrice">
                R$ {produto.price.toFixed(2)}
              </span>
              <button
                id={produto.id}
                onClick={(event) => {
                  addProduct(event.target.id);
                }}
                className="buttonDefault"
              >
                Adicionar
              </button>
            </div>
          </div>
      );
    });
  } else {
    return produtos ? (
      produtos.map((produto) => {
        return (
          <div className="produto">
            <div className="imgProduct">
              <img src={produto.img} alt="" />
            </div>
            <div className="productsInfo">
              <h2 className="title-3 nomeProduto">{produto.name}</h2>
              <p className="text-3">{produto.category}</p>
              <span className="productPrice">
                R$ {produto.price.toFixed(2)}
              </span>
              <button
                id={produto.id}
                onClick={(event) => {
                  addProduct(event.target.id);
                }}
                className="buttonDefault"
              >
                Adicionar
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

export default List;
