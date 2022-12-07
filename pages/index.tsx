import { Box } from "@chakra-ui/layout";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user } = useAuth();
  if (user) {
    <Box> Welcome {user.displayName}</Box>;
  } else {
    <Box> This is the home page</Box>;
  }
}

export default HomePage;
