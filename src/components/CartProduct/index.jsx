import "./style.css";

function CartProduct({ cart, setCart }) {
  function removerItem(id) {
    const index = cart.findIndex((elem) => elem.id == id);

    const remove = cart.filter((elem) => elem.id != id);

    setCart([]);


    if (cart[index].quantidade == 1) {
      setCart(remove);
    } else {
      cart[index].quantidade--
      setCart([...cart])
    }

  }

  return cart
    ? cart.map((elem) => {
        return (
          <li key={elem.id}>
            <div className="cartProduct">
              <div className="cartProductImg">
                <img src={elem.img} alt={elem.name} />
              </div>
              <div className="cartProductInfos">
                <h2 className="title-3 productName">{elem.name}</h2>
                <p className="text-3">{elem.category}</p>
              </div>
              <p className="productQuantity">{elem.quantidade}</p>
              <button
                onClick={(event) => removerItem(event.target.id)}
                id={elem.id}
                className="buttonRemoveCart"
              >
                Remover
              </button>
            </div>
          </li>
        );
      }) : console.log()
}

export default CartProduct;
