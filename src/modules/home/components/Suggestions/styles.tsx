import styled from 'styled-components';

const Container = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  width: 100%;
  padding: 30px;

  .sub-container {
    margin: 16px;
    border: 1px solid;
    display: flex;
    align-items: center;

    div {
      margin: 0.5rem;
    }

    .text {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    button {
      background-color: #0095f6;
      background-color: rgba(var(--d69, 0, 149, 246), 1);
      border: 1px solid transparent;
      height: 18px;
      border-radius: 4px;
      color: #fff;
      padding: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5rem;
    }
  }
`;

export default Container;
