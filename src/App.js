import {Component} from 'react'
import ButtonsControls from './components/ButtonsControls'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: 'English',
    imgUrl: languageGreetingsList[0].imageUrl,
    altText: languageGreetingsList[0].imageAltText,
  }

  onClickLanguage = (buttonText, imageUrl, imageAltText) => {
    this.setState({
      activeLanguage: buttonText,
      imgUrl: imageUrl,
      altText: imageAltText,
    })
  }

  render() {
    const {activeLanguage, imgUrl, altText} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="button-list-container">
            {languageGreetingsList.map(eachItem => (
              <ButtonsControls
                key={eachItem.id}
                eachLan={eachItem}
                isActive={activeLanguage === eachItem.buttonText}
                onClickLanguage={this.onClickLanguage}
              />
            ))}
          </ul>

          <img src={imgUrl} alt={altText} className="image" />
        </div>
      </div>
    )
  }
}

export default App
