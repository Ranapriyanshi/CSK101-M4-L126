import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryContent from './components/GalleryContent';

const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]

function App() {
  return (
    <div>
      {/* Adding header component */}
      <GalleryHeader />

      {/* <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div> */}
      <GalleryContent imageData={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
