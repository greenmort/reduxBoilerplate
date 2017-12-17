import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setValue} from '../actions/index';

class Input extends Component{
    state={
        term:''
    };

    onInputChange = e =>
        this.setState({term: e.target.value});

    onFormSubmit = e => {
        e.preventDefault();
        this.props.setValue(this.state.term);
        this.setState({term: ''});
    };

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" onChange={this.onInputChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({setValue}, dispatch);

export default connect(null, mapDispatchToProps)(Input);


