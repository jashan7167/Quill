export interface User {
  id: string;
  // add other user fields as needed
}

export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  color: string;
  pinned: boolean;
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
  user: User;
}

export interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
  selectedNote: Note | null;
}
