import ClassicHeroHeader from "../components/ClassicHeroHeader/ClassicHeroHeader";

const HomePage = () => {
  const pageMeta: IPageMeta = {
    title: "Home",
    description: "Nothing to see here for the moment",
  };

  return (
    <div>
      <ClassicHeroHeader
        title={pageMeta.title}
        description={pageMeta.description}
      />
    </div>
  );
};

export default HomePage;
