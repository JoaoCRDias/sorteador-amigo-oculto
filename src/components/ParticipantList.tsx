import React from 'react';
import { useParticipantList } from '../state/hook/useParticipantList';

export const ParticipantList = () => {
  const participants: string[] = useParticipantList();
  return (
    <ul>
      {participants.map((participant) => {
        return <li key={participant}>{participant}</li>;
      })}
    </ul>
  );
};

export default ParticipantList;
