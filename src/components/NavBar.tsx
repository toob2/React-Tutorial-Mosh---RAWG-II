import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={logo} boxSize="5rem" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
