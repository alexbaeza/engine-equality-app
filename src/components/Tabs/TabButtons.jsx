import React, { Component } from "react";

class TabButtons extends Component {
  render() {
    let { buttons, changeTab, activeTab } = this.props;

    return (
      <div className="tab-buttons">
        {buttons.map(button => {
          return (
            <div className="menu_item">
              <div className={button.id === activeTab ? 'tab-button active' : 'tab-button'}>
                <button className="toggle"
                        onClick={() => changeTab(button.id)}>{button.label}</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TabButtons;
