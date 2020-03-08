import * as React from 'react';

class TabItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default TabItem;
