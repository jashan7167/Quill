import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "@/features/notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

// Types for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
