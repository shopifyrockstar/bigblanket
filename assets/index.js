var country_code = $(".go-cart-drawer").data("countrycode");
    (function (global) {
      try {
        var ls = global.localStorage
        var scrollPos = ls.getItem('slater-scroll')

        if (scrollPos) global.scrollTo(0, scrollPos)
  
        const socketio = document.createElement('script')
        socketio.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.slim.js'
        socketio.onload = function init () {
          var disconnected = false
          var socket = io('https://localhost:4000', {
            reconnectionAttempts: 1
          })
          socket.on('connect', function connect () {
            console.log('slater connected')
          })
          socket.on('refresh', function refresh () {
            ls.setItem('slater-scroll', global.scrollY)
            global.location.reload()
          })
          socket.on('disconnect', function disconnect () {
            disconnected = true
          })
          socket.on('reconnect_failed', function reconnectFailed (e) {
            if (disconnected) return
            console.group("slater - %cconnection to server at 4000 failed", "color: red")
            console.info("try visiting https://localhost:4000 and creating a security exception")
            console.log("for more info see https://github.com/the-couch/slater#live-reloading--https")
            console.groupEnd()
          })
        }
        document.head.appendChild(socketio)
      } catch (e) {}
    })(this);
  
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../usr/local/lib/node_modules/slater/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/scripts/cart-upsell/cart-upsell.js":
/*!************************************************!*\
  !*** ./src/scripts/cart-upsell/cart-upsell.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cart_upsell_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-upsell.scss */ "./src/scripts/cart-upsell/cart-upsell.scss");
/* harmony import */ var _cart_upsell_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cart_upsell_scss__WEBPACK_IMPORTED_MODULE_4__);






var CartUpsell = /*#__PURE__*/function () {
  function CartUpsell(goCart) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CartUpsell);

    this.goCart = goCart;
    this.productAdded = false;
    this.variantHandle = null;
    this.refreshIntervalId = null;
    this.cartOverlay = document.querySelector(".go-cart__overlay");
    this.cartFooter = document.querySelector(".go-cart-drawer__footer");
    this.setMutationObserverForCart();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CartUpsell, [{
    key: "checkIfUpsellProductIsInCart",
    value: function () {
      var _checkIfUpsellProductIsInCart = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, cartData, item_handles, discounted_handles, items, i, uniqueItems, _loop, j, intersection;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                console.log(country_code);
                if ( country_code == 'MX' ){
                  return fetch("/es-mx/cart.js");
                }else{
                  return fetch("/cart.js");
                }
                

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                cartData = _context2.sent;
                item_handles = [];
                discounted_handles = [];
                items = cartData.items;
                items.sort(function (a, b) {
                  return parseFloat(b.price) - parseFloat(a.price);
                });

                for (i = 0; i < items.length; i++) {
                  item_handles.push(items[i].handle);
                }

                uniqueItems = Array.from(new Set(item_handles));

                if (!uniqueItems.length) {
                  _context2.next = 20;
                  break;
                }

                _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop(j) {
                  var product, productData, tags, _i;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return fetch("/products/".concat(uniqueItems[j], ".js"));

                        case 2:
                          product = _context.sent;
                          _context.next = 5;
                          return product.json();

                        case 5:
                          productData = _context.sent;
                          tags = productData.tags;

                          if (tags.length) {
                            for (_i = 0; _i < tags.length; _i++) {
                              if (tags[_i].includes("discount")) {
                                (function () {
                                  var tags_special = tags[_i].split("/");

                                  var handle = tags_special[1];
                                  var sameItem = false;
                                  var sameVariantArr = [];
                                  items.forEach(function (item) {
                                    if (item.quantity == 1 && uniqueItems[j] == handle) {
                                      sameVariantArr.push(item);

                                      if (sameVariantArr.length) {
                                        sameItem = true;
                                      }
                                    }
                                  });
                                  discounted_handles = [];

                                  if (!sameItem || sameVariantArr.length > 1) {
                                    discounted_handles.push(handle);
                                  }
                                })();
                              }
                            }
                          }

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                j = 0;

              case 15:
                if (!(j < uniqueItems.length)) {
                  _context2.next = 20;
                  break;
                }

                return _context2.delegateYield(_loop(j), "t0", 17);

              case 17:
                j++;
                _context2.next = 15;
                break;

              case 20:
                intersection = item_handles.filter(function (element) {
                  return discounted_handles.includes(element);
                });
                return _context2.abrupt("return", intersection.length);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      function checkIfUpsellProductIsInCart() {
        return _checkIfUpsellProductIsInCart.apply(this, arguments);
      }

      return checkIfUpsellProductIsInCart;
    }()
  }, {
    key: "listenForRemoveAction",
    value: function listenForRemoveAction() {
      var _this = this;

      var removeButtons = document.querySelectorAll(".go-cart-item__remove");
      removeButtons.forEach(function (button) {
//         console.log(button);
        button.addEventListener("click", function (event) {
          event.preventDefault();
          setTimeout(function () {
            _this.listenForCartMutation();
          }, 800);
        });
      });
    }
  }, {
    key: "setMutationObserverForCart",
    value: function setMutationObserverForCart() {
      var mutationObserver = new MutationObserver(this.listenForCartMutation.bind(this));
      mutationObserver.observe(this.cartOverlay, {
        attributes: true
      });
    }
  }, {
    key: "listenForCartMutation",
    value: function listenForCartMutation(mutationsList, observer) {
      var _this2 = this;

      this.listenForRemoveAction();
      var opened = this.isCartOpened(this.cartOverlay);
      var rootEl = this.generateRootElement();
      this.addRootElToCart(rootEl);
      
      if ( !$('.header__top-wrapper').hasClass("not-slider") ){
        $('.header__top-wrapper').slick('unslick');      
      }
      

      if (opened) {  //function for ajax cart opened

        if ( !$('.header__top-wrapper').hasClass("not-slider") ){
          $(".header__top-wrapper").slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            vertical: true,
            useTransform: true,
            verticalSwiping: true,
            autoplay: false
          })
          $(".header__top-wrapper").slick("slickGoTo", 0);
        }
        this.getDiscountedProduct(function (product, discount) {
          _this2.generateProductForm(product, discount, rootEl);

          _this2.setEventListenerForAddToCartButtons();
        });
      } else {  //function for ajax cart closed
        this.refreshIntervalId ? clearInterval(this.refreshIntervalId) : null;
        rootEl.remove();
        
        if ( !$('.header__top-wrapper').hasClass("not-slider") ){
          $(".header__top-wrapper").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            vertical: true,
            useTransform: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 4000
          })
        }
      
      }
    }
  }, {
    key: "setEventListenerForAddToCartButtons",
    value: function setEventListenerForAddToCartButtons() {
      var _this3 = this;

      this.goCart.addToCart = document.querySelectorAll(".js-go-cart-add-to-cart");
      this.goCart.addToCart.forEach(function (item) {
        item.addEventListener("click", function (event) {
          event.preventDefault();
          var formID = item.parentNode.getAttribute("id");

          _this3.goCart.addItemToCart(formID);
        });
      });
    }
  }, {
    key: "isCartOpened",
    value: function isCartOpened(cart) {
      var opened = cart.classList.contains("is-open");
      return opened;
    }
  }, {
    key: "isInHandlesArray",
    value: function isInHandlesArray(handle, item_handles, discounted_handles) {
      return discounted_handles.includes(handle);
    }
  }, {
    key: "generateRootElement",
    value: function generateRootElement() {
      var previousRoot = document.querySelector(".cart-upsell");
      previousRoot ? previousRoot.remove() : null;
      var root = document.createElement("div");
      root.classList.add("cart-upsell");
      return root;
    }
  }, {
    key: "addRootElToCart",
    value: function addRootElToCart(rootEl) {
      this.cartFooter.prepend(rootEl);
    }
  }, {
    key: "getDiscountedProduct",
    value: function getDiscountedProduct(callback) {
      var _this4 = this;

      if ( country_code == 'MX' ){
        var cartContents = fetch("/es-mx/cart.js").then(function (response) {
          return response.json();          
        }).then(function (data) {
          var item_handles = [];
          var items = data.items;
          items.sort(function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
          });

          for (var i = 0; i < items.length; i++) {
            item_handles.push(items[i].handle);
          }

          var uniqueItems = Array.from(new Set(item_handles));
          return uniqueItems;
        }).then(function (item_handles) {
          if (item_handles.length) {
            (function () {
              var discounted_handles = [];
              var isFormExists = false;

              for (var j = 0; j < item_handles.length; j++) {
                var products = fetch("/products/".concat(item_handles[j], ".js")).then(function (response) {
                  return response.json();
                }).then( /*#__PURE__*/function () {
                  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(product) {
                    var tags, i, _ret;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            tags = product.tags;

                            if (!tags.length) {
                              _context4.next = 12;
                              break;
                            }

                            i = 0;

                          case 3:
                            if (!(i < tags.length)) {
                              _context4.next = 12;
                              break;
                            }

                            if (!tags[i].includes("discount")) {
                              _context4.next = 9;
                              break;
                            }

                            return _context4.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                              var tags_special, discount, handle, discount_percent, shouldntParse, isUpsellUsed;
                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      tags_special = tags[i].split("/");
                                      discount = tags_special[0];
                                      handle = tags_special[1];
                                      discount_percent = tags_special[2];
                                      shouldntParse = _this4.isInHandlesArray(handle, item_handles, discounted_handles);
                                      //                                     console.log(handle, item_handles, discounted_handles, shouldntParse);
                                      discounted_handles.push(handle);

                                      if (shouldntParse) {
                                        _this4.variantHandle = handle;
                                        _this4.productAdded = true;
                                        _this4.refreshIntervalId = setInterval(function () {
                                          var elems = document.querySelectorAll(".go-cart-item__title");
                                          var arr = [];

                                          for (var _i2 = 0; _i2 < elems.length; _i2++) {
                                            var pathArr = elems[_i2].pathname.split("/");

                                            arr.push(pathArr[2]);
                                          }

                                          var isProductStillInCart = arr.includes(handle);

                                          if (!isProductStillInCart) {
                                            _this4.refreshIntervalId ? clearInterval(_this4.refreshIntervalId) : null;
                                            _this4.productAdded = false;
                                            _this4.variantHandle = null;

                                            _this4.listenForCartMutation();
                                          }
                                        }, 200);
                                      }

                                      if (!(shouldntParse && !_this4.productAdded)) {
                                        _context3.next = 10;
                                        break;
                                      }

                                      return _context3.abrupt("return", "break");

                                    case 10:
                                      _context3.next = 12;
                                      return _this4.checkIfUpsellProductIsInCart();

                                    case 12:
                                      isUpsellUsed = _context3.sent;

                                      if (!isFormExists && !_this4.productAdded && !isUpsellUsed) {
                                        fetch("/products/".concat(handle, ".js")).then(function (response) {
                                          return response.json();
                                        }).then(function (discounted_product) {
                                          callback(discounted_product, discount_percent);
                                        });
                                      }

                                      isFormExists = true;

                                    case 15:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee2);
                            })(), "t0", 6);

                          case 6:
                            _ret = _context4.t0;

                            if (!(_ret === "break")) {
                              _context4.next = 9;
                              break;
                            }

                            return _context4.abrupt("break", 12);

                          case 9:
                            i++;
                            _context4.next = 3;
                            break;

                          case 12:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }
            })();
          }
        });
      }else{
        var cartContents = fetch("/cart.js").then(function (response) {
          return response.json();
        }).then(function (data) {
          var item_handles = [];
          var items = data.items;
          items.sort(function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
          });

          for (var i = 0; i < items.length; i++) {
            item_handles.push(items[i].handle);
          }

          var uniqueItems = Array.from(new Set(item_handles));
          return uniqueItems;
        }).then(function (item_handles) {
          if (item_handles.length) {
            (function () {
              var discounted_handles = [];
              var isFormExists = false;

              for (var j = 0; j < item_handles.length; j++) {
                var products = fetch("/products/".concat(item_handles[j], ".js")).then(function (response) {
                  return response.json();
                }).then( /*#__PURE__*/function () {
                  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(product) {
                    var tags, i, _ret;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            tags = product.tags;

                            if (!tags.length) {
                              _context4.next = 12;
                              break;
                            }

                            i = 0;

                          case 3:
                            if (!(i < tags.length)) {
                              _context4.next = 12;
                              break;
                            }

                            if (!tags[i].includes("discount")) {
                              _context4.next = 9;
                              break;
                            }

                            return _context4.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                              var tags_special, discount, handle, discount_percent, shouldntParse, isUpsellUsed;
                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      tags_special = tags[i].split("/");
                                      discount = tags_special[0];
                                      handle = tags_special[1];
                                      discount_percent = tags_special[2];
                                      shouldntParse = _this4.isInHandlesArray(handle, item_handles, discounted_handles);
                                      //                                     console.log(handle, item_handles, discounted_handles, shouldntParse);
                                      discounted_handles.push(handle);

                                      if (shouldntParse) {
                                        _this4.variantHandle = handle;
                                        _this4.productAdded = true;
                                        _this4.refreshIntervalId = setInterval(function () {
                                          var elems = document.querySelectorAll(".go-cart-item__title");
                                          var arr = [];

                                          for (var _i2 = 0; _i2 < elems.length; _i2++) {
                                            var pathArr = elems[_i2].pathname.split("/");

                                            arr.push(pathArr[2]);
                                          }

                                          var isProductStillInCart = arr.includes(handle);

                                          if (!isProductStillInCart) {
                                            _this4.refreshIntervalId ? clearInterval(_this4.refreshIntervalId) : null;
                                            _this4.productAdded = false;
                                            _this4.variantHandle = null;

                                            _this4.listenForCartMutation();
                                          }
                                        }, 200);
                                      }

                                      if (!(shouldntParse && !_this4.productAdded)) {
                                        _context3.next = 10;
                                        break;
                                      }

                                      return _context3.abrupt("return", "break");

                                    case 10:
                                      _context3.next = 12;
                                      return _this4.checkIfUpsellProductIsInCart();

                                    case 12:
                                      isUpsellUsed = _context3.sent;

                                      if (!isFormExists && !_this4.productAdded && !isUpsellUsed) {
                                        fetch("/products/".concat(handle, ".js")).then(function (response) {
                                          return response.json();
                                        }).then(function (discounted_product) {
                                          callback(discounted_product, discount_percent);
                                        });
                                      }

                                      isFormExists = true;

                                    case 15:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee2);
                            })(), "t0", 6);

                          case 6:
                            _ret = _context4.t0;

                            if (!(_ret === "break")) {
                              _context4.next = 9;
                              break;
                            }

                            return _context4.abrupt("break", 12);

                          case 9:
                            i++;
                            _context4.next = 3;
                            break;

                          case 12:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }
            })();
          }
        });
      }
      
    }
  }, {
    key: "generateProductForm",
    value: function generateProductForm(product, discount, rootEl) {
      var variantWeight;
      var form = "\n    <form action=\"/cart/add\" method=\"post\" class=\"cart-upsell__form\" enctype=\"multipart/form-data\" \n    id=\"add-to-cart-".concat(product.handle, "\">\n    <div class=\"form__header\">\n    Add-on the ").concat(product.title.split(' ').slice(0,3).join(' '), " for a special price!\n    </div>\n\n    <div class=\"cart-upsell__product\"> \n\n    <div class=\"cart-upsell__imgs\">\n    ").concat(product.variants.map(function (variant) {
        if (variant.available) {
          return "<div class=\"cart-upsell__img-item\" id=\"".concat(variant.id, "\" data-varimg=\"").concat(variant.title, "\">\n        <img src=\"").concat(variant.featured_image.src, "\" alt=\"").concat(variant.title, "\" />\n        </div>");
        }
      }), "\n    </div>\n    <div class=\"cart-upsell__desc\">\n    <div class=\"cart-upsell__title\">\n    ").concat(product.title.split(' ').slice(0,2).join(' '), "\n    </div>\n\n    <div class=\"cart-upsell__variants\">\n    <div class=\"cart-upsell__variants-box cart-upsell__variants-box--color\">\n    <div class=\"cart-upsell__variant-title\">\n    <span>Color: </span>\n    ").concat(product.variants.map(function (variant) {
        if (variant.available) {
          return "<div class=\"cart-upsell__variant-title-item ".concat(variant.option1.split(" ").join("_"), " ").concat(variant.option2 ? variant.option2.split(" ").join("") : "", " \" data-variantcolor=\"").concat(variant.option1, "\" data-variantwegight=\"").concat(variant.option2 ? variant.option2 : "", "\">\n          ").concat(variant.option1, "\n          </div>\n          ");
        }
      }), "\n    </div>\n    <div class=\"cart-upsell__variant-grid\">\n\n    ").concat(product.variants.map(function (variant) {
        if (variant.available) {
          if (variant.option2) {
            variantWeight = variant.option2;
          }

          return "<div class=\"cart-upsell__variant-grid-item ".concat(variant.option1.split(" ").join("_"), " ").concat(variant.option2 ? variant.option2.split(" ").join("") : "", " \" data-variantcolor=\"").concat(variant.option1, "\" data-variantwegight=\"").concat(variant.option2 ? variant.option2 : "", "\" style=\"background-image: url(").concat(variant.featured_image.src, ")\">\n          </div>\n          ");
        }
      }), "\n    </div>\n    </div>\n\n    ").concat(variantWeight ? product.options.map(function (opt) {
        if (opt.name == "Weight") {
          return "\n          <div class=\"cart-upsell__variants-box cart-upsell__variants-box--weight\"> \n          <div class=\"cart-upsell__variant-title\">\n          <span>Weight: </span>\n          ".concat(opt.values.map(function (val) {
            return "\n            <div class=\"cart-upsell__variant-title-item ".concat(val.split(" ").join("_"), " \">\n              ").concat(val, "\n              </div>\n\n              ");
          }), "\n          </div>\n\n          <div class=\"cart-upsell__variant-grid\">\n          ").concat(opt.values.map(function (val) {
            return "\n            <div class=\"cart-upsell__variant-grid-item ".concat(val, " \" >\n            ").concat(val, "\n            </div>\n\n            ");
          }), "\n          </div>\n\n\n          </div>\n\n          ");
        }
      }) : "", "\n\n\n\n    </div>\n\n    <div class=\"variants-price\">\n\n    ").concat(product.variants.map(function (variant) {
        if (variant.available) {
          return "<div class=\"variants-price__item \" data-pricecur=\"".concat(variant.title, "\" >\n        <s class=\"variants-price__item-part variants-price__item-part--old\">\n        ").concat((variant.price / 100).toFixed(2), "\n        </s>\n        <div class=\"variants-price__item-part variants-price__item-part--discount\">\n        ").concat(((variant.price - discount * 100) / 100).toFixed(2), "\n        </div>\n        </div>\n        ");
        }
      }), " \n    </div>\n\n    </div>\n\n    </div>\n\n    <select name=\"id\" id=\"ProductSelect-").concat(product.id, "\" class=\"product-single__variants11 hidden\">\n    ").concat(product.variants.map(function (variant) {
        if (variant.available) {
          return "<option data-sku=".concat(variant.sku, " value=\"").concat(variant.id, "\">").concat(variant.title, " - ").concat(variant.price, "</option>");
        }
      }), "\n    </select>  \n    <button  \n    type=\"submit\" \n    name=\"add\" \n    data-add-to-cart\n    class=\"cart-upsell__btn js-go-cart-add-to-cart\"\n    >\n    <span class=\"upsell-title\">add</span>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z\"/><path d=\"M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z\"/></svg>\n    </button>\n    </form>\n    ");
      var form_node = document.createElement("div");
      form_node.innerHTML = form;
      rootEl.append(form_node);
      var curColor;
      var curWeight;
      var newcurWeight;
      var curVariant;
      
      Array.from(document.querySelectorAll(".cart-upsell__variant-grid")).map(function (el) {
        el.querySelector(".cart-upsell__variant-grid-item").classList.add("active");
      });
      Array.from(document.querySelectorAll(".cart-upsell__imgs")).map(function (el) {
        el.querySelector(".cart-upsell__img-item").classList.add("active");
      });
      Array.from(document.querySelectorAll(".variants-price")).map(function (el) {
        el.querySelector(".variants-price__item").classList.add("active");
      });
      Array.from(document.querySelectorAll(".cart-upsell__variant-grid")).map(function (el) {
        Array.from(el.querySelectorAll(".cart-upsell__variant-grid-item")).forEach(function (item) {
          item.addEventListener("click", function () {
            Array.from(el.querySelectorAll(".cart-upsell__variant-grid-item")).forEach(function (el) {
              el.classList.remove("active");
            });
            item.classList.add("active");
          });
        });
      });
      Array.from(document.querySelectorAll(".cart-upsell__variant-grid")).map(function (el) {
        Array.from(el.querySelectorAll(".cart-upsell__variant-grid-item")).forEach(function (item) {
          item.addEventListener("click", function () {
            Array.from(el.querySelectorAll(".cart-upsell__variant-grid-item")).forEach(function (el) {
              el.classList.remove("active");
            });
            item.classList.add("active");
          });
        });
      });
      
      $(".variants-price__item").each(function(){
//         var country_code = $(".go-cart-drawer").data("countrycode"); 
        console.log(country_code);
        if ( country_code == 'ES' || country_code == 'FR' || country_code == 'IT' ){          
          $(this).find(".variants-price__item-part--old").addClass("euro-symbol");
          $(this).find(".variants-price__item-part--discount").addClass("euro-symbol");
//           $(this).find(".variants-price__item-part--old").text($(this).find(".variants-price__item-part--old").text().replace(/\./g, ','));          
//           $(this).find(".variants-price__item-part--discount").text($(this).find(".variants-price__item-part--discount").text().replace(/\./g, ','));          
        }
        
        if ( country_code == 'DE' ){
          $(".variants-price__item .variants-price__item-part--old").addClass("euro-symbol after");
          $(".variants-price__item .variants-price__item-part--discount").addClass("euro-symbol after");                    
        }
        
        if ( country_code == 'NL' || country_code == 'AT' ){
          $(".variants-price__item .variants-price__item-part--old").addClass("euro-symbol");
          $(".variants-price__item .variants-price__item-part--discount").addClass("euro-symbol");
          $(this).find(".variants-price__item-part--old").text($(this).find(".variants-price__item-part--old").text().replace(/\./g, ','));          
          $(this).find(".variants-price__item-part--discount").text($(this).find(".variants-price__item-part--discount").text().replace(/\./g, ','));
        }
        
        if ( country_code == 'GB' ){
          $(".variants-price__item .variants-price__item-part--old").addClass("uk-symbol");
          $(".variants-price__item .variants-price__item-part--discount").addClass("uk-symbol");                    
        }
      })      
      
      Array.from(document.querySelectorAll(".cart-upsell__variants-box--color .cart-upsell__variant-grid")).map(function (el) {
        Array.from(el.querySelectorAll(".cart-upsell__variant-grid-item")).forEach(function (item) {
          item.addEventListener("click", function () {
            curColor = item.dataset.variantcolor;

            if (document.querySelector(".cart-upsell__variants-box--weight")) {
              curWeight = document.querySelector(".cart-upsell__variants-box--weight .cart-upsell__variant-grid .cart-upsell__variant-grid-item.active").innerHTML;
              newcurWeight = curWeight.trim();
              curVariant = "".concat(curColor, " / ").concat(newcurWeight);
            } else {
              curVariant = "".concat(curColor);
            }

            Array.from(document.querySelectorAll(".cart-upsell__imgs")).map(function (el) {
              Array.from(el.querySelectorAll(".cart-upsell__img-item")).forEach(function (item) {
                item.classList.remove("active");

                if (item.dataset.varimg == curVariant) {
                  item.classList.add("active");
                }
              });
            });
            Array.from(document.querySelectorAll(".variants-price")).map(function (el) {
              Array.from(el.querySelectorAll(".variants-price__item")).forEach(function (item) {
                item.classList.remove("active");

                if (item.dataset.pricecur == curVariant) {
                  item.classList.add("active");
                }
              });
            });
            document.querySelector(".cart-upsell__variants-box--color .cart-upsell__variant-title-item").innerHTML = curColor;
            var select1 = document.querySelector(".product-single__variants11").getElementsByTagName("option");

            for (var i = 0; i < select1.length; i++) {
              if (select1[i].textContent.includes(curVariant)) select1[i].selected = true;
            }
          });
        });
      });

      if (document.querySelector(".cart-upsell__variants-box--weight")) {
        Array.from(document.querySelectorAll(".cart-upsell__variants-box--weight .cart-upsell__variant-grid")).map(function (el) {
          Array.from(el.querySelectorAll(".cart-upsell__variant-grid-item")).forEach(function (item) {
            item.addEventListener("click", function () {
              curColor = document.querySelector(".cart-upsell__variants-box--color .cart-upsell__variant-grid .cart-upsell__variant-grid-item.active").dataset.variantcolor;
              curWeight = document.querySelector(".cart-upsell__variants-box--weight .cart-upsell__variant-grid .cart-upsell__variant-grid-item.active").innerHTML;
              newcurWeight = curWeight.trim();
              curVariant = "".concat(curColor, " / ").concat(newcurWeight);
              Array.from(document.querySelectorAll(".variants-price")).map(function (el) {
                Array.from(el.querySelectorAll(".variants-price__item")).forEach(function (item) {
                  item.classList.remove("active");

                  if (item.dataset.pricecur == curVariant) {
                    item.classList.add("active");
                  }
                });
              });
              document.querySelector(".cart-upsell__variants-box--weight .cart-upsell__variant-title-item").innerHTML = curWeight;
              var select = document.querySelector(".product-single__variants11").getElementsByTagName("option");

              for (var i = 0; i < select.length; i++) {
                if (select[i].textContent.includes(curVariant)) select[i].selected = true;
              }
            });
          });
        });
      }

      return form_node;
    }
  }]);

  return CartUpsell;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartUpsell);

