import Link from "next/link";

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&per_page=10');
    const data = await res.json();
    return data?.items as any[];

}

export default async function NotesPage() {
    const notes = await getNotes();
  return (
    <div>
      <h1>Notes Page</h1>
      <div>
        {notes.map((note) => {
            return (
                <div key={note.id}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                </div>
            );
        } )}
        </div>
      </div>
  );
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{created}</p>
            </div>
        </Link>
);};