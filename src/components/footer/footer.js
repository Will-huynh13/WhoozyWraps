/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx ={styles.footerBottomArea}>
          {/* <Link path ="/">
            <Image src ={FooterLogo} alt="Whoozy Logo"/>
          </Link> */}
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item,i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
                Copyright {new Date().getFullYear()} Whoozy's Wraps
          </Text>
          <a target="_blank" href='https://www.instagram.com/nbhd_media/?hl=en'>
          <Text sx={styles.footer.copyright}>
                Banner image provided by @nbhd_media
          </Text>
          </a>
          <Box sx={styles.footer.info}>
          <Text>
            whoozyswraps@hotmail.com
          </Text>
          <Text>
          4845 Pontiac Street, Commerce City CO, 80022
          </Text>
          <Text>
          (720)-441-4506
          </Text>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      
    },
    info: {
      fontFamily: "text",
      textAlign: "right",
      borderTop: '1px solid',
    },
  },
};
