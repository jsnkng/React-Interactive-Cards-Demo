import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import classList from '../data/classes';
import ImageSearch from './ImageSearch.js';

const [isSearchOpen, setIsSearchOpen] = useState(false)

const compare = (a, b) => {
  // Use toUpperCase() to ignore character casing
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = 0;
  if (titleA > titleB) {
    comparison = 1;
  } else if (titleA < titleB) {
    comparison = -1;
  }
  return comparison;
}


const Cards = () => {
  const createCard = () => {
    const lastItem = data.slice(-1).pop();
    const lastId = lastItem ? lastItem.id + 1 : 1;
    setData([...data, {
      id: lastId,
      title: "New Class",
      instructor: "Click on a card to edit it.",
      description: "Add a title, instructor, and description. Choose a picture. Indicate whether the class is Live or On-Demand and the class duration.",
      duration: "0",
      featureImage: "https://via.placeholder.com/500/000000/ffffff/?text=Choose+a+Picture",
      classType: "Type"
    }])
  }

  const readCards = () => {
    console.log(classList)

    return classList
  }

  const deleteCard = (id) => {
    if (window.confirm('Are you sure you want to do this?\nOK to delete or Cancel to go back.')) {
      let index = data.findIndex(item => item.id === id)
      data.splice(index, 1)
      setData([...data])
    } 
  }

  const sortCards = () => {
  
    console.log(data)
   
    data.sort(compare);
  }

  const [data, setData] = useState(readCards)
  
  useEffect(() => {
    setData(data)
  }, [data])


  return (
    <div><br />
      <button onClick={createCard}>+ New Card</button>
      <button onClick={sortCards}>Sort Cards</button>
      <CardWrapper>
        {data.slice(0).reverse().map(item => <Card key={item.id} data={item} deleteCard={deleteCard} />)}
      </CardWrapper>
      
      <ImageSearch isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} setFeatureImage={setFeatureImage} />
   
    </div>
  )
}
  
export default Cards

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  margin: 20px;
`