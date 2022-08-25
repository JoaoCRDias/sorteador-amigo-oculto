import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState, listaParticipantes } from '../atom';

export const useAddPartcipant = () => {
  const setList = useSetRecoilState(listaParticipantes);
  const list = useRecoilValue(listaParticipantes);
  const setError = useSetRecoilState(errorState);
  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError('Duplicated names is not permitted!');
      setTimeout(() => setError(''), 3000);
      return;
    }
    return setList((listaAtual) => [...listaAtual, participantName]);
  };
};
