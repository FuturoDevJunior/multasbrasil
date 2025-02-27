"use strict";
exports.__esModule = true;
exports.ViolationsSkeleton = void 0;
var react_1 = require("react");
exports.ViolationsSkeleton = function () {
    return (react_1["default"].createElement("div", { className: "bg-white rounded-lg shadow-lg p-6 animate-pulse" },
        react_1["default"].createElement("div", { className: "grid grid-cols-3 gap-4 mb-6" }, [1, 2, 3].map(function (i) { return (react_1["default"].createElement("div", { key: i, className: "p-4 bg-gray-50 rounded-lg" },
            react_1["default"].createElement("div", { className: "h-4 w-20 bg-gray-200 rounded mb-2" }),
            react_1["default"].createElement("div", { className: "h-6 w-32 bg-gray-300 rounded" }))); })),
        react_1["default"].createElement("div", { className: "flex items-center mb-4" },
            react_1["default"].createElement("div", { className: "h-6 w-40 bg-gray-200 rounded mr-2" }),
            react_1["default"].createElement("div", { className: "h-6 w-8 bg-gray-100 rounded-full" })),
        react_1["default"].createElement("div", { className: "space-y-4" }, [1, 2].map(function (i) { return (react_1["default"].createElement("div", { key: i, className: "border rounded-lg p-4" },
            react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-4" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "h-4 w-16 bg-gray-200 rounded mb-2" }),
                    react_1["default"].createElement("div", { className: "h-5 w-24 bg-gray-300 rounded" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "h-4 w-16 bg-gray-200 rounded mb-2" }),
                    react_1["default"].createElement("div", { className: "h-5 w-24 bg-gray-300 rounded" })),
                react_1["default"].createElement("div", { className: "col-span-2" },
                    react_1["default"].createElement("div", { className: "h-4 w-16 bg-gray-200 rounded mb-2" }),
                    react_1["default"].createElement("div", { className: "h-5 w-full bg-gray-300 rounded" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "h-4 w-16 bg-gray-200 rounded mb-2" }),
                    react_1["default"].createElement("div", { className: "h-5 w-20 bg-gray-300 rounded" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "h-4 w-16 bg-gray-200 rounded mb-2" }),
                    react_1["default"].createElement("div", { className: "h-5 w-24 bg-gray-300 rounded" }))))); }))));
};
