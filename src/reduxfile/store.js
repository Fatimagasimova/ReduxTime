// reduxfile/store.js
import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import stopwatchReducer from './stopwatchSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    stopwatch: stopwatchReducer,
  },
});
