define(['react'], function(React) {
	Student = React.createClass({displayName: "Student",
		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, "Students name")
				)
			);
		}
	});
	return Student;
});