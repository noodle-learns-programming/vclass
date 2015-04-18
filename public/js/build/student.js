define(['react'], function(React) {
var Student = React.createClass({displayName: "Student",
	render: function () {
		return (
			React.createElement("li", null, 
				React.createElement("div", {className: "room-table"}, 
					React.createElement("span", {className: "label"}, this.props.data.name)
				)
			)
		);
	}
});
return Student;
});