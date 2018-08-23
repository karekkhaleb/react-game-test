import React from 'react';
import './styles/index.css';
import BoxComponent from './boxComponent';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getPossibilities} from "../stateManagement/actions/possibilities-actions";
import {checkClicked} from "../stateManagement/actions/click-actions";
import {addLife} from "../stateManagement/actions/lives-actions";
import {updateTime} from "../stateManagement/actions/time-actions";
import {updateRemaining} from "../stateManagement/actions/remaining-level-boxes-actions";
import { inRangeBoxes } from "./levelTools/levelTools";
import { changeAvailableBoxesPerClick } from "../stateManagement/actions/available-boxes-per-click-actions";
import { togglePlayMode } from "../stateManagement/actions/can-play-actions";
import { changeLevel } from "../stateManagement/actions/level-actions";
import { cleanPossibilities } from "../stateManagement/actions/possibilities-actions";
import { ScoreAlertComponent } from "./ScoreAlertComponent";


const Stats = (props) =>{
    return (
        <div className="stats">
            <h3>Game Stats</h3>
            <ul>
                <li>Timer: {props.time}s</li>
                <li>Clicked: {props.clicked.length}</li>
                <li>Lives: {props.lives}</li>
            </ul>
        </div>
    );
};
class BoxHolderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inRange: [],
            messageHead:'',
            messageBody:''
        };
        this.myArray = [];
        for (let i = 1; i<=100; i++){
            this.myArray.push(i);
        }
    }
    componentDidMount(){
        this.props.onTogglePlayMode(true);
        this.props.onCleanPossibilities();
        this.props.onCheckClicked([]);
        this.props.onTimeUpdate(0);
        this.props.onUpdateRemaining([]);
        this.props.onChangeAvailableBoxes([]);
        this.setState({showScoreAlert: false});
    }
    inRangeBoxes = (clickedBoxNumber) => {
        let tempArray = [];
        this.myArray.forEach(number=>{
            let test = Math.abs(clickedBoxNumber - number);
            if((clickedBoxNumber + 10) - 7 === number && Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber - 10) + 7 === number &&
                    Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10)

                ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber - 10) - 8 === number
                    &&
                    Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
                    Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
                ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber + 30) - 8 === number &&
                    Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
                    Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
                ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            //Not completed
            else if((clickedBoxNumber + 10) + 8 === number &&
                    Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
                ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if((clickedBoxNumber - 30) + 8 === number &&
                Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
                ) {
                // console.log(`the number is ${number} therefore it is not included`)
            }
            else if( test === 3 || test === 30 || test === 18 || test === 22){
                tempArray.push(number);
            }
        });
        this.setState({inRange: tempArray});
        return tempArray;
    };

    timeCounter = () =>{
        return new Promise((resolve, reject) =>{
            resolve(this.props.onTimeUpdate(this.props.time + 1));
            reject(()=>console.log('sorry the counter failled to stop'))
        })
    };
    noClicked = () =>{
        this.props.onTogglePlayMode(false);
    };
    yesClicked = () => {
        this.props.onTogglePlayMode(true);
        this.props.onCleanPossibilities();
        this.props.onCheckClicked([]);
        this.props.onTimeUpdate(0);
        this.props.onUpdateRemaining([]);
        this.props.onChangeAvailableBoxes([]);
        this.setState({showScoreAlert: false});
    };

    checkClicked = async (clickedBoxNumber) =>{

        let inRangeTempBoxes = inRangeBoxes(clickedBoxNumber);

        if(this.props.possibilities.length < 1){

            this.inRangeBoxes(clickedBoxNumber);//this is here for styles purpose

            let tempTimer = await setInterval(()=>{
                this.timeCounter()
            },1000);

            this.setState({timer: tempTimer});

            await this.props.onGetPossibilities(clickedBoxNumber, this.props.currentLevel);
            // let clicked = [clickedBoxNumber];
            let possibilitiesWithoutRootBox = [...this.props.possibilities];
            possibilitiesWithoutRootBox.shift();
            this.props.onUpdateRemaining(possibilitiesWithoutRootBox);

            let oRemainingBoxes = [...possibilitiesWithoutRootBox];


            let availableBoxForNow = [];
            for(let i= 0; i <= inRangeTempBoxes.length -1; i++){
                if(oRemainingBoxes.includes(inRangeTempBoxes[i]) && !this.props.clicked.includes(inRangeTempBoxes[i])){
                    availableBoxForNow.push(inRangeTempBoxes[i])
                }
            }

            await this.props.onChangeAvailableBoxes(availableBoxForNow);

        }else {
            if (this.props.remainingBoxes.indexOf(clickedBoxNumber) >= 0 && this.props.availableBoxes.indexOf(clickedBoxNumber) >= 0){ //checking if the clicked box is available for the in this level
                this.inRangeBoxes(clickedBoxNumber);//this is here for styles purpose

                let clicked = [...this.props.clicked];
                let prevRemainingBoxes = [...this.props.remainingBoxes];

                /*********retaining the clicked box**********/
                clicked.push(clickedBoxNumber);
                await this.props.onCheckClicked(clicked);
                /*********************************************/
                /******************updating the remaining boxes***************************/
                let tempRem = [];
                for (let i = 0; i<= prevRemainingBoxes.length - 1; i++){
                    if (prevRemainingBoxes[i] !== clickedBoxNumber){
                        tempRem.push(prevRemainingBoxes[i])
                    }
                }
                this.props.onUpdateRemaining(tempRem);
                /********************************************************************/

                /************************checking if you won*********************************/
                if (this.props.possibilities.length -1  ===  this.props.clicked.length && this.props.remainingBoxes.length ===0) { //checking if you won

                    clearInterval(this.state.timer);
                    this.props.onAddLife(this.props.lives+1); //creasing life on success
                    await this.props.onChangeLevel(this.props.level + 1);

                    this.setState({
                        showScoreAlert: true,
                        messageHead: `completed Level ${this.props.level - 1}`,
                        messageBody: `do you want to continue to the next level?`
                    });
                    // this.props.onTogglePlayMode(false);
                    console.log('won!!!');
                }else {
                    /**********************************updating the available boxes**********************************************/
                    let oRemainingBoxes = [...this.props.remainingBoxes];
                    let availableBoxForNow = [];
                    /**
                     *
                     * @param {inRangeTempBoxes} is the array of boxes that should be available regardless of the movement rules
                     * @param {availableBoxForNow} is the array of available boxes respecting movement rules
                     * @param {oRemainingBoxes} is the array of  remaining boxes
                     * @param {prevRemainingBoxes) is the array of previously remaining boxes
                     */
                    for(let i= 0; i <= inRangeTempBoxes.length -1; i++){
                        if(oRemainingBoxes.includes(inRangeTempBoxes[i]) && !this.props.clicked.includes(inRangeTempBoxes[i])){
                            availableBoxForNow.push(inRangeTempBoxes[i])
                        }
                    }
                    this.props.onChangeAvailableBoxes(availableBoxForNow);
                    /**********************************************************************************************/

                    /***************************checking if you run out of moves************************************/
                    if(this.props.availableBoxes.length === 0 ){
                        let unClickedBoxes= (this.props.possibilities.length-1) - this.props.clicked.length;
                        if(this.props.lives - unClickedBoxes <= 1){ //Check if the player should start from level 1
                            this.props.onAddLife(1);
                        }else {//just remove the lives equal to unClicked Boxes
                            this.props.onAddLife(this.props.lives - unClickedBoxes);
                        }
                        clearInterval(this.state.timer);

                        this.setState({
                            showScoreAlert: true,
                            messageHead: `failed level ${this.props.level}`,
                            messageBody: `do you want replay?`
                        });
                        console.log('stop! out of moves');
                    }
                }
            }
        }
    };

    render(){
        return(
            <div>{
                this.state.showScoreAlert ?
                    <ScoreAlertComponent
                        messageHead={this.state.messageHead}
                        messageBody={this.state.messageBody}
                        noClicked={this.noClicked}
                        yesClicked={this.yesClicked}
                    /> : ''
            }

                <div className="parentContainer">
                    <div className="boxContainer">
                        {this.myArray.map((value, index)=>{
                            return(
                                <BoxComponent checkClicked={this.checkClicked}
                                              inRange = {this.state.inRange}
                                              possibilities={this.props.possibilities}
                                              clicked={this.props.clicked}
                                              key={index}
                                              boxNumber={value}
                                              available={this.props.availableBoxes}
                                />
                            );
                        })}
                    </div>
                     <Stats
                         clicked={this.props.clicked}
                         lives={this.props.lives}
                         time={this.props.time}
                     />
                </div>
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
        canPlay: state.canPlay,
        level: state.level
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
        onChangeLevel: changeLevel,
        onCleanPossibilities: cleanPossibilities

    }, dispatch);

};

export default connect(mapStateToProps, mapActionsToProps)(BoxHolderComponent);