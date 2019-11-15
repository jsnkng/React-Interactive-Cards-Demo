import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import ReactPaginate from 'react-paginate';

const client_id = 'cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f'

const fetchImages = async queryString => {
  if (!queryString) return await {}
  const response = await fetch(`https://api.unsplash.com/search/photos?${queryString}`)
  if (!response.ok) {
    return {} 
  }
  return await response.json()
}

const Image = ({setFeatureImage}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [opacity, setOpacity] = useState(0)

    const toggleModal = (e) => {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
    const afterOpen = () => {
      setTimeout(() => {
        setOpacity(1)
      }, 200)
    }
    const beforeClose = () => {
      return new Promise(resolve => {
        setOpacity(0)
        setTimeout(resolve, 200)
      });
    }

    const [searchTerm, setSearchTerm] = useState('')
    const [activePage, setActivePage] = useState(1)
    const [resultsTotal, setResultsTotal] = useState(0)
    const [images, setImages] = useState([])
    const resultsPerPage = 16
    const inputRef = useRef('')
    const [callCount, setCallCount] = useState(0)
    const timeoutId = useRef()

    const handleActivePageChange = (e) => {
      const value = e.selected
      setActivePage(value+1)
    }

    const handleChange = (e) => {
      setSearchTerm(e.target.value)
      inputRef.current = e.target.value
    }
   
    
    useEffect(() => {
      clearTimeout(timeoutId.current)
      if (!searchTerm.trim()) return
      timeoutId.current = setTimeout(() => {
        // grab our query, but store it in state so
        // I can show it to you below in the example 😄
        setSearchTerm(inputRef.current)
        setActivePage(1)
        const doFetchImages = async () => {
          const queryString = `client_id=${client_id}&query=${searchTerm}&page=${activePage}&per_page=${resultsPerPage}`
  
          const data = await fetchImages(queryString)
          setResultsTotal(data.total_pages)
          setImages(data.results)
        }
        doFetchImages()
      }, 800)
    }, [searchTerm])

    
    useEffect(() => {
      const doFetchImages = async () => {
        const queryString = `client_id=${client_id}&query=${inputRef.current}&page=${activePage}&per_page=${resultsPerPage}`

        const data = await fetchImages(queryString)
        setResultsTotal(data.total_pages)
        setImages(data.results)
      }
      doFetchImages()
    }, [activePage, resultsPerPage])

    
   
    return (
      <>
        
        {/* Conditionally draws edit image button if editable is true. */}
        <button onClick={toggleModal}>Choose Image</button>

        {/* Styled React Modal Component to contain search API UI */}
        <SearchModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}>
          
          {/* Close Modal button */}
          <div className="container__close">
            <button onClick={toggleModal}>X</button>
          </div>
          
          {/* Search Images fields */}
          <div className="container__search">
            <h2>Image Library</h2>
              <label>Keyword(s)<br />
                <input
                  type="text"
                  name="searchTerm"
                  value={searchTerm || ""}
                  onChange={handleChange}
                />
              </label>

          </div>

          {/* Image API search results. */}
          <div className="container__images">
              {
                images.map(img => <ResponsiveImage  height="100px"
                  key={img.id} 
                  backgroundURL={img.urls.thumb} 
                  className='container__image' 
                  onClick={(e) => {
                    setFeatureImage(img.urls.regular) 
                    toggleModal(e) 
                  }
                }></ResponsiveImage>)
              }
          </div>
          
          {/* Pagination for image API search results. */}
          <div className="container__pagination">
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={resultsTotal/resultsPerPage}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handleActivePageChange}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
            {resultsTotal} Images found.<br />
            Page {activePage} of {Math.ceil(resultsTotal/resultsPerPage)}
          </div>
        </SearchModal>
      </>
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
  
  & .container__close {
    position: absolute;
    top: 8px;
    right: 3px;
    padding: 4px 8px;
  }
  & .container__search  {   
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
  & .container__images {
    display: grid;       
    grid-template-columns: 25% 25% 25% 25%;
    min-height: 480px;
    max-height: 480px;
    overflow: scroll;
  }
  & .container__image {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 120px;
    cursor: pointer;
  }
  & .container__pagination {
    position: relative;
    font-size: .925em;
    margin: 0 auto;
    width: 100%;
  }
  & .pagination {
    margin: 15px margin;
    padding: 4px;
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
    & .container__images {
      grid-template-columns: 25% 25% 25% 25%;
      height: 100%;
      max-height: 480px;
    }
  }
  @media (min-width: 768px)  {
    width: 90vw;
    height: 90vh;
    box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);
    & .container__images {
      height: 100%;
      max-height: 480px;
    }
  }
  @media (min-width: 1200px)  {
    width: 70vw;
    height: 90vh;
    & .container__images {
      height: 100%;
      max-height: 480px;
    }
  }
`