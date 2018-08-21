import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from "../stateManagement/actions/user-actions";

class testComponent extends React.Component{

    onUpdateUser = (event) =>{
        this.props.onUpdateUser(event.target.value);
    };
    render(){

        console.log('caleb products');
        console.log(this.props);

        return(
            <div>
                <h1>this is my test component!!</h1>
                {/*<div onClick={this.onUpdateUser}>Update user</div>*/}
                <input onChange={this.onUpdateUser}/>
                {this.props.user}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products,
        user: state.user,
        author: props.author
    };
};
const mapActionsToProps = (dispatch, props) => {
    console.log(props);
    return bindActionCreators({
            onUpdateUser: updateUser
    }, dispatch);

};
// const mapActionsToProps = {
//     onUpdateUser: updateUser
// };

export default connect(mapStateToProps, mapActionsToProps)(testComponent);