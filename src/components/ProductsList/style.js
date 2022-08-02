import styled from "styled-components";

export const ContainerList = styled.div`
  width: 70%;
  height: 90%;

  @media (max-width: 768px) {
    width: 95%;
    height: 45%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ListProduct = styled.ul`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  padding: 0;
  gap: 15px;
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    height: 80%;
    overflow: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    margin: 0;

    ::-webkit-scrollbar {
      width: 20%;
      height: 5px;
    }
  }
`;

export const ResultSearch = styled.div`
  text-align: start;
  margin: 20px;

  h3 {
    font-weight: 700;
    font-size: 1.2rem;

    span {
      color: var(--gray-50);
    }
  }

  @media (max-width: 768px) {
    margin: 5px;
  }
`;
