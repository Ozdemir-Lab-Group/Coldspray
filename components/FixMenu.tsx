import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

interface FixMenuProps {}

const FixMenu: React.FC<FixMenuProps> = () => {
  return (
    <Box>
      <Menu>
        <Box>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <Text> Fixes </Text>
        </Box>
        <MenuList>
          <MenuItem>Fixture Type 1</MenuItem>
          <MenuItem>Fixture Type 2 </MenuItem>
          <MenuItem>Fixture Type 3</MenuItem>
          <MenuItem>Fixture Type 4</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FixMenu;
