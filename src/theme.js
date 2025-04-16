import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    navy: '#0F1A25',
    beige: '#E7DCC7',
    gray: '#7A7F86',
    blue: '#A7CAD7',
  },
};

const fonts = {
  heading: 'Montserrat, sans-serif',
  body: 'Open Sans, sans-serif',
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
    },
    variants: {
      primary: {
        bg: 'brand.beige',
        color: 'brand.navy',
        _hover: {
          bg: 'brand.navy',
          color: 'brand.beige',
        },
      },
      secondary: {
        bg: 'brand.navy',
        color: 'brand.beige',
        _hover: {
          bg: 'brand.beige',
          color: 'brand.navy',
        },
      },
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  components,
});

export default theme; 