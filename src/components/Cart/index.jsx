import CartProduct from "../CartProduct";
import "./style.css";

function Cart({ cart, setCart }) {
  let total = cart.reduce((acc, act) => acc += (act.price * act.quantidade), 0)

  return (
    <div className="cart">
      <div className="cartHeader">
        <p>Carrinho de compras</p>
      </div>
      <div className="cartProducts">
        <ul className="listProductsCart">
          <CartProduct cart={cart} setCart={setCart} />
        </ul>
      </div>
      {cart.length >= 1 ? (
        <>
          <div className="totalCart">
            <h2 className="title-3">Total</h2>
            <span>
              {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <div className="buttonCart">
            <button onClick={() => setCart([])} className="buttonGrey">
              Remover todos
            </button>
          </div>
        </>
      ) : (<div className="emptyDiv"><h3 className="title-2 emptyInfo">Sua sacola está vazia</h3>
      <p className="emptyInfo">Adicione itens</p></div>)}
    </div>
  );
}

export default Cart;
