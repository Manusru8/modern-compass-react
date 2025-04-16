import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Image,
  Input,
  Button,
  IconButton,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="brand.navy" color="brand.beige">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Link as={RouterLink} to="/">
                <Image h="30px" src="/logo.png" alt="Modern Compass" />
              </Link>
            </Box>
            <Text fontSize="sm">
              Navigate your future with confidence through expert guidance and innovative solutions.
            </Text>
            <Stack direction="row" spacing={6}>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="md"
                color="brand.beige"
                variant="ghost"
                _hover={{ bg: 'brand.beige', color: 'brand.navy' }}
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                color="brand.beige"
                variant="ghost"
                _hover={{ bg: 'brand.beige', color: 'brand.navy' }}
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                color="brand.beige"
                variant="ghost"
                _hover={{ bg: 'brand.beige', color: 'brand.navy' }}
              />
            </Stack>
          </Stack>

          <Stack align="flex-start">
            <Heading size="md" mb={2}>Company</Heading>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/blog">Blog</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/careers">Careers</Link>
          </Stack>

          <Stack align="flex-start">
            <Heading size="md" mb={2}>Resources</Heading>
            <Link as={RouterLink} to="/resources">Resource Library</Link>
            <Link as={RouterLink} to="/compass-coach">Compass Coach</Link>
            <Link as={RouterLink} to="/goal-tracker">Goal Tracker</Link>
            <Link as={RouterLink} to="/testimonials">Testimonials</Link>
          </Stack>

          <Stack align="flex-start">
            <Heading size="md" mb={2}>Stay Updated</Heading>
            <VStack spacing={4} w="100%">
              <Input
                placeholder="Enter your email"
                bg="white"
                border={0}
                color="brand.navy"
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Button
                w="100%"
                variant="primary"
              >
                Subscribe
              </Button>
            </VStack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderColor="brand.beige">
        <Container
          maxW="6xl"
          py={4}
          display={{ base: 'block', md: 'flex' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>© 2024 Modern Compass. All rights reserved</Text>
          <Stack
            direction="row"
            spacing={6}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer; 