💡"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */
var JoblyApi = /** @class */ (function () {
    function JoblyApi() {
    }
    JoblyApi.request = function (endpoint_1) {
        return __awaiter(this, arguments, void 0, function (endpoint, data, method) {
            var url, headers, params, err_1, message;
            if (data === void 0) { data = {}; }
            if (method === void 0) { method = "get"; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug("API Call:", endpoint, data, method);
                        url = "".concat(BASE_URL, "/").concat(endpoint);
                        headers = { Authorization: "Bearer ".concat(JoblyApi.token) };
                        params = (method === "get")
                            ? data
                            : {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, axios_1.default)({ url: url, method: method, data: data, params: params, headers: headers })];
                    case 2: return [2 /*return*/, (_a.sent()).data];
                    case 3:
                        err_1 = _a.sent();
                        if (err_1 instanceof axios_1.AxiosError && err_1.response) {
                            console.error("API Error:", err_1.response);
                            message = err_1.response.data.error.message;
                            throw Array.isArray(message) ? message : [message];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Individual API routes
    /************** COMPANIES **************/
    /** Get details on all companies */
    JoblyApi.getCompanies = function () {
        return __awaiter(this, arguments, void 0, function (qParam) {
            var url, isFirst, _i, _a, _b, key, value, res;
            if (qParam === void 0) { qParam = {}; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "companies/";
                        isFirst = true;
                        // if qParam is not empty, append it to the url
                        for (_i = 0, _a = Object.entries(qParam); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            if (value && isFirst) {
                                url += "?".concat(key, "=").concat(value);
                                isFirst = false;
                            }
                            else if (value) {
                                url += "&".concat(key, "=").concat(value);
                            }
                        }
                        return [4 /*yield*/, this.request(url)];
                    case 1:
                        res = _c.sent();
                        console.log("RES HERE", res);
                        return [2 /*return*/, res.companies];
                }
            });
        });
    };
    /** Get details on a company by handle. */
    JoblyApi.getCompany = function (handle) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("companies/".concat(handle))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.company];
                }
            });
        });
    };
    /****************** JOBS ******************/
    JoblyApi.getJobs = function () {
        return __awaiter(this, arguments, void 0, function (qParam) {
            var url, isFirst, _i, _a, _b, key, value, res;
            if (qParam === void 0) { qParam = {}; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "jobs/";
                        isFirst = true;
                        // if qParam is not empty, append it to the url
                        for (_i = 0, _a = Object.entries(qParam); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            if (value && isFirst) {
                                url += "?".concat(key, "=").concat(value);
                                isFirst = false;
                            }
                            else if (value) {
                                url += "&".concat(key, "=").concat(value);
                            }
                        }
                        return [4 /*yield*/, this.request(url)];
                    case 1:
                        res = _c.sent();
                        return [2 /*return*/, res.jobs];
                }
            });
        });
    };
    JoblyApi.getJob = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("jobs/".concat(id))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.job];
                }
            });
        });
    };
    /*************** USER ***************/
    // for user to register themselves
    JoblyApi.register = function (newUser) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("auth/register", __assign({}, newUser), "post")];
                    case 1:
                        res = _a.sent();
                        this.token = res.token;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    // for user to login
    JoblyApi.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("auth/token", { username: username, password: password }, "post")];
                    case 1:
                        res = _a.sent();
                        console.log("inside api.ts,", res);
                        this.token = res.token;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    JoblyApi.getUser = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("users/".concat(username))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.user];
                }
            });
        });
    };
    JoblyApi.updateUser = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var res;
            var username = _b.username, firstName = _b.firstName, lastName = _b.lastName, email = _b.email;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.request("users/".concat(username), { firstName: firstName, lastName: lastName, email: email }, "patch")];
                    case 1:
                        res = _c.sent();
                        return [2 /*return*/, res.user];
                }
            });
        });
    };
    JoblyApi.applyToJob = function (username, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("users/".concat(username, "/jobs/").concat(jobId), {}, "post")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    return JoblyApi;
}());
exports.default = JoblyApi;
