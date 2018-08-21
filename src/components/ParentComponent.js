import React from 'react';
import './styles/index.css';
// import Box from './box';
import TestComponent from "./testComponent";


export default class ParentComponent extends React.Component{
    render(){
        return(
            <div>
                <TestComponent author={`caleb`}/>
            </div>
        );
    }
}

// const Stats = (props) =>{
//     return (
//         <div className="stats">Stats</div>
//     );
// };



//
// export default class ParentComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             inRange: []
//         };
//         this.myArray = [];
//         for (let i = 1; i<=100; i++){
//             this.myArray.push(i);
//         }
//     }
//
//     // inRangeBoxes = (clickedBoxNumber) => {
//     // };
//     // inRangeBoxes = (currentBoxNumber, clickedBoxNumber) => {
//     //     return Math.abs(currentBoxNumber - clickedBoxNumber) === (3 || 30 || 18 || 22);
//     // };
//
//     inRangeBoxes = (clickedBoxNumber) => {
//         let tempArray = [];
//         console.log(this.state.inRange);
//         this.myArray.forEach(number=>{
//             let test = Math.abs(clickedBoxNumber - number);
//             if((clickedBoxNumber + 10) - 7 === number && Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) ) {
//                 console.log(`the number is ${number} therefore it is not included`)
//             }
//             else if((clickedBoxNumber - 10) + 7 === number &&
//                     Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10)
//
//                 ) {
//                 console.log(`the number is ${number} therefore it is not included`)
//             }
//             else if((clickedBoxNumber - 10) - 8 === number
//                     &&
//                     Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
//                     Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
//                 ) {
//                 console.log(`the number is ${number} therefore it is not included`)
//             }
//             else if((clickedBoxNumber + 30) - 8 === number &&
//                     Math.ceil(clickedBoxNumber/10) !== Math.ceil(number/10) &&
//                     Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
//                 ) {
//                 console.log(`the number is ${number} therefore it is not included`)
//             }
//             //Not completed
//             else if((clickedBoxNumber + 10) + 8 === number &&
//                     Math.ceil((clickedBoxNumber + 20) / 10) !== Math.ceil(number / 10)
//                 ) {
//                 console.log(`the number is ${number} therefore it is not included`)
//             }
//             else if((clickedBoxNumber - 30) + 8 === number &&
//                 Math.ceil((clickedBoxNumber - 20) / 10) !== Math.ceil(number / 10)
//                 ) {
//                 console.log(`the number is ${number} therefore it is not included`)
//             }
//             else if( test === 3 || test === 30 || test === 18 || test === 22){
//                 tempArray.push(number);
//             }
//         });
//         this.setState({inRange: tempArray});
//         console.log(this.state.inRange);
//     };
//
//     checkClicked = (clickedBoxNumber) =>{
//         this.inRangeBoxes(clickedBoxNumber);
//     };
//
//     render(){
//         return(
//             <div className="parentContainer">
//                 <div className="boxContainer">
//                     {this.myArray.map((value, index)=>{
//                         return(
//                             <Box checkClicked={this.checkClicked}
//                                  inRange = {this.state.inRange}
//                                  key={index}
//                                  boxNumber={value}
//                             />
//                         );
//                     })}
//                 </div>
//                 {/* <Stats /> */}
//             </div>
//         );
//     }
// }
//
