/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import { FaFileExcel } from "react-icons/fa";


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
        <Container>
        <div>
          {images && images.map((image) => (
            <div key={images.id}>
              <a target ="_blank" href={image.permalink}>
                  <img 
                    width={300} 
                    height={300} 
                    className="aspect-square" 
                    src={image.media_url} 
                    />
              </a>
                </div>
              ))}
        </div>
        </Container>
        </Container>

    </section>
  );
}


const styles = {
  grid: {
    gridGap: [
      "0px",
    ],
    rowGap:[
      "0px"
    ],
    gridTemplateColumns: ["repeat(4, [col-start] min-content [col-end])"],
  },
};

export default Feature;
