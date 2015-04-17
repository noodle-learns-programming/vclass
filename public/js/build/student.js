define(['react'], function(React) {
Student = React.createClass({displayName: "Student",
	render: function () {
		return (
			React.createElement("li", null, 
				React.createElement("h1", null, this.props.data.name)
			)
		);
	}
});
return Student;
});