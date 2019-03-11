import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .d-flex {
      display: flex;
      flex-wrap: wrap;
  }
  @media only screen and (max-width: 1024px) {
    .item {
      width: calc(50% - 20px);
    }
  }
  @media only screen and (max-width: 768px) {
    .d-flex {
      padding-bottom: 100px;
    }
    .lanches {
      width: 100%;

      .item {
        width: 100%;
      }

    }
    .cart {
      width: 100%;
    }
    .cart__infos {
      width: 100%;
      bottom: 0;
      right: 0;
      background: #37E17B;
      border-radius: 0px;
      text-align: center;

      .total {
        justify-content: center;
        color: #fff;
      }
    }
  }
`;

export default GlobalStyles;