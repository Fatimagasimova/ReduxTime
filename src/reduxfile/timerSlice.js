import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
  laps: [],
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
  increment: (state, action) => {
    if (state[action.payload] < 59) {
      state[action.payload]++;
    }
  },
  decrement: (state, action) => {
    if (state[action.payload] > 0) {
      state[action.payload]--;
    }
  },
  setTimeValue: (state, action) => {
    const { label, value } = action.payload;
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 59) {
      state[label] = parsed;
    }
  },
  tickDown: (state) => {
    if (state.hours === 0 && state.minutes === 0 && state.seconds === 0) {
      state.isRunning = false;
      return;
    }

    if (state.seconds > 0) {
      state.seconds--;
    } else if (state.minutes > 0) {
      state.minutes--;
      state.seconds = 59;
    } else if (state.hours > 0) {
      state.hours--;
      state.minutes = 59;
      state.seconds = 59;
    }
  },
  tick: (state) => {
    state.seconds++;
    if (state.seconds === 60) {
      state.seconds = 0;
      state.minutes++;
      if (state.minutes === 60) {
        state.minutes = 0;
        state.hours++;
      }
    }
  },
  start: (state) => {
    state.isRunning = true;
  },
  pause: (state) => {
    state.isRunning = false;
  },
  resetTime: (state) => {
    state.hours = 0;
    state.minutes = 0;
    state.seconds = 0;
    state.isRunning = false;
    state.laps = [];
  },
  addLap: (state) => {
    const timeString = `${String(state.hours).padStart(2, '0')}:${String(state.minutes).padStart(2, '0')}:${String(state.seconds).padStart(2, '0')}`;
    state.laps.push(timeString);
  },
  toggleRunning: (state) => {
    state.isRunning = !state.isRunning;
  },
}
});

export const {
  increment,
  decrement,
  setTimeValue,
  tickDown,
  tick,
  start,
  pause,
  resetTime,
  addLap,
  toggleRunning,
} = timerSlice.actions;


export default timerSlice.reducer;
