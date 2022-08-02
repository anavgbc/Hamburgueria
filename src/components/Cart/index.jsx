import { CartInfo, ContainerCart, CartTotal, BtnRemoveAll } from "./style.js";

const Cart = ({ productCart, setProductCart }) => {
  function removeItem(name) {
    const actualList = productCart.filter((item) => item.name !== name);
    setProductCart(actualList);
  }

  function removeAll() {
    setProductCart([]);
  }

  const total = productCart.reduce((previousValue, currentValue) => {
    return currentValue.price + previousValue;
  }, 0);

  return (
    <ContainerCart>
      <div className="cart">
        <div className="cartHeader">
          <p>Carrinho de compras</p>
        </div>

        {productCart.length > 0 ? (
          <CartInfo size={25}>
            <>
              <ul>
                {productCart.map((product) => {
                  return (
                    <li key={product.id} className="cardCart">
                      <div className="cartItemImg">
                        <img src={product.img} alt="" />
                      </div>
                      <div className="cartInfo">
                        <p className="cartItemName">{product.name}</p>
                        <span className="cartItemCategory">
                          {product.category}
                        </span>
                        <span>{product.counter}</span>
                      </div>
                      <button
                        className="btnRemove"
                        onClick={() => removeItem(product.name)}
                      >
                        Remover
                      </button>
                    </li>
                  );
                })}
              </ul>
              <CartTotal>
                <div className="totalContainer">
                  <p>Total:</p>
                  <span className="totalPrice">
                    {total.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <BtnRemoveAll onClick={() => removeAll()}>
                  Remover todos
                </BtnRemoveAll>
              </CartTotal>
            </>
          </CartInfo>
        ) : (
          <CartInfo size={10}>
            <div className="emptyCart">
              <p>Sua sacola está vazia</p>
              <span>Adicione itens</span>
            </div>
          </CartInfo>
        )}
      </div>
    </ContainerCart>
  );
};

export default Cart;
