import React, { Component, Fragment } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.css';
import LanchesStyles from './style';

import Hamburguer from './hamburger.jpg';

import Cart from './cart_infos';

class Lanches extends Component {
    constructor() {
        super();
        this.state = {
            lanche: [],
            totalPrice: 0.00,
            lanches: [],
            ingredientes: [],
            sale: [],
            cartAdd: []
        };
    }

    componentDidMount() {
      axios.get('http://localhost:8080/getLanches').then(resp => {

          //get all lanches
          resp.data.lanches.map(item => 
              this.setState({ 
                  lanches: [...this.state.lanches, item],
                  lanche: [
                    ...this.state.lanche,
                    {
                      id: item.id,
                      editItem: false,
                      initialPrice: item.initialPrice,
                      itemsInclusos: item.ingredients,
                      name: item.name,
                      qty: 1
                    }
                  ]
              })
          )
          
      });

      axios.get('http://localhost:8080/getIngredients').then(resp => {
        //get all ingredientes
        resp.data.ingredientes.map(item => 
          this.setState({ 
              ingredientes: [...this.state.ingredientes, item]
          })
        )
      });
    }

  editItem = (id) => {
    this.setState(
      {
        lanche: this.state.lanche.map(item => {
           if(item.id === id) {
            item.editItem = true
           }
           return item;
        })
      }
    )
  }

  handleAdd = (e, value_ingrediente, name_ingrediente, id) => {
    let valorAtual = this.state.lanche[id - 1].initialPrice;
    let qtd;
    
    //verify if ingrediente exist in list of items, if is true just change the price of lanche
    var found = this.state.lanche[id - 1].itemsInclusos.some(function (el) {
      return el.name === name_ingrediente;
    });
    
    if (!found) {
      let infos_ingredientes = {name: name_ingrediente, price: value_ingrediente, qty: 1};
      
      this.setState(
        {
          lanche: this.state.lanche.map(item => {
            if(item.id === id) {
             item.initialPrice = valorAtual + value_ingrediente
             item.itemsInclusos = [...this.state.lanche[id - 1].itemsInclusos, infos_ingredientes]
            }
            return item;
         })
        }
      )
    } else {
      this.setState(
        {
          lanche: this.state.lanche.map(item => {
            if(item.id === id) {
             item.initialPrice = valorAtual + value_ingrediente
            }
            return item;
          })
        }
      )

      this.state.lanche[id - 1].itemsInclusos.map(item => {
        if(item.name === name_ingrediente) {
          qtd = item.qty + 1;
        }
      })

      this.setState(
        {
          itemsInclusos: this.state.lanche[id - 1].itemsInclusos.map(item => {
            if(item.name === name_ingrediente) {
             item.qty = qtd;
            }
            return item;
          })
        }
      )

    }

  }

  handleDelete = (e, index, valor, id, nome) => {
    let valorAtual = this.state.lanche[id - 1].initialPrice;
    const itemsWithoutRemove = this.state.lanche[id - 1].itemsInclusos.filter((item, j) => index !== j);

    // if has more then one
    if(this.state.lanche[id - 1].itemsInclusos[index].qty > 1) {
      valor = valor * this.state.lanche[id - 1].itemsInclusos[index].qty;
    }

    this.setState({
      lanche: this.state.lanche.map(item => {
        if(item.id === id) {
          item.itemsInclusos = itemsWithoutRemove
        }
        return item;
      })
    })

    this.setState({
      lanche: this.state.lanche.map(item => {
        if(item.id === id) {
          item.initialPrice = valorAtual - valor
        }
        return item;
      })
    });

  }

