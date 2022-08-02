import "./App.css";
import { useEffect, useState } from "react";
import api from "./services/api";
import Global from "./styles/global";
import Cart from "./components/Cart";
import ContainerHeader from "./components/ContainerHeader";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [filterList, setFilter] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    api
      .get()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    const productSelected = products.find((product) => product.id === id);

    !productCart.includes(productSelected) &&
      setProductCart([...productCart, productSelected]);
  };

  const searchInput = (inputValue) => {
    const searchResult = products.filter(
      (elem) =>
        elem.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        elem.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilter(searchResult);
  };

  return (
    <div className="App">
      <Global />
      <header className="pageHeader">
        <ContainerHeader
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchInput={searchInput}
        />
      </header>
      <div className="containerPage">
        <ProductsList
          products={inputValue !== "" ? filterList : products}
          handleClick={handleClick}
          inputValue={inputValue}
        />
        <Cart productCart={productCart} setProductCart={setProductCart} />
      </div>
    </div>
  );
}

export default App;
