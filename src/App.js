import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import ChatSection from './components/ChatSection/ChatSection.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  changeTab = (val) => {
    this.setState({
      currentTab: val
    })
  }

  render() {
    return (
      <div className="App">
        <Header changeTab={this.changeTab} currentTab={this.state.currentTab}/>
        <div className="tab-0" id={this.state.currentTab !== 0? 'hidden': ''}>
          <ChatSection />
        </div>
      </div>
    );
  }
}

export default App;
