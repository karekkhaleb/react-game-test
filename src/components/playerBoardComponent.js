import React from 'react';

class playerBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            level:1
        }
    }
    togglePlayMode = async() => {
        await this.props.changeTheLevel(parseInt(this.state.level));
        await  this.props.togglePlayMode(true)
    };
    onChangeLevel = (e) =>{
        this.setState({level: e.target.value});
    };
    componentDidMount(){
        console.log('mounted');
        this.setState({level: localStorage.getItem('level') || this.props.level})
    }
    render(){
        return(
            <div className={`playerBoard`}>
                <h2>Welcome to my Game!!</h2>
                <h3>Play level: {this.state.level}</h3>
                <button onClick={this.togglePlayMode}>start Playing</button>
                <input
                    type={`range`}
                    min='1'
                    max={localStorage.getItem('level') || this.props.level}
                    value={this.state.level}
                    onChange={this.onChangeLevel}
                />
            </div>);
    }
}
export default playerBoard;