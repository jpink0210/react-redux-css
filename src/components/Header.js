import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="layout-1000">
          <div className="row">
            <div className="col-xs-4" onClick={this.props.onHome}>
              <h1 style={{cursor: "pointer"}}>工具人聯盟</h1>
            </div>
            <div className="col-xs-6 col-xs-offset-2">
              <div className="row">
                <div className="col-xs-3">
                  <h3>選項ㄧ</h3>
                </div>
                <div className="col-xs-3">
                  <h3>選項二</h3>
                </div>
                <div className="col-xs-3">
                  <h3>選項三</h3>
                </div>
                <div className="col-xs-3">
                  <h3>選項四</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Header
