import React, { useState } from 'react';
import styled from 'styled-components';
import ImageSearch from '../modals/ModalImageSearch';
import ReactCardFlip from 'react-card-flip';

const Card = ({data, updateCard, deleteCard}) => {
    const [isEditable, setIsEditable] = useState(false)

    const toggleEditable = (e) => {
      setIsEditable(!isEditable)
    }

    const [featureImage, setFeatureImage] = useState(data.featureImage)
    const [title, setTitle] = useState(data.title)
    const [instructor, setInstructor] = useState(data.instructor)
    const [description, setDescription] = useState(data.description)
    const [duration, setDuration] = useState(data.duration)
    const [classType, setClassType] = useState(data.classType)

    const handleUpdateCard = (id) => {
      setIsEditable(false)
      updateCard(id)
    }
  
    const handleDeleteCard = (id) => {
      setIsEditable(false)
      deleteCard(id)
    }

    return (
      <CardWrapper>
        <ReactCardFlip isFlipped={isEditable} flipDirection="horizontal">
          
          <CardDisplay key="front" onClick={toggleEditable}>
            <ResponsiveImage backgroundURL={featureImage} height="200px" />
            <div className="classInfo">
              <h2>{title}</h2>
              <h3>{instructor}</h3>
              <p className="description">{description}</p>
            </div>
            <div>
              <span className={classType === 'live' ? 'type live' : 'type onDemand'}>{classType}</span>
              <span className="duration">{duration} min</span>
            </div>
          </CardDisplay>
  
          <CardForm key="back">
            <ResponsiveImage backgroundURL={featureImage} height="200px">
              <ImageSearch setFeatureImage={setFeatureImage} />
            </ResponsiveImage>
            
            <label>Title: </label>
            <input 
              type="text"
              name="title"
              value={title || ""}
              onChange={e => setTitle(e.target.value)}
              />
            <br />
            <label>Instructor:</label>
            <input
              type="text"
              name="instructor"
              value={instructor || ""}
              onChange={e => setInstructor(e.target.value)}
              />
            <br />
            <label>Description:</label>
            <textarea
              rows="6"
              name="description"
              value={description || ""}
              onChange={e => setDescription(e.target.value)}
            />
            <br />
            <label className="form__radioLabelOnDemand">On-Demand: 
              <input
                type="radio"
                value="on-demand"
                checked={classType === 'on-demand'}
                onChange={e => setClassType(e.target.value)}
              />
            </label>
            <label className="form__radioLabelLive">Live: 
              <input
                type="radio"
                value="live"
                checked={classType === 'live'}
                onChange={e => setClassType(e.target.value)}
              />
            </label>
            <label className="form__inputLabelDuration">Duration:
              <input
                type="number"
                name="duration"
                value={duration || ""}
                onChange={e => setDuration(e.target.value)}
              />
            </label>
            <div className="form__buttons">
              <button onClick={() => handleUpdateCard(data.id)}>Save</button>
              <button onClick={() => handleDeleteCard(data.id)}>Delete</button>
            </div>
          </CardForm>
        </ReactCardFlip>
      </CardWrapper>
    )
}
  
export default Card

const CardWrapper = styled.div`
  width: 350px;
  margin: 5px 5px;
`
const CardDisplay = styled.div`
  min-height: 470px;
  background-color: #111111;
  border: solid 1px #cccccc;
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);

  & h2 {
    display: inline-block;
    width: 100%;
    font-weight: 600;
    font-size: 1.5em;
    font-weight: 700;
    padding: 10px 0;
    margin-top: -50px;
    background-color: #ffffff;
  }
  & h3 {
    font-weight: 500;
    font-size: 1.125em;
    padding: 0px 10px;
    margin-top: 0px;
  }
  & .classInfo {
    max-width: 85%;
    margin: 0 auto 20px;
    background-color: #ffffff;
  }
  & .description {
    font-weight: 400;
    font-size: .75em;
    padding: 0 20px;
    height: 120px;
    overflow: hidden;
  }
  & .type {
    float: left;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    padding: 2px 10px;
  }
  & .type.live {
    background-color: #236d14;
  }
  & .type.onDemand {
    background-color: #ffffff;
    border-left: 0px;
    color: #000000;
  }
  & .duration {
    width: 30px;
    height: 27px;
    float: right;
    border-radius: 32px;
    color: #ffffff;
    font-weight: 500;
    font-size: .75em;
    line-height: 1;
    margin: 0 5px 0 0;
  }    
`
const CardForm = styled.div`
  min-height: 470px;  
  background-color: #ffffff;
  border: solid 1px #cccccc;
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);

  & .container__changeImage button {
    position: fixed;
    width: 150px;
    top: 150px;
    left: 50%;
    margin-left: -75px;
  }

  & label {
    display: inline-block;
    vertical-align: top;
    padding: 5px;
    margin: 2px;
    font-weight: 500;
    font-size: .8em;
    text-align: right;
    width: 75px;
  }
  & textarea  {
    width: 180px;
    font-size: .85em;
    border: 1px solid #dddddd;
    background-color: #fafafa;
    padding: 3px;
    margin: 2px;
  }
  & input  {
    width: 180px;
    font-size: .85em;
    border: 1px solid #dddddd;
    background-color: #fafafa;
    padding: 3px;
    margin: 2px;
  } 
  & input[type="radio"]  {
    display: inline-block;
    width: 30px;
    border: 1px solid #cccccc;
  }
  & label.form__radioLabelOnDemand {
    padding: 0;
    width: 115px;
  }
  & label.form__radioLabelLive {
    padding: 0;
    width: 65px;
  }
  & label.form__inputLabelDuration{
    padding: 0;
    width: 100px;
    & input {
      margin: 0px;
      width: 35px;
    }
  }
  & .form__buttons {
    padding: 15px 0 10px;
  }
`
const ResponsiveImage = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height};

  & button {
    position: relative;
    top: 150px;
  }
`