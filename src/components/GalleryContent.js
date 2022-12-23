
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function(props){
    return(
        <div>
        {
          props.imageData.map(image=>(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
          ))
        }
      </div>
    )
  }