define(['react', 'build/student'], function(React, Student) {
Room = React.createClass({displayName: "Room",
    getInitialState: function() {
        return {};
    },
    render: function () {
        return (
            React.createElement("ul", {className: "large-block-grid-3 small-block-grid-3"}, 
            this.props.students.map(function(student) {
               return React.createElement(Student, {key: student.id, data: student});
            })
            )
        );
    }
});
return Room;
});