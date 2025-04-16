import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Input,
  Icon,
  Avatar,
  Flex,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { FaRobot, FaUser, FaBrain, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Feature = ({ icon, title, description }) => {
  return (
    <VStack
      spacing={4}
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor="brand.beige"
      align="center"
      textAlign="center"
    >
      <Icon as={icon} w={8} h={8} color="brand.navy" />
      <Heading size="md" color="brand.navy">
        {title}
      </Heading>
      <Text color="brand.gray">{description}</Text>
    </VStack>
  );
};

const ChatMessage = ({ isAI, message, timestamp }) => {
  return (
    <HStack
      spacing={4}
      align="flex-start"
      w="100%"
      justify={isAI ? 'flex-start' : 'flex-end'}
    >
      {isAI && (
        <Avatar
          icon={<FaRobot />}
          bg="brand.navy"
          color="brand.beige"
          name="Compass Coach"
        />
      )}
      <Box
        maxW="70%"
        bg={isAI ? 'white' : 'brand.navy'}
        color={isAI ? 'brand.gray' : 'brand.beige'}
        p={4}
        rounded="lg"
        shadow="md"
      >
        <Text>{message}</Text>
        <Text fontSize="xs" color={isAI ? 'gray.500' : 'brand.beige'} mt={2}>
          {timestamp}
        </Text>
      </Box>
      {!isAI && (
        <Avatar
          icon={<FaUser />}
          bg="brand.beige"
          color="brand.navy"
          name="You"
        />
      )}
    </HStack>
  );
};

const CompassCoach = () => {
  const chatMessages = [
    {
      isAI: true,
      message:
        'Hello! I'm your Compass Coach. How can I help you with your career journey today?',
      timestamp: '10:00 AM',
    },
    {
      isAI: false,
      message: 'I'm looking to transition into a tech role. Where should I start?',
      timestamp: '10:01 AM',
    },
    {
      isAI: true,
      message:
        'I'd be happy to help you plan your tech transition. Let's start by understanding your current background and the specific tech area you're interested in. Could you tell me more about your experience and goals?',
      timestamp: '10:01 AM',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Meet Your AI Career Coach</Heading>
            <Text fontSize="xl" maxW="2xl">
              Get personalized guidance and insights powered by AI to help navigate
              your career journey with confidence.
            </Text>
            <Button size="lg" variant="primary">
              Start a Conversation
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center" maxW="2xl" mx="auto">
              <Heading size="xl" color="brand.navy" mb={4}>
                How Compass Coach Helps You
              </Heading>
              <Text color="brand.gray">
                Our AI-powered career coach provides personalized guidance and
                actionable insights to help you achieve your professional goals.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Feature
                icon={FaBrain}
                title="Personalized Insights"
                description="Get tailored advice based on your unique career goals and experience."
              />
              <Feature
                icon={FaChartLine}
                title="Progress Tracking"
                description="Monitor your career development with clear metrics and milestones."
              />
              <Feature
                icon={FaLightbulb}
                title="Action Plans"
                description="Receive step-by-step guidance to achieve your career objectives."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Chat Interface Demo */}
      <Box py={20} bg="gray.50">
        <Container maxW="4xl">
          <VStack spacing={8}>
            <Heading size="xl" color="brand.navy">
              Experience Compass Coach
            </Heading>
            <Box
              w="100%"
              bg="white"
              rounded="lg"
              shadow="xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="brand.beige"
            >
              {/* Chat Header */}
              <Box bg="brand.navy" color="brand.beige" p={4}>
                <HStack>
                  <Avatar
                    icon={<FaRobot />}
                    bg="brand.beige"
                    color="brand.navy"
                  />
                  <VStack align="start" spacing={0}>
                    <Heading size="sm">Compass Coach</Heading>
                    <Text fontSize="xs">AI Career Assistant</Text>
                  </VStack>
                </HStack>
              </Box>

              {/* Chat Messages */}
              <Box
                p={6}
                maxH="400px"
                overflowY="auto"
                bg={useColorModeValue('gray.50', 'gray.900')}
              >
                <VStack spacing={6}>
                  {chatMessages.map((msg, index) => (
                    <ChatMessage key={index} {...msg} />
                  ))}
                </VStack>
              </Box>

              {/* Chat Input */}
              <Box p={4} borderTopWidth="1px" borderColor="brand.beige">
                <HStack>
                  <Input
                    placeholder="Type your message..."
                    focusBorderColor="brand.navy"
                  />
                  <Button variant="primary">Send</Button>
                </HStack>
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading size="xl" color="brand.navy" mb={4}>
                Choose Your Coaching Plan
              </Heading>
              <Text color="brand.gray" maxW="2xl" mx="auto">
                Select the plan that best fits your career development needs.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  name: 'Basic',
                  price: '$29',
                  features: [
                    'AI Career Assessment',
                    'Basic Goal Setting',
                    'Weekly Check-ins',
                    'Career Resources Access',
                  ],
                },
                {
                  name: 'Pro',
                  price: '$79',
                  features: [
                    'Everything in Basic',
                    'Unlimited AI Coaching',
                    'Custom Action Plans',
                    'Progress Analytics',
                    'Priority Support',
                  ],
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  features: [
                    'Everything in Pro',
                    'Team Coaching',
                    'Custom Integration',
                    'Dedicated Support',
                    'Advanced Analytics',
                  ],
                },
              ].map((plan) => (
                <VStack
                  key={plan.name}
                  p={8}
                  bg="white"
                  rounded="lg"
                  shadow="lg"
                  borderWidth="1px"
                  borderColor="brand.beige"
                  spacing={6}
                  align="stretch"
                >
                  <VStack spacing={2}>
                    <Heading size="lg" color="brand.navy">
                      {plan.name}
                    </Heading>
                    <Text fontSize="3xl" fontWeight="bold" color="brand.navy">
                      {plan.price}
                      {plan.price !== 'Custom' && <span>/month</span>}
                    </Text>
                  </VStack>
                  <Divider />
                  <VStack align="start" spacing={4}>
                    {plan.features.map((feature) => (
                      <HStack key={feature}>
                        <Icon as={FaLightbulb} color="brand.navy" />
                        <Text color="brand.gray">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default CompassCoach; 