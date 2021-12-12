import NoteTile from '../sidebar-items/note-tile';

const NotesList = ({ currentProjectId, projects }) => {
  const renderNotes = () => {
    if (projects === undefined || currentProjectId === undefined) {
      return;
    }

    const currentProject = projects.filter(
      ({ _id }) => _id === currentProjectId
    )[0];

    return currentProject.notes.map(({ title, _id, createdAt }) => {
      const formattedTimestamp = new Date(createdAt).toLocaleDateString();
      return (
        <NoteTile key={_id} title={title} createdAt={formattedTimestamp} />
      );
    });
  };
  return <>{renderNotes()}</>;
};

export default NotesList;
