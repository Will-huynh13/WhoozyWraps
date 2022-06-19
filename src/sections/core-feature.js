/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

const data = {
  subTitle: 'Why wrap a car?',
  title: 'Versatility and Economical ',
  description:
    'Explore our brands and the benefits of wrapping your car.',
  btnName: 'Learn more',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
   <section sx={{variant: 'section.coreFeature'}} id="explore">
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <TextFeature 
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
          btnName={data.btnName}
          btnURL={data.btnURL}
        />
      </Box>
      <video sx={{variant: 'section.coreFeature'}} 
      autoPlay 
      loop 
      muted
      >
          <source src='/SPTruck.mp4' type='video/mp4'/>
      </video>
    </Container>
   </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    //fontFamily: 'text',
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
      fontFamily: 'text',
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
