import React from 'react'

const Buttons = ({ language, setSelectLanguage, selectLanguage }) => {
  return (
    <button
      key={language.id}
      className={` btn m-2 ${selectLanguage.id === language.id ? "btn-warning" : "btn-primary"}`}
      onClick={() => setSelectLanguage(language)}
    >
      {language.title}
    </button>
  )
}

export default Buttons
