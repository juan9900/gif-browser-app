import PropTypes from 'prop-types';

export const GifItem = ({title, url, shareLink}) => {
  return (
    <div className="gif">
      <div className="gif-container">
      {/* <div className="gif-link-container">
        <div>
            <h4>Share</h4>
            <div className="gif-share-container">
            <a href={url} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            <a href={url} target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href={`https://twitter.com/intent/tweet/text?=${shareLink + '  via @Giphy'}`} target="_blank"><i className="fa-solid fa-download"></i></a>
          </div>
        </div>
          
      </div> */}
      <img src={url} alt={title}/>
      </div>
      
      <h3>{title}</h3>
    </div>
  )
}


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  shareLink: PropTypes.string
  
}