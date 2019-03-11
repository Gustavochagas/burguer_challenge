import { createGlobalStyle } from 'styled-components';

const CartStyles = createGlobalStyle`
  .cart {
    width: 30%;
    height: 100%;
    padding: 20px;

    .cart__content {
      position: relative;

      table {
        width: 100%;
        margin: 20px 0;

        td {
          padding: 10px 15px;
          border-bottom: 1px solid #e6e6e6;
        }

        th {
          padding: 10px 15px;
          border-bottom: 1px solid #e6e6e6;
        }
      }

      .cart__top {
        padding: 20px;
        padding-bottom: 30px;
        border-radius: 15px;
        margin-bottom: 10px;
        background: #fff;
        border-bottom: 1px solid #ededed;
      }

      .cart__bottom {
        padding: 20px;
        border-radius: 15px;
        background: #fff;

        .total {
          font-weight: normal;
          font-size: 20px;
          display: flex;
          align-items: center;

          span {
            color: #f79201;
            font-weight: bold;
            font-size: 30px;
            margin-left: 15px;
          }
        }
      }
    }
  }
`;

export default CartStyles;