/***/ }),

/***/ "./src/scripts/cart-upsell/cart-upsell.scss":
/*!**************************************************!*\
  !*** ./src/scripts/cart-upsell/cart-upsell.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scripts/go-cart/go-cart.js":
/*!****************************************!*\
  !*** ./src/scripts/go-cart/go-cart.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/*!
 * 
 *   @bornfight/gocart v1.0.6
 *   
 * 
 *   Copyright (c) Bornfight (https://www.bornfight.com/)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function (t, e) {
  "object" === ( false ? undefined : _typeof3(exports)) && "object" === ( false ? undefined : _typeof3(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function __webpack_require__(r) {
      if (e[r]) return e[r].exports;
      var a = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(a.exports, a, a.exports, __webpack_require__), a.l = !0, a.exports;
    }

    return __webpack_require__.m = t, __webpack_require__.c = e, __webpack_require__.d = function (t, e, r) {
      __webpack_require__.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, __webpack_require__.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, __webpack_require__.t = function (t, e) {
      if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
      if (4 & e && "object" === _typeof3(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (__webpack_require__.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var a in t) {
        __webpack_require__.d(r, a, function (e) {
          return t[e];
        }.bind(null, a));
      }
      return r;
    }, __webpack_require__.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return __webpack_require__.d(e, "a", e), e;
    }, __webpack_require__.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
  }([function (t, e, r) {
    var a = r(3),
        n = /^(?:submit|button|image|reset|file)$/i,
        o = /^(?:input|select|textarea|keygen)/i,
        i = /(\[[^\[\]]*\])/g;

    function hash_serializer(t, e, r) {
      if (e.match(i)) {
        !function hash_assign(t, e, r) {
          if (0 === e.length) return t = r;
          var a = e.shift(),
              n = a.match(/^\[(.+?)\]$/);
          if ("[]" === a) return t = t || [], Array.isArray(t) ? t.push(hash_assign(null, e, r)) : (t._values = t._values || [], t._values.push(hash_assign(null, e, r))), t;

          if (n) {
            var o = n[1],
                i = +o;
            isNaN(i) ? (t = t || {})[o] = hash_assign(t[o], e, r) : (t = t || [])[i] = hash_assign(t[i], e, r);
          } else t[a] = hash_assign(t[a], e, r);

          return t;
        }(t, function (t) {
          var e = [],
              r = new RegExp(i),
              a = /^([^\[\]]*)/.exec(t);

          for (a[1] && e.push(a[1]); null !== (a = r.exec(t));) {
            e.push(a[1]);
          }

          return e;
        }(e), r);
      } else {
        var a = t[e];
        a ? (Array.isArray(a) || (t[e] = [a]), t[e].push(r)) : t[e] = r;
      }

      return t;
    }

    function str_serialize(t, e, r) {
      return r = r.replace(/(\r)?\n/g, "\r\n"), r = (r = encodeURIComponent(r)).replace(/%20/g, "+"), t + (t ? "&" : "") + encodeURIComponent(e) + "=" + r;
    }

    t.exports = function (t, e) {
      "object" != a(e) ? e = {
        hash: !!e
      } : void 0 === e.hash && (e.hash = !0);

      for (var r = e.hash ? {} : "", i = e.serializer || (e.hash ? hash_serializer : str_serialize), s = t && t.elements ? t.elements : [], c = Object.create(null), l = 0; l < s.length; ++l) {
        var u = s[l];

        if ((e.disabled || !u.disabled) && u.name && o.test(u.nodeName) && !n.test(u.type)) {
          var d = u.name,
              f = u.value;

          if ("checkbox" !== u.type && "radio" !== u.type || u.checked || (f = void 0), e.empty) {
            if ("checkbox" !== u.type || u.checked || (f = ""), "radio" === u.type && (c[u.name] || u.checked ? u.checked && (c[u.name] = !0) : c[u.name] = !1), void 0 == f && "radio" == u.type) continue;
          } else if (!f) continue;

          if ("select-multiple" !== u.type) r = i(r, d, f);else {
            f = [];

            for (var h = u.options, y = !1, p = 0; p < h.length; ++p) {
              var m = h[p],
                  v = e.empty && !m.value,
                  _ = m.value || v;

              m.selected && _ && (y = !0, r = e.hash && "[]" !== d.slice(d.length - 2) ? i(r, d + "[]", m.value) : i(r, d, m.value));
            }

            !y && e.empty && (r = i(r, d, ""));
          }
        }
      }

      if (e.empty) for (var d in c) {
        c[d] || (r = i(r, d, ""));
      }
      return r;
    };
  }, function (t, e, r) {
    t.exports = r(4);
  }, function (t, e, r) {}, function (t, e) {
    function _typeof2(t) {
      return (_typeof2 = "function" === typeof Symbol && "symbol" === _typeof3(Symbol.iterator) ? function (t) {
        return _typeof3(t);
      } : function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof3(t);
      })(t);
    }

    function _typeof(e) {
      return "function" === typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? t.exports = _typeof = function _typeof(t) {
        return _typeof2(t);
      } : t.exports = _typeof = function _typeof(t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      }, _typeof(e);
    }

    t.exports = _typeof;
  }, function (t, e, r) {
    "use strict";

    r.r(e);
    r(2);
    var a = "${{amount}}";

    function formatMoney(t, e) {
      "string" === typeof t && (t = t.replace(".", ""));
      var r = "",
          n = /\{\{\s*(\w+)\s*\}\}/,
          o = e || a;

      function formatWithDelimiters(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",",
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
        if (isNaN(t) || null == t) return 0;
        var n = (t = (t / 100).toFixed(e)).split(".");
        return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1".concat(r)) + (n[1] ? a + n[1] : "");
      }

      switch (o.match(n)[1]) {
        case "amount":
          r = formatWithDelimiters(t, 2);
          break;

        case "amount_no_decimals":
          r = formatWithDelimiters(t, 0);
          break;

        case "amount_with_comma_separator":
          r = formatWithDelimiters(t, 2, ".", ",");
          break;

        case "amount_no_decimals_with_comma_separator":
          r = formatWithDelimiters(t, 0, ".", ",");
      }

      return o.replace(n, r);
    }

    var n = {
      searchParams: "URLSearchParams" in self,
      iterable: "Symbol" in self && "iterator" in Symbol,
      blob: "FileReader" in self && "Blob" in self && function () {
        try {
          return new Blob(), !0;
        } catch (t) {
          return !1;
        }
      }(),
      formData: "FormData" in self,
      arrayBuffer: "ArrayBuffer" in self
    };
    if (n.arrayBuffer) var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        i = ArrayBuffer.isView || function (t) {
      return t && o.indexOf(Object.prototype.toString.call(t)) > -1;
    };

    function normalizeName(t) {
      if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }

    function normalizeValue(t) {
      return "string" !== typeof t && (t = String(t)), t;
    }

    function iteratorFor(t) {
      var e = {
        next: function next() {
          var e = t.shift();
          return {
            done: void 0 === e,
            value: e
          };
        }
      };
      return n.iterable && (e[Symbol.iterator] = function () {
        return e;
      }), e;
    }

    function Headers(t) {
      this.map = {}, t instanceof Headers ? t.forEach(function (t, e) {
        this.append(e, t);
      }, this) : Array.isArray(t) ? t.forEach(function (t) {
        this.append(t[0], t[1]);
      }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
        this.append(e, t[e]);
      }, this);
    }

    function consumed(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
      t.bodyUsed = !0;
    }

    function fileReaderReady(t) {
      return new Promise(function (e, r) {
        t.onload = function () {
          e(t.result);
        }, t.onerror = function () {
          r(t.error);
        };
      });
    }

    function readBlobAsArrayBuffer(t) {
      var e = new FileReader(),
          r = fileReaderReady(e);
      return e.readAsArrayBuffer(t), r;
    }

    function bufferClone(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }

    function Body() {
      return this.bodyUsed = !1, this._initBody = function (t) {
        var e;
        this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = bufferClone(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = bufferClone(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      }, n.blob && (this.blob = function () {
        var t = consumed(this);
        if (t) return t;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function () {
        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer);
      }), this.text = function () {
        var t = consumed(this);
        if (t) return t;
        if (this._bodyBlob) return function (t) {
          var e = new FileReader(),
              r = fileReaderReady(e);
          return e.readAsText(t), r;
        }(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
          for (var e = new Uint8Array(t), r = new Array(e.length), a = 0; a < e.length; a++) {
            r[a] = String.fromCharCode(e[a]);
          }

          return r.join("");
        }(this._bodyArrayBuffer));
        if (this._bodyFormData) throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }, n.formData && (this.formData = function () {
        return this.text().then(decode);
      }), this.json = function () {
        return this.text().then(JSON.parse);
      }, this;
    }

    Headers.prototype.append = function (t, e) {
      t = normalizeName(t), e = normalizeValue(e);
      var r = this.map[t];
      this.map[t] = r ? r + ", " + e : e;
    }, Headers.prototype["delete"] = function (t) {
      delete this.map[normalizeName(t)];
    }, Headers.prototype.get = function (t) {
      return t = normalizeName(t), this.has(t) ? this.map[t] : null;
    }, Headers.prototype.has = function (t) {
      return this.map.hasOwnProperty(normalizeName(t));
    }, Headers.prototype.set = function (t, e) {
      this.map[normalizeName(t)] = normalizeValue(e);
    }, Headers.prototype.forEach = function (t, e) {
      for (var r in this.map) {
        this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
      }
    }, Headers.prototype.keys = function () {
      var t = [];
      return this.forEach(function (e, r) {
        t.push(r);
      }), iteratorFor(t);
    }, Headers.prototype.values = function () {
      var t = [];
      return this.forEach(function (e) {
        t.push(e);
      }), iteratorFor(t);
    }, Headers.prototype.entries = function () {
      var t = [];
      return this.forEach(function (e, r) {
        t.push([r, e]);
      }), iteratorFor(t);
    }, n.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
    var s = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function Request(t, e) {
      var r = (e = e || {}).body;

      if (t instanceof Request) {
        if (t.bodyUsed) throw new TypeError("Already read");
        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new Headers(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0);
      } else this.url = String(t);

      if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new Headers(e.headers)), this.method = function (t) {
        var e = t.toUpperCase();
        return s.indexOf(e) > -1 ? e : t;
      }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");

      this._initBody(r);
    }

    function decode(t) {
      var e = new FormData();
      return t.trim().split("&").forEach(function (t) {
        if (t) {
          var r = t.split("="),
              a = r.shift().replace(/\+/g, " "),
              n = r.join("=").replace(/\+/g, " ");
          e.append(decodeURIComponent(a), decodeURIComponent(n));
        }
      }), e;
    }

    function parseHeaders(t) {
      var e = new Headers();
      return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (t) {
        var r = t.split(":"),
            a = r.shift().trim();

        if (a) {
          var n = r.join(":").trim();
          e.append(a, n);
        }
      }), e;
    }

    function Response(t, e) {
      e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new Headers(e.headers), this.url = e.url || "", this._initBody(t);
    }

    Request.prototype.clone = function () {
      return new Request(this, {
        body: this._bodyInit
      });
    }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    }, Response.error = function () {
      var t = new Response(null, {
        status: 0,
        statusText: ""
      });
      return t.type = "error", t;
    };
    var c = [301, 302, 303, 307, 308];

    Response.redirect = function (t, e) {
      if (-1 === c.indexOf(e)) throw new RangeError("Invalid status code");
      return new Response(null, {
        status: e,
        headers: {
          location: t
        }
      });
    };

    var l = self.DOMException;

    try {
      new l();
    } catch (h) {
      (l = function l(t, e) {
        this.message = t, this.name = e;
        var r = Error(t);
        this.stack = r.stack;
      }).prototype = Object.create(Error.prototype), l.prototype.constructor = l;
    }

    function fetch(t, e) {
      return new Promise(function (r, a) {
        var o = new Request(t, e);
        if (o.signal && o.signal.aborted) return a(new l("Aborted", "AbortError"));
        var i = new XMLHttpRequest();

        function abortXhr() {
          i.abort();
        }

        i.onload = function () {
          var t = {
            status: i.status,
            statusText: i.statusText,
            headers: parseHeaders(i.getAllResponseHeaders() || "")
          };
          t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
          var e = "response" in i ? i.response : i.responseText;
          r(new Response(e, t));
        }, i.onerror = function () {
          a(new TypeError("Network request failed"));
        }, i.ontimeout = function () {
          a(new TypeError("Network request failed"));
        }, i.onabort = function () {
          a(new l("Aborted", "AbortError"));
        }, i.open(o.method, o.url, !0), "include" === o.credentials ? i.withCredentials = !0 : "omit" === o.credentials && (i.withCredentials = !1), "responseType" in i && n.blob && (i.responseType = "blob"), o.headers.forEach(function (t, e) {
          i.setRequestHeader(e, t);
        }), o.signal && (o.signal.addEventListener("abort", abortXhr), i.onreadystatechange = function () {
          4 === i.readyState && o.signal.removeEventListener("abort", abortXhr);
        }), i.send("undefined" === typeof o._bodyInit ? null : o._bodyInit);
      });
    }

    fetch.polyfill = !0, self.fetch || (self.fetch = fetch, self.Headers = Headers, self.Request = Request, self.Response = Response);
    var u = r(0),
        d = r.n(u);

    function _defineProperties(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }

    var f = function () {      
      function GoCart(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, GoCart);
        this.defaults = Object.assign({}, {
          cartModalFail: ".js-go-cart-modal-fail",
          cartModalFailClose: ".js-go-cart-modal-fail-close",
          cartModal: ".js-go-cart-modal",
          cartModalClose: ".js-go-cart-modal-close",
          cartModalContent: ".js-go-cart-modal-content",
          cartDrawer: ".js-go-cart-drawer",
          cartDrawerContent: ".js-go-cart-drawer-content",
          cartDrawerSubTotal: ".js-go-cart-drawer-subtotal",
          cartDrawerFooter: ".js-go-cart-drawer-footer",
          cartDrawerClose: ".js-go-cart-drawer-close",
          cartMiniCart: ".js-go-cart-mini-cart",
          cartMiniCartContent: ".js-go-cart-mini-cart-content",
          cartMiniCartSubTotal: ".js-go-cart-mini-cart-subtotal",
          cartMiniCartFooter: ".js-go-cart-mini-cart-footer",
          cartTrigger: ".js-go-cart-trigger",
          cartOverlay: ".js-go-cart-overlay",
          cartCount: ".js-go-cart-counter",
          addToCart: ".js-go-cart-add-to-cart",
          removeFromCart: ".js-go-cart-remove-from-cart",
          removeFromCartNoDot: "js-go-cart-remove-from-cart",
          itemQuantity: ".js-go-cart-quantity",
          itemQuantityPlus: ".js-go-cart-quantity-plus",
          itemQuantityMinus: ".js-go-cart-quantity-minus",
          cartMode: "drawer",
          drawerDirection: "right",
          displayModal: !1,
          moneyFormat: "${{amount}}"
        }, t), this.cartModalFail = document.querySelector(this.defaults.cartModalFail), this.cartModalFailClose = document.querySelector(this.defaults.cartModalFailClose), this.cartModal = document.querySelector(this.defaults.cartModal), this.cartModalClose = document.querySelectorAll(this.defaults.cartModalClose), this.cartModalContent = document.querySelector(this.defaults.cartModalContent), this.cartDrawer = document.querySelector(this.defaults.cartDrawer), this.cartDrawerContent = document.querySelector(this.defaults.cartDrawerContent), this.cartDrawerSubTotal = document.querySelector(this.defaults.cartDrawerSubTotal), this.cartDrawerFooter = document.querySelector(this.defaults.cartDrawerFooter), this.cartDrawerClose = document.querySelector(this.defaults.cartDrawerClose), this.cartMiniCart = document.querySelector(this.defaults.cartMiniCart), this.cartMiniCartContent = document.querySelector(this.defaults.cartMiniCartContent), this.cartMiniCartSubTotal = document.querySelector(this.defaults.cartMiniCartSubTotal), this.cartMiniCartFooter = document.querySelector(this.defaults.cartMiniCartFooter), this.cartTrigger = document.querySelector(this.defaults.cartTrigger), this.cartOverlay = document.querySelector(this.defaults.cartOverlay), this.cartCount = document.querySelector(this.defaults.cartCount), this.addToCart = document.querySelectorAll(this.defaults.addToCart), this.removeFromCart = this.defaults.removeFromCart, this.removeFromCartNoDot = this.defaults.removeFromCartNoDot, this.itemQuantity = this.defaults.itemQuantity, this.itemQuantityPlus = this.defaults.itemQuantityPlus, this.itemQuantityMinus = this.defaults.itemQuantityMinus, this.cartMode = this.defaults.cartMode, this.drawerDirection = this.defaults.drawerDirection, this.displayModal = this.defaults.displayModal, this.moneyFormat = this.defaults.moneyFormat, this.init();
      }

      var t, e, r;
      return t = GoCart, r = [{
        key: "removeItemAnimation",
        value: function value(t) {
          t.classList.add("is-invisible");
        }
      }], (e = [{
        key: "init",
        value: function value() {
          var t = this;
          this.fetchCart(), this.isDrawerMode && this.setDrawerDirection(), this.addToCart.forEach(function (e) {
            e.addEventListener("click", function (r) {
              r.preventDefault();
              var a = e.parentNode.getAttribute("id");
              t.addItemToCart(a);
            });
          }), this.cartTrigger.addEventListener("click", function () {
            t.isDrawerMode ? t.openCartDrawer() : t.openMiniCart(), t.openCartOverlay();
          }), this.cartOverlay.addEventListener("click", function () {
            t.closeFailModal(), t.closeCartModal(), t.isDrawerMode ? t.closeCartDrawer() : t.closeMiniCart(), t.closeCartOverlay();
          }), this.isDrawerMode && this.cartDrawerClose.addEventListener("click", function () {
            t.closeCartDrawer(), t.closeCartOverlay();
          }), this.displayModal && this.cartModalClose.forEach(function (e) {
            e.addEventListener("click", function () {
              t.closeFailModal(), t.closeCartModal(), t.isDrawerMode ? t.closeCartDrawer() : t.closeMiniCart(), t.closeCartOverlay();
            });
          }), this.cartModalFailClose.addEventListener("click", function () {
            t.closeFailModal(), t.closeCartModal(), t.isDrawerMode ? t.closeCartDrawer() : t.closeMiniCart(), t.closeCartOverlay();
          });
        }
      }, {
        key: "fetchCart",
        value: function value(t) {          
          var e = this;
          
          if ( country_code == 'MX' ){
            window.fetch("/es-mx/cart.js", {
              credentials: "same-origin",
              method: "GET"
            }).then(function (t) {
              return t.json();
            }).then(function (r) {
              return e.fetchHandler(r, t);
            })["catch"](function (t) {
              throw e.ajaxRequestFail(), new Error(t);
            });
          }else{
            window.fetch("/cart.js", {
              credentials: "same-origin",
              method: "GET"
            }).then(function (t) {
              return t.json();
            }).then(function (r) {
              return e.fetchHandler(r, t);
            })["catch"](function (t) {
              throw e.ajaxRequestFail(), new Error(t);
            });
          }
          
                    
        }
      }, {
        key: "addItemToCart",
        value: function value(t) {
          var e = this,
              r = document.querySelector("#".concat(t)),
              a = d()(r, {
            hash: !0
          });
          
          if ( country_code == 'MX' ){
            window.fetch("/es-mx/cart/add.js", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(a)
            }).then(function (t) {
              return t.json();            
            }).then(function (t) {
              return e.addItemToCartHandler(t);
            })["catch"](function (t) {
              throw e.ajaxRequestFail(), new Error(t);
            });
          }else{
            window.fetch("/cart/add.js", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(a)
            }).then(function (t) {
              return t.json();            
            }).then(function (t) {
              return e.addItemToCartHandler(t);
            })["catch"](function (t) {
              throw e.ajaxRequestFail(), new Error(t);
            });
          }
          
          var $active_ele = $("#" + t).find(".color-swatch.active");
          var updated_sku = $active_ele.data("id");
          var variant_id = $active_ele.data("varprodid");
          var selected_variant_price = $active_ele.data("dyprice");
          var selected_variant_color = $active_ele.attr("title");
          var product_info = updated_sku + "-" + variant_id;
          
          DY.API("event", {
            name: "Add to Cart",
            properties: {
              dyType: "add-to-cart-v1",
              value: selected_variant_price,
              currency: "USD",
              productId: product_info,
              quantity: 1,
              color: selected_variant_color
            }
          });
          
        }
      }, {
        key: "removeItem",
        value: function value(t) {
          var e = this;
          
          if ( country_code == 'MX' ){
            window.fetch("/es-mx/cart/change.js", {
              method: "POST",
              credentials: "same-origin",
              body: JSON.stringify({
                quantity: 0,
                line: t
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (t) {
              return t.json();
            }).then(function () {
              return e.fetchCart();
            })["catch"](function (t) {
              throw e.ajaxRequestFail(), new Error(t);
            });
          }else{
            window.fetch("/cart/change.js", {
              method: "POST",
              credentials: "same-origin",
              body: JSON.stringify({
                quantity: 0,
                line: t
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (t) {
              return t.json();
            }).then(function () {
              return e.fetchCart();
            })["catch"](function (t) {
              throw e.ajaxRequestFail(), new Error(t);
            });
          }          
          
        }
      }, {
        key: "changeItemQuantity",
        value: function value(t, e) {
          var r = this;
          
          if ( country_code == 'MX' ){
            window.fetch("/es-mx/cart/change.js", {
              method: "POST",
              credentials: "same-origin",
              body: JSON.stringify({
                quantity: e,
                line: t
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (t) {
              return t.json();
            }).then(function () {
              return r.fetchCart();
            })["catch"](function (t) {
              throw r.ajaxRequestFail(), new Error(t);
            });
          }else{
            window.fetch("/cart/change.js", {
              method: "POST",
              credentials: "same-origin",
              body: JSON.stringify({
                quantity: e,
                line: t
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (t) {
              return t.json();
            }).then(function () {
              return r.fetchCart();
            })["catch"](function (t) {
              throw r.ajaxRequestFail(), new Error(t);
            });
          }
          
        }
      }, {
        key: "cartItemCount",
        value: function value(t) {
          this.cartCount.innerHTML = t.item_count;
        }
      }, {
        key: "fetchAndOpenCart",
        value: function value() {          
          var t = this;
          this.fetchCart(function () {
            t.isDrawerMode ? t.openCartDrawer() : t.openMiniCart(), t.openCartOverlay();
          });
        }
      }, {
        key: "fetchAndOpenModal",
        value: function value(t) {
          var e = this;
          this.fetchCart(function () {
            e.renderCartModal(t), e.openCartModal(), e.openCartOverlay();
          });
        }
      }, {
        key: "fetchHandler",
        value: function value(t, e) {
          this.cartItemCount(t), this.isDrawerMode ? 0 === t.item_count ? (this.renderBlankCartDrawer(), this.cartDrawerFooter.classList.add("is-invisible")) : (this.renderDrawerCart(t), this.cartDrawerFooter.classList.remove("is-invisible"), "function" === typeof e && e(t)) : 0 === t.item_count ? (this.renderBlankMiniCart(), this.cartMiniCartFooter.classList.add("is-invisible")) : (this.renderMiniCart(t), this.cartMiniCartFooter.classList.remove("is-invisible"), "function" === typeof e && e(t));
        }
      }, {
        key: "addItemToCartHandler",
        value: function value(t) {
          return this.displayModal ? this.fetchAndOpenModal(t) : this.fetchAndOpenCart();
        }
      }, {
        key: "ajaxRequestFail",
        value: function value() {
          this.openFailModal(), this.openCartOverlay();
        }
      }, {
        key: "renderCartModal",
        value: function value(t) {
          this.clearCartModal();          
          var e = t.variant_title;
          e = null === e ? "" : "(".concat(e, ")");
          var r = '\n        <div class="go-cart-modal-item">\n            <div class="go-cart-item__image" style="background-image: url('.concat(t.image, ');"></div>\n            <div class="go-cart-item__info">\n                <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, " ").concat(e, "</a> was added to your cart.\n            </div>\n        </div>\n      ");
          this.cartModalContent.innerHTML += r;
        }
      }, {
        key: "renderDrawerCart",
        value: function value(t) {
          //getting custom country data
//           var country_code = $(".go-cart-drawer").data("countrycode");          
          var e = this;

          $(".progress-bar").removeClass("completed");
          $(".progress-bar").attr("value", 0 );
          $(".cart-announcement-wrapper").addClass("hidden");
          $(".top-wrapper").addClass("hidden");
          
//           $(".top-wrapper-copy").addClass("hidden");
//           $(".top-wrapper-congrats").addClass("hidden");
          
          $(".tier-label").removeClass("bold-text");
          $(".discount-portion").addClass("hidden");
          $(".discount-portion p").addClass("hidden");
          $(".original-total-price").html(formatMoney(t.original_total_price, e.moneyFormat));
          
          
//           $(".top-wrapper .first-offer").addClass("hidden");
//           $(".top-wrapper .second-offer").addClass("hidden");
//           $(".top-wrapper .third-offer").addClass("hidden");
          
          var first_tier_value = parseInt($(".top-wrapper .first-offer").data("tier_value"))*100;
          var first_tier_off = parseInt($(".top-wrapper .first-offer").data("tier_off"))*100;
          
          var second_tier_value = parseInt($(".top-wrapper .second-offer").data("tier_value"))*100;
          var second_tier_off = parseInt($(".top-wrapper .second-offer").data("tier_off"))*100;
          
          var third_tier_value = parseInt($(".top-wrapper .third-offer").data("tier_value"))*100;
          var third_tier_off = parseInt($(".top-wrapper .third-offer").data("tier_off"))*100;
          
          if ( t.items_subtotal_price > 0 && t.items_subtotal_price < 160000 ){
          	var current_total_percentage_value = t.items_subtotal_price / 100;
            function float2int (value) {
              return value | 0;
            }
            var final_total_percentage_value = float2int(current_total_percentage_value / 100) * 1000 ;            
            $('.gift-left').html('$' + Math.floor(float2int(current_total_percentage_value) / 100 ) * 10 );
          }
          else {
            $('.gift-left').html(formatMoney(15000, e.moneyFormat));
          }
                    
          if ( t.original_total_price < first_tier_value ){
            /*
            $(".top-wrapper").removeClass("hidden");
            $(".top-wrapper-copy").removeClass("hidden");            
            $(".top-wrapper .first-offer").removeClass("hidden");
            $(".first-offer .spend-amount").html(formatMoney(first_tier_value, e.moneyFormat));
            $(".first-offer .save-amount").html(formatMoney(first_tier_off, e.moneyFormat));
            */
                        
            $(".cart-announcement-wrapper").removeClass("hidden");
            $(".progress-bar-first").attr("value", t.original_total_price );
            
			//discount portion
            $(".discounted-amount").addClass("hidden");
            
          }else if( t.original_total_price >= first_tier_value && t.original_total_price < second_tier_value ){   // first threshold
            /*
            $(".top-wrapper").removeClass("hidden");
            $(".top-wrapper-copy").removeClass("hidden");            
            $(".top-wrapper .second-offer").removeClass("hidden");
            $(".second-offer .spend-amount").html(formatMoney(second_tier_value, e.moneyFormat));
            $(".second-offer .save-amount").html(formatMoney(second_tier_off, e.moneyFormat));
            */
            
            $(".cart-announcement-wrapper").removeClass("hidden");
            $(".progress-bar-first").attr("value", first_tier_value).addClass("completed");
            $(".progress-bar-second").attr("value", ( t.original_total_price - first_tier_value));
            $(".tier-label.first").addClass("bold-text");
            
            //discount portion
            $(".discount-portion").removeClass("hidden");
            $(".discount-portion p").removeClass("hidden");
            $(".reached-amount").html(formatMoney(first_tier_value, e.moneyFormat));
            $(".reached-saved-amount").html(formatMoney(first_tier_off, e.moneyFormat));
            $(".discounted-amount-price").html(formatMoney(first_tier_off, e.moneyFormat));            
            
          }else if( t.original_total_price >= second_tier_value && t.original_total_price < third_tier_value ){   // second threshold
            /*
            $(".top-wrapper").removeClass("hidden");
            $(".top-wrapper-copy").removeClass("hidden");            
            $(".top-wrapper .third-offer").removeClass("hidden");
            $(".third-offer .spend-amount").html(formatMoney(third_tier_value, e.moneyFormat));
            $(".third-offer .save-amount").html(formatMoney(third_tier_off, e.moneyFormat));
            */
            
            $(".cart-announcement-wrapper").removeClass("hidden");
            $(".progress-bar-first").attr("value", first_tier_value).addClass("completed");
            $(".progress-bar-second").attr("value", (second_tier_value - first_tier_value)).addClass("completed");
            $(".progress-bar-third").attr("value", ( t.original_total_price - second_tier_value));
            $(".tier-label.second").addClass("bold-text");
            
            //discount portion
            $(".discount-portion").removeClass("hidden");
            $(".discount-portion p").removeClass("hidden");
            $(".reached-amount").html(formatMoney(second_tier_value, e.moneyFormat));
            $(".reached-saved-amount").html(formatMoney(second_tier_off, e.moneyFormat));
            $(".discounted-amount-price").html(formatMoney(second_tier_off, e.moneyFormat));            
          
          }else if( t.original_total_price >= third_tier_value ){   // third threshold
            /*
            $(".top-wrapper").removeClass("hidden");
            $(".top-wrapper-congrats").removeClass("hidden");            
            $(".spend-amount").html(formatMoney(third_tier_value, e.moneyFormat));
            $(".save-amount").html(formatMoney(third_tier_off, e.moneyFormat));
            */
            
            $(".cart-announcement-wrapper").removeClass("hidden");
            $(".progress-bar-first").attr("value", first_tier_value).addClass("completed");
            $(".progress-bar-second").attr("value", second_tier_value).addClass("completed");
            $(".progress-bar-third").attr("value", ( third_tier_value - second_tier_value)).addClass("completed");            
            $(".tier-label.third").addClass("bold-text");
            
            //discount portion
            $(".discount-portion").removeClass("hidden");
            $(".discount-portion p").removeClass("hidden");
            $(".reached-amount").html(formatMoney(third_tier_value, e.moneyFormat));
            $(".reached-saved-amount").html(formatMoney(third_tier_off, e.moneyFormat));
            $(".discounted-amount-price").html(formatMoney(third_tier_off, e.moneyFormat));            
          
          }
          
