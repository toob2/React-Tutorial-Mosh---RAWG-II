import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
        padding="0.5rem"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer
                key={skeleton}
                children={<GameCardSkeleton />}
              />
            ))
          : data.map((game) => (
              <GameCardContainer
                key={game.id}
                children={<GameCard game={game} />}
              />
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
