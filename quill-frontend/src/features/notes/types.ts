export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export interface Category {
  name: string;
  color: string; // e.g., "blue", "green", etc.
}

export interface NotesState {
  notes: Note[];
  categories: Category[];
}
