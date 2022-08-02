import Product from "../Product";
import { ContainerList, ListProduct, ResultSearch } from "./style.js";

const ProductsList = ({ products, handleClick, inputValue }) => {
  return (
    <ContainerList>
      {inputValue !== "" && (
        <ResultSearch>
          <h3>
            Resultados para: <span>{inputValue}</span>
          </h3>
        </ResultSearch>
      )}

      <ListProduct>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
            inputValue={inputValue}
          />
        ))}
      </ListProduct>
    </ContainerList>
  );
};

export default ProductsList;
