import { CardProduct, ContainerImg, BtnAddCart } from "./style.js";

const Product = ({ product, handleClick }) => {
  return (
    <CardProduct>
      <ContainerImg>
        <img src={product.img} alt="" />
      </ContainerImg>
      <div className="cardInfo">
        <p className="productTitle">{product.name}</p>
        <span>{product.category}</span>
        <p className="productPrice">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <BtnAddCart onClick={() => handleClick(product.id)}>
          Adicionar
        </BtnAddCart>
      </div>
    </CardProduct>
  );
};

export default Product;
