import { createStore } from 'redux';

export function toggle() {
   return { type: 'toggle' }
}

const lightIs = 'off'

const lightSwitchReducer = (state = lightIs, action) => {
   switch(action.type) {
      case 'toggle':
         return state === 'off' ? 'on' : 'off';
      default:
         return state;
   }
};

export const store = createStore(lightSwitchReducer);