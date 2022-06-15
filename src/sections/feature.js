/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';

export default function Feature(feed) {
  console.log(feed)
  const images = feed.data;
  return (
    <section sx={{variant: 'section.feature'}} id ="gallery">
     <Container>
       <SectionHeader
         slogan="Recent works"
         title="Here are some examples of our work!"
         />
        {/* <Grid sx={styles.grid}> */}
        {/* </Grid> */}
     </Container>
     {images && images.map(image => (
            <div key={images.id}>
              <img src ={image.media_url} alt={image.caption}/>
            </div>
          ))}
   </section>
  );
}

export const  getInsta = async () => {
  const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJVLWptdEpqRWlxOGNhOGd3bHIxQmZA2MUxDOU1EbVVoMHlWaGRIdklObl81dDMxRmdIeUsxdU11eFRyNXgtUE5WbDZAoMDJGc2ZAXQmw0Qmp0cnl6REg2LXRwb3NqRl9NUU5Iam9nQjdGZAzFXVkpvYgZDZD'
  const data = await fetch(url);
  const feed = await data.json();
  return(
     feed
  )
};
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
