import React from 'react'
import './NewBookModal.css'

export default function NewBookModal() {
  return (
    <div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-form">
            <form>
              <input 
                type="text"
              />
              <input 
                type="text"
              />
              <input 
                type="number"
              />
              <input 
                type="text"
              />
              <div className="read-rating-container">
                <div className="read-label-input">
                  <input 
                    type="checkbox"
                  />
                </div>
                <div className="rating-label-input">
                  <select 
                    name="" 
                    id="">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                  </select>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
