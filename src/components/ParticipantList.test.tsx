import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../state/hook/useParticipantList';
import ParticipantList from './ParticipantList';

jest.mock('../state/hook/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe('empty participant list', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test('empty participant list shoul be rendered as empty list', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('filled participant list', () => {
  const participants = ['Ana', 'Catarina'];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });
  test('participant list should be rendered with 2 elements', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length);
  });
});
