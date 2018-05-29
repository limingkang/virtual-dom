/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VNode = function () {
	function VNode(tag, nodeType, key, props, text, children) {
		_classCallCheck(this, VNode);

		this.tag = tag;
		this.nodeType = nodeType;
		this.key = key;
		this.props = props;
		this.text = text;
		this.children = children;
	}

	_createClass(VNode, [{
		key: 'render',
		value: function render() {
			var el;
			if (this.nodeType === 1) {
				el = document.createElement(this.tag);
				for (var prop in this.props) {
					setAttr(el, prop, this.props[prop]);
				}
				if (this.children) {
					this.children.forEach(function (ch, i) {
						el.appendChild(ch.render());
					});
				}
			} else if (this.nodeType === 3) {
				el = document.createTextNode(this.text);
			} else if (this.nodeType === 8) {
				el = document.createComment(this.text);
			}
			el.key = this.key;
			return el;
		}
	}]);

	return VNode;
}();

exports.default = VNode;


function setAttr(node, key, value) {
	if (key === 'style') {
		for (var val in value) {
			node.style[val] = value[val];
		}
	} else {
		node.setAttribute(key, value);
	}
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSomeTypeNode = isSomeTypeNode;
function isSomeTypeNode(node1, node2) {
    if (node1.nodeType === node2.nodeType) {
        return true;
    } else {
        return false;
    }
}

var TEXT = exports.TEXT = 'TEXT';
var PROP = exports.PROP = 'PROP';
var MOVE = exports.MOVE = 'MOVE';
var INSERT = exports.INSERT = 'INSERT';
var REMOVE = exports.REMOVE = 'REMOVE';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _template = __webpack_require__(3);

var _template2 = _interopRequireDefault(_template);

var _vnode = __webpack_require__(0);

var _vnode2 = _interopRequireDefault(_vnode);

var _diff = __webpack_require__(4);

var _diff2 = _interopRequireDefault(_diff);

var _patch = __webpack_require__(5);

var _patch2 = _interopRequireDefault(_patch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.tomato = {
	VNode: _vnode2.default,
	diff: _diff2.default,
	patch: _patch2.default,
	processTemplate: _template2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = processTemplate;

var _vnode = __webpack_require__(0);

var _vnode2 = _interopRequireDefault(_vnode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processTemplate(nodeId) {
	var root = document.getElementById(nodeId);
	return generateVNode(root);
}

function generateVNode(node) {
	if (node && node.nodeType) {
		var attrObj = null;
		if (node.nodeType === 1) {
			attrObj = {};
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = node.getAttributeNames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var attr = _step.value;

					if (node.getAttribute(attr)) {
						attrObj[attr] = node.getAttribute(attr);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
		var content = node.nodeType === 3 || node.nodeType === 8 ? node.textContent : null;
		if (node.childNodes && node.childNodes.length > 0) {
			var childVNodesList = [];
			for (var i in node.childNodes) {
				var chVNode = generateVNode(node.childNodes[i]);
				if (chVNode) {
					childVNodesList.push(chVNode);
				}
			}
		}

		return new _vnode2.default(node.tagName, node.nodeType, node.key || generateNodeKey(), attrObj, content, childVNodesList);
	} else {
		return null;
	}
}

function generateNodeKey() {
	var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var chars = CHARS,
	    uuid = new Array(36),
	    rnd = 0,
	    r;
	for (var i = 0; i < 36; i++) {
		if (i == 8 || i == 13 || i == 18 || i == 23) {
			uuid[i] = '-';
		} else if (i == 14) {
			uuid[i] = '4';
		} else {
			if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
			r = rnd & 0xf;
			rnd = rnd >> 4;
			uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
		}
	}
	return uuid.join('');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = diff;

var _util = __webpack_require__(1);

var _vnode = __webpack_require__(0);

var _vnode2 = _interopRequireDefault(_vnode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directives = {};

function diff(oldVNode, newVNode) {
    var index = 0;
    directives = {};
    diffVNode(oldVNode, newVNode, directives);
    console.log(directives);
    return directives;
}

function diffVNode(oldVNode, newVNode) {

    if (newVNode && (0, _util.isSomeTypeNode)(oldVNode, newVNode)) {
        if (newVNode.nodeType === 3 || newVNode.nodeType === 8) {
            if (oldVNode.text !== newVNode.text) {
                addDirectives(newVNode.key, { type: _util.TEXT, content: newVNode.text });
            }
        } else if (newVNode.nodeType === 1) {
            if (oldVNode.tag === newVNode.tag && oldVNode.key == newVNode.key) {
                var propPatches = diffProps(oldVNode.props, newVNode.props);
                if (Object.keys(propPatches).length > 0) {
                    addDirectives(newVNode.key, { type: _util.PROP, content: propPatches });
                }
                if (oldVNode.children || newVNode.children) diffChildren(oldVNode.children, newVNode.children, newVNode.key);
            }
        }
    }
    return directives;
}

function diffProps(oldProps, newProps) {
    var patches = {};
    if (oldProps) {
        Object.keys(oldProps).forEach(function (prop) {
            if (prop === 'style' && newProps[prop]) {
                var newStyle = newProps[prop];
                var isSame = true;
                Object.keys(oldProps[prop]).forEach(function (item) {
                    if (prop[item] !== newStyle[item]) {
                        isSame = false;
                    }
                });
                if (isSame) {
                    Object.keys(newStyle).forEach(function (item) {
                        if (!prop.hasOwnProperty(item)) {
                            isSame = false;
                        }
                    });
                }
                if (!isSame) patches[prop] = newProps[prop];
            }
            if (newProps[prop] !== oldProps[prop]) {
                patches[prop] = newProps[prop];
            }
        });
    }
    if (newProps) {
        Object.keys(newProps).forEach(function (prop) {
            if (!oldProps.hasOwnProperty(prop)) {
                patches[prop] = newProps[prop];
            }
        });
    }

    return patches;
}

function diffChildren(oldChildren, newChildren, parentKey) {
    oldChildren = oldChildren || [];
    newChildren = newChildren || [];
    var movedItem = [];
    var oldKeyIndexObject = parseNodeList(oldChildren);
    var newKeyIndexObject = parseNodeList(newChildren);
    for (var key in newKeyIndexObject) {
        if (!oldKeyIndexObject.hasOwnProperty(key)) {
            addDirectives(parentKey, { type: _util.INSERT, index: newKeyIndexObject[key], node: newChildren[newKeyIndexObject[key]] });
        }
    }
    for (var _key in oldKeyIndexObject) {
        if (newKeyIndexObject.hasOwnProperty(_key)) {
            if (oldKeyIndexObject[_key] !== newKeyIndexObject[_key]) {
                var moveObj = { 'oldIndex': oldKeyIndexObject[_key], 'newIndex': newKeyIndexObject[_key] };
                movedItem[newKeyIndexObject[_key]] = oldKeyIndexObject[_key];
            }
            diffVNode(oldChildren[oldKeyIndexObject[_key]], newChildren[newKeyIndexObject[_key]]);
        } else {
            addDirectives(_key, { type: _util.REMOVE, index: oldKeyIndexObject[_key] });
        }
    }
    if (movedItem.length > 0) {
        addDirectives(parentKey, { type: _util.MOVE, moved: movedItem });
    }
}

function parseNodeList(nodeList) {
    var keyIndex = {};
    nodeList.forEach(function (item, i) {
        if (item.key) {
            keyIndex[item.key] = i;
        }
    });
    return keyIndex;
}

function addDirectives(key, obj) {
    directives[key] = directives[key] || [];
    directives[key].push(obj);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = patch;

var _vnode = __webpack_require__(0);

var _vnode2 = _interopRequireDefault(_vnode);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patch(node, directives) {
	if (node) {
		var orderList = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = node.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var child = _step.value;


				patch(child, directives);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		if (directives[node.key]) {
			applyPatch(node, directives[node.key]);
		}
	}
}

function applyPatch(node, directives) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {

		for (var _iterator2 = directives[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var directive = _step2.value;

			switch (directive.type) {
				case _util.TEXT:
					setContent(node, directive.content);
					break;
				case _util.PROP:
					setProps(node, directive.content);
					break;
				case _util.REMOVE:
					removeNode(node);
					break;
				case _util.INSERT:
					insertNode(node, directive.node, directive.index);
				default:
					break;
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}

function setProps(node, props) {
	Object.keys(props).forEach(function (prop, i) {
		if (props[prop]) {
			if (prop === 'style') {
				Object.keys(props[prop]).forEach(function (item, i) {
					node.style[item] = props[prop][item];
				});
			} else {
				node.setAttribute(prop, props[prop]);
			}
		} else node.removeAttribute(prop);
	});
}

function setContent(node, content) {
	node.textContent = content;
}

function removeNode(node) {
	node.parentNode.removeChild(node);
}
function insertNode(parentNode, newNode, index) {
	var newElm = newNode.render();
	if (parentNode.childNodes.length > index) {
		parentNode.insertBefore(newElm, parentNode.childNodes[index]);
	} else {
		parentNode.appendChild(newElm);
	}
}
function reorderChildren(node, directive) {
	var childElm = node.childNodes;
	for (var index in directive.moved) {
		if (directive.moved[index]) {
			if (index < node.childNodes.length) {
				node.insertBefore(node.childNodes[index], node.childNodes[directive.moved[index]]);
			} else {
				node.appendChild(node.childNodes[index]);
			}
		}
	}
}

/***/ })
/******/ ]);