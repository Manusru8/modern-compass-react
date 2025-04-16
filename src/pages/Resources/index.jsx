import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  HStack,
  Button,
  Icon,
  useColorModeValue,
  Tag,
  Link,
} from '@chakra-ui/react';
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  FaFileAlt,
  FaVideo,
  FaBook,
  FaTools,
  FaChartLine,
  FaLightbulb,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ResourceCard = ({ title, description, type, format, downloadUrl }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const iconColor = 'brand.navy';

  const formatIcons = {
    pdf: FaFileAlt,
    video: FaVideo,
    ebook: FaBook,
    tool: FaTools,
    template: FaChartLine,
    guide: FaLightbulb,
  };

  return (
    <Box
      bg={cardBg}
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor="brand.beige"
    >
      <VStack align="stretch" spacing={4}>
        <HStack spacing={4}>
          <Icon as={formatIcons[format]} w={6} h={6} color={iconColor} />
          <Tag size="sm" variant="solid" bg="brand.navy" color="brand.beige">
            {type}
          </Tag>
        </HStack>
        <Heading size="md" color="brand.navy">
          {title}
        </Heading>
        <Text color="brand.gray">{description}</Text>
        <Button
          leftIcon={<DownloadIcon />}
          variant="primary"
          as={Link}
          href={downloadUrl}
          isExternal
        >
          Download Resource
        </Button>
      </VStack>
    </Box>
  );
};

const CategorySection = ({ title, description, resources }) => {
  return (
    <Box py={12}>
      <Container maxW="6xl">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="lg" color="brand.navy" mb={4}>
              {title}
            </Heading>
            <Text color="brand.gray">{description}</Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {resources.map((resource, index) => (
              <MotionBox
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ResourceCard {...resource} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const Resources = () => {
  const careerResources = [
    {
      title: 'Career Transition Playbook',
      description: 'A comprehensive guide to navigating career changes successfully.',
      type: 'Guide',
      format: 'pdf',
      downloadUrl: '/resources/career-transition-playbook.pdf',
    },
    {
      title: 'Resume Builder Template',
      description: 'Professional resume templates with AI-powered suggestions.',
      type: 'Template',
      format: 'template',
      downloadUrl: '/resources/resume-builder.zip',
    },
    {
      title: 'Interview Success Guide',
      description: 'Master the art of interviewing with our expert tips.',
      type: 'Guide',
      format: 'ebook',
      downloadUrl: '/resources/interview-success-guide.pdf',
    },
  ];

  const skillDevelopmentResources = [
    {
      title: 'AI Skills Masterclass',
      description: 'Learn essential AI concepts for modern professionals.',
      type: 'Course',
      format: 'video',
      downloadUrl: '/resources/ai-skills-masterclass.mp4',
    },
    {
      title: 'Leadership Toolkit',
      description: 'Essential tools and frameworks for effective leadership.',
      type: 'Tool',
      format: 'tool',
      downloadUrl: '/resources/leadership-toolkit.zip',
    },
    {
      title: 'Communication Skills Workshop',
      description: 'Enhance your professional communication abilities.',
      type: 'Workshop',
      format: 'video',
      downloadUrl: '/resources/communication-workshop.mp4',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Resource Library</Heading>
            <Text fontSize="xl" maxW="2xl">
              Access our curated collection of tools, guides, and resources to
              support your professional growth journey.
            </Text>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ExternalLinkIcon />}
              as={Link}
              href="/resources/all"
            >
              Browse All Resources
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Career Resources Section */}
      <CategorySection
        title="Career Development Resources"
        description="Essential tools and guides for career advancement and transitions."
        resources={careerResources}
      />

      {/* Skills Development Section */}
      <Box bg="gray.50">
        <CategorySection
          title="Skill Development Resources"
          description="Resources to help you build the skills needed for success."
          resources={skillDevelopmentResources}
        />
      </Box>

      {/* Premium Resources CTA */}
      <Box py={20} bg="brand.navy" color="brand.beige">
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={8}>
            <Heading size="xl">Unlock Premium Resources</Heading>
            <Text fontSize="lg" maxW="2xl">
              Get access to our complete library of premium resources, tools, and
              templates to accelerate your career growth.
            </Text>
            <Button size="lg" variant="primary">
              Upgrade to Premium
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Resources; 