import { Banner, PopularMovie, TopRankedMovie } from "@/components";

const MainPage = () => {
  return (
    <main>
      <Banner />
      <TopRankedMovie />
      <PopularMovie />
    </main>
  );
};

export default MainPage;
