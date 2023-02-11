import { createGlobalState } from 'react-hooks-global-state';


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    maxRender:4,
    user:'yossi',
});




export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
  }