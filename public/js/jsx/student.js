define(['react'], function(React) {
Student = React.createClass({
	render: function () {
		return (
			<li>
				<h1>{this.props.data.name}</h1>
			</li>
		);
	}
});
return Student;
});