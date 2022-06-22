/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from '../components/header/mobile-drawer';

export default function Header() {
  return (
      <header sx = {styles.header}>
        <Container sx = {styles.container}>
          <Logo src = {LogoDark} />
          <Flex as = "nav" sx = {styles.nav}>
              <Link
                activeClass="active"
                to="home"
                spy= {true}
                smooth = {true}
                offset= {-180}
                duration ={500}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="products"
                spy= {true}
                smooth = {true}
                offset= {-80}
                duration ={500}
              >
                Products
              </Link>
              <Link
                activeClass="active"
                to="pricing"
                spy= {true}
                smooth = {true}
                offset= {-50}
                duration ={500}
              >
                Pricing
              </Link>
              <Link
                activeClass="active"
                to="gallery"
                spy= {true}
                smooth = {true}
                offset= {-180}
                duration ={500}
              >
                Gallery
              </Link>
          </Flex>
          <Button className= "donate__btn" variant ="secondary" aria-label ="Contact">
            Contact
          </Button>
          <MobileDrawer/>
        </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
