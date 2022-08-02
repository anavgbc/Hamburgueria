import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      height: 20%;
      margin: 10px;
    }
  }
`;

export const InputBox = styled.div`
  height: 70%;
  width: 26%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid var(--gray-20);
  background-color: var(--color-background);
  margin-right: 10px;

  &:hover {
    border: 2px solid var(--gray-100);
  }

  input {
    height: 70%;
    width: 60%;
    border: none;
    padding: 5px;
  }

  ::placeholder {
    color: var(--gray-20);
  }

  @media (max-width: 768px) {
    height: 60%;
    width: 90%;
    margin-bottom: 10px;
  }
`;

export const BtnSearch = styled.button`
  border: none;
  background-color: var(--color-primary);
  color: var(--color-background);
  width: 30%;
  height: 70%;
  padding: 0px, 20px, 0px, 20px;
  border-radius: 8px;
  font-size: 0.75rem;

  &:hover {
    background-color: var(--color-primary-50);
  }
`;
