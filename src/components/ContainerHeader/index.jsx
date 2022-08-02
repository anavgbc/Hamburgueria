import burguerKenzie from "./../../burguer.png";
import { HeaderContainer, InputBox, BtnSearch } from "./style.js";

const ContainerHeader = ({ inputValue, setInputValue, searchInput }) => {
  return (
    <HeaderContainer>
      <img src={burguerKenzie} alt="" />
      <InputBox>
        <input
          placeholder="Digitar Pesquisa"
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            searchInput(inputValue);
          }}
        />
        <BtnSearch>Pesquisar</BtnSearch>
      </InputBox>
    </HeaderContainer>
  );
};

export default ContainerHeader;
