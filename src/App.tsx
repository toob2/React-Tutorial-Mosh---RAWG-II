import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector, { Order } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  order: Order | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genre: Genre) => {
    console.log("selecting genre", genre);
    setGameQuery({ ...gameQuery, genreId: genre.id });
  };

  const handleSelectedPlatform = (platform: Platform) => {
    console.log("platform", platform);
    setGameQuery({ ...gameQuery, platformId: platform.id });
  };

  const handleOnSelectSortOrder = (order: Order) => {
    console.log("order", order);
    setGameQuery({ ...gameQuery, order });
  };

  const handleOnSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // > 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={handleOnSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="10px">
            <GenreList
              setGenre={handleSelectedGenre}
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box padding={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                setPlatform={handleSelectedPlatform}
                selectedPlatform={gameQuery.platformId}
              />
              <SortSelector
                onSelectSortOrder={handleOnSelectSortOrder}
                selectedSortOrder={gameQuery.order}
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
