import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { websiteData } from '@/data/websiteData';

export interface EditorState {
  websiteData: typeof websiteData;
}

const initialState: EditorState = {
  websiteData: websiteData,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateWebsiteData: (state, action: PayloadAction<Partial<typeof websiteData>>) => {
      state.websiteData = { ...state.websiteData, ...action.payload };
    },

  },
});

export const { updateWebsiteData } = editorSlice.actions;

export default editorSlice.reducer;
