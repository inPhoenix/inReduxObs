import React from 'react'

export function SearchField ({defaultValue, onChange, messages}) {
  return (
    <div>
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder='Search by Title...'
        onChange={(event) => onChange(event.target.value)}
        autoFocus
      />
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
