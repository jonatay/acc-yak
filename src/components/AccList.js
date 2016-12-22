import React, {Component} from 'react';
import AccDetail from './AccDetail';


class AccList extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {name: 'Sales: Vryheid', type: 'income', key: 1},
        {name: 'Sales: Dundee', type: 'income', key: 2},
        {name: 'Telephone Costs', type: 'expense', key: 3},
        {name: 'Members Loan: JRT', type: 'balance', key: 4},
        {name: 'Vat Control', type: 'control', key: 5}
      ]
    }
  }

  render() {
    const listAccDetail = this.state.list.map((acc, i) => {
      return (
        <div key={ acc.key }><AccDetail currAcc={acc} /></div>
      )
    })
    return (
      <div>
        { listAccDetail }
      </div>
    )
  }

}


export default AccList;