import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import ReactPaginate from 'react-paginate';

const Image = ({editable=false, featureImage, setFeatureImage}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [activePage, setActivePage] = useState(0)
    const itemsCountPerPage = 16
    const [images, setImages] = useState([])
    const [itemsCountTotal, setItemsCountTotal] = useState(0)
   
    useEffect(() => {
      if(searchTerm) fetchImages()
    }, [activePage])

    const fetchImages = useCallback(
      () => {
        let page = activePage + 1
        
        const client_id = 'cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f'
        const queryString = `client_id=${client_id}&query=${searchTerm}&page=${page}&per_page=${itemsCountPerPage}`
    
        fetch(`https://api.unsplash.com/search/photos?${queryString}`)
        .then(res => res.json())
        .then(data => {
          setItemsCountTotal(data.total_pages)
          setImages(data.results)
        }).catch(err => {
          console.log('Error happened during fetching!', err)
        })
      }, [activePage, searchTerm])

    const toggleSearchModal = (e) => {
      e.preventDefault()
      setIsSearchOpen(!isSearchOpen)
    }
    const handleSearchTermChange = (e) => { 
      const value = e.target.value
      setSearchTerm(value) 
    }
    const handleActivePageChange = (data) => {
      const value = data.selected
      setActivePage(value)
    }
    const handleFormSubmit = (e) => {
      if(e) e.preventDefault();
      setActivePage(0)
      fetchImages()
    }
    const drawEditImageButton = (editable) => {
      if(editable==='true') {
        return (
          <button onClick={toggleSearchModal}>Choose Image</button>
        )
      }
    }
   
    return (
      <div className="container__changeImage">
        
        {/* Conditionally draws edit image button if editable is true. */}
        {drawEditImageButton(editable)}
        
        {/* Styled Component to draw an image. */}
        <ResponsiveImage backgroundURL={featureImage} height="200px"></ResponsiveImage>

        {/* Styled React Modal Component to contain search API UI */}
        <SearchModal
          isOpen={isSearchOpen}
          onBackgroundClick={toggleSearchModal}
          onEscapeKeydown={toggleSearchModal}>
          
          {/* Close Modal button */}
          <div className="container__changeImage_close">
            <button onClick={toggleSearchModal}>X</button>
          </div>
          {/* Search Images fields */}
          <div className="container__changeImage_search">
            <h2>Image Library</h2>
            <form onSubmit={handleFormSubmit}>
              <label>Keyword(s)<br />
                <input
                  type="text"
                  name="searchTerm"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
              </label>

              <button type="submit">Search</button>
            </form>
          </div>

          {/* Image API search results. */}
          <div className="container__changeImage_images">
              {
                images.map(img => <ResponsiveImage  height="100px"
                  key={img.id} 
                  backgroundURL={img.urls.thumb} 
                  className='container__changeImage_image' 
                  onClick={(e) => {
                    setFeatureImage(img.urls.regular) 
                    toggleSearchModal(e) 
                  }
                }></ResponsiveImage>)
              }
          </div>
          
          {/* Pagination for image API search results. */}
          <div className="container__changeImage_pagination">
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={itemsCountTotal/itemsCountPerPage}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handleActivePageChange}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
            {itemsCountTotal} Images found.<br />
            Page {activePage+1} of {Math.ceil(itemsCountTotal/itemsCountPerPage)}
          </div>
        </SearchModal>
      </div>
    )
}
  
export default Image

const ResponsiveImage = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height};
`
const SearchModal = Modal.styled`
  position:absolute;
  background-color: #111111; 
  color: #ffffff;
  z-index: 40;
  width: 100vw;
  height: 100vh;
  max-height: 1400px;
  
  & .container__changeImage_close {
    position: absolute;
    top: 8px;
    right: 3px;
    padding: 4px 8px;
  }
  & .container__changeImage_search  {   
    margin: 0;
    text-align: left;
    
    h2 {    
      display: block;
      font-size: 1.25em;
      font-weight: 200;
      text-align: left;
      margin: 10px; 
    }
    form {
      background-color: #1f1f1f;
      padding: 10px  
    }
    label {
      display: inline-block;
      font-size: .75em;
      font-weight: 200;
      text-align: left;
      padding: 5px;
      margin: 0;
    }
    input {  
      display: inline-block;
      background-color: #2f2f2f;  
      color: #ffffff;
      font-size: 1em;
      border: 0;
      border-radius: 5px;
      padding: 5px;
      margin: 2px 0 0 0;
    }
    select {    
      background-color: #2f2f2f;  
      color: #ffffff;
      font-size: 1em;
      border: 0;
      padding: 4px;
      margin: 2px 0 0 0;
    }
  }
  & .container__changeImage_images {
    display: grid;       
    grid-template-columns: 25% 25% 25% 25%;
    min-height: 480px;
    max-height: 480px;
    overflow: scroll;
  }
  & .container__changeImage_image {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 120px;
    cursor: pointer;
  }
  & .container__changeImage_pagination {
    position: relative;
    font-size: .75em;
    margin: 0 auto;
    width: 100%;
  }
  & .pagination {
    margin: 15px margin;
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
    font-weight: 500;
    border: 1px solid #2f2f2f;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 3px;
    cursor: pointer;
  }
  @media (min-width: 415px)  {
    width: 100vw;
    height: 100vh;
    & .container__changeImage_images {
      grid-template-columns: 25% 25% 25% 25%;
      height: 100%;
      max-height: 480px;
    }
  }
  @media (min-width: 768px)  {
    width: 90vw;
    height: 90vh;
    box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);
    & .container__changeImage_images {
      height: 100%;
      max-height: 480px;
    }
  }
  @media (min-width: 1200px)  {
    width: 70vw;
    height: 90vh;
    & .container__changeImage_images {
      height: 100%;
      max-height: 480px;
    }
  }
`