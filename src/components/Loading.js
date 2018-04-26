import React, { Component } from 'react'

class Loading extends Component {
  render() {
    return (
      <div className="loadingPage">
        <div className="lds-css ng-scope loadpage1" style={{ width: '200px', height: '200px' }}>
          <div className="lds-spinner" style={{width: '100%', height:'100%' }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      
    )
  }
}



export default Loading
