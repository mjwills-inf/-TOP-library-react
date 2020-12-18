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
                      <option value="5">5</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                  </select>
                </div>
              </div>
              <button>
                Submit
              </button>
              <button>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
