import React from "react";

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedTab;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? "active" : "";

      return (
        <li
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}
        >
          {title}{" "}
        </li>
      );
    });

    return <span className="tab-header">{headers}</span>;
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.chosenTab = this.chosenTab.bind(this);
  }

  chosenTab(index) {
    this.setState({ selectedTab: index });
  }

  render() {
    const pane = this.props.panes[this.state.selectedTab];

    return (
      <div>
        <h1>Tabs</h1>

        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            onTabChosen={this.chosenTab}
            panes={this.props.panes}
          ></Headers>
          <div className="tab-content">
            <article>{pane.content}</article>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
