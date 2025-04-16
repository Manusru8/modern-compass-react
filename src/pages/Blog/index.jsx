import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  VStack,
  HStack,
  Tag,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const BlogCard = ({ title, excerpt, image, category, date, author }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      rounded="lg"
      shadow="md"
      overflow="hidden"
      borderWidth="1px"
      borderColor="brand.beige"
    >
      <Image src={image} alt={title} h="200px" w="100%" objectFit="cover" />
      <Box p={6}>
        <HStack spacing={2} mb={2}>
          <Tag size="sm" variant="solid" bg="brand.navy" color="brand.beige">
            {category}
          </Tag>
          <Text fontSize="sm" color="brand.gray">
            {date}
          </Text>
        </HStack>
        <Heading size="md" mb={2} color="brand.navy">
          <Link
            as={RouterLink}
            to={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}
            _hover={{ color: 'brand.blue' }}
          >
            {title}
          </Link>
        </Heading>
        <Text color="brand.gray" noOfLines={3} mb={4}>
          {excerpt}
        </Text>
        <HStack>
          <Image
            src={author.avatar}
            alt={author.name}
            boxSize="30px"
            rounded="full"
            mr={2}
          />
          <Text fontSize="sm" color="brand.gray">
            {author.name}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

const Blog = () => {
  const featuredPost = {
    title: 'Navigating Career Transitions in the Age of AI',
    excerpt:
      'Discover effective strategies for adapting your career path in response to technological advancement and artificial intelligence integration in the workplace.',
    image: '/blog/featured-post.jpg',
    category: 'Career Growth',
    date: 'April 15, 2024',
    author: {
      name: 'Sarah Johnson',
      avatar: '/team/sarah.jpg',
    },
  };

  const posts = [
    {
      title: 'Building a Growth Mindset for Professional Success',
      excerpt:
        'Learn how to develop and maintain a growth mindset that propels your career forward and helps you overcome challenges.',
      image: '/blog/mindset.jpg',
      category: 'Personal Development',
      date: 'April 12, 2024',
      author: {
        name: 'Emily Rodriguez',
        avatar: '/team/emily.jpg',
      },
    },
    {
      title: 'The Future of Work: Trends and Predictions',
      excerpt:
        'Explore emerging workplace trends and prepare yourself for the evolving landscape of professional opportunities.',
      image: '/blog/future-work.jpg',
      category: 'Industry Insights',
      date: 'April 10, 2024',
      author: {
        name: 'Michael Chen',
        avatar: '/team/michael.jpg',
      },
    },
    // Add more blog posts here
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Modern Compass Blog</Heading>
            <Text fontSize="xl" maxW="2xl">
              Insights and strategies for navigating your career with purpose in
              today's rapidly evolving professional landscape.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Search and Filter Section */}
      <Box py={8} bg="gray.50">
        <Container maxW="6xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            align="center"
          >
            <InputGroup maxW={{ base: 'full', md: '400px' }}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="brand.gray" />
              </InputLeftElement>
              <Input
                placeholder="Search articles..."
                bg="white"
                borderColor="brand.beige"
              />
            </InputGroup>
            <Select
              placeholder="Filter by category"
              bg="white"
              borderColor="brand.beige"
              maxW={{ base: 'full', md: '200px' }}
            >
              <option value="career-growth">Career Growth</option>
              <option value="personal-development">Personal Development</option>
              <option value="industry-insights">Industry Insights</option>
              <option value="leadership">Leadership</option>
              <option value="work-life-balance">Work-Life Balance</option>
            </Select>
          </Stack>
        </Container>
      </Box>

      {/* Featured Post Section */}
      <Box py={12}>
        <Container maxW="6xl">
          <Heading size="lg" mb={8} color="brand.navy">
            Featured Article
          </Heading>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard {...featuredPost} />
          </MotionBox>
        </Container>
      </Box>

      {/* Latest Posts Grid */}
      <Box py={12} bg="gray.50">
        <Container maxW="6xl">
          <Heading size="lg" mb={8} color="brand.navy">
            Latest Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {posts.map((post, index) => (
              <MotionBox
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Blog; 