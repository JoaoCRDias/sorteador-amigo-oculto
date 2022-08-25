import React, { useRef, useState } from 'react';
import { useAddPartcipant } from '../state/hook/useAddParticipant';
import { useErrorMessage } from '../state/hook/useErrorMessage';

function Formulario() {
  const addParticipant = useAddPartcipant();
  const [inputValue, setInputValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const errorMessage = useErrorMessage();

  const addParticipantHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addParticipant(inputValue);
    setInputValue('');
    ref.current?.focus();
  };

  return (
    <form onSubmit={addParticipantHandle}>
      <input
        type="text"
        value={inputValue}
        placeholder="Insira os nomes dos participantes"
        onChange={(evt) => setInputValue(evt.target.value)}
        ref={ref}
      />
      <button disabled={!inputValue}>Adicionar</button>
      {errorMessage && <p role={'alert'}>{errorMessage}</p>}
    </form>
  );
}

export default Formulario;
