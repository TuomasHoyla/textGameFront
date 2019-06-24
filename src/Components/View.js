"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const View = (props) => {
    const { data } = props;
    return (React.createElement("div", null,
        React.createElement("p", null, data.location && data.location.name),
        React.createElement("p", null, data.location && data.location.text),
        React.createElement("p", { className: "App-link underLine" }, data.message)));
};
exports.default = View;
