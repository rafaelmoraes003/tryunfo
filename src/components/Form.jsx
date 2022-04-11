import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import Checkbox from './Checkbox';
import SaveButton from './SaveButton';

class Form extends React.Component {
  render() {
    return (
      <>
        <h1>Adicionar nova carta</h1>

        <TextInput
          title="Nome"
          testId="name-input"
        />

        <TextArea
          title="Descrição"
          testId="description-input"
        />

        <NumberInput
          testId="attr1-input"
          placeholder="Primeiro atributo"
          number="1"
        />

        <NumberInput
          testId="attr2-input"
          placeholder="Segundo atributo"
          number="2"
        />

        <NumberInput
          testId="attr3-input"
          placeholder="Terceiro atributo"
          number="3"
        />

        <TextInput
          testId="image-input"
          title="Imagem"
        />

        <SelectInput
          testId="rare-input"
        />

        <Checkbox testId="trunfo-input" />

        <SaveButton testId="save-button" />

      </>
    );
  }
}

export default Form;