//           console.log(Cookies.get('isPromoted'));
          var is_promoted = sessionStorage.getItem('isPromoted');
          if ( is_promoted == "true" ){
            $(".cart-announcement-wrapper").addClass("hidden");
            $(".discount-portion").addClass("hidden");
          }
                    
          this.clearCartDrawer(), t.items.forEach(function (t, r) {
            var a = t.variant_title;
            null === a && (a = "");
            var flagged = false;

            if (t.discounted_price < t.original_price) {
              flagged = true;
            }

            var n = null;
            
            if (flagged) {
              n = '\n        <div class="go-cart-item__single" data-itemprice="'.concat(t.final_price,'" data-variantid="').concat(t.variant_id, '" data-sku="').concat(t.sku,'" data-line="').concat(Number(r + 1), '">\n            <div class="go-cart-item__info-wrapper">\n                <div class="go-cart-item__image" style="background-image: url(').concat(t.image, ');"></div>\n                <div class="go-cart-item__info">\n                    <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, '</a>\n                    <div class="go-cart-item__variant">').concat(a, '</div>\n                    <div class="go-cart-item__quantity">\n                        <span class="go-cart-item__quantity-label">Quantity: </span>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>\n                        <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="').concat(t.quantity, '" disabled>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-plus">+</span>\n                    </div>\n                </div>\n            </div>\n         <div class="price_wrapper">   <div class="go-cart-item__price--old">').concat(formatMoney(t.original_price, e.moneyFormat), '</div>\n            <div class="go-cart-item__price--new">').concat(formatMoney(t.discounted_price, e.moneyFormat), '</div>\n  </div>\n    <a class="go-cart-item__remove ').concat(e.removeFromCartNoDot, '">Remove</a>\n        </div>\n      ');
            } else {
              n = '\n        <div class="go-cart-item__single" data-itemprice="'.concat(t.final_price,'" data-variantid="').concat(t.variant_id, '" data-sku="').concat(t.sku,'" data-line="').concat(Number(r + 1), '">\n            <div class="go-cart-item__info-wrapper">\n                <div class="go-cart-item__image" style="background-image: url(').concat(t.image, ');"></div>\n                <div class="go-cart-item__info">\n                    <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, '</a>\n                    <div class="go-cart-item__variant">').concat(a, '</div>\n                    <div class="go-cart-item__quantity">\n                        <span class="go-cart-item__quantity-label">Quantity: </span>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>\n                        <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="').concat(t.quantity, '" disabled>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-plus">+</span>\n                    </div>\n                </div>\n            </div>\n            <div class="go-cart-item__price">').concat(formatMoney(t.line_price, e.moneyFormat), '</div>\n            <a class="go-cart-item__remove ').concat(e.removeFromCartNoDot, '">Remove</a>\n        </div>\n      ');
            }
            
            e.cartDrawerContent.innerHTML += n;
            
            //if uk customer
            if ( country_code == 'GB' ){
//               $(".price_wrapper div").each(function(){
//                 $(this).text($(this).text().replace(/\$/g, '£'));
//               })
              if ( $(".price_wrapper").length ){
                $(".price_wrapper div").each(function(){
                  $(this).text($(this).text().replace(/\$/g, '£'));
                })
              }
              if ( $(".go-cart-item__price").length ){
                $(".go-cart-item__single").each(function(){
                  $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, '£'));
                })              
              }
              $(".gift-left").text($(".gift-left").text().replace(/\$/g, '£'));
              $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '£'));
              var show_countdown = $(".go-cart-drawer").data("set");
              if ( show_countdown == false ){
                $(".go-cart-promo__text").text("£10 Shipping to the United Kingdom");
              }
            }
            
            //if germany customer
            if ( country_code == 'DE' ){
              
              if ( $(".price_wrapper").length ){
                $(".price_wrapper div").each(function(){
                  $(this).text($(this).text().replace(/\$/g, ''));
                  $(this).append(" €");
                })
              }
              //old code to change currency symbol
//               if ( $(".go-cart-item__price").length ){
//                 $(".go-cart-item__single").each(function(){
//                   $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, '€'));
//                 })              
//               }
              
              //new code to change currency symbol
              if ( $(".go-cart-item__price").length ){
                $(".go-cart-item__single").each(function(){
                  $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, ''));
                  $(this).find(".go-cart-item__price").append(" €");
                })              
              }
              
              $(".gift-left").text($(".gift-left").text().replace(/\$/g, ''));
              $(".gift-left").append(" €");              
                            
              var show_countdown = $(".go-cart-drawer").data("set");
              if ( show_countdown == false ){
                $(".go-cart-promo__text").text("€10 Shipping to the Germany");
              }
            }
            
            //if spain customer
            if ( country_code == 'ES' ){
              if ( $(".price_wrapper").length ){
                $(".price_wrapper div").each(function(){
                  $(this).text($(this).text().replace(/\$/g, '€'));
                })
              }
              if ( $(".go-cart-item__price").length ){
                $(".go-cart-item__single").each(function(){
                  $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, '€'));
                })              
              }
              
              
              $(".gift-left").text($(".gift-left").text().replace(/\$/g, '€'));
              $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '€'));
              var show_countdown = $(".go-cart-drawer").data("set");
              if ( show_countdown == false ){
                $(".go-cart-promo__text").text("€10 Shipping to the Spain");
              }
            }
            
            //if france customer
            if ( country_code == 'FR' ){
//               $(".price_wrapper div").each(function(){
//                 $(this).text($(this).text().replace(/\$/g, '€'));
//               })
              if ( $(".price_wrapper").length ){
                $(".price_wrapper div").each(function(){
                  $(this).text($(this).text().replace(/\$/g, '€'));
                })
              }
              if ( $(".go-cart-item__price").length ){
                $(".go-cart-item__single").each(function(){
                  $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, '€'));
                })              
              }
              
              $(".gift-left").text($(".gift-left").text().replace(/\$/g, '€'));
              $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '€'));
              var show_countdown = $(".go-cart-drawer").data("set");
              if ( show_countdown == false ){
                $(".go-cart-promo__text").text("€10 Shipping to the France");
              }
            }
            
            //if italy customer
            if ( country_code == 'IT' ){
//               $(".price_wrapper div").each(function(){
//                 $(this).text($(this).text().replace(/\$/g, '€'));
//               })
              if ( $(".price_wrapper").length ){
                $(".price_wrapper div").each(function(){
                  $(this).text($(this).text().replace(/\$/g, '€'));
                })
              }
              if ( $(".go-cart-item__price").length ){
                $(".go-cart-item__single").each(function(){
                  $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, '€'));
                })              
              }
              
              $(".gift-left").text($(".gift-left").text().replace(/\$/g, '€'));
              $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '€'));
              var show_countdown = $(".go-cart-drawer").data("set");
              if ( show_countdown == false ){
                $(".go-cart-promo__text").text("€10 Shipping to the Italy");
              }
            }
            
            //if netherlands customer
            if ( country_code == 'NL' || country_code == 'AT' ){
              
              if ( $(".price_wrapper").length ){
                $(".price_wrapper div").each(function(){
                  $(this).text($(this).text().replace(/\$/g, '€ ').replace(/\./g, ','));
                })
              }
              if ( $(".go-cart-item__price").length ){
                $(".go-cart-item__single").each(function(){
                  $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\$/g, '€ ').replace(/\./g, ','));
                })              
              }
              
              $(".gift-left").text($(".gift-left").text().replace(/\$/g, '€ ').replace(/\./g, ','));
              
              var show_countdown = $(".go-cart-drawer").data("set");
              
              if ( show_countdown == false ){
                if( country_code == 'NL' ){
                  $(".go-cart-promo__text").text("€10 Shipping to the Netherlands");
                }else{
                  $(".go-cart-promo__text").text("€10 Shipping to the Austria");
                }                
              }
            }
            
          }), this.cartDrawerSubTotal.innerHTML = formatMoney(t.total_price, this.moneyFormat), this.cartDrawerSubTotal.parentNode.classList.remove("is-invisible"), document.querySelectorAll(this.removeFromCart).forEach(function (t) {
            t.addEventListener("click", function () {
              GoCart.removeItemAnimation(t.parentNode);
              var r = t.parentNode.getAttribute("data-line");
              e.removeItem(r);
            });
          }), document.querySelectorAll(this.itemQuantityPlus).forEach(function (t) {            
            t.addEventListener("click", function () {              
              var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                  a = Number(t.parentNode.querySelector(e.itemQuantity).value) + 1;
              e.changeItemQuantity(r, a);
              var variant_title = t.closest(".go-cart-item__single").getElementsByClassName("go-cart-item__variant")[0].textContent;
              var variant_id = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-variantid");
              var data_sku = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-sku");              
              var final_info = data_sku + "-" + variant_id;
              var item_price = (parseInt(t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-itemprice"))/100).toFixed(2);            
              
              DY.API("event", {
                name: "Add to Cart",
                properties: {
                  dyType: "add-to-cart-v1",
                  value: item_price,
                  currency: "USD",
                  productId: final_info,
                  quantity: 1,
                  Color: variant_title
                }
              });

            });
          }), document.querySelectorAll(this.itemQuantityMinus).forEach(function (t) {
            t.addEventListener("click", function () {
              var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                  a = Number(t.parentNode.querySelector(e.itemQuantity).value) - 1;
              e.changeItemQuantity(r, a), 0 === Number(t.parentNode.querySelector(e.itemQuantity).value - 1) && GoCart.removeItemAnimation(t.parentNode.parentNode.parentNode.parentNode);
            });
          });
                    
          //if european customer
          if ( country_code == 'ES' || country_code == 'FR' || country_code == 'IT' ){
            $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '€'));
            
//             if ( $(".price_wrapper").length ){
//               $(".go-cart-item__single").each(function(){
//                 $(this).find(".go-cart-item__price--old").text($(this).find(".go-cart-item__price--old").text().replace(/\./g, ','));
//                 $(this).find(".go-cart-item__price--new").text($(this).find(".go-cart-item__price--new").text().replace(/\./g, ','));
//               })
//             }
            
//             if ( $(".go-cart-item__price").length ){
              
//               $(".go-cart-item__single").each(function(){
//                 $(this).find(".go-cart-item__price").text($(this).find(".go-cart-item__price").text().replace(/\./g, ','));
//               })                            
//             }
            
            if ( $(".cart-upsell").length ){
              $(".variants-price__item").each(function(){
                $(this).find(".variants-price__item-part--old").text($(this).find(".variants-price__item-part--old").text().replace(/\$/g, '€').replace(/\./g, ','));
              })              
            }
          }
          
          if ( country_code == 'DE' ){
            $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, ''));
            $(".go-cart-drawer__subtotal-price").append(" €");
          }
          
          if ( country_code == 'NL' || country_code == 'AT' ){
            $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '€ ').replace(/\./g, ','));            
          }
          
          if ( country_code == 'GB' ){
            $(".go-cart-drawer__subtotal-price").text($(".go-cart-drawer__subtotal-price").text().replace(/\$/g, '£'));
          }
        }
      }, {
        key: "renderMiniCart",
        value: function value(t) {
          var e = this;
          this.clearMiniCart(), t.items.forEach(function (t, r) {
            var a = t.variant_title;
            null === a && (a = "");
            var n = '\n        <div class="go-cart-item__single" data-itemprice="'.concat(t.final_price,'" data-variantid="').concat(t.variant_id, '" data-sku="').concat(t.sku,'" data-line="').concat(Number(r + 1), '">\n            <div class="go-cart-item__info-wrapper">\n                <div class="go-cart-item__image" style="background-image: url(').concat(t.image, ');"></div>\n                <div class="go-cart-item__info">\n                    <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, '</a>\n                    <div class="go-cart-item__variant">').concat(a, '</div>\n                    <div class="go-cart-item__quantity">\n                        <span class="go-cart-item__quantity-label">Quantity: </span>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>\n                        <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="').concat(t.quantity, '" disabled>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-plus">+</span>\n                    </div>\n                </div>\n            </div>\n            <div class="go-cart-item__price">').concat(formatMoney(t.line_price, e.moneyFormat), '</div>\n            <a class="go-cart-item__remove ').concat(e.removeFromCartNoDot, '">Remove</a>\n        </div>\n      ');
            e.cartMiniCartContent.innerHTML += n;
          }), this.cartMiniCartSubTotal.innerHTML = formatMoney(t.total_price, this.moneyFormat), this.cartMiniCartSubTotal.parentNode.classList.remove("is-invisible"), document.querySelectorAll(this.removeFromCart).forEach(function (t) {
            t.addEventListener("click", function () {
              GoCart.removeItemAnimation(t.parentNode);
              var r = t.parentNode.getAttribute("data-line");
              e.removeItem(r);
            });
          }), document.querySelectorAll(this.itemQuantityPlus).forEach(function (t) {
            t.addEventListener("click", function () {
              var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                  a = Number(t.parentNode.querySelector(e.itemQuantity).value) + 1;
              e.changeItemQuantity(r, a);
            });
          }), document.querySelectorAll(this.itemQuantityMinus).forEach(function (t) {
            t.addEventListener("click", function () {
              var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                  a = Number(t.parentNode.querySelector(e.itemQuantity).value) - 1;
              e.changeItemQuantity(r, a), 0 === Number(t.parentNode.querySelector(e.itemQuantity).value - 1) && GoCart.removeItemAnimation(t.parentNode.parentNode.parentNode.parentNode);
            });
          });
        }
      }, {
        key: "renderBlankCartDrawer",
        value: function value() {
          //remove top and discount portion when the cart is empty
          $(".cart-announcement-wrapper").addClass("hidden");
          $(".discount-portion").addClass("hidden");          
          this.cartDrawerSubTotal.parentNode.classList.add("is-invisible"), this.clearCartDrawer(), this.cartDrawerContent.innerHTML = '<div class="go-cart__empty">Your Cart is currently empty!</div>';
        }
      }, {
        key: "renderBlankMiniCart",
        value: function value() {
          this.cartMiniCartSubTotal.parentNode.classList.add("is-invisible"), this.clearMiniCart(), this.cartMiniCartContent.innerHTML = '<div class="go-cart__empty">Your Cart is currently empty!</div>';
        }
      }, {
        key: "clearCartDrawer",
        value: function value() {
          this.cartDrawerContent.innerHTML = "";
        }
      }, {
        key: "clearMiniCart",
        value: function value() {
          this.cartMiniCartContent.innerHTML = "";
        }
      }, {
        key: "clearCartModal",
        value: function value() {
          this.cartModalContent.innerHTML = "";
        }
      }, {
        key: "openCartDrawer",
        value: function value() {          
          this.cartDrawer.classList.add("is-open");
          this.cartDrawer.classList.add("is-open");
        }
      }, {
        key: "closeCartDrawer",
        value: function value() {
          this.cartDrawer.classList.remove("is-open");
        }
      }, {
        key: "openMiniCart",
        value: function value() {
          this.cartMiniCart.classList.add("is-open");
        }
      }, {
        key: "closeMiniCart",
        value: function value() {
          this.cartMiniCart.classList.remove("is-open");
        }
      }, {
        key: "openFailModal",
        value: function value() {
          this.cartModalFail.classList.add("is-open");
        }
      }, {
        key: "closeFailModal",
        value: function value() {
          this.cartModalFail.classList.remove("is-open");
        }
      }, {
        key: "openCartModal",
        value: function value() {
          this.cartModal.classList.add("is-open");
        }
      }, {
        key: "closeCartModal",
        value: function value() {
          this.cartModal.classList.remove("is-open");
        }
      }, {
        key: "openCartOverlay",
        value: function value() {
          this.cartOverlay.classList.add("is-open");
        }
      }, {
        key: "closeCartOverlay",
        value: function value() {
          this.cartOverlay.classList.remove("is-open");
        }
      }, {
        key: "setDrawerDirection",
        value: function value() {
          this.cartDrawer.classList.add("go-cart__drawer--".concat(this.drawerDirection));
        }
      }, {
        key: "isDrawerMode",
        get: function get() {
          return "drawer" === this.cartMode;
        }
      }]) && _defineProperties(t.prototype, e), r && _defineProperties(t, r), GoCart;
    }();

    e["default"] = f;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../usr/local/lib/node_modules/slater/node_modules/webpack/buildin/module.js */ "../../../../usr/local/lib/node_modules/slater/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/scripts/go-cart/go-cart.scss":
