class TODOMain extends React.Component {
 constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [],text: ''};
 }
 onChange(e) {
    this.setState({text: e.target.value});
 }
 handleSubmit(e) {
    e.preventDefault();
    let newItem = this.state.items;
    let text = this.state.text;
    newItem.push(text);
    let newText = '';
    this.setState({items: newItem, text: newText});
 }
 render() {
   return (
     <div>
      <div className="title-text">
       <h4>ReactTodoList</h4>
      </div>
      <form onSubmit={this.handleSubmit}>
        <ul>{this.state.items.map((item) => {
          return <li><input className="checkbox" type="checkbox"/><span>{item}</span></li>
        })}
        </ul>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.text}
          placeholder="请输入文字..." />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<TODOMain />, document.getElementById('app'));