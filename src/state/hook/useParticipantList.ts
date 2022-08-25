import { useRecoilValue } from 'recoil';
import { listaParticipantes } from '../atom';

export const useParticipantList = () => {
  return useRecoilValue(listaParticipantes);
};
