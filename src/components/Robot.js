import React, { Component } from 'react'

class Robot extends Component {
  constructor(props){
    super(props);
    this.state ={
      okeys: Object.keys(this.props.items.items),
      ovals: Object.values(this.props.items.items),
    }
  }
  render() {
    return (
      <div>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-4 col-xs-offset-4">
              <div className="playerCard">
                <div className="cardRobot">
                  <img src={'https://robohash.org/sdcsc'+this.props.items.name+'?size=311x280'}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-xs-offset-2">
              <h1>玩家名稱：{this.props.items.name}</h1>
              <br/>
              <h1> 等級： {this.props.items.level}</h1>
            </div>
            <div className="col-xs-6">
              <ul>
                {
                  this.state.okeys.map( (ele,index) => {
                    return <li>{this.state.okeys[index]} - {this.state.ovals[index]}</li>
                  } )
                }
              </ul>
            </div>
            
            
          </div>
        </div>
      </div>
    )
  }
}

export default Robot;
