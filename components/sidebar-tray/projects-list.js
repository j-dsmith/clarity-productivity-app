import ProjectTile from '../sidebar-items/project-tile';

const ProjectsList = ({ projects, deleteActive, handleDeleteProject }) => {
  const renderProjects = () => {
    if (projects === undefined) {
      return null;
    }

    return projects.map(({ _id, title, createdAt, notes }) => {
      const formattedTimestamp = new Date(createdAt).toLocaleDateString();
      const numNotes = notes.length;
      return (
        <ProjectTile
          key={_id}
          id={_id}
          title={title}
          createdAt={formattedTimestamp}
          numNotes={numNotes}
          deleteActive={deleteActive}
          handleDeleteProject={handleDeleteProject}
        />
      );
    });
  };

  return <>{renderProjects()}</>;
};

export default ProjectsList;
