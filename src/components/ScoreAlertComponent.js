import React from 'react';

export class ScoreAlertComponent extends React.Component{
    onYesClicked = () =>{
        this.props.yesClicked();
    };
    onNoClicked = () =>{
        this.props.noClicked();
    };
    render(){
        return(
            <div className="scoreAlert">
                <div className="scoreModel">
                    <h3>You have {this.props.messageHead}</h3>
                    <p>do you want to {this.props.messageBody}</p>
                    <button onClick={this.onNoClicked}>No</button>
                    <button onClick={this.onYesClicked}>Yes</button>
                </div>
            </div>
        );
    }
}