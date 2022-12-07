import { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface MenuItemProps {
  isLast?: Boolean;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  isLast = false,
  href = "/",
}) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={href}>{children}</Link>
    </Text>
  );
};

export default MenuItem;
