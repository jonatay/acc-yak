import React, {Component} from 'react';
import Companies from './Companies';
import CoyDetail from './CoyDetail';


class Home extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-4">
            <Companies></Companies>
          </div>
          <div className="col-sm-8">
            <CoyDetail />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;