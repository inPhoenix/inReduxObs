import React from 'react'

export function SearchField ({defaultValue, onChange, messages, loading, cancel}) {
  return (
    <div className='search-container'>
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder='Search by Title...'
        onChange={(event) => onChange(event.target.value)}
        autoFocus
      />
      {loading && (
        <div className='cancel-button'>
        <button
          type='button'
          onClick={cancel}>
          Cancel
        </button>
        </div>
      )}
      {messages.length > 0 && (
        <ul>
          {messages.map(message =>
            <li key={message.text} className={`message message--${message.type}`}>
              {message.text}
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
