import styled from "styled-components";

export const ContainerCart = styled.div`
  margin-top: 20px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }

  .cart {
    width: 100%;

    .cartHeader {
      background-color: var(--color-primary);
      height: 3.5rem;
      font-weight: 700;
      color: var(--color-background);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px 5px 0px 0px;
    }
  }
`;

export const CartInfo = styled.div`
  background-color: var(--gray-0);
  height: ${(props) => `${props.size}rem`};
  margin-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emptyCart {
    width: 80%;
  }

  .emptyCart > p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-100);
  }

  .emptyCart > span {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--gray-50);
  }

  ul {
    list-style: none;
    width: 100%;
    height: 70%;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    overflow-x: auto;
  }

  .cardCart {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 10px;
  }

  .cartItemImg {
    width: 30%;
    background-color: var(--gray-20);
    border-radius: 5px;
  }

  .cartItemImg > img {
    width: 100%;
  }

  .cartInfo {
    text-align: start;
  }
  .cartItemName {
    font-size: 0.875rem;
    font-weight: 700;
    max-width: 7ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cartItemCategory {
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--gray-50);
  }

  .btnRemove {
    border: none;
    background-color: transparent;
    color: #bdbdbd;
    font-size: 60%;
    font-weight: 500;
    width: 20%;
    padding: 0;

    &:hover {
      color: var(--gray-100);
      text-decoration: underline;
    }
  }
`;

export const CartTotal = styled.div`
  background-color: var(--gray-0);
  width: 100%;
  height: 40%;
  border-top: 2px solid var(--gray-20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .totalContainer {
    margin: 15px;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .totalPrice {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--gray-50);
    }
  }
`;

export const BtnRemoveAll = styled.button`
  background-color: var(--gray-20);
  border: none;
  color: var(--gray-50);
  width: 80%;
  height: 2.4rem;
  border-radius: 8px;
  padding: 0px, 20px, 0px, 20px;
  font-weight: 600;

  &:hover {
    background-color: var(--gray-50);
    color: var(--gray-20);
  }
`;
