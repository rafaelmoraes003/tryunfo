import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      image: '',
      select: '',
      superTrunfo: false,
      cardsList: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  disableBtn = () => {
    const { attr01, attr02, attr03 } = this.state;
    const { title, description, image, select } = this.state;
    const max = 90;
    const maxSum = 210;

    if ((
      Number(attr01) > max // --------------------------------------- se atributo 1 é maior que 90
      || Number(attr02) > max // ------------------------------------ se atributo 2 é maior que 90
      || Number(attr03) > max // ------------------------------------ se atributo 3 é maior que 90
      || Number(attr01) < 0 // -------------------------------------- se atributo 1 é menor que 0
      || Number(attr02) < 0 // -------------------------------------- se atributo 2 é menor que 0
      || Number(attr03) < 0 // -------------------------------------- se atributo 3 é menor que 0
      || ((Number(attr01) + Number(attr02) + Number(attr03)) > maxSum) // se soma de atributos é menor que 210
      || title.length === 0 // -------------------------------------- se o título não está vazio
      || description.length === 0 // -------------------------------- se descrição não está vazia
      || image.length === 0 // -------------------------------------- se imagem não está vazia
      || select.length === 0 // ------------------------------------- se select não está vazio
    )) {
      return true;
    }
  }

  saveCards = () => {
    const { attr01, attr02, attr03 } = this.state;
    const { title, description, image, select, superTrunfo } = this.state;
    this.setState({
      cardsList: [{
        name: title,
        description,
        image,
        rarity: select,
        attr01,
        attr02,
        attr03,
        superTrunfo,
      }],
    });
    this.setState({
      title: '',
      description: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      image: '',
      select: 'normal',
      superTrunfo: false,
    });
  }

  haveTrunfo = () => {
    const { cardsList } = this.state;
    const myTrunfo = cardsList.some((elemento) => (elemento.superTrunfo));
    return myTrunfo;
  }

  render() {
    const {
      title,
      description,
      attr01,
      attr02,
      attr03,
      image,
      select,
      superTrunfo,
      cardsList,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ title }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ select }
          cardTrunfo={ superTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.disableBtn() }
          onSaveButtonClick={ this.saveCards }
          hasTrunfo={ this.haveTrunfo() }
          boredLinter={ cardsList } // --------> prop inútil, usada apenas para resolver o linter.
        />
        <Card
          cardName={ title }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ select }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
