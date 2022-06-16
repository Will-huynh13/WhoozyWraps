/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=
  ${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url)
  const feed = await data.json()
  return {
    props: {
      insta: feed,
    }
  }
}


export function Feature(insta) {
  const images = insta.data;
  console.log(insta)
  return (
    <section sx={{variant: 'section.feature'}} id ="gallery">
     <Container>
       <SectionHeader
         slogan="Recent works"
         title="Here are some examples of our work!"
         />
        <Grid sx={styles.grid}>
               {images && images.map(image => (
               <div key={images.id}>
                    <img src ={image.media_url} alt={image.caption}/>
                </div>
                ))}
         </Grid>
     </Container>
   </section>
  );
}


const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};

export default Feature