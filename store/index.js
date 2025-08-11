import { configureStore } from '@reduxjs/toolkit';
import sliceUI from './slice/ui';

const store = configureStore({
  reducer: {
    ui: sliceUI.reducer
  }
});

export default store;