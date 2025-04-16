import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual password reset logic
      // For now, we'll simulate a successful request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Password reset email sent',
        description: 'Please check your email for instructions to reset your password.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to send reset email',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
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
              Forgot Password
            </Heading>
            <Text color="brand.gray">
              Enter your email address and we'll send you instructions to reset your password.
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

              <Button
                type="submit"
                variant="primary"
                w="100%"
                isLoading={isLoading}
              >
                Send Reset Instructions
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

export default ForgotPassword; 