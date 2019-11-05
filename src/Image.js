import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import ReactPaginate from 'react-paginate';

const Image = ({editImage, featureImage, setFeatureImage}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])

    const [itemsCountPerPage, setItemsCountPerPage] = useState(10)
    const [itemsCountTotal, setItemsCountTotal] = useState(0)
    
    const toggleModal = (e) => {
      setIsOpen(!isOpen)
      e.preventDefault()
    }
    const handleSearchChange = (e) => { 
      const value = e.target.value
      setSearch(value)
    }
    const handleItemsCountPerPageChange = (e) => { 
      const value = e.target.value
      setItemsCountPerPage(value)
    }
    const handlePageChange = (data) => {
      fetchImages(data.selected)
    }
    const handleFormSubmit = (e) => {
      e.preventDefault()
      fetchImages(0)
    }
    const fetchImages = (page) => {
      let activePage = page + 1;
      fetch('https://api.unsplash.com/search/photos?query='+ search + '&page=' + activePage + '&per_page=' + itemsCountPerPage + '&client_id=cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f')
      .then(res => res.json())
      .then(data => {
        setItemsCountTotal(data.total_pages)
        setImages(data.results)
      }).catch(err => {
        console.log('Error happened during fetching!', err)
      });
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
            <h2>Picture Search</h2>
            <form onSubmit={handleFormSubmit}>
            <label>Keyword(s)<input
              type="text"
              name="search"
              value={search}
              onChange={handleSearchChange}
            /></label>
            <label>Results per Page<select value={itemsCountPerPage} onChange={handleItemsCountPerPageChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select></label>
            <button>Go</button>
            </form>
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={itemsCountTotal}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
          <div className="container__changeImage_images">
              {
                images.map(img => <div 
                  key={img.id} 
                  style={{ backgroundImage: 'url(' + img.urls.thumb + ')'}} 
                  className='container__changeImage_image' 
                  onClick={(e) => {
                    setFeatureImage(img.urls.regular) 
                    toggleModal(e) 
                  }
                }></div>)
              }
          </div>
          
        </StyledModal>

      </div>
    )
}
  
export default Image


const StyledModal = Modal.styled`
  position:absolute;
  width: 90%;
  height: auto;
  max-width: 960px;
  max-height: 800px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 8px;
  z-index: 40;
  box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);
  overflow: auto;

  & .container__changeImage_close {
    position: absolute;
    top: 15px;
    right: 13px;
    width: 30px;
    padding: 5px;
  }
  & .container__changeImage_images {
    display: grid; 
    grid-template-columns: 20% 20% 20% 20% 20%;
  }

  & .container__changeImage_image {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 120px;
    cursor: pointer;
  }

  @media (max-width: 620px)  {
    & .container__changeImage_images {
      display: grid; 
      grid-template-columns: 50% 50%;
    }
  }
  @media (max-width: 350px)  {
    & .container__changeImage_images {
      display: grid; 
      grid-template-columns: 100%;
    }
  }
  & .container__changeImage_images img{
  
  }
  & .container__changeImage_search  {   
    background-color: #111111; 
    padding: 10px 0 10px 0;  
  }
  & .container__changeImage_search h2 {    
    display: inline-block;
    font-size: 1em;
    margin: 10px 0 10px 0;
  }
  & .container__changeImage_search label {    
    display: inline-block;
    font-size: .75em;
    margin: 5px;
  }
  & .container__changeImage_search input {  
    background-color: #242424;  
    color: #ffffff;
    border: 0;
    font-size: 1.5em;
    padding: 6px;
    margin: 0 5px;
  }
  & .container__changeImage_search select {    
    background-color: #242424;  
    color: #ffffff;
    border: 0;
    font-size: 1.5em;
    padding: 6px;
    margin: 0 5px;
  }

  & .pagination {
    margin: 15px 0;
    padding: 0;
  }
  & .pagination ul {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  & .pagination li {
    display: inline-block;
    background-color: #111111;
    color: #ffffff;
    font-size: 1em;
    font-weight: 500;
    border: 3px solid #333333;
    border-radius: 3px;
    padding: 1px 4px;
    margin: 3px;
    cursor: pointer;
  }

`