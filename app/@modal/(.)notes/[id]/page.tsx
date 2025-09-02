import { fetchNoteById } from "@/lib/api";
import { type Note } from "@/types/note";
import NotePreviewClient from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;

  const note: Note = await fetchNoteById({ id });
  return <NotePreviewClient note={note} />;
};

export default NotePreview;
