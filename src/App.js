import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import Checkbox from './components/Checkbox';
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
      filteredList: [],
      filterTrunfo: false,
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
      cardsList: [...prev.cardsList, { // cardsList é ACUMULATIVO!!!
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

    this.setState((prev) => ({
      filteredList: prev.cardsList,
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

  removeCard = ({ target }) => {
    this.setState((prevState) => ({
      cardsList: prevState.cardsList.filter((elemento) => {
        const remove = elemento.cardName !== target.name;
        return remove;
      }),
    }));

    this.setState((prev) => ({
      filteredList: prev.cardsList,
    }));
  }

  filterNames = ({ target }) => {
    const { cardsList } = this.state;
    this.setState(() => ({
      filteredList: cardsList.filter((elemento) => {
        const name = elemento.cardName.includes(target.value);
        return name;
      }),
    }));
  }

  filterRare = ({ target }) => {
    const { cardsList } = this.state;
    if (target.value === 'todas') {
      this.setState({
        filteredList: cardsList,
      });
    } else {
      this.setState({
        filteredList: cardsList.filter((elem) => elem.cardRare === target.value),
      });
    }
  }

  shouldBeDisabled = () => {
    const { filterTrunfo } = this.state;
    if (filterTrunfo) {
      return true;
    }
  }

  filterTrunfo = ({ target }) => {
    const { cardsList } = this.state;
    this.setState({
      filterTrunfo: target.checked,
    }, () => {
      const { filterTrunfo } = this.state;
      if (filterTrunfo) {
        this.setState({
          filteredList: cardsList.filter((elem) => elem.cardTrunfo === filterTrunfo),
        });
      } else {
        this.setState({
          filteredList: cardsList,
        });
      }
    });
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
      filteredList,
    } = this.state;
    return (
      <>
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
          <div className="preview">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              text
            />
          </div>
        </div>
        <div>
          <div>
            <h2>Filtros de busca</h2>
            <TextInput
              title="Nome da carta"
              testId="name-filter"
              name="filterName"
              onChange={ this.filterNames }
              disabled={ this.shouldBeDisabled() }
            />
            <SelectInput
              testId="rare-filter"
              all
              name="filterRarity"
              onChange={ this.filterRare }
              disabled={ this.shouldBeDisabled() }
            />
            <Checkbox
              testId="trunfo-filter"
              name="filterTrunfo"
              onChange={ this.filterTrunfo }
            />

          </div>
          <div className="my-cards-div">
            {filteredList.length > 0 && filteredList.map((elemento) => (
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
                onClick={ this.removeCard }
                shouldHaveDeleteButton
              />
            )) }
          </div>
        </div>
      </>
    );
  }
}

export default App;
