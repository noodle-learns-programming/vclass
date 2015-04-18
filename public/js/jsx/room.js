define(['react', 'build/student'], function(React, Student) {
var Room = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function () {
        return (
            <ul className="large-block-grid-3 small-block-grid-3">
            {this.props.students.map(function(student) {
               return <Student key={student.id} data={student}/>;
            })}
            </ul>
        );
    }
});
return Room;
});