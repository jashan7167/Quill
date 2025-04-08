import { Note } from "@/features/notes/types";
import { Pin } from "lucide-react";

interface Props {
  note: Note;
  isFiltered: boolean;
}

const NoteCard: React.FC<Props> = ({ note, isFiltered }) => {
  const bgColor = isFiltered
    ? `${note.color}20` // transparent hint of category color
    : "rgba(255,255,255,0.05)";

  return (
    <div
      className="p-4 rounded-2xl shadow-md backdrop-blur-md border border-white/10 relative h-50"
      style={{
        background: bgColor,
      }}
    >
      {note.pinned && (
        <Pin
          size={16}
          className="absolute top-3 right-3 text-yellow-400"
          fill="currentColor"
        />
      )}
      <h3 className="text-lg font-semibold mb-12">{note.title}</h3>
      <p className="text-sm text-zinc-400">{note.content}</p>
      <p className="text-xs text-zinc-500 absolute bottom-2">
        {new Date(note.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default NoteCard;
