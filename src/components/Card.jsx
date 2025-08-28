import React from 'react'

const Card = ({ selectLanguage }) => {
  return (
    <div>
      <div className="card m-2 p-2">
        <h3>{selectLanguage === 0 ? "Nessun linguaggio selezionato" : selectLanguage.title}</h3>
        <p>{selectLanguage.description}</p>
      </div>
    </div>
  )
}

export default Card
