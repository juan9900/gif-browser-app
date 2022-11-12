

export const GifItem = ({title, url}) => {
  return (
    <div className="gif">
      <div className="gif-container">
      <div className="gif-link-container">
          <h4>Share</h4>
          <div className="gif-share-container">
          <a href={url} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          <a href={url} target="_blank"><i className="fa-brands fa-twitter"></i></a>
          <a href={url} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
      </div>
      <img src={url} alt=""/>
      </div>
      
      <h3>{title}</h3>
    </div>
  )
}
