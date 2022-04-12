import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      attr01: '',
      attr02: '',
      attr03: '',
      image: '',
      select: '',
      superTrunfo: false,
    };
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
        <Form onInputChange={ this.handleChange } />
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
