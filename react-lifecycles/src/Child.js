import React, {Component} from 'react';

class Child extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.props.handleClick;
  }

  componentWillMount() {
    console.log('Child ' + this.props.childNum + ' componentWillMount (to be deprecated)')
  }

  componentDidMount() {
    console.log('Child ' + this.props.childNum + ' componentDidMount')
  }

  componentWillUnmount() {
    console.log('Child ' + this.props.childNum + ' componentWillUnmount')
  }

  render() {
    let data;
    if (this.props.data >= 0)
      data = <p>child data: {this.props.data}</p>
    return (
      <span>
        {data}
        <button onClick={this.handleClick}>{this.props.text}</button>
      </span>
    );
  }
}

export default Child;