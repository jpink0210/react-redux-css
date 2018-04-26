import React, { Component } from 'react'

class Player extends Component {
  constructor(props){
    super(props);

  }
  pc(){
    console.log(this.props);
  }
  render() {
    return (
        <div className="col-xs-4">
          <div className="playerCard">
            <div className="cardRobot" onClick={ this.props.onGo }>
              <img src={ 'https://robohash.org/sdcsc'+ this.props.player.name + '?size=311x280' } />
            </div>
            <div className="cardTitle"></div>
            <div className="cardName">{this.props.player.name}</div>
          </div>
        </div>
    )
  }
}

export default Player
