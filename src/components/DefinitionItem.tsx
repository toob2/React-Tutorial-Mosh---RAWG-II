import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box my={5}>
      <Heading as="dd" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dt>{children}</dt>
    </Box>
  );
};

export default DefinitionItem;
