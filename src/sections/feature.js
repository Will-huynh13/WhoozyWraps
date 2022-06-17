/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";


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
        <Grid sx={styles.grid}>
          {images && images.map((image) => (
            <div key={images.id}>
                  <img width={300} height={300} className="object-cover aspect-square" src={image.media_url} />
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
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"],
  },
};

export default Feature;
