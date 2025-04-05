import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesState, Note, Category } from "./types";
import { v4 as uuidv4 } from "uuid";

const initialState: NotesState = {
  notes: [],
  categories: [
    { name: "Work", color: "blue" },
    { name: "Personal", color: "green" },
    { name: "Ideas", color: "purple" },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Omit<Note, "id" | "createdAt">>) => {
      state.notes.push({
        ...action.payload,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
      });
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addNote, deleteNote, addCategory } = notesSlice.actions;
export default notesSlice.reducer;