  handleAddCart = (compra) => {
    let idLanche = compra.id;
    let valorLanche = compra.initialPrice;

    //sale light

    if (this.state.lanche[idLanche - 1].itemsInclusos.find((item) => item.name === 'Bacon') ) {

    } else {
      if (this.state.lanche[idLanche - 1].itemsInclusos.find((item) => item.name === 'Alface') ) {
        let totalPrice = this.state.lanche[idLanche - 1].initialPrice;

        this.setState({
          sale: ['Light'],
          totalPrice: totalPrice + ((valorLanche * 10) / 100)
        })
      }
    }

    //sale muita carne

    if (this.state.lanche[idLanche - 1].itemsInclusos.find((item) => item.name === 'Hambúrguer de carne')) {
      let qtyHbg;
      let priceHbg;
      let totalPrice = this.state.lanche[idLanche - 1].initialPrice;

      this.state.lanche[idLanche - 1].itemsInclusos.map(item => {
        if(item.name === 'Hambúrguer de carne') {
          qtyHbg = item.qty;
          priceHbg = item.price;
        }
      });

      if(qtyHbg % 3 === 0) {
        this.setState({
          totalPrice: totalPrice - qtyHbg,
          sale: ['Muita carne']
        })
      }
    }

    //sale muito queijo
    
    if (this.state.lanche[idLanche - 1].itemsInclusos.find((item) => item.name === 'Queijo')) {
      let qtyQueijo;
      let priceHbg;
      let totalPrice = this.state.lanche[idLanche - 1].initialPrice;

      this.state.lanche[idLanche - 1].itemsInclusos.map(item => {
        if(item.name === 'Queijo') {
          qtyQueijo = item.qty;
          priceHbg = item.price;
        }
      });

      if(qtyQueijo % 3 === 0) {
        this.setState({
          totalPrice: totalPrice - qtyQueijo,
          sale: ['Muito queijo']
        })
      }
    }

    //set total price

    var exist = this.state.cartAdd.some(function (el) {
      return el.name === compra.name;
    });

    if(!exist) {
      this.setState({
        totalPrice: this.state.totalPrice + valorLanche,
        cartAdd: [...this.state.cartAdd, compra]
      })
    } else {
      this.setState({
        totalPrice: this.state.totalPrice + valorLanche
      })

       this.setState(
        {
          itemsInclusos: this.state.cartAdd.map(item => {
            if(item.name === compra.name) {
             item.qty = item.qty + 1;
            }
            return item;
          })
        }
      )
    }

  }

  numberFormat = (number) => {
    var number_format = number.toFixed(2).replace(".", ",");
    return number_format;
  }

  render() {
    
    return (
      <Fragment>
        <LanchesStyles />
          <div className="lanches">
            {this.state.lanches.map(lanche => (
                <div className="item" key={lanche.id}>
                    <div className="item__image">
                      <img src={Hamburguer} alt="Imagem do Lanche" />
                    </div>
                    <div className="item__desc">
                    <div className="item__desc--top">
                        <h2 className="item__title">{lanche.name}</h2>
                        <p className="item__price">{this.numberFormat(this.state.lanche[lanche.id - 1].initialPrice)}</p>
                    </div>
                    <ul className="item__ingredientes">
                        {this.state.lanche[lanche.id - 1].itemsInclusos.map((item, index) =>
                            <li className="item__ingredientes--itens" key={index}>
                            <strong>{item.qty}</strong>
                            <span>{item.name}</span>
                            { this.state.lanche[lanche.id - 1].editItem ? <button className="actionRemove" onClick={((e) => this.handleDelete(e, index, item.price, lanche.id, item.name))}><i className="fa fa-times"></i></button> : null}
                            </li>
                        )}
                    </ul>
                    { this.state.lanche[lanche.id - 1].editItem ?
                        <div>
                        <p className="itens__adicionais">Itens Adicionais</p>
                        <ul className="itens__adicionais--menu">
                            {this.state.ingredientes.map(ingrediente =>
                                <li className="itens__adicionais--item" key={ingrediente.id}>
                                <span>{ingrediente.name}</span>
                                <button className="actionAdd" onClick={((e) => this.handleAdd(e, ingrediente.price, ingrediente.name, lanche.id))}><i className="fa fa-plus"></i></button>
                                </li>
                            )}
                        </ul>
                        </div>
                    : null}
                      <div className="buttons">
                        <button onClick={() => this.editItem(lanche.id)} className='item__edit'>Editar</button>
                        { this.state.lanche[lanche.id - 1].initialPrice ?
                            <button onClick={() => this.handleAddCart(this.state.lanche[lanche.id - 1])} className="buyLanche">Pedir Lanche</button>
                        : null}
                      </div>
                    </div>
                </div>
            ))}
          </div>
          <Cart finalPrice={this.state.totalPrice} sales={this.state.sale} format={this.numberFormat} itemsAdd={this.state.cartAdd} />
      </Fragment>
    );
  }
}

export default Lanches;