"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var LanguageContext_1 = require("./contexts/LanguageContext");
var Branding_1 = require("./components/Branding");
var useTranslation_1 = require("./hooks/useTranslation");
var useViolations_1 = require("./hooks/useViolations");
var validators_1 = require("./utils/validators");
var ViolationsSkeleton_1 = require("./components/ViolationsSkeleton");
function ViolationsApp() {
    var _this = this;
    var t = useTranslation_1.useTranslation().t;
    var _a = useViolations_1.useViolations(), data = _a.data, loading = _a.loading, error = _a.error, searchViolations = _a.searchViolations;
    var _b = react_1.useState(''), plate = _b[0], setPlate = _b[1];
    var _c = react_1.useState(true), showDisclaimer = _c[0], setShowDisclaimer = _c[1];
    var handleSearch = react_1.useCallback(function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, searchViolations(plate)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [plate, searchViolations]);
    return (react_1["default"].createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 relative overflow-x-hidden", role: "main" },
        showDisclaimer && (react_1["default"].createElement("div", { className: "bg-gradient-to-r from-blue-600/95 to-blue-800/95 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50 shadow-lg animate-fadeIn" },
            react_1["default"].createElement("div", { className: "container mx-auto px-4" },
                react_1["default"].createElement("div", { className: "flex flex-col items-center text-center pr-12 relative" },
                    react_1["default"].createElement("div", { className: "flex items-center justify-center mb-2" },
                        react_1["default"].createElement(lucide_react_1.AlertTriangle, { className: "w-6 h-6 text-yellow-300 mr-2 animate-pulse", "aria-hidden": "true" }),
                        react_1["default"].createElement("p", { className: "text-white font-bold text-lg" }, "Aviso Importante")),
                    react_1["default"].createElement("p", { className: "text-white/90 text-sm md:text-base max-w-2xl" }, "Este \u00E9 um site para fins exclusivamente educacionais. N\u00E3o nos responsabilizamos por qualquer uso indevido das informa\u00E7\u00F5es. Para testes, utilize placas como: \u2022 ABC1234 (Multas Pagas) \u2022 XYZ5678 (Multas Pendentes) \u2022 DEF9012 (Sem Multas) \u2022 GHI3456 (Multas Graves) \u2022 JKL7890 (Multas Leves)"),
                    react_1["default"].createElement("button", { onClick: function () { return setShowDisclaimer(false); }, className: "absolute right-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1.5 hover:bg-white/10 transition-all duration-200", "aria-label": "Fechar aviso" },
                        react_1["default"].createElement("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))))))),
        react_1["default"].createElement("div", { className: "container mx-auto px-4 py-12" },
            react_1["default"].createElement("div", { className: "max-w-4xl mx-auto space-y-8" },
                react_1["default"].createElement("div", { className: "flex flex-col items-center text-center" },
                    react_1["default"].createElement("div", { className: "relative group mb-4" },
                        react_1["default"].createElement(lucide_react_1.Car, { className: "w-16 h-16 text-blue-600 transform transition-all duration-300 group-hover:scale-110", "aria-hidden": "true" }),
                        react_1["default"].createElement("div", { className: "absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300", "aria-hidden": "true" })),
                    react_1["default"].createElement("h1", { className: "text-4xl font-bold text-gray-800 tracking-tight" }, t('title'))),
                react_1["default"].createElement("form", { onSubmit: handleSearch, className: "w-full", "aria-label": t('searchPlaceholder') },
                    react_1["default"].createElement("div", { className: "flex gap-3" },
                        react_1["default"].createElement("div", { className: "relative flex-1" },
                            react_1["default"].createElement("input", { type: "text", value: plate, onChange: function (e) { return setPlate(e.target.value.toUpperCase()); }, placeholder: t('searchPlaceholder'), className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg", maxLength: 7, "aria-label": t('vehicle.plate'), "aria-invalid": error ? 'true' : 'false', disabled: loading }),
                            plate && (react_1["default"].createElement("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium", "aria-live": "polite" },
                                plate.length,
                                "/7"))),
                        react_1["default"].createElement("button", { type: "submit", disabled: loading || plate.length === 0, className: "px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-all duration-200 shadow-sm hover:shadow-md active:scale-95", "aria-busy": loading }, loading ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2", role: "progressbar" }),
                            t('searching'))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(lucide_react_1.Search, { className: "w-5 h-5 mr-2", "aria-hidden": "true" }),
                            t('search')))))),
                loading && react_1["default"].createElement(ViolationsSkeleton_1.ViolationsSkeleton, null),
                error && (react_1["default"].createElement("div", { className: "bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm animate-fadeIn", role: "alert" },
                    react_1["default"].createElement("div", { className: "flex items-center" },
                        react_1["default"].createElement(lucide_react_1.AlertTriangle, { className: "w-5 h-5 text-red-500 mr-2", "aria-hidden": "true" }),
                        react_1["default"].createElement("p", { className: "text-red-700 font-medium" }, error)))),
                data && (react_1["default"].createElement("div", { className: "bg-white rounded-lg shadow-lg p-6 animate-fadeIn hover:shadow-xl transition-shadow duration-300", role: "region", "aria-label": t('violations.title') },
                    react_1["default"].createElement("div", { className: "grid grid-cols-3 gap-4 mb-6" },
                        react_1["default"].createElement("div", { className: "p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" },
                            react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('vehicle.plate')),
                            react_1["default"].createElement("p", { className: "text-lg font-semibold" }, data.placa)),
                        react_1["default"].createElement("div", { className: "p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" },
                            react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('vehicle.chassis')),
                            react_1["default"].createElement("p", { className: "text-lg font-semibold" }, data.chassi)),
                        react_1["default"].createElement("div", { className: "p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" },
                            react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('vehicle.renavam')),
                            react_1["default"].createElement("p", { className: "text-lg font-semibold" }, data.renavam))),
                    react_1["default"].createElement("h2", { className: "text-xl font-semibold mb-4 flex items-center" },
                        t('violations.title'),
                        react_1["default"].createElement("span", { className: "ml-2 px-2 py-0.5 text-sm bg-blue-100 text-blue-700 rounded-full" }, data.multas.length)),
                    react_1["default"].createElement("div", { className: "space-y-4" }, data.multas.map(function (multa, index) { return (react_1["default"].createElement("div", { key: index, className: "border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-blue-200 hover:bg-blue-50" },
                        react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-4" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('violations.agency')),
                                react_1["default"].createElement("p", { className: "font-medium" }, multa.orgao)),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('violations.date')),
                                react_1["default"].createElement("p", { className: "font-medium" }, validators_1.formatViolationDate(multa.data))),
                            react_1["default"].createElement("div", { className: "col-span-2" },
                                react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('violations.description')),
                                react_1["default"].createElement("p", { className: "font-medium" }, multa.descricao)),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('violations.amount')),
                                react_1["default"].createElement("p", { className: "font-medium text-red-600" }, validators_1.formatCurrency(multa.valor))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, t('violations.status')),
                                react_1["default"].createElement("div", { className: "flex items-center" },
                                    react_1["default"].createElement("span", { className: "w-2 h-2 rounded-full mr-2 " + (multa.status.toLowerCase().includes('pago') ? 'bg-green-500' : 'bg-yellow-500'), "aria-hidden": "true" }),
                                    react_1["default"].createElement("p", { className: "font-medium" }, multa.status)))))); })))),
                !data && !error && (react_1["default"].createElement("div", { className: "text-center py-16 text-gray-500", role: "status" },
                    react_1["default"].createElement("div", { className: "relative group inline-block" },
                        react_1["default"].createElement(lucide_react_1.Car, { className: "w-20 h-20 mx-auto mb-6 opacity-20 transform transition-all duration-500 group-hover:scale-110 group-hover:opacity-40", "aria-hidden": "true" }),
                        react_1["default"].createElement("div", { className: "absolute inset-0 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", "aria-hidden": "true" })),
                    react_1["default"].createElement("p", { className: "text-xl transition-colors duration-300 hover:text-gray-700" }, t('searchPlaceholder')))))),
        react_1["default"].createElement(Branding_1.Branding, null)));
}
function App() {
    return (react_1["default"].createElement(LanguageContext_1.LanguageProvider, null,
        react_1["default"].createElement(ViolationsApp, null)));
}
exports["default"] = App;
