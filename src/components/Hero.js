import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Hero = () => (
  <Box textAlign="center" py={10} px={6} bg="gray.100">
    <Heading as="h1" size="2xl" mb={4}>Welcome to DemoSite</Heading>
    <Text fontSize="lg" color="gray.500" mb={6}>
      A beautiful demo website for testing deployments.
    </Text>
    <Button size="lg" colorScheme="teal">Get Started</Button>
  </Box>
);

export default Hero;
