// App组件
import React, {Component} from 'react';
import './App.less'
import {Button} from 'antd'

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}

export default App;
