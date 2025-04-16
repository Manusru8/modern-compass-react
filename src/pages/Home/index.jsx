import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Flex,
  Image,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCompass, FaBrain, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      rounded="lg"
      shadow="lg"
      borderWidth="1px"
      borderColor="brand.beige"
      align="center"
      textAlign="center"
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        rounded="full"
        bg="brand.navy"
        mb={4}
      >
        <Icon as={icon} w={8} h={8} color="brand.beige" />
      </Flex>
      <Heading size="md" mb={2} color="brand.navy">
        {title}
      </Heading>
      <Text color="brand.gray">{text}</Text>
    </Stack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="brand.navy"
        color="brand.beige"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="6xl" py={{ base: 20, md: 28 }}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={10}
            align="center"
          >
            <VStack
              spacing={6}
              align={{ base: 'center', md: 'flex-start' }}
              flex={1}
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="bold"
                  lineHeight="shorter"
                >
                  Navigate Your Future with Confidence
                </Heading>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Text fontSize="xl" maxW="lg">
                  Our expert guidance and innovative solutions help you chart a clear path forward,
                  empowering you to reach your goals.
                </Text>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                  <Button size="lg" variant="primary">
                    Get Started
                  </Button>
                  <Button size="lg" variant="secondary">
                    Learn More
                  </Button>
                </Stack>
              </MotionBox>
            </VStack>
            <Box flex={1} display={{ base: 'none', md: 'block' }}>
              <Image
                src="/hero-image.png"
                alt="Professional Growth"
                maxH="400px"
                objectFit="contain"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="2xl" mx="auto">
              <Heading
                as="h2"
                size="xl"
                mb={4}
                color="brand.navy"
              >
                Core Pillars
              </Heading>
              <Text fontSize="lg" color="brand.gray">
                Discover how Modern Compass can help you achieve your career goals
                through our comprehensive approach.
              </Text>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={10}
              px={{ base: 4, md: 0 }}
            >
              <Feature
                icon={FaCompass}
                title="Career Growth"
                text="Navigate your career path with expert guidance and strategic planning."
              />
              <Feature
                icon={FaBrain}
                title="Mindset Development"
                text="Cultivate a growth mindset and develop essential leadership skills."
              />
              <Feature
                icon={FaBalanceScale}
                title="Work-Life Integration"
                text="Achieve balance and fulfillment in both professional and personal life."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={8}>
            <Heading size="xl">Ready to Navigate Your Career with Confidence?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Join Modern Compass today and take the first step towards achieving
              your career goals with clarity and purpose.
            </Text>
            <Button size="lg" variant="primary">
              Start Your Journey
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 