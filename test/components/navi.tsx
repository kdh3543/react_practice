import React, { Component } from 'react'

class Navi extends Component {
  render() {
    var lists = []
    var data = this.props.data
    var i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}>{data[i].title}</li>)
      i = i + 1
    }
      
    return (
      <ul>
        {lists}
      </ul>
    )
  }
}

export default Navi