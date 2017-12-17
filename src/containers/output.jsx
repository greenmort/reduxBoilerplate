import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/output.scss';

class Output extends Component{
    render(){
        return(
            <div className="output">{this.props.value}</div>
        )
    }
}

function mapStateToProps({value}) {
    return {value};
}

export default connect(mapStateToProps)(Output);
