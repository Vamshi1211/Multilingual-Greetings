import './index.css'

const ButtonsControls = props => {
  const {eachLan, onClickLanguage, isActive} = props
  const {buttonText, imageUrl, imageAltText} = eachLan

  const activeBtn = isActive ? 'active-btn' : ''

  const buttonClicked = () => {
    onClickLanguage(buttonText, imageUrl, imageAltText)
  }

  return (
    <li className="button-list-item-container">
      <button
        type="button"
        className={` ${activeBtn} controls-button`}
        onClick={buttonClicked}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonsControls
