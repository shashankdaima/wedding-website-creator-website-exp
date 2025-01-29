import { Middleware } from '@reduxjs/toolkit';
import { RootState, store } from './store';

const STORAGE_KEY = 'wedding_website_state';

export const syncMiddleware: Middleware = store => next => action => {
  const result = next(action);
  
  // After state changes, save to localStorage
  const state = store.getState() as RootState;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.editor));

  return result;
};

// Listen for storage events from other tabs
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        const newState = JSON.parse(e.newValue);
        // Dispatch an action to update the state
        store.dispatch({ type: 'editor/setState', payload: newState });
      } catch (error) {
        console.error('Error parsing synced state:', error);
      }
    }
  });
}
