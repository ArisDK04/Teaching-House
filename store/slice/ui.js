import { createSlice } from '@reduxjs/toolkit';

const sliceUI = createSlice({
  name: 'ui',
  initialState: {
    themes: {
      selection: '----th-friendly',
      options: {
        '--th-formal': 'Formal',
        '--th-minimal': 'Minimal',
        '--th-friendly': 'Friendly'
      }
    }
  },
  reducers: {
    setTheme(store, state) {
      store.themes.selection = state.payload;
    }
  }
});

export default sliceUI;
