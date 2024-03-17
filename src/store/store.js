// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "white",
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
