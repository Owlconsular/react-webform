var treeContainer =
<div className="col-md-6">
  <ul className="list-unstyled">
    <li>Tree Branch 1</li>
    <li>Tree Branch 2</li>
    <li>Tree Branch 3</li>
    <li>Tree Branch 4</li>
    <li>Tree Branch 5</li>
  </ul>
</div>;


var formContainer =
<div className="col-md-6">
  <h1>Hello TreeForm!</h1>
</div>;

ReactDOM.render(treeContainer, document.getElementById('tree'));
ReactDOM.render(formContainer, document.getElementById('form'));
