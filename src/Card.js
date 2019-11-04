import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './Image';
import ReactCardFlip from 'react-card-flip';

const Card = ({content,deleteClass}) => {
    const [featureImage, setFeatureImage] = useState(content.featureImage)
    const [title, setTitle] = useState(content.title)
    const [instructor, setInstructor] = useState(content.instructor)
    const [description, setDescription] = useState(content.description)
    const [duration, setDuration] = useState(content.duration)
    const [classType, setClassType] = useState(content.classType)
    const [isFlipped, setIsFlipped] = useState(false)
  
    const toggleFlip = (e) => {
      setIsFlipped(!isFlipped)
    }

    const handleChangeTitle = (e) => { 
      const value = e.target.value
      setTitle(value)
    }

    const handleChangeInstructor = (e) => { 
      const value = e.target.value
      setInstructor(value)
    }

    const handleChangeDescription = (e) => { 
      const value = e.target.value
      setDescription(value)
    }

    const handleChangeDuration = (e) => { 
      const value = e.target.value
      setDuration(value)
    }
    
    const handleChangeClassType = (e) => { 
      const value = e.target.value
      setClassType(value)
    }

    const handleFormSubmit = (e) => {
      setTitle(title)
      setInstructor(instructor)
      setDescription(description)
      setDuration(duration)
      setClassType(classType)
      setIsFlipped(false)
      e.preventDefault();
    }
  
    return (
      <ClassCardWrapper>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <ClassCardDisplay key="front" onClick={toggleFlip}>
            <Image editImage='false' featureImage={featureImage} setFeatureImage={setFeatureImage} />
            <div className="classInfo">
              <h2>{title}</h2>
              <h3>{instructor}</h3>
              <p className="classDescription">{description}</p>
            </div>
            <div>
              <span className={classType === 'live' ? 'classType live' : 'classType onDemand'}>{classType}</span>
              <span className="classDuration">{duration} min</span>
            </div>
          </ClassCardDisplay>
  
          <ClassCardForm key="back">
            <Image editImage='true' featureImage={featureImage} setFeatureImage={setFeatureImage} />
            <label>Title: </label>
            <input 
              type="text"
              name="title"
              value={title}
              onChange={handleChangeTitle}
              />
            <br />
            <label>Instructor:</label>
            <input
              type="text"
              name="instructor"
              value={instructor}
              onChange={handleChangeInstructor}
              />
            <br />
            <label>Description:</label>
            <textarea
              rows="6"
              name="description"
              value={description}
              onChange={handleChangeDescription}
            />
            <br />
            <label className="form__radioLabelOnDemand">On-Demand: 
              <input
                type="radio"
                value="on-demand"
                onChange={handleChangeClassType}
                checked={classType === 'on-demand'}
              />
            </label>
            <label className="form__radioLabelLive">Live: 
              <input
                type="radio"
                value="live"
                onChange={handleChangeClassType}
                checked={classType === 'live'}
              />
            </label>
            <label className="form__inputLabelDuration">Duration:
              <input
                type="number"
                name="duration"
                value={duration}
                onChange={handleChangeDuration}
              />
            </label>
            <div className="form__buttons">
              <button onClick={handleFormSubmit}>Save</button>
              <button onClick={(e) => deleteClass(e, content.id)}>Delete</button>
            </div>
          </ClassCardForm>
        </ReactCardFlip>
      </ClassCardWrapper>
    )
}
  
export default Card

const ClassCardWrapper = styled.div`
  width: 350px;
  margin: 5px 5px;
`
const ClassCardDisplay = styled.div`
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
  & .classDescription {
    font-weight: 400;
    font-size: .75em;
    padding: 0 20px;
    height: 120px;
    overflow: hidden;
  }
  & .classType {
    float: left;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    padding: 2px 10px;
  }
  & .classType.live {
    background-color: #236d14;
  }
  & .classType.onDemand {
    background-color: #ffffff;
    border-left: 0px;
    color: #000000;
  }
  & .classDuration {
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
const ClassCardForm = styled.div`
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