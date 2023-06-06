import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Simplilearn',
    };
  }
  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         name: 'Simplilearn',
  //       });
  //     }, 5000);
  //   }

  render() {
    console.log('Parent component Rendered');
    return (
      <div>
        I'm the parent
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
