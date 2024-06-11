import Carousel from "../components/Carousel/Carousel";
import ClassicHeroHeader from "../components/ClassicHeroHeader/ClassicHeroHeader";

const HomePage = () => {
  const pageMeta: IPageMeta = {
    title: "Maxime Lefebvre",
    description: "Creative Developer & Interaction Designer",
    // description: "creative coding, motion design, 3D & data",
  };

  return (
    <div>
      <ClassicHeroHeader
        title={pageMeta.title}
        description={pageMeta.description}
      />
      <Carousel />
    </div>
  );
};

export default HomePage;
