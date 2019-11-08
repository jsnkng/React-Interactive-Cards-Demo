import React, { useState, useEffect } from 'react';
import classList from './classes';
import styled from 'styled-components';
import Card from './Card';

const Cards = () => {
  const [data, setData] = useState(classList)
  
  useEffect(() => {
    setData(data)
  }, [data])

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
  
  const deleteCard = (id) => {
    if (window.confirm('Are you sure you want to do this?\nOK to delete or Cancel to go back.')) {
      let index = data.findIndex(item => item.id === id)
      data.splice(index, 1)
      setData([...data])
    } 
  }

  return (
    <div><br />
      <button onClick={createCard}>+ New Card</button>
      <CardWrapper>
        {data.slice(0).reverse().map(item => <Card key={item.id} data={item} deleteCard={deleteCard} />)}
      </CardWrapper>
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