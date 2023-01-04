import { Box } from "@chakra-ui/layout";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user } = useAuth();
  if (user) {
    return <Box> Welcome {user.email.toString()}</Box>;
  } else {
    return <Box> This is the home page</Box>;
  }
}

export default HomePage;
