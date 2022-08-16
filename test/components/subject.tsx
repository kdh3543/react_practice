import React, { Component } from 'react'

class Subject extends Component {
  render() {
    return (
      <>
        <h1><a href='/'>{this.props.title}</a></h1>
        <div>
          {this.props.sub}
        </div>
      </>
    )
  }
}

export default Subject