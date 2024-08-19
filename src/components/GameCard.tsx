import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((platform) => platform.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Link to={"/games/" + game.slug}>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </Link>
      </CardBody>
    </Card>
  );
};

export default GameCard;
