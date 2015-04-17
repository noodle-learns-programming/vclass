define(['react', 'build/student'], function(React, Student) {
Class = React.createClass({displayName: "Class",
    getInitialState: function() {
        return {};
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Welcome to vClass"), 
                React.createElement("ul", null, 
                this.props.students.map(function(student) {
                   return React.createElement(Student, {key: student.id, data: student});
                })
                )
            )
        );
    }
});
return Class;
});