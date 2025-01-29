import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './editorSlice';
import { syncMiddleware } from './syncMiddleware';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(syncMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
