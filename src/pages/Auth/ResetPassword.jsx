import { useState } from 'react';
import { Link as RouterLink, useNavigate, useSearchParams } from 'react-router-dom';
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
  Icon,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const toast = useToast();
  const navigate = useNavigate();

  const token = searchParams.get('token');

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

      // TODO: Implement actual password reset logic
      // For now, we'll simulate a successful reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Password reset successful',
        description: 'You can now sign in with your new password.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      navigate('/auth/login');
    } catch (error) {
      toast({
        title: 'Failed to reset password',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
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
                Invalid Reset Link
              </Heading>
              <Text color="brand.gray">
                This password reset link is invalid or has expired.
              </Text>
            </VStack>

            <Link
              as={RouterLink}
              to="/auth/forgot-password"
              color="brand.navy"
              fontSize="sm"
              display="flex"
              alignItems="center"
            >
              <Icon as={FaArrowLeft} mr={2} />
              Request a new reset link
            </Link>
          </VStack>
        </Container>
      </Box>
    );
  }

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
              Reset Password
            </Heading>
            <Text color="brand.gray">
              Create a new password for your account
            </Text>
          </VStack>

          <Box as="form" onSubmit={handleSubmit} w="100%">
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
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
                <FormLabel>Confirm New Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    focusBorderColor="brand.navy"
                  />
                  <InputRightElement>
                    <IconButton
                      variant="ghost"
                      icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
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
                Reset Password
              </Button>
            </VStack>
          </Box>

          <Link
            as={RouterLink}
            to="/auth/login"
            color="brand.navy"
            fontSize="sm"
            display="flex"
            alignItems="center"
          >
            <Icon as={FaArrowLeft} mr={2} />
            Back to Sign In
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default ResetPassword; 