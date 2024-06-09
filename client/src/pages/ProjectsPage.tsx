import ClassicHeroHeader from "../components/ClassicHeroHeader/ClassicHeroHeader";

const pageMeta: IPageMeta = {
  title: "Projects",
  description: "A collection of my digital design experiments",
};

const ProjectsPage = () => {
  return (
    <div>
      <ClassicHeroHeader
        title={pageMeta.title}
        description={pageMeta.description}
      />
    </div>
  );
};

export default ProjectsPage;
