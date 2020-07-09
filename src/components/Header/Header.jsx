import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    };
  }

  componentDidMount() {
    setInterval(this.checkNetworkStatus, 1000);
  }

  checkNetworkStatus = () => {
    if (navigator.onLine !== this.state.isOnline) {
      this.setNetworkStatus(navigator.onLine);
    }
  };

  setNetworkStatus = val => {
    this.setState({
      isOnline: val
    });
  };

  render() {
    const { changeTab, currentTab } = this.props;
    console.log(navigator.onLine ? "Yes" : "No");
    return (
      <div className="header-body">
        <div className="heading">
          <div className="heading-icon">
            <img src="https://jobs.vahan.co/icon_min.jpg" alt="Job Title" />
          </div>
          <div className="heading-title-body">
            <div className="header-title">Job Finder</div>
          </div>
        </div>
        <div className="no-internet" id={this.state.isOnline ? "hidden" : ""}>
          <div className="no-internet-text">No Internet ☹️</div>
          <button className="retry" onClick={this.checkNetworkStatus}>
            RETRY
          </button>
        </div>
        <div className="menu">
          <button
            className="chat"
            id={currentTab === 0 ? "focus" : ""}
            onClick={() => changeTab(0)}
          >
            CHAT
          </button>
          <button
            className="my-job"
            id={currentTab === 1 ? "focus" : ""}
            onClick={() => changeTab(1)}
          >
            MY JOB
          </button>
          <button
            className="profile"
            id={currentTab === 2 ? "focus" : ""}
            onClick={() => changeTab(2)}
          >
            PROFILE
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
