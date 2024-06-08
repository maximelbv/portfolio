import ClassicHeroHeader from "../components/ClassicHeroHeader/ClassicHeroHeader";

const pageMeta: IPageMeta = {
  title: "Frames",
  description: "a",
};

const FramesPage = () => {
  return (
    <div>
      <ClassicHeroHeader
        title={pageMeta.title}
        description={pageMeta.description}
      />
    </div>
  );
};

export default FramesPage;
