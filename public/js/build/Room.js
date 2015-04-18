define(['react', 'build/student'], function(React, Student) {
Room = React.createClass({displayName: "Room",
    getInitialState: function() {
        return {};
    },
    render: function () {
        return (
            React.createElement("ul", {className: "small-block-grid-2 medium-block-grid-3 large-block-grid-4"}, 
            this.props.students.map(function(student) {
               return React.createElement(Student, {key: student.id, data: student});
            })
            )
        );
    }
});
return Room;
});