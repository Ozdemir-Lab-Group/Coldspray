import {
  Text,
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useState } from "react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useAuth } from "../../context/AuthContext";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { user, logout } = useAuth();
  return (
    <Flex mb={8} p={8} as="nav" align="center" justify="space-between" wrap="wrap" w="100%">
      <Box w="200px">
        <Text fontSize="lg" fontWeight="bold">
          Northeastern Coldspray Laboratory
        </Text>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <NavItem href="/">Home</NavItem>
          <Menu>
            <MenuButton mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 8 }} display="block">
              ToolBox <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="/toolbox/dynamic">Gas Dynamics ToolBox</Link>
              </MenuItem>
              <MenuItem>Residual Stress ToolBox</MenuItem>
              <MenuItem>
                <Link href="/toolbox/pointcloud">CS Repair ToolBox</Link>
              </MenuItem>
              <MenuItem>CS AM ToolBox</MenuItem>
              <MenuItem>
                <Link href="/toolbox/material">Material Select Toolbox</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/toolbox/training">CS Training ToolBox</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/toolbox/saved">View Saved Runs</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          {user ? (
            <NavItem href="/" onClick={logout}>
              Log Out
            </NavItem>
          ) : (
            <>
              <NavItem href="/register">Register</NavItem>
              <NavItem href="/login">Login</NavItem>
            </>
          )}
          <NavItem href="/" isLast>
            About
          </NavItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Nav;
