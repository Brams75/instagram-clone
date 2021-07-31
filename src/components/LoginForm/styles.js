import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75vw;
  margin: 0 auto;
`;
export const Ou = styled.div`
  text-transform: uppercase;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  .line {
    border: solid 1px #dbdbdb;
    flex: 1;
    height: 1px;
  }
  .text {
    margin: 0 0.5rem;
  }
`;

export const Facebook = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 0.5rem;
    color: #385185;
    font-weight: 500;
  }
`;

export default Container;
