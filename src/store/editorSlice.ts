import { websiteData } from '@/data/websiteData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EditorState {
  websiteData: typeof websiteData;
}

// Return default state for server-side rendering
const initialState: EditorState = {
  websiteData
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateWebsiteData: (state, action: PayloadAction<Partial<typeof websiteData>>) => {
      state.websiteData = { ...state.websiteData, ...action.payload };
    },
    setState: (state, action: PayloadAction<EditorState>) => {
      return action.payload;
    },
    hydrateFromLocalStorage: (state) => {
      if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem('wedding_website_state');
        if (savedState) {
          try {
            const parsedState = JSON.parse(savedState);
            state.websiteData = parsedState.websiteData;
          } catch (error) {
            console.error('Error parsing saved state:', error);
          }
        }
      }
    }
  }
});

export const { updateWebsiteData, setState, hydrateFromLocalStorage } = editorSlice.actions;
export default editorSlice.reducer;
