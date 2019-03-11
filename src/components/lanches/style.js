import { createGlobalStyle } from 'styled-components';

const LanchesStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    background: #f2f7fc;
  }
  .lanches {
    width: 70%;
    padding: 20px;
    flex-wrap: wrap;
    display: flex;
  }
  .item {
    width: calc(33.333333% - 20px);
    margin: 10px;
    background: #fff;
    border-radius: 15px;
    position: relative;

    .buyLanche {
      background: #37E17B;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      padding: 8px 20px;
      display: block;
      width: 100%;
      margin-top: 10px;
      transition: all .2s ease-in-out;

      &:hover {
        opacity: .8;
      }
    }

    .item__image {
      min-height: 150px;
      width: 100%;

      img {
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
        object-fit: contain;
        user-select: none;
        user-drag: none;
      }
    }

    .item__desc {
      padding: 20px;

      .item__desc--top {
        margin-bottom: 20px;
      }

      .item__ingredientes {
        padding: 0;
        list-style: none;

        .item__ingredientes--itens {
          padding: 5px 0;
          border-bottom: 1px solid #ededed;
          display: flex;
          justify-content: space-between;

          span {
            min-width: 200px;
          }
          
          strong {
            margin-right: 10px;
          }
        }
      }

      .item__edit {
        border: 0;
        background: #f79201;
        color: #fff;
        display: block;
        padding: 8px 30px;
        margin-top: 20px;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        transition: all .2s ease-in-out;

        &:hover {
          opacity: .8;
        }
      }

      .actionRemove {
        border: 0;
        background: #fff;
        color: red;
        cursor: pointer;
      }
    }

    .item__price {
      font-size: 22px;
      font-weight: bold;
      color: #37E17B;
    }

    .item__finish {
        border: 0;
        background: #f79201;
        color: #fff;
        display: block;
        padding: 8px 30px;
        margin-top: 20px;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        transition: all .2s ease-in-out;

        &:hover {
          opacity: .8;
        }
      }

    .itens__adicionais {
      font-weight: bold;
      margin: 15px 0;
    }

    .itens__adicionais--menu {
      padding: 0;
      list-style: none;

      .itens__adicionais--item {
        padding: 5px 0;
        border-bottom: 1px solid #ededed;
        display: flex;
        justify-content: space-between;

        span {
          min-width: 150px;
        }
      }

      .actionAdd {
        border: 0;
        background: #fff;
        color: #37E17B;
        cursor: pointer;
      }
    }
  }
  .cart__infos {
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 20px;
    border-radius: 15px;
    min-width: 300px;
    background: #fff;
    z-index: 2;
    
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

    .my__order {
      border-bottom: 1px solid #ededed;
      padding-bottom: 10px;
      margin-bottom: 10px;

      .total {
        margin-bottom: 5px;
        font-weight: bold;
      }
    }
  }
`;

export default LanchesStyles;