import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
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
        spacing={10}
        padding="0.5rem"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer
                children={<GameCardSkeleton key={skeleton} />}
              />
            ))
          : games.map((game) => (
              <GameCardContainer
                children={<GameCard key={game.id} game={game} />}
              />
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
