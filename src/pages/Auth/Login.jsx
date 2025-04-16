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
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual authentication logic
      // For now, we'll simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      navigate('/profile');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    toast({
      title: 'Google login coming soon',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleGithubLogin = () => {
    // TODO: Implement GitHub OAuth
    toast({
      title: 'GitHub login coming soon',
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
              Welcome Back
            </Heading>
            <Text color="brand.gray">
              Sign in to continue your career journey
            </Text>
          </VStack>

          <Box as="form" onSubmit={handleSubmit} w="100%">
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  focusBorderColor="brand.navy"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              <Button
                type="submit"
                variant="primary"
                w="100%"
                isLoading={isLoading}
              >
                Sign In
              </Button>

              <Link
                as={RouterLink}
                to="/auth/forgot-password"
                color="brand.navy"
                fontSize="sm"
              >
                Forgot password?
              </Link>
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
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </Button>
            <Button
              leftIcon={<FaGithub />}
              variant="outline"
              w="100%"
              onClick={handleGithubLogin}
            >
              Continue with GitHub
            </Button>
          </VStack>

          <HStack spacing={1}>
            <Text color="brand.gray">Don't have an account?</Text>
            <Link as={RouterLink} to="/auth/signup" color="brand.navy">
              Sign up
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login; 