import React from 'react';

export default class BoxComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
    componentDidMount(){
        this.setState({
            boxNumber: this.props.boxNumber
        });
    }
    onBoxClick = () => {
        this.setState({
            clicked: true
        });
        this.props.checkClicked(this.state.boxNumber);
    };

    render(){
        return(

            <div className={`box
                ${this.props.possibilities.indexOf(this.state.boxNumber) >= 0 ? 'toBeClicked' : ''}
                ${this.props.clicked.indexOf(this.state.boxNumber) >= 0
                    ||
                    this.props.possibilities.indexOf(this.state.boxNumber) === 0
                ? 'clicked' : ''

                }
                ${this.props.available.indexOf(this.state.boxNumber) >= 0
                            &&
                        this.props.clicked.indexOf(this.state.boxNumber) === -1
                ? 'availableInRange': ''
                }
            `}
                 onClick={this.onBoxClick}
                 onMouseLeave={() => this.setState({hoveredOver: false})}
                 onMouseOver={() => this.setState({hoveredOver: true})}>
            </div>
        );
    }
}