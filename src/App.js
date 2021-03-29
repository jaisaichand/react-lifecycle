import React from 'react';
import './App.css';
import LifecycleHooksClass from './LifecycleHooksCLass';

// import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {
  state = { someval: '', showComp: true }
  clickedToggle() {
    this.setState({ showComp: !this.state.showComp })
  }
  render() {
    return (
      <div className="App bg-black">
        <button onClick={() => { this.clickedToggle() }} >click to create/destroy lifecycle class component</button>
        {
          this.state.showComp == true ? <LifecycleHooksClass someval={this.state.someval} /> : null
        }


      </div>
    );
  }
}

export default App;
