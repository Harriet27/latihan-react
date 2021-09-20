import React from "react";

class Test3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
    };
    this.textChange = this.textChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  textChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  addToList() {
    this.setState((prevState) => ({
      list: prevState.list.concat(this.state.text),
      text: "",
    }));
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <div>ini test 3</div>
        <input value={this.state.text} onChange={(e) => this.textChange(e)} />
        <button onClick={this.addToList}>
          Add list
        </button>
        <ul>
          {this.state.list.map((x, y) => {
            return (
              <>
                <li key={y}>
                  {x}&nbsp;
                  <button onClick={this.removeItem}>remove</button>
                </li>
              </>
            );
          })}
        </ul>
        <div className='d-flex'>
        <a href='/'>
          <input type='button' value='Back to Home' />
        </a>
      </div>
      </div>
    );
  };
};

export default Test3;
