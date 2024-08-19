import { Box } from "@chakra-ui/react";
import { transform } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius="0.5rem"
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
