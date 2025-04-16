import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Avatar,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Divider,
  Icon,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaUser,
  FaCog,
  FaBell,
  FaLock,
  FaChartLine,
  FaCalendarAlt,
  FaBookmark,
  FaTrophy,
} from 'react-icons/fa';

const ProfileSection = ({ title, children }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor="brand.beige"
    >
      <VStack align="stretch" spacing={6}>
        <Heading size="md" color="brand.navy">
          {title}
        </Heading>
        {children}
      </VStack>
    </Box>
  );
};

const ActivityCard = ({ icon, title, date, description, status }) => {
  return (
    <HStack
      p={4}
      bg={useColorModeValue('gray.50', 'gray.700')}
      rounded="md"
      spacing={4}
    >
      <Icon as={icon} w={6} h={6} color="brand.navy" />
      <VStack align="start" flex={1} spacing={1}>
        <Text fontWeight="bold" color="brand.navy">
          {title}
        </Text>
        <Text fontSize="sm" color="brand.gray">
          {description}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {date}
        </Text>
      </VStack>
      {status && (
        <Badge colorScheme={status === 'Completed' ? 'green' : 'yellow'}>
          {status}
        </Badge>
      )}
    </HStack>
  );
};

const UserProfile = () => {
  const user = {
    name: 'Sarah Johnson',
    title: 'Senior Product Manager',
    email: 'sarah.johnson@example.com',
    avatar: '/team/sarah.jpg',
    joinDate: 'Member since April 2024',
  };

  return (
    <Box>
      {/* Profile Header */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <VStack spacing={6}>
            <Avatar
              size="2xl"
              src={user.avatar}
              name={user.name}
              border="4px solid"
              borderColor="brand.beige"
            />
            <VStack spacing={2}>
              <Heading size="xl">{user.name}</Heading>
              <Text fontSize="lg">{user.title}</Text>
              <Text fontSize="sm" opacity={0.8}>
                {user.joinDate}
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Profile Content */}
      <Box py={12}>
        <Container maxW="6xl">
          <Tabs colorScheme="blue" variant="enclosed">
            <TabList mb={6}>
              <Tab>Overview</Tab>
              <Tab>Goals</Tab>
              <Tab>Resources</Tab>
              <Tab>Settings</Tab>
            </TabList>

            <TabPanels>
              {/* Overview Panel */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                  <VStack spacing={8}>
                    <ProfileSection title="Recent Activity">
                      <VStack spacing={4} align="stretch">
                        <ActivityCard
                          icon={FaChartLine}
                          title="Goal Progress"
                          description="Completed AI Fundamentals Course"
                          date="2 hours ago"
                          status="Completed"
                        />
                        <ActivityCard
                          icon={FaCalendarAlt}
                          title="Coaching Session"
                          description="Scheduled session with Career Coach"
                          date="Yesterday"
                          status="Scheduled"
                        />
                        <ActivityCard
                          icon={FaBookmark}
                          title="Resource Saved"
                          description="Leadership Development Guide"
                          date="3 days ago"
                        />
                      </VStack>
                    </ProfileSection>

                    <ProfileSection title="Achievements">
                      <SimpleGrid columns={2} spacing={4}>
                        {[
                          'Goal Setter',
                          'Quick Learner',
                          'Network Builder',
                          'Career Explorer',
                        ].map((achievement) => (
                          <HStack
                            key={achievement}
                            p={3}
                            bg="gray.50"
                            rounded="md"
                            spacing={3}
                          >
                            <Icon as={FaTrophy} color="brand.navy" />
                            <Text fontSize="sm">{achievement}</Text>
                          </HStack>
                        ))}
                      </SimpleGrid>
                    </ProfileSection>
                  </VStack>

                  <VStack spacing={8}>
                    <ProfileSection title="Profile Information">
                      <VStack spacing={4} align="stretch">
                        <FormControl>
                          <FormLabel>Full Name</FormLabel>
                          <Input value={user.name} isReadOnly />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <Input value={user.email} isReadOnly />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Title</FormLabel>
                          <Input value={user.title} isReadOnly />
                        </FormControl>
                        <Button variant="primary">Edit Profile</Button>
                      </VStack>
                    </ProfileSection>

                    <ProfileSection title="Subscription">
                      <VStack spacing={4} align="stretch">
                        <HStack justify="space-between">
                          <Text>Current Plan</Text>
                          <Badge colorScheme="green">Pro</Badge>
                        </HStack>
                        <Text fontSize="sm" color="brand.gray">
                          Your subscription renews on May 1, 2024
                        </Text>
                        <Button variant="outline">Manage Subscription</Button>
                      </VStack>
                    </ProfileSection>
                  </VStack>
                </SimpleGrid>
              </TabPanel>

              {/* Goals Panel */}
              <TabPanel>
                <ProfileSection title="Your Goals">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {/* Add goal tracking components here */}
                  </SimpleGrid>
                </ProfileSection>
              </TabPanel>

              {/* Resources Panel */}
              <TabPanel>
                <ProfileSection title="Saved Resources">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {/* Add saved resources components here */}
                  </SimpleGrid>
                </ProfileSection>
              </TabPanel>

              {/* Settings Panel */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                  <ProfileSection title="Account Settings">
                    <VStack spacing={4} align="stretch">
                      <FormControl>
                        <FormLabel>Email Notifications</FormLabel>
                        <Switch defaultChecked />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Two-Factor Authentication</FormLabel>
                        <Switch />
                      </FormControl>
                      <Divider />
                      <Button leftIcon={<FaLock />} variant="outline">
                        Change Password
                      </Button>
                    </VStack>
                  </ProfileSection>

                  <ProfileSection title="Privacy Settings">
                    <VStack spacing={4} align="stretch">
                      <FormControl>
                        <FormLabel>Profile Visibility</FormLabel>
                        <Switch defaultChecked />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Show Progress to Others</FormLabel>
                        <Switch defaultChecked />
                      </FormControl>
                      <Divider />
                      <Button colorScheme="red" variant="outline">
                        Delete Account
                      </Button>
                    </VStack>
                  </ProfileSection>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </Box>
  );
};

export default UserProfile; 