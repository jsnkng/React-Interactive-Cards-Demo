import React, {  useState } from 'react';
import styled from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import Modal from 'styled-react-modal'
import classList from './classes'
import NavBar from './NavBar'
import ReactCardFlip from 'react-card-flip';


const App = () => {
  const [classes, setClasses] = useState(classList)

  const newClass = () => {
    let lastItem = classes.reverse().slice(-1).pop();
    let lastId = lastItem.id;
    let newClasses = [...classes, {
      id: ++lastId,
      title: "Click to Edit",
      instructor: "",
      description: "",
      duration: "0",
      featureImage: "",
      classType: "Type"
    }]
    setClasses(newClasses)
  }

  const deleteClass = (e, id) => {
    if (window.confirm('Are you sure you wish to delete this class?\nClick OK to delete class or Cancel to go back.')) onDeleteClass(id) 
    e.preventDefault();
  }

  const onDeleteClass = (id) => { 
    let index = classes.findIndex(klass => klass.id === id)
    classes.splice(index, 1)
    let newClasses = [...classes.reverse()]
    setClasses(newClasses)
  }

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <button onClick={newClass}>+ New Class</button>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <ClassCardContainer>
          {classes.reverse().map(klass => <ClassCard key={klass.id} content={klass} deleteClass={deleteClass} />)}
        </ClassCardContainer>
      </ModalProvider>
    </Wrapper>
  )
}


const ClassCard = ({content,deleteClass}) => {
  const [featureImage, setFeatureImage] = useState(content.featureImage || 'https://via.placeholder.com/500/000000/ffffff/?text=Ceci+ne+pas+une+repas+délicieux ')
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
          <div style={{ backgroundImage: 'url(' + featureImage + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '200px',
                borderRadius: '2px 2px 0 0'
          }}></div>
          <h2>{title}</h2>
          <h3>{instructor}</h3>
          <p className="classDescription">{description}</p>
          <div>
            <span className={classType === 'live' ? 'classType live' : 'classType onDemand'}>{classType}</span>
            <span className="classDuration">{duration} min</span>
          </div>
          <div></div>
        </ClassCardDisplay>

        <ClassCardForm key="back">
          <ChangeImage featureImage={featureImage} setFeatureImage={setFeatureImage} />
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
          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={duration}
            onChange={handleChangeDuration}
            />
          <label className="form__radioLabel">On-Demand: 
            <input
              type="radio"
              value="on-demand"
              onChange={handleChangeClassType}
              checked={classType === 'on-demand'}
            />
          </label>
          <label>Live: 
            <input
              type="radio"
              value="live"
              onChange={handleChangeClassType}
              checked={classType === 'live'}
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

const ChangeImage = ({featureImage,setFeatureImage}) => {
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
    fetch('https://api.unsplash.com/search/photos?page=1&query='+ search +'&client_id=cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f&per_page=12')
		.then(res => res.json())
		.then(data => {
			 setImages(data.results)
       console.log(data) 
    })
		.catch(err => {
			console.log('Error happened during fetching!', err);
    });
    console.log(images)
  }

  return (
    <div>
      <div className="container__changeImage">
        <button onClick={toggleModal}>Change Picture</button>
        
        <div style={{ backgroundImage: 'url(' + featureImage + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '200px',
                borderRadius: '2px 2px 0 0',
                marginBottom: '10px'
          }}></div>
      </div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <button className="container__changeImage_close" onClick={toggleModal}>X</button>
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
        <br />
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
      </StyledModal>
    </div>
  )
}



const Wrapper = styled.div `
  padding: 45px 0 0 0;
  text-align: center;
`
const ClassCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  margin: 20px;
`
const ClassCardWrapper = styled.div`
  width: 350px;
  margin: 5px 5px;
`
const ClassCardDisplay = styled.div`
  height: 470px;
  background: #ffffff;
  border-radius: 2px;
  border: solid 1px #cccccc;
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);

  & h2 {
    display: inline-block;
    font-weight: 600;
    font-size: 1.5em;
    font-weight: 700;
    padding: 10px;
    margin-top: -50px;
    max-width: 80%;
    background: rgba(255,255,255,1);
  }
  & h3 {
    font-weight: 500;
    font-size: 1.125em;
    padding: 0px 10px;
    margin-top: 0px;
  }
  & div {
    clear: both;
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
    background: #000000;
  }
  & .classType.onDemand {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-left: 0px;
    color: #000000;
  }
  & .classDuration {
    width: 30px;
    height: 27px;
    float: right;
    border-radius: 32px;
    font-weight:500;
    font-size: .75em;
    line-height: 1;
    margin: 0 5px 0 0;
  }    
`
const ClassCardForm = styled.div`
  height: 470px;  
  background: #ffffff;
  border-radius: 2px;
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
    font-weight: 500;
    font-size: .80em;
    text-align: right;
    width: 75px;
  }
  & label.form__radioLabel {
    width: 125px;
  }
  & textarea  {
    width: 180px;
    font-size: .80em;
    border: 1px solid #cccccc;
    padding: 2px;
  }
  & input  {
    width: 180px;
    font-size: .80em;
    border: 1px solid #cccccc;
    padding: 2px;
  } 
  & input[type="radio"]  {
    display: inline-block;
    width: 30px;
    border: 1px solid #cccccc;
  }
  & .form__buttons {
    padding: 10px;
  }
`
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
    top: 10px;
    right: 15px;
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
const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0,0,0,.75);
`


export default App