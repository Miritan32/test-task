import React from 'react'

function Message({formData, setFormData}) {
  return (
    <div className='message-container'>
      <h1 className='message-header'>Message</h1>
      <label className='message-text' for="message">Message</label>
      <textarea className='message-input' 
      rows={6} 
      id='message'
      value={formData.message} 
      onChange={(event) => 
      setFormData({ ...formData, message: event.target.value})
      } ></textarea>
      <div className='radio-container'>
        <input className='input-radio-1' type='radio' id='radio1' checked={formData.radio1} onChange={(event) => setFormData({ ...formData, radio1: true, radio2: false})} name='option1' />
        <label className='label-radio-1' for="radio1">The number one choice</label>
        <input className='input-radio-2' type='radio' id='radio2' checked={formData.radio2} onChange={(event) => setFormData({ ...formData, radio2: true, radio1: false})} name='option1' />
        <label className='label-radio-2' for="radio2">The number two choice</label>  
      </div>
    </div>
  )
}

export default Message