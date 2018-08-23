import React, { Component } from 'react';
import PlayerBoard from './components/playerBoardComponent';
import BoxHolderComponent from './components/BoxHolderComponent';
import {getPossibilities} from "./stateManagement/actions/possibilities-actions";
import {changeAvailableBoxesPerClick} from "./stateManagement/actions/available-boxes-per-click-actions";
import {togglePlayMode} from "./stateManagement/actions/can-play-actions";
import {checkClicked} from "./stateManagement/actions/click-actions";
import {updateTime} from "./stateManagement/actions/time-actions";
import {updateRemaining} from "./stateManagement/actions/remaining-level-boxes-actions";
import {addLife} from "./stateManagement/actions/lives-actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { changeLevel } from "./stateManagement/actions/level-actions";

class App extends Component {
  render() {
    return (
      <div className="App">
          {
              this.props.canPlay ? <BoxHolderComponent/> :
                  <PlayerBoard
                      level={this.props.currentLevel}
                      changeTheLevel={this.props.onChangeLevel}
                      togglePlayMode={this.props.onTogglePlayMode}
                  />
          }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
        user: state.user,
        lives: state.lives,
        currentLevel: state.level,
        possibilities: state.possibilities,
        clicked: state.clicked,
        remainingBoxes: state.remainingBoxes,
        time: state.timer,
        availableBoxes: state.availableBoxes,
        canPlay: state.canPlay
    };
};
const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        onAddLife: addLife,
        onGetPossibilities: getPossibilities,
        onCheckClicked: checkClicked,
        onTimeUpdate: updateTime,
        onUpdateRemaining: updateRemaining,
        onChangeAvailableBoxes: changeAvailableBoxesPerClick,
        onTogglePlayMode: togglePlayMode,
        onChangeLevel: changeLevel
    }, dispatch);

};

export default connect(mapStateToProps, mapActionsToProps)(App);
