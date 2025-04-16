import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  VStack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <VStack
      spacing={4}
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      rounded="lg"
      shadow="lg"
      borderWidth="1px"
      borderColor="brand.beige"
      align="center"
      textAlign="center"
    >
      <Avatar size="xl" src={image} name={name} />
      <Box>
        <Heading size="md" color="brand.navy">
          {name}
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          {role}
        </Text>
      </Box>
      <Text color="brand.gray">{bio}</Text>
    </VStack>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/team/sarah.jpg',
      bio: 'With 15+ years in career development and leadership coaching, Sarah founded Modern Compass to help professionals navigate their career journeys.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: '/team/michael.jpg',
      bio: 'Michael brings extensive experience in AI and technology to help build innovative career development tools.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Career Development Lead',
      image: '/team/emily.jpg',
      bio: 'Emily specializes in helping professionals identify and achieve their career goals through personalized guidance.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={10}
            align="center"
          >
            <VStack spacing={6} flex={1} align={{ base: 'center', md: 'flex-start' }}>
              <Heading size="2xl">Our Mission</Heading>
              <Text fontSize="xl">
                Empowering modern professionals to thrive in an AI-driven world through
                continuous learning, adaptability, and intentional career growth.
              </Text>
            </VStack>
            <Box flex={1}>
              <Image
                src="/about-hero.png"
                alt="Modern Compass Mission"
                maxH="400px"
                objectFit="contain"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Story Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <Stack spacing={10} direction={{ base: 'column', md: 'row' }} align="center">
            <Box flex={1}>
              <Image
                src="/story-image.png"
                alt="Our Story"
                rounded="lg"
                shadow="2xl"
              />
            </Box>
            <VStack flex={1} spacing={6} align={{ base: 'center', md: 'flex-start' }}>
              <Heading color="brand.navy">Our Story</Heading>
              <Text color="brand.gray">
                Modern Compass was founded with a vision to revolutionize career
                development in the age of AI. We recognized the need for a more
                personalized, technology-driven approach to professional growth that
                addresses the unique challenges of today's rapidly evolving workplace.
              </Text>
              <Text color="brand.gray">
                Our platform combines human expertise with advanced AI capabilities
                to provide tailored guidance and practical tools that help professionals
                navigate their career journeys with confidence.
              </Text>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* Team Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading color="brand.navy" mb={4}>
                Meet Our Team
              </Heading>
              <Text color="brand.gray" maxW="2xl" mx="auto">
                Our diverse team of experts brings together years of experience in
                career development, technology, and professional coaching.
              </Text>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={10}
              px={{ base: 4, md: 0 }}
            >
              {teamMembers.map((member) => (
                <MotionBox
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <TeamMember {...member} />
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="2xl" mx="auto">
              <Heading color="brand.navy" mb={4}>
                Our Values
              </Heading>
              <Text color="brand.gray">
                These core values guide everything we do at Modern Compass.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {[
                {
                  title: 'Innovation',
                  description:
                    'Embracing new technologies and approaches to career development.',
                },
                {
                  title: 'Empowerment',
                  description:
                    'Providing tools and knowledge for independent career growth.',
                },
                {
                  title: 'Authenticity',
                  description:
                    'Fostering genuine connections and honest guidance.',
                },
              ].map((value) => (
                <Box
                  key={value.title}
                  p={6}
                  bg="white"
                  rounded="lg"
                  shadow="md"
                  borderWidth="1px"
                  borderColor="brand.beige"
                  textAlign="center"
                >
                  <Heading size="md" color="brand.navy" mb={4}>
                    {value.title}
                  </Heading>
                  <Text color="brand.gray">{value.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 