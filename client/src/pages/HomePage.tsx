import ClassicHeroHeader from "../components/ClassicHeroHeader/ClassicHeroHeader";

const HomePage = () => {
  const pageMeta: IPageMeta = {
    title: "Maxime Lefebvre",
    description: "creative developer & Interaction designer",
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
