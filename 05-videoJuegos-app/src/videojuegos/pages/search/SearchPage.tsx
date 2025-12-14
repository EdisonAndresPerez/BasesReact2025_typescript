import CustomJumbotron from "@/components/custom/CustomJumbotron";
import SearchControls from "./ui/SearchControls";
import StatsVideoGames from "@/videojuegos/components/StatsVideoGames";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search Video Games"
        description="Explore, and manage your favorite video games"
      />

      <StatsVideoGames />

      <SearchControls />
    </>
  );
};

export default SearchPage;
