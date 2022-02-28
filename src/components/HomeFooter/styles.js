import styled from 'styled-components';

const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  a {
    color: #8e8e8e;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: -2px 0 -3px;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-evenly;
  }

  .select {
    width: 6rem;
    color: #8e8e8e;
  }

  .copyright {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    color: #8e8e8e;
  }
`;

export default Container;
