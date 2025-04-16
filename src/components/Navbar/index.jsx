import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useAuth } from '../../context/AuthContext';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
  { name: 'Compass Coach', path: '/compass-coach' },
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { user, logout } = useAuth();
  const bgColor = useColorModeValue('brand.navy', 'gray.900');
  const textColor = useColorModeValue('brand.beige', 'white');

  const handleLogout = () => {
    logout();
  };

  return (
    <Box bg={bgColor} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onToggle}
          variant="ghost"
          color={textColor}
          _hover={{ bg: 'brand.beige', color: 'brand.navy' }}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Link as={RouterLink} to="/">
              <Image h="30px" src="/logo.png" alt="Modern Compass" />
            </Link>
          </Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link
                key={link.path}
                as={RouterLink}
                to={link.path}
                px={2}
                py={1}
                rounded="md"
                color={textColor}
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.navy',
                  bg: 'brand.beige',
                }}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar
                  size="sm"
                  src={user.avatar}
                  name={user.name}
                  bg="brand.beige"
                  color="brand.navy"
                />
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem as={RouterLink} to="/goal-tracker">
                  Goal Tracker
                </MenuItem>
                <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              as={RouterLink}
              to="/auth/login"
              variant="primary"
              size="sm"
              mr={4}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              Sign In
            </Button>
          )}
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <Link
                key={link.path}
                as={RouterLink}
                to={link.path}
                px={2}
                py={1}
                rounded="md"
                color={textColor}
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.navy',
                  bg: 'brand.beige',
                }}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  as={RouterLink}
                  to="/profile"
                  px={2}
                  py={1}
                  rounded="md"
                  color={textColor}
                  _hover={{
                    textDecoration: 'none',
                    color: 'brand.navy',
                    bg: 'brand.beige',
                  }}
                >
                  Profile
                </Link>
                <Link
                  as={RouterLink}
                  to="/goal-tracker"
                  px={2}
                  py={1}
                  rounded="md"
                  color={textColor}
                  _hover={{
                    textDecoration: 'none',
                    color: 'brand.navy',
                    bg: 'brand.beige',
                  }}
                >
                  Goal Tracker
                </Link>
                <Button
                  variant="primary"
                  size="sm"
                  w="full"
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                as={RouterLink}
                to="/auth/login"
                variant="primary"
                size="sm"
                w="full"
              >
                Sign In
              </Button>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar; 