import { atom } from 'recoil';

export const listaParticipantes = atom<string[]>({
  key: 'listaParticipantes',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
