import React, {Component} from 'react';
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
      shouldUpdate: true,
      statusText: ''
    }
    this.incrementData = this.incrementData.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  incrementData() {
    this.setState(prevState => {
      return {data: prevState.data + 1}
    })
  }

  toggleUpdate() {
    this.setState(prevState => {
      return {shouldUpdate: !prevState.shouldUpdate}
    })
  }

  resetData() {
    this.setState({data: 0})
  }

  componentWillMount() {
    console.log('Parent componentWillMount: run before first render of the component')
  }

  componentDidMount() {
    console.log('Parent componentDidMount: run after render of the component')
  }

  shouldComponentUpdate() {
    console.log('Parent shouldComponentUpdate: run after a function calls setState')
    return this.state.shouldUpdate;
  }

  componentWillUnmount() {
    console.log('Parent componentWillUnmount: run when component is unmounted from the DOM')
  }

  render() {
    let willUpdate;
    if (this.state.shouldUpdate) {
      willUpdate = <h2 className='green-update'>Child component will update immediately</h2>
    } else {
      willUpdate = <h2 className='red-update'>Child component will wait to update</h2>
    }
    return (
      <div>
        <h1>React Lifecycles Demo</h1>
        <p>Open console to view lifecycle messages</p><br />
        {willUpdate}
        <Child
          handleClick={this.incrementData}
          text='Increment'
          data={this.state.data}
          childNum='1'
        />
        <Child
          handleClick={this.toggleUpdate}
          text='Toggle Update'
          childNum='2'
        />
        <Child
          handleClick={this.resetData}
          text='Reset Data'
          childNum='3'
        />
      </div>
    );
  }
}

export default Parent;