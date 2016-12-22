import React, {Component} from 'react';
import CCompany from './CCompany';
import superagent from 'superagent';

class Companies extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    // console.log('mounted: ');
    
    superagent
    .get('/api/ccoy')
    .query()
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        alert('err:'+err)
        return;
      }
      // console.log(response.body);
      let results = response.body.result;
      this.setState({
        list: results
      })



    });

  }

  render() {
    const listItems = this.state.list.map((ccoy, i) => {
      return (
        <div key={ i }>< CCompany currCoy={ccoy} /></div>
      )
    });
    return (
      <div className="">
          {listItems}
      </div>
    )
  }
}

export default Companies;