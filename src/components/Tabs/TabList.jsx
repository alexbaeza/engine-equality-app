import * as React from 'react';
import { Component } from 'react';
import TabButtons from "./TabButtons";
import './TabList.scss'

class TabList extends Component {

  state = {
    activeTab: this.props.children[0].props.id,
    currentCount: 0
  };

  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });

    if (this.state.currentCount > 5) {
      this.setState({
        currentCount: 0
      });
    }
    this.changeTab(this.state.currentCount);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  changeTab = (tabId) => {
    this.setState({ activeTab: tabId });
  };


  render() {
    let content = [];
    let buttons = [];
    return (
      <div className="tabs-container">
        <div className="menu">
          {React.Children.map(this.props.children, (child) => {
            buttons.push({ id: child.props.id, label: child.props.label });
            if (child.props.id === this.state.activeTab.toString()) {
              content = child.props.children
            }
          })}
          <TabButtons activeTab={this.state.activeTab.toString()} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>
        </div>
      </div>
    );
  }
}

export default TabList;