/*!******************************************!*\
  !*** ./src/scripts/go-cart/go-cart.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _go_cart_go_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-cart/go-cart.js */ "./src/scripts/go-cart/go-cart.js");
/* harmony import */ var _go_cart_go_cart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_go_cart_go_cart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart_upsell_cart_upsell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-upsell/cart-upsell */ "./src/scripts/cart-upsell/cart-upsell.js");
/* harmony import */ var _go_cart_go_cart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./go-cart/go-cart.scss */ "./src/scripts/go-cart/go-cart.scss");
/* harmony import */ var _go_cart_go_cart_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_go_cart_go_cart_scss__WEBPACK_IMPORTED_MODULE_2__);



var goCart = new _go_cart_go_cart_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  cartMode: 'drawer',
  //drawer or mini-cart  
  drawerDirection: 'right',
  //cart drawer from left or right
  displayModal: false,
  //display success modal when adding product to cart
  moneyFormat: '${{amount}}' //template for money format when displaying money

});
var cartUpsell = new _cart_upsell_cart_upsell__WEBPACK_IMPORTED_MODULE_1__["default"](goCart);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYXJ0LXVwc2VsbC9jYXJ0LXVwc2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYXJ0LXVwc2VsbC9jYXJ0LXVwc2VsbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dvLWNhcnQvZ28tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nby1jYXJ0L2dvLWNhcnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJpbXBvcnQgXCIuL2NhcnQtdXBzZWxsLnNjc3NcIjtcblxuY2xhc3MgQ2FydFVwc2VsbCB7XG4gIGNvbnN0cnVjdG9yKGdvQ2FydCkge1xuICAgIHRoaXMuZ29DYXJ0ID0gZ29DYXJ0O1xuICAgIHRoaXMucHJvZHVjdEFkZGVkID0gZmFsc2U7XG4gICAgdGhpcy52YXJpYW50SGFuZGxlID0gbnVsbDtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLmNhcnRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nby1jYXJ0X19vdmVybGF5XCIpO1xuICAgIHRoaXMuY2FydEZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ28tY2FydF9fc2Nyb2xsXCIpO1xuICAgIHRoaXMuc2V0TXV0YXRpb25PYnNlcnZlckZvckNhcnQoKTtcbiAgfVxuXG4gIGFzeW5jIGNoZWNrSWZVcHNlbGxQcm9kdWN0SXNJbkNhcnQoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvY2FydC5qc1wiKTtcbiAgICBsZXQgY2FydERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBpdGVtX2hhbmRsZXMgPSBbXTtcbiAgICBsZXQgZGlzY291bnRlZF9oYW5kbGVzID0gW107XG5cbiAgICBjb25zdCBpdGVtcyA9IGNhcnREYXRhLml0ZW1zO1xuICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5wcmljZSkgLSBwYXJzZUZsb2F0KGEucHJpY2UpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1faGFuZGxlcy5wdXNoKGl0ZW1zW2ldLmhhbmRsZSk7XG4gICAgfVxuICAgIGNvbnN0IHVuaXF1ZUl0ZW1zID0gQXJyYXkuZnJvbShuZXcgU2V0KGl0ZW1faGFuZGxlcykpO1xuXG4gICAgaWYgKHVuaXF1ZUl0ZW1zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1bmlxdWVJdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZmV0Y2goYC9wcm9kdWN0cy8ke3VuaXF1ZUl0ZW1zW2pdfS5qc2ApO1xuICAgICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IGF3YWl0IHByb2R1Y3QuanNvbigpO1xuICAgICAgICBjb25zdCB0YWdzID0gcHJvZHVjdERhdGEudGFncztcbiAgICAgICAgaWYgKHRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFnc1tpXS5pbmNsdWRlcyhcImRpc2NvdW50XCIpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhZ3Nfc3BlY2lhbCA9IHRhZ3NbaV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSB0YWdzX3NwZWNpYWxbMV07XG4gICAgICAgICAgICAgIGxldCBzYW1lSXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICBsZXQgc2FtZVZhcmlhbnRBcnIgPSBbXTtcbiAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW0ucXVhbnRpdHkgPT0gMSkgJiYgKHVuaXF1ZUl0ZW1zW2pdID09IGhhbmRsZSkpIHtcbiAgICAgICAgICAgICAgICAgIHNhbWVWYXJpYW50QXJyLnB1c2goaXRlbSlcbiAgICAgICAgICAgICAgICAgIGlmIChzYW1lVmFyaWFudEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtZUl0ZW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBkaXNjb3VudGVkX2hhbmRsZXMgPSBbXVxuICAgICAgICAgICAgICBpZiAoIXNhbWVJdGVtIHx8IHNhbWVWYXJpYW50QXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkaXNjb3VudGVkX2hhbmRsZXMucHVzaChoYW5kbGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaXRlbV9oYW5kbGVzLmZpbHRlcigoZWxlbWVudCkgPT5cbiAgICAgIGRpc2NvdW50ZWRfaGFuZGxlcy5pbmNsdWRlcyhlbGVtZW50KVxuICAgICk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uLmxlbmd0aDtcbiAgfVxuXG4gIGxpc3RlbkZvclJlbW92ZUFjdGlvbigpIHtcbiAgICBjb25zdCByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nby1jYXJ0LWl0ZW1fX3JlbW92ZVwiKTtcblxuICAgIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhidXR0b24pO1xuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3RlbkZvckNhcnRNdXRhdGlvbigpO1xuICAgICAgICB9LCA4MDApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNdXRhdGlvbk9ic2VydmVyRm9yQ2FydCgpIHtcbiAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICB0aGlzLmxpc3RlbkZvckNhcnRNdXRhdGlvbi5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNhcnRPdmVybGF5LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuRm9yQ2FydE11dGF0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG4gICAgdGhpcy5saXN0ZW5Gb3JSZW1vdmVBY3Rpb24oKTtcbiAgICBjb25zdCBvcGVuZWQgPSB0aGlzLmlzQ2FydE9wZW5lZCh0aGlzLmNhcnRPdmVybGF5KTtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLmdlbmVyYXRlUm9vdEVsZW1lbnQoKTtcbiAgICB0aGlzLmFkZFJvb3RFbFRvQ2FydChyb290RWwpO1xuXG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgdGhpcy5nZXREaXNjb3VudGVkUHJvZHVjdCgocHJvZHVjdCwgZGlzY291bnQpID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVByb2R1Y3RGb3JtKHByb2R1Y3QsIGRpc2NvdW50LCByb290RWwpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJGb3JBZGRUb0NhcnRCdXR0b25zKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZyZXNoSW50ZXJ2YWxJZCA/IGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoSW50ZXJ2YWxJZCkgOiBudWxsO1xuICAgICAgcm9vdEVsLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJGb3JBZGRUb0NhcnRCdXR0b25zKCkge1xuICAgIHRoaXMuZ29DYXJ0LmFkZFRvQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5qcy1nby1jYXJ0LWFkZC10by1jYXJ0XCJcbiAgICApO1xuICAgIHRoaXMuZ29DYXJ0LmFkZFRvQ2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybUlEID0gaXRlbS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICB0aGlzLmdvQ2FydC5hZGRJdGVtVG9DYXJ0KGZvcm1JRCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzQ2FydE9wZW5lZChjYXJ0KSB7XG4gICAgY29uc3Qgb3BlbmVkID0gY2FydC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpO1xuICAgIHJldHVybiBvcGVuZWQ7XG4gIH1cblxuICBpc0luSGFuZGxlc0FycmF5KGhhbmRsZSwgaXRlbV9oYW5kbGVzLCBkaXNjb3VudGVkX2hhbmRsZXMpIHtcbiAgICByZXR1cm4gZGlzY291bnRlZF9oYW5kbGVzLmluY2x1ZGVzKGhhbmRsZSk7XG4gIH1cblxuICBnZW5lcmF0ZVJvb3RFbGVtZW50KCkge1xuICAgIGNvbnN0IHByZXZpb3VzUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC11cHNlbGxcIik7XG4gICAgcHJldmlvdXNSb290ID8gcHJldmlvdXNSb290LnJlbW92ZSgpIDogbnVsbDtcblxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvb3QuY2xhc3NMaXN0LmFkZChcImNhcnQtdXBzZWxsXCIpO1xuXG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBhZGRSb290RWxUb0NhcnQocm9vdEVsKSB7XG4gICAgdGhpcy5jYXJ0Rm9vdGVyLmFwcGVuZChyb290RWwpO1xuICB9XG5cbiAgZ2V0RGlzY291bnRlZFByb2R1Y3QoY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYXJ0Q29udGVudHMgPSBmZXRjaChcIi9jYXJ0LmpzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1faGFuZGxlcyA9IFtdO1xuICAgICAgICBjb25zdCBpdGVtcyA9IGRhdGEuaXRlbXM7XG4gICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5wcmljZSkgLSBwYXJzZUZsb2F0KGEucHJpY2UpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGl0ZW1faGFuZGxlcy5wdXNoKGl0ZW1zW2ldLmhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5pcXVlSXRlbXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoaXRlbV9oYW5kbGVzKSk7XG5cbiAgICAgICAgcmV0dXJuIHVuaXF1ZUl0ZW1zO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChpdGVtX2hhbmRsZXMpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1faGFuZGxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBkaXNjb3VudGVkX2hhbmRsZXMgPSBbXTtcbiAgICAgICAgICBsZXQgaXNGb3JtRXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtX2hhbmRsZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gZmV0Y2goYC9wcm9kdWN0cy8ke2l0ZW1faGFuZGxlc1tqXX0uanNgKVxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gcHJvZHVjdC50YWdzO1xuICAgICAgICAgICAgICAgIGlmICh0YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWdzW2ldLmluY2x1ZGVzKFwiZGlzY291bnRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzX3NwZWNpYWwgPSB0YWdzW2ldLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudCA9IHRhZ3Nfc3BlY2lhbFswXTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSB0YWdzX3NwZWNpYWxbMV07XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzY291bnRfcGVyY2VudCA9IHRhZ3Nfc3BlY2lhbFsyXTtcblxuICAgICAgICAgICAgICAgICAgICAgIGxldCBzaG91bGRudFBhcnNlID0gdGhpcy5pc0luSGFuZGxlc0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9oYW5kbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZF9oYW5kbGVzXG4gICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZSwgaXRlbV9oYW5kbGVzLCBkaXNjb3VudGVkX2hhbmRsZXMsIHNob3VsZG50UGFyc2UpXG5cbiAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkX2hhbmRsZXMucHVzaChoYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZG50UGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFyaWFudEhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdEFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5nby1jYXJ0LWl0ZW1fX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoQXJyID0gZWxlbXNbaV0ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHBhdGhBcnJbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJvZHVjdFN0aWxsSW5DYXJ0ID0gYXJyLmluY2x1ZGVzKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNQcm9kdWN0U3RpbGxJbkNhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hJbnRlcnZhbElkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoSW50ZXJ2YWxJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RBZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFyaWFudEhhbmRsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5Gb3JDYXJ0TXV0YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkbnRQYXJzZSAmJiAhdGhpcy5wcm9kdWN0QWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVXBzZWxsVXNlZCA9IGF3YWl0IHRoaXMuY2hlY2tJZlVwc2VsbFByb2R1Y3RJc0luQ2FydCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIWlzRm9ybUV4aXN0cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvZHVjdEFkZGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNVcHNlbGxVc2VkXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgL3Byb2R1Y3RzLyR7aGFuZGxlfS5qc2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGlzY291bnRlZF9wcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGlzY291bnRlZF9wcm9kdWN0LCBkaXNjb3VudF9wZXJjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgaXNGb3JtRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdlbmVyYXRlUHJvZHVjdEZvcm0ocHJvZHVjdCwgZGlzY291bnQsIHJvb3RFbCkge1xuICAgIGxldCB2YXJpYW50V2VpZ2h0O1xuICAgIGNvbnN0IGZvcm0gPSBgXG4gICAgPGZvcm0gYWN0aW9uPVwiL2NhcnQvYWRkXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwiY2FydC11cHNlbGxfX2Zvcm1cIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIFxuICAgIGlkPVwiYWRkLXRvLWNhcnQtJHtwcm9kdWN0LmhhbmRsZX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybV9faGVhZGVyXCI+XG4gICAgWW91J3ZlIHF1YWxpZmllZCBmb3IgYSAke3Byb2R1Y3QudGl0bGV9IGF0IGEgc3BlY2lhbCBwcmljZSFcbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fcHJvZHVjdFwiPiBcblxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9faW1nc1wiPlxuICAgICR7cHJvZHVjdC52YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcbiAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9faW1nLWl0ZW1cIiBpZD1cIiR7dmFyaWFudC5pZH1cIiBkYXRhLXZhcmltZz1cIiR7dmFyaWFudC50aXRsZX1cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3ZhcmlhbnQuZmVhdHVyZWRfaW1hZ2Uuc3JjfVwiIGFsdD1cIiR7dmFyaWFudC50aXRsZX1cIiAvPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fZGVzY1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fdGl0bGVcIj5cbiAgICAke3Byb2R1Y3QudGl0bGV9XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydC11cHNlbGxfX3ZhcmlhbnRzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcnQtdXBzZWxsX192YXJpYW50cy1ib3ggY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0tY29sb3JcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydC11cHNlbGxfX3ZhcmlhbnQtdGl0bGVcIj5cbiAgICA8c3Bhbj5Db2xvcjogPC9zcGFuPlxuICAgICR7cHJvZHVjdC52YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcbiAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fdmFyaWFudC10aXRsZS1pdGVtICR7dmFyaWFudC5vcHRpb24xXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgIC5qb2luKFwiX1wiKX0gJHtcbiAgICAgICAgICB2YXJpYW50Lm9wdGlvbjIgPyB2YXJpYW50Lm9wdGlvbjIuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgOiBcIlwiXG4gICAgICAgIH0gXCIgZGF0YS12YXJpYW50Y29sb3I9XCIke3ZhcmlhbnQub3B0aW9uMX1cIiBkYXRhLXZhcmlhbnR3ZWdpZ2h0PVwiJHtcbiAgICAgICAgICB2YXJpYW50Lm9wdGlvbjIgPyB2YXJpYW50Lm9wdGlvbjIgOiBcIlwiXG4gICAgICAgIH1cIj5cbiAgICAgICAgICAke3ZhcmlhbnQub3B0aW9uMX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgO1xuICAgICAgfVxuICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fdmFyaWFudC1ncmlkXCI+XG5cbiAgICAke3Byb2R1Y3QudmFyaWFudHMubWFwKCh2YXJpYW50KSA9PiB7XG4gICAgICBpZiAodmFyaWFudC5hdmFpbGFibGUpIHtcbiAgICAgICAgaWYgKHZhcmlhbnQub3B0aW9uMikge1xuICAgICAgICAgIHZhcmlhbnRXZWlnaHQgPSB2YXJpYW50Lm9wdGlvbjI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZC1pdGVtICR7dmFyaWFudC5vcHRpb24xXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgIC5qb2luKFwiX1wiKX0gJHtcbiAgICAgICAgICB2YXJpYW50Lm9wdGlvbjIgPyB2YXJpYW50Lm9wdGlvbjIuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgOiBcIlwiXG4gICAgICAgIH0gXCIgZGF0YS12YXJpYW50Y29sb3I9XCIke3ZhcmlhbnQub3B0aW9uMX1cIiBkYXRhLXZhcmlhbnR3ZWdpZ2h0PVwiJHtcbiAgICAgICAgICB2YXJpYW50Lm9wdGlvbjIgPyB2YXJpYW50Lm9wdGlvbjIgOiBcIlwiXG4gICAgICAgIH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3ZhcmlhbnQuZmVhdHVyZWRfaW1hZ2Uuc3JjfSlcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgO1xuICAgICAgfVxuICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgJHtcbiAgICAgIHZhcmlhbnRXZWlnaHRcbiAgICAgICAgPyBwcm9kdWN0Lm9wdGlvbnMubWFwKChvcHQpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHQubmFtZSA9PSBcIldlaWdodFwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtdXBzZWxsX192YXJpYW50cy1ib3ggY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0td2VpZ2h0XCI+IFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fdmFyaWFudC10aXRsZVwiPlxuICAgICAgICAgIDxzcGFuPldlaWdodDogPC9zcGFuPlxuICAgICAgICAgICR7b3B0LnZhbHVlcy5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fdmFyaWFudC10aXRsZS1pdGVtICR7dmFsXG4gICAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgLmpvaW4oXCJfXCIpfSBcIj5cbiAgICAgICAgICAgICAgJHt2YWx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZFwiPlxuICAgICAgICAgICR7b3B0LnZhbHVlcy5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXVwc2VsbF9fdmFyaWFudC1ncmlkLWl0ZW0gJHt2YWx9IFwiID5cbiAgICAgICAgICAgICR7dmFsfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IFwiXCJcbiAgICB9XG5cblxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidmFyaWFudHMtcHJpY2VcIj5cblxuICAgICR7cHJvZHVjdC52YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcbiAgICAgIGlmICh2YXJpYW50LmF2YWlsYWJsZSkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ2YXJpYW50cy1wcmljZV9faXRlbSBcIiBkYXRhLXByaWNlY3VyPVwiJHtcbiAgICAgICAgICB2YXJpYW50LnRpdGxlXG4gICAgICAgIH1cIiA+XG4gICAgICAgIDxzIGNsYXNzPVwidmFyaWFudHMtcHJpY2VfX2l0ZW0tcGFydCB2YXJpYW50cy1wcmljZV9faXRlbS1wYXJ0LS1vbGRcIj5cbiAgICAgICAgJHsodmFyaWFudC5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX1cbiAgICAgICAgPC9zPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFyaWFudHMtcHJpY2VfX2l0ZW0tcGFydCB2YXJpYW50cy1wcmljZV9faXRlbS1wYXJ0LS1kaXNjb3VudFwiPlxuICAgICAgICAkeygodmFyaWFudC5wcmljZSAtIChkaXNjb3VudCAqIDEwMCkpIC8gMTAwKS50b0ZpeGVkKDIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfSl9IFxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxzZWxlY3QgbmFtZT1cImlkXCIgaWQ9XCJQcm9kdWN0U2VsZWN0LSR7XG4gICAgICBwcm9kdWN0LmlkXG4gICAgfVwiIGNsYXNzPVwicHJvZHVjdC1zaW5nbGVfX3ZhcmlhbnRzMTEgaGlkZGVuXCI+XG4gICAgJHtwcm9kdWN0LnZhcmlhbnRzLm1hcCgodmFyaWFudCkgPT4ge1xuICAgICAgaWYgKHZhcmlhbnQuYXZhaWxhYmxlKSB7XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiBkYXRhLXNrdT0ke3ZhcmlhbnQuc2t1fSB2YWx1ZT1cIiR7dmFyaWFudC5pZH1cIj4ke3ZhcmlhbnQudGl0bGV9IC0gJHt2YXJpYW50LnByaWNlfTwvb3B0aW9uPmA7XG4gICAgICB9XG4gICAgfSl9XG4gICAgPC9zZWxlY3Q+ICBcbiAgICA8YnV0dG9uICBcbiAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgbmFtZT1cImFkZFwiIFxuICAgIGRhdGEtYWRkLXRvLWNhcnRcbiAgICBjbGFzcz1cImNhcnQtdXBzZWxsX19idG4ganMtZ28tY2FydC1hZGQtdG8tY2FydFwiXG4gICAgPlxuICAgIGFkZFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGQ9XCJNMjU2IDBDMTE0LjgzMyAwIDAgMTE0LjgzMyAwIDI1NnMxMTQuODMzIDI1NiAyNTYgMjU2IDI1Ni0xMTQuODUzIDI1Ni0yNTZTMzk3LjE2NyAwIDI1NiAwem0wIDQ3Mi4zNDFjLTExOS4yNzUgMC0yMTYuMzQxLTk3LjA0Ni0yMTYuMzQxLTIxNi4zNDFTMTM2LjcyNSAzOS42NTkgMjU2IDM5LjY1OSA0NzIuMzQxIDEzNi43MDUgNDcyLjM0MSAyNTYgMzc1LjI5NSA0NzIuMzQxIDI1NiA0NzIuMzQxelwiLz48cGF0aCBkPVwiTTM1NS4xNDggMjM0LjM4NkgyNzUuODN2LTc5LjMxOGMwLTEwLjk0Ni04Ljg2NC0xOS44My0xOS44My0xOS44M3MtMTkuODMgOC44ODQtMTkuODMgMTkuODN2NzkuMzE4aC03OS4zMThjLTEwLjk2NiAwLTE5LjgzIDguODg0LTE5LjgzIDE5LjgzczguODY0IDE5LjgzIDE5LjgzIDE5LjgzaDc5LjMxOHY3OS4zMThjMCAxMC45NDYgOC44NjQgMTkuODMgMTkuODMgMTkuODNzMTkuODMtOC44ODQgMTkuODMtMTkuODN2LTc5LjMxOGg3OS4zMThjMTAuOTY2IDAgMTkuODMtOC44ODQgMTkuODMtMTkuODNzLTguODY0LTE5LjgzLTE5LjgzLTE5LjgzelwiLz48L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgYDtcbiAgICBjb25zdCBmb3JtX25vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1fbm9kZS5pbm5lckhUTUwgPSBmb3JtO1xuICAgIHJvb3RFbC5hcHBlbmQoZm9ybV9ub2RlKTtcblxuICAgIGxldCBjdXJDb2xvcjtcbiAgICBsZXQgY3VyV2VpZ2h0O1xuICAgIGxldCBuZXdjdXJXZWlnaHQ7XG4gICAgbGV0IGN1clZhcmlhbnQ7XG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZFwiKSkubWFwKFxuICAgICAgKGVsKSA9PiB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZC1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcnQtdXBzZWxsX19pbWdzXCIpKS5tYXAoKGVsKSA9PiB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtdXBzZWxsX19pbWctaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52YXJpYW50cy1wcmljZVwiKSkubWFwKChlbCkgPT4ge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcihcIi52YXJpYW50cy1wcmljZV9faXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWRcIikpLm1hcChcbiAgICAgIChlbCkgPT4ge1xuICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZC1pdGVtXCIpXG4gICAgICAgICkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oXG4gICAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZC1pdGVtXCIpXG4gICAgICAgICAgICApLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJ0LXVwc2VsbF9fdmFyaWFudC1ncmlkXCIpKS5tYXAoXG4gICAgICAoZWwpID0+IHtcbiAgICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWQtaXRlbVwiKVxuICAgICAgICApLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWQtaXRlbVwiKVxuICAgICAgICAgICAgKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCIuY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0tY29sb3IgLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWRcIlxuICAgICAgKVxuICAgICkubWFwKChlbCkgPT4ge1xuICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYXJ0LXVwc2VsbF9fdmFyaWFudC1ncmlkLWl0ZW1cIilcbiAgICAgICkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY3VyQ29sb3IgPSBpdGVtLmRhdGFzZXQudmFyaWFudGNvbG9yO1xuXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0td2VpZ2h0XCIpKSB7XG4gICAgICAgICAgICBjdXJXZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBcIi5jYXJ0LXVwc2VsbF9fdmFyaWFudHMtYm94LS13ZWlnaHQgLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWQgLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWQtaXRlbS5hY3RpdmVcIlxuICAgICAgICAgICAgKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBuZXdjdXJXZWlnaHQgPSBjdXJXZWlnaHQudHJpbSgpO1xuICAgICAgICAgICAgY3VyVmFyaWFudCA9IGAke2N1ckNvbG9yfSAvICR7bmV3Y3VyV2VpZ2h0fWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1clZhcmlhbnQgPSBgJHtjdXJDb2xvcn1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJ0LXVwc2VsbF9faW1nc1wiKSkubWFwKFxuICAgICAgICAgICAgKGVsKSA9PiB7XG4gICAgICAgICAgICAgIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYXJ0LXVwc2VsbF9faW1nLWl0ZW1cIikpLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRhdGFzZXQudmFyaW1nID09IGN1clZhcmlhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZhcmlhbnRzLXByaWNlXCIpKS5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmFyaWFudHMtcHJpY2VfX2l0ZW1cIikpLmZvckVhY2goXG4gICAgICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRhdGFzZXQucHJpY2VjdXIgPT0gY3VyVmFyaWFudCkge1xuICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5jYXJ0LXVwc2VsbF9fdmFyaWFudHMtYm94LS1jb2xvciAuY2FydC11cHNlbGxfX3ZhcmlhbnQtdGl0bGUtaXRlbVwiXG4gICAgICAgICAgKS5pbm5lckhUTUwgPSBjdXJDb2xvcjtcblxuICAgICAgICAgIGxldCBzZWxlY3QxID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3Qtc2luZ2xlX192YXJpYW50czExXCIpXG4gICAgICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3QxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0MVtpXS50ZXh0Q29udGVudC5pbmNsdWRlcyhjdXJWYXJpYW50KSlcbiAgICAgICAgICAgICAgc2VsZWN0MVtpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0td2VpZ2h0XCIpKSB7XG4gICAgICBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIFwiLmNhcnQtdXBzZWxsX192YXJpYW50cy1ib3gtLXdlaWdodCAuY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZFwiXG4gICAgICAgIClcbiAgICAgICkubWFwKChlbCkgPT4ge1xuICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FydC11cHNlbGxfX3ZhcmlhbnQtZ3JpZC1pdGVtXCIpXG4gICAgICAgICkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1ckNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgXCIuY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0tY29sb3IgLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWQgLmNhcnQtdXBzZWxsX192YXJpYW50LWdyaWQtaXRlbS5hY3RpdmVcIlxuICAgICAgICAgICAgKS5kYXRhc2V0LnZhcmlhbnRjb2xvcjtcblxuICAgICAgICAgICAgY3VyV2VpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgXCIuY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0td2VpZ2h0IC5jYXJ0LXVwc2VsbF9fdmFyaWFudC1ncmlkIC5jYXJ0LXVwc2VsbF9fdmFyaWFudC1ncmlkLWl0ZW0uYWN0aXZlXCJcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBuZXdjdXJXZWlnaHQgPSBjdXJXZWlnaHQudHJpbSgpO1xuICAgICAgICAgICAgY3VyVmFyaWFudCA9IGAke2N1ckNvbG9yfSAvICR7bmV3Y3VyV2VpZ2h0fWA7XG5cbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52YXJpYW50cy1wcmljZVwiKSkubWFwKFxuICAgICAgICAgICAgICAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi52YXJpYW50cy1wcmljZV9faXRlbVwiKVxuICAgICAgICAgICAgICAgICkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5wcmljZWN1ciA9PSBjdXJWYXJpYW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgXCIuY2FydC11cHNlbGxfX3ZhcmlhbnRzLWJveC0td2VpZ2h0IC5jYXJ0LXVwc2VsbF9fdmFyaWFudC10aXRsZS1pdGVtXCJcbiAgICAgICAgICAgICkuaW5uZXJIVE1MID0gY3VyV2VpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1zaW5nbGVfX3ZhcmlhbnRzMTFcIilcbiAgICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdFtpXS50ZXh0Q29udGVudC5pbmNsdWRlcyhjdXJWYXJpYW50KSlcbiAgICAgICAgICAgICAgICBzZWxlY3RbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtX25vZGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFVwc2VsbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIVxuICogXG4gKiAgIEBib3JuZmlnaHQvZ29jYXJ0IHYxLjAuNlxuICogICBcbiAqIFxuICogICBDb3B5cmlnaHQgKGMpIEJvcm5maWdodCAoaHR0cHM6Ly93d3cuYm9ybmZpZ2h0LmNvbS8pXG4gKiBcbiAqICAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiAgIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqICAgXG4gKi9cbiEgZnVuY3Rpb24odCwgZSkge1xuICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSBlKCkgOiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShcImdvQ2FydC5qc1wiLCBbXSwgZSkgOiBcIm9iamVjdFwiID09PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHNbXCJnb0NhcnQuanNcIl0gPSBlKCkgOiB0W1wiZ29DYXJ0LmpzXCJdID0gZSgpXG59KHdpbmRvdywgKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGUgPSB7fTtcblxuICAgICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhyKSB7XG4gICAgICAgICAgaWYgKGVbcl0pIHJldHVybiBlW3JdLmV4cG9ydHM7XG4gICAgICAgICAgdmFyIGEgPSBlW3JdID0ge1xuICAgICAgICAgICAgICBpOiByLFxuICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0W3JdLmNhbGwoYS5leHBvcnRzLCBhLCBhLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pLCBhLmwgPSAhMCwgYS5leHBvcnRzXG4gICAgICB9XG4gICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gdCwgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gZSwgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24odCwgZSwgcikge1xuICAgICAgICAgIF9fd2VicGFja19yZXF1aXJlX18ubyh0LCBlKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgZ2V0OiByXG4gICAgICAgICAgfSlcbiAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICB9KVxuICAgICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIGlmICgxICYgZSAmJiAodCA9IF9fd2VicGFja19yZXF1aXJlX18odCkpLCA4ICYgZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKDQgJiBlICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB0ICYmIHQgJiYgdC5fX2VzTW9kdWxlKSByZXR1cm4gdDtcbiAgICAgICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgaWYgKF9fd2VicGFja19yZXF1aXJlX18ucihyKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0XG4gICAgICAgICAgICAgIH0pLCAyICYgZSAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiB0KVxuICAgICAgICAgICAgICBmb3IgKHZhciBhIGluIHQpIF9fd2VicGFja19yZXF1aXJlX18uZChyLCBhLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdFtlXVxuICAgICAgICAgICAgICB9LmJpbmQobnVsbCwgYSkpO1xuICAgICAgICAgIHJldHVybiByXG4gICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgdmFyIGUgPSB0ICYmIHQuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdC5kZWZhdWx0XG4gICAgICAgICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZChlLCBcImFcIiwgZSksIGVcbiAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIGUpXG4gICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpXG4gIH0oW2Z1bmN0aW9uKHQsIGUsIHIpIHtcbiAgICAgIHZhciBhID0gcigzKSxcbiAgICAgICAgICBuID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuICAgICAgICAgIG8gPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2ksXG4gICAgICAgICAgaSA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuICAgICAgZnVuY3Rpb24gaGFzaF9zZXJpYWxpemVyKHQsIGUsIHIpIHtcbiAgICAgICAgICBpZiAoZS5tYXRjaChpKSkge1xuICAgICAgICAgICAgICAhIGZ1bmN0aW9uIGhhc2hfYXNzaWduKHQsIGUsIHIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgwID09PSBlLmxlbmd0aCkgcmV0dXJuIHQgPSByO1xuICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgICAgICAgbiA9IGEubWF0Y2goL15cXFsoLis/KVxcXSQvKTtcbiAgICAgICAgICAgICAgICAgIGlmIChcIltdXCIgPT09IGEpIHJldHVybiB0ID0gdCB8fCBbXSwgQXJyYXkuaXNBcnJheSh0KSA/IHQucHVzaChoYXNoX2Fzc2lnbihudWxsLCBlLCByKSkgOiAodC5fdmFsdWVzID0gdC5fdmFsdWVzIHx8IFtdLCB0Ll92YWx1ZXMucHVzaChoYXNoX2Fzc2lnbihudWxsLCBlLCByKSkpLCB0O1xuICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IG5bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSArbztcbiAgICAgICAgICAgICAgICAgICAgICBpc05hTihpKSA/ICh0ID0gdCB8fCB7fSlbb10gPSBoYXNoX2Fzc2lnbih0W29dLCBlLCByKSA6ICh0ID0gdCB8fCBbXSlbaV0gPSBoYXNoX2Fzc2lnbih0W2ldLCBlLCByKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHRbYV0gPSBoYXNoX2Fzc2lnbih0W2FdLCBlLCByKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0XG4gICAgICAgICAgICAgIH0odCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGUgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICByID0gbmV3IFJlZ0V4cChpKSxcbiAgICAgICAgICAgICAgICAgICAgICBhID0gL14oW15cXFtcXF1dKikvLmV4ZWModCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKGFbMV0gJiYgZS5wdXNoKGFbMV0pOyBudWxsICE9PSAoYSA9IHIuZXhlYyh0KSk7KSBlLnB1c2goYVsxXSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICAgICAgICB9KGUpLCByKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBhID0gdFtlXTtcbiAgICAgICAgICAgICAgYSA/IChBcnJheS5pc0FycmF5KGEpIHx8ICh0W2VdID0gW2FdKSwgdFtlXS5wdXNoKHIpKSA6IHRbZV0gPSByXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0cl9zZXJpYWxpemUodCwgZSwgcikge1xuICAgICAgICAgIHJldHVybiByID0gci5yZXBsYWNlKC8oXFxyKT9cXG4vZywgXCJcXHJcXG5cIiksIHIgPSAociA9IGVuY29kZVVSSUNvbXBvbmVudChyKSkucmVwbGFjZSgvJTIwL2csIFwiK1wiKSwgdCArICh0ID8gXCImXCIgOiBcIlwiKSArIGVuY29kZVVSSUNvbXBvbmVudChlKSArIFwiPVwiICsgclxuICAgICAgfVxuICAgICAgdC5leHBvcnRzID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIFwib2JqZWN0XCIgIT0gYShlKSA/IGUgPSB7XG4gICAgICAgICAgICAgIGhhc2g6ICEhZVxuICAgICAgICAgIH0gOiB2b2lkIDAgPT09IGUuaGFzaCAmJiAoZS5oYXNoID0gITApO1xuICAgICAgICAgIGZvciAodmFyIHIgPSBlLmhhc2ggPyB7fSA6IFwiXCIsIGkgPSBlLnNlcmlhbGl6ZXIgfHwgKGUuaGFzaCA/IGhhc2hfc2VyaWFsaXplciA6IHN0cl9zZXJpYWxpemUpLCBzID0gdCAmJiB0LmVsZW1lbnRzID8gdC5lbGVtZW50cyA6IFtdLCBjID0gT2JqZWN0LmNyZWF0ZShudWxsKSwgbCA9IDA7IGwgPCBzLmxlbmd0aDsgKytsKSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gc1tsXTtcbiAgICAgICAgICAgICAgaWYgKChlLmRpc2FibGVkIHx8ICF1LmRpc2FibGVkKSAmJiB1Lm5hbWUgJiYgKG8udGVzdCh1Lm5vZGVOYW1lKSAmJiAhbi50ZXN0KHUudHlwZSkpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZCA9IHUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBmID0gdS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGlmIChcImNoZWNrYm94XCIgIT09IHUudHlwZSAmJiBcInJhZGlvXCIgIT09IHUudHlwZSB8fCB1LmNoZWNrZWQgfHwgKGYgPSB2b2lkIDApLCBlLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFwiY2hlY2tib3hcIiAhPT0gdS50eXBlIHx8IHUuY2hlY2tlZCB8fCAoZiA9IFwiXCIpLCBcInJhZGlvXCIgPT09IHUudHlwZSAmJiAoY1t1Lm5hbWVdIHx8IHUuY2hlY2tlZCA/IHUuY2hlY2tlZCAmJiAoY1t1Lm5hbWVdID0gITApIDogY1t1Lm5hbWVdID0gITEpLCB2b2lkIDAgPT0gZiAmJiBcInJhZGlvXCIgPT0gdS50eXBlKSBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZikgY29udGludWU7XG4gICAgICAgICAgICAgICAgICBpZiAoXCJzZWxlY3QtbXVsdGlwbGVcIiAhPT0gdS50eXBlKSByID0gaShyLCBkLCBmKTtcbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGYgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBoID0gdS5vcHRpb25zLCB5ID0gITEsIHAgPSAwOyBwIDwgaC5sZW5ndGg7ICsrcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGhbcF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gZS5lbXB0eSAmJiAhbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gPSBtLnZhbHVlIHx8IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG0uc2VsZWN0ZWQgJiYgXyAmJiAoeSA9ICEwLCByID0gZS5oYXNoICYmIFwiW11cIiAhPT0gZC5zbGljZShkLmxlbmd0aCAtIDIpID8gaShyLCBkICsgXCJbXVwiLCBtLnZhbHVlKSA6IGkociwgZCwgbS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgfSF5ICYmIGUuZW1wdHkgJiYgKHIgPSBpKHIsIGQsIFwiXCIpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlLmVtcHR5KVxuICAgICAgICAgICAgICBmb3IgKHZhciBkIGluIGMpIGNbZF0gfHwgKHIgPSBpKHIsIGQsIFwiXCIpKTtcbiAgICAgICAgICByZXR1cm4gclxuICAgICAgfVxuICB9LCBmdW5jdGlvbih0LCBlLCByKSB7XG4gICAgICB0LmV4cG9ydHMgPSByKDQpXG4gIH0sIGZ1bmN0aW9uKHQsIGUsIHIpIHt9LCBmdW5jdGlvbih0LCBlKSB7XG4gICAgICBmdW5jdGlvbiBfdHlwZW9mMih0KSB7XG4gICAgICAgICAgcmV0dXJuIChfdHlwZW9mMiA9IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRcbiAgICAgICAgICB9IDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICByZXR1cm4gdCAmJiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBTeW1ib2wgJiYgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIHQgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIHRcbiAgICAgICAgICB9KSh0KVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdHlwZW9mKGUpIHtcbiAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT09IF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPyB0LmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3R5cGVvZjIodClcbiAgICAgICAgICB9IDogdC5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQgJiYgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU3ltYm9sICYmIHQuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiB0ICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKHQpXG4gICAgICAgICAgfSwgX3R5cGVvZihlKVxuICAgICAgfVxuICAgICAgdC5leHBvcnRzID0gX3R5cGVvZlxuICB9LCBmdW5jdGlvbih0LCBlLCByKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIHIucihlKTtcbiAgICAgIHIoMik7XG4gICAgICB2YXIgYSA9IFwiJHt7YW1vdW50fX1cIjtcblxuICAgICAgZnVuY3Rpb24gZm9ybWF0TW9uZXkodCwgZSkge1xuICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiB0ICYmICh0ID0gdC5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgICAgICAgdmFyIHIgPSBcIlwiLFxuICAgICAgICAgICAgICBuID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9LyxcbiAgICAgICAgICAgICAgbyA9IGUgfHwgYTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFdpdGhEZWxpbWl0ZXJzKHQpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IDIsXG4gICAgICAgICAgICAgICAgICByID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgdm9pZCAwICE9PSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiBcIixcIixcbiAgICAgICAgICAgICAgICAgIGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiB2b2lkIDAgIT09IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6IFwiLlwiO1xuICAgICAgICAgICAgICBpZiAoaXNOYU4odCkgfHwgbnVsbCA9PSB0KSByZXR1cm4gMDtcbiAgICAgICAgICAgICAgdmFyIG4gPSAodCA9ICh0IC8gMTAwKS50b0ZpeGVkKGUpKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAgIHJldHVybiBuWzBdLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgXCIkMVwiLmNvbmNhdChyKSkgKyAoblsxXSA/IGEgKyBuWzFdIDogXCJcIilcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoIChvLm1hdGNoKG4pWzFdKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJhbW91bnRcIjpcbiAgICAgICAgICAgICAgICAgIHIgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyh0LCAyKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiYW1vdW50X25vX2RlY2ltYWxzXCI6XG4gICAgICAgICAgICAgICAgICByID0gZm9ybWF0V2l0aERlbGltaXRlcnModCwgMCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImFtb3VudF93aXRoX2NvbW1hX3NlcGFyYXRvclwiOlxuICAgICAgICAgICAgICAgICAgciA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKHQsIDIsIFwiLlwiLCBcIixcIik7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImFtb3VudF9ub19kZWNpbWFsc193aXRoX2NvbW1hX3NlcGFyYXRvclwiOlxuICAgICAgICAgICAgICAgICAgciA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKHQsIDAsIFwiLlwiLCBcIixcIilcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG8ucmVwbGFjZShuLCByKVxuICAgICAgfVxuICAgICAgdmFyIG4gPSB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zOiBcIlVSTFNlYXJjaFBhcmFtc1wiIGluIHNlbGYsXG4gICAgICAgICAgaXRlcmFibGU6IFwiU3ltYm9sXCIgaW4gc2VsZiAmJiBcIml0ZXJhdG9yXCIgaW4gU3ltYm9sLFxuICAgICAgICAgIGJsb2I6IFwiRmlsZVJlYWRlclwiIGluIHNlbGYgJiYgXCJCbG9iXCIgaW4gc2VsZiAmJiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmxvYiwgITBcbiAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICExXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCksXG4gICAgICAgICAgZm9ybURhdGE6IFwiRm9ybURhdGFcIiBpbiBzZWxmLFxuICAgICAgICAgIGFycmF5QnVmZmVyOiBcIkFycmF5QnVmZmVyXCIgaW4gc2VsZlxuICAgICAgfTtcbiAgICAgIGlmIChuLmFycmF5QnVmZmVyKSB2YXIgbyA9IFtcIltvYmplY3QgSW50OEFycmF5XVwiLCBcIltvYmplY3QgVWludDhBcnJheV1cIiwgXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiLCBcIltvYmplY3QgSW50MTZBcnJheV1cIiwgXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiLCBcIltvYmplY3QgSW50MzJBcnJheV1cIiwgXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiLCBcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLCBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXSxcbiAgICAgICAgICBpID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQgJiYgby5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkgPiAtMVxuICAgICAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUodCkge1xuICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9PSB0eXBlb2YgdCAmJiAodCA9IFN0cmluZyh0KSksIC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH5dL2kudGVzdCh0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lXCIpO1xuICAgICAgICAgIHJldHVybiB0LnRvTG93ZXJDYXNlKClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodCkge1xuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiICE9PSB0eXBlb2YgdCAmJiAodCA9IFN0cmluZyh0KSksIHRcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXRlcmF0b3JGb3IodCkge1xuICAgICAgICAgIHZhciBlID0ge1xuICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlID0gdC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb25lOiB2b2lkIDAgPT09IGUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIG4uaXRlcmFibGUgJiYgKGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICAgIH0pLCBlXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIEhlYWRlcnModCkge1xuICAgICAgICAgIHRoaXMubWFwID0ge30sIHQgaW5zdGFuY2VvZiBIZWFkZXJzID8gdC5mb3JFYWNoKChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kKGUsIHQpXG4gICAgICAgICAgfSksIHRoaXMpIDogQXJyYXkuaXNBcnJheSh0KSA/IHQuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh0WzBdLCB0WzFdKVxuICAgICAgICAgIH0pLCB0aGlzKSA6IHQgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZChlLCB0W2VdKVxuICAgICAgICAgIH0pLCB0aGlzKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb25zdW1lZCh0KSB7XG4gICAgICAgICAgaWYgKHQuYm9keVVzZWQpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFwiQWxyZWFkeSByZWFkXCIpKTtcbiAgICAgICAgICB0LmJvZHlVc2VkID0gITBcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGUsIHIpIHtcbiAgICAgICAgICAgICAgdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGUodC5yZXN1bHQpXG4gICAgICAgICAgICAgIH0sIHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcih0LmVycm9yKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcih0KSB7XG4gICAgICAgICAgdmFyIGUgPSBuZXcgRmlsZVJlYWRlcixcbiAgICAgICAgICAgICAgciA9IGZpbGVSZWFkZXJSZWFkeShlKTtcbiAgICAgICAgICByZXR1cm4gZS5yZWFkQXNBcnJheUJ1ZmZlcih0KSwgclxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWZmZXJDbG9uZSh0KSB7XG4gICAgICAgICAgaWYgKHQuc2xpY2UpIHJldHVybiB0LnNsaWNlKDApO1xuICAgICAgICAgIHZhciBlID0gbmV3IFVpbnQ4QXJyYXkodC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm4gZS5zZXQobmV3IFVpbnQ4QXJyYXkodCkpLCBlLmJ1ZmZlclxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBCb2R5KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJvZHlVc2VkID0gITEsIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUluaXQgPSB0LCB0ID8gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHQgPyB0aGlzLl9ib2R5VGV4dCA9IHQgOiBuLmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KSA/IHRoaXMuX2JvZHlCbG9iID0gdCA6IG4uZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCkgPyB0aGlzLl9ib2R5Rm9ybURhdGEgPSB0IDogbi5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpID8gdGhpcy5fYm9keVRleHQgPSB0LnRvU3RyaW5nKCkgOiBuLmFycmF5QnVmZmVyICYmIG4uYmxvYiAmJiAoKGUgPSB0KSAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihlKSkgPyAodGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUodC5idWZmZXIpLCB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSkgOiBuLmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KSB8fCBpKHQpKSA/IHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKHQpIDogdGhpcy5fYm9keVRleHQgPSB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpIDogdGhpcy5fYm9keVRleHQgPSBcIlwiLCB0aGlzLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpIHx8IChcInN0cmluZ1wiID09PSB0eXBlb2YgdCA/IHRoaXMuaGVhZGVycy5zZXQoXCJjb250ZW50LXR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIikgOiB0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlID8gdGhpcy5oZWFkZXJzLnNldChcImNvbnRlbnQtdHlwZVwiLCB0aGlzLl9ib2R5QmxvYi50eXBlKSA6IG4uc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KSAmJiB0aGlzLmhlYWRlcnMuc2V0KFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIikpXG4gICAgICAgICAgfSwgbi5ibG9iICYmICh0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBjb25zdW1lZCh0aGlzKTtcbiAgICAgICAgICAgICAgaWYgKHQpIHJldHVybiB0O1xuICAgICAgICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYlwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgICB9LCB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPyBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKSA6IHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICAgIH0pLCB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBjb25zdW1lZCh0aGlzKTtcbiAgICAgICAgICAgICAgaWYgKHQpIHJldHVybiB0O1xuICAgICAgICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBGaWxlUmVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgIHIgPSBmaWxlUmVhZGVyUmVhZHkoZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZS5yZWFkQXNUZXh0KHQpLCByXG4gICAgICAgICAgICAgIH0odGhpcy5fYm9keUJsb2IpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSBuZXcgVWludDhBcnJheSh0KSwgciA9IG5ldyBBcnJheShlLmxlbmd0aCksIGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykgclthXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZVthXSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gci5qb2luKFwiXCIpXG4gICAgICAgICAgICAgIH0odGhpcy5fYm9keUFycmF5QnVmZmVyKSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dFwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgICAgICB9LCBuLmZvcm1EYXRhICYmICh0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgICAgICB9KSwgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgICAgICAgfSwgdGhpc1xuICAgICAgfVxuICAgICAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIHQgPSBub3JtYWxpemVOYW1lKHQpLCBlID0gbm9ybWFsaXplVmFsdWUoZSk7XG4gICAgICAgICAgdmFyIHIgPSB0aGlzLm1hcFt0XTtcbiAgICAgICAgICB0aGlzLm1hcFt0XSA9IHIgPyByICsgXCIsIFwiICsgZSA6IGVcbiAgICAgIH0sIEhlYWRlcnMucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZSh0KV1cbiAgICAgIH0sIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICByZXR1cm4gdCA9IG5vcm1hbGl6ZU5hbWUodCksIHRoaXMuaGFzKHQpID8gdGhpcy5tYXBbdF0gOiBudWxsXG4gICAgICB9LCBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUodCkpXG4gICAgICB9LCBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZSh0KV0gPSBub3JtYWxpemVWYWx1ZShlKVxuICAgICAgfSwgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMubWFwKSB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShyKSAmJiB0LmNhbGwoZSwgdGhpcy5tYXBbcl0sIHIsIHRoaXMpXG4gICAgICB9LCBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSBbXTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mb3JFYWNoKChmdW5jdGlvbihlLCByKSB7XG4gICAgICAgICAgICAgIHQucHVzaChyKVxuICAgICAgICAgIH0pKSwgaXRlcmF0b3JGb3IodClcbiAgICAgIH0sIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0ID0gW107XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICB0LnB1c2goZSlcbiAgICAgICAgICB9KSksIGl0ZXJhdG9yRm9yKHQpXG4gICAgICB9LCBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQgPSBbXTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mb3JFYWNoKChmdW5jdGlvbihlLCByKSB7XG4gICAgICAgICAgICAgIHQucHVzaChbciwgZV0pXG4gICAgICAgICAgfSkpLCBpdGVyYXRvckZvcih0KVxuICAgICAgfSwgbi5pdGVyYWJsZSAmJiAoSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMpO1xuICAgICAgdmFyIHMgPSBbXCJERUxFVEVcIiwgXCJHRVRcIiwgXCJIRUFEXCIsIFwiT1BUSU9OU1wiLCBcIlBPU1RcIiwgXCJQVVRcIl07XG5cbiAgICAgIGZ1bmN0aW9uIFJlcXVlc3QodCwgZSkge1xuICAgICAgICAgIHZhciByID0gKGUgPSBlIHx8IHt9KS5ib2R5O1xuICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICAgICAgICBpZiAodC5ib2R5VXNlZCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFscmVhZHkgcmVhZFwiKTtcbiAgICAgICAgICAgICAgdGhpcy51cmwgPSB0LnVybCwgdGhpcy5jcmVkZW50aWFscyA9IHQuY3JlZGVudGlhbHMsIGUuaGVhZGVycyB8fCAodGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnModC5oZWFkZXJzKSksIHRoaXMubWV0aG9kID0gdC5tZXRob2QsIHRoaXMubW9kZSA9IHQubW9kZSwgdGhpcy5zaWduYWwgPSB0LnNpZ25hbCwgciB8fCBudWxsID09IHQuX2JvZHlJbml0IHx8IChyID0gdC5fYm9keUluaXQsIHQuYm9keVVzZWQgPSAhMClcbiAgICAgICAgICB9IGVsc2UgdGhpcy51cmwgPSBTdHJpbmcodCk7XG4gICAgICAgICAgaWYgKHRoaXMuY3JlZGVudGlhbHMgPSBlLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgXCJzYW1lLW9yaWdpblwiLCAhZS5oZWFkZXJzICYmIHRoaXMuaGVhZGVycyB8fCAodGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoZS5oZWFkZXJzKSksIHRoaXMubWV0aG9kID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcy5pbmRleE9mKGUpID4gLTEgPyBlIDogdFxuICAgICAgICAgICAgICB9KGUubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8IFwiR0VUXCIpLCB0aGlzLm1vZGUgPSBlLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGwsIHRoaXMuc2lnbmFsID0gZS5zaWduYWwgfHwgdGhpcy5zaWduYWwsIHRoaXMucmVmZXJyZXIgPSBudWxsLCAoXCJHRVRcIiA9PT0gdGhpcy5tZXRob2QgfHwgXCJIRUFEXCIgPT09IHRoaXMubWV0aG9kKSAmJiByKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHNcIik7XG4gICAgICAgICAgdGhpcy5faW5pdEJvZHkocilcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVjb2RlKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IG5ldyBGb3JtRGF0YTtcbiAgICAgICAgICByZXR1cm4gdC50cmltKCkuc3BsaXQoXCImXCIpLmZvckVhY2goKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciByID0gdC5zcGxpdChcIj1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgYSA9IHIuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIG4gPSByLmpvaW4oXCI9XCIpLnJlcGxhY2UoL1xcKy9nLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICBlLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQoYSksIGRlY29kZVVSSUNvbXBvbmVudChuKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSwgZVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwYXJzZUhlYWRlcnModCkge1xuICAgICAgICAgIHZhciBlID0gbmV3IEhlYWRlcnM7XG4gICAgICAgICAgcmV0dXJuIHQucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgXCIgXCIpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICB2YXIgciA9IHQuc3BsaXQoXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgYSA9IHIuc2hpZnQoKS50cmltKCk7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IHIuam9pbihcIjpcIikudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgZS5hcHBlbmQoYSwgbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSwgZVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBSZXNwb25zZSh0LCBlKSB7XG4gICAgICAgICAgZSB8fCAoZSA9IHt9KSwgdGhpcy50eXBlID0gXCJkZWZhdWx0XCIsIHRoaXMuc3RhdHVzID0gdm9pZCAwID09PSBlLnN0YXR1cyA/IDIwMCA6IGUuc3RhdHVzLCB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwLCB0aGlzLnN0YXR1c1RleHQgPSBcInN0YXR1c1RleHRcIiBpbiBlID8gZS5zdGF0dXNUZXh0IDogXCJPS1wiLCB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhlLmhlYWRlcnMpLCB0aGlzLnVybCA9IGUudXJsIHx8IFwiXCIsIHRoaXMuX2luaXRCb2R5KHQpXG4gICAgICB9XG4gICAgICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7XG4gICAgICAgICAgICAgIGJvZHk6IHRoaXMuX2JvZHlJbml0XG4gICAgICAgICAgfSlcbiAgICAgIH0sIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSksIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpLCBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybFxuICAgICAgICAgIH0pXG4gICAgICB9LCBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0ID0gbmV3IFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHQudHlwZSA9IFwiZXJyb3JcIiwgdFxuICAgICAgfTtcbiAgICAgIHZhciBjID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XTtcbiAgICAgIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgIGlmICgtMSA9PT0gYy5pbmRleE9mKGUpKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgc3RhdHVzIGNvZGVcIik7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICAgIHN0YXR1czogZSxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdmFyIGwgPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgbmV3IGxcbiAgICAgIH0gY2F0Y2ggKGgpIHtcbiAgICAgICAgICAobCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdCwgdGhpcy5uYW1lID0gZTtcbiAgICAgICAgICAgICAgdmFyIHIgPSBFcnJvcih0KTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFjayA9IHIuc3RhY2tcbiAgICAgICAgICB9KS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSksIGwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbFxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmZXRjaCh0LCBlKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihyLCBhKSB7XG4gICAgICAgICAgICAgIHZhciBvID0gbmV3IFJlcXVlc3QodCwgZSk7XG4gICAgICAgICAgICAgIGlmIChvLnNpZ25hbCAmJiBvLnNpZ25hbC5hYm9ydGVkKSByZXR1cm4gYShuZXcgbChcIkFib3J0ZWRcIiwgXCJBYm9ydEVycm9yXCIpKTtcbiAgICAgICAgICAgICAgdmFyIGkgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICAgICAgICAgICAgICBpLmFib3J0KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBpLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBpLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKGkuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgXCJcIilcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB0LnVybCA9IFwicmVzcG9uc2VVUkxcIiBpbiBpID8gaS5yZXNwb25zZVVSTCA6IHQuaGVhZGVycy5nZXQoXCJYLVJlcXVlc3QtVVJMXCIpO1xuICAgICAgICAgICAgICAgICAgdmFyIGUgPSBcInJlc3BvbnNlXCIgaW4gaSA/IGkucmVzcG9uc2UgOiBpLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgIHIobmV3IFJlc3BvbnNlKGUsIHQpKVxuICAgICAgICAgICAgICB9LCBpLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGEobmV3IFR5cGVFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWRcIikpXG4gICAgICAgICAgICAgIH0sIGkub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBhKG5ldyBUeXBlRXJyb3IoXCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkXCIpKVxuICAgICAgICAgICAgICB9LCBpLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGEobmV3IGwoXCJBYm9ydGVkXCIsIFwiQWJvcnRFcnJvclwiKSlcbiAgICAgICAgICAgICAgfSwgaS5vcGVuKG8ubWV0aG9kLCBvLnVybCwgITApLCBcImluY2x1ZGVcIiA9PT0gby5jcmVkZW50aWFscyA/IGkud2l0aENyZWRlbnRpYWxzID0gITAgOiBcIm9taXRcIiA9PT0gby5jcmVkZW50aWFscyAmJiAoaS53aXRoQ3JlZGVudGlhbHMgPSAhMSksIFwicmVzcG9uc2VUeXBlXCIgaW4gaSAmJiBuLmJsb2IgJiYgKGkucmVzcG9uc2VUeXBlID0gXCJibG9iXCIpLCBvLmhlYWRlcnMuZm9yRWFjaCgoZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgaS5zZXRSZXF1ZXN0SGVhZGVyKGUsIHQpXG4gICAgICAgICAgICAgIH0pKSwgby5zaWduYWwgJiYgKG8uc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBhYm9ydFhociksIGkub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICA0ID09PSBpLnJlYWR5U3RhdGUgJiYgby5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0WGhyKVxuICAgICAgICAgICAgICB9KSwgaS5zZW5kKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBvLl9ib2R5SW5pdCA/IG51bGwgOiBvLl9ib2R5SW5pdClcbiAgICAgICAgICB9KSlcbiAgICAgIH1cbiAgICAgIGZldGNoLnBvbHlmaWxsID0gITAsIHNlbGYuZmV0Y2ggfHwgKHNlbGYuZmV0Y2ggPSBmZXRjaCwgc2VsZi5IZWFkZXJzID0gSGVhZGVycywgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdCwgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlKTtcbiAgICAgIHZhciB1ID0gcigwKSxcbiAgICAgICAgICBkID0gci5uKHUpO1xuXG4gICAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0LCBlKSB7XG4gICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gZVtyXTtcbiAgICAgICAgICAgICAgYS5lbnVtZXJhYmxlID0gYS5lbnVtZXJhYmxlIHx8ICExLCBhLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gYSAmJiAoYS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIGEua2V5LCBhKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZnVuY3Rpb24gR29DYXJ0KHQpIHtcbiAgICAgICAgICAgICAgISBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgfSh0aGlzLCBHb0NhcnQpO1xuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAgICAgICAgICAgY2FydE1vZGFsRmFpbDogXCIuanMtZ28tY2FydC1tb2RhbC1mYWlsXCIsXG4gICAgICAgICAgICAgICAgICBjYXJ0TW9kYWxGYWlsQ2xvc2U6IFwiLmpzLWdvLWNhcnQtbW9kYWwtZmFpbC1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgY2FydE1vZGFsOiBcIi5qcy1nby1jYXJ0LW1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICBjYXJ0TW9kYWxDbG9zZTogXCIuanMtZ28tY2FydC1tb2RhbC1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgY2FydE1vZGFsQ29udGVudDogXCIuanMtZ28tY2FydC1tb2RhbC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBjYXJ0RHJhd2VyOiBcIi5qcy1nby1jYXJ0LWRyYXdlclwiLFxuICAgICAgICAgICAgICAgICAgY2FydERyYXdlckNvbnRlbnQ6IFwiLmpzLWdvLWNhcnQtZHJhd2VyLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIGNhcnREcmF3ZXJTdWJUb3RhbDogXCIuanMtZ28tY2FydC1kcmF3ZXItc3VidG90YWxcIixcbiAgICAgICAgICAgICAgICAgIGNhcnREcmF3ZXJGb290ZXI6IFwiLmpzLWdvLWNhcnQtZHJhd2VyLWZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgY2FydERyYXdlckNsb3NlOiBcIi5qcy1nby1jYXJ0LWRyYXdlci1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgY2FydE1pbmlDYXJ0OiBcIi5qcy1nby1jYXJ0LW1pbmktY2FydFwiLFxuICAgICAgICAgICAgICAgICAgY2FydE1pbmlDYXJ0Q29udGVudDogXCIuanMtZ28tY2FydC1taW5pLWNhcnQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgY2FydE1pbmlDYXJ0U3ViVG90YWw6IFwiLmpzLWdvLWNhcnQtbWluaS1jYXJ0LXN1YnRvdGFsXCIsXG4gICAgICAgICAgICAgICAgICBjYXJ0TWluaUNhcnRGb290ZXI6IFwiLmpzLWdvLWNhcnQtbWluaS1jYXJ0LWZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgY2FydFRyaWdnZXI6IFwiLmpzLWdvLWNhcnQtdHJpZ2dlclwiLFxuICAgICAgICAgICAgICAgICAgY2FydE92ZXJsYXk6IFwiLmpzLWdvLWNhcnQtb3ZlcmxheVwiLFxuICAgICAgICAgICAgICAgICAgY2FydENvdW50OiBcIi5qcy1nby1jYXJ0LWNvdW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydDogXCIuanMtZ28tY2FydC1hZGQtdG8tY2FydFwiLFxuICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNhcnQ6IFwiLmpzLWdvLWNhcnQtcmVtb3ZlLWZyb20tY2FydFwiLFxuICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNhcnROb0RvdDogXCJqcy1nby1jYXJ0LXJlbW92ZS1mcm9tLWNhcnRcIixcbiAgICAgICAgICAgICAgICAgIGl0ZW1RdWFudGl0eTogXCIuanMtZ28tY2FydC1xdWFudGl0eVwiLFxuICAgICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5UGx1czogXCIuanMtZ28tY2FydC1xdWFudGl0eS1wbHVzXCIsXG4gICAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHlNaW51czogXCIuanMtZ28tY2FydC1xdWFudGl0eS1taW51c1wiLFxuICAgICAgICAgICAgICAgICAgY2FydE1vZGU6IFwiZHJhd2VyXCIsXG4gICAgICAgICAgICAgICAgICBkcmF3ZXJEaXJlY3Rpb246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlNb2RhbDogITEsXG4gICAgICAgICAgICAgICAgICBtb25leUZvcm1hdDogXCIke3thbW91bnR9fVwiXG4gICAgICAgICAgICAgIH0sIHQpLCB0aGlzLmNhcnRNb2RhbEZhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGVmYXVsdHMuY2FydE1vZGFsRmFpbCksIHRoaXMuY2FydE1vZGFsRmFpbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRlZmF1bHRzLmNhcnRNb2RhbEZhaWxDbG9zZSksIHRoaXMuY2FydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRlZmF1bHRzLmNhcnRNb2RhbCksIHRoaXMuY2FydE1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZGVmYXVsdHMuY2FydE1vZGFsQ2xvc2UpLCB0aGlzLmNhcnRNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGVmYXVsdHMuY2FydE1vZGFsQ29udGVudCksIHRoaXMuY2FydERyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kZWZhdWx0cy5jYXJ0RHJhd2VyKSwgdGhpcy5jYXJ0RHJhd2VyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kZWZhdWx0cy5jYXJ0RHJhd2VyQ29udGVudCksIHRoaXMuY2FydERyYXdlclN1YlRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRlZmF1bHRzLmNhcnREcmF3ZXJTdWJUb3RhbCksIHRoaXMuY2FydERyYXdlckZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kZWZhdWx0cy5jYXJ0RHJhd2VyRm9vdGVyKSwgdGhpcy5jYXJ0RHJhd2VyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGVmYXVsdHMuY2FydERyYXdlckNsb3NlKSwgdGhpcy5jYXJ0TWluaUNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGVmYXVsdHMuY2FydE1pbmlDYXJ0KSwgdGhpcy5jYXJ0TWluaUNhcnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRlZmF1bHRzLmNhcnRNaW5pQ2FydENvbnRlbnQpLCB0aGlzLmNhcnRNaW5pQ2FydFN1YlRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRlZmF1bHRzLmNhcnRNaW5pQ2FydFN1YlRvdGFsKSwgdGhpcy5jYXJ0TWluaUNhcnRGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGVmYXVsdHMuY2FydE1pbmlDYXJ0Rm9vdGVyKSwgdGhpcy5jYXJ0VHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kZWZhdWx0cy5jYXJ0VHJpZ2dlciksIHRoaXMuY2FydE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGVmYXVsdHMuY2FydE92ZXJsYXkpLCB0aGlzLmNhcnRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5kZWZhdWx0cy5jYXJ0Q291bnQpLCB0aGlzLmFkZFRvQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5kZWZhdWx0cy5hZGRUb0NhcnQpLCB0aGlzLnJlbW92ZUZyb21DYXJ0ID0gdGhpcy5kZWZhdWx0cy5yZW1vdmVGcm9tQ2FydCwgdGhpcy5yZW1vdmVGcm9tQ2FydE5vRG90ID0gdGhpcy5kZWZhdWx0cy5yZW1vdmVGcm9tQ2FydE5vRG90LCB0aGlzLml0ZW1RdWFudGl0eSA9IHRoaXMuZGVmYXVsdHMuaXRlbVF1YW50aXR5LCB0aGlzLml0ZW1RdWFudGl0eVBsdXMgPSB0aGlzLmRlZmF1bHRzLml0ZW1RdWFudGl0eVBsdXMsIHRoaXMuaXRlbVF1YW50aXR5TWludXMgPSB0aGlzLmRlZmF1bHRzLml0ZW1RdWFudGl0eU1pbnVzLCB0aGlzLmNhcnRNb2RlID0gdGhpcy5kZWZhdWx0cy5jYXJ0TW9kZSwgdGhpcy5kcmF3ZXJEaXJlY3Rpb24gPSB0aGlzLmRlZmF1bHRzLmRyYXdlckRpcmVjdGlvbiwgdGhpcy5kaXNwbGF5TW9kYWwgPSB0aGlzLmRlZmF1bHRzLmRpc3BsYXlNb2RhbCwgdGhpcy5tb25leUZvcm1hdCA9IHRoaXMuZGVmYXVsdHMubW9uZXlGb3JtYXQsIHRoaXMuaW5pdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB0LCBlLCByO1xuICAgICAgICAgIHJldHVybiB0ID0gR29DYXJ0LCByID0gW3tcbiAgICAgICAgICAgICAga2V5OiBcInJlbW92ZUl0ZW1BbmltYXRpb25cIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgIHQuY2xhc3NMaXN0LmFkZChcImlzLWludmlzaWJsZVwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfV0sIChlID0gW3tcbiAgICAgICAgICAgICAga2V5OiBcImluaXRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaENhcnQoKSwgdGhpcy5pc0RyYXdlck1vZGUgJiYgdGhpcy5zZXREcmF3ZXJEaXJlY3Rpb24oKSwgdGhpcy5hZGRUb0NhcnQuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHIucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHQuYWRkSXRlbVRvQ2FydChhKVxuICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgfSkpLCB0aGlzLmNhcnRUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdC5pc0RyYXdlck1vZGUgPyB0Lm9wZW5DYXJ0RHJhd2VyKCkgOiB0Lm9wZW5NaW5pQ2FydCgpLCB0Lm9wZW5DYXJ0T3ZlcmxheSgpXG4gICAgICAgICAgICAgICAgICB9KSksIHRoaXMuY2FydE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0LmNsb3NlRmFpbE1vZGFsKCksIHQuY2xvc2VDYXJ0TW9kYWwoKSwgdC5pc0RyYXdlck1vZGUgPyB0LmNsb3NlQ2FydERyYXdlcigpIDogdC5jbG9zZU1pbmlDYXJ0KCksIHQuY2xvc2VDYXJ0T3ZlcmxheSgpXG4gICAgICAgICAgICAgICAgICB9KSksIHRoaXMuaXNEcmF3ZXJNb2RlICYmIHRoaXMuY2FydERyYXdlckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdC5jbG9zZUNhcnREcmF3ZXIoKSwgdC5jbG9zZUNhcnRPdmVybGF5KClcbiAgICAgICAgICAgICAgICAgIH0pKSwgdGhpcy5kaXNwbGF5TW9kYWwgJiYgdGhpcy5jYXJ0TW9kYWxDbG9zZS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0LmNsb3NlRmFpbE1vZGFsKCksIHQuY2xvc2VDYXJ0TW9kYWwoKSwgdC5pc0RyYXdlck1vZGUgPyB0LmNsb3NlQ2FydERyYXdlcigpIDogdC5jbG9zZU1pbmlDYXJ0KCksIHQuY2xvc2VDYXJ0T3ZlcmxheSgpXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICB9KSksIHRoaXMuY2FydE1vZGFsRmFpbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdC5jbG9zZUZhaWxNb2RhbCgpLCB0LmNsb3NlQ2FydE1vZGFsKCksIHQuaXNEcmF3ZXJNb2RlID8gdC5jbG9zZUNhcnREcmF3ZXIoKSA6IHQuY2xvc2VNaW5pQ2FydCgpLCB0LmNsb3NlQ2FydE92ZXJsYXkoKVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJmZXRjaENhcnRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5mZXRjaChcIi9jYXJ0LmpzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lmpzb24oKVxuICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5mZXRjaEhhbmRsZXIociwgdClcbiAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IGUuYWpheFJlcXVlc3RGYWlsKCksIG5ldyBFcnJvcih0KVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJhZGRJdGVtVG9DYXJ0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIuY29uY2F0KHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICBhID0gZCgpKHIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogITBcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5mZXRjaChcIi9jYXJ0L2FkZC5qc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYSlcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5qc29uKClcbiAgICAgICAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuYWRkSXRlbVRvQ2FydEhhbmRsZXIodClcbiAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IGUuYWpheFJlcXVlc3RGYWlsKCksIG5ldyBFcnJvcih0KVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJyZW1vdmVJdGVtXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuZmV0Y2goXCIvY2FydC9jaGFuZ2UuanNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB0XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5qc29uKClcbiAgICAgICAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5mZXRjaENhcnQoKVxuICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZS5hamF4UmVxdWVzdEZhaWwoKSwgbmV3IEVycm9yKHQpXG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcImNoYW5nZUl0ZW1RdWFudGl0eVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmZldGNoKFwiL2NhcnQvY2hhbmdlLmpzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTogdFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuanNvbigpXG4gICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIuZmV0Y2hDYXJ0KClcbiAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IHIuYWpheFJlcXVlc3RGYWlsKCksIG5ldyBFcnJvcih0KVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJjYXJ0SXRlbUNvdW50XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcnRDb3VudC5pbm5lckhUTUwgPSB0Lml0ZW1fY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcImZldGNoQW5kT3BlbkNhcnRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaENhcnQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHQuaXNEcmF3ZXJNb2RlID8gdC5vcGVuQ2FydERyYXdlcigpIDogdC5vcGVuTWluaUNhcnQoKSwgdC5vcGVuQ2FydE92ZXJsYXkoKVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJmZXRjaEFuZE9wZW5Nb2RhbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaENhcnQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGUucmVuZGVyQ2FydE1vZGFsKHQpLCBlLm9wZW5DYXJ0TW9kYWwoKSwgZS5vcGVuQ2FydE92ZXJsYXkoKVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJmZXRjaEhhbmRsZXJcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydEl0ZW1Db3VudCh0KSwgdGhpcy5pc0RyYXdlck1vZGUgPyAwID09PSB0Lml0ZW1fY291bnQgPyAodGhpcy5yZW5kZXJCbGFua0NhcnREcmF3ZXIoKSwgdGhpcy5jYXJ0RHJhd2VyRm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZpc2libGVcIikpIDogKHRoaXMucmVuZGVyRHJhd2VyQ2FydCh0KSwgdGhpcy5jYXJ0RHJhd2VyRm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZpc2libGVcIiksIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGUgJiYgZSh0KSkgOiAwID09PSB0Lml0ZW1fY291bnQgPyAodGhpcy5yZW5kZXJCbGFua01pbmlDYXJ0KCksIHRoaXMuY2FydE1pbmlDYXJ0Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZpc2libGVcIikpIDogKHRoaXMucmVuZGVyTWluaUNhcnQodCksIHRoaXMuY2FydE1pbmlDYXJ0Rm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZpc2libGVcIiksIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGUgJiYgZSh0KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcImFkZEl0ZW1Ub0NhcnRIYW5kbGVyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TW9kYWwgPyB0aGlzLmZldGNoQW5kT3Blbk1vZGFsKHQpIDogdGhpcy5mZXRjaEFuZE9wZW5DYXJ0KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcImFqYXhSZXF1ZXN0RmFpbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wZW5GYWlsTW9kYWwoKSwgdGhpcy5vcGVuQ2FydE92ZXJsYXkoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwicmVuZGVyQ2FydE1vZGFsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2FydE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICB2YXIgZSA9IHQudmFyaWFudF90aXRsZTtcbiAgICAgICAgICAgICAgICAgIGUgPSBudWxsID09PSBlID8gXCJcIiA6IFwiKFwiLmNvbmNhdChlLCBcIilcIik7XG4gICAgICAgICAgICAgICAgICB2YXIgciA9ICdcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LW1vZGFsLWl0ZW1cIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX19pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuY29uY2F0KHQuaW1hZ2UsICcpO1wiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX2luZm9cIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIicpLmNvbmNhdCh0LnVybCwgJ1wiIGNsYXNzPVwiZ28tY2FydC1pdGVtX190aXRsZVwiPicpLmNvbmNhdCh0LnByb2R1Y3RfdGl0bGUsIFwiIFwiKS5jb25jYXQoZSwgXCI8L2E+IHdhcyBhZGRlZCB0byB5b3VyIGNhcnQuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICBcIik7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcnRNb2RhbENvbnRlbnQuaW5uZXJIVE1MICs9IHJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcInJlbmRlckRyYXdlckNhcnRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJDYXJ0RHJhd2VyKCksIHQuaXRlbXMuZm9yRWFjaCgoZnVuY3Rpb24odCwgcikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gdC52YXJpYW50X3RpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IGEgJiYgKGEgPSBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmRpc2NvdW50ZWRfcHJpY2UgPCB0Lm9yaWdpbmFsX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbGFnZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvLWNhcnQtaXRlbV9fc2luZ2xlXCIgZGF0YS1saW5lPVwiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChOdW1iZXIociArIDEpLCAnXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvLWNhcnQtaXRlbV9faW5mby13cmFwcGVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX2ltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodC5pbWFnZSwgJyk7XCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX2luZm9cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh0LnVybCwgJ1wiIGNsYXNzPVwiZ28tY2FydC1pdGVtX190aXRsZVwiPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHQucHJvZHVjdF90aXRsZSwgJzwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3ZhcmlhbnRcIj4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChhLCAnPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX19xdWFudGl0eVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ28tY2FydC1pdGVtX19xdWFudGl0eS1sYWJlbFwiPlF1YW50aXR5OiA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3F1YW50aXR5LWJ1dHRvbiBqcy1nby1jYXJ0LXF1YW50aXR5LW1pbnVzXCI+LTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3F1YW50aXR5LW51bWJlciBqcy1nby1jYXJ0LXF1YW50aXR5XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodC5xdWFudGl0eSwgJ1wiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ28tY2FydC1pdGVtX19xdWFudGl0eS1idXR0b24ganMtZ28tY2FydC1xdWFudGl0eS1wbHVzXCI+Kzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Vfd3JhcHBlclwiPiAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3ByaWNlLS1vbGRcIj4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChmb3JtYXRNb25leSh0Lm9yaWdpbmFsX3ByaWNlLCBlLm1vbmV5Rm9ybWF0KSwgJzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3ByaWNlLS1uZXdcIj4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChmb3JtYXRNb25leSh0LmRpc2NvdW50ZWRfcHJpY2UsIGUubW9uZXlGb3JtYXQpLCAnPC9kaXY+XFxuICA8L2Rpdj5cXG4gICAgPGEgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3JlbW92ZSAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChlLnJlbW92ZUZyb21DYXJ0Tm9Eb3QsICdcIj5SZW1vdmU8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvLWNhcnQtaXRlbV9fc2luZ2xlXCIgZGF0YS1saW5lPVwiJy5jb25jYXQoTnVtYmVyKHIgKyAxKSwgJ1wiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX2luZm8td3JhcHBlclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX19pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcpLmNvbmNhdCh0LmltYWdlLCAnKTtcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvLWNhcnQtaXRlbV9faW5mb1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIicpLmNvbmNhdCh0LnVybCwgJ1wiIGNsYXNzPVwiZ28tY2FydC1pdGVtX190aXRsZVwiPicpLmNvbmNhdCh0LnByb2R1Y3RfdGl0bGUsICc8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX192YXJpYW50XCI+JykuY29uY2F0KGEsICc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3F1YW50aXR5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3F1YW50aXR5LWxhYmVsXCI+UXVhbnRpdHk6IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdvLWNhcnQtaXRlbV9fcXVhbnRpdHktYnV0dG9uIGpzLWdvLWNhcnQtcXVhbnRpdHktbWludXNcIj4tPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImdvLWNhcnQtaXRlbV9fcXVhbnRpdHktbnVtYmVyIGpzLWdvLWNhcnQtcXVhbnRpdHlcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCInKS5jb25jYXQodC5xdWFudGl0eSwgJ1wiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ28tY2FydC1pdGVtX19xdWFudGl0eS1idXR0b24ganMtZ28tY2FydC1xdWFudGl0eS1wbHVzXCI+Kzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX19wcmljZVwiPicpLmNvbmNhdChmb3JtYXRNb25leSh0LmxpbmVfcHJpY2UsIGUubW9uZXlGb3JtYXQpLCAnPC9kaXY+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3JlbW92ZSAnKS5jb25jYXQoZS5yZW1vdmVGcm9tQ2FydE5vRG90LCAnXCI+UmVtb3ZlPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGUuY2FydERyYXdlckNvbnRlbnQuaW5uZXJIVE1MICs9IG5cbiAgICAgICAgICAgICAgICAgIH0pKSwgdGhpcy5jYXJ0RHJhd2VyU3ViVG90YWwuaW5uZXJIVE1MID0gZm9ybWF0TW9uZXkodC50b3RhbF9wcmljZSwgdGhpcy5tb25leUZvcm1hdCksIHRoaXMuY2FydERyYXdlclN1YlRvdGFsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmlzaWJsZVwiKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnJlbW92ZUZyb21DYXJ0KS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBHb0NhcnQucmVtb3ZlSXRlbUFuaW1hdGlvbih0LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlSXRlbShyKVxuICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgfSkpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuaXRlbVF1YW50aXR5UGx1cykuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IE51bWJlcih0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihlLml0ZW1RdWFudGl0eSkudmFsdWUpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jaGFuZ2VJdGVtUXVhbnRpdHkociwgYSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgIH0pKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLml0ZW1RdWFudGl0eU1pbnVzKS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gTnVtYmVyKHQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGUuaXRlbVF1YW50aXR5KS52YWx1ZSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNoYW5nZUl0ZW1RdWFudGl0eShyLCBhKSwgMCA9PT0gTnVtYmVyKHQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGUuaXRlbVF1YW50aXR5KS52YWx1ZSAtIDEpICYmIEdvQ2FydC5yZW1vdmVJdGVtQW5pbWF0aW9uKHQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwicmVuZGVyTWluaUNhcnRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJNaW5pQ2FydCgpLCB0Lml0ZW1zLmZvckVhY2goKGZ1bmN0aW9uKHQsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHQudmFyaWFudF90aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICBudWxsID09PSBhICYmIChhID0gXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAnXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX19zaW5nbGVcIiBkYXRhLWxpbmU9XCInLmNvbmNhdChOdW1iZXIociArIDEpLCAnXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvLWNhcnQtaXRlbV9faW5mby13cmFwcGVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX2ltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJykuY29uY2F0KHQuaW1hZ2UsICcpO1wiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ28tY2FydC1pdGVtX19pbmZvXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJykuY29uY2F0KHQudXJsLCAnXCIgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3RpdGxlXCI+JykuY29uY2F0KHQucHJvZHVjdF90aXRsZSwgJzwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3ZhcmlhbnRcIj4nKS5jb25jYXQoYSwgJzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvLWNhcnQtaXRlbV9fcXVhbnRpdHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdvLWNhcnQtaXRlbV9fcXVhbnRpdHktbGFiZWxcIj5RdWFudGl0eTogPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ28tY2FydC1pdGVtX19xdWFudGl0eS1idXR0b24ganMtZ28tY2FydC1xdWFudGl0eS1taW51c1wiPi08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZ28tY2FydC1pdGVtX19xdWFudGl0eS1udW1iZXIganMtZ28tY2FydC1xdWFudGl0eVwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIicpLmNvbmNhdCh0LnF1YW50aXR5LCAnXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3F1YW50aXR5LWJ1dHRvbiBqcy1nby1jYXJ0LXF1YW50aXR5LXBsdXNcIj4rPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnby1jYXJ0LWl0ZW1fX3ByaWNlXCI+JykuY29uY2F0KGZvcm1hdE1vbmV5KHQubGluZV9wcmljZSwgZS5tb25leUZvcm1hdCksICc8L2Rpdj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cImdvLWNhcnQtaXRlbV9fcmVtb3ZlICcpLmNvbmNhdChlLnJlbW92ZUZyb21DYXJ0Tm9Eb3QsICdcIj5SZW1vdmU8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnKTtcbiAgICAgICAgICAgICAgICAgICAgICBlLmNhcnRNaW5pQ2FydENvbnRlbnQuaW5uZXJIVE1MICs9IG5cbiAgICAgICAgICAgICAgICAgIH0pKSwgdGhpcy5jYXJ0TWluaUNhcnRTdWJUb3RhbC5pbm5lckhUTUwgPSBmb3JtYXRNb25leSh0LnRvdGFsX3ByaWNlLCB0aGlzLm1vbmV5Rm9ybWF0KSwgdGhpcy5jYXJ0TWluaUNhcnRTdWJUb3RhbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZpc2libGVcIiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5yZW1vdmVGcm9tQ2FydCkuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgR29DYXJ0LnJlbW92ZUl0ZW1BbmltYXRpb24odC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZUl0ZW0ocilcbiAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgIH0pKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLml0ZW1RdWFudGl0eVBsdXMpLmZvckVhY2goKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtbGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBOdW1iZXIodC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZS5pdGVtUXVhbnRpdHkpLnZhbHVlKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2hhbmdlSXRlbVF1YW50aXR5KHIsIGEpXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICB9KSksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5pdGVtUXVhbnRpdHlNaW51cykuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IE51bWJlcih0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihlLml0ZW1RdWFudGl0eSkudmFsdWUpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jaGFuZ2VJdGVtUXVhbnRpdHkociwgYSksIDAgPT09IE51bWJlcih0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihlLml0ZW1RdWFudGl0eSkudmFsdWUgLSAxKSAmJiBHb0NhcnQucmVtb3ZlSXRlbUFuaW1hdGlvbih0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcInJlbmRlckJsYW5rQ2FydERyYXdlclwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcnREcmF3ZXJTdWJUb3RhbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZpc2libGVcIiksIHRoaXMuY2xlYXJDYXJ0RHJhd2VyKCksIHRoaXMuY2FydERyYXdlckNvbnRlbnQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJnby1jYXJ0X19lbXB0eVwiPllvdXIgQ2FydCBpcyBjdXJyZW50eSBlbXB0eSE8L2Rpdj4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJyZW5kZXJCbGFua01pbmlDYXJ0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydE1pbmlDYXJ0U3ViVG90YWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaXMtaW52aXNpYmxlXCIpLCB0aGlzLmNsZWFyTWluaUNhcnQoKSwgdGhpcy5jYXJ0TWluaUNhcnRDb250ZW50LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZ28tY2FydF9fZW1wdHlcIj5Zb3VyIENhcnQgaXMgY3VycmVudHkgZW1wdHkhPC9kaXY+J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xlYXJDYXJ0RHJhd2VyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydERyYXdlckNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xlYXJNaW5pQ2FydFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcnRNaW5pQ2FydENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xlYXJDYXJ0TW9kYWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0TW9kYWxDb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcIm9wZW5DYXJ0RHJhd2VyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydERyYXdlci5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xvc2VDYXJ0RHJhd2VyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydERyYXdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwib3Blbk1pbmlDYXJ0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydE1pbmlDYXJ0LmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJjbG9zZU1pbmlDYXJ0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydE1pbmlDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJvcGVuRmFpbE1vZGFsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydE1vZGFsRmFpbC5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xvc2VGYWlsTW9kYWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0TW9kYWxGYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJvcGVuQ2FydE1vZGFsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGtleTogXCJjbG9zZUNhcnRNb2RhbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwib3BlbkNhcnRPdmVybGF5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAga2V5OiBcImNsb3NlQ2FydE92ZXJsYXlcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0T3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwic2V0RHJhd2VyRGlyZWN0aW9uXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FydERyYXdlci5jbGFzc0xpc3QuYWRkKFwiZ28tY2FydF9fZHJhd2VyLS1cIi5jb25jYXQodGhpcy5kcmF3ZXJEaXJlY3Rpb24pKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBrZXk6IFwiaXNEcmF3ZXJNb2RlXCIsXG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJkcmF3ZXJcIiA9PT0gdGhpcy5jYXJ0TW9kZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfV0pICYmIF9kZWZpbmVQcm9wZXJ0aWVzKHQucHJvdG90eXBlLCBlKSwgciAmJiBfZGVmaW5lUHJvcGVydGllcyh0LCByKSwgR29DYXJ0XG4gICAgICB9KCk7XG4gICAgICBlLmRlZmF1bHQgPSBmXG4gIH1dKVxufSkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBHb0NhcnQgZnJvbSAnLi9nby1jYXJ0L2dvLWNhcnQuanMnO1xyXG5pbXBvcnQgQ2FydFVwc2VsbCBmcm9tIFwiLi9jYXJ0LXVwc2VsbC9jYXJ0LXVwc2VsbFwiO1xyXG5pbXBvcnQgJy4vZ28tY2FydC9nby1jYXJ0LnNjc3MnO1xyXG5cclxuY29uc3QgZ29DYXJ0ID0gbmV3IEdvQ2FydCh7XHJcbiAgY2FydE1vZGU6ICdkcmF3ZXInLCAvL2RyYXdlciBvciBtaW5pLWNhcnQgIFxyXG4gIGRyYXdlckRpcmVjdGlvbjogJ3JpZ2h0JywgLy9jYXJ0IGRyYXdlciBmcm9tIGxlZnQgb3IgcmlnaHRcclxuICBkaXNwbGF5TW9kYWw6IGZhbHNlLCAvL2Rpc3BsYXkgc3VjY2VzcyBtb2RhbCB3aGVuIGFkZGluZyBwcm9kdWN0IHRvIGNhcnRcclxuICBtb25leUZvcm1hdDogJyR7e2Ftb3VudH19JywgLy90ZW1wbGF0ZSBmb3IgbW9uZXkgZm9ybWF0IHdoZW4gZGlzcGxheWluZyBtb25leVxyXG59KTtcclxuXHJcbmNvbnN0IGNhcnRVcHNlbGwgPSBuZXcgQ2FydFVwc2VsbChnb0NhcnQpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4dEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWpCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUEzQkE7QUFDQTs7QUFEQTs7Ozs7QUFBQTtBQUNBOztBQURBOzs7OztBQThCQTtBQUFBO0FBQUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnREE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFxRUE7QUF6RUE7QUEwRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBQ0E7QUFVQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQU9BO0FBQ0E7QUFLQTtBQVFBO0FBS0E7QUFNQTtBQU9BO0FBQ0E7QUFXQTtBQUNBO0FBV0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FDaGpCQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFYQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWpEQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2p5QkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
$(document).ready(function(){
  var window_width = $(window).width();
  if (window_width < 481){
    console.log("yes");
    $(".template-order .responsive-table tfoot tr").each(function(){
    	$(this).find("td").eq(0).attr('colspan',3);
    })
//     $(".template-order .responsive-table tfoot tr td").eq(0)
  }
})