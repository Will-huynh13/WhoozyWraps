/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container} from "theme-ui";
import SectionHeader from "components/section-header";
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Feature({data}) {
  const images = data.data;
  // console.log("props:\n", data);
  return (
    <section sx={{ variant: "section.feature" }} id="gallery">
      <Container>
        <SectionHeader
          slogan="Recent works"
          title="Here are some examples of our work!"
        />
        <Carousel 
        responsive={responsive}
        autoPlaySpeed={3000}
        autoPlay={true}
        infinite={true}
        >
            {images && images.map((image) => (
                  <a target ="_blank" href={image.permalink}>
                <div key={images.id}>
                      <img 
                        height= "100%"
                        width="100%"
                        src={image.media_url} 
                        />
                </div>
                  </a>
              ))}
              </Carousel>
        </Container>
    </section>
  );
}
export default Feature;
