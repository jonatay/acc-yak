import React, {Component} from 'react';

class AccDetail extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2 text-right">name:</div>
        <div className="col-sm-4">{this.props.currAcc.name}</div>
        <div className="col-sm-2 text-right">type:</div>
        <div className="col-sm-4">{this.props.currAcc.type}</div>
        <hr/>
      </div>
    )
  }
}

export default AccDetail;