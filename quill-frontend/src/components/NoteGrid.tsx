import React from "react";
import { Note } from "@/features/notes/types";
import NoteCard from "@/components/NoteCard";

interface Props {
  notes: Note[];
  filteredCategory: string;
}

const NoteGrid: React.FC<Props> = ({ notes, filteredCategory }) => {
  return (
    <div
      className="
        rounded-2xl p-6
        bg-white/30 dark:bg-zinc-800/30
        backdrop-blur-md
        border border-white/50 dark:border-zinc-700/50
        shadow-xl
        transition-all duration-300
      "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            isFiltered={filteredCategory !== "All"}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteGrid;
