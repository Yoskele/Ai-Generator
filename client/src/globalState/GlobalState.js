import { createGlobalState } from 'react-hooks-global-state';


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    connectedAccount: '',
    isLoggedIn: false,
    maxRender:5,
});




export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
  }