// Tree

var treeBranch1 = React.createElement('li', null, 'Tree Branch 1');
var treeBranch2 = React.createElement('li', null, 'Tree Branch 2');
var treeBranch3 = React.createElement('li', null, 'Tree Branch 3');
var treeBranch4 = React.createElement('li', null, 'Tree Branch 4');
var tree = React.createElement('ul', {className: 'list-unstyled'}, treeBranch1, treeBranch2, treeBranch3, treeBranch4);
var treeContainer = React.createElement('div', {className: 'col-md-6'}, tree);

// Form

var formTitle = React.createElement('h1', null, 'Hello TreeForm!');
var formContainer = React.createElement('div', {className: 'col-md-6'}, formTitle);


// Render

ReactDOM.render(treeContainer, document.getElementById('tree'));
ReactDOM.render(formContainer, document.getElementById('form'));
