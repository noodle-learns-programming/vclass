define(['react', 'build/class'], function(React, Class) {

var students = [{
    'id'    : 1,
    'name'  : 'TPPHU'
},{
    'id'    : 2,
    'name'  : 'MPYEN'
}];

var Layout    = React.createClass({displayName: "Layout",
    render: function () {
        return (
            React.createElement(Class, {students: students})
        );
    }
});
return Layout;

});