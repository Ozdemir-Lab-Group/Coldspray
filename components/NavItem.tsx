import { useState } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavItemProps {
  isLast?: Boolean;
  href: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  onClick = () => {},
  isLast = false,
  href = "/",
}) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      onClick={onClick}
    >
      <Link href={href}>{children}</Link>
    </Text>
  );
};

export default NavItem;
