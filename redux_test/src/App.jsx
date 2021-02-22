import React, {Component} from 'react';
import Count from "./containers/Count";

class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count/>
      </div>
    );
  }
}

export default App;
