import React, {Component} from 'react';
import styles from './styles';

class CCompany extends Component {
  render() {
    const coyStyle = styles.ccoy;

    return (
      <div className="" style={coyStyle.container}>
        <div className="row">
          <div className="col-sm-2">
            <div className="btn btn-primary"><span className="glyphicon glyphicon-edit" ariaHidden="true"> </span> edit</div>
          </div>
          <h2 className="col-sm-10" style={coyStyle.header}>
          <a href="#" style={coyStyle.coyLink}>{ this.props.currCoy.name }</a>
        </h2>
        </div>

        <div className="row">
          <div className="col-sm-3">cubit:</div>
          <div className="col-sm-4"><strong>{ this.props.currCoy.cubit_code }</strong></div>
        </div>

        <div className="row">
          <div className="col-md-3">sage:</div>
          <div className="col-md-4"><strong>
            {/*{ this.props.currCoy.lnk_coy_name }*/}
            {/*[{ this.props.currCoy.lnk_coy_id }]]*/}
          </strong></div>
        </div>
      </div>
    )
  }
}


export default CCompany;