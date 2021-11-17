import { Carousel } from 'react-carousel-minimal';
import './Herosection.css';
import img from "./../assets/banner/4.jpg";
import img1 from "./../assets/banner/2.jpg";
// import img2 from "./image/3.jpg";

function Herosection() {
 const data = [
    {
      image: "image/Mask Group.png",
      // caption: "San Francisco"
          
    },
    {
      image: "image/1.jpg",
      // caption: "Scotland"
    },
    {
      image: "image/2.jpg",
      // caption: "Darjeeling"
    },
    {
      image: "image/3.jpg",
      // caption: "San Francisco"
    }
   
  ];

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }  
  return (
    <>
      <div className={'home__hero-section darkBg'}>
      <div style={{ textAlign: "center" }}>       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
        
            data={data}
            time={2000}
            width="850px"
            height="500px"          
            // captionStyle={captionStyle}
            radius="10px"           
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"           
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    </>

  );
}

export default Herosection;
