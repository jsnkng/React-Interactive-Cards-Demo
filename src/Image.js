import React, {  useState } from 'react';
import Modal from 'styled-react-modal';

const Image = ({editImage, featureImage, setFeatureImage}) => {
    const [images, setImages] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    
    const handleSearch = (e) => { 
      const value = e.target.value
      setSearch(value)
    }
    const toggleModal = (e) => {
      setIsOpen(!isOpen)
      e.preventDefault();
    }
    const fetchImages = () => {
      fetch('https://api.unsplash.com/search/photos?page=1&query='+ search +'&client_id=cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f&per_page=16')
      .then(res => res.json())
      .then(data => {
        setImages(data.results)
        console.log(data) 
      }).catch(err => {
        console.log('Error happened during fetching!', err);
      });
      console.log(images)
    }
    const launchModalButton = (edit) => {
      if(edit==='true') {
        return (
          <button onClick={toggleModal}>Change Picture</button>
        )
      }
    }

    return (
      <div>
        
        <div className="container__changeImage">
          {launchModalButton(editImage)}
          <div style={{ backgroundImage: 'url(' + featureImage + ')', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '200px',
              marginBottom: '10px'
            }}></div>
        </div>

        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}>
          <button className="container__changeImage_close" onClick={toggleModal}>X</button>
          
          <div className="container__changeImage_search">
            <h2>Find a Picture</h2>
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleSearch}
            />
            <button onClick={fetchImages}>Search</button>
          </div>
          <div className="container__changeImage_images">
            <div className="container__changeImage_flex">
              {
                images.map(img => <div key={img.id} style={{ backgroundImage: 'url(' + img.urls.thumb + ')', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  width: '140px',
                  height: '100px',
                  cursor: 'pointer'
                  }} onClick={(e) => {
                    setFeatureImage(img.urls.regular) 
                    toggleModal(e) 
                  }
                }></div>)
              }
            </div>
          </div>
        </StyledModal>

      </div>
    )
}
  
export default Image


const StyledModal = Modal.styled`
  position:absolute;
  width: 90%;
  height: 90%;
  max-width: 960px;
  max-height: 800px;
  background-color: #d1d1d1;
  border-radius: 16px;
  z-index: 40;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.5);

  & .container__changeImage_close {
    position: absolute;
    top: 15px;
    right: 13px;
    width: 30px;
    padding: 5px;
  }
  & .container__changeImage_images {
    margin: 50px 10px 0;
  }
  & .container__changeImage_flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  & .container__changeImage_images img{
    max-height: 90px;
    cursor: pointer;
    margin: 2px;
  }
  & .container__changeImage_search {    
    width: 90%;
    margin: 0 auto;
  }
  & .container__changeImage_search input {    
    font-size: 1.125em;
    padding: 3px;
    margin: 0 5px;
  }
`