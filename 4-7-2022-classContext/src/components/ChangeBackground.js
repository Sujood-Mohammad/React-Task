import React, { Component } from 'react'
import UserContext from './UserContext'

export default class HomePage extends Component {
  static contextType = UserContext;

  do=()=> {
      const color = this.context
      document.body.style.backgroundColor = color;
  }

  render() {
    return <div>
        <button onClick={this.do}>change</button>
        
    </div>
  }
}