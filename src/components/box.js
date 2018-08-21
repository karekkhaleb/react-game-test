import React from 'react';



// let names = ['caleb', 'claude', 'eben'];
// names.

export default class Box extends React.Component{
    componentDidMount(){
        this.setState({
            boxNumber: this.props.boxNumber
        });
        console.log(this.props.inRange.length);
    }
    constructor(props){
        super(props);
        this.state = {
            hoveredOver: false,
            clicked: false
        }
    }


    onBoxClick = () => {
        this.setState({
            clicked: true,
            hoveredOver: false
        });
        this.props.checkClicked(this.state.boxNumber);
        console.log(this.props.inRange.indexOf(84));

        // console.log(`the box number is ${this.state.boxNumber}`);
    };

    render(){
        let inRange = this.props.inRange;
        return(
            <div className={`box
                ${this.state.hoveredOver && !this.state.clicked ? 'hovered' : ''}
                ${this.state.clicked ? 'clicked' : ''}
                ${inRange.length <=0 ? '' : (inRange.indexOf(this.state.boxNumber) > -1 && this.state.clicked === false ? 'availableInRange': '')}
                
            `}
                 onClick={this.onBoxClick}
                 onMouseLeave={() => this.setState({hoveredOver: false})}
                 onMouseOver={() => this.setState({hoveredOver: true})}>
                {this.props.boxNumber}
            </div>
        );
    }
}