"use client";
import css from "./NotePreview.module.css";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { type Note } from "@/types/note";

type Props = {
  note: Note;
};
const NotePreviewClient = ({ note }: Props) => {
  document.body.style.overflow = "hidden";
  const router = useRouter();
  const close = () => {
    router.back();
    document.body.style.overflow = "";
  };

  return (
    <Modal onClose={close}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note?.title}</h2>
          </div>
          <p className={css.content}>{note?.content}</p>
          <p className={css.date}>{note?.createdAt}</p>
        </div>
        <button className={css.backBtn} onClick={close}>
          Go Back
        </button>
      </div>
    </Modal>
  );
};

export default NotePreviewClient;
