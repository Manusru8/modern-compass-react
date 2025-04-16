import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  HStack,
  Select,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // TODO: Implement actual registration logic
      // For now, we'll simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Registration successful',
        description: 'Welcome to Modern Compass!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      navigate('/profile');
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth
    toast({
      title: 'Google signup coming soon',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleGithubSignup = () => {
    // TODO: Implement GitHub OAuth
    toast({
      title: 'GitHub signup coming soon',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" bg="gray.50" py={20}>
      <Container maxW="md">
        <VStack
          spacing={8}
          bg="white"
          p={8}
          rounded="lg"
          shadow="md"
          borderWidth="1px"
          borderColor="brand.beige"
        >
          <VStack spacing={2} textAlign="center">
            <Heading size="xl" color="brand.navy">
              Create Your Account
            </Heading>
            <Text color="brand.gray">
              Start your career journey with Modern Compass
            </Text>
          </VStack>

          <Box as="form" onSubmit={handleSubmit} w="100%">
            <VStack spacing={6}>
              <SimpleGrid columns={2} spacing={4} w="100%">
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    focusBorderColor="brand.navy"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    focusBorderColor="brand.navy"
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  focusBorderColor="brand.navy"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Role</FormLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Select your role"
                  focusBorderColor="brand.navy"
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="career_changer">Career Changer</option>
                  <option value="entrepreneur">Entrepreneur</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    focusBorderColor="brand.navy"
                  />
                  <InputRightElement>
                    <IconButton
                      variant="ghost"
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  focusBorderColor="brand.navy"
                />
              </FormControl>

              <Button
                type="submit"
                variant="primary"
                w="100%"
                isLoading={isLoading}
              >
                Create Account
              </Button>
            </VStack>
          </Box>

          <HStack w="100%" spacing={4}>
            <Divider />
            <Text fontSize="sm" color="brand.gray">
              OR
            </Text>
            <Divider />
          </HStack>

          <VStack spacing={4} w="100%">
            <Button
              leftIcon={<FaGoogle />}
              variant="outline"
              w="100%"
              onClick={handleGoogleSignup}
            >
              Sign up with Google
            </Button>
            <Button
              leftIcon={<FaGithub />}
              variant="outline"
              w="100%"
              onClick={handleGithubSignup}
            >
              Sign up with GitHub
            </Button>
          </VStack>

          <HStack spacing={1}>
            <Text color="brand.gray">Already have an account?</Text>
            <Link as={RouterLink} to="/auth/login" color="brand.navy">
              Sign in
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Signup; 