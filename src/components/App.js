import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { onFecthLoadItems, onFecthLoadPlayers, onFecthLoadNewItems } from '../actions/items'
import '../style/bootstrap.css'
import '../style/layout.css'
import '../style/spinner.css'

import Header from './Header.js'
import Player from './Player.js'
import Robot from './Robot.js'
import Loading from './Loading.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMenu : true,
      robotId : "" ,
      isRunning: false
    }
  }

  componentDidMount() {
    // 元件"已經"載入，所以可以載入資料進來
    this.props.onFecthLoadItems();
    this.props.onFecthLoadPlayers();
    
  }
  seeStore(){
    console.log(this.props);
  }
  gotoProfile(robotId){
    console.log(robotId);
    this.props.onFecthLoadNewItems({robotId});
    this.setState({isRunning:true});
    setTimeout(()=>{
      this.setState({isMenu: false, robotId: robotId, isRunning:false});
    },2000)
  }
  goHome(){
    this.setState({isMenu: true});
  }
  render() {
    return (
      <div>
        <Header onHome={() => this.goHome()}/>
        <div className="layout-1000">
          {/* <button onClick={ this.seeStore.bind(this) }>see</button> */}
        </div>
        <div className="layout-1000">
          {
            this.state.isMenu ?
            <div className="row">
              {
                this.props.players.map( (player, index) => {
                  return <Player key={index} player={player} onGo={ () => this.gotoProfile(player.id) }/>
                } )
              }
            </div> :
            <Robot robotId={this.state.robotId} items={this.props.items}/>
          }
          
        </div>
        {
          this.state.isRunning ?
          <Loading /> :
          ""

        }
        
        
      </div>
    )
  }
}

const mapStateToProps = store => ({
  items: store.items,
  players: store.players
 })

 const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onFecthLoadItems, onFecthLoadPlayers, onFecthLoadNewItems }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App)
