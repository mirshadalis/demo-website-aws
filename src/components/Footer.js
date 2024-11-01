import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box bg="teal.500" color="white" py={4} textAlign="center">
    <Text>&copy; {new Date().getFullYear()} DemoSite. All rights reserved.</Text>
  </Box>
);

export default Footer;
