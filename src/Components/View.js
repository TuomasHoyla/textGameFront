"use strict";
exports.__esModule = true;
var React = require("react");
var View = function (props) {
    var data = props.data;
    return (React.createElement("div", null,
        React.createElement("p", null, data.location && data.location.room.name),
        React.createElement("p", null, data.location && data.location.room.text),
        React.createElement("p", { className: "App-link underLine" }, data.message)));
};
exports["default"] = View;
