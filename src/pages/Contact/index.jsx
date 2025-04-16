import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ContactInfo = ({ icon, title, content, children }) => {
  return (
    <VStack
      spacing={4}
      p={8}
      bg="white"
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
      <Text color="brand.gray">{content}</Text>
      {children}
    </VStack>
  );
};

const Contact = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    toast({
      title: 'Message sent!',
      description: "We'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.navy" color="brand.beige" py={20}>
        <Container maxW="6xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Get in Touch</Heading>
            <Text fontSize="xl" maxW="2xl">
              We're here to help you navigate your career journey. Reach out to us
              with any questions or inquiries.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Information Section */}
      <Box py={12}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <ContactInfo
              icon={FaEnvelope}
              title="Email Us"
              content="contact@moderncompass.com"
            />
            <ContactInfo
              icon={FaPhone}
              title="Call Us"
              content="+1 (555) 123-4567"
            />
            <ContactInfo
              icon={FaMapMarkerAlt}
              title="Visit Us"
              content="123 Innovation Drive, Suite 200, San Francisco, CA 94105"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box py={12} bg="gray.50">
        <Container maxW="4xl">
          <VStack spacing={8}>
            <Box textAlign="center">
              <Heading size="xl" color="brand.navy" mb={4}>
                Send Us a Message
              </Heading>
              <Text color="brand.gray">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </Text>
            </Box>

            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="white"
              p={8}
              rounded="lg"
              shadow="lg"
              borderWidth="1px"
              borderColor="brand.beige"
              w="100%"
            >
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your first name"
                      focusBorderColor="brand.navy"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your last name"
                      focusBorderColor="brand.navy"
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    focusBorderColor="brand.navy"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number (optional)"
                    focusBorderColor="brand.navy"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type="text"
                    placeholder="What is your message about?"
                    focusBorderColor="brand.navy"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Enter your message"
                    focusBorderColor="brand.navy"
                    rows={6}
                  />
                </FormControl>

                <Button type="submit" variant="primary" size="lg" w="100%">
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={12}>
        <Container maxW="4xl">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading size="xl" color="brand.navy" mb={4}>
                Frequently Asked Questions
              </Heading>
              <Text color="brand.gray">
                Find quick answers to common questions about our services.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  question: 'How quickly do you respond to inquiries?',
                  answer:
                    'We aim to respond to all inquiries within 24 business hours.',
                },
                {
                  question: 'Do you offer free consultations?',
                  answer:
                    'Yes, we offer a complimentary 15-minute consultation to discuss your needs.',
                },
                {
                  question: 'What are your business hours?',
                  answer:
                    'We are available Monday through Friday, 9:00 AM to 6:00 PM PST.',
                },
                {
                  question: 'Do you offer virtual meetings?',
                  answer:
                    'Yes, we conduct meetings via video conference for your convenience.',
                },
              ].map((faq, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  p={6}
                  bg="white"
                  rounded="lg"
                  shadow="md"
                  borderWidth="1px"
                  borderColor="brand.beige"
                >
                  <Heading size="md" color="brand.navy" mb={2}>
                    {faq.question}
                  </Heading>
                  <Text color="brand.gray">{faq.answer}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 