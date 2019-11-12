import React, {  useState } from 'react';
import styled from 'styled-components';

const Image = ({editable=false,  featureImage, setFeatureImage}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [images, setImages] = useState([])

    const toggleSearchModal = (e) => {
      e.preventDefault()
      setIsSearchOpen(!isSearchOpen)
    }
   
    const drawEditImageButton = (editable) => {
      if(editable==='true') {
        return (
          <button onClick={toggleSearchModal}>Choose Image</button>
        )
      } else {
        return null;
      }
    }
   
    return (
        <ResponsiveImage backgroundURL={featureImage} height="200px">
          {drawEditImageButton(editable)}
        </ResponsiveImage>
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

  & button {
    margin-top: 150px;
  }
`
