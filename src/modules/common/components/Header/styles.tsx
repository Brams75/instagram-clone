import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 61px;

  .logo {
    display: flex;
    align-items: center;
    padding-top: 5px;
  }

  .icons {
    display: flex;
    svg {
      height: 24px;
      width: 24px;
    }
  }

  .icon {
    cursor: pointer;
    margin-left: 22px;
  }

  .search-icon {
    cursor: pointer;
    height: 18px;
    width: 18px;
  }

  .cancel-icon {
    cursor: pointer;
    height: 18px;
    width: 18px;
  }

  .sub-container {
    display: flex;
    max-width: 975px;
    width: 935px;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .search-container {
      background: #efefef;
      border-radius: 8px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      height: 36px;
      min-width: 125px;
      width: 268px;
      padding-left: 24px;
      svg {
        margin-right: 0.5rem;
      }
    }

    input {
      border: none;
      -webkit-appearance: none;
      background: #efefef;
      font-size: 16px;
      height: 30px;
      width: 236px;
    }

    div {
      width: 254px;

      a {
        text-decoration: none;
        color: black;
      }
    }

    .icons > :first-child {
      margin-left: 0px;
    }

    .opacity {
      svg:active {
        opacity: 0.4;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .search-container {
      display: none !important;
    }
  }
`;

export default Container;
