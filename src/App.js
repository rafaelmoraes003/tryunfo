import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    };
  }

  disableBtn = () => {
    const { attr01, attr02, attr03 } = this.state;
    const { title, description, image, select } = this.state;
    const max = 90;
    const maxSum = 210;

    if (Number(attr01) > max || Number(attr01) < 0) {
      return true;
    }
    if (Number(attr02) > max || Number(attr02) < 0) {
      return true;
    }
    if (Number(attr03) > max || Number(attr03) < 0) {
      return true;
    }
    if ((Number(attr01) + Number(attr02) + Number(attr03)) > maxSum) {
      return true;
    }
    if ((
      title.length === 0
      || description.length === 0
      || image.length === 0
      || select.length === 0)) {
      return true;
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

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
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ this.disableBtn() }
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
