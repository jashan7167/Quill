import React, { useState } from "react";
import NoteGrid from "./NoteGrid";
import { Note } from "@/features/notes/types";

const dummyNotes: Note[] = [
  {
    id: "1",
    title: "Meeting Notes",
    content: "Discuss project roadmap, assign tasks.",
    category: "Work",
    color: "#3b82f6",
    pinned: true,
    createdAt: "2025-04-08T00:00:00Z",
    updatedAt: "2025-04-08T00:00:00Z",
    user: { id: "u1" },
  },
  {
    id: "2",
    title: "Grocery List",
    content: "Milk, Eggs, Bread, Cheese",
    category: "Personal",
    color: "#10b981",
    pinned: false,
    createdAt: "2025-04-08T00:00:00Z",
    updatedAt: "2025-04-08T00:00:00Z",
    user: { id: "u1" },
  },
  {
    id: "3",
    title: "Startup Idea",
    content: "A platform to match mentors and mentees",
    category: "Ideas",
    color: "#f59e0b",
    pinned: false,
    createdAt: "2025-04-08T00:00:00Z",
    updatedAt: "2025-04-08T00:00:00Z",
    user: { id: "u1" },
  },
];

const NoteGridWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("Newest");

  const filteredNotes =
    selectedCategory === "All"
      ? dummyNotes
      : dummyNotes.filter((note) => note.category === selectedCategory);

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortType === "Newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <section className="px-4 py-10">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Filter and Sort */}
        <div className="flex justify-end gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="
              px-4 py-2 rounded-md
              bg-white/10 dark:bg-zinc-800/50
              border border-white/10 dark:border-zinc-700/50
              text-white
              transition-colors duration-300
            "
          >
            <option>All</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Ideas</option>
          </select>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="
              px-4 py-2 rounded-md
              bg-white/10 dark:bg-zinc-800/50
              border border-white/10 dark:border-zinc-700/50
              text-white
              transition-colors duration-300
            "
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>

        {/* Notes Grid */}
        <NoteGrid notes={sortedNotes} filteredCategory={selectedCategory} />
      </div>
    </section>
  );
};

export default NoteGridWrapper;
