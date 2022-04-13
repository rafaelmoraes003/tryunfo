import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
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
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const max = 90;
    const maxSum = 210;

    if ((
      Number(cardAttr1) > max // --------------------------------------- se atributo 1 é maior que 90
      || Number(cardAttr2) > max // ------------------------------------ se atributo 2 é maior que 90
      || Number(cardAttr3) > max // ------------------------------------ se atributo 3 é maior que 90
      || Number(cardAttr1) < 0 // -------------------------------------- se atributo 1 é menor que 0
      || Number(cardAttr2) < 0 // -------------------------------------- se atributo 2 é menor que 0
      || Number(cardAttr3) < 0 // -------------------------------------- se atributo 3 é menor que 0
      || ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > maxSum) // se soma de atributos é menor que 210
      || cardName.length === 0 // -------------------------------------- se o título não está vazio
      || cardDescription.length === 0 // -------------------------------- se descrição não está vazia
      || cardImage.length === 0 // -------------------------------------- se imagem não está vazia
      || cardRare.length === 0 // ------------------------------------- se select não está vazio
    )) {
      return true;
    }
  }

  saveCards = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardName, cardDescription, cardImage, cardRare, cardTrunfo } = this.state;

    this.setState((prev) => ({
      cardsList: [...prev.cardsList, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardImage,
        cardTrunfo,
      }],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  }

  haveTrunfo = () => {
    const { cardsList } = this.state;
    const myTrunfo = cardsList.some((elemento) => (elemento.cardTrunfo));
    return myTrunfo;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardsList,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.disableBtn() }
          onSaveButtonClick={ this.saveCards }
          hasTrunfo={ this.haveTrunfo() }
          boredLinter={ cardsList } // --------> prop inútil, usada apenas para resolver o linter.
        />
        <div>
          <h2>Preview</h2>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        {cardsList.length > 0 && cardsList.map((elemento) => (
          <Card
            key={ elemento.cardName }
            cardName={ elemento.cardName }
            cardDescription={ elemento.cardDescription }
            cardAttr1={ elemento.cardAttr1 }
            cardAttr2={ elemento.cardAttr2 }
            cardAttr3={ elemento.cardAttr3 }
            cardImage={ elemento.cardImage }
            cardRare={ elemento.cardRare }
            cardTrunfo={ elemento.cardTrunfo }
          />
        )) }
      </div>
    );
  }
}

export default App;
