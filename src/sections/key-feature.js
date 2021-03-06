/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Car Vinyl',
    title: 'Vinyl',
    text:
      'Give your car a new look!',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'decal',
    title: 'Decals',
    text:
      'Get yo decals here cuh.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'tinting',
    title: 'Window Tinting',
    text:
      'We tint so you can get head.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'detailing',
    title: 'Detailing',
    text:
      'Make your car shiny so they think its new',
  },
];

export default function KeyFeature() {
  return (
    <section sx ={{variant: 'section.keyFeature'}}  id="products">
      <Container>
        <SectionHeader
          slogan = "Reimagine your car"
          title = "Meet our services"
          />
          <Grid sx = {styles.grid}>
            {data.map((item) => (
              <FeatureCardColumn
                key={item.id}
                //src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            ))}
          </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
