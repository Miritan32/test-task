import React from 'react'
import car from '../pics/car.png'
import airplane from '../pics/airplane.png'


function Checkbox({formData, setFormData}) {
  
  return (
    <div className='checkbox-container'>
      <div className='checkbox-header'><h1 className='text-chechkbox'>Checkbox</h1></div>
      <div className='radio'>
        <div className='button'>  
          <div className='radio-1st-option'>
            <input className='input-radio-3' type='radio' id='radio3' checked={formData.radio3} onChange={(event) => setFormData({ ...formData, radio3: true, radio4: false})} />
            <label className='label-radio-3' for="radio3">
            <img className='airplane' src={airplane}/>
            </label>
          </div>
          <div className='radio-second-option'>
            <input className='input-radio-4' type='radio' id='radio4' checked={formData.radio4} onChange={(event) => setFormData({ ...formData, radio4: true, radio3: false})}  />  
            <label className='label-radio-4' for="radio4">
            <img className='car' src={car}/>
            </label>
          </div>  
        </div>
      </div>
      <div className='checkboxes'>
        <div className='checkbox-option-1'>
          <input type="checkbox" className='first-checkbox-input'  checked={formData.checkbox1} onChange={(event) => setFormData({ ...formData, checkbox1: event.target.checked})}  id="checkbox1"  />
          <label className='first-checkbox-label' for='checkbox1'>I wan't to add this option.</label>
        </div>
        <div className='checkbox-option-2'>
          <input className='second-checkbox-input' checked={formData.checkbox2} onChange={(event) => setFormData({ ...formData, checkbox2: event.target.checked})} type="checkbox" id="checkbox2"/>
          <label className='second-checkbox-label' for='checkbox2'>Let me click on this checkbox and choose some cool stuf.</label>
        </div>
      </div>   
  </div>
  )
}

export default Checkbox