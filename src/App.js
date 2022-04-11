import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
