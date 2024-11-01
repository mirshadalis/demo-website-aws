import { Box, Flex, Button, Text, Spacer } from '@chakra-ui/react';

const Navbar = () => (
  <Box bg="teal.500" p={4} color="white">
    <Flex align="center">
      <Text fontSize="xl" fontWeight="bold">DemoSite</Text>
      <Spacer />
      <Button colorScheme="teal" variant="outline">Login</Button>
    </Flex>
  </Box>
);

export default Navbar;
