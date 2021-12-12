import NoteTile from '../sidebar-items/note-tile';

const NotesList = ({
  notes,
  handleDeleteNote,
  deleteActive,
  currentProjectId,
}) => {
  const renderNotes = () => {
    return notes.map(({ title, _id, createdAt }) => {
      const formattedTimestamp = new Date(createdAt).toLocaleDateString();
      return (
        <NoteTile
          key={_id}
          noteId={_id}
          currentProjectId={currentProjectId}
          title={title}
          createdAt={formattedTimestamp}
          handleDeleteNote={handleDeleteNote}
          deleteActive={deleteActive}
        />
      );
    });
  };
  return <>{renderNotes()}</>;
};

export default NotesList;
