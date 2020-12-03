import cities from './cities';

// TODO: add and export your own actions
function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export default setCities;
