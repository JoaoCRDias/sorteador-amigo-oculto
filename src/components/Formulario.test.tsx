import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { RecoilRoot } from 'recoil';
import Formulario from './Formulario';

describe('Fomulario tests', () => {
  test('if empty input, new participants can not be added', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument();

    expect(botao).toBeDisabled();
  });

  test('add participant if has filled input name', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Joao Carlos',
      },
    });

    fireEvent.click(botao);

    expect(input).toHaveFocus();

    expect(input).toHaveValue('');
  });

  test('error on try to add duplicated participant', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Joao Carlos',
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: 'Joao Carlos',
      },
    });
    fireEvent.click(botao);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe('Duplicated names is not permitted!');
  });

  test('error must disappear after N seconds', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Joao Carlos',
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: 'Joao Carlos',
      },
    });
    fireEvent.click(botao);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
