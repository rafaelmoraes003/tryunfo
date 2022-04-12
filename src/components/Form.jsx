import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import Checkbox from './Checkbox';
import SaveButton from './SaveButton';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h1>Tryunfo</h1>

        <TextInput
          title="Nome"
          testId="name-input"
          value={ cardName }
          onChange={ onInputChange }
          name="title"
        />

        <TextArea
          title="Descrição"
          testId="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name="description"
        />

        <NumberInput
          testId="attr1-input"
          placeholder="Primeiro atributo"
          number="1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="attr01"
        />

        <NumberInput
          testId="attr2-input"
          placeholder="Segundo atributo"
          number="2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="attr02"
        />

        <NumberInput
          testId="attr3-input"
          placeholder="Terceiro atributo"
          number="3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="attr03"
        />

        <TextInput
          testId="image-input"
          title="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
          name="image"
        />

        <SelectInput
          testId="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="select"
        />

        <Checkbox
          testId="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="superTrunfo"
        />

        <SaveButton
          testId="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
