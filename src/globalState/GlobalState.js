import { createGlobalState } from 'react-hooks-global-state';


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    maxRender:5,
});




export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
  }