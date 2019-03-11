import React, { Component, Fragment } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.css';
import CartStyles from './style';


class Cart extends Component {
  constructor() {
    super();
    this.state = {
        allIngredients: []
    };
  }



  componentDidMount() {
    axios.get('http://localhost:8080/getIngredients').then(resp => {
      //get all ingredientes
      resp.data.ingredientes.map(item => 
          this.setState({ 
            allIngredients: [...this.state.allIngredients, item]
          })
      )
    });
  }

  numberFormat = (number) => {
    var number_format = "R$ " + number.toFixed(2).replace(".", ",");
    return number_format;
  }

  render() {
    return (
      <Fragment>
        <CartStyles />
        <div className="cart">
          <div className="cart__content">
            <div className="cart__top">
            <h2>Tabela de Ingredientes</h2>
            <table>
              <tbody>
                {this.state.allIngredients.map(allIngredient =>
                  <tr key={allIngredient.id}>
                    <td>{allIngredient.name}</td>
                    <td>{this.numberFormat(allIngredient.price)}</td> 
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;