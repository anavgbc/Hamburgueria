import styled from "styled-components";

export const CardProduct = styled.li`
  box-sizing: border-box;
  width: 32%;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  height: 55%;
  text-align: start;

  @media (max-width: 768px) {
    width: 50%;
    height: 80%;
  }

  &:hover {
    border: 2px solid var(--gray-100);
  }

  span {
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--gray-50);
  }

  .cardInfo {
    margin-left: 10px;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    .cardInfo {
      height: 50%;
      align-items: center;
      margin: 15px;
    }
  }

  .productTitle {
    font-weight: 700;
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    .productTitle {
      max-width: 11ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 10px;
    }
  }

  .productPrice {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 40%;
  background-color: var(--gray-0);
  display: flex;
  img {
    width: 50%;
    margin: 0 auto;
  }
`;

export const BtnAddCart = styled.button`
  border: none;
  color: var(--color-background);
  background-color: var(--color-primary);
  width: 5.5rem;
  height: 35px;
  border-radius: 8px;

  @media (max-width: 900px) {
    margin-bottom: 10px;
    height: 30px;
  }

  &:hover {
    background-color: var(--color-primary-50);
  }
`;
