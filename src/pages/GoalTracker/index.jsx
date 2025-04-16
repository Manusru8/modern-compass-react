import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Progress,
  Icon,
  Badge,
  useColorModeValue,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import {
  FaCheckCircle,
  FaClock,
  FaFlag,
  FaTrophy,
  FaChartLine,
  FaCalendarAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const GoalCard = ({ title, description, progress, dueDate, category, status }) => {
  const statusColors = {
    'In Progress': 'yellow',
    Completed: 'green',
    'Not Started': 'gray',
    Overdue: 'red',
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor="brand.beige"
    >
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between">
          <Badge colorScheme={statusColors[status]}>{status}</Badge>
          <Badge variant="outline" colorScheme="blue">
            {category}
          </Badge>
        </HStack>
        <Heading size="md" color="brand.navy">
          {title}
        </Heading>
        <Text color="brand.gray">{description}</Text>
        <Box>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color="brand.gray">
              Progress
            </Text>
            <Text fontSize="sm" color="brand.navy" fontWeight="bold">
              {progress}%
            </Text>
          </HStack>
          <Progress
            value={progress}
            colorScheme={progress === 100 ? 'green' : 'blue'}
            rounded="full"
          />
        </Box>
        <HStack color="brand.gray" fontSize="sm">
          <Icon as={FaCalendarAlt} />
          <Text>Due: {dueDate}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

const StatCard = ({ icon, label, value, change }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor="brand.beige"
    >
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Icon as={icon} w={6} h={6} color="brand.navy" />
          <Text
            color={change >= 0 ? 'green.500' : 'red.500'}
            fontSize="sm"
            fontWeight="bold"
          >
            {change > 0 ? '+' : ''}
            {change}%
          </Text>
        </HStack>
        <VStack align="start" spacing={1}>
          <Text fontSize="2xl" fontWeight="bold" color="brand.navy">
            {value}
          </Text>
          <Text fontSize="sm" color="brand.gray">
            {label}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

const GoalTracker = () => {
  const goals = [
    {
      title: 'Complete AI Fundamentals Course',
      description: 'Master the basics of artificial intelligence and machine learning.',
      progress: 75,
      dueDate: 'May 15, 2024',
      category: 'Skill Development',
      status: 'In Progress',
    },
    {
      title: 'Network Expansion',
      description: 'Connect with 20 industry professionals in target companies.',
      progress: 100,
      dueDate: 'April 30, 2024',
      category: 'Networking',
      status: 'Completed',
    },
    {
      title: 'Technical Interview Prep',
      description: 'Complete 50 coding challenges and 10 mock interviews.',
      progress: 30,
      dueDate: 'June 1, 2024',
      category: 'Career Growth',
      status: 'In Progress',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Goal Tracker</Heading>
            <Text fontSize="xl" maxW="2xl">
              Set meaningful goals, track your progress, and celebrate your
              achievements on your career journey.
            </Text>
            <Button size="lg" variant="primary">
              Set New Goal
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Stats Overview */}
      <Box py={12}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            <StatCard
              icon={FaCheckCircle}
              label="Goals Completed"
              value="12"
              change={8}
            />
            <StatCard
              icon={FaClock}
              label="In Progress"
              value="5"
              change={2}
            />
            <StatCard
              icon={FaFlag}
              label="Success Rate"
              value="85%"
              change={5}
            />
            <StatCard
              icon={FaTrophy}
              label="Achievements"
              value="24"
              change={3}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Progress Overview */}
      <Box py={12} bg="gray.50">
        <Container maxW="6xl">
          <VStack spacing={12}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
              <Box
                bg="white"
                p={6}
                rounded="lg"
                shadow="md"
                borderWidth="1px"
                borderColor="brand.beige"
              >
                <VStack spacing={4}>
                  <CircularProgress
                    value={75}
                    size="120px"
                    thickness="8px"
                    color="brand.navy"
                  >
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Heading size="md" color="brand.navy">
                    Overall Progress
                  </Heading>
                  <Text color="brand.gray" textAlign="center">
                    You're making great progress towards your goals!
                  </Text>
                </VStack>
              </Box>
              <Box
                bg="white"
                p={6}
                rounded="lg"
                shadow="md"
                borderWidth="1px"
                borderColor="brand.beige"
              >
                <VStack spacing={4}>
                  <Icon as={FaChartLine} w={12} h={12} color="brand.navy" />
                  <Heading size="md" color="brand.navy">
                    Monthly Growth
                  </Heading>
                  <Text color="brand.gray" textAlign="center">
                    15% increase in goal completion rate
                  </Text>
                </VStack>
              </Box>
              <Box
                bg="white"
                p={6}
                rounded="lg"
                shadow="md"
                borderWidth="1px"
                borderColor="brand.beige"
              >
                <VStack spacing={4}>
                  <Icon as={FaTrophy} w={12} h={12} color="brand.navy" />
                  <Heading size="md" color="brand.navy">
                    Recent Achievement
                  </Heading>
                  <Text color="brand.gray" textAlign="center">
                    Completed networking milestone!
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Active Goals */}
      <Box py={12}>
        <Container maxW="6xl">
          <VStack spacing={8} align="stretch">
            <HStack justify="space-between">
              <Heading size="lg" color="brand.navy">
                Active Goals
              </Heading>
              <Button variant="primary">View All Goals</Button>
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {goals.map((goal) => (
                <MotionBox
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <GoalCard {...goal} />
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box py={20} bg="brand.navy" color="brand.beige">
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={8}>
            <Heading size="xl">Ready to Achieve More?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Set new goals, track your progress, and take your career to the next
              level with our comprehensive goal tracking system.
            </Text>
            <Button size="lg" variant="primary">
              Create Your Next Goal
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default GoalTracker; 