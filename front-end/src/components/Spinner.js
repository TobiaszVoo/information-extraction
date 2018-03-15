import React, {Component} from 'react';
import { BounceLoading } from 'respinner';

export default class Spinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.showSpinner ?
      <div className="spinner"> {
        <div className="spinner-wrapper">
          <h2>processing</h2>
          <div className="spinners">
            <BounceLoading fill="#00ae84" count={6}/>
          </div>
        </div>
      }
      </div>
    : null
  );
}
}
