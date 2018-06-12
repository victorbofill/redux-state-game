export const NEW_ROUND = 'NEW_ROUND';
// export const SELECTION = 'SELECTION';
// export const TALLY = 'TALLY';

export const ROUND = {
  PLAYING: 'PLAYING',
  MATCH: 'MATCH',
  NOMATCH: 'NO MATCH'
};

export const getMatch = state => state.match;
export const getSelections = state => state.selections;
export const getRoundState = state => {
  const [one, two] = getSelections(state);

  if(!one || !two) return ROUND_STATE.PLAYING;
  if(one === two) return ROUND_STATE.MATCH;

  //if no more matches to make, win.
};

const firstSelections = () => [];

export function selections(state = firstSelections(), { type, payload}) {
  switch(type) {
    case SELECTION: {
      const copy = [...state];
      copy[payload.index] = payload.choice;
      return copy;
    }
    case NEW_ROUND: {
      return firstSelections();
    }
    default:
      return state;
  }
}

export const initMatch = () => ({
  [ROUND_STATE.MATCH]: 0,
  [ROUND_STATE.NoMATCH]: 0,
  [ROUND_STATE.WIN]: 0
});

export function match(state = initMatch(), { type, payload }) {
  switch(type) {
    case TALLY:
      return {
        ...state,
        [payload]: state[payload] + 1
      };
    default:
      return state;
  }
}