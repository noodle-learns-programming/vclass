define(['react', 'build/student'], function(React, Student) {
Class = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function () {
        return (
            <div>
                <h1>Welcome to vClass</h1>
                <ul>
                {this.props.students.map(function(student) {
                   return <Student key={student.id} data={student}/>;
                })}
                </ul>
            </div>
        );
    }
});
return Class;
});