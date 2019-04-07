import React, { Component } from 'react'
import { PEOPLE, TERRITORIES } from './constants'
import './OptionsList.css'

class OptionsList extends Component {

  render() {
    const type = this.props.type
    let options = PEOPLE
    if (type === 'territories') {
      options = TERRITORIES
    }
    return (
      <div className="OptionsList container">
          <h2>Available contacts</h2>
          <div className="card-deck">
            {options.map((option, index) => {
            return (
              <div className="card">
              <h4 className="card-header">{ option.name }</h4>
              <img className="card-img-top"
                src={`/${type}/${option.id}.jpg`}
                alt={option.name}
              />
              <div className="card-body">
                <div className="card-title">{ option.superpower }</div>
              </div>
              </div>
            )
            })}
          </div>
      </div>
    );
  }
}

export default OptionsList
