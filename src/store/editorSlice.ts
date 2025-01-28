import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { websiteData } from '@/data/websiteData';

export interface EditorState {
  websiteData: typeof websiteData;
  selectedSection: string | null;
}

const initialState: EditorState = {
  websiteData: websiteData,
  selectedSection: null,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateWebsiteData: (state, action: PayloadAction<typeof websiteData>) => {
      state.websiteData = action.payload;
    },
    updateSection: (state, action: PayloadAction<Partial<typeof websiteData>>) => {
      state.websiteData = { ...state.websiteData, ...action.payload };
    },
    setSelectedSection: (state, action: PayloadAction<string | null>) => {
      state.selectedSection = action.payload;
    },
  },
});

export const { updateWebsiteData, updateSection, setSelectedSection } = editorSlice.actions;

export default editorSlice.reducer;
