/**
 * Copyright (C) 2023 salesforce.com, inc.
 */
/**
 * Copyright (C) 2023 salesforce.com, inc.
 */
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function invariant(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}
function isTrue$1(value, msg) {
  if (!value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}
function isFalse$1(value, msg) {
  if (value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}
function fail(msg) {
  throw new Error(msg);
}
var assert = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fail: fail,
  invariant: invariant,
  isFalse: isFalse$1,
  isTrue: isTrue$1
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const {
  assign: assign$1,
  create: create$4,
  defineProperties,
  defineProperty,
  freeze,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
  getOwnPropertyNames: getOwnPropertyNames$1,
  getPrototypeOf: getPrototypeOf$1,
  hasOwnProperty: hasOwnProperty$1,
  isFrozen,
  keys,
  seal,
  setPrototypeOf
} = Object;
const {
  isArray: isArray$1
} = Array;
const {
  concat: ArrayConcat$1,
  copyWithin: ArrayCopyWithin,
  every: ArrayEvery,
  fill: ArrayFill,
  filter: ArrayFilter,
  find: ArrayFind,
  findIndex: ArrayFindIndex,
  includes: ArrayIncludes,
  indexOf: ArrayIndexOf,
  join: ArrayJoin,
  map: ArrayMap,
  pop: ArrayPop,
  push: ArrayPush$1,
  reduce: ArrayReduce,
  reverse: ArrayReverse,
  shift: ArrayShift,
  slice: ArraySlice,
  some: ArraySome,
  sort: ArraySort,
  splice: ArraySplice,
  unshift: ArrayUnshift,
  forEach
} = Array.prototype;
const {
  fromCharCode: StringFromCharCode
} = String;
const {
  charCodeAt: StringCharCodeAt,
  replace: StringReplace,
  split: StringSplit,
  slice: StringSlice,
  toLowerCase: StringToLowerCase
} = String.prototype;
function isUndefined$1(obj) {
  return obj === undefined;
}
function isNull(obj) {
  return obj === null;
}
function isTrue(obj) {
  return obj === true;
}
function isFalse(obj) {
  return obj === false;
}
function isFunction$1(obj) {
  return typeof obj === 'function';
}
function isObject$1(obj) {
  return typeof obj === 'object';
}
function isString$1(obj) {
  return typeof obj === 'string';
}
function isNumber$1(obj) {
  return typeof obj === 'number';
}
function noop() {
  /* Do nothing */
}
const OtS$1 = {}.toString;
function toString$1(obj) {
  if (obj && obj.toString) {
    // Arrays might hold objects with "null" prototype So using
    // Array.prototype.toString directly will cause an error Iterate through
    // all the items and handle individually.
    if (isArray$1(obj)) {
      return ArrayJoin.call(ArrayMap.call(obj, toString$1), ',');
    }
    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS$1.call(obj);
  } else {
    return obj + '';
  }
}
function getPropertyDescriptor(o, p) {
  do {
    const d = getOwnPropertyDescriptor$1(o, p);
    if (!isUndefined$1(d)) {
      return d;
    }
    o = getPrototypeOf$1(o);
  } while (o !== null);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
 * ariaGrabbed) are deprecated:
 * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
 *
 * The above list of 46 aria attributes is consistent with the following resources:
 * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
 * https://wicg.github.io/aom/spec/aria-reflection.html
 *
 * NOTE: If you update this list, please update test files that implicitly reference this list!
 * Searching the codebase for `aria-flowto` and `ariaFlowTo` should be good enough to find all usages.
 */
const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];
const {
  AriaAttrNameToPropNameMap,
  AriaPropNameToAttrNameMap
} = /*@__PURE__*/(() => {
  const AriaAttrNameToPropNameMap = create$4(null);
  const AriaPropNameToAttrNameMap = create$4(null);
  // Synthetic creation of all AOM property descriptors for Custom Elements
  forEach.call(AriaPropertyNames, propName => {
    const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
    AriaAttrNameToPropNameMap[attrName] = propName;
    AriaPropNameToAttrNameMap[propName] = attrName;
  });
  return {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  };
})();
// These attributes take either an ID or a list of IDs as values.
// This includes aria-* attributes as well as the special non-ARIA "for" attribute
const ID_REFERENCING_ATTRIBUTES_SET = /*@__PURE__*/new Set(['aria-activedescendant', 'aria-controls', 'aria-describedby', 'aria-details', 'aria-errormessage', 'aria-flowto', 'aria-labelledby', 'aria-owns', 'for']);

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// See browser support for globalThis:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility
/* istanbul ignore next */
// @ts-ignore
const _globalThis = typeof globalThis === 'object' ? globalThis : window;

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const KEY__SHADOW_RESOLVER = '$shadowResolver$';
const KEY__SHADOW_STATIC = '$shadowStaticNode$';
const KEY__SHADOW_TOKEN = '$shadowToken$';
const KEY__SYNTHETIC_MODE = '$$lwc-synthetic-mode';
const KEY__SCOPED_CSS = '$scoped$';
const KEY__NATIVE_GET_ELEMENT_BY_ID = '$nativeGetElementById$';
const KEY__NATIVE_QUERY_SELECTOR_ALL = '$nativeQuerySelectorAll$';
const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const CAMEL_REGEX = /-([a-z])/g;
// These are HTML standard prop/attribute IDL mappings, but are not predictable based on camel/kebab-case conversion
const SPECIAL_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
/**
 * Map associating previously transformed HTML property into HTML attribute.
 */
const CACHED_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map();
function htmlPropertyToAttribute(propName) {
  const ariaAttributeName = AriaPropNameToAttrNameMap[propName];
  if (!isUndefined$1(ariaAttributeName)) {
    return ariaAttributeName;
  }
  const specialAttributeName = SPECIAL_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
  if (!isUndefined$1(specialAttributeName)) {
    return specialAttributeName;
  }
  const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
  if (!isUndefined$1(cachedAttributeName)) {
    return cachedAttributeName;
  }
  let attributeName = '';
  for (let i = 0, len = propName.length; i < len; i++) {
    const code = StringCharCodeAt.call(propName, i);
    if (code >= 65 &&
    // "A"
    code <= 90 // "Z"
    ) {
      attributeName += '-' + StringFromCharCode(code + 32);
    } else {
      attributeName += StringFromCharCode(code);
    }
  }
  CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
  return attributeName;
}
/**
 * Map associating previously transformed kabab-case attributes into camel-case props.
 */
const CACHED_KEBAB_CAMEL_MAPPING = /*@__PURE__@*/new Map();
function kebabCaseToCamelCase(attrName) {
  let result = CACHED_KEBAB_CAMEL_MAPPING.get(attrName);
  if (isUndefined$1(result)) {
    result = StringReplace.call(attrName, CAMEL_REGEX, g => g[1].toUpperCase());
    CACHED_KEBAB_CAMEL_MAPPING.set(attrName, result);
  }
  return result;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Increment whenever the LWC template compiler changes
const LWC_VERSION = "3.1.3";
const LWC_VERSION_COMMENT_REGEX = /\/\*LWC compiler v([\d.]+)\*\/\s*}/;
// eslint-disable-next-line no-restricted-properties
if (!_globalThis.lwcRuntimeFlags) {
  Object.defineProperty(_globalThis, 'lwcRuntimeFlags', {
    value: create$4(null)
  });
}
/** version: 3.1.3 */

/**
 * Copyright (C) 2023 salesforce.com, inc.
 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function detect(propName, prototype) {
  return isUndefined$1(getOwnPropertyDescriptor$1(prototype, propName));
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function createAriaPropertyPropertyDescriptor(attrName) {
  // Note that we need to call this.{get,set,has,remove}Attribute rather than dereferencing
  // from Element.prototype, because these methods are overridden in LightningElement.
  return {
    get() {
      // reflect what's in the attribute
      return this.hasAttribute(attrName) ? this.getAttribute(attrName) : null;
    },
    set(newValue) {
      // reflect into the corresponding attribute
      if (isNull(newValue)) {
        this.removeAttribute(attrName);
      } else {
        this.setAttribute(attrName, newValue);
      }
    },
    configurable: true,
    enumerable: true
  };
}
function patch$1(propName, prototype) {
  const attrName = AriaPropNameToAttrNameMap[propName];
  const descriptor = createAriaPropertyPropertyDescriptor(attrName);
  defineProperty(prototype, propName, descriptor);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function applyAriaReflection(prototype = Element.prototype) {
  const ElementPrototypeAriaPropertyNames = keys(AriaPropNameToAttrNameMap);
  for (let i = 0, len = ElementPrototypeAriaPropertyNames.length; i < len; i += 1) {
    const propName = ElementPrototypeAriaPropertyNames[i];
    if (detect(propName, prototype)) {
      patch$1(propName, prototype);
    }
  }
}
/** version: 3.1.3 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
if (!lwcRuntimeFlags.DISABLE_ARIA_REFLECTION_POLYFILL) {
  // If DISABLE_ARIA_REFLECTION_POLYFILL is false, then we need to apply the ARIA reflection polyfill globally,
  // i.e. to the global Element.prototype
  applyAriaReflection();
}
/**
 * Report to the current dispatcher, if there is one.
 * @param reportingEventId
 * @param payload - data to report
 */
function report(reportingEventId, payload) {
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getComponentTag(vm) {
  return `<${StringToLowerCase.call(vm.tagName)}>`;
}
// TODO [#1695]: Unify getComponentStack and getErrorComponentStack
function getComponentStack(vm) {
  const stack = [];
  let prefix = '';
  while (!isNull(vm.owner)) {
    ArrayPush$1.call(stack, prefix + getComponentTag(vm));
    vm = vm.owner;
    prefix += '\t';
  }
  return ArrayJoin.call(stack, '\n');
}
function getErrorComponentStack(vm) {
  const wcStack = [];
  let currentVm = vm;
  while (!isNull(currentVm)) {
    ArrayPush$1.call(wcStack, getComponentTag(currentVm));
    currentVm = currentVm.owner;
  }
  return wcStack.reverse().join('\n\t');
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function addErrorComponentStack(vm, error) {
  if (!isFrozen(error) && isUndefined$1(error.wcStack)) {
    const wcStack = getErrorComponentStack(vm);
    defineProperty(error, 'wcStack', {
      get() {
        return wcStack;
      }
    });
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const alreadyLoggedMessages = new Set();
function log(method, message, vm, once) {
  let msg = `[LWC ${method}]: ${message}`;
  if (!isUndefined$1(vm)) {
    msg = `${msg}\n${getComponentStack(vm)}`;
  }
  if (once) {
    if (alreadyLoggedMessages.has(msg)) {
      return;
    }
    alreadyLoggedMessages.add(msg);
  }
  try {
    throw new Error(msg);
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console[method](e);
  }
}
function logError(message, vm) {
  log('error', message, vm, false);
}
function logWarn(message, vm) {
  log('warn', message, vm, false);
}
function logWarnOnce(message, vm) {
  log('warn', message, vm, true);
}

/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const TargetToReactiveRecordMap = new WeakMap();
function getReactiveRecord(target) {
  let reactiveRecord = TargetToReactiveRecordMap.get(target);
  if (isUndefined$1(reactiveRecord)) {
    const newRecord = create$4(null);
    reactiveRecord = newRecord;
    TargetToReactiveRecordMap.set(target, newRecord);
  }
  return reactiveRecord;
}
let currentReactiveObserver = null;
function valueMutated(target, key) {
  const reactiveRecord = TargetToReactiveRecordMap.get(target);
  if (!isUndefined$1(reactiveRecord)) {
    const reactiveObservers = reactiveRecord[key];
    if (!isUndefined$1(reactiveObservers)) {
      for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
        const ro = reactiveObservers[i];
        ro.notify();
      }
    }
  }
}
function valueObserved(target, key) {
  // We should determine if an active Observing Record is present to track mutations.
  if (currentReactiveObserver === null) {
    return;
  }
  const ro = currentReactiveObserver;
  const reactiveRecord = getReactiveRecord(target);
  let reactiveObservers = reactiveRecord[key];
  if (isUndefined$1(reactiveObservers)) {
    reactiveObservers = [];
    reactiveRecord[key] = reactiveObservers;
  } else if (reactiveObservers[0] === ro) {
    return; // perf optimization considering that most subscriptions will come from the same record
  }

  if (ArrayIndexOf.call(reactiveObservers, ro) === -1) {
    ro.link(reactiveObservers);
  }
}
class ReactiveObserver {
  constructor(callback) {
    this.listeners = [];
    this.callback = callback;
  }
  observe(job) {
    const inceptionReactiveRecord = currentReactiveObserver;
    currentReactiveObserver = this;
    let error;
    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      currentReactiveObserver = inceptionReactiveRecord;
      if (error !== undefined) {
        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  }
  /**
   * This method is responsible for disconnecting the Reactive Observer
   * from any Reactive Record that has a reference to it, to prevent future
   * notifications about previously recorded access.
   */
  reset() {
    const {
      listeners
    } = this;
    const len = listeners.length;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const set = listeners[i];
        if (set.length === 1) {
          // Perf optimization for the common case - the length is usually 1, so avoid the indexOf+splice.
          // If the length is 1, we can also be sure that `this` is the first item in the array.
          set.length = 0;
        } else {
          // Slow case
          const pos = ArrayIndexOf.call(set, this);
          ArraySplice.call(set, pos, 1);
        }
      }
      listeners.length = 0;
    }
  }
  // friend methods
  notify() {
    this.callback.call(undefined, this);
  }
  link(reactiveObservers) {
    ArrayPush$1.call(reactiveObservers, this);
    // we keep track of observing records where the observing record was added to so we can do some clean up later on
    ArrayPush$1.call(this.listeners, reactiveObservers);
  }
}
function componentValueMutated(vm, key) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    valueMutated(vm.component, key);
  }
}
function componentValueObserved(vm, key) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    valueObserved(vm.component, key);
  }
}
function createReactiveObserver(callback) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return new ReactiveObserver(callback);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let nextTickCallbackQueue = [];
const SPACE_CHAR = 32;
const EmptyObject = seal(create$4(null));
const EmptyArray = seal([]);
function flushCallbackQueue() {
  {
    if (nextTickCallbackQueue.length === 0) {
      throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
    }
  }
  const callbacks = nextTickCallbackQueue;
  nextTickCallbackQueue = []; // reset to a new queue
  for (let i = 0, len = callbacks.length; i < len; i += 1) {
    callbacks[i]();
  }
}
function addCallbackToNextTick(callback) {
  {
    if (!isFunction$1(callback)) {
      throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
    }
  }
  if (nextTickCallbackQueue.length === 0) {
    Promise.resolve().then(flushCallbackQueue);
  }
  ArrayPush$1.call(nextTickCallbackQueue, callback);
}
function flattenStylesheets(stylesheets) {
  const list = [];
  for (const stylesheet of stylesheets) {
    if (!isArray$1(stylesheet)) {
      list.push(stylesheet);
    } else {
      list.push(...flattenStylesheets(stylesheet));
    }
  }
  return list;
}
// Set a ref (lwc:ref) on a VM, from a template API
function setRefVNode(vm, ref, vnode) {
  if (isUndefined$1(vm.refVNodes)) {
    throw new Error('refVNodes must be defined when setting a ref');
  }
  // If this method is called, then vm.refVNodes is set as the template has refs.
  // If not, then something went wrong and we threw an error above.
  const refVNodes = vm.refVNodes;
  // In cases of conflict (two elements with the same ref), prefer, the last one,
  // in depth-first traversal order.
  if (!(ref in refVNodes) || refVNodes[ref].key < vnode.key) {
    refVNodes[ref] = vnode;
  }
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function resolveCircularModuleDependency(fn) {
  const module = fn();
  return (module === null || module === void 0 ? void 0 : module.__esModule) ? module.default : module;
}
function isCircularModuleDependency(obj) {
  return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
}
var _a, _b;
const instrumentDef = (_a = _globalThis.__lwc_instrument_cmp_def) !== null && _a !== void 0 ? _a : noop;
const instrumentInstance = (_b = _globalThis.__lwc_instrument_cmp_instance) !== null && _b !== void 0 ? _b : noop;

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
// to inject at runtime.
const HTMLElementConstructor = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
const HTMLElementPrototype = HTMLElementConstructor.prototype;

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// These properties get added to LWCElement.prototype publicProps automatically
const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This is a descriptor map that contains
 * all standard properties that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base HTML Element and
 * Base Lightning Element should support.
 */
const HTMLElementOriginalDescriptors = create$4(null);
forEach.call(keys(AriaPropNameToAttrNameMap), propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
forEach.call(defaultDefHTMLPropertyNames, propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
  // this category, so, better to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/* eslint @lwc/lwc-internal/no-production-assert: "off" */
function generateDataDescriptor(options) {
  return assign$1({
    configurable: true,
    enumerable: true,
    writable: true
  }, options);
}
function generateAccessorDescriptor(options) {
  return assign$1({
    configurable: true,
    enumerable: true
  }, options);
}
let isDomMutationAllowed = false;
function unlockDomMutation() {
  isDomMutationAllowed = true;
}
function lockDomMutation() {
  isDomMutationAllowed = false;
}
function logMissingPortalError(name, type) {
  return logError(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
}
function patchElementWithRestrictions(elm, options) {
  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const descriptors = {
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set outerHTML on Element.`);
        return originalOuterHTMLDescriptor.set.call(this, value);
      }
    })
  };
  // Apply extra restriction related to DOM manipulation if the element is not a portal.
  if (!options.isLight && options.isSynthetic && !options.isPortal) {
    const {
      appendChild,
      insertBefore,
      removeChild,
      replaceChild
    } = elm;
    const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
    const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
    assign$1(descriptors, {
      appendChild: generateDataDescriptor({
        value(aChild) {
          logMissingPortalError('appendChild', 'method');
          return appendChild.call(this, aChild);
        }
      }),
      insertBefore: generateDataDescriptor({
        value(newNode, referenceNode) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('insertBefore', 'method');
          }
          return insertBefore.call(this, newNode, referenceNode);
        }
      }),
      removeChild: generateDataDescriptor({
        value(aChild) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('removeChild', 'method');
          }
          return removeChild.call(this, aChild);
        }
      }),
      replaceChild: generateDataDescriptor({
        value(newChild, oldChild) {
          logMissingPortalError('replaceChild', 'method');
          return replaceChild.call(this, newChild, oldChild);
        }
      }),
      nodeValue: generateAccessorDescriptor({
        get() {
          return originalNodeValueDescriptor.get.call(this);
        },
        set(value) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('nodeValue', 'property');
          }
          originalNodeValueDescriptor.set.call(this, value);
        }
      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },
        set(value) {
          logMissingPortalError('textContent', 'property');
          originalTextContentDescriptor.set.call(this, value);
        }
      }),
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },
        set(value) {
          logMissingPortalError('innerHTML', 'property');
          return originalInnerHTMLDescriptor.set.call(this, value);
        }
      })
    });
  }
  defineProperties(elm, descriptors);
}
function getShadowRootRestrictionsDescriptors(sr) {
  // Disallowing properties in dev mode only to avoid people doing the wrong
  // thing when using the real shadow root, because if that's the case,
  // the component will not work when running with synthetic shadow.
  const originalAddEventListener = sr.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set innerHTML on ShadowRoot.`);
        return originalInnerHTMLDescriptor.set.call(this, value);
      }
    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set textContent on ShadowRoot.`);
        return originalTextContentDescriptor.set.call(this, value);
      }
    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        // TODO [#1824]: Potentially relax this restriction
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method on ShadowRoot does not support any options.', getAssociatedVMIfPresent(this));
        }
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        return originalAddEventListener.apply(this, arguments);
      }
    })
  };
}
// Custom Elements Restrictions:
// -----------------------------
function getCustomElementRestrictionsDescriptors(elm) {
  const originalAddEventListener = elm.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set innerHTML on HTMLElement.`);
        return originalInnerHTMLDescriptor.set.call(this, value);
      }
    }),
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set outerHTML on HTMLElement.`);
        return originalOuterHTMLDescriptor.set.call(this, value);
      }
    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set textContent on HTMLElement.`);
        return originalTextContentDescriptor.set.call(this, value);
      }
    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        // TODO [#1824]: Potentially relax this restriction
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        }
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        return originalAddEventListener.apply(this, arguments);
      }
    })
  };
}
function getLightningElementPrototypeRestrictionsDescriptors(proto) {
  const originalDispatchEvent = proto.dispatchEvent;
  return {
    dispatchEvent: generateDataDescriptor({
      value(event) {
        const vm = getAssociatedVM(this);
        if (!isNull(event) && isObject$1(event)) {
          const {
            type
          } = event;
          if (!/^[a-z][a-z0-9_]*$/.test(type)) {
            logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
          }
        }
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        return originalDispatchEvent.apply(this, arguments);
      }
    })
  };
}
// This routine will prevent access to certain properties on a shadow root instance to guarantee
// that all components will work fine in IE11 and other browsers without shadow dom support.
function patchShadowRootWithRestrictions(sr) {
  defineProperties(sr, getShadowRootRestrictionsDescriptors(sr));
}
function patchCustomElementWithRestrictions(elm) {
  const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
  const elmProto = getPrototypeOf$1(elm);
  setPrototypeOf(elm, create$4(elmProto, restrictionsDescriptors));
}
function patchLightningElementPrototypeWithRestrictions(proto) {
  defineProperties(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
}
function updateComponentValue(vm, key, newValue) {
  const {
    cmpFields
  } = vm;
  if (newValue !== cmpFields[key]) {
    cmpFields[key] = newValue;
    componentValueMutated(vm, key);
  }
}

/**
 * Copyright (C) 2017 salesforce.com, inc.
 */
const {
  isArray
} = Array;
const {
  prototype: ObjectDotPrototype,
  getPrototypeOf,
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  isExtensible,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  preventExtensions,
  hasOwnProperty
} = Object;
const {
  push: ArrayPush,
  concat: ArrayConcat
} = Array.prototype;
const OtS = {}.toString;
function toString(obj) {
  if (obj && obj.toString) {
    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS.call(obj);
  } else {
    return obj + '';
  }
}
function isUndefined(obj) {
  return obj === undefined;
}
function isFunction$2(obj) {
  return typeof obj === 'function';
}
const proxyToValueMap = new WeakMap();
function registerProxy(proxy, value) {
  proxyToValueMap.set(proxy, value);
}
const unwrap$1 = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;
class BaseProxyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  }
  // Shared utility methods
  wrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = this.wrapValue(descriptor.value);
    } else {
      const {
        set: originalSet,
        get: originalGet
      } = descriptor;
      if (!isUndefined(originalGet)) {
        descriptor.get = this.wrapGetter(originalGet);
      }
      if (!isUndefined(originalSet)) {
        descriptor.set = this.wrapSetter(originalSet);
      }
    }
    return descriptor;
  }
  copyDescriptorIntoShadowTarget(shadowTarget, key) {
    const {
      originalTarget
    } = this;
    // Note: a property might get defined multiple times in the shadowTarget
    //       but it will always be compatible with the previous descriptor
    //       to preserve the object invariants, which makes these lines safe.
    const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
    // TODO: it should be impossible for the originalDescriptor to ever be undefined, this `if` can be removed
    /* istanbul ignore else */
    if (!isUndefined(originalDescriptor)) {
      const wrappedDesc = this.wrapDescriptor(originalDescriptor);
      ObjectDefineProperty(shadowTarget, key, wrappedDesc);
    }
  }
  lockShadowTarget(shadowTarget) {
    const {
      originalTarget
    } = this;
    const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(key => {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    });
    const {
      membrane: {
        tagPropertyKey
      }
    } = this;
    if (!isUndefined(tagPropertyKey) && !hasOwnProperty.call(shadowTarget, tagPropertyKey)) {
      ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
    }
    preventExtensions(shadowTarget);
  }
  // Shared Traps
  // TODO: apply() is never called
  /* istanbul ignore next */
  apply(shadowTarget, thisArg, argArray) {
    /* No op */
  }
  // TODO: construct() is never called
  /* istanbul ignore next */
  construct(shadowTarget, argArray, newTarget) {
    /* No op */
  }
  get(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    const value = originalTarget[key];
    valueObserved(originalTarget, key);
    return this.wrapValue(value);
  }
  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey,
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key);
    // since key is never going to be undefined, and tagPropertyKey might be undefined
    // we can simply compare them as the second part of the condition.
    return key in originalTarget || key === tagPropertyKey;
  }
  ownKeys(shadowTarget) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey
      }
    } = this;
    // if the membrane tag key exists and it is not in the original target, we add it to the keys.
    const keys = isUndefined(tagPropertyKey) || hasOwnProperty.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey];
    // small perf optimization using push instead of concat to avoid creating an extra array
    ArrayPush.apply(keys, getOwnPropertyNames(originalTarget));
    ArrayPush.apply(keys, getOwnPropertySymbols(originalTarget));
    return keys;
  }
  isExtensible(shadowTarget) {
    const {
      originalTarget
    } = this;
    // optimization to avoid attempting to lock down the shadowTarget multiple times
    if (!isExtensible(shadowTarget)) {
      return false; // was already locked down
    }

    if (!isExtensible(originalTarget)) {
      this.lockShadowTarget(shadowTarget);
      return false;
    }
    return true;
  }
  getPrototypeOf(shadowTarget) {
    const {
      originalTarget
    } = this;
    return getPrototypeOf(originalTarget);
  }
  getOwnPropertyDescriptor(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved,
        tagPropertyKey
      }
    } = this;
    // keys looked up via getOwnPropertyDescriptor need to be reactive
    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor(originalTarget, key);
    if (isUndefined(desc)) {
      if (key !== tagPropertyKey) {
        return undefined;
      }
      // if the key is the membrane tag key, and is not in the original target,
      // we produce a synthetic descriptor and install it on the shadow target
      desc = {
        value: undefined,
        writable: false,
        configurable: false,
        enumerable: false
      };
      ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
      return desc;
    }
    if (desc.configurable === false) {
      // updating the descriptor to non-configurable on the shadow
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }
    // Note: by accessing the descriptor, the key is marked as observed
    // but access to the value, setter or getter (if available) cannot observe
    // mutations, just like regular methods, in which case we just do nothing.
    return this.wrapDescriptor(desc);
  }
}
const getterMap$1 = new WeakMap();
const setterMap$1 = new WeakMap();
const reverseGetterMap = new WeakMap();
const reverseSetterMap = new WeakMap();
class ReactiveProxyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getProxy(value);
  }
  wrapGetter(originalGet) {
    const wrappedGetter = getterMap$1.get(originalGet);
    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };
    getterMap$1.set(originalGet, get);
    reverseGetterMap.set(get, originalGet);
    return get;
  }
  wrapSetter(originalSet) {
    const wrappedSetter = setterMap$1.get(originalSet);
    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }
    const set = function (v) {
      // invoking the original setter with the original target
      originalSet.call(unwrap$1(this), unwrap$1(v));
    };
    setterMap$1.set(originalSet, set);
    reverseSetterMap.set(set, originalSet);
    return set;
  }
  unwrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      // dealing with a data descriptor
      descriptor.value = unwrap$1(descriptor.value);
    } else {
      const {
        set,
        get
      } = descriptor;
      if (!isUndefined(get)) {
        descriptor.get = this.unwrapGetter(get);
      }
      if (!isUndefined(set)) {
        descriptor.set = this.unwrapSetter(set);
      }
    }
    return descriptor;
  }
  unwrapGetter(redGet) {
    const reverseGetter = reverseGetterMap.get(redGet);
    if (!isUndefined(reverseGetter)) {
      return reverseGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the red getter with the proxy of this
      return unwrap$1(redGet.call(handler.wrapValue(this)));
    };
    getterMap$1.set(get, redGet);
    reverseGetterMap.set(redGet, get);
    return get;
  }
  unwrapSetter(redSet) {
    const reverseSetter = reverseSetterMap.get(redSet);
    if (!isUndefined(reverseSetter)) {
      return reverseSetter;
    }
    const handler = this;
    const set = function (v) {
      // invoking the red setter with the proxy of this
      redSet.call(handler.wrapValue(this), handler.wrapValue(v));
    };
    setterMap$1.set(set, redSet);
    reverseSetterMap.set(redSet, set);
    return set;
  }
  set(shadowTarget, key, value) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    const oldValue = originalTarget[key];
    if (oldValue !== value) {
      originalTarget[key] = value;
      valueMutated(originalTarget, key);
    } else if (key === 'length' && isArray(originalTarget)) {
      // fix for issue #236: push will add the new index, and by the time length
      // is updated, the internal length is already equal to the new length value
      // therefore, the oldValue is equal to the value. This is the forking logic
      // to support this use case.
      valueMutated(originalTarget, key);
    }
    return true;
  }
  deleteProperty(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    delete originalTarget[key];
    valueMutated(originalTarget, key);
    return true;
  }
  setPrototypeOf(shadowTarget, prototype) {
    /* istanbul ignore else */
    {
      throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
    }
  }
  preventExtensions(shadowTarget) {
    if (isExtensible(shadowTarget)) {
      const {
        originalTarget
      } = this;
      preventExtensions(originalTarget);
      // if the originalTarget is a proxy itself, it might reject
      // the preventExtension call, in which case we should not attempt to lock down
      // the shadow target.
      // TODO: It should not actually be possible to reach this `if` statement.
      // If a proxy rejects extensions, then calling preventExtensions will throw an error:
      // https://codepen.io/nolanlawson-the-selector/pen/QWMOjbY
      /* istanbul ignore if */
      if (isExtensible(originalTarget)) {
        return false;
      }
      this.lockShadowTarget(shadowTarget);
    }
    return true;
  }
  defineProperty(shadowTarget, key, descriptor) {
    const {
      originalTarget,
      membrane: {
        valueMutated,
        tagPropertyKey
      }
    } = this;
    if (key === tagPropertyKey && !hasOwnProperty.call(originalTarget, key)) {
      // To avoid leaking the membrane tag property into the original target, we must
      // be sure that the original target doesn't have yet.
      // NOTE: we do not return false here because Object.freeze and equivalent operations
      // will attempt to set the descriptor to the same value, and expect no to throw. This
      // is an small compromise for the sake of not having to diff the descriptors.
      return true;
    }
    ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor));
    // intentionally testing if false since it could be undefined as well
    if (descriptor.configurable === false) {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }
    valueMutated(originalTarget, key);
    return true;
  }
  /*LWC compiler v3.1.3*/
}
const getterMap = new WeakMap();
const setterMap = new WeakMap();
class ReadOnlyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getReadOnlyProxy(value);
  }
  wrapGetter(originalGet) {
    const wrappedGetter = getterMap.get(originalGet);
    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };
    getterMap.set(originalGet, get);
    return get;
  }
  wrapSetter(originalSet) {
    const wrappedSetter = setterMap.get(originalSet);
    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }
    const handler = this;
    const set = function (v) {
      /* istanbul ignore else */
      {
        const {
          originalTarget
        } = handler;
        throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    };
    setterMap.set(originalSet, set);
    return set;
  }
  set(shadowTarget, key, value) {
    /* istanbul ignore else */
    {
      const {
        originalTarget
      } = this;
      const msg = isArray(originalTarget) ? `Invalid mutation: Cannot mutate array at index ${key.toString()}. Array is read-only.` : `Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`;
      throw new Error(msg);
    }
  }
  deleteProperty(shadowTarget, key) {
    /* istanbul ignore else */
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
  }
  setPrototypeOf(shadowTarget, prototype) {
    /* istanbul ignore else */
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
    }
  }
  preventExtensions(shadowTarget) {
    /* istanbul ignore else */
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
    }
  }
  defineProperty(shadowTarget, key, descriptor) {
    /* istanbul ignore else */
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
  }
  /*LWC compiler v3.1.3*/
}
function extract(objectOrArray) {
  if (isArray(objectOrArray)) {
    return objectOrArray.map(item => {
      const original = unwrap$1(item);
      if (original !== item) {
        return extract(original);
      }
      return item;
    });
  }
  const obj = ObjectCreate(getPrototypeOf(objectOrArray));
  const names = getOwnPropertyNames(objectOrArray);
  return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
    const item = objectOrArray[key];
    const original = unwrap$1(item);
    if (original !== item) {
      seed[key] = extract(original);
    } else {
      seed[key] = item;
    }
    return seed;
  }, obj);
}
const formatter = {
  header: plainOrProxy => {
    const originalTarget = unwrap$1(plainOrProxy);
    // if originalTarget is falsy or not unwrappable, exit
    if (!originalTarget || originalTarget === plainOrProxy) {
      return null;
    }
    const obj = extract(plainOrProxy);
    return ['object', {
      object: obj
    }];
  },
  hasBody: () => {
    return false;
  },
  body: () => {
    return null;
  }
};
// Inspired from paulmillr/es6-shim
// https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L176-L185
/* istanbul ignore next */
function getGlobal() {
  // the only reliable means to get the global object is `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  // Gracefully degrade if not able to locate the global object
  return {};
}
function init$1() {
  const global = getGlobal();
  // Custom Formatter for Dev Tools. To enable this, open Chrome Dev Tools
  //  - Go to Settings,
  //  - Under console, select "Enable custom formatters"
  // For more information, https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
  const devtoolsFormatters = global.devtoolsFormatters || [];
  ArrayPush.call(devtoolsFormatters, formatter);
  global.devtoolsFormatters = devtoolsFormatters;
}

/* istanbul ignore else */
{
  init$1();
}
function defaultValueIsObservable(value) {
  // intentionally checking for null
  if (value === null) {
    return false;
  }
  // treat all non-object types, including undefined, as non-observable values
  if (typeof value !== 'object') {
    return false;
  }
  if (isArray(value)) {
    return true;
  }
  const proto = getPrototypeOf(value);
  return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
}
const defaultValueObserved = (obj, key) => {
  /* do nothing */
};
const defaultValueMutated = (obj, key) => {
  /* do nothing */
};
function createShadowTarget(value) {
  return isArray(value) ? [] : {};
}
class ObservableMembrane {
  constructor(options = {}) {
    this.readOnlyObjectGraph = new WeakMap();
    this.reactiveObjectGraph = new WeakMap();
    const {
      valueMutated,
      valueObserved,
      valueIsObservable,
      tagPropertyKey
    } = options;
    this.valueMutated = isFunction$2(valueMutated) ? valueMutated : defaultValueMutated;
    this.valueObserved = isFunction$2(valueObserved) ? valueObserved : defaultValueObserved;
    this.valueIsObservable = isFunction$2(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
    this.tagPropertyKey = tagPropertyKey;
  }
  getProxy(value) {
    const unwrappedValue = unwrap$1(value);
    if (this.valueIsObservable(unwrappedValue)) {
      // When trying to extract the writable version of a readonly we return the readonly.
      if (this.readOnlyObjectGraph.get(unwrappedValue) === value) {
        return value;
      }
      return this.getReactiveHandler(unwrappedValue);
    }
    return unwrappedValue;
  }
  getReadOnlyProxy(value) {
    value = unwrap$1(value);
    if (this.valueIsObservable(value)) {
      return this.getReadOnlyHandler(value);
    }
    return value;
  }
  unwrapProxy(p) {
    return unwrap$1(p);
  }
  getReactiveHandler(value) {
    let proxy = this.reactiveObjectGraph.get(value);
    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReactiveProxyHandler(this, value);
      proxy = new Proxy(createShadowTarget(value), handler);
      registerProxy(proxy, value);
      this.reactiveObjectGraph.set(value, proxy);
    }
    return proxy;
  }
  getReadOnlyHandler(value) {
    let proxy = this.readOnlyObjectGraph.get(value);
    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReadOnlyHandler(this, value);
      proxy = new Proxy(createShadowTarget(value), handler);
      registerProxy(proxy, value);
      this.readOnlyObjectGraph.set(value, proxy);
    }
    return proxy;
  }
}
/** version: 2.0.0 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');
const reactiveMembrane = new ObservableMembrane({
  valueObserved,
  valueMutated,
  tagPropertyKey: lockerLivePropertyKey
});
function getReadOnlyProxy(value) {
  // We must return a frozen wrapper around the value, so that child components cannot mutate properties passed to
  // them from their parents. This applies to both the client and server.
  return reactiveMembrane.getReadOnlyProxy(value);
}
function getReactiveProxy(value) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return reactiveMembrane.getProxy(value);
}
// Making the component instance a live value when using Locker to support expandos.
function markLockerLiveObject(obj) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    obj[lockerLivePropertyKey] = undefined;
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for producing the ComponentDef object that is always
 * accessible via `vm.def`. This is lazily created during the creation of the first
 * instance of a component class, and shared across all instances.
 *
 * This structure can be used to synthetically create proxies, and understand the
 * shape of a component. It is also used internally to apply extra optimizations.
 */
/**
 * This operation is called with a descriptor of an standard html property
 * that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
 * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
 */
function createBridgeToElementDescriptor(propName, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;
  if (!isFunction$1(get)) {
    throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
  }
  if (!isFunction$1(set)) {
    throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
  }
  return {
    enumerable,
    configurable,
    get() {
      const vm = getAssociatedVM(this);
      if (isBeingConstructed(vm)) {
        {
          logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }
        return;
      }
      componentValueObserved(vm, propName);
      return get.call(vm.elm);
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
        }
        if (isUpdatingTemplate) {
          logError(`When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
        }
        if (isBeingConstructed(vm)) {
          logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
        }
        if (isObject$1(newValue) && !isNull(newValue)) {
          logError(`Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
        }
      }
      updateComponentValue(vm, propName, newValue);
      return set.call(vm.elm, newValue);
    }
  };
}
const refsCache = new WeakMap();
/**
 * This class is the base class for any LWC element.
 * Some elements directly extends this class, others implement it via inheritance.
 **/
// @ts-ignore
const LightningElement = function () {
  // This should be as performant as possible, while any initialization should be done lazily
  if (isNull(vmBeingConstructed)) {
    // Thrown when doing something like `new LightningElement()` or
    // `class Foo extends LightningElement {}; new Foo()`
    throw new TypeError('Illegal constructor');
  }
  // This is a no-op unless Lightning DevTools are enabled.
  instrumentInstance(this, vmBeingConstructed);
  const vm = vmBeingConstructed;
  const {
    def,
    elm
  } = vm;
  const {
    bridge
  } = def;
  {
    const {
      assertInstanceOfHTMLElement
    } = vm.renderer;
    assertInstanceOfHTMLElement(vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
  }
  const component = this;
  setPrototypeOf(elm, bridge.prototype);
  vm.component = this;
  // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
  // component creation and passes hooks to instrument all the component interactions with the
  // engine. We are intentionally hiding this argument from the formal API of LightningElement
  // because we don't want folks to know about it just yet.
  if (arguments.length === 1) {
    const {
      callHook,
      setHook,
      getHook
    } = arguments[0];
    vm.callHook = callHook;
    vm.setHook = setHook;
    vm.getHook = getHook;
  }
  markLockerLiveObject(this);
  // Linking elm, shadow root and component with the VM.
  associateVM(component, vm);
  associateVM(elm, vm);
  if (vm.renderMode === 1 /* RenderMode.Shadow */) {
    vm.renderRoot = doAttachShadow(vm);
  } else {
    vm.renderRoot = elm;
  }
  // Adding extra guard rails in DEV mode.
  {
    patchCustomElementWithRestrictions(elm);
  }
  return this;
};
function doAttachShadow(vm) {
  const {
    elm,
    mode,
    shadowMode,
    def: {
      ctor
    },
    renderer: {
      attachShadow
    }
  } = vm;
  const shadowRoot = attachShadow(elm, {
    [KEY__SYNTHETIC_MODE]: shadowMode === 1 /* ShadowMode.Synthetic */,
    delegatesFocus: Boolean(ctor.delegatesFocus),
    mode
  });
  vm.shadowRoot = shadowRoot;
  associateVM(shadowRoot, vm);
  {
    patchShadowRootWithRestrictions(shadowRoot);
  }
  return shadowRoot;
}
function warnIfInvokedDuringConstruction(vm, methodOrPropName) {
  if (isBeingConstructed(vm)) {
    logError(`this.${methodOrPropName} should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM or has no children yet.`);
  }
}
// @ts-ignore
LightningElement.prototype = {
  constructor: LightningElement,
  dispatchEvent(event) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        dispatchEvent
      }
    } = vm;
    return dispatchEvent(elm, event);
  },
  addEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        addEventListener
      }
    } = vm;
    {
      const vmBeingRendered = getVMBeingRendered();
      if (isInvokingRender) {
        logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      }
      if (isUpdatingTemplate) {
        logError(`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      }
      if (!isFunction$1(listener)) {
        logError(`Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
      }
    }
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    addEventListener(elm, type, wrappedListener, options);
  },
  removeEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeEventListener
      }
    } = vm;
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    removeEventListener(elm, type, wrappedListener, options);
  },
  hasAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = vm;
    return !isNull(getAttribute(elm, name));
  },
  hasAttributeNS(namespace, name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = vm;
    return !isNull(getAttribute(elm, name, namespace));
  },
  removeAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = vm;
    removeAttribute(elm, name);
  },
  removeAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    removeAttribute(elm, name, namespace);
  },
  getAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    const {
      getAttribute
    } = vm.renderer;
    return getAttribute(elm, name);
  },
  getAttributeNS(namespace, name) {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    const {
      getAttribute
    } = vm.renderer;
    return getAttribute(elm, name, namespace);
  },
  setAttribute(name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;
    {
      if (isBeingConstructed(vm)) {
        logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }
    }
    setAttribute(elm, name, value);
  },
  setAttributeNS(namespace, name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;
    {
      if (isBeingConstructed(vm)) {
        logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }
    }
    setAttribute(elm, name, value, namespace);
  },
  getBoundingClientRect() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getBoundingClientRect
      }
    } = vm;
    {
      warnIfInvokedDuringConstruction(vm, 'getBoundingClientRect()');
    }
    return getBoundingClientRect(elm);
  },
  get isConnected() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        isConnected
      }
    } = vm;
    return isConnected(elm);
  },
  get classList() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getClassList
      }
    } = vm;
    {
      if (isBeingConstructed(vm)) {
        logError(`Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
      }
    }
    return getClassList(elm);
  },
  get template() {
    const vm = getAssociatedVM(this);
    {
      if (vm.renderMode === 0 /* RenderMode.Light */) {
        logError('`this.template` returns null for light DOM components. Since there is no shadow, the rendered content can be accessed via `this` itself. e.g. instead of `this.template.querySelector`, use `this.querySelector`.');
      }
    }
    return vm.shadowRoot;
  },
  get refs() {
    const vm = getAssociatedVM(this);
    if (isUpdatingTemplate) {
      {
        logError(`this.refs should not be called while ${getComponentTag(vm)} is rendering. Use this.refs only when the DOM is stable, e.g. in renderedCallback().`);
      }
      // If the template is in the process of being updated, then we don't want to go through the normal
      // process of returning the refs and caching them, because the state of the refs is unstable.
      // This can happen if e.g. a template contains `<div class={foo}></div>` and `foo` is computed
      // based on `this.refs.bar`.
      return;
    }
    {
      warnIfInvokedDuringConstruction(vm, 'refs');
    }
    const {
      refVNodes,
      cmpTemplate
    } = vm;
    // If the `cmpTemplate` is null, that means that the template has not been rendered yet. Most likely this occurs
    // if `this.refs` is called during the `connectedCallback` phase. The DOM elements have not been rendered yet,
    // so log a warning. Note we also check `isBeingConstructed()` to avoid a double warning (due to
    // `warnIfInvokedDuringConstruction` above).
    if (isNull(cmpTemplate) && !isBeingConstructed(vm)) {
      logError(`this.refs is undefined for ${getComponentTag(vm)}. This is either because the attached template has no "lwc:ref" directive, or this.refs was ` + `invoked before renderedCallback(). Use this.refs only when the referenced HTML elements have ` + `been rendered to the DOM, such as within renderedCallback() or disconnectedCallback().`);
    }
    // For backwards compatibility with component written before template refs
    // were introduced, we return undefined if the template has no refs defined
    // anywhere. This fixes components that may want to add an expando called `refs`
    // and are checking if it exists with `if (this.refs)`  before adding it.
    // Note we use a null refVNodes to indicate that the template has no refs defined.
    if (isNull(refVNodes)) {
      return;
    }
    // The refNodes can be cached based on the refVNodes, since the refVNodes
    // are recreated from scratch every time the template is rendered.
    // This happens with `vm.refVNodes = null` in `template.ts` in `@lwc/engine-core`.
    let refs = refsCache.get(refVNodes);
    if (isUndefined$1(refs)) {
      refs = create$4(null);
      for (const key of keys(refVNodes)) {
        refs[key] = refVNodes[key].elm;
      }
      freeze(refs);
      refsCache.set(refVNodes, refs);
    }
    return refs;
  },
  // For backwards compat, we allow component authors to set `refs` as an expando
  set refs(value) {
    defineProperty(this, 'refs', {
      configurable: true,
      enumerable: true,
      writable: true,
      value
    });
  },
  get shadowRoot() {
    // From within the component instance, the shadowRoot is always reported as "closed".
    // Authors should rely on this.template instead.
    return null;
  },
  get children() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'children');
    }
    return renderer.getChildren(vm.elm);
  },
  get childNodes() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'childNodes');
    }
    return renderer.getChildNodes(vm.elm);
  },
  get firstChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'firstChild');
    }
    return renderer.getFirstChild(vm.elm);
  },
  get firstElementChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'firstElementChild');
    }
    return renderer.getFirstElementChild(vm.elm);
  },
  get lastChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'lastChild');
    }
    return renderer.getLastChild(vm.elm);
  },
  get lastElementChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'lastElementChild');
    }
    return renderer.getLastElementChild(vm.elm);
  },
  get ownerDocument() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    {
      warnIfInvokedDuringConstruction(vm, 'ownerDocument');
    }
    return renderer.ownerDocument(vm.elm);
  },
  get tagName() {
    const {
      elm,
      renderer
    } = getAssociatedVM(this);
    return renderer.getTagName(elm);
  },
  render() {
    const vm = getAssociatedVM(this);
    return vm.def.template;
  },
  toString() {
    const vm = getAssociatedVM(this);
    return `[object ${vm.def.name}]`;
  }
};
const queryAndChildGetterDescriptors = create$4(null);
const queryMethods = ['getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'];
// Generic passthrough for query APIs on HTMLElement to the relevant Renderer APIs
for (const queryMethod of queryMethods) {
  queryAndChildGetterDescriptors[queryMethod] = {
    value(arg) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer
      } = vm;
      {
        warnIfInvokedDuringConstruction(vm, `${queryMethod}()`);
      }
      return renderer[queryMethod](elm, arg);
    },
    configurable: true,
    enumerable: true,
    writable: true
  };
}
defineProperties(LightningElement.prototype, queryAndChildGetterDescriptors);
const lightningBasedDescriptors = create$4(null);
for (const propName in HTMLElementOriginalDescriptors) {
  lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
}
defineProperties(LightningElement.prototype, lightningBasedDescriptors);
function applyAriaReflectionToLightningElement() {
  // If ARIA reflection is not applied globally to Element.prototype, or if we are running server-side,
  // apply it to LightningElement.prototype.
  // This allows `this.aria*` property accessors to work from inside a component, and to reflect `aria-*` attrs.
  applyAriaReflection(LightningElement.prototype);
}
if (lwcRuntimeFlags.DISABLE_ARIA_REFLECTION_POLYFILL) {
  applyAriaReflectionToLightningElement();
}
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    // If required, a runtime-specific implementation must be defined.
    throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
  },
  configurable: true
});
{
  patchLightningElementPrototypeWithRestrictions(LightningElement.prototype);
}
function createObservedFieldPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      updateComponentValue(vm, key, newValue);
    },
    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const AdapterToTokenMap = new Map();
function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
  const {
    adapter
  } = wireDef;
  const adapterContextToken = AdapterToTokenMap.get(adapter);
  if (isUndefined$1(adapterContextToken)) {
    return; // no provider found, nothing to be done
  }

  const {
    elm,
    context: {
      wiredConnecting,
      wiredDisconnecting
    },
    renderer: {
      registerContextConsumer
    }
  } = vm;
  // waiting for the component to be connected to formally request the context via the token
  ArrayPush$1.call(wiredConnecting, () => {
    // This will attempt to connect the current element with one of its anscestors
    // that can provide context for the given wire adapter. This relationship is
    // keyed on the secret & internal value of `adapterContextToken`, which is unique
    // to a given wire adapter.
    //
    // Depending on the runtime environment, this connection is made using either DOM
    // events (in the browser) or a custom traversal (on the server).
    registerContextConsumer(elm, adapterContextToken, {
      setNewContext(newContext) {
        // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
        // TODO: dev-mode validation of config based on the adapter.contextSchema
        callbackWhenContextIsReady(newContext);
      },
      setDisconnectedCallback(disconnectCallback) {
        // adds this callback into the disconnect bucket so it gets disconnected from parent
        // the the element hosting the wire is disconnected
        ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
      }
    });
  });
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
const WIRE_DEBUG_ENTRY = '@wire';
const WireMetaMap = new Map();
function createFieldDataCallback(vm, name) {
  return value => {
    updateComponentValue(vm, name, value);
  };
}
function createMethodDataCallback(vm, method) {
  return value => {
    // dispatching new value into the wired method
    runWithBoundaryProtection(vm, vm.owner, noop, () => {
      // job
      method.call(vm.component, value);
    }, noop);
  };
}
function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
  let hasPendingConfig = false;
  // creating the reactive observer for reactive params when needed
  const ro = createReactiveObserver(() => {
    if (hasPendingConfig === false) {
      hasPendingConfig = true;
      // collect new config in the micro-task
      Promise.resolve().then(() => {
        hasPendingConfig = false;
        // resetting current reactive params
        ro.reset();
        // dispatching a new config due to a change in the configuration
        computeConfigAndUpdate();
      });
    }
  });
  const computeConfigAndUpdate = () => {
    let config;
    ro.observe(() => config = configCallback(component));
    // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
    // TODO: dev-mode validation of config based on the adapter.configSchema
    // @ts-ignore it is assigned in the observe() callback
    callbackWhenConfigIsReady(config);
  };
  return {
    computeConfigAndUpdate,
    ro
  };
}
function createConnector(vm, name, wireDef) {
  const {
    method,
    adapter,
    configCallback,
    dynamic
  } = wireDef;
  let debugInfo;
  {
    const wiredPropOrMethod = isUndefined$1(method) ? name : method.name;
    debugInfo = create$4(null);
    debugInfo.wasDataProvisionedForConfig = false;
    vm.debugInfo[WIRE_DEBUG_ENTRY][wiredPropOrMethod] = debugInfo;
  }
  const fieldOrMethodCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
  const dataCallback = value => {
    {
      debugInfo.data = value;
      // Note: most of the time, the data provided is for the current config, but there may be
      // some conditions in which it does not, ex:
      // race conditions in a poor network while the adapter does not cancel a previous request.
      debugInfo.wasDataProvisionedForConfig = true;
    }
    fieldOrMethodCallback(value);
  };
  let context;
  let connector;
  // Workaround to pass the component element associated to this wire adapter instance.
  defineProperty(dataCallback, DeprecatedWiredElementHost, {
    value: vm.elm
  });
  defineProperty(dataCallback, DeprecatedWiredParamsMeta, {
    value: dynamic
  });
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    connector = new adapter(dataCallback, {
      tagName: vm.tagName
    });
  }, noop);
  const updateConnectorConfig = config => {
    // every time the config is recomputed due to tracking,
    // this callback will be invoked with the new computed config
    runWithBoundaryProtection(vm, vm, noop, () => {
      // job
      if ("development" !== 'production') {
        debugInfo.config = config;
        debugInfo.context = context;
        debugInfo.wasDataProvisionedForConfig = false;
      }
      connector.update(config, context);
    }, noop);
  };
  // Computes the current wire config and calls the update method on the wire adapter.
  // If it has params, we will need to observe changes in the next tick.
  const {
    computeConfigAndUpdate,
    ro
  } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig);
  // if the adapter needs contextualization, we need to watch for new context and push it alongside the config
  if (!isUndefined$1(adapter.contextSchema)) {
    createContextWatcher(vm, wireDef, newContext => {
      // every time the context is pushed into this component,
      // this callback will be invoked with the new computed context
      if (context !== newContext) {
        context = newContext;
        // Note: when new context arrives, the config will be recomputed and pushed along side the new
        // context, this is to preserve the identity characteristics, config should not have identity
        // (ever), while context can have identity
        if (vm.state === 1 /* VMState.connected */) {
          computeConfigAndUpdate();
        }
      }
    });
  }
  return {
    // @ts-ignore the boundary protection executes sync, connector is always defined
    connector,
    computeConfigAndUpdate,
    resetConfigWatcher: () => ro.reset()
  };
}
function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }
  const method = descriptor.value;
  const def = {
    adapter,
    method,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }
  const def = {
    adapter,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function installWireAdapters(vm) {
  const {
    context,
    def: {
      wire
    }
  } = vm;
  {
    vm.debugInfo[WIRE_DEBUG_ENTRY] = create$4(null);
  }
  const wiredConnecting = context.wiredConnecting = [];
  const wiredDisconnecting = context.wiredDisconnecting = [];
  for (const fieldNameOrMethod in wire) {
    const descriptor = wire[fieldNameOrMethod];
    const wireDef = WireMetaMap.get(descriptor);
    {
      assert.invariant(wireDef, `Internal Error: invalid wire definition found.`);
    }
    if (!isUndefined$1(wireDef)) {
      const {
        connector,
        computeConfigAndUpdate,
        resetConfigWatcher
      } = createConnector(vm, fieldNameOrMethod, wireDef);
      const hasDynamicParams = wireDef.dynamic.length > 0;
      ArrayPush$1.call(wiredConnecting, () => {
        connector.connect();
        if (!lwcRuntimeFlags.ENABLE_WIRE_SYNC_EMIT) {
          if (hasDynamicParams) {
            Promise.resolve().then(computeConfigAndUpdate);
            return;
          }
        }
        computeConfigAndUpdate();
      });
      ArrayPush$1.call(wiredDisconnecting, () => {
        connector.disconnect();
        resetConfigWatcher();
      });
    }
  }
}
function connectWireAdapters(vm) {
  const {
    wiredConnecting
  } = vm.context;
  for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
    wiredConnecting[i]();
  }
}
function disconnectWireAdapters(vm) {
  const {
    wiredDisconnecting
  } = vm.context;
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
      wiredDisconnecting[i]();
    }
  }, noop);
}
function createPublicPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      if (isBeingConstructed(vm)) {
        {
          logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }
        return;
      }
      componentValueObserved(vm, key);
      return vm.cmpProps[key];
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`render() method has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
        if (isUpdatingTemplate) {
          logError(`Updating the template has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
      }
      vm.cmpProps[key] = newValue;
      componentValueMutated(vm, key);
    },
    enumerable: true,
    configurable: true
  };
}
function createPublicAccessorDescriptor(key, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;
  assert.invariant(isFunction$1(get), `Invalid public accessor ${toString$1(key)} decorated with @api. The property is missing a getter.`);
  return {
    get() {
      {
        // Assert that the this value is an actual Component with an associated VM.
        getAssociatedVM(this);
      }
      return get.call(this);
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`render() method has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
        if (isUpdatingTemplate) {
          logError(`Updating the template has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
      }
      if (set) {
        set.call(this, newValue);
      } else {
        logError(`Invalid attempt to set a new value for property "${toString$1(key)}" that does not has a setter decorated with @api.`, vm);
      }
    },
    enumerable,
    configurable
  };
}
function internalTrackDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        }
        if (isUpdatingTemplate) {
          logError(`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }
      }
      const reactiveOrAnyValue = getReactiveProxy(newValue);
      updateComponentValue(vm, key, reactiveOrAnyValue);
    },
    enumerable: true,
    configurable: true
  };
}
function internalWireFieldDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(value) {
      const vm = getAssociatedVM(this);
      /**
       * Reactivity for wired fields is provided in wiring.
       * We intentionally add reactivity here since this is just
       * letting the author to do the wrong thing, but it will keep our
       * system to be backward compatible.
       */
      updateComponentValue(vm, key, value);
    },
    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getClassDescriptorType(descriptor) {
  if (isFunction$1(descriptor.value)) {
    return "method" /* DescriptorType.Method */;
  } else if (isFunction$1(descriptor.set) || isFunction$1(descriptor.get)) {
    return "accessor" /* DescriptorType.Accessor */;
  } else {
    return "field" /* DescriptorType.Field */;
  }
}

function validateObservedField(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    const message = `Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`;
    // TODO [#3408]: this should throw, not log
    logError(message);
  }
}
function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    // TODO [#3408]: this should throw, not log
    logError(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}
function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    // TODO [#3408]: this should throw, not log
    logError(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}
function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
    // TODO [#3441]: This line of code does not seem possible to reach.
    logError(`Invalid @wire ${methodName} field. The field should have a valid writable descriptor.`);
  }
}
function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    const message = `Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`;
    // TODO [#3408]: this should throw, not log
    logError(message);
  }
}
function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
  if (isFunction$1(descriptor.set)) {
    if (!isFunction$1(descriptor.get)) {
      // TODO [#3441]: This line of code does not seem possible to reach.
      logError(`Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
    }
  } else if (!isFunction$1(descriptor.get)) {
    // TODO [#3441]: This line of code does not seem possible to reach.
    logError(`Missing @api get ${fieldName} accessor.`);
  }
}
function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
    // TODO [#3441]: This line of code does not seem possible to reach.
    logError(`Invalid @api ${methodName} method.`);
  }
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by user-land code.
 */
function registerDecorators(Ctor, meta) {
  const proto = Ctor.prototype;
  const {
    publicProps,
    publicMethods,
    wire,
    track,
    fields
  } = meta;
  const apiMethods = create$4(null);
  const apiFields = create$4(null);
  const wiredMethods = create$4(null);
  const wiredFields = create$4(null);
  const observedFields = create$4(null);
  const apiFieldsConfig = create$4(null);
  let descriptor;
  if (!isUndefined$1(publicProps)) {
    for (const fieldName in publicProps) {
      const propConfig = publicProps[fieldName];
      apiFieldsConfig[fieldName] = propConfig.config;
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      if (propConfig.config > 0) {
        if (isUndefined$1(descriptor)) {
          // TODO [#3441]: This line of code does not seem possible to reach.
          throw new Error();
        }
        // accessor declaration
        {
          validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
        }
        descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
      } else {
        // field declaration
        {
          validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
        }
        // [W-9927596] If a component has both a public property and a private setter/getter
        // with the same name, the property is defined as a public accessor. This branch is
        // only here for backward compatibility reasons.
        if (!isUndefined$1(descriptor) && !isUndefined$1(descriptor.get)) {
          descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
        } else {
          descriptor = createPublicPropertyDescriptor(fieldName);
        }
      }
      apiFields[fieldName] = descriptor;
      defineProperty(proto, fieldName, descriptor);
    }
  }
  if (!isUndefined$1(publicMethods)) {
    forEach.call(publicMethods, methodName => {
      descriptor = getOwnPropertyDescriptor$1(proto, methodName);
      {
        validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
      }
      if (isUndefined$1(descriptor)) {
        throw new Error();
      }
      apiMethods[methodName] = descriptor;
    });
  }
  if (!isUndefined$1(wire)) {
    for (const fieldOrMethodName in wire) {
      const {
        adapter,
        method,
        config: configCallback,
        dynamic = []
      } = wire[fieldOrMethodName];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);
      if (method === 1) {
        {
          if (!adapter) {
            // TODO [#3408]: this should throw, not log
            logError(`@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
          }
          validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }
        if (isUndefined$1(descriptor)) {
          throw new Error();
        }
        wiredMethods[fieldOrMethodName] = descriptor;
        storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
      } else {
        {
          if (!adapter) {
            // TODO [#3408]: this should throw, not log
            logError(`@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
          }
          validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }
        descriptor = internalWireFieldDecorator(fieldOrMethodName);
        wiredFields[fieldOrMethodName] = descriptor;
        storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
        defineProperty(proto, fieldOrMethodName, descriptor);
      }
    }
  }
  if (!isUndefined$1(track)) {
    for (const fieldName in track) {
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      {
        validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
      }
      descriptor = internalTrackDecorator(fieldName);
      defineProperty(proto, fieldName, descriptor);
    }
  }
  if (!isUndefined$1(fields)) {
    for (let i = 0, n = fields.length; i < n; i++) {
      const fieldName = fields[i];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      {
        validateObservedField(Ctor, fieldName, descriptor);
      }
      // [W-9927596] Only mark a field as observed whenever it isn't a duplicated public nor
      // tracked property. This is only here for backward compatibility purposes.
      const isDuplicatePublicProp = !isUndefined$1(publicProps) && fieldName in publicProps;
      const isDuplicateTrackedProp = !isUndefined$1(track) && fieldName in track;
      if (!isDuplicatePublicProp && !isDuplicateTrackedProp) {
        observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
      }
    }
  }
  setDecoratorsMeta(Ctor, {
    apiMethods,
    apiFields,
    apiFieldsConfig,
    wiredMethods,
    wiredFields,
    observedFields
  });
  return Ctor;
}
const signedDecoratorToMetaMap = new Map();
function setDecoratorsMeta(Ctor, meta) {
  signedDecoratorToMetaMap.set(Ctor, meta);
}
const defaultMeta = {
  apiMethods: EmptyObject,
  apiFields: EmptyObject,
  apiFieldsConfig: EmptyObject,
  wiredMethods: EmptyObject,
  wiredFields: EmptyObject,
  observedFields: EmptyObject
};
function getDecoratorsMeta(Ctor) {
  const meta = signedDecoratorToMetaMap.get(Ctor);
  return isUndefined$1(meta) ? defaultMeta : meta;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let warned = false;
function checkVersionMismatch(func, type) {
  const versionMatcher = func.toString().match(LWC_VERSION_COMMENT_REGEX);
  if (!isNull(versionMatcher) && !warned) {
    const version = versionMatcher[1];
    const [major, minor] = version.split('.');
    const [expectedMajor, expectedMinor] = LWC_VERSION.split('.');
    if (major !== expectedMajor || minor !== expectedMinor) {
      warned = true; // only warn once to avoid flooding the console
      // stylesheets and templates do not have user-meaningful names, but components do
      const friendlyName = type === 'component' ? `${type} ${func.name}` : type;
      logError(`LWC WARNING: current engine is v${LWC_VERSION}, but ${friendlyName} was compiled with v${version}.\nPlease update your compiled code or LWC engine so that the versions match.\nNo further warnings will appear.`);
    }
  }
}
const signedTemplateSet = new Set();
function defaultEmptyTemplate() {
  return [];
}
signedTemplateSet.add(defaultEmptyTemplate);
function isTemplateRegistered(tpl) {
  return signedTemplateSet.has(tpl);
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 */
function registerTemplate(tpl) {
  {
    checkVersionMismatch(tpl, 'template');
  }
  signedTemplateSet.add(tpl);
  // chaining this method as a way to wrap existing
  // assignment of templates easily, without too much transformation
  return tpl;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for creating the base bridge class BaseBridgeElement
 * that represents the HTMLElement extension used for any LWC inserted in the DOM.
 */
// A bridge descriptor is a descriptor whose job is just to get the component instance
// from the element instance, and get the value or set a new value on the component.
// This means that across different elements, similar names can get the exact same
// descriptor, so we can cache them:
const cachedGetterByKey = create$4(null);
const cachedSetterByKey = create$4(null);
function createGetter(key) {
  let fn = cachedGetterByKey[key];
  if (isUndefined$1(fn)) {
    fn = cachedGetterByKey[key] = function () {
      const vm = getAssociatedVM(this);
      const {
        getHook
      } = vm;
      return getHook(vm.component, key);
    };
  }
  return fn;
}
function createSetter(key) {
  let fn = cachedSetterByKey[key];
  if (isUndefined$1(fn)) {
    fn = cachedSetterByKey[key] = function (newValue) {
      const vm = getAssociatedVM(this);
      const {
        setHook
      } = vm;
      newValue = getReadOnlyProxy(newValue);
      setHook(vm.component, key, newValue);
    };
  }
  return fn;
}
function createMethodCaller(methodName) {
  return function () {
    const vm = getAssociatedVM(this);
    const {
      callHook,
      component
    } = vm;
    const fn = component[methodName];
    return callHook(vm.component, fn, ArraySlice.call(arguments));
  };
}
function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
  return function attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) {
      // Ignore same values.
      return;
    }
    const propName = attributeToPropMap[attrName];
    if (isUndefined$1(propName)) {
      if (!isUndefined$1(superAttributeChangedCallback)) {
        // delegate unknown attributes to the super.
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        superAttributeChangedCallback.apply(this, arguments);
      }
      return;
    }
    // Reflect attribute change to the corresponding property when changed from outside.
    this[propName] = newValue;
  };
}
function HTMLBridgeElementFactory(SuperClass, props, methods) {
  const HTMLBridgeElement = class extends SuperClass {
    /*LWC compiler v3.1.3*/
  };
  // generating the hash table for attributes to avoid duplicate fields and facilitate validation
  // and false positives in case of inheritance.
  const attributeToPropMap = create$4(null);
  const {
    attributeChangedCallback: superAttributeChangedCallback
  } = SuperClass.prototype;
  const {
    observedAttributes: superObservedAttributes = []
  } = SuperClass;
  const descriptors = create$4(null);
  // expose getters and setters for each public props on the new Element Bridge
  for (let i = 0, len = props.length; i < len; i += 1) {
    const propName = props[i];
    attributeToPropMap[htmlPropertyToAttribute(propName)] = propName;
    descriptors[propName] = {
      get: createGetter(propName),
      set: createSetter(propName),
      enumerable: true,
      configurable: true
    };
  }
  // expose public methods as props on the new Element Bridge
  for (let i = 0, len = methods.length; i < len; i += 1) {
    const methodName = methods[i];
    descriptors[methodName] = {
      value: createMethodCaller(methodName),
      writable: true,
      configurable: true
    };
  }
  // creating a new attributeChangedCallback per bridge because they are bound to the corresponding
  // map of attributes to props. We do this after all other props and methods to avoid the possibility
  // of getting overrule by a class declaration in user-land, and we make it non-writable, non-configurable
  // to preserve this definition.
  descriptors.attributeChangedCallback = {
    value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
  };
  // Specify attributes for which we want to reflect changes back to their corresponding
  // properties via attributeChangedCallback.
  defineProperty(HTMLBridgeElement, 'observedAttributes', {
    get() {
      return [...superObservedAttributes, ...keys(attributeToPropMap)];
    }
  });
  defineProperties(HTMLBridgeElement.prototype, descriptors);
  return HTMLBridgeElement;
}
const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), []);
{
  // This ARIA reflection only really makes sense in the browser. On the server, there is no `renderedCallback()`,
  // so you cannot do e.g. `this.template.querySelector('x-child').ariaBusy = 'true'`. So we don't need to expose
  // ARIA props outside the LightningElement
  if (lwcRuntimeFlags.DISABLE_ARIA_REFLECTION_POLYFILL) {
    // If ARIA reflection is not applied globally to Element.prototype, apply it to HTMLBridgeElement.prototype.
    // This allows `elm.aria*` property accessors to work from outside a component, and to reflect `aria-*` attrs.
    // This is especially important because the template compiler compiles aria-* attrs on components to aria* props
    //
    // Also note that we apply this to BaseBridgeElement.prototype to avoid excessively redefining property
    // accessors inside the HTMLBridgeElementFactory.
    applyAriaReflection(BaseBridgeElement.prototype);
  }
}
freeze(BaseBridgeElement);
seal(BaseBridgeElement.prototype);

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const supportsWeakRefs = typeof WeakRef === 'function' && typeof FinalizationRegistry === 'function';
// In browsers that doesn't support WeakRefs, the values will still leak, but at least the keys won't
class LegacyWeakMultiMap {
  constructor() {
    this._map = new WeakMap();
  }
  _getValues(key) {
    let values = this._map.get(key);
    if (isUndefined$1(values)) {
      values = new Set();
      this._map.set(key, values);
    }
    return values;
  }
  get(key) {
    return this._getValues(key);
  }
  add(key, vm) {
    const set = this._getValues(key);
    set.add(vm);
  }
  delete(key) {
    this._map.delete(key);
  }
}
// This implementation relies on the WeakRef/FinalizationRegistry proposal.
// For some background, see: https://github.com/tc39/proposal-weakrefs
class ModernWeakMultiMap {
  constructor() {
    this._map = new WeakMap();
    this._registry = new FinalizationRegistry(weakRefs => {
      // This should be considered an optional cleanup method to remove GC'ed values from their respective arrays.
      // JS VMs are not obligated to call FinalizationRegistry callbacks.
      // Work backwards, removing stale VMs
      for (let i = weakRefs.length - 1; i >= 0; i--) {
        const vm = weakRefs[i].deref();
        if (isUndefined$1(vm)) {
          ArraySplice.call(weakRefs, i, 1); // remove
        }
      }
    });
  }

  _getWeakRefs(key) {
    let weakRefs = this._map.get(key);
    if (isUndefined$1(weakRefs)) {
      weakRefs = [];
      this._map.set(key, weakRefs);
    }
    return weakRefs;
  }
  get(key) {
    const weakRefs = this._getWeakRefs(key);
    const result = new Set();
    for (const weakRef of weakRefs) {
      const vm = weakRef.deref();
      if (!isUndefined$1(vm)) {
        result.add(vm);
      }
    }
    return result;
  }
  add(key, value) {
    const weakRefs = this._getWeakRefs(key);
    // We could check for duplicate values here, but it doesn't seem worth it.
    // We transform the output into a Set anyway
    ArrayPush$1.call(weakRefs, new WeakRef(value));
    // It's important here not to leak the second argument, which is the "held value." The FinalizationRegistry
    // effectively creates a strong reference between the first argument (the "target") and the held value. When
    // the target is GC'ed, the callback is called, and then the held value is GC'ed.
    // Putting the key here would mean the key is not GC'ed until the value is GC'ed, which defeats the purpose
    // of the WeakMap. Whereas putting the weakRefs array here is fine, because it doesn't have a strong reference
    // to anything. See also this example:
    // https://gist.github.com/nolanlawson/79a3d36e8e6cc25c5048bb17c1795aea
    this._registry.register(value, weakRefs);
  }
  delete(key) {
    this._map.delete(key);
  }
}
const WeakMultiMap = supportsWeakRefs ? ModernWeakMultiMap : LegacyWeakMultiMap;

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const swappedTemplateMap = new WeakMap();
const swappedComponentMap = new WeakMap();
const swappedStyleMap = new WeakMap();
// The important thing here is the weak values – VMs are transient (one per component instance) and should be GC'ed,
// so we don't want to create strong references to them.
// The weak keys are kind of useless, because Templates, LightningElementConstructors, and StylesheetFactories are
// never GC'ed. But maybe they will be someday, so we may as well use weak keys too.
const activeTemplates = new WeakMultiMap();
const activeComponents = new WeakMultiMap();
const activeStyles = new WeakMultiMap();
function getTemplateOrSwappedTemplate(tpl) {
  const visited = new Set();
  while (swappedTemplateMap.has(tpl) && !visited.has(tpl)) {
    visited.add(tpl);
    tpl = swappedTemplateMap.get(tpl);
  }
  return tpl;
}
function getComponentOrSwappedComponent(Ctor) {
  const visited = new Set();
  while (swappedComponentMap.has(Ctor) && !visited.has(Ctor)) {
    visited.add(Ctor);
    Ctor = swappedComponentMap.get(Ctor);
  }
  return Ctor;
}
function getStyleOrSwappedStyle(style) {
  const visited = new Set();
  while (swappedStyleMap.has(style) && !visited.has(style)) {
    visited.add(style);
    style = swappedStyleMap.get(style);
  }
  return style;
}
function setActiveVM(vm) {
  // tracking active component
  const Ctor = vm.def.ctor;
  // this will allow us to keep track of the hot components
  activeComponents.add(Ctor, vm);
  // tracking active template
  const tpl = vm.cmpTemplate;
  if (tpl) {
    // this will allow us to keep track of the templates that are
    // being used by a hot component
    activeTemplates.add(tpl, vm);
    // tracking active styles associated to template
    const stylesheets = tpl.stylesheets;
    if (!isUndefined$1(stylesheets)) {
      for (const stylesheet of flattenStylesheets(stylesheets)) {
        // this is necessary because we don't hold the list of styles
        // in the vm, we only hold the selected (already swapped template)
        // but the styles attached to the template might not be the actual
        // active ones, but the swapped versions of those.
        const swappedStylesheet = getStyleOrSwappedStyle(stylesheet);
        // this will allow us to keep track of the stylesheet that are
        // being used by a hot component
        activeStyles.add(swappedStylesheet, vm);
      }
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for producing the ComponentDef object that is always
 * accessible via `vm.def`. This is lazily created during the creation of the first
 * instance of a component class, and shared across all instances.
 *
 * This structure can be used to synthetically create proxies, and understand the
 * shape of a component. It is also used internally to apply extra optimizations.
 */
const CtorToDefMap = new WeakMap();
function getCtorProto(Ctor) {
  let proto = getPrototypeOf$1(Ctor);
  if (isNull(proto)) {
    throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
  }
  // covering the cases where the ref is circular in AMD
  if (isCircularModuleDependency(proto)) {
    const p = resolveCircularModuleDependency(proto);
    {
      if (isNull(p)) {
        throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
      }
    }
    // escape hatch for Locker and other abstractions to provide their own base class instead
    // of our Base class without having to leak it to user-land. If the circular function returns
    // itself, that's the signal that we have hit the end of the proto chain, which must always
    // be base.
    proto = p === proto ? LightningElement : p;
  }
  return proto;
}
function createComponentDef(Ctor) {
  const {
    shadowSupportMode: ctorShadowSupportMode,
    renderMode: ctorRenderMode
  } = Ctor;
  {
    const ctorName = Ctor.name;
    // Removing the following assert until https://bugs.webkit.org/show_bug.cgi?id=190140 is fixed.
    // assert.isTrue(ctorName && isString(ctorName), `${toString(Ctor)} should have a "name" property with string value, but found ${ctorName}.`);
    if (!Ctor.constructor) {
      // This error seems impossible to hit, due to an earlier check in `isComponentConstructor()`.
      // But we keep it here just in case.
      logError(`Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);
    }
    if (!isUndefined$1(ctorShadowSupportMode) && ctorShadowSupportMode !== "any" /* ShadowSupportMode.Any */ && ctorShadowSupportMode !== "reset" /* ShadowSupportMode.Default */) {
      logError(`Invalid value for static property shadowSupportMode: '${ctorShadowSupportMode}'`);
    }
    if (!isUndefined$1(ctorRenderMode) && ctorRenderMode !== 'light' && ctorRenderMode !== 'shadow') {
      logError(`Invalid value for static property renderMode: '${ctorRenderMode}'. renderMode must be either 'light' or 'shadow'.`);
    }
  }
  const decoratorsMeta = getDecoratorsMeta(Ctor);
  const {
    apiFields,
    apiFieldsConfig,
    apiMethods,
    wiredFields,
    wiredMethods,
    observedFields
  } = decoratorsMeta;
  const proto = Ctor.prototype;
  let {
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    render
  } = proto;
  const superProto = getCtorProto(Ctor);
  const superDef = superProto !== LightningElement ? getComponentInternalDef(superProto) : lightingElementDef;
  const bridge = HTMLBridgeElementFactory(superDef.bridge, keys(apiFields), keys(apiMethods));
  const props = assign$1(create$4(null), superDef.props, apiFields);
  const propsConfig = assign$1(create$4(null), superDef.propsConfig, apiFieldsConfig);
  const methods = assign$1(create$4(null), superDef.methods, apiMethods);
  const wire = assign$1(create$4(null), superDef.wire, wiredFields, wiredMethods);
  connectedCallback = connectedCallback || superDef.connectedCallback;
  disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
  renderedCallback = renderedCallback || superDef.renderedCallback;
  errorCallback = errorCallback || superDef.errorCallback;
  render = render || superDef.render;
  let shadowSupportMode = superDef.shadowSupportMode;
  if (!isUndefined$1(ctorShadowSupportMode)) {
    shadowSupportMode = ctorShadowSupportMode;
  }
  let renderMode = superDef.renderMode;
  if (!isUndefined$1(ctorRenderMode)) {
    renderMode = ctorRenderMode === 'light' ? 0 /* RenderMode.Light */ : 1 /* RenderMode.Shadow */;
  }

  const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
  const name = Ctor.name || superDef.name;
  // installing observed fields into the prototype.
  defineProperties(proto, observedFields);
  const def = {
    ctor: Ctor,
    name,
    wire,
    props,
    propsConfig,
    methods,
    bridge,
    template,
    renderMode,
    shadowSupportMode,
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    render
  };
  // This is a no-op unless Lightning DevTools are enabled.
  instrumentDef(def);
  {
    freeze(Ctor.prototype);
  }
  return def;
}
/**
 * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
 * subject to change or being removed.
 */
function isComponentConstructor(ctor) {
  if (!isFunction$1(ctor)) {
    return false;
  }
  // Fast path: LightningElement is part of the prototype chain of the constructor.
  if (ctor.prototype instanceof LightningElement) {
    return true;
  }
  // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
  // climb up the constructor prototype chain to check in case there are circular dependencies
  // to resolve.
  let current = ctor;
  do {
    if (isCircularModuleDependency(current)) {
      const circularResolved = resolveCircularModuleDependency(current);
      // If the circular function returns itself, that's the signal that we have hit the end
      // of the proto chain, which must always be a valid base constructor.
      if (circularResolved === current) {
        return true;
      }
      current = circularResolved;
    }
    if (current === LightningElement) {
      return true;
    }
  } while (!isNull(current) && (current = getPrototypeOf$1(current)));
  // Finally return false if the LightningElement is not part of the prototype chain.
  return false;
}
function getComponentInternalDef(Ctor) {
  {
    Ctor = getComponentOrSwappedComponent(Ctor);
  }
  let def = CtorToDefMap.get(Ctor);
  if (isUndefined$1(def)) {
    if (isCircularModuleDependency(Ctor)) {
      const resolvedCtor = resolveCircularModuleDependency(Ctor);
      def = getComponentInternalDef(resolvedCtor);
      // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
      // look up the definition in cache instead of re-resolving and recreating the def.
      CtorToDefMap.set(Ctor, def);
      return def;
    }
    if (!isComponentConstructor(Ctor)) {
      throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
    }
    def = createComponentDef(Ctor);
    CtorToDefMap.set(Ctor, def);
  }
  return def;
}
function getComponentHtmlPrototype(Ctor) {
  const def = getComponentInternalDef(Ctor);
  return def.bridge;
}
const lightingElementDef = {
  ctor: LightningElement,
  name: LightningElement.name,
  props: lightningBasedDescriptors,
  propsConfig: EmptyObject,
  methods: EmptyObject,
  renderMode: 1 /* RenderMode.Shadow */,
  shadowSupportMode: "reset" /* ShadowSupportMode.Default */,
  wire: EmptyObject,
  bridge: BaseBridgeElement,
  template: defaultEmptyTemplate,
  render: LightningElement.prototype.render
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function makeHostToken(token) {
  // Note: if this ever changes, update the `cssScopeTokens` returned by `@lwc/compiler`
  return `${token}-host`;
}
function createInlineStyleVNode(content) {
  return api$2.h('style', {
    key: 'style',
    attrs: {
      type: 'text/css'
    }
  }, [api$2.t(content)]);
}
function updateStylesheetToken(vm, template) {
  const {
    elm,
    context,
    renderMode,
    shadowMode,
    renderer: {
      getClassList,
      removeAttribute,
      setAttribute
    }
  } = vm;
  const {
    stylesheets: newStylesheets,
    stylesheetToken: newStylesheetToken
  } = template;
  const {
    stylesheets: newVmStylesheets
  } = vm;
  const isSyntheticShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */;
  const {
    hasScopedStyles
  } = context;
  let newToken;
  let newHasTokenInClass;
  let newHasTokenInAttribute;
  // Reset the styling token applied to the host element.
  const {
    stylesheetToken: oldToken,
    hasTokenInClass: oldHasTokenInClass,
    hasTokenInAttribute: oldHasTokenInAttribute
  } = context;
  if (!isUndefined$1(oldToken)) {
    if (oldHasTokenInClass) {
      getClassList(elm).remove(makeHostToken(oldToken));
    }
    if (oldHasTokenInAttribute) {
      removeAttribute(elm, makeHostToken(oldToken));
    }
  }
  // Apply the new template styling token to the host element, if the new template has any
  // associated stylesheets. In the case of light DOM, also ensure there is at least one scoped stylesheet.
  const hasNewStylesheets = hasStyles(newStylesheets);
  const hasNewVmStylesheets = hasStyles(newVmStylesheets);
  if (hasNewStylesheets || hasNewVmStylesheets) {
    newToken = newStylesheetToken;
  }
  // Set the new styling token on the host element
  if (!isUndefined$1(newToken)) {
    if (hasScopedStyles) {
      getClassList(elm).add(makeHostToken(newToken));
      newHasTokenInClass = true;
    }
    if (isSyntheticShadow) {
      setAttribute(elm, makeHostToken(newToken), '');
      newHasTokenInAttribute = true;
    }
  }
  // Update the styling tokens present on the context object.
  context.stylesheetToken = newToken;
  context.hasTokenInClass = newHasTokenInClass;
  context.hasTokenInAttribute = newHasTokenInAttribute;
}
function evaluateStylesheetsContent(stylesheets, stylesheetToken, vm) {
  const content = [];
  let root;
  for (let i = 0; i < stylesheets.length; i++) {
    let stylesheet = stylesheets[i];
    if (isArray$1(stylesheet)) {
      ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, stylesheetToken, vm));
    } else {
      {
        // Check for compiler version mismatch in dev mode only
        checkVersionMismatch(stylesheet, 'stylesheet');
        // in dev-mode, we support hot swapping of stylesheet, which means that
        // the component instance might be attempting to use an old version of
        // the stylesheet, while internally, we have a replacement for it.
        stylesheet = getStyleOrSwappedStyle(stylesheet);
      }
      const isScopedCss = stylesheet[KEY__SCOPED_CSS];
      if (lwcRuntimeFlags.DISABLE_LIGHT_DOM_UNSCOPED_CSS && !isScopedCss && vm.renderMode === 0 /* RenderMode.Light */) {
        logError('Unscoped CSS is not supported in Light DOM in this environment. Please use scoped CSS ' + '(*.scoped.css) instead of unscoped CSS (*.css). See also: https://sfdc.co/scoped-styles-light-dom');
        continue;
      }
      // Apply the scope token only if the stylesheet itself is scoped, or if we're rendering synthetic shadow.
      const scopeToken = isScopedCss || vm.shadowMode === 1 /* ShadowMode.Synthetic */ && vm.renderMode === 1 /* RenderMode.Shadow */ ? stylesheetToken : undefined;
      // Use the actual `:host` selector if we're rendering global CSS for light DOM, or if we're rendering
      // native shadow DOM. Synthetic shadow DOM never uses `:host`.
      const useActualHostSelector = vm.renderMode === 0 /* RenderMode.Light */ ? !isScopedCss : vm.shadowMode === 0 /* ShadowMode.Native */;
      // Use the native :dir() pseudoclass only in native shadow DOM. Otherwise, in synthetic shadow,
      // we use an attribute selector on the host to simulate :dir().
      let useNativeDirPseudoclass;
      if (vm.renderMode === 1 /* RenderMode.Shadow */) {
        useNativeDirPseudoclass = vm.shadowMode === 0 /* ShadowMode.Native */;
      } else {
        // Light DOM components should only render `[dir]` if they're inside of a synthetic shadow root.
        // At the top level (root is null) or inside of a native shadow root, they should use `:dir()`.
        if (isUndefined$1(root)) {
          // Only calculate the root once as necessary
          root = getNearestShadowComponent(vm);
        }
        useNativeDirPseudoclass = isNull(root) || root.shadowMode === 0 /* ShadowMode.Native */;
      }

      ArrayPush$1.call(content, stylesheet(scopeToken, useActualHostSelector, useNativeDirPseudoclass));
    }
  }
  return content;
}
function getStylesheetsContent(vm, template) {
  const {
    stylesheets,
    stylesheetToken
  } = template;
  const {
    stylesheets: vmStylesheets
  } = vm;
  let content = [];
  if (hasStyles(stylesheets)) {
    content = evaluateStylesheetsContent(stylesheets, stylesheetToken, vm);
  }
  // VM (component) stylesheets apply after template stylesheets
  if (hasStyles(vmStylesheets)) {
    ArrayPush$1.apply(content, evaluateStylesheetsContent(vmStylesheets, stylesheetToken, vm));
  }
  return content;
}
// It might be worth caching this to avoid doing the lookup repeatedly, but
// perf testing has not shown it to be a huge improvement yet:
// https://github.com/salesforce/lwc/pull/2460#discussion_r691208892
function getNearestShadowComponent(vm) {
  let owner = vm;
  while (!isNull(owner)) {
    if (owner.renderMode === 1 /* RenderMode.Shadow */) {
      return owner;
    }
    owner = owner.owner;
  }
  return owner;
}
/**
 * If the component that is currently being rendered uses scoped styles,
 * this returns the unique token for that scoped stylesheet. Otherwise
 * it returns null.
 */
function getScopeTokenClass(owner) {
  const {
    cmpTemplate,
    context
  } = owner;
  return context.hasScopedStyles && (cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.stylesheetToken) || null;
}
function getNearestNativeShadowComponent(vm) {
  const owner = getNearestShadowComponent(vm);
  if (!isNull(owner) && owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
    // Synthetic-within-native is impossible. So if the nearest shadow component is
    // synthetic, we know we won't find a native component if we go any further.
    return null;
  }
  return owner;
}
function createStylesheet(vm, stylesheets) {
  const {
    renderMode,
    shadowMode,
    renderer: {
      insertStylesheet
    }
  } = vm;
  if (renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */) {
    for (let i = 0; i < stylesheets.length; i++) {
      insertStylesheet(stylesheets[i]);
    }
  } else if (vm.hydrated) {
    // Note: We need to ensure that during hydration, the stylesheets method is the same as those in ssr.
    //       This works in the client, because the stylesheets are created, and cached in the VM
    //       the first time the VM renders.
    // native shadow or light DOM, SSR
    return ArrayMap.call(stylesheets, createInlineStyleVNode);
  } else {
    // native shadow or light DOM, DOM renderer
    const root = getNearestNativeShadowComponent(vm);
    // null root means a global style
    const target = isNull(root) ? undefined : root.shadowRoot;
    for (let i = 0; i < stylesheets.length; i++) {
      insertStylesheet(stylesheets[i], target);
    }
  }
  return null;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function isVBaseElement(vnode) {
  const {
    type
  } = vnode;
  return type === 2 /* VNodeType.Element */ || type === 3 /* VNodeType.CustomElement */;
}

function isSameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVCustomElement(vnode) {
  return vnode.type === 3 /* VNodeType.CustomElement */;
}

function isVFragment(vnode) {
  return vnode.type === 5 /* VNodeType.Fragment */;
}

function isVScopedSlotFragment(vnode) {
  return vnode.type === 6 /* VNodeType.ScopedSlotFragment */;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ColonCharCode = 58;
function patchAttributes(oldVnode, vnode, renderer) {
  const {
    attrs,
    external
  } = vnode.data;
  if (isUndefined$1(attrs)) {
    return;
  }
  const oldAttrs = isNull(oldVnode) ? EmptyObject : oldVnode.data.attrs;
  // Attrs may be the same due to the static content optimization, so we can skip diffing
  if (oldAttrs === attrs) {
    return;
  }
  const {
    elm
  } = vnode;
  const {
    setAttribute,
    removeAttribute,
    setProperty
  } = renderer;
  for (const key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];
    if (old !== cur) {
      let propName;
      // For external custom elements, sniff to see if the attr should be considered a prop.
      // Use kebabCaseToCamelCase directly because we don't want to set props like `ariaLabel` or `tabIndex`
      // on a custom element versus just using the more reliable attribute format.
      if (external && (propName = kebabCaseToCamelCase(key)) in elm) {
        setProperty(elm, propName, cur);
      } else if (StringCharCodeAt.call(key, 3) === ColonCharCode) {
        // Assume xml namespace
        setAttribute(elm, key, cur, XML_NAMESPACE);
      } else if (StringCharCodeAt.call(key, 5) === ColonCharCode) {
        // Assume xlink namespace
        setAttribute(elm, key, cur, XLINK_NAMESPACE);
      } else if (isNull(cur) || isUndefined$1(cur)) {
        removeAttribute(elm, key);
      } else {
        setAttribute(elm, key, cur);
      }
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function isLiveBindingProp(sel, key) {
  // For properties with live bindings, we read values from the DOM element
  // instead of relying on internally tracked values.
  return sel === 'input' && (key === 'value' || key === 'checked');
}
function patchProps(oldVnode, vnode, renderer) {
  let {
    props
  } = vnode.data;
  const {
    spread
  } = vnode.data;
  if (isUndefined$1(props) && isUndefined$1(spread)) {
    return;
  }
  let oldProps;
  if (!isNull(oldVnode)) {
    oldProps = oldVnode.data.props;
    const oldSpread = oldVnode.data.spread;
    // Props may be the same due to the static content optimization, so we can skip diffing
    if (oldProps === props && oldSpread === spread) {
      return;
    }
    if (isUndefined$1(oldProps)) {
      oldProps = EmptyObject;
    }
    if (!isUndefined$1(oldSpread)) {
      oldProps = assign$1({}, oldProps, oldSpread);
    }
  }
  if (!isUndefined$1(spread)) {
    props = assign$1({}, props, spread);
  }
  const isFirstPatch = isNull(oldVnode);
  const {
    elm,
    sel
  } = vnode;
  const {
    getProperty,
    setProperty
  } = renderer;
  for (const key in props) {
    const cur = props[key];
    // Set the property if it's the first time is is patched or if the previous property is
    // different than the one previously set.
    if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? getProperty(elm, key) : oldProps[key]) || !(key in oldProps) // this is required because the above case will pass when `cur` is `undefined` and key is missing in `oldProps`
    ) {
      // Additional verification if properties are supported by the element
      // Validation relies on html properties and public properties being defined on the element,
      // SSR has its own custom validation.
      {
        if (!(key in elm)) {
          logWarn(`Unknown public property "${key}" of element <${elm.tagName.toLowerCase()}>. This is either a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}", or the attribute does not exist in this browser or DOM implementation.`);
        }
      }
      setProperty(elm, key, cur);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const classNameToClassMap = create$4(null);
function getMapFromClassName(className) {
  // Intentionally using == to match undefined and null values from computed style attribute
  if (className == null) {
    return EmptyObject;
  }
  // computed class names must be string
  className = isString$1(className) ? className : className + '';
  let map = classNameToClassMap[className];
  if (map) {
    return map;
  }
  map = create$4(null);
  let start = 0;
  let o;
  const len = className.length;
  for (o = 0; o < len; o++) {
    if (StringCharCodeAt.call(className, o) === SPACE_CHAR) {
      if (o > start) {
        map[StringSlice.call(className, start, o)] = true;
      }
      start = o + 1;
    }
  }
  if (o > start) {
    map[StringSlice.call(className, start, o)] = true;
  }
  classNameToClassMap[className] = map;
  {
    // just to make sure that this object never changes as part of the diffing algo
    freeze(map);
  }
  return map;
}
function patchClassAttribute(oldVnode, vnode, renderer) {
  const {
    elm,
    data: {
      className: newClass
    }
  } = vnode;
  const oldClass = isNull(oldVnode) ? undefined : oldVnode.data.className;
  if (oldClass === newClass) {
    return;
  }
  const {
    getClassList
  } = renderer;
  const classList = getClassList(elm);
  const newClassMap = getMapFromClassName(newClass);
  const oldClassMap = getMapFromClassName(oldClass);
  let name;
  for (name in oldClassMap) {
    // remove only if it is not in the new class collection and it is not set from within the instance
    if (isUndefined$1(newClassMap[name])) {
      classList.remove(name);
    }
  }
  for (name in newClassMap) {
    if (isUndefined$1(oldClassMap[name])) {
      classList.add(name);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The style property is a string when defined via an expression in the template.
function patchStyleAttribute(oldVnode, vnode, renderer) {
  const {
    elm,
    data: {
      style: newStyle
    }
  } = vnode;
  const oldStyle = isNull(oldVnode) ? undefined : oldVnode.data.style;
  if (oldStyle === newStyle) {
    return;
  }
  const {
    setAttribute,
    removeAttribute
  } = renderer;
  if (!isString$1(newStyle) || newStyle === '') {
    removeAttribute(elm, 'style');
  } else {
    setAttribute(elm, 'style', newStyle);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function applyEventListeners(vnode, renderer) {
  var _a;
  const {
    elm
  } = vnode;
  const on = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.on;
  if (isUndefined$1(on)) {
    return;
  }
  const {
    addEventListener
  } = renderer;
  for (const name in on) {
    const handler = on[name];
    addEventListener(elm, name, handler);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The HTML class property becomes the vnode.data.classMap object when defined as a string in the template.
// The compiler takes care of transforming the inline classnames into an object. It's faster to set the
// different classnames properties individually instead of via a string.
function applyStaticClassAttribute(vnode, renderer) {
  const {
    elm,
    data: {
      classMap
    }
  } = vnode;
  if (isUndefined$1(classMap)) {
    return;
  }
  const {
    getClassList
  } = renderer;
  const classList = getClassList(elm);
  for (const name in classMap) {
    classList.add(name);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The HTML style property becomes the vnode.data.styleDecls object when defined as a string in the template.
// The compiler takes care of transforming the inline style into an object. It's faster to set the
// different style properties individually instead of via a string.
function applyStaticStyleAttribute(vnode, renderer) {
  const {
    elm,
    data: {
      styleDecls
    }
  } = vnode;
  if (isUndefined$1(styleDecls)) {
    return;
  }
  const {
    setCSSStyleProperty
  } = renderer;
  for (let i = 0; i < styleDecls.length; i++) {
    const [prop, value, important] = styleDecls[i];
    setCSSStyleProperty(elm, prop, value, important);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function patchChildren(c1, c2, parent, renderer) {
  if (hasDynamicChildren(c2)) {
    updateDynamicChildren(c1, c2, parent, renderer);
  } else {
    updateStaticChildren(c1, c2, parent, renderer);
  }
}
function patch(n1, n2, parent, renderer) {
  var _a, _b;
  if (n1 === n2) {
    return;
  }
  {
    if (!isSameVnode(n1, n2) &&
    // Currently the only scenario when patch does not receive the same vnodes are for
    // dynamic components. When a dynamic component's constructor changes, the value of its
    // tag name (sel) will be different. The engine will unmount the previous element
    // and mount the new one using the new constructor in patchCustomElement.
    !(isVCustomElement(n1) && isVCustomElement(n2))) {
      throw new Error('Expected these VNodes to be the same: ' + JSON.stringify({
        sel: n1.sel,
        key: n1.key
      }) + ', ' + JSON.stringify({
        sel: n2.sel,
        key: n2.key
      }));
    }
  }
  switch (n2.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      patchText(n1, n2, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      patchComment(n1, n2, renderer);
      break;
    case 4 /* VNodeType.Static */:
      n2.elm = n1.elm;
      break;
    case 5 /* VNodeType.Fragment */:
      patchFragment(n1, n2, parent, renderer);
      break;
    case 2 /* VNodeType.Element */:
      patchElement(n1, n2, (_a = n2.data.renderer) !== null && _a !== void 0 ? _a : renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      patchCustomElement(n1, n2, parent, (_b = n2.data.renderer) !== null && _b !== void 0 ? _b : renderer);
      break;
  }
}
function mount(node, parent, renderer, anchor) {
  var _a, _b;
  switch (node.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      mountText(node, parent, anchor, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      mountComment(node, parent, anchor, renderer);
      break;
    case 4 /* VNodeType.Static */:
      // VStatic cannot have a custom renderer associated to them, using owner's renderer
      mountStatic(node, parent, anchor, renderer);
      break;
    case 5 /* VNodeType.Fragment */:
      mountFragment(node, parent, anchor, renderer);
      break;
    case 2 /* VNodeType.Element */:
      // If the vnode data has a renderer override use it, else fallback to owner's renderer
      mountElement(node, parent, anchor, (_a = node.data.renderer) !== null && _a !== void 0 ? _a : renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      // If the vnode data has a renderer override use it, else fallback to owner's renderer
      mountCustomElement(node, parent, anchor, (_b = node.data.renderer) !== null && _b !== void 0 ? _b : renderer);
      break;
  }
}
function patchText(n1, n2, renderer) {
  n2.elm = n1.elm;
  if (n2.text !== n1.text) {
    updateTextContent(n2, renderer);
  }
}
function mountText(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    createText
  } = renderer;
  const textNode = vnode.elm = createText(vnode.text);
  linkNodeToShadow(textNode, owner, renderer);
  insertNode(textNode, parent, anchor, renderer);
}
function patchComment(n1, n2, renderer) {
  n2.elm = n1.elm;
  // FIXME: Comment nodes should be static, we shouldn't need to diff them together. However
  // it is the case today.
  if (n2.text !== n1.text) {
    updateTextContent(n2, renderer);
  }
}
function mountComment(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    createComment
  } = renderer;
  const commentNode = vnode.elm = createComment(vnode.text);
  linkNodeToShadow(commentNode, owner, renderer);
  insertNode(commentNode, parent, anchor, renderer);
}
function mountFragment(vnode, parent, anchor, renderer) {
  const {
    children
  } = vnode;
  mountVNodes(children, parent, renderer, anchor);
  vnode.elm = vnode.leading.elm;
}
function patchFragment(n1, n2, parent, renderer) {
  const {
    children,
    stable
  } = n2;
  if (stable) {
    updateStaticChildren(n1.children, children, parent, renderer);
  } else {
    updateDynamicChildren(n1.children, children, parent, renderer);
  }
  // Note: not reusing n1.elm, because during patching, it may be patched with another text node.
  n2.elm = n2.leading.elm;
}
function mountElement(vnode, parent, anchor, renderer) {
  const {
    sel,
    owner,
    data: {
      svg
    }
  } = vnode;
  const {
    createElement
  } = renderer;
  const namespace = isTrue(svg) ? SVG_NAMESPACE : undefined;
  const elm = vnode.elm = createElement(sel, namespace);
  linkNodeToShadow(elm, owner, renderer);
  applyStyleScoping(elm, owner, renderer);
  applyDomManual(elm, vnode);
  applyElementRestrictions(elm, vnode);
  patchElementPropsAndAttrs$1(null, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
  mountVNodes(vnode.children, elm, renderer, null);
}
function patchElement(n1, n2, renderer) {
  const elm = n2.elm = n1.elm;
  patchElementPropsAndAttrs$1(n1, n2, renderer);
  patchChildren(n1.children, n2.children, elm, renderer);
}
function mountStatic(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    cloneNode,
    isSyntheticShadowDefined
  } = renderer;
  const elm = vnode.elm = cloneNode(vnode.fragment, true);
  linkNodeToShadow(elm, owner, renderer);
  applyElementRestrictions(elm, vnode);
  // Marks this node as Static to propagate the shadow resolver. must happen after elm is assigned to the proper shadow
  const {
    renderMode,
    shadowMode
  } = owner;
  if (isSyntheticShadowDefined) {
    if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
      elm[KEY__SHADOW_STATIC] = true;
    }
  }
  insertNode(elm, parent, anchor, renderer);
  // Event listeners are only applied once when mounting, so they are allowed for static vnodes
  applyEventListeners(vnode, renderer);
}
function mountCustomElement(vnode, parent, anchor, renderer) {
  const {
    sel,
    owner
  } = vnode;
  const {
    createCustomElement
  } = renderer;
  /**
   * Note: if the upgradable constructor does not expect, or throw when we new it
   * with a callback as the first argument, we could implement a more advanced
   * mechanism that only passes that argument if the constructor is known to be
   * an upgradable custom element.
   */
  let vm;
  const upgradeCallback = elm => {
    // the custom element from the registry is expecting an upgrade callback
    vm = createViewModelHook(elm, vnode, renderer);
  };
  let connectedCallback;
  let disconnectedCallback;
  if (lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
    connectedCallback = elm => {
      connectRootElement(elm);
    };
    disconnectedCallback = elm => {
      disconnectRootElement(elm);
    };
  }
  // Should never get a tag with upper case letter at this point; the compiler
  // should produce only tags with lowercase letters. However, the Java
  // compiler may generate tagnames with uppercase letters so - for backwards
  // compatibility, we lower case the tagname here.
  const normalizedTagname = sel.toLowerCase();
  const elm = createCustomElement(normalizedTagname, upgradeCallback, connectedCallback, disconnectedCallback);
  vnode.elm = elm;
  vnode.vm = vm;
  linkNodeToShadow(elm, owner, renderer);
  applyStyleScoping(elm, owner, renderer);
  if (vm) {
    allocateChildren(vnode, vm);
  }
  patchElementPropsAndAttrs$1(null, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
  if (vm) {
    {
      if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
        {
          // With synthetic lifecycle callbacks, it's possible for elements to be removed without the engine
          // noticing it (e.g. `appendChild` the same host element twice). This test ensures we don't regress.
          assert.isTrue(vm.state === 0 /* VMState.created */, `${vm} cannot be recycled.`);
        }
        runConnectedCallback(vm);
      }
    }
  }
  mountVNodes(vnode.children, elm, renderer, null);
  if (vm) {
    appendVM(vm);
  }
}
function patchCustomElement(n1, n2, parent, renderer) {
  // TODO [#3331]: This if branch should be removed in 246 with lwc:dynamic
  if (n1.ctor !== n2.ctor) {
    // If the constructor differs, unmount the current component and mount a new one using the new
    // constructor.
    const anchor = renderer.nextSibling(n1.elm);
    unmount(n1, parent, renderer, true);
    mountCustomElement(n2, parent, anchor, renderer);
  } else {
    // Otherwise patch the existing component with new props/attrs/etc.
    const elm = n2.elm = n1.elm;
    const vm = n2.vm = n1.vm;
    patchElementPropsAndAttrs$1(n1, n2, renderer);
    if (!isUndefined$1(vm)) {
      // in fallback mode, the allocation will always set children to
      // empty and delegate the real allocation to the slot elements
      allocateChildren(n2, vm);
      // Solves an edge case with slotted VFragments in native shadow mode.
      //
      // During allocation, in native shadow, slotted VFragment nodes are flattened and their text delimiters are removed
      // to avoid interfering with native slot behavior. When this happens, if any of the fragments
      // were not stable, the children must go through the dynamic diffing algo.
      //
      // If the new children (n2.children) contain no VFragments, but the previous children (n1.children) were dynamic,
      // the new nodes must be marked dynamic so that all nodes are properly updated. The only indicator that the new
      // nodes need to be dynamic comes from the previous children, so we check that to determine whether we need to
      // mark the new children dynamic.
      //
      // Example:
      // n1.children: [div, VFragment('', div, null, ''), div] => [div, div, null, div]; // marked dynamic
      // n2.children: [div, null, div] => [div, null, div] // marked ???
      const {
        shadowMode,
        renderMode
      } = vm;
      if (shadowMode == 0 /* ShadowMode.Native */ && renderMode !== 0 /* RenderMode.Light */ && hasDynamicChildren(n1.children)) {
        // No-op if children has already been marked dynamic by 'allocateChildren()'.
        markAsDynamicChildren(n2.children);
      }
    }
    // in fallback mode, the children will be always empty, so, nothing
    // will happen, but in native, it does allocate the light dom
    patchChildren(n1.children, n2.children, elm, renderer);
    if (!isUndefined$1(vm)) {
      // this will probably update the shadowRoot, but only if the vm is in a dirty state
      // this is important to preserve the top to bottom synchronous rendering phase.
      rerenderVM(vm);
    }
  }
}
function mountVNodes(vnodes, parent, renderer, anchor, start = 0, end = vnodes.length) {
  for (; start < end; ++start) {
    const vnode = vnodes[start];
    if (isVNode(vnode)) {
      mount(vnode, parent, renderer, anchor);
    }
  }
}
function unmount(vnode, parent, renderer, doRemove = false) {
  const {
    type,
    elm,
    sel
  } = vnode;
  // When unmounting a VNode subtree not all the elements have to removed from the DOM. The
  // subtree root, is the only element worth unmounting from the subtree.
  if (doRemove) {
    if (type === 5 /* VNodeType.Fragment */) {
      unmountVNodes(vnode.children, parent, renderer, doRemove);
    } else {
      // The vnode might or might not have a data.renderer associated to it
      // but the removal used here is from the owner instead.
      removeNode(elm, parent, renderer);
    }
  }
  switch (type) {
    case 2 /* VNodeType.Element */:
      {
        // Slot content is removed to trigger slotchange event when removing slot.
        // Only required for synthetic shadow.
        const shouldRemoveChildren = sel === 'slot' && vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
        unmountVNodes(vnode.children, elm, renderer, shouldRemoveChildren);
        break;
      }
    case 3 /* VNodeType.CustomElement */:
      {
        const {
          vm
        } = vnode;
        // No need to unmount the children here, `removeVM` will take care of removing the
        // children.
        if (!isUndefined$1(vm)) {
          removeVM(vm);
        }
      }
  }
}
function unmountVNodes(vnodes, parent, renderer, doRemove = false, start = 0, end = vnodes.length) {
  for (; start < end; ++start) {
    const ch = vnodes[start];
    if (isVNode(ch)) {
      unmount(ch, parent, renderer, doRemove);
    }
  }
}
function isVNode(vnode) {
  return vnode != null;
}
function linkNodeToShadow(elm, owner, renderer) {
  const {
    renderRoot,
    renderMode,
    shadowMode
  } = owner;
  const {
    isSyntheticShadowDefined
  } = renderer;
  // TODO [#1164]: this should eventually be done by the polyfill directly
  if (isSyntheticShadowDefined) {
    if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
      elm[KEY__SHADOW_RESOLVER] = renderRoot[KEY__SHADOW_RESOLVER];
    }
  }
}
function updateTextContent(vnode, renderer) {
  const {
    elm,
    text
  } = vnode;
  const {
    setText
  } = renderer;
  {
    unlockDomMutation();
  }
  setText(elm, text);
  {
    lockDomMutation();
  }
}
function insertFragmentOrNode(vnode, parent, anchor, renderer) {
  {
    unlockDomMutation();
  }
  if (isVFragment(vnode)) {
    const children = vnode.children;
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (!isNull(child)) {
        renderer.insert(child.elm, parent, anchor);
      }
    }
  } else {
    renderer.insert(vnode.elm, parent, anchor);
  }
  {
    lockDomMutation();
  }
}
function insertNode(node, parent, anchor, renderer) {
  {
    unlockDomMutation();
  }
  renderer.insert(node, parent, anchor);
  {
    lockDomMutation();
  }
}
function removeNode(node, parent, renderer) {
  {
    unlockDomMutation();
  }
  renderer.remove(node, parent);
  {
    lockDomMutation();
  }
}
function patchElementPropsAndAttrs$1(oldVnode, vnode, renderer) {
  if (isNull(oldVnode)) {
    applyEventListeners(vnode, renderer);
    applyStaticClassAttribute(vnode, renderer);
    applyStaticStyleAttribute(vnode, renderer);
  }
  // Attrs need to be applied to element before props IE11 will wipe out value on radio inputs if
  // value is set before type=radio.
  patchClassAttribute(oldVnode, vnode, renderer);
  patchStyleAttribute(oldVnode, vnode, renderer);
  patchAttributes(oldVnode, vnode, renderer);
  patchProps(oldVnode, vnode, renderer);
}
function applyStyleScoping(elm, owner, renderer) {
  // Set the class name for `*.scoped.css` style scoping.
  const scopeToken = getScopeTokenClass(owner);
  if (!isNull(scopeToken)) {
    const {
      getClassList
    } = renderer;
    // TODO [#2762]: this dot notation with add is probably problematic
    // probably we should have a renderer api for just the add operation
    getClassList(elm).add(scopeToken);
  }
  // Set property element for synthetic shadow DOM style scoping.
  const {
    stylesheetToken: syntheticToken
  } = owner.context;
  if (owner.shadowMode === 1 /* ShadowMode.Synthetic */ && !isUndefined$1(syntheticToken)) {
    elm.$shadowToken$ = syntheticToken;
  }
}
function applyDomManual(elm, vnode) {
  var _a;
  const {
    owner,
    data: {
      context
    }
  } = vnode;
  if (owner.shadowMode === 1 /* ShadowMode.Synthetic */ && ((_a = context === null || context === void 0 ? void 0 : context.lwc) === null || _a === void 0 ? void 0 : _a.dom) === "manual" /* LwcDomMode.Manual */) {
    elm.$domManual$ = true;
  }
}
function applyElementRestrictions(elm, vnode) {
  var _a, _b;
  {
    const isSynthetic = vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
    const isPortal = vnode.type === 2 /* VNodeType.Element */ && ((_b = (_a = vnode.data.context) === null || _a === void 0 ? void 0 : _a.lwc) === null || _b === void 0 ? void 0 : _b.dom) === "manual" /* LwcDomMode.Manual */;
    const isLight = vnode.owner.renderMode === 0 /* RenderMode.Light */;
    patchElementWithRestrictions(elm, {
      isPortal,
      isLight,
      isSynthetic
    });
  }
}
function allocateChildren(vnode, vm) {
  // A component with slots will re-render because:
  // 1- There is a change of the internal state.
  // 2- There is a change on the external api (ex: slots)
  //
  // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
  // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
  // in a reused VCustomElement, there won't be any slotted children.
  // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
  //
  // In case #2, we will always get a fresh VCustomElement.
  const children = vnode.aChildren || vnode.children;
  const {
    renderMode,
    shadowMode
  } = vm;
  {
    // If any of the children being allocated is a scoped slot fragment, make sure the receiving
    // component is a light DOM component. This is mainly to validate light dom parent running
    // in native shadow mode.
    if (renderMode !== 0 /* RenderMode.Light */ && ArraySome.call(children, child => !isNull(child) && isVScopedSlotFragment(child))) {
      logError(`Invalid usage of 'lwc:slot-data' on ${getComponentTag(vm)} tag. Scoped slot content can only be passed to a light dom child.`);
    }
  }
  // If any of the children being allocated are VFragments, we remove the text delimiters and flatten all immediate
  // children VFragments to avoid them interfering with default slot behavior.
  const allocatedChildren = flattenFragmentsInChildren(children);
  vnode.children = allocatedChildren;
  vm.aChildren = allocatedChildren;
  if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
    // slow path
    allocateInSlot(vm, allocatedChildren, vnode.owner);
    // save the allocated children in case this vnode is reused.
    vnode.aChildren = allocatedChildren;
    // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!
    vnode.children = EmptyArray;
  }
}
/**
 * Flattens the contents of all VFragments in an array of VNodes, removes the text delimiters on those VFragments, and
 * marks the resulting children array as dynamic. Uses a stack (array) to iteratively traverse the nested VFragments
 * and avoid the perf overhead of creating/destroying throwaway arrays/objects in a recursive approach.
 *
 * With the delimiters removed, the contents are marked dynamic so they are diffed correctly.
 *
 * This function is used for slotted VFragments to avoid the text delimiters interfering with slotting functionality.
 */
function flattenFragmentsInChildren(children) {
  const flattenedChildren = [];
  // Initialize our stack with the direct children of the custom component and check whether we have a VFragment.
  // If no VFragment is found in children, we don't need to traverse anything or mark the children dynamic and can return early.
  const nodeStack = [];
  let fragmentFound = false;
  for (let i = children.length - 1; i > -1; i -= 1) {
    const child = children[i];
    ArrayPush$1.call(nodeStack, child);
    fragmentFound = fragmentFound || !!(child && isVFragment(child));
  }
  if (!fragmentFound) {
    return children;
  }
  let currentNode;
  while (!isUndefined$1(currentNode = ArrayPop.call(nodeStack))) {
    if (!isNull(currentNode) && isVFragment(currentNode)) {
      const fChildren = currentNode.children;
      // Ignore the start and end text node delimiters
      for (let i = fChildren.length - 2; i > 0; i -= 1) {
        ArrayPush$1.call(nodeStack, fChildren[i]);
      }
    } else {
      ArrayPush$1.call(flattenedChildren, currentNode);
    }
  }
  // We always mark the children as dynamic because nothing generates stable VFragments yet.
  // If/when stable VFragments are generated by the compiler, this code should be updated to
  // not mark dynamic if all flattened VFragments were stable.
  markAsDynamicChildren(flattenedChildren);
  return flattenedChildren;
}
function createViewModelHook(elm, vnode, renderer) {
  let vm = getAssociatedVMIfPresent(elm);
  // There is a possibility that a custom element is registered under tagName, in which case, the
  // initialization is already carry on, and there is nothing else to do here since this hook is
  // called right after invoking `document.createElement`.
  if (!isUndefined$1(vm)) {
    return vm;
  }
  const {
    sel,
    mode,
    ctor,
    owner
  } = vnode;
  vm = createVM(elm, ctor, renderer, {
    mode,
    owner,
    tagName: sel
  });
  {
    assert.isTrue(isArray$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
  }
  return vm;
}
function allocateInSlot(vm, children, owner) {
  var _a, _b;
  const {
    cmpSlots: {
      slotAssignments: oldSlotsMapping
    }
  } = vm;
  const cmpSlotsMapping = create$4(null);
  // Collect all slots into cmpSlotsMapping
  for (let i = 0, len = children.length; i < len; i += 1) {
    const vnode = children[i];
    if (isNull(vnode)) {
      continue;
    }
    let slotName = '';
    if (isVBaseElement(vnode)) {
      slotName = (_b = (_a = vnode.data.attrs) === null || _a === void 0 ? void 0 : _a.slot) !== null && _b !== void 0 ? _b : '';
    } else if (isVScopedSlotFragment(vnode)) {
      slotName = vnode.slotName;
    }
    // Can't use toString here because Symbol(1).toString() is 'Symbol(1)'
    // but elm.setAttribute('slot', Symbol(1)) is an error.
    // the following line also throws same error for symbols
    // Similar for Object.create(null)
    const normalizedSlotName = '' + slotName;
    const vnodes = cmpSlotsMapping[normalizedSlotName] = cmpSlotsMapping[normalizedSlotName] || [];
    ArrayPush$1.call(vnodes, vnode);
  }
  vm.cmpSlots = {
    owner,
    slotAssignments: cmpSlotsMapping
  };
  if (isFalse(vm.isDirty)) {
    // We need to determine if the old allocation is really different from the new one
    // and mark the vm as dirty
    const oldKeys = keys(oldSlotsMapping);
    if (oldKeys.length !== keys(cmpSlotsMapping).length) {
      markComponentAsDirty(vm);
      return;
    }
    for (let i = 0, len = oldKeys.length; i < len; i += 1) {
      const key = oldKeys[i];
      if (isUndefined$1(cmpSlotsMapping[key]) || oldSlotsMapping[key].length !== cmpSlotsMapping[key].length) {
        markComponentAsDirty(vm);
        return;
      }
      const oldVNodes = oldSlotsMapping[key];
      const vnodes = cmpSlotsMapping[key];
      for (let j = 0, a = cmpSlotsMapping[key].length; j < a; j += 1) {
        if (oldVNodes[j] !== vnodes[j]) {
          markComponentAsDirty(vm);
          return;
        }
      }
    }
  }
}
const DynamicChildren = new WeakSet();
// dynamic children means it was either generated by an iteration in a template
// or part of an unstable fragment, and will require a more complex diffing algo.
function markAsDynamicChildren(children) {
  DynamicChildren.add(children);
}
function hasDynamicChildren(children) {
  return DynamicChildren.has(children);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  const map = {};
  // TODO [#1637]: simplify this by assuming that all vnodes has keys
  for (let j = beginIdx; j <= endIdx; ++j) {
    const ch = children[j];
    if (isVNode(ch)) {
      const {
        key
      } = ch;
      if (key !== undefined) {
        map[key] = j;
      }
    }
  }
  return map;
}
function updateDynamicChildren(oldCh, newCh, parent, renderer) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  const newChEnd = newCh.length - 1;
  let newEndIdx = newChEnd;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldKeyToIdx;
  let idxInOld;
  let elmToMove;
  let before;
  let clonedOldCh = false;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!isVNode(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
    } else if (!isVNode(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!isVNode(newStartVnode)) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!isVNode(newEndVnode)) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode, parent, renderer);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode, parent, renderer);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      patch(oldStartVnode, newEndVnode, parent, renderer);
      // In the case of fragments, the `elm` property of a vfragment points to the leading
      // anchor. To determine the next sibling of the whole fragment, we need to use the
      // trailing anchor as the argument to nextSibling():
      // [..., [leading, ...content, trailing], nextSibling, ...]
      let anchor;
      if (isVFragment(oldEndVnode)) {
        anchor = renderer.nextSibling(oldEndVnode.trailing.elm);
      } else {
        anchor = renderer.nextSibling(oldEndVnode.elm);
      }
      insertFragmentOrNode(oldStartVnode, parent, anchor, renderer);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      patch(oldEndVnode, newStartVnode, parent, renderer);
      insertFragmentOrNode(newStartVnode, parent, oldStartVnode.elm, renderer);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }
      idxInOld = oldKeyToIdx[newStartVnode.key];
      if (isUndefined$1(idxInOld)) {
        // New element
        mount(newStartVnode, parent, renderer, oldStartVnode.elm);
        newStartVnode = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];
        if (isVNode(elmToMove)) {
          if (elmToMove.sel !== newStartVnode.sel) {
            // New element
            mount(newStartVnode, parent, renderer, oldStartVnode.elm);
          } else {
            patch(elmToMove, newStartVnode, parent, renderer);
            // Delete the old child, but copy the array since it is read-only.
            // The `oldCh` will be GC'ed after `updateDynamicChildren` is complete,
            // so we only care about the `oldCh` object inside this function.
            // To avoid cloning over and over again, we check `clonedOldCh`
            // and only clone once.
            if (!clonedOldCh) {
              clonedOldCh = true;
              oldCh = [...oldCh];
            }
            // We've already cloned at least once, so it's no longer read-only
            oldCh[idxInOld] = undefined;
            insertFragmentOrNode(elmToMove, parent, oldStartVnode.elm, renderer);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
  }
  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      // There's some cases in which the sub array of vnodes to be inserted is followed by null(s) and an
      // already processed vnode, in such cases the vnodes to be inserted should be before that processed vnode.
      let i = newEndIdx;
      let n;
      do {
        n = newCh[++i];
      } while (!isVNode(n) && i < newChEnd);
      before = isVNode(n) ? n.elm : null;
      mountVNodes(newCh, parent, renderer, before, newStartIdx, newEndIdx + 1);
    } else {
      unmountVNodes(oldCh, parent, renderer, true, oldStartIdx, oldEndIdx + 1);
    }
  }
}
function updateStaticChildren(c1, c2, parent, renderer) {
  const c1Length = c1.length;
  const c2Length = c2.length;
  if (c1Length === 0) {
    // the old list is empty, we can directly insert anything new
    mountVNodes(c2, parent, renderer, null);
    return;
  }
  if (c2Length === 0) {
    // the old list is nonempty and the new list is empty so we can directly remove all old nodes
    // this is the case in which the dynamic children of an if-directive should be removed
    unmountVNodes(c1, parent, renderer, true);
    return;
  }
  // if the old list is not empty, the new list MUST have the same
  // amount of nodes, that's why we call this static children
  let anchor = null;
  for (let i = c2Length - 1; i >= 0; i -= 1) {
    const n1 = c1[i];
    const n2 = c2[i];
    if (n2 !== n1) {
      if (isVNode(n1)) {
        if (isVNode(n2)) {
          if (isSameVnode(n1, n2)) {
            // both vnodes are equivalent, and we just need to patch them
            patch(n1, n2, parent, renderer);
            anchor = n2.elm;
          } else {
            // removing the old vnode since the new one is different
            unmount(n1, parent, renderer, true);
            mount(n2, parent, renderer, anchor);
            anchor = n2.elm;
          }
        } else {
          // removing the old vnode since the new one is null
          unmount(n1, parent, renderer, true);
        }
      } else if (isVNode(n2)) {
        mount(n2, parent, renderer, anchor);
        anchor = n2.elm;
      }
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const SymbolIterator = Symbol.iterator;
function addVNodeToChildLWC(vnode) {
  ArrayPush$1.call(getVMBeingRendered().velements, vnode);
}
// [s]coped [s]lot [f]actory
function ssf(slotName, factory) {
  return {
    type: 6 /* VNodeType.ScopedSlotFragment */,
    factory,
    owner: getVMBeingRendered(),
    elm: undefined,
    sel: undefined,
    key: undefined,
    slotName
  };
}
// [st]atic node
function st(fragment, key, data) {
  const owner = getVMBeingRendered();
  const vnode = {
    type: 4 /* VNodeType.Static */,
    sel: undefined,
    key,
    elm: undefined,
    fragment,
    owner,
    data
  };
  const ref = data === null || data === void 0 ? void 0 : data.ref;
  if (!isUndefined$1(ref)) {
    setRefVNode(owner, ref, vnode);
  }
  return vnode;
}
// [fr]agment node
function fr(key, children, stable) {
  const leading = t('');
  const trailing = t('');
  return {
    type: 5 /* VNodeType.Fragment */,
    sel: undefined,
    key,
    elm: undefined,
    children: [leading, ...children, trailing],
    stable,
    owner: getVMBeingRendered(),
    leading,
    trailing
  };
}
// [h]tml node
function h(sel, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();
  {
    assert.isTrue(isString$1(sel), `h() 1st argument sel must be a string.`);
    assert.isTrue(isObject$1(data), `h() 2nd argument data must be an object.`);
    assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
    assert.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`);
    // checking reserved internal data properties
    assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);
    if (data.style && !isString$1(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }
    forEach.call(children, childVnode => {
      if (childVnode != null) {
        assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
      }
    });
  }
  const {
    key,
    ref
  } = data;
  const vnode = {
    type: 2 /* VNodeType.Element */,
    sel,
    data,
    children,
    elm: undefined,
    key,
    owner: vmBeingRendered
  };
  if (!isUndefined$1(ref)) {
    setRefVNode(vmBeingRendered, ref, vnode);
  }
  return vnode;
}
// [t]ab[i]ndex function
function ti(value) {
  // if value is greater than 0, we normalize to 0
  // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
  // If value is less than -1, we don't care
  const shouldNormalize = value > 0 && !(isTrue(value) || isFalse(value));
  {
    const vmBeingRendered = getVMBeingRendered();
    if (shouldNormalize) {
      logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
    }
  }
  return shouldNormalize ? 0 : value;
}
// [s]lot element node
function s(slotName, data, children, slotset) {
  {
    assert.isTrue(isString$1(slotName), `s() 1st argument slotName must be a string.`);
    assert.isTrue(isObject$1(data), `s() 2nd argument data must be an object.`);
    assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
  }
  if (!isUndefined$1(slotset) && !isUndefined$1(slotset.slotAssignments) && !isUndefined$1(slotset.slotAssignments[slotName]) && slotset.slotAssignments[slotName].length !== 0) {
    const newChildren = [];
    const slotAssignments = slotset.slotAssignments[slotName];
    for (let i = 0; i < slotAssignments.length; i++) {
      const vnode = slotAssignments[i];
      if (!isNull(vnode)) {
        const assignedNodeIsScopedSlot = isVScopedSlotFragment(vnode);
        // The only sniff test for a scoped <slot> element is the presence of `slotData`
        const isScopedSlotElement = !isUndefined$1(data.slotData);
        // Check if slot types of parent and child are matching
        if (assignedNodeIsScopedSlot !== isScopedSlotElement) {
          {
            logError(`Mismatched slot types for ${slotName === '' ? '(default)' : slotName} slot. Both parent and child component must use standard type or scoped type for a given slot.`, slotset.owner);
          }
          // Ignore slot content from parent
          continue;
        }
        // If the passed slot content is factory, evaluate it and add the produced vnodes
        if (assignedNodeIsScopedSlot) {
          const vmBeingRenderedInception = getVMBeingRendered();
          // Evaluate in the scope of the slot content's owner
          // if a slotset is provided, there will always be an owner. The only case where owner is
          // undefined is for root components, but root components cannot accept slotted content
          setVMBeingRendered(slotset.owner);
          try {
            // The factory function is a template snippet from the slot set owner's template,
            // hence switch over to the slot set owner's template reactive observer
            const {
              tro
            } = slotset.owner;
            tro.observe(() => {
              ArrayPush$1.call(newChildren, vnode.factory(data.slotData, data.key));
            });
          } finally {
            setVMBeingRendered(vmBeingRenderedInception);
          }
        } else {
          // If the slot content is standard type, the content is static, no additional
          // processing needed on the vnode
          ArrayPush$1.call(newChildren, vnode);
        }
      }
    }
    children = newChildren;
  }
  const vmBeingRendered = getVMBeingRendered();
  const {
    renderMode,
    shadowMode
  } = vmBeingRendered;
  if (renderMode === 0 /* RenderMode.Light */) {
    sc(children);
    return children;
  }
  if (shadowMode === 1 /* ShadowMode.Synthetic */) {
    // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
    sc(children);
  }
  return h('slot', data, children);
}
// [c]ustom element node
function c$1(sel, Ctor, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();
  {
    assert.isTrue(isString$1(sel), `c() 1st argument sel must be a string.`);
    assert.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
    assert.isTrue(isObject$1(data), `c() 3nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `c() 4nd argument data must be an array.`);
    // checking reserved internal data properties
    assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);
    if (data.style && !isString$1(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }
    if (arguments.length === 4) {
      forEach.call(children, childVnode => {
        if (childVnode != null) {
          assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
        }
      });
    }
  }
  const {
    key,
    ref
  } = data;
  let elm, aChildren, vm;
  const vnode = {
    type: 3 /* VNodeType.CustomElement */,
    sel,
    data,
    children,
    elm,
    key,
    ctor: Ctor,
    owner: vmBeingRendered,
    mode: 'open',
    aChildren,
    vm
  };
  addVNodeToChildLWC(vnode);
  if (!isUndefined$1(ref)) {
    setRefVNode(vmBeingRendered, ref, vnode);
  }
  return vnode;
}
// [i]terable node
function i(iterable, factory) {
  const list = [];
  // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  sc(list);
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(iterable) || iterable === null) {
    {
      logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
    }
    return list;
  }
  {
    assert.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
  }
  const iterator = iterable[SymbolIterator]();
  {
    assert.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
  }
  let next = iterator.next();
  let j = 0;
  let {
    value,
    done: last
  } = next;
  let keyMap;
  let iterationError;
  {
    keyMap = create$4(null);
  }
  while (last === false) {
    // implementing a look-back-approach because we need to know if the element is the last
    next = iterator.next();
    last = next.done;
    // template factory logic based on the previous collected value
    const vnode = factory(value, j, j === 0, last === true);
    if (isArray$1(vnode)) {
      ArrayPush$1.apply(list, vnode);
    } else {
      ArrayPush$1.call(list, vnode);
    }
    {
      const vnodes = isArray$1(vnode) ? vnode : [vnode];
      forEach.call(vnodes, childVnode => {
        if (!isNull(childVnode) && isObject$1(childVnode) && !isUndefined$1(childVnode.sel)) {
          const {
            key
          } = childVnode;
          if (isString$1(key) || isNumber$1(key)) {
            if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
              iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
            }
            keyMap[key] = 1;
          } else if (isUndefined$1(iterationError)) {
            iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
          }
        }
      });
    }
    // preparing next value
    j += 1;
    value = next.value;
  }
  {
    if (!isUndefined$1(iterationError)) {
      logError(iterationError, vmBeingRendered);
    }
  }
  return list;
}
/**
 * [f]lattening
 */
function f(items) {
  {
    assert.isTrue(isArray$1(items), 'flattening api can only work with arrays.');
  }
  const len = items.length;
  const flattened = [];
  // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  sc(flattened);
  for (let j = 0; j < len; j += 1) {
    const item = items[j];
    if (isArray$1(item)) {
      ArrayPush$1.apply(flattened, item);
    } else {
      ArrayPush$1.call(flattened, item);
    }
  }
  return flattened;
}
// [t]ext node
function t(text) {
  let sel, key, elm;
  return {
    type: 0 /* VNodeType.Text */,
    sel,
    text,
    elm,
    key,
    owner: getVMBeingRendered()
  };
}
// [co]mment node
function co(text) {
  let sel, elm;
  return {
    type: 1 /* VNodeType.Comment */,
    sel,
    text,
    elm,
    key: 'c',
    owner: getVMBeingRendered()
  };
}
// [d]ynamic text
function d(value) {
  return value == null ? '' : String(value);
}
// [b]ind function
function b$1(fn) {
  const vmBeingRendered = getVMBeingRendered();
  if (isNull(vmBeingRendered)) {
    throw new Error();
  }
  const vm = vmBeingRendered;
  return function (event) {
    invokeEventListener(vm, fn, vm.component, event);
  };
}
// [k]ey function
function k(compilerKey, obj) {
  switch (typeof obj) {
    case 'number':
    case 'string':
      return compilerKey + ':' + obj;
    case 'object':
      {
        logError(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
      }
  }
}
// [g]lobal [id] function
function gid(id) {
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(id) || id === '') {
    {
      logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
    }
    return id;
  }
  // We remove attributes when they are assigned a value of null
  if (isNull(id)) {
    return null;
  }
  const {
    idx,
    shadowMode
  } = vmBeingRendered;
  if (shadowMode === 1 /* ShadowMode.Synthetic */) {
    return StringReplace.call(id, /\S+/g, id => `${id}-${idx}`);
  }
  return id;
}
// [f]ragment [id] function
function fid(url) {
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(url) || url === '') {
    {
      if (isUndefined$1(url)) {
        logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
      }
    }
    return url;
  }
  // We remove attributes when they are assigned a value of null
  if (isNull(url)) {
    return null;
  }
  const {
    idx,
    shadowMode
  } = vmBeingRendered;
  // Apply transformation only for fragment-only-urls, and only in shadow DOM
  if (shadowMode === 1 /* ShadowMode.Synthetic */ && /^#/.test(url)) {
    return `${url}-${idx}`;
  }
  return url;
}
/**
 * [ddc] - create a (deprecated) dynamic component via `<x-foo lwc:dynamic={Ctor}>`
 *
 * TODO [#3331]: remove usage of lwc:dynamic in 246
 */
function ddc(sel, Ctor, data, children = EmptyArray) {
  {
    assert.isTrue(isString$1(sel), `dc() 1st argument sel must be a string.`);
    assert.isTrue(isObject$1(data), `dc() 3nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 4nd argument data must be an array.`);
  }
  // null or undefined values should produce a null value in the VNodes
  if (isNull(Ctor) || isUndefined$1(Ctor)) {
    return null;
  }
  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
  }
  return c$1(sel, Ctor, data, children);
}
/**
 * [dc] - create a dynamic component via `<lwc:component lwc:is={Ctor}>`
 */
function dc(Ctor, data, children = EmptyArray) {
  {
    assert.isTrue(isObject$1(data), `dc() 2nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 3rd argument data must be an array.`);
  }
  // Null or undefined values should produce a null value in the VNodes.
  // This is the only value at compile time as the constructor will not be known.
  if (isNull(Ctor) || isUndefined$1(Ctor)) {
    return null;
  }
  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid constructor ${toString$1(Ctor)} is not a LightningElement constructor.`);
  }
  // Look up the dynamic component's name at runtime once the constructor is available.
  // This information is only known at runtime and is stored as part of registerComponent.
  const sel = getComponentRegisteredName(Ctor);
  if (isUndefined$1(sel) || sel === '') {
    throw new Error(`Invalid LWC constructor ${toString$1(Ctor)} does not have a registered name`);
  }
  return c$1(sel, Ctor, data, children);
}
/**
 * slow children collection marking mechanism. this API allows the compiler to signal
 * to the engine that a particular collection of children must be diffed using the slow
 * algo based on keys due to the nature of the list. E.g.:
 *
 *   - slot element's children: the content of the slot has to be dynamic when in synthetic
 *                              shadow mode because the `vnode.children` might be the slotted
 *                              content vs default content, in which case the size and the
 *                              keys are not matching.
 *   - children that contain dynamic components
 *   - children that are produced by iteration
 *
 */
function sc(vnodes) {
  {
    assert.isTrue(isArray$1(vnodes), 'sc() api can only work with arrays.');
  }
  // We have to mark the vnodes collection as dynamic so we can later on
  // choose to use the snabbdom virtual dom diffing algo instead of our
  // static dummy algo.
  markAsDynamicChildren(vnodes);
  return vnodes;
}
/**
 * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
 * libraries to sanitize HTML content. This hook process the content passed via the template to
 * lwc:inner-html directive.
 * It is meant to be overridden with setSanitizeHtmlContentHook, it throws an error by default.
 */
let sanitizeHtmlContentHook = () => {
  // locker-service patches this function during runtime to sanitize HTML content.
  throw new Error('sanitizeHtmlContent hook must be implemented.');
};
// [s]anitize [h]tml [c]ontent
function shc(content) {
  return sanitizeHtmlContentHook();
}
const api$2 = freeze({
  s,
  h,
  c: c$1,
  i,
  f,
  t,
  d,
  b: b$1,
  k,
  co,
  dc,
  fr,
  ti,
  st,
  gid,
  fid,
  shc,
  ssf,
  ddc
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const operationIdNameMapping = ['constructor', 'render', 'patch', 'connectedCallback', 'renderedCallback', 'disconnectedCallback', 'errorCallback', 'lwc-hydrate', 'lwc-rehydrate'];
// Even if all the browser the engine supports implements the UserTiming API, we need to guard the measure APIs.
// JSDom (used in Jest) for example doesn't implement the UserTiming APIs.
const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
const start = !isUserTimingSupported ? noop : markName => {
  performance.mark(markName);
};
const end = !isUserTimingSupported ? noop : (measureName, markName) => {
  performance.measure(measureName, markName);
  // Clear the created marks and measure to avoid filling the performance entries buffer.
  // Note: Even if the entries get deleted, existing PerformanceObservers preserve a copy of those entries.
  performance.clearMarks(markName);
  performance.clearMeasures(measureName);
};
function getOperationName(opId) {
  return operationIdNameMapping[opId];
}
function getMeasureName(opId, vm) {
  return `${getComponentTag(vm)} - ${getOperationName(opId)}`;
}
function getMarkName(opId, vm) {
  // Adding the VM idx to the mark name creates a unique mark name component instance. This is necessary to produce
  // the right measures for components that are recursive.
  return `${getMeasureName(opId, vm)} - ${vm.idx}`;
}
function logOperationStart(opId, vm) {
  {
    const markName = getMarkName(opId, vm);
    start(markName);
  }
}
function logOperationEnd(opId, vm) {
  {
    const markName = getMarkName(opId, vm);
    const measureName = getMeasureName(opId, vm);
    end(measureName, markName);
  }
}
function logGlobalOperationStart(opId, vm) {
  {
    const opName = getOperationName(opId);
    const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
    start(markName);
  }
}
function logGlobalOperationEnd(opId, vm) {
  {
    const opName = getOperationName(opId);
    const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
    end(opName, markName);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isUpdatingTemplate = false;
let vmBeingRendered = null;
function getVMBeingRendered() {
  return vmBeingRendered;
}
function setVMBeingRendered(vm) {
  vmBeingRendered = vm;
}
function validateSlots(vm) {
  const {
    cmpSlots
  } = vm;
  for (const slotName in cmpSlots.slotAssignments) {
    // eslint-disable-next-line @lwc/lwc-internal/no-production-assert
    assert.isTrue(isArray$1(cmpSlots.slotAssignments[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots.slotAssignments[slotName])} for slot "${slotName}" in ${vm}.`);
  }
}
function validateLightDomTemplate(template, vm) {
  if (template === defaultEmptyTemplate) {
    return;
  }
  if (vm.renderMode === 0 /* RenderMode.Light */) {
    if (template.renderMode !== 'light') {
      logError(`Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${getComponentTag(vm)}.`);
    }
  } else {
    if (!isUndefined$1(template.renderMode)) {
      logError(`Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${getComponentTag(vm)} or set it to 'lwc:render-mode="shadow"`);
    }
  }
}
function buildParseFragmentFn(createFragmentFn) {
  return (strings, ...keys) => {
    const cache = create$4(null);
    return function () {
      const {
        context: {
          hasScopedStyles,
          stylesheetToken
        },
        shadowMode,
        renderer
      } = getVMBeingRendered();
      const hasStyleToken = !isUndefined$1(stylesheetToken);
      const isSyntheticShadow = shadowMode === 1 /* ShadowMode.Synthetic */;
      let cacheKey = 0;
      if (hasStyleToken && hasScopedStyles) {
        cacheKey |= 1 /* FragmentCache.HAS_SCOPED_STYLE */;
      }

      if (hasStyleToken && isSyntheticShadow) {
        cacheKey |= 2 /* FragmentCache.SHADOW_MODE_SYNTHETIC */;
      }

      if (!isUndefined$1(cache[cacheKey])) {
        return cache[cacheKey];
      }
      const classToken = hasScopedStyles && hasStyleToken ? ' ' + stylesheetToken : '';
      const classAttrToken = hasScopedStyles && hasStyleToken ? ` class="${stylesheetToken}"` : '';
      const attrToken = hasStyleToken && isSyntheticShadow ? ' ' + stylesheetToken : '';
      let htmlFragment = '';
      for (let i = 0, n = keys.length; i < n; i++) {
        switch (keys[i]) {
          case 0:
            // styleToken in existing class attr
            htmlFragment += strings[i] + classToken;
            break;
          case 1:
            // styleToken for added class attr
            htmlFragment += strings[i] + classAttrToken;
            break;
          case 2:
            // styleToken as attr
            htmlFragment += strings[i] + attrToken;
            break;
          case 3:
            // ${1}${2}
            htmlFragment += strings[i] + classAttrToken + attrToken;
            break;
        }
      }
      htmlFragment += strings[strings.length - 1];
      cache[cacheKey] = createFragmentFn(htmlFragment, renderer);
      return cache[cacheKey];
    };
  };
}
// Note: at the moment this code executes, we don't have a renderer yet.
const parseFragment = buildParseFragmentFn((html, renderer) => {
  const {
    createFragment
  } = renderer;
  return createFragment(html);
});
function evaluateTemplate(vm, html) {
  {
    assert.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);
    // in dev-mode, we support hot swapping of templates, which means that
    // the component instance might be attempting to use an old version of
    // the template, while internally, we have a replacement for it.
    html = getTemplateOrSwappedTemplate(html);
  }
  const isUpdatingTemplateInception = isUpdatingTemplate;
  const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
  let vnodes = [];
  runWithBoundaryProtection(vm, vm.owner, () => {
    // pre
    vmBeingRendered = vm;
    logOperationStart(1 /* OperationId.Render */, vm);
  }, () => {
    // job
    const {
      component,
      context,
      cmpSlots,
      cmpTemplate,
      tro
    } = vm;
    tro.observe(() => {
      // Reset the cache memoizer for template when needed.
      if (html !== cmpTemplate) {
        if ("development" !== 'production') {
          validateLightDomTemplate(html, vm);
        }
        // Perf opt: do not reset the shadow root during the first rendering (there is
        // nothing to reset).
        if (!isNull(cmpTemplate)) {
          // It is important to reset the content to avoid reusing similar elements
          // generated from a different template, because they could have similar IDs,
          // and snabbdom just rely on the IDs.
          resetComponentRoot(vm);
        }
        // Check that the template was built by the compiler.
        if (!isTemplateRegistered(html)) {
          throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
        }
        vm.cmpTemplate = html;
        // Create a brand new template cache for the swapped templated.
        context.tplCache = create$4(null);
        // Set the computeHasScopedStyles property in the context, to avoid recomputing it repeatedly.
        context.hasScopedStyles = computeHasScopedStyles(html, vm);
        // Update the scoping token on the host element.
        updateStylesheetToken(vm, html);
        // Evaluate, create stylesheet and cache the produced VNode for future
        // re-rendering.
        const stylesheetsContent = getStylesheetsContent(vm, html);
        context.styleVNodes = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
      }
      if ("development" !== 'production') {
        // validating slots in every rendering since the allocated content might change over time
        validateSlots(vm);
        // add the VM to the list of host VMs that can be re-rendered if html is swapped
        setActiveVM(vm);
      }
      // reset the refs; they will be set during the tmpl() instantiation
      vm.refVNodes = html.hasRefs ? create$4(null) : null;
      // right before producing the vnodes, we clear up all internal references
      // to custom elements from the template.
      vm.velements = [];
      // Set the global flag that template is being updated
      isUpdatingTemplate = true;
      vnodes = html.call(undefined, api$2, component, cmpSlots, context.tplCache);
      const {
        styleVNodes
      } = context;
      if (!isNull(styleVNodes)) {
        ArrayUnshift.apply(vnodes, styleVNodes);
      }
    });
  }, () => {
    // post
    isUpdatingTemplate = isUpdatingTemplateInception;
    vmBeingRendered = vmOfTemplateBeingUpdatedInception;
    logOperationEnd(1 /* OperationId.Render */, vm);
  });
  {
    if (!isArray$1(vnodes)) {
      logError(`Compiler should produce html functions that always return an array.`);
    }
  }
  return vnodes;
}
function computeHasScopedStylesInStylesheets(stylesheets) {
  if (hasStyles(stylesheets)) {
    for (let i = 0; i < stylesheets.length; i++) {
      if (isTrue(stylesheets[i][KEY__SCOPED_CSS])) {
        return true;
      }
    }
  }
  return false;
}
function computeHasScopedStyles(template, vm) {
  const {
    stylesheets
  } = template;
  const vmStylesheets = !isUndefined$1(vm) ? vm.stylesheets : null;
  return computeHasScopedStylesInStylesheets(stylesheets) || computeHasScopedStylesInStylesheets(vmStylesheets);
}
function hasStyles(stylesheets) {
  return !isUndefined$1(stylesheets) && !isNull(stylesheets) && stylesheets.length > 0;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isInvokingRender = false;
let vmBeingConstructed = null;
function isBeingConstructed(vm) {
  return vmBeingConstructed === vm;
}
function invokeComponentCallback(vm, fn, args) {
  const {
    component,
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    callHook(component, fn, args);
  }, noop);
}
function invokeComponentConstructor(vm, Ctor) {
  const vmBeingConstructedInception = vmBeingConstructed;
  let error;
  logOperationStart(0 /* OperationId.Constructor */, vm);
  vmBeingConstructed = vm;
  /**
   * Constructors don't need to be wrapped with a boundary because for root elements
   * it should throw, while elements from template are already wrapped by a boundary
   * associated to the diffing algo.
   */
  try {
    // job
    const result = new Ctor();
    // Check indirectly if the constructor result is an instance of LightningElement. Using
    // the "instanceof" operator would not work here since Locker Service provides its own
    // implementation of LightningElement, so we indirectly check if the base constructor is
    // invoked by accessing the component on the vm.
    if (vmBeingConstructed.component !== result) {
      throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
    }
  } catch (e) {
    error = Object(e);
  } finally {
    logOperationEnd(0 /* OperationId.Constructor */, vm);
    vmBeingConstructed = vmBeingConstructedInception;
    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      // re-throwing the original error annotated after restoring the context
      throw error; // eslint-disable-line no-unsafe-finally
    }
  }
}

function invokeComponentRenderMethod(vm) {
  const {
    def: {
      render
    },
    callHook,
    component,
    owner
  } = vm;
  const isRenderBeingInvokedInception = isInvokingRender;
  const vmBeingRenderedInception = getVMBeingRendered();
  let html;
  let renderInvocationSuccessful = false;
  runWithBoundaryProtection(vm, owner, () => {
    // pre
    isInvokingRender = true;
    setVMBeingRendered(vm);
  }, () => {
    // job
    vm.tro.observe(() => {
      html = callHook(component, render);
      renderInvocationSuccessful = true;
    });
  }, () => {
    // post
    isInvokingRender = isRenderBeingInvokedInception;
    setVMBeingRendered(vmBeingRenderedInception);
  });
  // If render() invocation failed, process errorCallback in boundary and return an empty template
  return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
}
function invokeEventListener(vm, fn, thisValue, event) {
  const {
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    // job
    if ("development" !== 'production') {
      assert.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
    }
    callHook(thisValue, fn, [event]);
  }, noop);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const registeredComponentMap = new Map();
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 */
function registerComponent(
// We typically expect a LightningElementConstructor, but technically you can call this with anything
Ctor, metadata) {
  if (isFunction$1(Ctor)) {
    {
      // There is no point in running this in production, because the version mismatch check relies
      // on code comments which are stripped out in production by minifiers
      checkVersionMismatch(Ctor, 'component');
    }
    // TODO [#3331]: add validation to check the value of metadata.sel is not an empty string.
    registeredComponentMap.set(Ctor, metadata);
  }
  // chaining this method as a way to wrap existing assignment of component constructor easily,
  // without too much transformation
  return Ctor;
}
function getComponentRegisteredTemplate(Ctor) {
  var _a;
  return (_a = registeredComponentMap.get(Ctor)) === null || _a === void 0 ? void 0 : _a.tmpl;
}
function getComponentRegisteredName(Ctor) {
  var _a;
  return (_a = registeredComponentMap.get(Ctor)) === null || _a === void 0 ? void 0 : _a.sel;
}
function getTemplateReactiveObserver(vm) {
  return createReactiveObserver(() => {
    const {
      isDirty
    } = vm;
    if (isFalse(isDirty)) {
      markComponentAsDirty(vm);
      scheduleRehydration(vm);
    }
  });
}
function renderComponent(vm) {
  {
    assert.invariant(vm.isDirty, `${vm} is not dirty.`);
  }
  vm.tro.reset();
  const vnodes = invokeComponentRenderMethod(vm);
  vm.isDirty = false;
  vm.isScheduled = false;
  return vnodes;
}
function markComponentAsDirty(vm) {
  {
    const vmBeingRendered = getVMBeingRendered();
    assert.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
    assert.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
    assert.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
  }
  vm.isDirty = true;
}
const cmpEventListenerMap = new WeakMap();
function getWrappedComponentsListener(vm, listener) {
  if (!isFunction$1(listener)) {
    throw new TypeError('Expected an EventListener but received ' + typeof listener); // avoiding problems with non-valid listeners
  }

  let wrappedListener = cmpEventListenerMap.get(listener);
  if (isUndefined$1(wrappedListener)) {
    wrappedListener = function (event) {
      invokeEventListener(vm, listener, undefined, event);
    };
    cmpEventListenerMap.set(listener, wrappedListener);
  }
  return wrappedListener;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const Services = create$4(null);
function invokeServiceHook(vm, cbs) {
  {
    assert.isTrue(isArray$1(cbs) && cbs.length > 0, `Optimize invokeServiceHook() to be invoked only when needed`);
  }
  const {
    component,
    def,
    context
  } = vm;
  for (let i = 0, len = cbs.length; i < len; ++i) {
    cbs[i].call(undefined, component, {}, def, context);
  }
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let idx = 0;
/** The internal slot used to associate different objects the engine manipulates with the VM */
const ViewModelReflection = new WeakMap();
function callHook(cmp, fn, args = []) {
  return fn.apply(cmp, args);
}
function setHook(cmp, prop, newValue) {
  cmp[prop] = newValue;
}
function getHook(cmp, prop) {
  return cmp[prop];
}
function rerenderVM(vm) {
  rehydrate(vm);
}
function connectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  logGlobalOperationStart(7 /* OperationId.GlobalHydrate */, vm);
  // Usually means moving the element from one place to another, which is observable via
  // life-cycle hooks.
  if (vm.state === 1 /* VMState.connected */) {
    disconnectRootElement(elm);
  }
  runConnectedCallback(vm);
  rehydrate(vm);
  logGlobalOperationEnd(7 /* OperationId.GlobalHydrate */, vm);
}
function disconnectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  resetComponentStateWhenRemoved(vm);
}
function appendVM(vm) {
  rehydrate(vm);
}
// just in case the component comes back, with this we guarantee re-rendering it
// while preventing any attempt to rehydration until after reinsertion.
function resetComponentStateWhenRemoved(vm) {
  const {
    state
  } = vm;
  if (state !== 2 /* VMState.disconnected */) {
    const {
      tro
    } = vm;
    // Making sure that any observing record will not trigger the rehydrated on this vm
    tro.reset();
    runDisconnectedCallback(vm);
    // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)
    runChildNodesDisconnectedCallback(vm);
    runLightChildNodesDisconnectedCallback(vm);
  }
}
// this method is triggered by the diffing algo only when a vnode from the
// old vnode.children is removed from the DOM.
function removeVM(vm) {
  {
    assert.isTrue(vm.state === 1 /* VMState.connected */ || vm.state === 2 /* VMState.disconnected */, `${vm} must have been connected.`);
  }
  resetComponentStateWhenRemoved(vm);
}
function getNearestShadowAncestor(vm) {
  let ancestor = vm.owner;
  while (!isNull(ancestor) && ancestor.renderMode === 0 /* RenderMode.Light */) {
    ancestor = ancestor.owner;
  }
  return ancestor;
}
function createVM(elm, ctor, renderer, options) {
  const {
    mode,
    owner,
    tagName,
    hydrated
  } = options;
  const def = getComponentInternalDef(ctor);
  const vm = {
    elm,
    def,
    idx: idx++,
    state: 0 /* VMState.created */,
    isScheduled: false,
    isDirty: true,
    tagName,
    mode,
    owner,
    refVNodes: null,
    children: EmptyArray,
    aChildren: EmptyArray,
    velements: EmptyArray,
    cmpProps: create$4(null),
    cmpFields: create$4(null),
    cmpSlots: {
      slotAssignments: create$4(null)
    },
    cmpTemplate: null,
    hydrated: Boolean(hydrated),
    renderMode: def.renderMode,
    context: {
      stylesheetToken: undefined,
      hasTokenInClass: undefined,
      hasTokenInAttribute: undefined,
      hasScopedStyles: undefined,
      styleVNodes: null,
      tplCache: EmptyObject,
      wiredConnecting: EmptyArray,
      wiredDisconnecting: EmptyArray
    },
    // Properties set right after VM creation.
    tro: null,
    shadowMode: null,
    stylesheets: null,
    // Properties set by the LightningElement constructor.
    component: null,
    shadowRoot: null,
    renderRoot: null,
    callHook,
    setHook,
    getHook,
    renderer
  };
  {
    vm.debugInfo = create$4(null);
  }
  vm.stylesheets = computeStylesheets(vm, def.ctor);
  vm.shadowMode = computeShadowMode(vm, renderer);
  vm.tro = getTemplateReactiveObserver(vm);
  {
    vm.toString = () => {
      return `[object:vm ${def.name} (${vm.idx})]`;
    };
    if (lwcRuntimeFlags.ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST) {
      vm.shadowMode = 0 /* ShadowMode.Native */;
    }
  }
  // Create component instance associated to the vm and the element.
  invokeComponentConstructor(vm, def.ctor);
  // Initializing the wire decorator per instance only when really needed
  if (hasWireAdapters(vm)) {
    installWireAdapters(vm);
  }
  return vm;
}
function validateComponentStylesheets(vm, stylesheets) {
  let valid = true;
  const validate = arrayOrStylesheet => {
    if (isArray$1(arrayOrStylesheet)) {
      for (let i = 0; i < arrayOrStylesheet.length; i++) {
        validate(arrayOrStylesheet[i]);
      }
    } else if (!isFunction$1(arrayOrStylesheet)) {
      // function assumed to be a stylesheet factory
      valid = false;
    }
  };
  if (!isArray$1(stylesheets)) {
    valid = false;
  } else {
    validate(stylesheets);
  }
  return valid;
}
// Validate and flatten any stylesheets defined as `static stylesheets`
function computeStylesheets(vm, ctor) {
  warnOnStylesheetsMutation(ctor);
  const {
    stylesheets
  } = ctor;
  if (!isUndefined$1(stylesheets)) {
    const valid = validateComponentStylesheets(vm, stylesheets);
    if (valid) {
      return flattenStylesheets(stylesheets);
    } else {
      logError(`static stylesheets must be an array of CSS stylesheets. Found invalid stylesheets on <${vm.tagName}>`, vm);
    }
  }
  return null;
}
function warnOnStylesheetsMutation(ctor) {
  {
    let {
      stylesheets
    } = ctor;
    defineProperty(ctor, 'stylesheets', {
      enumerable: true,
      configurable: true,
      get() {
        return stylesheets;
      },
      set(newValue) {
        logWarnOnce(`Dynamically setting the "stylesheets" static property on ${ctor.name} ` + 'will not affect the stylesheets injected.');
        stylesheets = newValue;
      }
    });
  }
}
function computeShadowMode(vm, renderer) {
  const {
    def
  } = vm;
  const {
    isSyntheticShadowDefined
  } = renderer;
  let shadowMode;
  if (isSyntheticShadowDefined) {
    if (def.renderMode === 0 /* RenderMode.Light */) {
      // ShadowMode.Native implies "not synthetic shadow" which is consistent with how
      // everything defaults to native when the synthetic shadow polyfill is unavailable.
      shadowMode = 0 /* ShadowMode.Native */;
    } else if (lwcRuntimeFlags.ENABLE_MIXED_SHADOW_MODE) {
      if (def.shadowSupportMode === "any" /* ShadowSupportMode.Any */) {
        shadowMode = 0 /* ShadowMode.Native */;
      } else {
        const shadowAncestor = getNearestShadowAncestor(vm);
        if (!isNull(shadowAncestor) && shadowAncestor.shadowMode === 0 /* ShadowMode.Native */) {
          // Transitive support for native Shadow DOM. A component in native mode
          // transitively opts all of its descendants into native.
          shadowMode = 0 /* ShadowMode.Native */;
        } else {
          // Synthetic if neither this component nor any of its ancestors are configured
          // to be native.
          shadowMode = 1 /* ShadowMode.Synthetic */;
        }
      }
    } else {
      shadowMode = 1 /* ShadowMode.Synthetic */;
    }
  } else {
    // Native if the synthetic shadow polyfill is unavailable.
    shadowMode = 0 /* ShadowMode.Native */;
  }

  return shadowMode;
}
function assertIsVM(obj) {
  if (isNull(obj) || !isObject$1(obj) || !('renderRoot' in obj)) {
    throw new TypeError(`${obj} is not a VM.`);
  }
}
function associateVM(obj, vm) {
  ViewModelReflection.set(obj, vm);
}
function getAssociatedVM(obj) {
  const vm = ViewModelReflection.get(obj);
  {
    assertIsVM(vm);
  }
  return vm;
}
function getAssociatedVMIfPresent(obj) {
  const maybeVm = ViewModelReflection.get(obj);
  {
    if (!isUndefined$1(maybeVm)) {
      assertIsVM(maybeVm);
    }
  }
  return maybeVm;
}
function rehydrate(vm) {
  if (isTrue(vm.isDirty)) {
    const children = renderComponent(vm);
    patchShadowRoot(vm, children);
  }
}
function patchShadowRoot(vm, newCh) {
  const {
    renderRoot,
    children: oldCh,
    renderer
  } = vm;
  // caching the new children collection
  vm.children = newCh;
  if (newCh.length > 0 || oldCh.length > 0) {
    // patch function mutates vnodes by adding the element reference,
    // however, if patching fails it contains partial changes.
    if (oldCh !== newCh) {
      runWithBoundaryProtection(vm, vm, () => {
        // pre
        logOperationStart(2 /* OperationId.Patch */, vm);
      }, () => {
        // job
        patchChildren(oldCh, newCh, renderRoot, renderer);
      }, () => {
        // post
        logOperationEnd(2 /* OperationId.Patch */, vm);
      });
    }
  }
  if (vm.state === 1 /* VMState.connected */) {
    // If the element is connected, that means connectedCallback was already issued, and
    // any successive rendering should finish with the call to renderedCallback, otherwise
    // the connectedCallback will take care of calling it in the right order at the end of
    // the current rehydration process.
    runRenderedCallback(vm);
  }
}
function runRenderedCallback(vm) {
  const {
    def: {
      renderedCallback
    }
  } = vm;
  const {
    rendered
  } = Services;
  if (rendered) {
    invokeServiceHook(vm, rendered);
  }
  if (!isUndefined$1(renderedCallback)) {
    logOperationStart(4 /* OperationId.RenderedCallback */, vm);
    invokeComponentCallback(vm, renderedCallback);
    logOperationEnd(4 /* OperationId.RenderedCallback */, vm);
  }
}
let rehydrateQueue = [];
function flushRehydrationQueue() {
  logGlobalOperationStart(8 /* OperationId.GlobalRehydrate */);
  {
    assert.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
  }
  const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
  rehydrateQueue = []; // reset to a new queue
  for (let i = 0, len = vms.length; i < len; i += 1) {
    const vm = vms[i];
    try {
      rehydrate(vm);
    } catch (error) {
      if (i + 1 < len) {
        // pieces of the queue are still pending to be rehydrated, those should have priority
        if (rehydrateQueue.length === 0) {
          addCallbackToNextTick(flushRehydrationQueue);
        }
        ArrayUnshift.apply(rehydrateQueue, ArraySlice.call(vms, i + 1));
      }
      // we need to end the measure before throwing.
      logGlobalOperationEnd(8 /* OperationId.GlobalRehydrate */);
      // re-throwing the original error will break the current tick, but since the next tick is
      // already scheduled, it should continue patching the rest.
      throw error; // eslint-disable-line no-unsafe-finally
    }
  }

  logGlobalOperationEnd(8 /* OperationId.GlobalRehydrate */);
}

function runConnectedCallback(vm) {
  const {
    state
  } = vm;
  if (state === 1 /* VMState.connected */) {
    return; // nothing to do since it was already connected
  }

  vm.state = 1 /* VMState.connected */;
  // reporting connection
  const {
    connected
  } = Services;
  if (connected) {
    invokeServiceHook(vm, connected);
  }
  if (hasWireAdapters(vm)) {
    connectWireAdapters(vm);
  }
  const {
    connectedCallback
  } = vm.def;
  if (!isUndefined$1(connectedCallback)) {
    logOperationStart(3 /* OperationId.ConnectedCallback */, vm);
    invokeComponentCallback(vm, connectedCallback);
    logOperationEnd(3 /* OperationId.ConnectedCallback */, vm);
  }
}
function hasWireAdapters(vm) {
  return getOwnPropertyNames$1(vm.def.wire).length > 0;
}
function runDisconnectedCallback(vm) {
  {
    assert.isTrue(vm.state !== 2 /* VMState.disconnected */, `${vm} must be inserted.`);
  }
  if (isFalse(vm.isDirty)) {
    // this guarantees that if the component is reused/reinserted,
    // it will be re-rendered because we are disconnecting the reactivity
    // linking, so mutations are not automatically reflected on the state
    // of disconnected components.
    vm.isDirty = true;
  }
  vm.state = 2 /* VMState.disconnected */;
  // reporting disconnection
  const {
    disconnected
  } = Services;
  if (disconnected) {
    invokeServiceHook(vm, disconnected);
  }
  if (hasWireAdapters(vm)) {
    disconnectWireAdapters(vm);
  }
  const {
    disconnectedCallback
  } = vm.def;
  if (!isUndefined$1(disconnectedCallback)) {
    logOperationStart(5 /* OperationId.DisconnectedCallback */, vm);
    invokeComponentCallback(vm, disconnectedCallback);
    logOperationEnd(5 /* OperationId.DisconnectedCallback */, vm);
  }
}
function runChildNodesDisconnectedCallback(vm) {
  const {
    velements: vCustomElementCollection
  } = vm;
  // Reporting disconnection for every child in inverse order since they are
  // inserted in reserved order.
  for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
    const {
      elm
    } = vCustomElementCollection[i];
    // There are two cases where the element could be undefined:
    // * when there is an error during the construction phase, and an error
    //   boundary picks it, there is a possibility that the VCustomElement
    //   is not properly initialized, and therefore is should be ignored.
    // * when slotted custom element is not used by the element where it is
    //   slotted into it, as  a result, the custom element was never
    //   initialized.
    if (!isUndefined$1(elm)) {
      const childVM = getAssociatedVMIfPresent(elm);
      // The VM associated with the element might be associated undefined
      // in the case where the VM failed in the middle of its creation,
      // eg: constructor throwing before invoking super().
      if (!isUndefined$1(childVM)) {
        resetComponentStateWhenRemoved(childVM);
      }
    }
  }
}
function runLightChildNodesDisconnectedCallback(vm) {
  const {
    aChildren: adoptedChildren
  } = vm;
  recursivelyDisconnectChildren(adoptedChildren);
}
/**
 * The recursion doesn't need to be a complete traversal of the vnode graph,
 * instead it can be partial, when a custom element vnode is found, we don't
 * need to continue into its children because by attempting to disconnect the
 * custom element itself will trigger the removal of anything slotted or anything
 * defined on its shadow.
 */
function recursivelyDisconnectChildren(vnodes) {
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];
    if (!isNull(vnode) && !isUndefined$1(vnode.elm)) {
      switch (vnode.type) {
        case 2 /* VNodeType.Element */:
          recursivelyDisconnectChildren(vnode.children);
          break;
        case 3 /* VNodeType.CustomElement */:
          {
            const vm = getAssociatedVM(vnode.elm);
            resetComponentStateWhenRemoved(vm);
            break;
          }
      }
    }
  }
}
// This is a super optimized mechanism to remove the content of the root node (shadow root
// for shadow DOM components and the root element itself for light DOM) without having to go
// into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
// children VNodes might not be representing the current state of the DOM.
function resetComponentRoot(vm) {
  recursivelyRemoveChildren(vm.children, vm);
  vm.children = EmptyArray;
  runChildNodesDisconnectedCallback(vm);
  vm.velements = EmptyArray;
}
// Helper function to remove all children of the root node.
// If the set of children includes VFragment nodes, we need to remove the children of those nodes too.
// Since VFragments can contain other VFragments, we need to traverse the entire of tree of VFragments.
// If the set contains no VFragment nodes, no traversal is needed.
function recursivelyRemoveChildren(vnodes, vm) {
  const {
    renderRoot,
    renderer: {
      remove
    }
  } = vm;
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];
    if (!isNull(vnode)) {
      // VFragments are special; their .elm property does not point to the root element since they have no single root.
      if (isVFragment(vnode)) {
        recursivelyRemoveChildren(vnode.children, vm);
      } else if (!isUndefined$1(vnode.elm)) {
        remove(vnode.elm, renderRoot);
      }
    }
  }
}
function scheduleRehydration(vm) {
  if (isTrue(vm.isScheduled)) {
    return;
  }
  vm.isScheduled = true;
  if (rehydrateQueue.length === 0) {
    addCallbackToNextTick(flushRehydrationQueue);
  }
  ArrayPush$1.call(rehydrateQueue, vm);
}
function getErrorBoundaryVM(vm) {
  let currentVm = vm;
  while (!isNull(currentVm)) {
    if (!isUndefined$1(currentVm.def.errorCallback)) {
      return currentVm;
    }
    currentVm = currentVm.owner;
  }
}
function runWithBoundaryProtection(vm, owner, pre, job, post) {
  let error;
  pre();
  try {
    job();
  } catch (e) {
    error = Object(e);
  } finally {
    post();
    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      const errorBoundaryVm = isNull(owner) ? undefined : getErrorBoundaryVM(owner);
      if (isUndefined$1(errorBoundaryVm)) {
        throw error; // eslint-disable-line no-unsafe-finally
      }

      resetComponentRoot(vm); // remove offenders
      logOperationStart(6 /* OperationId.ErrorCallback */, vm);
      // error boundaries must have an ErrorCallback
      const errorCallback = errorBoundaryVm.def.errorCallback;
      invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
      logOperationEnd(6 /* OperationId.ErrorCallback */, vm);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// The goal of this code is to detect invalid cross-root ARIA references in synthetic shadow DOM.
// These invalid references should be fixed before the offending components can be migrated to native shadow DOM.
// When invalid usage is detected, we warn in dev mode and call the reporting API if enabled.
// See: https://sfdc.co/synthetic-aria
//
// Use the unpatched native getElementById/querySelectorAll rather than the synthetic one
const getElementById = _globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
const querySelectorAll = _globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
// This is a "handoff" from synthetic-shadow to engine-core – we want to clean up after ourselves
// so nobody else can misuse these global APIs.
delete _globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
delete _globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
function isSyntheticShadowRootInstance(rootNode) {
  return rootNode !== document && isTrue(rootNode.synthetic);
}
function reportViolation$1(source, target, attrName) {
  // The vm is either for the source, the target, or both. Either one or both must be using synthetic
  // shadow for a violation to be detected.
  let vm = getAssociatedVMIfPresent(source.getRootNode().host);
  if (isUndefined$1(vm)) {
    vm = getAssociatedVMIfPresent(target.getRootNode().host);
  }
  if (isUndefined$1(vm)) {
    // vm should never be undefined here, but just to be safe, bail out and don't report
    return;
  }
  report("CrossRootAriaInSyntheticShadow" /* ReportingEventId.CrossRootAriaInSyntheticShadow */, {
    tagName: vm.tagName,
    attributeName: attrName
  });
  {
    // Avoid excessively logging to the console in the case of duplicates.
    logWarnOnce(`Element <${source.tagName.toLowerCase()}> uses attribute "${attrName}" to reference element ` + `<${target.tagName.toLowerCase()}>, which is not in the same shadow root. This will break in native shadow DOM. ` + `For details, see: https://sfdc.co/synthetic-aria`, vm);
  }
}
function parseIdRefAttributeValue(attrValue) {
  // split on whitespace and skip empty strings after splitting
  return isString$1(attrValue) ? ArrayFilter.call(StringSplit.call(attrValue, /\s+/), Boolean) : [];
}
function detectSyntheticCrossRootAria(elm, attrName, attrValue) {
  const root = elm.getRootNode();
  if (!isSyntheticShadowRootInstance(root)) {
    return;
  }
  if (attrName === 'id') {
    // elm is the target, find the source
    if (!isString$1(attrValue) || attrValue.length === 0) {
      // if our id is null or empty, nobody can reference us
      return;
    }
    for (const idRefAttrName of ID_REFERENCING_ATTRIBUTES_SET) {
      // Query all global elements with this attribute. The attribute selector syntax `~=` is for values
      // that reference multiple IDs, separated by whitespace.
      const query = `[${idRefAttrName}~="${CSS.escape(attrValue)}"]`;
      const sourceElements = querySelectorAll.call(document, query);
      for (let i = 0; i < sourceElements.length; i++) {
        const sourceElement = sourceElements[i];
        const sourceRoot = sourceElement.getRootNode();
        if (sourceRoot !== root) {
          reportViolation$1(sourceElement, elm, idRefAttrName);
          break;
        }
      }
    }
  } else {
    // elm is the source, find the target
    const ids = parseIdRefAttributeValue(attrValue);
    for (const id of ids) {
      const target = getElementById.call(document, id);
      if (!isNull(target)) {
        const targetRoot = target.getRootNode();
        if (targetRoot !== root) {
          // target element's shadow root is not the same as ours
          reportViolation$1(elm, target, attrName);
        }
      }
    }
  }
}
let enabled = false;
// We want to avoid patching globals whenever possible, so this should be tree-shaken out in prod-mode and if
// reporting is not enabled. It should also only run once
function enableDetection$1() {
  if (enabled) {
    return; // don't double-apply the patches
  }

  enabled = true;
  const {
    setAttribute
  } = Element.prototype;
  // Detect calling `setAttribute` to set an idref or an id
  assign$1(Element.prototype, {
    setAttribute(attrName, attrValue) {
      setAttribute.call(this, attrName, attrValue);
      if (attrName === 'id' || ID_REFERENCING_ATTRIBUTES_SET.has(attrName)) {
        detectSyntheticCrossRootAria(this, attrName, attrValue);
      }
    }
  });
  // Detect `elm.id = 'foo'`
  const idDescriptor = getOwnPropertyDescriptor$1(Element.prototype, 'id');
  if (!isUndefined$1(idDescriptor)) {
    const {
      get,
      set
    } = idDescriptor;
    // These should always be a getter and a setter, but if someone is monkeying with the global descriptor, ignore it
    if (isFunction$1(get) && isFunction$1(set)) {
      defineProperty(Element.prototype, 'id', {
        get() {
          return get.call(this);
        },
        set(value) {
          set.call(this, value);
          detectSyntheticCrossRootAria(this, 'id', value);
        },
        // On the default descriptor for 'id', enumerable and configurable are true
        enumerable: true,
        configurable: true
      });
    }
  }
}
// Our detection logic relies on some modern browser features. We can just skip reporting the data
// for unsupported browsers
function supportsCssEscape() {
  return typeof CSS !== 'undefined' && isFunction$1(CSS.escape);
}
// If this page is not using synthetic shadow, then we don't need to install detection. Note
// that we are assuming synthetic shadow is loaded before LWC.
function isSyntheticShadowLoaded() {
  // We should probably be calling `renderer.isSyntheticShadowDefined`, but 1) we don't have access to the renderer,
  // and 2) this code needs to run in @lwc/engine-core, so it can access `logWarn()` and `report()`.
  return hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN);
}
// Detecting cross-root ARIA in synthetic shadow only makes sense for the browser
if (supportsCssEscape() && isSyntheticShadowLoaded()) {
  // Always run detection in dev mode, so we can at least print to the console
  {
    enableDetection$1();
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// The goal of this code is to detect usages of non-standard reflected ARIA properties. These are caused by
// legacy non-standard Element.prototype extensions added by the @lwc/aria-reflection package.
//
// See the README for @lwc/aria-reflection
const NON_STANDARD_ARIA_PROPS = ['ariaActiveDescendant', 'ariaControls', 'ariaDescribedBy', 'ariaDetails', 'ariaErrorMessage', 'ariaFlowTo', 'ariaLabelledBy', 'ariaOwns'];
function isLightningElement(elm) {
  // The former case is for `this.prop` (inside component) and the latter is for `element.prop` (outside component).
  // In both cases, we apply the non-standard prop even when the global polyfill is disabled, so this is kosher.
  return elm instanceof LightningElement || elm instanceof BaseBridgeElement;
}
function findVM(elm) {
  // If it's a shadow DOM component, then it has a host
  const {
    host
  } = elm.getRootNode();
  const vm = isUndefined$1(host) ? undefined : getAssociatedVMIfPresent(host);
  if (!isUndefined$1(vm)) {
    return vm;
  }
  // Else it might be a light DOM component. Walk up the tree trying to find the owner
  let parentElement = elm;
  while (!isNull(parentElement = parentElement.parentElement)) {
    if (isLightningElement(parentElement)) {
      const vm = getAssociatedVMIfPresent(parentElement);
      if (!isUndefined$1(vm)) {
        return vm;
      }
    }
  }
  // If we return undefined, it's because the element was rendered wholly outside a LightningElement
}

function checkAndReportViolation(elm, prop, isSetter, setValue) {
  if (!isLightningElement(elm)) {
    const vm = findVM(elm);
    {
      logWarnOnce(`Element <${elm.tagName.toLowerCase()}> ` + (isUndefined$1(vm) ? '' : `owned by <${vm.elm.tagName.toLowerCase()}> `) + `uses non-standard property "${prop}". This will be removed in a future version of LWC. ` + `See https://sfdc.co/deprecated-aria`);
    }
    let setValueType;
    if (isSetter) {
      // `typeof null` is "object" which is not very useful for detecting null.
      // We mostly want to know null vs undefined vs other types here, due to
      // https://github.com/salesforce/lwc/issues/3284
      setValueType = isNull(setValue) ? 'null' : typeof setValue;
    }
    report("NonStandardAriaReflection" /* ReportingEventId.NonStandardAriaReflection */, {
      tagName: vm === null || vm === void 0 ? void 0 : vm.tagName,
      propertyName: prop,
      isSetter,
      setValueType
    });
  }
}
function enableDetection() {
  const {
    prototype
  } = Element;
  for (const prop of NON_STANDARD_ARIA_PROPS) {
    const descriptor = getOwnPropertyDescriptor$1(prototype, prop);
    // The descriptor should exist because the @lwc/aria-reflection polyfill has run by now.
    // This happens automatically because of the ordering of imports.
    {
      /* istanbul ignore if */
      if (isUndefined$1(descriptor) || isUndefined$1(descriptor.get) || isUndefined$1(descriptor.set)) {
        // should never happen
        throw new Error('detect-non-standard-aria.ts loaded before @lwc/aria-reflection');
      }
    }
    // @ts-ignore
    const {
      get,
      set
    } = descriptor;
    defineProperty(prototype, prop, {
      get() {
        checkAndReportViolation(this, prop, false, undefined);
        return get.call(this);
      },
      set(val) {
        checkAndReportViolation(this, prop, true, val);
        return set.call(this, val);
      },
      configurable: true,
      enumerable: true
    });
  }
}
// No point in running this code if we're not in a browser, or if the global polyfill is not loaded
{
  if (!lwcRuntimeFlags.DISABLE_ARIA_REFLECTION_POLYFILL) {
    // Always run detection in dev mode, so we can at least print to the console
    {
      enableDetection();
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// See @lwc/engine-core/src/framework/template.ts
const TEMPLATE_PROPS = ['slots', 'stylesheetToken', 'stylesheets', 'renderMode'];
// Expandos that may be placed on a stylesheet factory function, and which are meaningful to LWC at runtime
const STYLESHEET_PROPS = [
// SEE `KEY__SCOPED_CSS` in @lwc/style-compiler
'$scoped$'];
// Via https://www.npmjs.com/package/object-observer
const ARRAY_MUTATION_METHODS = ['pop', 'push', 'shift', 'unshift', 'reverse', 'sort', 'fill', 'splice', 'copyWithin'];
let mutationTrackingDisabled = false;
function getOriginalArrayMethod(prop) {
  switch (prop) {
    case 'pop':
      return ArrayPop;
    case 'push':
      return ArrayPush$1;
    case 'shift':
      return ArrayShift;
    case 'unshift':
      return ArrayUnshift;
    case 'reverse':
      return ArrayReverse;
    case 'sort':
      return ArraySort;
    case 'fill':
      return ArrayFill;
    case 'splice':
      return ArraySplice;
    case 'copyWithin':
      return ArrayCopyWithin;
  }
}
function reportViolation(type, eventId, prop) {
  {
    logWarnOnce(`Mutating the "${prop}" property on a ${type} ` + `is deprecated and will be removed in a future version of LWC. ` + `See: https://sfdc.co/template-mutation`);
  }
}
function reportTemplateViolation(prop) {
  reportViolation('template', "TemplateMutation" /* ReportingEventId.TemplateMutation */, prop);
}
function reportStylesheetViolation(prop) {
  reportViolation('stylesheet', "StylesheetMutation" /* ReportingEventId.StylesheetMutation */, prop);
}
// Warn if the user tries to mutate a stylesheets array, e.g.:
// `tmpl.stylesheets.push(someStylesheetFunction)`
function warnOnArrayMutation(stylesheets) {
  // We can't handle users calling Array.prototype.slice.call(tmpl.stylesheets), but
  // we can at least warn when they use the most common mutation methods.
  for (const prop of ARRAY_MUTATION_METHODS) {
    const originalArrayMethod = getOriginalArrayMethod(prop);
    stylesheets[prop] = function arrayMutationWarningWrapper() {
      reportTemplateViolation('stylesheets');
      // @ts-ignore
      return originalArrayMethod.apply(this, arguments);
    };
  }
}
// Warn if the user tries to mutate a stylesheet factory function, e.g.:
// `stylesheet.$scoped$ = true`
function warnOnStylesheetFunctionMutation(stylesheet) {
  for (const prop of STYLESHEET_PROPS) {
    let value = stylesheet[prop];
    defineProperty(stylesheet, prop, {
      enumerable: true,
      configurable: true,
      get() {
        return value;
      },
      set(newValue) {
        reportStylesheetViolation(prop);
        value = newValue;
      }
    });
  }
}
// Warn on either array or stylesheet (function) mutation, in a deeply-nested array
function trackStylesheetsMutation(stylesheets) {
  traverseStylesheets(stylesheets, subStylesheets => {
    if (isArray$1(subStylesheets)) {
      warnOnArrayMutation(subStylesheets);
    } else {
      warnOnStylesheetFunctionMutation(subStylesheets);
    }
  });
}
// Deeply freeze the entire array (of arrays) of stylesheet factory functions
function deepFreeze(stylesheets) {
  traverseStylesheets(stylesheets, subStylesheets => {
    freeze(subStylesheets);
  });
}
// Deep-traverse an array (of arrays) of stylesheet factory functions, and call the callback for every array/function
function traverseStylesheets(stylesheets, callback) {
  callback(stylesheets);
  for (let i = 0; i < stylesheets.length; i++) {
    const stylesheet = stylesheets[i];
    if (isArray$1(stylesheet)) {
      traverseStylesheets(stylesheet, callback);
    } else {
      callback(stylesheet);
    }
  }
}
function trackMutations(tmpl) {
  if (!isUndefined$1(tmpl.stylesheets)) {
    trackStylesheetsMutation(tmpl.stylesheets);
  }
  for (const prop of TEMPLATE_PROPS) {
    let value = tmpl[prop];
    defineProperty(tmpl, prop, {
      enumerable: true,
      configurable: true,
      get() {
        return value;
      },
      set(newValue) {
        if (!mutationTrackingDisabled) {
          reportTemplateViolation(prop);
        }
        value = newValue;
      }
    });
  }
  const originalDescriptor = getOwnPropertyDescriptor$1(tmpl, 'stylesheetTokens');
  defineProperty(tmpl, 'stylesheetTokens', {
    enumerable: true,
    configurable: true,
    get: originalDescriptor.get,
    set(value) {
      reportTemplateViolation('stylesheetTokens');
      // Avoid logging/reporting twice (for both stylesheetToken and stylesheetTokens)
      mutationTrackingDisabled = true;
      originalDescriptor.set.call(this, value);
      mutationTrackingDisabled = false;
    }
  });
}
function addLegacyStylesheetTokensShim(tmpl) {
  // When ENABLE_FROZEN_TEMPLATE is false, then we shim stylesheetTokens on top of stylesheetToken for anyone who
  // is accessing the old internal API (backwards compat). Details: https://salesforce.quip.com/v1rmAFu2cKAr
  defineProperty(tmpl, 'stylesheetTokens', {
    enumerable: true,
    configurable: true,
    get() {
      const {
        stylesheetToken
      } = this;
      if (isUndefined$1(stylesheetToken)) {
        return stylesheetToken;
      }
      // Shim for the old `stylesheetTokens` property
      // See https://github.com/salesforce/lwc/pull/2332/files#diff-7901555acef29969adaa6583185b3e9bce475cdc6f23e799a54e0018cb18abaa
      return {
        hostAttribute: `${stylesheetToken}-host`,
        shadowAttribute: stylesheetToken
      };
    },
    set(value) {
      // If the value is null or some other exotic object, you would be broken anyway in the past
      // because the engine would try to access hostAttribute/shadowAttribute, which would throw an error.
      // However it may be undefined in newer versions of LWC, so we need to guard against that case.
      this.stylesheetToken = isUndefined$1(value) ? undefined : value.shadowAttribute;
    }
  });
}
function freezeTemplate(tmpl) {
  // TODO [#2782]: remove this flag and delete the legacy behavior
  if (lwcRuntimeFlags.ENABLE_FROZEN_TEMPLATE) {
    // Deep freeze the template
    freeze(tmpl);
    if (!isUndefined$1(tmpl.stylesheets)) {
      deepFreeze(tmpl.stylesheets);
    }
  } else {
    // template is not frozen - shim, report, and warn
    // this shim should be applied in both dev and prod
    addLegacyStylesheetTokensShim(tmpl);
    // When ENABLE_FROZEN_TEMPLATE is false, we want to warn in dev mode whenever someone is mutating the template
    {
      trackMutations(tmpl);
    }
  }
}
/** version: 3.1.3 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * Displays the header for a custom element.
 *
 * @param ce the custom element
 * @param componentInstance component instance associated with the custom element.
 */
function getHeaderForCustomElement(ce, componentInstance) {
  // [element]
  // LWC component instance: [vm.component]
  return ['div', {}, ['object', {
    object: ce,
    config: {
      skip: true
    }
  }], ['div', {}, ['span', {
    style: 'margin: 0 5px; color: red'
  }, 'LWC:'], ['object', {
    object: componentInstance
  }]]];
}
function getHeaderForComponentInstance(componentInstance, debugInfo) {
  if (keys(debugInfo).length === 0) {
    // there is no debug information, no need to customize this component instance
    return null;
  }
  // [component]
  // Debug information: [vm.debugInfo]
  return ['div', {}, ['object', {
    object: componentInstance,
    config: {
      skip: true
    }
  }], ['div', {}, ['span', {
    style: 'margin: 0 5px; color: red'
  }, 'Debug:'], ['object', {
    object: debugInfo
  }]]];
}
const LightningElementFormatter = {
  name: 'LightningElementFormatter',
  header(obj, config) {
    const vm = getAssociatedVMIfPresent(obj);
    if (!isUndefined$1(vm) && (isUndefined$1(config) || !config.skip)) {
      if (obj instanceof HTMLElement) {
        return getHeaderForCustomElement(obj, vm.component);
      } else {
        return getHeaderForComponentInstance(obj, vm.debugInfo);
      }
    }
    return null;
  },
  hasBody() {
    return false;
  }
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function init$2() {
  const devtoolsFormatters = _globalThis.devtoolsFormatters || [];
  ArrayPush$1.call(devtoolsFormatters, LightningElementFormatter);
  _globalThis.devtoolsFormatters = devtoolsFormatters;
}
{
  init$2();
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// Feature detection
//
// This check for constructable style sheets is similar to Fast's:
// https://github.com/microsoft/fast/blob/d49d1ec/packages/web-components/fast-element/src/dom.ts#L51-L53
// See also: https://github.com/whatwg/webidl/issues/1027#issuecomment-934510070
const supportsConstructableStylesheets = isFunction$1(CSSStyleSheet.prototype.replaceSync) && isArray$1(document.adoptedStyleSheets) &&
// The original adoptedStylesheet proposal used a frozen array. A follow-up proposal made the array mutable.
// Chromium 99+ and Firefox 101+ support mutable arrays. We check if the array is mutable, to ensure backward compat.
// (If the length is writable, then the array is mutable.) See: https://chromestatus.com/feature/5638996492288000
// TODO [#2828]: Re-evaluate this in the future once we drop support for older browser versions.
isTrue(getOwnPropertyDescriptor$1(document.adoptedStyleSheets, 'length').writable);
const stylesheetCache = new Map();
function createFreshStyleElement(content) {
  const elm = document.createElement('style');
  elm.type = 'text/css';
  elm.textContent = content;
  return elm;
}
function createStyleElement(content, cacheData) {
  const {
    element,
    usedElement
  } = cacheData;
  // If the <style> was already used, then we should clone it. We cannot insert
  // the same <style> in two places in the DOM.
  if (usedElement) {
    // This `<style>` may be repeated multiple times in the DOM, so cache it. It's a bit
    // faster to call `cloneNode()` on an existing node than to recreate it every time.
    return element.cloneNode(true);
  }
  // We don't clone every time, because that would be a perf tax on the first time
  cacheData.usedElement = true;
  return element;
}
function createConstructableStylesheet(content) {
  const stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(content);
  return stylesheet;
}
function insertConstructableStylesheet(content, target, cacheData) {
  const {
    adoptedStyleSheets
  } = target;
  const {
    stylesheet
  } = cacheData;
  // The reason we prefer .push() rather than reassignment is for perf: https://github.com/salesforce/lwc/pull/2683
  adoptedStyleSheets.push(stylesheet);
}
function insertStyleElement(content, target, cacheData) {
  const elm = createStyleElement(content, cacheData);
  target.appendChild(elm);
}
function getCacheData(content, useConstructableStylesheet) {
  let cacheData = stylesheetCache.get(content);
  if (isUndefined$1(cacheData)) {
    cacheData = {
      stylesheet: undefined,
      element: undefined,
      roots: undefined,
      global: false,
      usedElement: false
    };
    stylesheetCache.set(content, cacheData);
  }
  // Create <style> elements or CSSStyleSheets on-demand, as needed
  if (useConstructableStylesheet && isUndefined$1(cacheData.stylesheet)) {
    cacheData.stylesheet = createConstructableStylesheet(content);
  } else if (!useConstructableStylesheet && isUndefined$1(cacheData.element)) {
    cacheData.element = createFreshStyleElement(content);
  }
  return cacheData;
}
function insertGlobalStylesheet(content) {
  // Force a <style> element for global stylesheets. See comment below.
  const cacheData = getCacheData(content, false);
  if (cacheData.global) {
    // already inserted
    return;
  }
  cacheData.global = true; // mark inserted
  // TODO [#2922]: use document.adoptedStyleSheets in supported browsers. Currently we can't, due to backwards compat.
  insertStyleElement(content, document.head, cacheData);
}
function insertLocalStylesheet(content, target) {
  const cacheData = getCacheData(content, supportsConstructableStylesheets);
  let {
    roots
  } = cacheData;
  if (isUndefined$1(roots)) {
    roots = cacheData.roots = new WeakSet(); // lazily initialize (not needed for global styles)
  } else if (roots.has(target)) {
    // already inserted
    return;
  }
  roots.add(target); // mark inserted
  // Constructable stylesheets are only supported in certain browsers:
  // https://caniuse.com/mdn-api_document_adoptedstylesheets
  // The reason we use it is for perf: https://github.com/salesforce/lwc/pull/2460
  if (supportsConstructableStylesheets) {
    insertConstructableStylesheet(content, target, cacheData);
  } else {
    // Fall back to <style> element
    insertStyleElement(content, target, cacheData);
  }
}
function insertStylesheet(content, target) {
  if (isUndefined$1(target)) {
    // global
    insertGlobalStylesheet(content);
  } else {
    // local
    insertLocalStylesheet(content, target);
  }
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const cachedConstructors = new Map();
const elementsUpgradedOutsideLWC = new WeakSet();
let elementBeingUpgradedByLWC = false;
// Creates a constructor that is intended to be used directly as a custom element, except that the upgradeCallback is
// passed in to the constructor so LWC can reuse the same custom element constructor for multiple components.
// Another benefit is that only LWC can create components that actually do anything – if you do
// `customElements.define('x-foo')`, then you don't have access to the upgradeCallback, so it's a dummy custom element.
// This class should be created once per tag name.
const createUpgradableConstructor = (connectedCallback, disconnectedCallback) => {
  const hasConnectedCallback = !isUndefined$1(connectedCallback);
  const hasDisconnectedCallback = !isUndefined$1(disconnectedCallback);
  // TODO [#2972]: this class should expose observedAttributes as necessary
  class UpgradableConstructor extends HTMLElement {
    constructor(upgradeCallback) {
      super();
      // If the element is not created using lwc.createElement(), e.g. `document.createElement('x-foo')`,
      // then elementBeingUpgraded will be false
      if (elementBeingUpgradedByLWC) {
        upgradeCallback(this);
      } else if (hasConnectedCallback || hasDisconnectedCallback) {
        // If this element has connected or disconnected callbacks, then we need to keep track of
        // instances that were created outside LWC (i.e. not created by `lwc.createElement()`).
        // If the element has no connected or disconnected callbacks, then we don't need to track this.
        elementsUpgradedOutsideLWC.add(this);
        // TODO [#2970]: LWC elements cannot be upgraded via new Ctor()
        // Do we want to support this? Throw an error? Currently for backwards compat it's a no-op.
      }
    }
    /*LWC compiler v3.1.3*/
  }
  // Do not unnecessarily add a connectedCallback/disconnectedCallback, as it introduces perf overhead
  // See: https://github.com/salesforce/lwc/pull/3162#issuecomment-1311851174
  if (hasConnectedCallback) {
    UpgradableConstructor.prototype.connectedCallback = function () {
      if (!elementsUpgradedOutsideLWC.has(this)) {
        connectedCallback(this);
      }
    };
  }
  if (hasDisconnectedCallback) {
    UpgradableConstructor.prototype.disconnectedCallback = function () {
      if (!elementsUpgradedOutsideLWC.has(this)) {
        disconnectedCallback(this);
      }
    };
  }
  return UpgradableConstructor;
};
const createCustomElement = (tagName, upgradeCallback, connectedCallback, disconnectedCallback) => {
  // use global custom elements registry
  let UpgradableConstructor = cachedConstructors.get(tagName);
  if (isUndefined$1(UpgradableConstructor)) {
    if (!isUndefined$1(customElements.get(tagName))) {
      throw new Error(`Unexpected tag name "${tagName}". This name is a registered custom element, preventing LWC to upgrade the element.`);
    }
    UpgradableConstructor = createUpgradableConstructor(connectedCallback, disconnectedCallback);
    customElements.define(tagName, UpgradableConstructor);
    cachedConstructors.set(tagName, UpgradableConstructor);
  }
  elementBeingUpgradedByLWC = true;
  try {
    return new UpgradableConstructor(upgradeCallback);
  } finally {
    elementBeingUpgradedByLWC = false;
  }
};

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * A factory function that produces a renderer.
 * Renderer encapsulates operations that are required to render an LWC component into the underlying
 * runtime environment. In the case of @lwc/enigne-dom, it is meant to be used in a DOM environment.
 * Example usage:
 * import { renderer, rendererFactory } from 'lwc';
 * const customRenderer = rendererFactory(renderer);
 *
 * @param baseRenderer Either null or the base renderer imported from 'lwc'.
 */
function rendererFactory(baseRenderer) {
  const renderer = function (exports) {
    /**
     * Copyright (C) 2023 salesforce.com, inc.
     */
    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function invariant(value, msg) {
      if (!value) {
        throw new Error(`Invariant Violation: ${msg}`);
      }
    }
    function isTrue$1(value, msg) {
      if (!value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    function isFalse$1(value, msg) {
      if (value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    function fail(msg) {
      throw new Error(msg);
    }
    var assert = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fail: fail,
      invariant: invariant,
      isFalse: isFalse$1,
      isTrue: isTrue$1
    });
    function isUndefined(obj) {
      return obj === undefined;
    }
    function isNull(obj) {
      return obj === null;
    }
    /** version: 3.1.3 */

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    class WireContextSubscriptionEvent extends CustomEvent {
      constructor(adapterToken, {
        setNewContext,
        setDisconnectedCallback
      }) {
        super(adapterToken, {
          bubbles: true,
          composed: true
        });
        this.setNewContext = setNewContext;
        this.setDisconnectedCallback = setDisconnectedCallback;
      }
      /*LWC compiler v3.1.3*/
    }
    function registerContextConsumer(elm, adapterContextToken, subscriptionPayload) {
      dispatchEvent(elm, new WireContextSubscriptionEvent(adapterContextToken, subscriptionPayload));
    }
    function registerContextProvider(elm, adapterContextToken, onContextSubscription) {
      addEventListener(elm, adapterContextToken, evt => {
        evt.stopImmediatePropagation();
        const {
          setNewContext,
          setDisconnectedCallback
        } = evt;
        onContextSubscription({
          setNewContext,
          setDisconnectedCallback
        });
      });
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function cloneNode(node, deep) {
      return node.cloneNode(deep);
    }
    function createElement(tagName, namespace) {
      return isUndefined(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
    }
    function createText(content) {
      return document.createTextNode(content);
    }
    function createComment(content) {
      return document.createComment(content);
    }
    // Parse the fragment HTML string into DOM
    function createFragment(html) {
      const template = document.createElement('template');
      template.innerHTML = html;
      return template.content.firstChild;
    }
    function insert(node, parent, anchor) {
      parent.insertBefore(node, anchor);
    }
    function remove(node, parent) {
      parent.removeChild(node);
    }
    function nextSibling(node) {
      return node.nextSibling;
    }
    function attachShadow(element, options) {
      // `shadowRoot` will be non-null in two cases:
      //   1. upon initial load with an SSR-generated DOM, while in Shadow render mode
      //   2. when a webapp author places <c-app> in their static HTML and mounts their
      //      root component with customElement.define('c-app', Ctor)
      if (!isNull(element.shadowRoot)) {
        return element.shadowRoot;
      }
      return element.attachShadow(options);
    }
    function setText(node, content) {
      node.nodeValue = content;
    }
    function getProperty(node, key) {
      return node[key];
    }
    function setProperty(node, key, value) {
      node[key] = value;
    }
    function getAttribute(element, name, namespace) {
      return isUndefined(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
    }
    function setAttribute(element, name, value, namespace) {
      return isUndefined(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
    }
    function removeAttribute(element, name, namespace) {
      if (isUndefined(namespace)) {
        element.removeAttribute(name);
      } else {
        element.removeAttributeNS(namespace, name);
      }
    }
    function addEventListener(target, type, callback, options) {
      target.addEventListener(type, callback, options);
    }
    function removeEventListener(target, type, callback, options) {
      target.removeEventListener(type, callback, options);
    }
    function dispatchEvent(target, event) {
      return target.dispatchEvent(event);
    }
    function getClassList(element) {
      return element.classList;
    }
    function setCSSStyleProperty(element, name, value, important) {
      // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
      // represent elements in the engine?
      element.style.setProperty(name, value, important ? 'important' : '');
    }
    function getBoundingClientRect(element) {
      return element.getBoundingClientRect();
    }
    function querySelector(element, selectors) {
      return element.querySelector(selectors);
    }
    function querySelectorAll(element, selectors) {
      return element.querySelectorAll(selectors);
    }
    function getElementsByTagName(element, tagNameOrWildCard) {
      return element.getElementsByTagName(tagNameOrWildCard);
    }
    function getElementsByClassName(element, names) {
      return element.getElementsByClassName(names);
    }
    function getChildren(element) {
      return element.children;
    }
    function getChildNodes(element) {
      return element.childNodes;
    }
    function getFirstChild(element) {
      return element.firstChild;
    }
    function getFirstElementChild(element) {
      return element.firstElementChild;
    }
    function getLastChild(element) {
      return element.lastChild;
    }
    function getLastElementChild(element) {
      return element.lastElementChild;
    }
    function isConnected(node) {
      return node.isConnected;
    }
    function assertInstanceOfHTMLElement(elm, msg) {
      assert.invariant(elm instanceof HTMLElement, msg);
    }
    function ownerDocument(element) {
      return element.ownerDocument;
    }
    function getTagName(elm) {
      return elm.tagName;
    }
    exports.addEventListener = addEventListener;
    exports.assertInstanceOfHTMLElement = assertInstanceOfHTMLElement;
    exports.attachShadow = attachShadow;
    exports.cloneNode = cloneNode;
    exports.createComment = createComment;
    exports.createElement = createElement;
    exports.createFragment = createFragment;
    exports.createText = createText;
    exports.dispatchEvent = dispatchEvent;
    exports.getAttribute = getAttribute;
    exports.getBoundingClientRect = getBoundingClientRect;
    exports.getChildNodes = getChildNodes;
    exports.getChildren = getChildren;
    exports.getClassList = getClassList;
    exports.getElementsByClassName = getElementsByClassName;
    exports.getElementsByTagName = getElementsByTagName;
    exports.getFirstChild = getFirstChild;
    exports.getFirstElementChild = getFirstElementChild;
    exports.getLastChild = getLastChild;
    exports.getLastElementChild = getLastElementChild;
    exports.getProperty = getProperty;
    exports.getTagName = getTagName;
    exports.insert = insert;
    exports.isConnected = isConnected;
    exports.nextSibling = nextSibling;
    exports.ownerDocument = ownerDocument;
    exports.querySelector = querySelector;
    exports.querySelectorAll = querySelectorAll;
    exports.registerContextConsumer = registerContextConsumer;
    exports.registerContextProvider = registerContextProvider;
    exports.remove = remove;
    exports.removeAttribute = removeAttribute;
    exports.removeEventListener = removeEventListener;
    exports.setAttribute = setAttribute;
    exports.setCSSStyleProperty = setCSSStyleProperty;
    exports.setProperty = setProperty;
    exports.setText = setText;
    return exports;
  }({});
  // Meant to inherit any properties passed via the base renderer as the argument to the factory.
  Object.setPrototypeOf(renderer, baseRenderer);
  return renderer;
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * The base renderer that will be used by engine-core.
 * This will be used for DOM operations when lwc is running in a browser environment.
 */
const renderer = assign$1(
// The base renderer will invoke the factory with null and assign additional properties that are
// shared across renderers
rendererFactory(null),
// Properties that are either not required to be sandboxed or rely on a globally shared information
{
  // insertStyleSheet implementation shares a global cache of stylesheet data
  insertStylesheet,
  // relies on a shared global cache
  createCustomElement,
  isSyntheticShadowDefined: hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN)
});
function clearNode(node) {
  const childNodes = renderer.getChildNodes(node);
  for (let i = childNodes.length - 1; i >= 0; i--) {
    renderer.remove(childNodes[i], node);
  }
}
function buildCustomElementConstructor(Ctor) {
  var _a;
  const HtmlPrototype = getComponentHtmlPrototype(Ctor);
  const {
    observedAttributes
  } = HtmlPrototype;
  const {
    attributeChangedCallback
  } = HtmlPrototype.prototype;
  return _a = class extends HTMLElement {
    constructor() {
      super();
      if (!isNull(this.shadowRoot)) {
        {
          // eslint-disable-next-line no-console
          console.warn(`Found an existing shadow root for the custom element "${Ctor.name}". Call \`hydrateComponent\` instead.`);
        }
        clearNode(this.shadowRoot);
      }
      if (this.childNodes.length > 0) {
        {
          // eslint-disable-next-line no-console
          console.warn(`Custom elements cannot have child nodes. Ensure the element is empty, including whitespace.`);
        }
        clearNode(this);
      }
      createVM(this, Ctor, renderer, {
        mode: 'open',
        owner: null,
        tagName: this.tagName
      });
    }
    connectedCallback() {
      connectRootElement(this);
    }
    disconnectedCallback() {
      disconnectRootElement(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      attributeChangedCallback.call(this, name, oldValue, newValue);
    }
    /*LWC compiler v3.1.3*/
  }, _a.observedAttributes = observedAttributes, _a;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// TODO [#2472]: Remove this workaround when appropriate.
// eslint-disable-next-line @lwc/lwc-internal/no-global-node
const _Node$1 = Node;
const ConnectingSlot = new WeakMap();
const DisconnectingSlot = new WeakMap();
function callNodeSlot(node, slot) {
  {
    assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
  }
  const fn = slot.get(node);
  if (!isUndefined$1(fn)) {
    fn(node);
  }
  return node; // for convenience
}

if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
  // Monkey patching Node methods to be able to detect the insertions and removal of root elements
  // created via createElement.
  const {
    appendChild,
    insertBefore,
    removeChild,
    replaceChild
  } = _Node$1.prototype;
  assign$1(_Node$1.prototype, {
    appendChild(newChild) {
      const appendedNode = appendChild.call(this, newChild);
      return callNodeSlot(appendedNode, ConnectingSlot);
    },
    insertBefore(newChild, referenceNode) {
      const insertedNode = insertBefore.call(this, newChild, referenceNode);
      return callNodeSlot(insertedNode, ConnectingSlot);
    },
    removeChild(oldChild) {
      const removedNode = removeChild.call(this, oldChild);
      return callNodeSlot(removedNode, DisconnectingSlot);
    },
    replaceChild(newChild, oldChild) {
      const replacedNode = replaceChild.call(this, newChild, oldChild);
      callNodeSlot(replacedNode, DisconnectingSlot);
      callNodeSlot(newChild, ConnectingSlot);
      return replacedNode;
    }
  });
}
/**
 * EXPERIMENTAL: This function is almost identical to document.createElement with the slightly
 * difference that in the options, you can pass the `is` property set to a Constructor instead of
 * just a string value. The intent is to allow the creation of an element controlled by LWC without
 * having to register the element as a custom element.
 *
 * @example
 * ```
 * const el = createElement('x-foo', { is: FooCtor });
 * ```
 */
function createElement(sel, options) {
  if (!isObject$1(options) || isNull(options)) {
    throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString$1(options)}".`);
  }
  const Ctor = options.is;
  if (!isFunction$1(Ctor)) {
    throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);
  }
  const {
    createCustomElement
  } = renderer;
  // tagName must be all lowercase, unfortunately, we have legacy code that is
  // passing `sel` as a camel-case, which makes them invalid custom elements name
  // the following line guarantees that this does not leaks beyond this point.
  const tagName = StringToLowerCase.call(sel);
  // the custom element from the registry is expecting an upgrade callback
  /**
   * Note: if the upgradable constructor does not expect, or throw when we new it
   * with a callback as the first argument, we could implement a more advanced
   * mechanism that only passes that argument if the constructor is known to be
   * an upgradable custom element.
   */
  const upgradeCallback = elm => {
    createVM(elm, Ctor, renderer, {
      tagName,
      mode: options.mode !== 'closed' ? 'open' : 'closed',
      owner: null
    });
    if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
      ConnectingSlot.set(elm, connectRootElement);
      DisconnectingSlot.set(elm, disconnectRootElement);
    }
  };
  let connectedCallback;
  let disconnectedCallback;
  if (lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
    connectedCallback = elm => {
      connectRootElement(elm);
    };
    disconnectedCallback = elm => {
      disconnectRootElement(elm);
    };
  }
  const element = createCustomElement(tagName, upgradeCallback, connectedCallback, disconnectedCallback);
  return element;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ComponentConstructorToCustomElementConstructorMap = new Map();
function getCustomElementConstructor(Ctor) {
  if (Ctor === LightningElement) {
    throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
  }
  let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);
  if (isUndefined$1(ce)) {
    ce = buildCustomElementConstructor(Ctor);
    ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
  }
  return ce;
}
/**
 * This static getter builds a Web Component class from a LWC constructor so it can be registered
 * as a new element via customElements.define() at any given time. E.g.:
 *
 *      import Foo from 'ns/foo';
 *      customElements.define('x-foo', Foo.CustomElementConstructor);
 *      const elm = document.createElement('x-foo');
 *
 */
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    return getCustomElementConstructor(this);
  }
});
freeze(LightningElement);
seal(LightningElement.prototype);
/** version: 3.1.3 */

const $fragment1$1 = parseFragment`<button${3}>-</button>`;
const $fragment2 = parseFragment`<button${3}>+</button>`;
function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_text("Counter: " + api_dynamic_text($cmp.counter)), api_static_fragment($fragment1$1(), 1, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.decrement))
    }
  }), api_static_fragment($fragment2(), 3, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.increment))
    }
  })];
  /*LWC compiler v3.1.3*/
}
var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.stylesheets = [];
tmpl$1.stylesheetToken = "lwc-45mhcofkk5";
freezeTemplate(tmpl$1);

var _xCounter = registerComponent(registerDecorators(class extends LightningElement {
  constructor(...args) {
    super(...args);
    this.counter = 0;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  /*LWC compiler v3.1.3*/
}, {
  fields: ["counter"]
}), {
  tmpl: _tmpl$1,
  sel: "x-counter",
  apiVersion: 59
});

const $fragment1 = parseFragment`<h1${3}>Hello world!</h1>`;
const stc0 = {
  key: 2
};
const stc1 = {
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  return [api_static_fragment($fragment1(), 1), api_element("p", stc0, [api_text(api_dynamic_text($cmp.clientId))]), api_custom_element("x-counter", _xCounter, stc1)];
  /*LWC compiler v3.1.3*/
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-190pm5at4mo";
freezeTemplate(tmpl);

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var IdxStatus;
(function (IdxStatus) {
  IdxStatus["SUCCESS"] = "SUCCESS";
  IdxStatus["PENDING"] = "PENDING";
  IdxStatus["FAILURE"] = "FAILURE";
  IdxStatus["TERMINAL"] = "TERMINAL";
  IdxStatus["CANCELED"] = "CANCELED";
})(IdxStatus || (IdxStatus = {}));
var AuthenticatorKey;
(function (AuthenticatorKey) {
  AuthenticatorKey["OKTA_PASSWORD"] = "okta_password";
  AuthenticatorKey["OKTA_EMAIL"] = "okta_email";
  AuthenticatorKey["PHONE_NUMBER"] = "phone_number";
  AuthenticatorKey["GOOGLE_AUTHENTICATOR"] = "google_otp";
  AuthenticatorKey["SECURITY_QUESTION"] = "security_question";
  AuthenticatorKey["OKTA_VERIFY"] = "okta_verify";
  AuthenticatorKey["WEBAUTHN"] = "webauthn";
})(AuthenticatorKey || (AuthenticatorKey = {}));
var IdxFeature;
(function (IdxFeature) {
  IdxFeature["PASSWORD_RECOVERY"] = "recover-password";
  IdxFeature["REGISTRATION"] = "enroll-profile";
  IdxFeature["SOCIAL_IDP"] = "redirect-idp";
  IdxFeature["ACCOUNT_UNLOCK"] = "unlock-account";
})(IdxFeature || (IdxFeature = {}));
function isAuthenticator(obj) {
  return obj && (obj.key || obj.id);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getNativeConsole() {
  if (typeof window !== 'undefined') {
    return window.console;
  } else if (typeof console !== 'undefined') {
    return console;
  } else {
    return undefined;
  }
}
function getConsole() {
  var nativeConsole = getNativeConsole();
  if (nativeConsole && nativeConsole.log) {
    return nativeConsole;
  }
  return {
    log: function () {},
    warn: function () {},
    group: function () {},
    groupEnd: function () {}
  };
}
function warn(text) {
  getConsole().warn('[okta-auth-sdk] WARN: ' + text);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function removeNils(obj) {
  var cleaned = {};
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      var value = obj[prop];
      if (value !== null && value !== undefined) {
        cleaned[prop] = value;
      }
    }
  }
  return cleaned;
}
function clone(obj) {
  if (obj) {
    var str = JSON.stringify(obj);
    if (str) {
      return JSON.parse(str);
    }
  }
  return obj;
}
function omit(obj, ...props) {
  var newobj = {};
  for (var p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p) && props.indexOf(p) == -1) {
      newobj[p] = obj[p];
    }
  }
  return clone(newobj);
}
function find(collection, searchParams) {
  var c = collection.length;
  while (c--) {
    var item = collection[c];
    var found = true;
    for (var prop in searchParams) {
      if (!Object.prototype.hasOwnProperty.call(searchParams, prop)) {
        continue;
      }
      if (item[prop] !== searchParams[prop]) {
        found = false;
        break;
      }
    }
    if (found) {
      return item;
    }
  }
}
function getLink(obj, linkName, altName) {
  if (!obj || !obj._links) {
    return;
  }
  var link = clone(obj._links[linkName]);
  if (link && link.name && altName) {
    if (link.name === altName) {
      return link;
    }
  } else {
    return link;
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function genRandomString(length) {
  var randomCharset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var random = '';
  for (var c = 0, cl = randomCharset.length; c < length; ++c) {
    random += randomCharset[Math.floor(Math.random() * cl)];
  }
  return random;
}
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
function split2(str, delim) {
  const parts = str.split(delim);
  return [parts[0], parts.splice(1, parts.length).join(delim)];
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isAbsoluteUrl(url) {
  return /^[a-z][a-z0-9+.-]*:/i.test(url);
}
function toAbsoluteUrl(url = '', baseUrl) {
  if (isAbsoluteUrl(url)) {
    return url;
  }
  baseUrl = removeTrailingSlash(baseUrl);
  return url[0] === '/' ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
}
function toQueryString(obj) {
  var str = [];
  if (obj !== null) {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && obj[key] !== null) {
        str.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
  }
  if (str.length) {
    return '?' + str.join('&');
  } else {
    return '';
  }
}
function removeTrailingSlash(path) {
  if (!path) {
    return;
  }
  var trimmed = path.replace(/^\s+|\s+$/gm, '');
  trimmed = trimmed.replace(/\/+$/, '');
  return trimmed;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class CustomError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthSdkError extends CustomError {
  constructor(msg, xhr) {
    super(msg);
    this.name = 'AuthSdkError';
    this.errorCode = 'INTERNAL';
    this.errorSummary = msg;
    this.errorLink = 'INTERNAL';
    this.errorId = 'INTERNAL';
    this.errorCauses = [];
    if (xhr) {
      this.xhr = xhr;
    }
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function generateState() {
  return genRandomString(64);
}
function generateNonce() {
  return genRandomString(64);
}
function getIssuer(sdk, options = {}) {
  const issuer = removeTrailingSlash(options.issuer) || sdk.options.issuer;
  return issuer;
}
function getOAuthBaseUrl(sdk, options = {}) {
  const issuer = getIssuer(sdk, options);
  const baseUrl = issuer.indexOf('/oauth2') > 0 ? issuer : issuer + '/oauth2';
  return baseUrl;
}
function getOAuthDomain(sdk, options = {}) {
  const issuer = getIssuer(sdk, options);
  const domain = issuer.split('/oauth2')[0];
  return domain;
}
function getOAuthUrls(sdk, options) {
  if (arguments.length > 2) {
    throw new AuthSdkError('As of version 3.0, "getOAuthUrls" takes only a single set of options');
  }
  options = options || {};
  var authorizeUrl = removeTrailingSlash(options.authorizeUrl) || sdk.options.authorizeUrl;
  var issuer = getIssuer(sdk, options);
  var userinfoUrl = removeTrailingSlash(options.userinfoUrl) || sdk.options.userinfoUrl;
  var tokenUrl = removeTrailingSlash(options.tokenUrl) || sdk.options.tokenUrl;
  var logoutUrl = removeTrailingSlash(options.logoutUrl) || sdk.options.logoutUrl;
  var revokeUrl = removeTrailingSlash(options.revokeUrl) || sdk.options.revokeUrl;
  var baseUrl = getOAuthBaseUrl(sdk, options);
  authorizeUrl = authorizeUrl || baseUrl + '/v1/authorize';
  userinfoUrl = userinfoUrl || baseUrl + '/v1/userinfo';
  tokenUrl = tokenUrl || baseUrl + '/v1/token';
  revokeUrl = revokeUrl || baseUrl + '/v1/revoke';
  logoutUrl = logoutUrl || baseUrl + '/v1/logout';
  return {
    issuer: issuer,
    authorizeUrl: authorizeUrl,
    userinfoUrl: userinfoUrl,
    tokenUrl: tokenUrl,
    revokeUrl: revokeUrl,
    logoutUrl: logoutUrl
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createOAuthMeta(sdk, tokenParams) {
  const issuer = sdk.options.issuer;
  const urls = getOAuthUrls(sdk, tokenParams);
  const oauthMeta = {
    issuer,
    urls,
    clientId: tokenParams.clientId,
    redirectUri: tokenParams.redirectUri,
    responseType: tokenParams.responseType,
    responseMode: tokenParams.responseMode,
    scopes: tokenParams.scopes,
    state: tokenParams.state,
    nonce: tokenParams.nonce,
    ignoreSignature: tokenParams.ignoreSignature,
    acrValues: tokenParams.acrValues
  };
  if (tokenParams.pkce === false) {
    return oauthMeta;
  }
  const pkceMeta = Object.assign(Object.assign({}, oauthMeta), {
    codeVerifier: tokenParams.codeVerifier,
    codeChallengeMethod: tokenParams.codeChallengeMethod,
    codeChallenge: tokenParams.codeChallenge
  });
  return pkceMeta;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function E() {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function (name, callback, ctx) {
    var self = this;
    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
var tinyEmitter = E;

var Emitter = /*@__PURE__*/getDefaultExportFromCjs(tinyEmitter);

/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api$1 = init(defaultConverter, { path: '/' });

var browserPonyfill = {exports: {}};

(function (module, exports) {
	var global = typeof self !== 'undefined' ? self : commonjsGlobal;
	var __self__ = function () {
	  function F() {
	    this.fetch = false;
	    this.DOMException = global.DOMException;
	  }
	  F.prototype = global;
	  return new F();
	}();
	(function (self) {
	  (function (exports) {
	    var support = {
	      searchParams: 'URLSearchParams' in self,
	      iterable: 'Symbol' in self && 'iterator' in Symbol,
	      blob: 'FileReader' in self && 'Blob' in self && function () {
	        try {
	          new Blob();
	          return true;
	        } catch (e) {
	          return false;
	        }
	      }(),
	      formData: 'FormData' in self,
	      arrayBuffer: 'ArrayBuffer' in self
	    };
	    function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    }
	    if (support.arrayBuffer) {
	      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
	      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	      };
	    }
	    function normalizeName(name) {
	      if (typeof name !== 'string') {
	        name = String(name);
	      }
	      if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	      }
	      return name.toLowerCase();
	    }
	    function normalizeValue(value) {
	      if (typeof value !== 'string') {
	        value = String(value);
	      }
	      return value;
	    }

	    // Build a destructive iterator for the value list
	    function iteratorFor(items) {
	      var iterator = {
	        next: function () {
	          var value = items.shift();
	          return {
	            done: value === undefined,
	            value: value
	          };
	        }
	      };
	      if (support.iterable) {
	        iterator[Symbol.iterator] = function () {
	          return iterator;
	        };
	      }
	      return iterator;
	    }
	    function Headers(headers) {
	      this.map = {};
	      if (headers instanceof Headers) {
	        headers.forEach(function (value, name) {
	          this.append(name, value);
	        }, this);
	      } else if (Array.isArray(headers)) {
	        headers.forEach(function (header) {
	          this.append(header[0], header[1]);
	        }, this);
	      } else if (headers) {
	        Object.getOwnPropertyNames(headers).forEach(function (name) {
	          this.append(name, headers[name]);
	        }, this);
	      }
	    }
	    Headers.prototype.append = function (name, value) {
	      name = normalizeName(name);
	      value = normalizeValue(value);
	      var oldValue = this.map[name];
	      this.map[name] = oldValue ? oldValue + ', ' + value : value;
	    };
	    Headers.prototype['delete'] = function (name) {
	      delete this.map[normalizeName(name)];
	    };
	    Headers.prototype.get = function (name) {
	      name = normalizeName(name);
	      return this.has(name) ? this.map[name] : null;
	    };
	    Headers.prototype.has = function (name) {
	      return this.map.hasOwnProperty(normalizeName(name));
	    };
	    Headers.prototype.set = function (name, value) {
	      this.map[normalizeName(name)] = normalizeValue(value);
	    };
	    Headers.prototype.forEach = function (callback, thisArg) {
	      for (var name in this.map) {
	        if (this.map.hasOwnProperty(name)) {
	          callback.call(thisArg, this.map[name], name, this);
	        }
	      }
	    };
	    Headers.prototype.keys = function () {
	      var items = [];
	      this.forEach(function (value, name) {
	        items.push(name);
	      });
	      return iteratorFor(items);
	    };
	    Headers.prototype.values = function () {
	      var items = [];
	      this.forEach(function (value) {
	        items.push(value);
	      });
	      return iteratorFor(items);
	    };
	    Headers.prototype.entries = function () {
	      var items = [];
	      this.forEach(function (value, name) {
	        items.push([name, value]);
	      });
	      return iteratorFor(items);
	    };
	    if (support.iterable) {
	      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	    }
	    function consumed(body) {
	      if (body.bodyUsed) {
	        return Promise.reject(new TypeError('Already read'));
	      }
	      body.bodyUsed = true;
	    }
	    function fileReaderReady(reader) {
	      return new Promise(function (resolve, reject) {
	        reader.onload = function () {
	          resolve(reader.result);
	        };
	        reader.onerror = function () {
	          reject(reader.error);
	        };
	      });
	    }
	    function readBlobAsArrayBuffer(blob) {
	      var reader = new FileReader();
	      var promise = fileReaderReady(reader);
	      reader.readAsArrayBuffer(blob);
	      return promise;
	    }
	    function readBlobAsText(blob) {
	      var reader = new FileReader();
	      var promise = fileReaderReady(reader);
	      reader.readAsText(blob);
	      return promise;
	    }
	    function readArrayBufferAsText(buf) {
	      var view = new Uint8Array(buf);
	      var chars = new Array(view.length);
	      for (var i = 0; i < view.length; i++) {
	        chars[i] = String.fromCharCode(view[i]);
	      }
	      return chars.join('');
	    }
	    function bufferClone(buf) {
	      if (buf.slice) {
	        return buf.slice(0);
	      } else {
	        var view = new Uint8Array(buf.byteLength);
	        view.set(new Uint8Array(buf));
	        return view.buffer;
	      }
	    }
	    function Body() {
	      this.bodyUsed = false;
	      this._initBody = function (body) {
	        this._bodyInit = body;
	        if (!body) {
	          this._bodyText = '';
	        } else if (typeof body === 'string') {
	          this._bodyText = body;
	        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	          this._bodyBlob = body;
	        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	          this._bodyFormData = body;
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this._bodyText = body.toString();
	        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	          this._bodyArrayBuffer = bufferClone(body.buffer);
	          // IE 10-11 can't handle a DataView body.
	          this._bodyInit = new Blob([this._bodyArrayBuffer]);
	        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	          this._bodyArrayBuffer = bufferClone(body);
	        } else {
	          this._bodyText = body = Object.prototype.toString.call(body);
	        }
	        if (!this.headers.get('content-type')) {
	          if (typeof body === 'string') {
	            this.headers.set('content-type', 'text/plain;charset=UTF-8');
	          } else if (this._bodyBlob && this._bodyBlob.type) {
	            this.headers.set('content-type', this._bodyBlob.type);
	          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	          }
	        }
	      };
	      if (support.blob) {
	        this.blob = function () {
	          var rejected = consumed(this);
	          if (rejected) {
	            return rejected;
	          }
	          if (this._bodyBlob) {
	            return Promise.resolve(this._bodyBlob);
	          } else if (this._bodyArrayBuffer) {
	            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	          } else if (this._bodyFormData) {
	            throw new Error('could not read FormData body as blob');
	          } else {
	            return Promise.resolve(new Blob([this._bodyText]));
	          }
	        };
	        this.arrayBuffer = function () {
	          if (this._bodyArrayBuffer) {
	            return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	          } else {
	            return this.blob().then(readBlobAsArrayBuffer);
	          }
	        };
	      }
	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	      if (support.formData) {
	        this.formData = function () {
	          return this.text().then(decode);
	        };
	      }
	      this.json = function () {
	        return this.text().then(JSON.parse);
	      };
	      return this;
	    }

	    // HTTP methods whose capitalization should be normalized
	    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	    function normalizeMethod(method) {
	      var upcased = method.toUpperCase();
	      return methods.indexOf(upcased) > -1 ? upcased : method;
	    }
	    function Request(input, options) {
	      options = options || {};
	      var body = options.body;
	      if (input instanceof Request) {
	        if (input.bodyUsed) {
	          throw new TypeError('Already read');
	        }
	        this.url = input.url;
	        this.credentials = input.credentials;
	        if (!options.headers) {
	          this.headers = new Headers(input.headers);
	        }
	        this.method = input.method;
	        this.mode = input.mode;
	        this.signal = input.signal;
	        if (!body && input._bodyInit != null) {
	          body = input._bodyInit;
	          input.bodyUsed = true;
	        }
	      } else {
	        this.url = String(input);
	      }
	      this.credentials = options.credentials || this.credentials || 'same-origin';
	      if (options.headers || !this.headers) {
	        this.headers = new Headers(options.headers);
	      }
	      this.method = normalizeMethod(options.method || this.method || 'GET');
	      this.mode = options.mode || this.mode || null;
	      this.signal = options.signal || this.signal;
	      this.referrer = null;
	      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	        throw new TypeError('Body not allowed for GET or HEAD requests');
	      }
	      this._initBody(body);
	    }
	    Request.prototype.clone = function () {
	      return new Request(this, {
	        body: this._bodyInit
	      });
	    };
	    function decode(body) {
	      var form = new FormData();
	      body.trim().split('&').forEach(function (bytes) {
	        if (bytes) {
	          var split = bytes.split('=');
	          var name = split.shift().replace(/\+/g, ' ');
	          var value = split.join('=').replace(/\+/g, ' ');
	          form.append(decodeURIComponent(name), decodeURIComponent(value));
	        }
	      });
	      return form;
	    }
	    function parseHeaders(rawHeaders) {
	      var headers = new Headers();
	      // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	      // https://tools.ietf.org/html/rfc7230#section-3.2
	      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
	      preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
	        var parts = line.split(':');
	        var key = parts.shift().trim();
	        if (key) {
	          var value = parts.join(':').trim();
	          headers.append(key, value);
	        }
	      });
	      return headers;
	    }
	    Body.call(Request.prototype);
	    function Response(bodyInit, options) {
	      if (!options) {
	        options = {};
	      }
	      this.type = 'default';
	      this.status = options.status === undefined ? 200 : options.status;
	      this.ok = this.status >= 200 && this.status < 300;
	      this.statusText = 'statusText' in options ? options.statusText : 'OK';
	      this.headers = new Headers(options.headers);
	      this.url = options.url || '';
	      this._initBody(bodyInit);
	    }
	    Body.call(Response.prototype);
	    Response.prototype.clone = function () {
	      return new Response(this._bodyInit, {
	        status: this.status,
	        statusText: this.statusText,
	        headers: new Headers(this.headers),
	        url: this.url
	      });
	    };
	    Response.error = function () {
	      var response = new Response(null, {
	        status: 0,
	        statusText: ''
	      });
	      response.type = 'error';
	      return response;
	    };
	    var redirectStatuses = [301, 302, 303, 307, 308];
	    Response.redirect = function (url, status) {
	      if (redirectStatuses.indexOf(status) === -1) {
	        throw new RangeError('Invalid status code');
	      }
	      return new Response(null, {
	        status: status,
	        headers: {
	          location: url
	        }
	      });
	    };
	    exports.DOMException = self.DOMException;
	    try {
	      new exports.DOMException();
	    } catch (err) {
	      exports.DOMException = function (message, name) {
	        this.message = message;
	        this.name = name;
	        var error = Error(message);
	        this.stack = error.stack;
	      };
	      exports.DOMException.prototype = Object.create(Error.prototype);
	      exports.DOMException.prototype.constructor = exports.DOMException;
	    }
	    function fetch(input, init) {
	      return new Promise(function (resolve, reject) {
	        var request = new Request(input, init);
	        if (request.signal && request.signal.aborted) {
	          return reject(new exports.DOMException('Aborted', 'AbortError'));
	        }
	        var xhr = new XMLHttpRequest();
	        function abortXhr() {
	          xhr.abort();
	        }
	        xhr.onload = function () {
	          var options = {
	            status: xhr.status,
	            statusText: xhr.statusText,
	            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	          };
	          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	          var body = 'response' in xhr ? xhr.response : xhr.responseText;
	          resolve(new Response(body, options));
	        };
	        xhr.onerror = function () {
	          reject(new TypeError('Network request failed'));
	        };
	        xhr.ontimeout = function () {
	          reject(new TypeError('Network request failed'));
	        };
	        xhr.onabort = function () {
	          reject(new exports.DOMException('Aborted', 'AbortError'));
	        };
	        xhr.open(request.method, request.url, true);
	        if (request.credentials === 'include') {
	          xhr.withCredentials = true;
	        } else if (request.credentials === 'omit') {
	          xhr.withCredentials = false;
	        }
	        if ('responseType' in xhr && support.blob) {
	          xhr.responseType = 'blob';
	        }
	        request.headers.forEach(function (value, name) {
	          xhr.setRequestHeader(name, value);
	        });
	        if (request.signal) {
	          request.signal.addEventListener('abort', abortXhr);
	          xhr.onreadystatechange = function () {
	            // DONE (success or failure)
	            if (xhr.readyState === 4) {
	              request.signal.removeEventListener('abort', abortXhr);
	            }
	          };
	        }
	        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	      });
	    }
	    fetch.polyfill = true;
	    if (!self.fetch) {
	      self.fetch = fetch;
	      self.Headers = Headers;
	      self.Request = Request;
	      self.Response = Response;
	    }
	    exports.Headers = Headers;
	    exports.Request = Request;
	    exports.Response = Response;
	    exports.fetch = fetch;
	    Object.defineProperty(exports, '__esModule', {
	      value: true
	    });
	    return exports;
	  })({});
	})(__self__);
	__self__.fetch.ponyfill = true;
	// Remove "polyfill" property added by whatwg-fetch
	delete __self__.fetch.polyfill;
	// Choose between native implementation (global) or custom implementation (__self__)
	// var ctx = global.fetch ? global : __self__;
	var ctx = __self__; // this line disable service worker support temporarily
	exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
	exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
	exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
	exports.Headers = ctx.Headers;
	exports.Request = ctx.Request;
	exports.Response = ctx.Response;
	module.exports = exports; 
} (browserPonyfill, browserPonyfill.exports));

var browserPonyfillExports = browserPonyfill.exports;
var crossFetch = /*@__PURE__*/getDefaultExportFromCjs(browserPonyfillExports);

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var TokenKind;
(function (TokenKind) {
  TokenKind["ACCESS"] = "accessToken";
  TokenKind["ID"] = "idToken";
  TokenKind["REFRESH"] = "refreshToken";
})(TokenKind || (TokenKind = {}));
function isAccessToken(obj) {
  return obj && obj.accessToken;
}
function isIDToken(obj) {
  return obj && obj.idToken;
}
function isRefreshToken(obj) {
  return obj && obj.refreshToken;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function createTransactionMeta(authClient, options = {}) {
  const tokenParams = await authClient.token.prepareTokenParams(options);
  const pkceMeta = createOAuthMeta(authClient, tokenParams);
  let {
    flow = 'default',
    withCredentials = true,
    activationToken = undefined,
    recoveryToken = undefined,
    maxAge = undefined,
    acrValues = undefined
  } = Object.assign(Object.assign({}, authClient.options), options);
  const meta = Object.assign(Object.assign({}, pkceMeta), {
    flow,
    withCredentials,
    activationToken,
    recoveryToken,
    maxAge,
    acrValues
  });
  return meta;
}
function hasSavedInteractionHandle(authClient, options) {
  const savedMeta = getSavedTransactionMeta(authClient, options);
  if (savedMeta === null || savedMeta === void 0 ? void 0 : savedMeta.interactionHandle) {
    return true;
  }
  return false;
}
function getSavedTransactionMeta(authClient, options) {
  options = removeNils(options);
  options = Object.assign(Object.assign({}, authClient.options), options);
  let savedMeta;
  try {
    savedMeta = authClient.transactionManager.load(options);
  } catch (e) {}
  if (!savedMeta) {
    return;
  }
  if (isTransactionMetaValid(savedMeta, options)) {
    return savedMeta;
  }
  warn('Saved transaction meta does not match the current configuration. ' + 'This may indicate that two apps are sharing a storage key.');
}
async function getTransactionMeta(authClient, options) {
  options = removeNils(options);
  options = Object.assign(Object.assign({}, authClient.options), options);
  const validExistingMeta = getSavedTransactionMeta(authClient, options);
  if (validExistingMeta) {
    return validExistingMeta;
  }
  return createTransactionMeta(authClient, options);
}
function saveTransactionMeta(authClient, meta) {
  authClient.transactionManager.save(meta, {
    muteWarning: true
  });
}
function clearTransactionMeta(authClient) {
  authClient.transactionManager.clear();
}
function isTransactionMetaValid(meta, options = {}) {
  const keys = ['issuer', 'clientId', 'redirectUri', 'state', 'codeChallenge', 'codeChallengeMethod', 'activationToken', 'recoveryToken'];
  if (isTransactionMetaValidForOptions(meta, options, keys) === false) {
    return false;
  }
  const {
    flow
  } = options;
  if (isTransactionMetaValidForFlow(meta, flow) === false) {
    return false;
  }
  return true;
}
function isTransactionMetaValidForFlow(meta, flow) {
  const shouldValidateFlow = flow && flow !== 'default' && flow !== 'proceed';
  if (shouldValidateFlow) {
    if (flow !== meta.flow) {
      return false;
    }
  }
  return true;
}
function isTransactionMetaValidForOptions(meta, options, keys) {
  const mismatch = keys.some(key => {
    const value = options[key];
    if (value && value !== meta[key]) {
      return true;
    }
  });
  return !mismatch;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}
function isFunction(fn) {
  return !!fn && {}.toString.call(fn) === '[object Function]';
}
function isPromise$1(obj) {
  return obj && obj.finally && typeof obj.finally === 'function';
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const STATE_TOKEN_KEY_NAME = 'oktaStateToken';
const DEFAULT_POLLING_DELAY = 500;
const DEFAULT_MAX_CLOCK_SKEW = 300;
const DEFAULT_CACHE_DURATION = 86400;
const TOKEN_STORAGE_NAME = 'okta-token-storage';
const CACHE_STORAGE_NAME = 'okta-cache-storage';
const PKCE_STORAGE_NAME = 'okta-pkce-storage';
const TRANSACTION_STORAGE_NAME = 'okta-transaction-storage';
const SHARED_TRANSACTION_STORAGE_NAME = 'okta-shared-transaction-storage';
const ORIGINAL_URI_STORAGE_NAME = 'okta-original-uri-storage';
const IDX_RESPONSE_STORAGE_NAME = 'okta-idx-response-storage';
const ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
const ID_TOKEN_STORAGE_KEY = 'idToken';
const REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';
const REFERRER_PATH_STORAGE_KEY = 'referrerPath';
const MIN_VERIFIER_LENGTH = 43;
const MAX_VERIFIER_LENGTH = 128;
const DEFAULT_CODE_CHALLENGE_METHOD = 'S256';
const IDX_API_VERSION = '1.0.0';

var constants = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACCESS_TOKEN_STORAGE_KEY: ACCESS_TOKEN_STORAGE_KEY,
    CACHE_STORAGE_NAME: CACHE_STORAGE_NAME,
    DEFAULT_CACHE_DURATION: DEFAULT_CACHE_DURATION,
    DEFAULT_CODE_CHALLENGE_METHOD: DEFAULT_CODE_CHALLENGE_METHOD,
    DEFAULT_MAX_CLOCK_SKEW: DEFAULT_MAX_CLOCK_SKEW,
    DEFAULT_POLLING_DELAY: DEFAULT_POLLING_DELAY,
    IDX_API_VERSION: IDX_API_VERSION,
    IDX_RESPONSE_STORAGE_NAME: IDX_RESPONSE_STORAGE_NAME,
    ID_TOKEN_STORAGE_KEY: ID_TOKEN_STORAGE_KEY,
    MAX_VERIFIER_LENGTH: MAX_VERIFIER_LENGTH,
    MIN_VERIFIER_LENGTH: MIN_VERIFIER_LENGTH,
    ORIGINAL_URI_STORAGE_NAME: ORIGINAL_URI_STORAGE_NAME,
    PKCE_STORAGE_NAME: PKCE_STORAGE_NAME,
    REFERRER_PATH_STORAGE_KEY: REFERRER_PATH_STORAGE_KEY,
    REFRESH_TOKEN_STORAGE_KEY: REFRESH_TOKEN_STORAGE_KEY,
    SHARED_TRANSACTION_STORAGE_NAME: SHARED_TRANSACTION_STORAGE_NAME,
    STATE_TOKEN_KEY_NAME: STATE_TOKEN_KEY_NAME,
    TOKEN_STORAGE_NAME: TOKEN_STORAGE_NAME,
    TRANSACTION_STORAGE_NAME: TRANSACTION_STORAGE_NAME
});

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthApiError extends CustomError {
  constructor(err, xhr, meta) {
    const message = err.errorSummary;
    super(message);
    this.name = 'AuthApiError';
    this.errorSummary = err.errorSummary;
    this.errorCode = err.errorCode;
    this.errorLink = err.errorLink;
    this.errorId = err.errorId;
    this.errorCauses = err.errorCauses;
    if (xhr) {
      this.xhr = xhr;
    }
    if (meta) {
      this.meta = meta;
    }
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class OAuthError extends CustomError {
  constructor(errorCode, summary) {
    super(summary);
    this.name = 'OAuthError';
    this.errorCode = errorCode;
    this.errorSummary = summary;
    this.error = errorCode;
    this.error_description = summary;
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const parseInsufficientAuthenticationError = header => {
  if (!header) {
    throw new AuthSdkError('Missing header string');
  }
  return header.split(',').map(part => part.trim()).map(part => part.split('=')).reduce((acc, curr) => {
    acc[curr[0]] = curr[1].replace(/^"(.*)"$/, '$1');
    return acc;
  }, {});
};
const formatError = (sdk, resp) => {
  var _a, _b;
  let err;
  let serverErr = {};
  if (resp.responseText && isString(resp.responseText)) {
    try {
      serverErr = JSON.parse(resp.responseText);
    } catch (e) {
      serverErr = {
        errorSummary: 'Unknown error'
      };
    }
  }
  if (resp.status >= 500) {
    serverErr.errorSummary = 'Unknown error';
  }
  if (sdk.options.transformErrorXHR) {
    resp = sdk.options.transformErrorXHR(clone(resp));
  }
  if (serverErr.error && serverErr.error_description) {
    err = new OAuthError(serverErr.error, serverErr.error_description);
  } else {
    err = new AuthApiError(serverErr, resp);
  }
  if ((resp === null || resp === void 0 ? void 0 : resp.status) === 403 && !!((_a = resp === null || resp === void 0 ? void 0 : resp.headers) === null || _a === void 0 ? void 0 : _a['www-authenticate'])) {
    const {
      error,
      error_description,
      max_age,
      acr_values
    } = parseInsufficientAuthenticationError((_b = resp === null || resp === void 0 ? void 0 : resp.headers) === null || _b === void 0 ? void 0 : _b['www-authenticate']);
    if (error === 'insufficient_authentication_context') {
      err = new AuthApiError({
        errorSummary: error,
        errorCauses: [{
          errorSummary: error_description
        }]
      }, resp, Object.assign({
        max_age: +max_age
      }, acr_values && {
        acr_values
      }));
    }
  }
  return err;
};
function httpRequest(sdk, options) {
  options = options || {};
  if (sdk.options.httpRequestInterceptors) {
    for (const interceptor of sdk.options.httpRequestInterceptors) {
      interceptor(options);
    }
  }
  var url = options.url,
    method = options.method,
    args = options.args,
    saveAuthnState = options.saveAuthnState,
    accessToken = options.accessToken,
    withCredentials = options.withCredentials === true,
    storageUtil = sdk.options.storageUtil,
    storage = storageUtil.storage,
    httpCache = sdk.storageManager.getHttpCache(sdk.options.cookies);
  if (options.cacheResponse) {
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[url];
    if (cachedResponse && Date.now() / 1000 < cachedResponse.expiresAt) {
      return Promise.resolve(cachedResponse.response);
    }
  }
  var oktaUserAgentHeader = sdk._oktaUserAgent.getHttpHeader();
  var headers = Object.assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, oktaUserAgentHeader);
  Object.assign(headers, sdk.options.headers, options.headers);
  headers = removeNils(headers);
  if (accessToken && isString(accessToken)) {
    headers['Authorization'] = 'Bearer ' + accessToken;
  }
  var ajaxOptions = {
    headers,
    data: args || undefined,
    withCredentials
  };
  var err, res;
  return sdk.options.httpRequestClient(method, url, ajaxOptions).then(function (resp) {
    res = resp.responseText;
    if (res && isString(res)) {
      res = JSON.parse(res);
      if (res && typeof res === 'object' && !res.headers) {
        if (Array.isArray(res)) {
          res.forEach(item => {
            item.headers = resp.headers;
          });
        } else {
          res.headers = resp.headers;
        }
      }
    }
    if (saveAuthnState) {
      if (!res.stateToken) {
        storage.delete(STATE_TOKEN_KEY_NAME);
      }
    }
    if (res && res.stateToken && res.expiresAt) {
      storage.set(STATE_TOKEN_KEY_NAME, res.stateToken, res.expiresAt, sdk.options.cookies);
    }
    if (res && options.cacheResponse) {
      httpCache.updateStorage(url, {
        expiresAt: Math.floor(Date.now() / 1000) + DEFAULT_CACHE_DURATION,
        response: res
      });
    }
    return res;
  }).catch(function (resp) {
    err = formatError(sdk, resp);
    if (err.errorCode === 'E0000011') {
      storage.delete(STATE_TOKEN_KEY_NAME);
    }
    throw err;
  });
}
function get(sdk, url, options) {
  url = isAbsoluteUrl(url) ? url : sdk.getIssuerOrigin() + url;
  var getOptions = {
    url: url,
    method: 'GET'
  };
  Object.assign(getOptions, options);
  return httpRequest(sdk, getOptions);
}
function post(sdk, url, args, options) {
  url = isAbsoluteUrl(url) ? url : sdk.getIssuerOrigin() + url;
  var postOptions = {
    url: url,
    method: 'POST',
    args: args,
    saveAuthnState: true
  };
  Object.assign(postOptions, options);
  return httpRequest(sdk, postOptions);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getResponse(meta) {
  return {
    meta,
    interactionHandle: meta.interactionHandle,
    state: meta.state
  };
}
async function interact(authClient, options = {}) {
  options = removeNils(options);
  let meta = getSavedTransactionMeta(authClient, options);
  if (meta === null || meta === void 0 ? void 0 : meta.interactionHandle) {
    return getResponse(meta);
  }
  meta = await createTransactionMeta(authClient, Object.assign(Object.assign({}, meta), options));
  const baseUrl = getOAuthBaseUrl(authClient);
  let {
    clientId,
    redirectUri,
    state,
    scopes,
    withCredentials,
    codeChallenge,
    codeChallengeMethod,
    activationToken,
    recoveryToken,
    maxAge,
    acrValues,
    nonce
  } = meta;
  const clientSecret = options.clientSecret || authClient.options.clientSecret;
  withCredentials = withCredentials !== null && withCredentials !== void 0 ? withCredentials : true;
  const url = `${baseUrl}/v1/interact`;
  const params = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    client_id: clientId,
    scope: scopes.join(' '),
    redirect_uri: redirectUri,
    code_challenge: codeChallenge,
    code_challenge_method: codeChallengeMethod,
    state
  }, activationToken && {
    activation_token: activationToken
  }), recoveryToken && {
    recovery_token: recoveryToken
  }), clientSecret && {
    client_secret: clientSecret
  }), maxAge && {
    max_age: maxAge
  }), acrValues && {
    acr_values: acrValues
  }), nonce && {
    nonce
  });
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const resp = await httpRequest(authClient, {
    method: 'POST',
    url,
    headers,
    withCredentials,
    args: params
  });
  const interactionHandle = resp.interaction_handle;
  const newMeta = Object.assign(Object.assign({}, meta), {
    interactionHandle,
    withCredentials,
    state,
    scopes,
    recoveryToken,
    activationToken
  });
  saveTransactionMeta(authClient, newMeta);
  return getResponse(newMeta);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const isFieldMutable = function isFieldMutable(field) {
  return field.mutable !== false;
};
const divideSingleActionParamsByMutability = function divideSingleActionParamsByMutability(action) {
  var _a, _b;
  const defaultParamsForAction = {};
  const neededParamsForAction = [];
  const immutableParamsForAction = {};
  if (!action.value) {
    neededParamsForAction.push(action);
    return {
      defaultParamsForAction,
      neededParamsForAction,
      immutableParamsForAction
    };
  }
  for (let field of action.value) {
    if (isFieldMutable(field)) {
      neededParamsForAction.push(field);
      if ((_a = field.value) !== null && _a !== void 0 ? _a : false) {
        defaultParamsForAction[field.name] = field.value;
      }
    } else {
      immutableParamsForAction[field.name] = (_b = field.value) !== null && _b !== void 0 ? _b : '';
    }
  }
  return {
    defaultParamsForAction,
    neededParamsForAction,
    immutableParamsForAction
  };
};
const divideActionParamsByMutability = function divideActionParamsByMutability(actionList) {
  actionList = Array.isArray(actionList) ? actionList : [actionList];
  const neededParams = [];
  const defaultParams = {};
  const immutableParams = {};
  for (let action of actionList) {
    const {
      defaultParamsForAction,
      neededParamsForAction,
      immutableParamsForAction
    } = divideSingleActionParamsByMutability(action);
    neededParams.push(neededParamsForAction);
    defaultParams[action.name] = defaultParamsForAction;
    immutableParams[action.name] = immutableParamsForAction;
  }
  return {
    defaultParams,
    neededParams,
    immutableParams
  };
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const generateDirectFetch = function generateDirectFetch(authClient, {
  actionDefinition,
  defaultParamsForAction = {},
  immutableParamsForAction = {},
  toPersist = {}
}) {
  const target = actionDefinition.href;
  return async function (params = {}) {
    var _a;
    const headers = {
      'Content-Type': 'application/json',
      'Accept': actionDefinition.accepts || 'application/ion+json'
    };
    const body = JSON.stringify(Object.assign(Object.assign(Object.assign({}, defaultParamsForAction), params), immutableParamsForAction));
    try {
      const response = await httpRequest(authClient, {
        url: target,
        method: actionDefinition.method,
        headers,
        args: body,
        withCredentials: (_a = toPersist === null || toPersist === void 0 ? void 0 : toPersist.withCredentials) !== null && _a !== void 0 ? _a : true
      });
      return authClient.idx.makeIdxResponse(Object.assign({}, response), toPersist, true);
    } catch (err) {
      if (!(err instanceof AuthApiError) || !(err === null || err === void 0 ? void 0 : err.xhr)) {
        throw err;
      }
      const response = err.xhr;
      const payload = response.responseJSON || JSON.parse(response.responseText);
      const wwwAuthHeader = response.headers['WWW-Authenticate'] || response.headers['www-authenticate'];
      const idxResponse = authClient.idx.makeIdxResponse(Object.assign({}, payload), toPersist, false);
      if (response.status === 401 && wwwAuthHeader === 'Oktadevicejwt realm="Okta Device"') {
        idxResponse.stepUp = true;
      }
      return idxResponse;
    }
  };
};
const generateIdxAction = function generateIdxAction(authClient, actionDefinition, toPersist) {
  const generator = generateDirectFetch;
  const {
    defaultParams,
    neededParams,
    immutableParams
  } = divideActionParamsByMutability(actionDefinition);
  const action = generator(authClient, {
    actionDefinition,
    defaultParamsForAction: defaultParams[actionDefinition.name],
    immutableParamsForAction: immutableParams[actionDefinition.name],
    toPersist
  });
  action.neededParams = neededParams;
  return action;
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const generateRemediationFunctions = function generateRemediationFunctions(authClient, remediationValue, toPersist = {}) {
  return Object.fromEntries(remediationValue.map(remediation => {
    return [remediation.name, generateIdxAction(authClient, remediation, toPersist)];
  }));
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
var hasOwnProp = Object.prototype.hasOwnProperty;
/**
* @typedef {null|boolean|number|string|PlainObject|GenericArray} JSONObject
*/

/**
 * Copies array and then pushes item into it.
 * @param {GenericArray} arr Array to copy and into which to push
 * @param {any} item Array item to add (to end)
 * @returns {GenericArray} Copy of the original array
 */

function push(arr, item) {
  arr = arr.slice();
  arr.push(item);
  return arr;
}
/**
 * Copies array and then unshifts item into it.
 * @param {any} item Array item to add (to beginning)
 * @param {GenericArray} arr Array to copy and into which to unshift
 * @returns {GenericArray} Copy of the original array
 */

function unshift(item, arr) {
  arr = arr.slice();
  arr.unshift(item);
  return arr;
}
/**
 * Caught when JSONPath is used without `new` but rethrown if with `new`
 * @extends Error
 */

var NewError = /*#__PURE__*/function (_Error) {
  _inherits(NewError, _Error);
  var _super = _createSuper(NewError);

  /**
   * @param {any} value The evaluated scalar value
   */
  function NewError(value) {
    var _this;
    _classCallCheck(this, NewError);
    _this = _super.call(this, 'JSONPath should not be called with "new" (it prevents return ' + 'of (unwrapped) scalar values)');
    _this.avoidNew = true;
    _this.value = value;
    _this.name = 'NewError';
    return _this;
  }
  return NewError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
* @typedef {PlainObject} ReturnObject
* @property {string} path
* @property {JSONObject} value
* @property {PlainObject|GenericArray} parent
* @property {string} parentProperty
*/

/**
* @callback JSONPathCallback
* @param {string|PlainObject} preferredOutput
* @param {"value"|"property"} type
* @param {ReturnObject} fullRetObj
* @returns {void}
*/

/**
* @callback OtherTypeCallback
* @param {JSONObject} val
* @param {string} path
* @param {PlainObject|GenericArray} parent
* @param {string} parentPropName
* @returns {boolean}
*/

/* eslint-disable max-len -- Can make multiline type after https://github.com/syavorsky/comment-parser/issues/109 */

/**
 * @typedef {PlainObject} JSONPathOptions
 * @property {JSON} json
 * @property {string|string[]} path
 * @property {"value"|"path"|"pointer"|"parent"|"parentProperty"|"all"} [resultType="value"]
 * @property {boolean} [flatten=false]
 * @property {boolean} [wrap=true]
 * @property {PlainObject} [sandbox={}]
 * @property {boolean} [preventEval=false]
 * @property {PlainObject|GenericArray|null} [parent=null]
 * @property {string|null} [parentProperty=null]
 * @property {JSONPathCallback} [callback]
 * @property {OtherTypeCallback} [otherTypeCallback] Defaults to
 *   function which throws on encountering `@other`
 * @property {boolean} [autostart=true]
 */

/* eslint-enable max-len -- Can make multiline type after https://github.com/syavorsky/comment-parser/issues/109 */

/**
 * @param {string|JSONPathOptions} opts If a string, will be treated as `expr`
 * @param {string} [expr] JSON path to evaluate
 * @param {JSON} [obj] JSON object to evaluate against
 * @param {JSONPathCallback} [callback] Passed 3 arguments: 1) desired payload
 *     per `resultType`, 2) `"value"|"property"`, 3) Full returned object with
 *     all payloads
 * @param {OtherTypeCallback} [otherTypeCallback] If `@other()` is at the end
 *   of one's query, this will be invoked with the value of the item, its
 *   path, its parent, and its parent's property name, and it should return
 *   a boolean indicating whether the supplied value belongs to the "other"
 *   type or not (or it may handle transformations and return `false`).
 * @returns {JSONPath}
 * @class
 */

function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
  // eslint-disable-next-line no-restricted-syntax
  if (!(this instanceof JSONPath)) {
    try {
      return new JSONPath(opts, expr, obj, callback, otherTypeCallback);
    } catch (e) {
      if (!e.avoidNew) {
        throw e;
      }
      return e.value;
    }
  }
  if (typeof opts === 'string') {
    otherTypeCallback = callback;
    callback = obj;
    obj = expr;
    expr = opts;
    opts = null;
  }
  var optObj = opts && _typeof(opts) === 'object';
  opts = opts || {};
  this.json = opts.json || obj;
  this.path = opts.path || expr;
  this.resultType = opts.resultType || 'value';
  this.flatten = opts.flatten || false;
  this.wrap = hasOwnProp.call(opts, 'wrap') ? opts.wrap : true;
  this.sandbox = opts.sandbox || {};
  this.preventEval = opts.preventEval || false;
  this.parent = opts.parent || null;
  this.parentProperty = opts.parentProperty || null;
  this.callback = opts.callback || callback || null;
  this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function () {
    throw new TypeError('You must supply an otherTypeCallback callback option ' + 'with the @other() operator.');
  };
  if (opts.autostart !== false) {
    var args = {
      path: optObj ? opts.path : expr
    };
    if (!optObj) {
      args.json = obj;
    } else if ('json' in opts) {
      args.json = opts.json;
    }
    var ret = this.evaluate(args);
    if (!ret || _typeof(ret) !== 'object') {
      throw new NewError(ret);
    }
    return ret;
  }
} // PUBLIC METHODS

JSONPath.prototype.evaluate = function (expr, json, callback, otherTypeCallback) {
  var _this2 = this;
  var currParent = this.parent,
    currParentProperty = this.parentProperty;
  var flatten = this.flatten,
    wrap = this.wrap;
  this.currResultType = this.resultType;
  this.currPreventEval = this.preventEval;
  this.currSandbox = this.sandbox;
  callback = callback || this.callback;
  this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
  json = json || this.json;
  expr = expr || this.path;
  if (expr && _typeof(expr) === 'object' && !Array.isArray(expr)) {
    if (!expr.path && expr.path !== '') {
      throw new TypeError('You must supply a "path" property when providing an object ' + 'argument to JSONPath.evaluate().');
    }
    if (!hasOwnProp.call(expr, 'json')) {
      throw new TypeError('You must supply a "json" property when providing an object ' + 'argument to JSONPath.evaluate().');
    }
    var _expr = expr;
    json = _expr.json;
    flatten = hasOwnProp.call(expr, 'flatten') ? expr.flatten : flatten;
    this.currResultType = hasOwnProp.call(expr, 'resultType') ? expr.resultType : this.currResultType;
    this.currSandbox = hasOwnProp.call(expr, 'sandbox') ? expr.sandbox : this.currSandbox;
    wrap = hasOwnProp.call(expr, 'wrap') ? expr.wrap : wrap;
    this.currPreventEval = hasOwnProp.call(expr, 'preventEval') ? expr.preventEval : this.currPreventEval;
    callback = hasOwnProp.call(expr, 'callback') ? expr.callback : callback;
    this.currOtherTypeCallback = hasOwnProp.call(expr, 'otherTypeCallback') ? expr.otherTypeCallback : this.currOtherTypeCallback;
    currParent = hasOwnProp.call(expr, 'parent') ? expr.parent : currParent;
    currParentProperty = hasOwnProp.call(expr, 'parentProperty') ? expr.parentProperty : currParentProperty;
    expr = expr.path;
  }
  currParent = currParent || null;
  currParentProperty = currParentProperty || null;
  if (Array.isArray(expr)) {
    expr = JSONPath.toPathString(expr);
  }
  if (!expr && expr !== '' || !json) {
    return undefined;
  }
  var exprList = JSONPath.toPathArray(expr);
  if (exprList[0] === '$' && exprList.length > 1) {
    exprList.shift();
  }
  this._hasParentSelector = null;
  var result = this._trace(exprList, json, ['$'], currParent, currParentProperty, callback).filter(function (ea) {
    return ea && !ea.isParentSelector;
  });
  if (!result.length) {
    return wrap ? [] : undefined;
  }
  if (!wrap && result.length === 1 && !result[0].hasArrExpr) {
    return this._getPreferredOutput(result[0]);
  }
  return result.reduce(function (rslt, ea) {
    var valOrPath = _this2._getPreferredOutput(ea);
    if (flatten && Array.isArray(valOrPath)) {
      rslt = rslt.concat(valOrPath);
    } else {
      rslt.push(valOrPath);
    }
    return rslt;
  }, []);
}; // PRIVATE METHODS

JSONPath.prototype._getPreferredOutput = function (ea) {
  var resultType = this.currResultType;
  switch (resultType) {
    case 'all':
      {
        var path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
        ea.pointer = JSONPath.toPointer(path);
        ea.path = typeof ea.path === 'string' ? ea.path : JSONPath.toPathString(ea.path);
        return ea;
      }
    case 'value':
    case 'parent':
    case 'parentProperty':
      return ea[resultType];
    case 'path':
      return JSONPath.toPathString(ea[resultType]);
    case 'pointer':
      return JSONPath.toPointer(ea.path);
    default:
      throw new TypeError('Unknown result type');
  }
};
JSONPath.prototype._handleCallback = function (fullRetObj, callback, type) {
  if (callback) {
    var preferredOutput = this._getPreferredOutput(fullRetObj);
    fullRetObj.path = typeof fullRetObj.path === 'string' ? fullRetObj.path : JSONPath.toPathString(fullRetObj.path); // eslint-disable-next-line node/callback-return

    callback(preferredOutput, type, fullRetObj);
  }
};
/**
 *
 * @param {string} expr
 * @param {JSONObject} val
 * @param {string} path
 * @param {PlainObject|GenericArray} parent
 * @param {string} parentPropName
 * @param {JSONPathCallback} callback
 * @param {boolean} hasArrExpr
 * @param {boolean} literalPriority
 * @returns {ReturnObject|ReturnObject[]}
 */

JSONPath.prototype._trace = function (expr, val, path, parent, parentPropName, callback, hasArrExpr, literalPriority) {
  var _this3 = this;

  // No expr to follow? return path and value as the result of
  //  this trace branch
  var retObj;
  if (!expr.length) {
    retObj = {
      path: path,
      value: val,
      parent: parent,
      parentProperty: parentPropName,
      hasArrExpr: hasArrExpr
    };
    this._handleCallback(retObj, callback, 'value');
    return retObj;
  }
  var loc = expr[0],
    x = expr.slice(1); // We need to gather the return value of recursive trace calls in order to
  // do the parent sel computation.

  var ret = [];
  /**
   *
   * @param {ReturnObject|ReturnObject[]} elems
   * @returns {void}
   */

  function addRet(elems) {
    if (Array.isArray(elems)) {
      // This was causing excessive stack size in Node (with or
      //  without Babel) against our performance test:
      //  `ret.push(...elems);`
      elems.forEach(function (t) {
        ret.push(t);
      });
    } else {
      ret.push(elems);
    }
  }
  if ((typeof loc !== 'string' || literalPriority) && val && hasOwnProp.call(val, loc)) {
    // simple case--directly follow property
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr)); // eslint-disable-next-line unicorn/prefer-switch -- Part of larger `if`
  } else if (loc === '*') {
    // all child properties
    this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
      addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true, true));
    });
  } else if (loc === '..') {
    // all descendent parent properties
    // Check remaining expression with val's immediate children
    addRet(this._trace(x, val, path, parent, parentPropName, callback, hasArrExpr));
    this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
      // We don't join m and x here because we only want parents,
      //   not scalar values
      if (_typeof(v[m]) === 'object') {
        // Keep going with recursive descent on val's
        //   object children
        addRet(_this3._trace(unshift(l, _x), v[m], push(p, m), v, m, cb, true));
      }
    }); // The parent sel computation is handled in the frame above using the
    // ancestor object of val
  } else if (loc === '^') {
    // This is not a final endpoint, so we do not invoke the callback here
    this._hasParentSelector = true;
    return {
      path: path.slice(0, -1),
      expr: x,
      isParentSelector: true
    };
  } else if (loc === '~') {
    // property name
    retObj = {
      path: push(path, loc),
      value: parentPropName,
      parent: parent,
      parentProperty: null
    };
    this._handleCallback(retObj, callback, 'property');
    return retObj;
  } else if (loc === '$') {
    // root only
    addRet(this._trace(x, val, path, null, null, callback, hasArrExpr));
  } else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(loc)) {
    // [start:end:step]  Python slice syntax
    addRet(this._slice(loc, x, val, path, parent, parentPropName, callback));
  } else if (loc.indexOf('?(') === 0) {
    // [?(expr)] (filtering)
    if (this.currPreventEval) {
      throw new Error('Eval [?(expr)] prevented in JSONPath expression.');
    }
    this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
      if (_this3._eval(l.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, '$1'), v[m], m, p, par, pr)) {
        addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true));
      }
    });
  } else if (loc[0] === '(') {
    // [(expr)] (dynamic property/index)
    if (this.currPreventEval) {
      throw new Error('Eval [(expr)] prevented in JSONPath expression.');
    } // As this will resolve to a property name (but we don't know it
    //  yet), property and parent information is relative to the
    //  parent of the property to which this expression will resolve

    addRet(this._trace(unshift(this._eval(loc, val, path[path.length - 1], path.slice(0, -1), parent, parentPropName), x), val, path, parent, parentPropName, callback, hasArrExpr));
  } else if (loc[0] === '@') {
    // value type: @boolean(), etc.
    var addType = false;
    var valueType = loc.slice(1, -2);
    switch (valueType) {
      case 'scalar':
        if (!val || !['object', 'function'].includes(_typeof(val))) {
          addType = true;
        }
        break;
      case 'boolean':
      case 'string':
      case 'undefined':
      case 'function':
        // eslint-disable-next-line valid-typeof
        if (_typeof(val) === valueType) {
          addType = true;
        }
        break;
      case 'integer':
        if (Number.isFinite(val) && !(val % 1)) {
          addType = true;
        }
        break;
      case 'number':
        if (Number.isFinite(val)) {
          addType = true;
        }
        break;
      case 'nonFinite':
        if (typeof val === 'number' && !Number.isFinite(val)) {
          addType = true;
        }
        break;
      case 'object':
        // eslint-disable-next-line valid-typeof
        if (val && _typeof(val) === valueType) {
          addType = true;
        }
        break;
      case 'array':
        if (Array.isArray(val)) {
          addType = true;
        }
        break;
      case 'other':
        addType = this.currOtherTypeCallback(val, path, parent, parentPropName);
        break;
      case 'null':
        if (val === null) {
          addType = true;
        }
        break;

      /* c8 ignore next 2 */

      default:
        throw new TypeError('Unknown value type ' + valueType);
    }
    if (addType) {
      retObj = {
        path: path,
        value: val,
        parent: parent,
        parentProperty: parentPropName
      };
      this._handleCallback(retObj, callback, 'value');
      return retObj;
    } // `-escaped property
  } else if (loc[0] === '`' && val && hasOwnProp.call(val, loc.slice(1))) {
    var locProp = loc.slice(1);
    addRet(this._trace(x, val[locProp], push(path, locProp), val, locProp, callback, hasArrExpr, true));
  } else if (loc.includes(',')) {
    // [name1,name2,...]
    var parts = loc.split(',');
    var _iterator = _createForOfIteratorHelper(parts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;
        addRet(this._trace(unshift(part, x), val, path, parent, parentPropName, callback, true));
      } // simple case--directly follow property
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (!literalPriority && val && hasOwnProp.call(val, loc)) {
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr, true));
  } // We check the resulting values for parent selections. For parent
  // selections we discard the value object and continue the trace with the
  // current val object

  if (this._hasParentSelector) {
    for (var t = 0; t < ret.length; t++) {
      var rett = ret[t];
      if (rett && rett.isParentSelector) {
        var tmp = this._trace(rett.expr, val, rett.path, parent, parentPropName, callback, hasArrExpr);
        if (Array.isArray(tmp)) {
          ret[t] = tmp[0];
          var tl = tmp.length;
          for (var tt = 1; tt < tl; tt++) {
            t++;
            ret.splice(t, 0, tmp[tt]);
          }
        } else {
          ret[t] = tmp;
        }
      }
    }
  }
  return ret;
};
JSONPath.prototype._walk = function (loc, expr, val, path, parent, parentPropName, callback, f) {
  if (Array.isArray(val)) {
    var n = val.length;
    for (var i = 0; i < n; i++) {
      f(i, loc, expr, val, path, parent, parentPropName, callback);
    }
  } else if (val && _typeof(val) === 'object') {
    Object.keys(val).forEach(function (m) {
      f(m, loc, expr, val, path, parent, parentPropName, callback);
    });
  }
};
JSONPath.prototype._slice = function (loc, expr, val, path, parent, parentPropName, callback) {
  if (!Array.isArray(val)) {
    return undefined;
  }
  var len = val.length,
    parts = loc.split(':'),
    step = parts[2] && Number.parseInt(parts[2]) || 1;
  var start = parts[0] && Number.parseInt(parts[0]) || 0,
    end = parts[1] && Number.parseInt(parts[1]) || len;
  start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
  end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
  var ret = [];
  for (var i = start; i < end; i += step) {
    var tmp = this._trace(unshift(i, expr), val, path, parent, parentPropName, callback, true); // Should only be possible to be an array here since first part of
    //   ``unshift(i, expr)` passed in above would not be empty, nor `~`,
    //     nor begin with `@` (as could return objects)
    // This was causing excessive stack size in Node (with or
    //  without Babel) against our performance test: `ret.push(...tmp);`

    tmp.forEach(function (t) {
      ret.push(t);
    });
  }
  return ret;
};
JSONPath.prototype._eval = function (code, _v, _vname, path, parent, parentPropName) {
  if (code.includes('@parentProperty')) {
    this.currSandbox._$_parentProperty = parentPropName;
    code = code.replace(/@parentProperty/g, '_$_parentProperty');
  }
  if (code.includes('@parent')) {
    this.currSandbox._$_parent = parent;
    code = code.replace(/@parent/g, '_$_parent');
  }
  if (code.includes('@property')) {
    this.currSandbox._$_property = _vname;
    code = code.replace(/@property/g, '_$_property');
  }
  if (code.includes('@path')) {
    this.currSandbox._$_path = JSONPath.toPathString(path.concat([_vname]));
    code = code.replace(/@path/g, '_$_path');
  }
  if (code.includes('@root')) {
    this.currSandbox._$_root = this.json;
    code = code.replace(/@root/g, '_$_root');
  }
  if (/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(code)) {
    this.currSandbox._$_v = _v;
    code = code.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, '_$_v$1');
  }
  try {
    return this.vm.runInNewContext(code, this.currSandbox);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    throw new Error('jsonPath: ' + e.message + ': ' + code);
  }
}; // PUBLIC CLASS PROPERTIES AND METHODS
// Could store the cache object itself

JSONPath.cache = {};
/**
 * @param {string[]} pathArr Array to convert
 * @returns {string} The path string
 */

JSONPath.toPathString = function (pathArr) {
  var x = pathArr,
    n = x.length;
  var p = '$';
  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += /^[\*0-9]+$/.test(x[i]) ? '[' + x[i] + ']' : "['" + x[i] + "']";
    }
  }
  return p;
};
/**
 * @param {string} pointer JSON Path
 * @returns {string} JSON Pointer
 */

JSONPath.toPointer = function (pointer) {
  var x = pointer,
    n = x.length;
  var p = '';
  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += '/' + x[i].toString().replace(/~/g, '~0').replace(/\//g, '~1');
    }
  }
  return p;
};
/**
 * @param {string} expr Expression to convert
 * @returns {string[]}
 */

JSONPath.toPathArray = function (expr) {
  var cache = JSONPath.cache;
  if (cache[expr]) {
    return cache[expr].concat();
  }
  var subx = [];
  var normalized = expr // Properties
  .replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ';$&;') // Parenthetical evaluations (filtering and otherwise), directly
  //   within brackets or single quotes
  .replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function ($0, $1) {
    return '[#' + (subx.push($1) - 1) + ']';
  }) // Escape periods and tildes within properties
  .replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function ($0, prop) {
    return "['" + prop.replace(/\./g, '%@%').replace(/~/g, '%%@@%%') + "']";
  }) // Properties operator
  .replace(/~/g, ';~;') // Split by property boundaries
  .replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ';') // Reinsert periods within properties
  .replace(/%@%/g, '.') // Reinsert tildes within properties
  .replace(/%%@@%%/g, '~') // Parent
  .replace(/(?:;)?(\^+)(?:;)?/g, function ($0, ups) {
    return ';' + ups.split('').join(';') + ';';
  }) // Descendents
  .replace(/;;;|;;/g, ';..;') // Remove trailing
  .replace(/;$|'?\]|'$/g, '');
  var exprList = normalized.split(';').map(function (exp) {
    var match = exp.match(/#([0-9]+)/);
    return !match || !match[1] ? exp : subx[match[1]];
  });
  cache[expr] = exprList;
  return cache[expr].concat();
};

/**
* @callback ConditionCallback
* @param {any} item
* @returns {boolean}
*/

/**
 * Copy items out of one array into another.
 * @param {GenericArray} source Array with items to copy
 * @param {GenericArray} target Array to which to copy
 * @param {ConditionCallback} conditionCb Callback passed the current item;
 *     will move item if evaluates to `true`
 * @returns {void}
 */

var moveToAnotherArray = function moveToAnotherArray(source, target, conditionCb) {
  var il = source.length;
  for (var i = 0; i < il; i++) {
    var item = source[i];
    if (conditionCb(item)) {
      target.push(source.splice(i--, 1)[0]);
    }
  }
};
JSONPath.prototype.vm = {
  /**
   * @param {string} expr Expression to evaluate
   * @param {PlainObject} context Object whose items will be added
   *   to evaluation
   * @returns {any} Result of evaluated code
   */
  runInNewContext: function runInNewContext(expr, context) {
    var keys = Object.keys(context);
    var funcs = [];
    moveToAnotherArray(keys, funcs, function (key) {
      return typeof context[key] === 'function';
    });
    var values = keys.map(function (vr, i) {
      return context[vr];
    });
    var funcString = funcs.reduce(function (s, func) {
      var fString = context[func].toString();
      if (!/function/.test(fString)) {
        fString = 'function ' + fString;
      }
      return 'var ' + func + '=' + fString + ';' + s;
    }, '');
    expr = funcString + expr; // Mitigate http://perfectionkills.com/global-eval-what-are-the-options/#new_function

    if (!/(["'])use strict\1/.test(expr) && !keys.includes('arguments')) {
      expr = 'var arguments = undefined;' + expr;
    } // Remove last semi so `return` will be inserted before
    //  the previous one instead, allowing for the return
    //  of a bare ending expression

    expr = expr.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, ''); // Insert `return`

    var lastStatementEnd = expr.lastIndexOf(';');
    var code = lastStatementEnd > -1 ? expr.slice(0, lastStatementEnd + 1) + ' return ' + expr.slice(lastStatementEnd + 1) : ' return ' + expr; // eslint-disable-next-line no-new-func

    return _construct(Function, _toConsumableArray(keys).concat([code])).apply(void 0, _toConsumableArray(values));
  }
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function jsonpath(options) {
  return JSONPath(Object.assign({
    preventEval: true
  }, options));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const SKIP_FIELDS = Object.fromEntries(['remediation', 'context'].map(field => [field, !!'skip this field']));
const parseNonRemediations = function parseNonRemediations(authClient, idxResponse, toPersist = {}) {
  const actions = {};
  const context = {};
  Object.keys(idxResponse).filter(field => !SKIP_FIELDS[field]).forEach(field => {
    const fieldIsObject = typeof idxResponse[field] === 'object' && !!idxResponse[field];
    if (!fieldIsObject) {
      context[field] = idxResponse[field];
      return;
    }
    if (idxResponse[field].rel) {
      actions[idxResponse[field].name] = generateIdxAction(authClient, idxResponse[field], toPersist);
      return;
    }
    const _a = idxResponse[field],
      {
        value: fieldValue,
        type
      } = _a,
      info = __rest(_a, ["value", "type"]);
    context[field] = Object.assign({
      type
    }, info);
    if (type !== 'object') {
      context[field].value = fieldValue;
      return;
    }
    context[field].value = {};
    Object.entries(fieldValue).forEach(([subField, value]) => {
      if (value.rel) {
        actions[`${field}-${subField.name || subField}`] = generateIdxAction(authClient, value, toPersist);
      } else {
        context[field].value[subField] = value;
      }
    });
  });
  return {
    context,
    actions
  };
};
const expandRelatesTo = (idxResponse, value) => {
  Object.keys(value).forEach(k => {
    if (k === 'relatesTo') {
      const query = Array.isArray(value[k]) ? value[k][0] : value[k];
      if (typeof query === 'string') {
        const result = jsonpath({
          path: query,
          json: idxResponse
        })[0];
        if (result) {
          value[k] = result;
          return;
        } else {
          throw new AuthSdkError(`Cannot resolve relatesTo: ${query}`);
        }
      }
    }
    if (Array.isArray(value[k])) {
      value[k].forEach(innerValue => expandRelatesTo(idxResponse, innerValue));
    }
  });
};
const convertRemediationAction = (authClient, remediation, toPersist) => {
  if (remediation.rel) {
    const remediationActions = generateRemediationFunctions(authClient, [remediation], toPersist);
    const actionFn = remediationActions[remediation.name];
    return Object.assign(Object.assign({}, remediation), {
      action: actionFn
    });
  }
  return remediation;
};
const parseIdxResponse = function parseIdxResponse(authClient, idxResponse, toPersist = {}) {
  var _a;
  const remediationData = ((_a = idxResponse.remediation) === null || _a === void 0 ? void 0 : _a.value) || [];
  remediationData.forEach(remediation => expandRelatesTo(idxResponse, remediation));
  const remediations = remediationData.map(remediation => convertRemediationAction(authClient, remediation, toPersist));
  const {
    context,
    actions
  } = parseNonRemediations(authClient, idxResponse, toPersist);
  return {
    remediations,
    context,
    actions
  };
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function makeIdxState$1(authClient, idxResponse, toPersist, requestDidSucceed) {
  var _a, _b, _c;
  const rawIdxResponse = idxResponse;
  const {
    remediations,
    context,
    actions
  } = parseIdxResponse(authClient, idxResponse, toPersist);
  const neededToProceed = [...remediations];
  const proceed = async function (remediationChoice, paramsFromUser = {}) {
    const remediationChoiceObject = remediations.find(remediation => remediation.name === remediationChoice);
    if (!remediationChoiceObject) {
      return Promise.reject(`Unknown remediation choice: [${remediationChoice}]`);
    }
    const actionFn = remediationChoiceObject.action;
    if (typeof actionFn !== 'function') {
      return Promise.reject(`Current remediation cannot make form submit action: [${remediationChoice}]`);
    }
    return remediationChoiceObject.action(paramsFromUser);
  };
  const findCode = item => item.name === 'interaction_code';
  const interactionCode = (_c = (_b = (_a = rawIdxResponse.successWithInteractionCode) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.find(findCode)) === null || _c === void 0 ? void 0 : _c.value;
  return {
    proceed,
    neededToProceed,
    actions,
    context,
    rawIdxState: rawIdxResponse,
    interactionCode,
    toPersist,
    requestDidSucceed
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var v1 = {
  makeIdxState: makeIdxState$1
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const parsersForVersion = function parsersForVersion(version) {
  switch (version) {
    case '1.0.0':
      return v1;
    case undefined:
    case null:
      throw new Error('Api version is required');
    default:
      throw new Error(`Unknown api version: ${version}.  Use an exact semver version.`);
  }
};
function validateVersionConfig(version) {
  if (!version) {
    throw new Error('version is required');
  }
  const cleanVersion = (version !== null && version !== void 0 ? version : '').replace(/[^0-9a-zA-Z._-]/, '');
  if (cleanVersion !== version || !version) {
    throw new Error('invalid version supplied - version is required and uses semver syntax');
  }
  parsersForVersion(version);
}
function makeIdxState(authClient, rawIdxResponse, toPersist, requestDidSucceed) {
  var _a;
  const version = (_a = rawIdxResponse === null || rawIdxResponse === void 0 ? void 0 : rawIdxResponse.version) !== null && _a !== void 0 ? _a : IDX_API_VERSION;
  validateVersionConfig(version);
  const {
    makeIdxState
  } = parsersForVersion(version);
  return makeIdxState(authClient, rawIdxResponse, toPersist, requestDidSucceed);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isRawIdxResponse(obj) {
  return obj && obj.version;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isAuthApiError(obj) {
  return obj instanceof AuthApiError;
}
function isOAuthError(obj) {
  return obj instanceof OAuthError;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function introspect(authClient, options = {}) {
  var _a;
  let rawIdxResponse;
  let requestDidSucceed;
  const savedIdxResponse = authClient.transactionManager.loadIdxResponse(options);
  if (savedIdxResponse) {
    rawIdxResponse = savedIdxResponse.rawIdxResponse;
    requestDidSucceed = savedIdxResponse.requestDidSucceed;
  }
  if (!rawIdxResponse) {
    const version = options.version || IDX_API_VERSION;
    const domain = getOAuthDomain(authClient);
    const {
      interactionHandle,
      stateHandle
    } = options;
    const withCredentials = (_a = options.withCredentials) !== null && _a !== void 0 ? _a : true;
    try {
      requestDidSucceed = true;
      validateVersionConfig(version);
      const url = `${domain}/idp/idx/introspect`;
      const body = stateHandle ? {
        stateToken: stateHandle
      } : {
        interactionHandle
      };
      const headers = {
        'Content-Type': `application/ion+json; okta-version=${version}`,
        Accept: `application/ion+json; okta-version=${version}`
      };
      rawIdxResponse = await httpRequest(authClient, {
        method: 'POST',
        url,
        headers,
        withCredentials,
        args: body
      });
    } catch (err) {
      if (isAuthApiError(err) && err.xhr && isRawIdxResponse(err.xhr.responseJSON)) {
        rawIdxResponse = err.xhr.responseJSON;
        requestDidSucceed = false;
      } else {
        throw err;
      }
    }
  }
  const {
    withCredentials
  } = options;
  return makeIdxState(authClient, rawIdxResponse, {
    withCredentials
  }, requestDidSucceed);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getAllValues(idxRemediation) {
  var _a;
  return (_a = idxRemediation.value) === null || _a === void 0 ? void 0 : _a.map(r => r.name);
}
function getRequiredValues(idxRemediation) {
  var _a;
  return (_a = idxRemediation.value) === null || _a === void 0 ? void 0 : _a.reduce((required, cur) => {
    if (cur.required) {
      required.push(cur.name);
    }
    return required;
  }, []);
}
function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
function getAuthenticatorFromRemediation(remediation) {
  return remediation.value.find(({
    name
  }) => name === 'authenticator');
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function formatAuthenticator(incoming) {
  let authenticator;
  if (isAuthenticator(incoming)) {
    authenticator = incoming;
  } else if (typeof incoming === 'string') {
    authenticator = {
      key: incoming
    };
  } else {
    throw new Error('Invalid format for authenticator');
  }
  return authenticator;
}
function compareAuthenticators(auth1, auth2) {
  if (!auth1 || !auth2) {
    return false;
  }
  if (auth1.id && auth2.id) {
    return auth1.id === auth2.id;
  }
  if (auth1.key && auth2.key) {
    return auth1.key === auth2.key;
  }
  return false;
}
function findMatchedOption(authenticators, options) {
  let option;
  for (let authenticator of authenticators) {
    option = options.find(({
      relatesTo
    }) => relatesTo.key && relatesTo.key === authenticator.key);
    if (option) {
      break;
    }
  }
  return option;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class Remediator {
  constructor(remediation, values = {}, options = {}) {
    this.values = Object.assign({}, values);
    this.options = Object.assign({}, options);
    this.formatAuthenticators();
    this.remediation = remediation;
  }
  formatAuthenticators() {
    this.values.authenticators = this.values.authenticators || [];
    this.values.authenticators = this.values.authenticators.map(authenticator => {
      return formatAuthenticator(authenticator);
    });
    if (this.values.authenticator) {
      const authenticator = formatAuthenticator(this.values.authenticator);
      const hasAuthenticatorInList = this.values.authenticators.some(existing => {
        return compareAuthenticators(authenticator, existing);
      });
      if (!hasAuthenticatorInList) {
        this.values.authenticators.push(authenticator);
      }
    }
    this.values.authenticatorsData = this.values.authenticators.reduce((acc, authenticator) => {
      if (typeof authenticator === 'object' && Object.keys(authenticator).length > 1) {
        acc.push(authenticator);
      }
      return acc;
    }, this.values.authenticatorsData || []);
  }
  getName() {
    return this.remediation.name;
  }
  canRemediate(context) {
    const required = getRequiredValues(this.remediation);
    const needed = required.find(key => !this.hasData(key));
    if (needed) {
      return false;
    }
    return true;
  }
  getData(key) {
    if (!key) {
      let allValues = getAllValues(this.remediation);
      let res = allValues.reduce((data, key) => {
        data[key] = this.getData(key);
        return data;
      }, {});
      return res;
    }
    if (typeof this[`map${titleCase(key)}`] === 'function') {
      const val = this[`map${titleCase(key)}`](this.remediation.value.find(({
        name
      }) => name === key));
      if (val) {
        return val;
      }
    }
    if (this.map && this.map[key]) {
      const entry = this.map[key];
      for (let i = 0; i < entry.length; i++) {
        let val = this.values[entry[i]];
        if (val) {
          return val;
        }
      }
    }
    return this.values[key];
  }
  hasData(key) {
    return !!this.getData(key);
  }
  getNextStep(_authClient, _context) {
    const name = this.getName();
    const inputs = this.getInputs();
    const authenticator = this.getAuthenticator();
    const type = authenticator === null || authenticator === void 0 ? void 0 : authenticator.type;
    return Object.assign(Object.assign({
      name,
      inputs
    }, type && {
      type
    }), authenticator && {
      authenticator
    });
  }
  getInputs() {
    const inputs = [];
    const inputsFromRemediation = this.remediation.value || [];
    inputsFromRemediation.forEach(inputFromRemediation => {
      let input;
      let {
        name,
        type,
        visible,
        messages
      } = inputFromRemediation;
      if (visible === false) {
        return;
      }
      if (typeof this[`getInput${titleCase(name)}`] === 'function') {
        input = this[`getInput${titleCase(name)}`](inputFromRemediation);
      } else if (type !== 'object') {
        let alias;
        const aliases = (this.map ? this.map[name] : null) || [];
        if (aliases.length === 1) {
          alias = aliases[0];
        } else {
          alias = aliases.find(name => Object.keys(this.values).includes(name));
        }
        if (alias) {
          input = Object.assign(Object.assign({}, inputFromRemediation), {
            name: alias
          });
        }
      }
      if (!input) {
        input = inputFromRemediation;
      }
      if (Array.isArray(input)) {
        input.forEach(i => inputs.push(i));
      } else {
        if (messages) {
          input.messages = messages;
        }
        inputs.push(input);
      }
    });
    return inputs;
  }
  static getMessages(remediation) {
    var _a, _b;
    if (!remediation.value) {
      return;
    }
    return (_b = (_a = remediation.value[0]) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.value.reduce((messages, field) => {
      if (field.messages) {
        messages = [...messages, ...field.messages.value];
      }
      return messages;
    }, []);
  }
  getValuesAfterProceed() {
    const inputsFromRemediation = this.remediation.value || [];
    const inputsFromRemediator = this.getInputs();
    const inputs = [...inputsFromRemediation, ...inputsFromRemediator];
    for (const input of inputs) {
      delete this.values[input.name];
    }
    return this.values;
  }
  getAuthenticator() {
    var _a, _b;
    const relatesTo = (_a = this.remediation.relatesTo) === null || _a === void 0 ? void 0 : _a.value;
    if (!relatesTo) {
      return;
    }
    const authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
    if (!authenticatorFromRemediation) {
      return relatesTo;
    }
    const id = authenticatorFromRemediation.form.value.find(({
      name
    }) => name === 'id').value;
    const enrollmentId = (_b = authenticatorFromRemediation.form.value.find(({
      name
    }) => name === 'enrollmentId')) === null || _b === void 0 ? void 0 : _b.value;
    return Object.assign(Object.assign({}, relatesTo), {
      id,
      enrollmentId
    });
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class Authenticator {
  constructor(authenticator) {
    this.meta = authenticator;
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class VerificationCodeAuthenticator extends Authenticator {
  canVerify(values) {
    return !!(values.credentials || values.verificationCode || values.otp);
  }
  mapCredentials(values) {
    const {
      credentials,
      verificationCode,
      otp
    } = values;
    if (!credentials && !verificationCode && !otp) {
      return;
    }
    return credentials || {
      passcode: verificationCode || otp
    };
  }
  getInputs(idxRemediationValue) {
    var _a;
    return Object.assign(Object.assign({}, (_a = idxRemediationValue.form) === null || _a === void 0 ? void 0 : _a.value[0]), {
      name: 'verificationCode',
      type: 'string',
      required: idxRemediationValue.required
    });
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class OktaVerifyTotp extends VerificationCodeAuthenticator {
  mapCredentials(values) {
    const {
      verificationCode
    } = values;
    if (!verificationCode) {
      return;
    }
    return {
      totp: verificationCode
    };
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class OktaPassword extends Authenticator {
  canVerify(values) {
    return !!(values.credentials || values.password || values.passcode);
  }
  mapCredentials(values) {
    const {
      credentials,
      password,
      passcode
    } = values;
    if (!credentials && !password && !passcode) {
      return;
    }
    return credentials || {
      passcode: passcode || password
    };
  }
  getInputs(idxRemediationValue) {
    var _a;
    return Object.assign(Object.assign({}, (_a = idxRemediationValue.form) === null || _a === void 0 ? void 0 : _a.value[0]), {
      name: 'password',
      type: 'string',
      required: idxRemediationValue.required
    });
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SecurityQuestionEnrollment extends Authenticator {
  canVerify(values) {
    const {
      credentials
    } = values;
    if (credentials && credentials.questionKey && credentials.answer) {
      return true;
    }
    const {
      questionKey,
      question,
      answer
    } = values;
    return !!(questionKey && answer) || !!(question && answer);
  }
  mapCredentials(values) {
    const {
      questionKey,
      question,
      answer
    } = values;
    if (!answer || !questionKey && !question) {
      return;
    }
    return {
      questionKey: question ? 'custom' : questionKey,
      question,
      answer
    };
  }
  getInputs() {
    return [{
      name: 'questionKey',
      type: 'string',
      required: true
    }, {
      name: 'question',
      type: 'string',
      label: 'Create a security question'
    }, {
      name: 'answer',
      type: 'string',
      label: 'Answer',
      required: true
    }];
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SecurityQuestionVerification extends Authenticator {
  canVerify(values) {
    const {
      credentials
    } = values;
    if (credentials && credentials.answer) {
      return true;
    }
    const {
      answer
    } = values;
    return !!answer;
  }
  mapCredentials(values) {
    const {
      answer
    } = values;
    if (!answer) {
      return;
    }
    return {
      questionKey: this.meta.contextualData.enrolledQuestion.questionKey,
      answer
    };
  }
  getInputs() {
    return [{
      name: 'answer',
      type: 'string',
      label: 'Answer',
      required: true
    }];
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class WebauthnEnrollment extends Authenticator {
  canVerify(values) {
    const {
      credentials
    } = values;
    const obj = credentials || values;
    const {
      clientData,
      attestation
    } = obj;
    return !!(clientData && attestation);
  }
  mapCredentials(values) {
    const {
      credentials,
      clientData,
      attestation
    } = values;
    if (!credentials && !clientData && !attestation) {
      return;
    }
    return credentials || {
      clientData,
      attestation
    };
  }
  getInputs() {
    return [{
      name: 'clientData',
      type: 'string',
      required: true,
      visible: false,
      label: 'Client Data'
    }, {
      name: 'attestation',
      type: 'string',
      required: true,
      visible: false,
      label: 'Attestation'
    }];
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class WebauthnVerification extends Authenticator {
  canVerify(values) {
    const {
      credentials
    } = values;
    const obj = credentials || values;
    const {
      clientData,
      authenticatorData,
      signatureData
    } = obj;
    return !!(clientData && authenticatorData && signatureData);
  }
  mapCredentials(values) {
    const {
      credentials,
      authenticatorData,
      clientData,
      signatureData
    } = values;
    if (!credentials && !authenticatorData && !clientData && !signatureData) {
      return;
    }
    return credentials || {
      authenticatorData,
      clientData,
      signatureData
    };
  }
  getInputs() {
    return [{
      name: 'authenticatorData',
      type: 'string',
      label: 'Authenticator Data',
      required: true,
      visible: false
    }, {
      name: 'clientData',
      type: 'string',
      label: 'Client Data',
      required: true,
      visible: false
    }, {
      name: 'signatureData',
      type: 'string',
      label: 'Signature Data',
      required: true,
      visible: false
    }];
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getAuthenticator(remediation) {
  var _a, _b;
  const relatesTo = remediation.relatesTo;
  const value = (relatesTo === null || relatesTo === void 0 ? void 0 : relatesTo.value) || {};
  switch (value.key) {
    case AuthenticatorKey.OKTA_PASSWORD:
      return new OktaPassword(value);
    case AuthenticatorKey.SECURITY_QUESTION:
      if ((_a = value.contextualData) === null || _a === void 0 ? void 0 : _a.enrolledQuestion) {
        return new SecurityQuestionVerification(value);
      } else {
        return new SecurityQuestionEnrollment(value);
      }
    case AuthenticatorKey.OKTA_VERIFY:
      return new OktaVerifyTotp(value);
    case AuthenticatorKey.WEBAUTHN:
      if ((_b = value.contextualData) === null || _b === void 0 ? void 0 : _b.challengeData) {
        return new WebauthnVerification(value);
      } else {
        return new WebauthnEnrollment(value);
      }
    default:
      return new VerificationCodeAuthenticator(value);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class VerifyAuthenticator extends Remediator {
  constructor(remediation, values = {}) {
    super(remediation, values);
    this.authenticator = getAuthenticator(remediation);
  }
  getNextStep(authClient, context) {
    var _a;
    const nextStep = super.getNextStep(authClient, context);
    const authenticatorEnrollments = (_a = context === null || context === void 0 ? void 0 : context.authenticatorEnrollments) === null || _a === void 0 ? void 0 : _a.value;
    return Object.assign(Object.assign({}, nextStep), {
      authenticatorEnrollments
    });
  }
  canRemediate() {
    return this.authenticator.canVerify(this.values);
  }
  mapCredentials() {
    return this.authenticator.mapCredentials(this.values);
  }
  getInputCredentials(input) {
    return this.authenticator.getInputs(input);
  }
  getValuesAfterProceed() {
    this.values = super.getValuesAfterProceed();
    let trimmedValues = Object.keys(this.values).filter(valueKey => valueKey !== 'credentials');
    return trimmedValues.reduce((values, valueKey) => Object.assign(Object.assign({}, values), {
      [valueKey]: this.values[valueKey]
    }), {});
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EnrollAuthenticator extends VerifyAuthenticator {
  /*LWC compiler v3.1.3*/
}
EnrollAuthenticator.remediationName = 'enroll-authenticator';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EnrollPoll extends Remediator {
  canRemediate() {
    return !!this.values.startPolling || this.options.step === 'enroll-poll';
  }
  getNextStep(authClient, context) {
    const common = super.getNextStep(authClient, context);
    let authenticator = this.getAuthenticator();
    if (!authenticator && (context === null || context === void 0 ? void 0 : context.currentAuthenticator)) {
      authenticator = context.currentAuthenticator.value;
    }
    return Object.assign(Object.assign({}, common), {
      authenticator,
      poll: {
        required: true,
        refresh: this.remediation.refresh
      }
    });
  }
  getValuesAfterProceed() {
    let trimmedValues = Object.keys(this.values).filter(valueKey => valueKey !== 'startPolling');
    return trimmedValues.reduce((values, valueKey) => Object.assign(Object.assign({}, values), {
      [valueKey]: this.values[valueKey]
    }), {});
  }
  /*LWC compiler v3.1.3*/
}
EnrollPoll.remediationName = 'enroll-poll';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SelectEnrollmentChannel extends Remediator {
  canRemediate() {
    if (this.values.channel) {
      return true;
    }
    if (this.values.authenticator) {
      const {
        id,
        channel
      } = this.values.authenticator;
      if (!!id && !!channel) {
        return true;
      }
    }
    return false;
  }
  getNextStep(authClient, context) {
    const common = super.getNextStep(authClient, context);
    const authenticator = context.currentAuthenticator.value;
    return Object.assign(Object.assign({}, common), {
      authenticator
    });
  }
  getData() {
    var _a;
    const remediationValue = this.remediation.value[0].value;
    return {
      authenticator: {
        id: remediationValue.form.value[0].value,
        channel: ((_a = this.values.authenticator) === null || _a === void 0 ? void 0 : _a.channel) || this.values.channel
      },
      stateHandle: this.values.stateHandle
    };
  }
  getValuesAfterProceed() {
    this.values = super.getValuesAfterProceed();
    delete this.values.authenticators;
    const filterKey = this.values.channel ? 'channel' : 'authenticator';
    let trimmedValues = Object.keys(this.values).filter(valueKey => valueKey !== filterKey);
    return trimmedValues.reduce((values, valueKey) => Object.assign(Object.assign({}, values), {
      [valueKey]: this.values[valueKey]
    }), {});
  }
  /*LWC compiler v3.1.3*/
}
SelectEnrollmentChannel.remediationName = 'select-enrollment-channel';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EnrollmentChannelData extends Remediator {
  getInputEmail() {
    return [{
      name: 'email',
      type: 'string',
      required: true,
      label: 'Email'
    }];
  }
  getInputPhoneNumber() {
    return [{
      name: 'phoneNumber',
      type: 'string',
      required: true,
      label: 'Phone Number'
    }];
  }
  canRemediate() {
    return Boolean(this.values.email || this.values.phoneNumber);
  }
  getNextStep(authClient, context) {
    const common = super.getNextStep(authClient, context);
    const authenticator = context.currentAuthenticator.value;
    return Object.assign(Object.assign({}, common), {
      authenticator
    });
  }
  getData() {
    return {
      stateHandle: this.values.stateHandle,
      email: this.values.email,
      phoneNumber: this.values.phoneNumber
    };
  }
  getValuesAfterProceed() {
    let trimmedValues = Object.keys(this.values).filter(valueKey => !['email', 'phoneNumber'].includes(valueKey));
    return trimmedValues.reduce((values, valueKey) => Object.assign(Object.assign({}, values), {
      [valueKey]: this.values[valueKey]
    }), {});
  }
  /*LWC compiler v3.1.3*/
}
EnrollmentChannelData.remediationName = 'enrollment-channel-data';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class ChallengeAuthenticator extends VerifyAuthenticator {
  /*LWC compiler v3.1.3*/
}
ChallengeAuthenticator.remediationName = 'challenge-authenticator';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class ChallengePoll extends EnrollPoll {
  canRemediate() {
    return !!this.values.startPolling || this.options.step === 'challenge-poll';
  }
  /*LWC compiler v3.1.3*/
}
ChallengePoll.remediationName = 'challenge-poll';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class ResetAuthenticator extends VerifyAuthenticator {
  /*LWC compiler v3.1.3*/
}
ResetAuthenticator.remediationName = 'reset-authenticator';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EnrollProfile extends Remediator {
  constructor(remediation, values = {}, options = {}) {
    super(remediation, values, options);
    this.authenticator = null;
    const credentials = this.getCredentialsFromRemediation();
    if (credentials) {
      this.authenticator = this.authenticator = new OktaPassword({});
    }
  }
  canRemediate() {
    if (this.authenticator && !this.authenticator.canVerify(this.values)) {
      return false;
    }
    const userProfileFromValues = this.getData().userProfile;
    if (!userProfileFromValues) {
      return false;
    }
    const userProfileFromRemediation = this.remediation.value.find(({
      name
    }) => name === 'userProfile');
    return userProfileFromRemediation.form.value.reduce((canRemediate, curr) => {
      if (curr.required) {
        canRemediate = canRemediate && !!userProfileFromValues[curr.name];
      }
      return canRemediate;
    }, true);
  }
  getCredentialsFromRemediation() {
    return this.remediation.value.find(({
      name
    }) => name === 'credentials');
  }
  mapUserProfile({
    form: {
      value: profileAttributes
    }
  }) {
    const attributeNames = profileAttributes.map(({
      name
    }) => name);
    const data = attributeNames.reduce((attributeValues, attributeName) => this.values[attributeName] ? Object.assign(Object.assign({}, attributeValues), {
      [attributeName]: this.values[attributeName]
    }) : attributeValues, {});
    if (Object.keys(data).length === 0) {
      return;
    }
    return data;
  }
  mapCredentials() {
    const val = this.authenticator && this.authenticator.mapCredentials(this.values);
    if (!val) {
      return;
    }
    return val;
  }
  getInputUserProfile(input) {
    return [...input.form.value];
  }
  getInputCredentials(input) {
    return [...input.form.value];
  }
  getErrorMessages(errorRemediation) {
    return errorRemediation.value[0].form.value.reduce((errors, field) => {
      if (field.messages) {
        errors.push(field.messages.value[0].message);
      }
      return errors;
    }, []);
  }
  /*LWC compiler v3.1.3*/
}
EnrollProfile.remediationName = 'enroll-profile';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class Identify extends Remediator {
  constructor() {
    super(...arguments);
    this.map = {
      'identifier': ['username']
    };
  }
  canRemediate() {
    const {
      identifier
    } = this.getData();
    return !!identifier;
  }
  mapCredentials() {
    const {
      credentials,
      password
    } = this.values;
    if (!credentials && !password) {
      return;
    }
    return credentials || {
      passcode: password
    };
  }
  getInputCredentials(input) {
    return Object.assign(Object.assign({}, input.form.value[0]), {
      name: 'password',
      required: input.required
    });
  }
  /*LWC compiler v3.1.3*/
}
Identify.remediationName = 'identify';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class ReEnrollAuthenticator extends Remediator {
  mapCredentials() {
    const {
      newPassword
    } = this.values;
    if (!newPassword) {
      return;
    }
    return {
      passcode: newPassword
    };
  }
  getInputCredentials(input) {
    const challengeType = this.getAuthenticator().type;
    const name = challengeType === 'password' ? 'newPassword' : 'verificationCode';
    return Object.assign(Object.assign({}, input.form.value[0]), {
      name
    });
  }
  /*LWC compiler v3.1.3*/
}
ReEnrollAuthenticator.remediationName = 'reenroll-authenticator';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class RedirectIdp extends Remediator {
  canRemediate() {
    return false;
  }
  getNextStep() {
    const {
      name,
      type,
      idp,
      href
    } = this.remediation;
    return {
      name,
      type,
      idp,
      href
    };
  }
  /*LWC compiler v3.1.3*/
}
RedirectIdp.remediationName = 'redirect-idp';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SelectAuthenticator extends Remediator {
  findMatchedOption(authenticators, options) {
    let option;
    for (let authenticator of authenticators) {
      option = options.find(({
        relatesTo
      }) => relatesTo.key && relatesTo.key === authenticator.key);
      if (option) {
        break;
      }
    }
    return option;
  }
  canRemediate(context) {
    var _a, _b;
    const {
      authenticators,
      authenticator
    } = this.values;
    const authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
    const {
      options
    } = authenticatorFromRemediation;
    if (!authenticators || !authenticators.length) {
      return false;
    }
    if (isAuthenticator(authenticator) && authenticator.id) {
      return true;
    }
    const matchedOption = this.findMatchedOption(authenticators, options);
    if (matchedOption) {
      const isCurrentAuthenticator = (context === null || context === void 0 ? void 0 : context.currentAuthenticator) && (context === null || context === void 0 ? void 0 : context.currentAuthenticator.value.id) === ((_a = matchedOption.relatesTo) === null || _a === void 0 ? void 0 : _a.id);
      const isCurrentAuthenticatorEnrollment = (context === null || context === void 0 ? void 0 : context.currentAuthenticatorEnrollment) && (context === null || context === void 0 ? void 0 : context.currentAuthenticatorEnrollment.value.id) === ((_b = matchedOption.relatesTo) === null || _b === void 0 ? void 0 : _b.id);
      return !isCurrentAuthenticator && !isCurrentAuthenticatorEnrollment;
    }
    return false;
  }
  mapAuthenticator(remediationValue) {
    const {
      authenticators,
      authenticator
    } = this.values;
    if (isAuthenticator(authenticator) && authenticator.id) {
      this.selectedAuthenticator = authenticator;
      return authenticator;
    }
    const {
      options
    } = remediationValue;
    const selectedOption = findMatchedOption(authenticators, options);
    this.selectedAuthenticator = selectedOption.relatesTo;
    this.selectedOption = selectedOption;
    return {
      id: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value.form.value.find(({
        name
      }) => name === 'id').value
    };
  }
  getInputAuthenticator(remediation) {
    const options = remediation.options.map(({
      label,
      relatesTo
    }) => {
      return {
        label,
        value: relatesTo.key
      };
    });
    return {
      name: 'authenticator',
      type: 'string',
      options
    };
  }
  getValuesAfterProceed() {
    this.values = super.getValuesAfterProceed();
    const authenticators = this.values.authenticators.filter(authenticator => {
      return compareAuthenticators(authenticator, this.selectedAuthenticator) !== true;
    });
    return Object.assign(Object.assign({}, this.values), {
      authenticators
    });
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SelectAuthenticatorAuthenticate extends SelectAuthenticator {
  constructor(remediation, values = {}, options = {}) {
    var _a;
    super(remediation, values, options);
    const isRecoveryFlow = this.options.flow === 'recoverPassword';
    const hasPasswordInOptions = (_a = getAuthenticatorFromRemediation(remediation).options) === null || _a === void 0 ? void 0 : _a.some(({
      relatesTo
    }) => (relatesTo === null || relatesTo === void 0 ? void 0 : relatesTo.key) === AuthenticatorKey.OKTA_PASSWORD);
    if (hasPasswordInOptions && (isRecoveryFlow || this.values.password)) {
      this.values.authenticators = [...(this.values.authenticators || []), {
        key: AuthenticatorKey.OKTA_PASSWORD
      }];
    }
  }
  /*LWC compiler v3.1.3*/
}
SelectAuthenticatorAuthenticate.remediationName = 'select-authenticator-authenticate';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SelectAuthenticatorEnroll extends SelectAuthenticator {
  /*LWC compiler v3.1.3*/
}
SelectAuthenticatorEnroll.remediationName = 'select-authenticator-enroll';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SelectAuthenticatorUnlockAccount extends SelectAuthenticator {
  constructor() {
    super(...arguments);
    this.map = {
      identifier: ['username']
    };
  }
  canRemediate() {
    const identifier = this.getData('identifier');
    return !!identifier && super.canRemediate();
  }
  mapAuthenticator(remediationValue) {
    var _a, _b, _c;
    const authenticatorMap = super.mapAuthenticator(remediationValue);
    const methodTypeOption = (_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value.form.value.find(({
      name
    }) => name === 'methodType');
    const methodTypeValue = this.values.methodType || (methodTypeOption === null || methodTypeOption === void 0 ? void 0 : methodTypeOption.value) || ((_c = (_b = methodTypeOption === null || methodTypeOption === void 0 ? void 0 : methodTypeOption.options) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value);
    if (methodTypeValue) {
      return Object.assign(Object.assign({}, authenticatorMap), {
        methodType: methodTypeValue
      });
    }
    return authenticatorMap;
  }
  getInputUsername() {
    return {
      name: 'username',
      type: 'string'
    };
  }
  /*LWC compiler v3.1.3*/
}
SelectAuthenticatorUnlockAccount.remediationName = 'select-authenticator-unlock-account';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SelectEnrollProfile extends Remediator {
  canRemediate() {
    return true;
  }
  /*LWC compiler v3.1.3*/
}
SelectEnrollProfile.remediationName = 'select-enroll-profile';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthenticatorData extends Remediator {
  constructor(remediation, values = {}) {
    super(remediation, values);
    this.authenticator = this.getAuthenticator();
    this.formatAuthenticatorData();
  }
  formatAuthenticatorData() {
    const authenticatorData = this.getAuthenticatorData();
    if (authenticatorData) {
      this.values.authenticatorsData = this.values.authenticatorsData.map(data => {
        if (compareAuthenticators(this.authenticator, data)) {
          return this.mapAuthenticatorDataFromValues(data);
        }
        return data;
      });
    } else {
      const data = this.mapAuthenticatorDataFromValues();
      if (data) {
        this.values.authenticatorsData.push(data);
      }
    }
  }
  getAuthenticatorData() {
    return this.values.authenticatorsData.find(data => compareAuthenticators(this.authenticator, data));
  }
  canRemediate() {
    return this.values.authenticatorsData.some(data => compareAuthenticators(this.authenticator, data));
  }
  mapAuthenticatorDataFromValues(authenticatorData) {
    let {
      methodType,
      authenticator
    } = this.values;
    if (!methodType && isAuthenticator(authenticator)) {
      methodType = authenticator === null || authenticator === void 0 ? void 0 : authenticator.methodType;
    }
    const {
      id,
      enrollmentId
    } = this.authenticator;
    const data = Object.assign(Object.assign({
      id,
      enrollmentId
    }, authenticatorData && authenticatorData), methodType && {
      methodType
    });
    return data.methodType ? data : null;
  }
  getAuthenticatorFromRemediation() {
    const authenticator = this.remediation.value.find(({
      name
    }) => name === 'authenticator');
    return authenticator;
  }
  getValuesAfterProceed() {
    this.values = super.getValuesAfterProceed();
    const authenticatorsData = this.values.authenticatorsData.filter(data => compareAuthenticators(this.authenticator, data) !== true);
    return Object.assign(Object.assign({}, this.values), {
      authenticatorsData
    });
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthenticatorVerificationData extends AuthenticatorData {
  mapAuthenticator() {
    return this.getAuthenticatorData();
  }
  getInputAuthenticator() {
    const authenticator = this.getAuthenticatorFromRemediation();
    const methodType = authenticator.form.value.find(({
      name
    }) => name === 'methodType');
    if (methodType && methodType.options) {
      return {
        name: 'methodType',
        type: 'string',
        required: true,
        options: methodType.options
      };
    }
    const inputs = [...authenticator.form.value];
    return inputs;
  }
  getValuesAfterProceed() {
    this.values = super.getValuesAfterProceed();
    let trimmedValues = Object.keys(this.values).filter(valueKey => valueKey !== 'authenticator');
    return trimmedValues.reduce((values, valueKey) => Object.assign(Object.assign({}, values), {
      [valueKey]: this.values[valueKey]
    }), {});
  }
  /*LWC compiler v3.1.3*/
}
AuthenticatorVerificationData.remediationName = 'authenticator-verification-data';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthenticatorEnrollmentData extends AuthenticatorData {
  mapAuthenticator() {
    const authenticatorData = this.getAuthenticatorData();
    const authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
    return {
      id: authenticatorFromRemediation.form.value.find(({
        name
      }) => name === 'id').value,
      methodType: authenticatorData.methodType,
      phoneNumber: authenticatorData.phoneNumber
    };
  }
  getInputAuthenticator(remediation) {
    return [{
      name: 'methodType',
      type: 'string'
    }, {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'string'
    }].map(item => {
      const value = remediation.form.value.find(val => val.name === item.name);
      return Object.assign(Object.assign({}, value), item);
    });
  }
  mapAuthenticatorDataFromValues(data) {
    data = super.mapAuthenticatorDataFromValues(data);
    const {
      phoneNumber
    } = this.values;
    if (!data && !phoneNumber) {
      return;
    }
    return Object.assign(Object.assign({}, data && data), phoneNumber && {
      phoneNumber
    });
  }
  /*LWC compiler v3.1.3*/
}
AuthenticatorEnrollmentData.remediationName = 'authenticator-enrollment-data';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class Skip extends Remediator {
  canRemediate() {
    return !!this.values.skip || this.options.step === 'skip';
  }
  /*LWC compiler v3.1.3*/
}
Skip.remediationName = 'skip';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function unwrapFormValue(remediation) {
  if (Array.isArray(remediation)) {
    return remediation.map(item => {
      if (typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean') {
        return item;
      }
      return unwrapFormValue(item);
    });
  }
  const res = {};
  for (const [key, value] of Object.entries(remediation)) {
    if (value === null || typeof value === 'undefined') {
      continue;
    }
    if (typeof value === 'object') {
      const formKeys = Object.keys(value);
      if (['value', 'form'].includes(key) && formKeys.length === 1 && ['value', 'form'].includes(formKeys[0])) {
        const unwrappedForm = unwrapFormValue(value);
        Object.entries(unwrappedForm).forEach(([key, value]) => {
          res[key] = value;
        });
      } else {
        res[key] = unwrapFormValue(value);
      }
    } else {
      res[key] = value;
    }
  }
  return res;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class GenericRemediator extends Remediator {
  canRemediate() {
    if (typeof this.remediation.action !== 'function') {
      return false;
    }
    if (this.remediation.name === 'poll' || this.remediation.name.endsWith('-poll')) {
      return true;
    }
    if (this.options.step) {
      return true;
    }
    return false;
  }
  getData() {
    const data = this.getInputs().reduce((acc, {
      name
    }) => {
      acc[name] = this.values[name];
      return acc;
    }, {});
    return data;
  }
  getNextStep(authClient, _context) {
    const name = this.getName();
    const inputs = this.getInputs();
    const _a = this.remediation,
      {
        href,
        method,
        rel,
        accepts,
        produces,
        value,
        action
      } = _a,
      rest = __rest(_a, ["href", "method", "rel", "accepts", "produces", "value", "action"]);
    if (action) {
      return Object.assign(Object.assign(Object.assign({}, rest), !!inputs.length && {
        inputs
      }), {
        action: async params => {
          return authClient.idx.proceed(Object.assign({
            step: name
          }, params));
        }
      });
    }
    return Object.assign({}, this.remediation);
  }
  getInputs() {
    return (this.remediation.value || []).filter(({
      name
    }) => name !== 'stateHandle').map(unwrapFormValue).map(input => {
      input.type = input.type || 'string';
      return input;
    });
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AuthenticatorEnrollmentData: AuthenticatorEnrollmentData,
    AuthenticatorVerificationData: AuthenticatorVerificationData,
    ChallengeAuthenticator: ChallengeAuthenticator,
    ChallengePoll: ChallengePoll,
    EnrollAuthenticator: EnrollAuthenticator,
    EnrollPoll: EnrollPoll,
    EnrollProfile: EnrollProfile,
    EnrollmentChannelData: EnrollmentChannelData,
    GenericRemediator: GenericRemediator,
    Identify: Identify,
    ReEnrollAuthenticator: ReEnrollAuthenticator,
    RedirectIdp: RedirectIdp,
    Remediator: Remediator,
    ResetAuthenticator: ResetAuthenticator,
    SelectAuthenticatorAuthenticate: SelectAuthenticatorAuthenticate,
    SelectAuthenticatorEnroll: SelectAuthenticatorEnroll,
    SelectAuthenticatorUnlockAccount: SelectAuthenticatorUnlockAccount,
    SelectEnrollProfile: SelectEnrollProfile,
    SelectEnrollmentChannel: SelectEnrollmentChannel,
    Skip: Skip
});

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isTerminalResponse(idxResponse) {
  const {
    neededToProceed,
    interactionCode
  } = idxResponse;
  return !neededToProceed.length && !interactionCode;
}
function canSkipFn(idxResponse) {
  return idxResponse.neededToProceed.some(({
    name
  }) => name === 'skip');
}
function canResendFn(idxResponse) {
  return Object.keys(idxResponse.actions).some(actionName => actionName.includes('resend'));
}
function getMessagesFromIdxRemediationValue(value) {
  if (!value || !Array.isArray(value)) {
    return;
  }
  return value.reduce((messages, value) => {
    if (value.messages) {
      messages = [...messages, ...value.messages.value];
    }
    if (value.form) {
      const messagesFromForm = getMessagesFromIdxRemediationValue(value.form.value) || [];
      messages = [...messages, ...messagesFromForm];
    }
    if (value.options) {
      let optionValues = [];
      value.options.forEach(option => {
        if (!option.value || typeof option.value === 'string') {
          return;
        }
        optionValues = [...optionValues, option.value];
      });
      const messagesFromOptions = getMessagesFromIdxRemediationValue(optionValues) || [];
      messages = [...messages, ...messagesFromOptions];
    }
    return messages;
  }, []);
}
function getMessagesFromResponse(idxResponse, options) {
  var _a;
  let messages = [];
  const {
    rawIdxState,
    neededToProceed
  } = idxResponse;
  const globalMessages = (_a = rawIdxState.messages) === null || _a === void 0 ? void 0 : _a.value.map(message => message);
  if (globalMessages) {
    messages = [...messages, ...globalMessages];
  }
  if (!options.useGenericRemediator) {
    for (let remediation of neededToProceed) {
      const fieldMessages = getMessagesFromIdxRemediationValue(remediation.value);
      if (fieldMessages) {
        messages = [...messages, ...fieldMessages];
      }
    }
  }
  const seen = {};
  messages = messages.reduce((filtered, message) => {
    var _a;
    const key = (_a = message.i18n) === null || _a === void 0 ? void 0 : _a.key;
    if (key && seen[key] && message.message === seen[key].message) {
      return filtered;
    }
    seen[key] = message;
    filtered = [...filtered, message];
    return filtered;
  }, []);
  return messages;
}
function getEnabledFeatures(idxResponse) {
  const res = [];
  const {
    actions,
    neededToProceed
  } = idxResponse;
  if (actions['currentAuthenticator-recover']) {
    res.push(IdxFeature.PASSWORD_RECOVERY);
  }
  if (neededToProceed.some(({
    name
  }) => name === 'select-enroll-profile')) {
    res.push(IdxFeature.REGISTRATION);
  }
  if (neededToProceed.some(({
    name
  }) => name === 'redirect-idp')) {
    res.push(IdxFeature.SOCIAL_IDP);
  }
  if (neededToProceed.some(({
    name
  }) => name === 'unlock-account')) {
    res.push(IdxFeature.ACCOUNT_UNLOCK);
  }
  return res;
}
function getAvailableSteps(authClient, idxResponse, useGenericRemediator) {
  var _a;
  const res = [];
  const remediatorMap = Object.values(index$1).reduce((map, remediatorClass) => {
    if (remediatorClass.remediationName) {
      map[remediatorClass.remediationName] = remediatorClass;
    }
    return map;
  }, {});
  for (let remediation of idxResponse.neededToProceed) {
    const T = getRemediatorClass(remediation, {
      useGenericRemediator,
      remediators: remediatorMap
    });
    if (T) {
      const remediator = new T(remediation);
      res.push(remediator.getNextStep(authClient, idxResponse.context));
    }
  }
  for (const [name] of Object.entries(idxResponse.actions || {})) {
    let stepObj = {
      name,
      action: async params => {
        return authClient.idx.proceed({
          actions: [{
            name,
            params
          }]
        });
      }
    };
    if (name.startsWith('currentAuthenticator')) {
      const [part1, part2] = split2(name, '-');
      const actionObj = idxResponse.rawIdxState[part1].value[part2];
      const rest = __rest(actionObj, ["href", "method", "rel", "accepts", "produces"]);
      const value = (_a = actionObj.value) === null || _a === void 0 ? void 0 : _a.filter(item => item.name !== 'stateHandle');
      stepObj = Object.assign(Object.assign(Object.assign({}, rest), value && {
        value
      }), stepObj);
    }
    res.push(stepObj);
  }
  return res;
}
function filterValuesForRemediation(idxResponse, remediationName, values) {
  const remediations = idxResponse.neededToProceed || [];
  const remediation = remediations.find(r => r.name === remediationName);
  if (!remediation) {
    warn(`filterValuesForRemediation: "${remediationName}" did not match any remediations`);
    return values;
  }
  const valuesForRemediation = remediation.value.reduce((res, entry) => {
    const {
      name,
      value
    } = entry;
    if (name === 'stateHandle') {
      res[name] = value;
    } else {
      res[name] = values[name];
    }
    return res;
  }, {});
  return valuesForRemediation;
}
function getRemediatorClass(remediation, options) {
  const {
    useGenericRemediator,
    remediators
  } = options;
  if (!remediation) {
    return undefined;
  }
  if (useGenericRemediator) {
    return GenericRemediator;
  }
  return remediators[remediation.name];
}
function getRemediator(idxResponse, values, options) {
  const remediators = options.remediators;
  const useGenericRemediator = options.useGenericRemediator;
  const {
    neededToProceed: idxRemediations,
    context
  } = idxResponse;
  let remediator;
  if (options.step) {
    const remediation = idxRemediations.find(({
      name
    }) => name === options.step);
    if (remediation) {
      const T = getRemediatorClass(remediation, options);
      return T ? new T(remediation, values, options) : undefined;
    } else {
      warn(`step "${options.step}" did not match any remediations`);
      return;
    }
  }
  const remediatorCandidates = [];
  if (useGenericRemediator) {
    remediatorCandidates.push(new GenericRemediator(idxRemediations[0], values, options));
  } else {
    for (let remediation of idxRemediations) {
      const isRemeditionInFlow = Object.keys(remediators).includes(remediation.name);
      if (!isRemeditionInFlow) {
        continue;
      }
      const T = getRemediatorClass(remediation, options);
      remediator = new T(remediation, values, options);
      if (remediator.canRemediate(context)) {
        return remediator;
      }
      remediatorCandidates.push(remediator);
    }
  }
  return remediatorCandidates[0];
}
function getNextStep(authClient, remediator, idxResponse) {
  const nextStep = remediator.getNextStep(authClient, idxResponse.context);
  const canSkip = canSkipFn(idxResponse);
  const canResend = canResendFn(idxResponse);
  return Object.assign(Object.assign(Object.assign({}, nextStep), canSkip && {
    canSkip
  }), canResend && {
    canResend
  });
}
function handleFailedResponse(authClient, idxResponse, options = {}) {
  const terminal = isTerminalResponse(idxResponse);
  const messages = getMessagesFromResponse(idxResponse, options);
  if (terminal) {
    return {
      idxResponse,
      terminal,
      messages
    };
  } else {
    const remediator = getRemediator(idxResponse, {}, options);
    const nextStep = remediator && getNextStep(authClient, remediator, idxResponse);
    return Object.assign({
      idxResponse,
      messages
    }, nextStep && {
      nextStep
    });
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getActionFromValues(values, idxResponse) {
  return Object.keys(idxResponse.actions).find(action => !!values.resend && action.includes('-resend'));
}
function removeActionFromValues(values) {
  return Object.assign(Object.assign({}, values), {
    resend: undefined
  });
}
function removeActionFromOptions(options, actionName) {
  let actions = options.actions || [];
  actions = actions.filter(entry => {
    if (typeof entry === 'string') {
      return entry !== actionName;
    }
    return entry.name !== actionName;
  });
  return Object.assign(Object.assign({}, options), {
    actions
  });
}
async function remediate(authClient, idxResponse, values, options) {
  let {
    neededToProceed,
    interactionCode
  } = idxResponse;
  const {
    flow
  } = options;
  if (interactionCode) {
    return {
      idxResponse
    };
  }
  const remediator = getRemediator(idxResponse, values, options);
  const actionFromValues = getActionFromValues(values, idxResponse);
  const actionFromOptions = options.actions || [];
  const actions = [...actionFromOptions, ...(actionFromValues && [actionFromValues] || [])];
  if (actions) {
    for (let action of actions) {
      let params = {};
      if (typeof action !== 'string') {
        params = action.params || {};
        action = action.name;
      }
      let valuesWithoutExecutedAction = removeActionFromValues(values);
      let optionsWithoutExecutedAction = removeActionFromOptions(options, action);
      if (typeof idxResponse.actions[action] === 'function') {
        idxResponse = await idxResponse.actions[action](params);
        if (idxResponse.requestDidSucceed === false) {
          return handleFailedResponse(authClient, idxResponse, options);
        }
        if (action === 'cancel') {
          return {
            idxResponse,
            canceled: true
          };
        }
        return remediate(authClient, idxResponse, valuesWithoutExecutedAction, optionsWithoutExecutedAction);
      }
      const remediationAction = neededToProceed.find(({
        name
      }) => name === action);
      if (remediationAction) {
        idxResponse = await idxResponse.proceed(action, params);
        if (idxResponse.requestDidSucceed === false) {
          return handleFailedResponse(authClient, idxResponse, options);
        }
        return remediate(authClient, idxResponse, values, optionsWithoutExecutedAction);
      }
    }
  }
  const terminal = isTerminalResponse(idxResponse);
  if (terminal) {
    return {
      idxResponse,
      terminal
    };
  }
  if (!remediator) {
    if (options.step) {
      values = filterValuesForRemediation(idxResponse, options.step, values);
      idxResponse = await idxResponse.proceed(options.step, values);
      if (idxResponse.requestDidSucceed === false) {
        return handleFailedResponse(authClient, idxResponse, options);
      }
      return {
        idxResponse
      };
    }
    if (flow === 'default') {
      return {
        idxResponse
      };
    }
    throw new AuthSdkError(`
      No remediation can match current flow, check policy settings in your org.
      Remediations: [${neededToProceed.reduce((acc, curr) => acc ? acc + ' ,' + curr.name : curr.name, '')}]
    `);
  }
  if (!remediator.canRemediate()) {
    const nextStep = getNextStep(authClient, remediator, idxResponse);
    return {
      idxResponse,
      nextStep
    };
  }
  const name = remediator.getName();
  const data = remediator.getData();
  idxResponse = await idxResponse.proceed(name, data);
  if (idxResponse.requestDidSucceed === false) {
    return handleFailedResponse(authClient, idxResponse, options);
  }
  values = remediator.getValuesAfterProceed();
  options = Object.assign(Object.assign({}, options), {
    step: undefined
  });
  if (options.useGenericRemediator && !idxResponse.interactionCode && !isTerminalResponse(idxResponse)) {
    const gr = getRemediator(idxResponse, values, options);
    const nextStep = getNextStep(authClient, gr, idxResponse);
    return {
      idxResponse,
      nextStep
    };
  }
  return remediate(authClient, idxResponse, values, options);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const AuthenticationFlow = {
  'identify': Identify,
  'select-authenticator-authenticate': SelectAuthenticatorAuthenticate,
  'select-authenticator-enroll': SelectAuthenticatorEnroll,
  'authenticator-enrollment-data': AuthenticatorEnrollmentData,
  'authenticator-verification-data': AuthenticatorVerificationData,
  'enroll-authenticator': EnrollAuthenticator,
  'challenge-authenticator': ChallengeAuthenticator,
  'challenge-poll': ChallengePoll,
  'reenroll-authenticator': ReEnrollAuthenticator,
  'enroll-poll': EnrollPoll,
  'select-enrollment-channel': SelectEnrollmentChannel,
  'enrollment-channel-data': EnrollmentChannelData,
  'redirect-idp': RedirectIdp,
  'skip': Skip
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const PasswordRecoveryFlow = {
  'identify': Identify,
  'identify-recovery': Identify,
  'select-authenticator-authenticate': SelectAuthenticatorAuthenticate,
  'select-authenticator-enroll': SelectAuthenticatorEnroll,
  'challenge-authenticator': ChallengeAuthenticator,
  'authenticator-verification-data': AuthenticatorVerificationData,
  'authenticator-enrollment-data': AuthenticatorEnrollmentData,
  'reset-authenticator': ResetAuthenticator,
  'reenroll-authenticator': ReEnrollAuthenticator,
  'enroll-poll': EnrollPoll
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const RegistrationFlow = {
  'select-enroll-profile': SelectEnrollProfile,
  'enroll-profile': EnrollProfile,
  'authenticator-enrollment-data': AuthenticatorEnrollmentData,
  'select-authenticator-enroll': SelectAuthenticatorEnroll,
  'enroll-poll': EnrollPoll,
  'select-enrollment-channel': SelectEnrollmentChannel,
  'enrollment-channel-data': EnrollmentChannelData,
  'enroll-authenticator': EnrollAuthenticator,
  'skip': Skip
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const AccountUnlockFlow = {
  'identify': Identify,
  'select-authenticator-unlock-account': SelectAuthenticatorUnlockAccount,
  'select-authenticator-authenticate': SelectAuthenticatorAuthenticate,
  'challenge-authenticator': ChallengeAuthenticator,
  'challenge-poll': ChallengePoll,
  'authenticator-verification-data': AuthenticatorVerificationData
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getFlowSpecification(oktaAuth, flow = 'default') {
  let remediators,
    actions,
    withCredentials = true;
  switch (flow) {
    case 'register':
    case 'signup':
    case 'enrollProfile':
      remediators = RegistrationFlow;
      withCredentials = false;
      break;
    case 'recoverPassword':
    case 'resetPassword':
      remediators = PasswordRecoveryFlow;
      actions = ['currentAuthenticator-recover', 'currentAuthenticatorEnrollment-recover'];
      withCredentials = false;
      break;
    case 'unlockAccount':
      remediators = AccountUnlockFlow;
      withCredentials = false;
      actions = ['unlock-account'];
      break;
    case 'authenticate':
    case 'login':
    case 'signin':
      remediators = AuthenticationFlow;
      break;
    default:
      remediators = AuthenticationFlow;
      break;
  }
  return {
    flow,
    remediators,
    actions,
    withCredentials
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function initializeValues(options) {
  const knownOptions = ['flow', 'remediators', 'actions', 'withCredentials', 'step', 'useGenericRemediator', 'exchangeCodeForTokens'];
  const values = Object.assign({}, options);
  knownOptions.forEach(option => {
    delete values[option];
  });
  return values;
}
function initializeData(authClient, data) {
  let {
    options
  } = data;
  options = Object.assign(Object.assign({}, authClient.options.idx), options);
  let {
    flow,
    withCredentials,
    remediators,
    actions
  } = options;
  const status = IdxStatus.PENDING;
  flow = flow || authClient.idx.getFlow() || 'default';
  if (flow) {
    authClient.idx.setFlow(flow);
    const flowSpec = getFlowSpecification(authClient, flow);
    withCredentials = typeof withCredentials !== 'undefined' ? withCredentials : flowSpec.withCredentials;
    remediators = remediators || flowSpec.remediators;
    actions = actions || flowSpec.actions;
  }
  return Object.assign(Object.assign({}, data), {
    options: Object.assign(Object.assign({}, options), {
      flow,
      withCredentials,
      remediators,
      actions
    }),
    status
  });
}
async function getDataFromIntrospect(authClient, data) {
  const {
    options
  } = data;
  const {
    stateHandle,
    withCredentials,
    version,
    state,
    scopes,
    recoveryToken,
    activationToken,
    maxAge,
    acrValues,
    nonce
  } = options;
  let idxResponse;
  let meta = getSavedTransactionMeta(authClient, {
    state,
    recoveryToken,
    activationToken
  });
  if (stateHandle) {
    idxResponse = await introspect(authClient, {
      withCredentials,
      version,
      stateHandle
    });
  } else {
    let interactionHandle = meta === null || meta === void 0 ? void 0 : meta.interactionHandle;
    if (!interactionHandle) {
      authClient.transactionManager.clear();
      const interactResponse = await interact(authClient, {
        withCredentials,
        state,
        scopes,
        activationToken,
        recoveryToken,
        maxAge,
        acrValues,
        nonce
      });
      interactionHandle = interactResponse.interactionHandle;
      meta = interactResponse.meta;
    }
    idxResponse = await introspect(authClient, {
      withCredentials,
      version,
      interactionHandle
    });
  }
  return Object.assign(Object.assign({}, data), {
    idxResponse,
    meta
  });
}
async function getDataFromRemediate(authClient, data) {
  let {
    idxResponse,
    options,
    values
  } = data;
  const {
    autoRemediate,
    remediators,
    actions,
    flow,
    step,
    useGenericRemediator
  } = options;
  const shouldRemediate = autoRemediate !== false && (remediators || actions || step);
  if (!shouldRemediate) {
    return data;
  }
  values = Object.assign(Object.assign({}, values), {
    stateHandle: idxResponse.rawIdxState.stateHandle
  });
  const {
    idxResponse: idxResponseFromRemediation,
    nextStep,
    canceled
  } = await remediate(authClient, idxResponse, values, {
    remediators,
    actions,
    flow,
    step,
    useGenericRemediator
  });
  idxResponse = idxResponseFromRemediation;
  return Object.assign(Object.assign({}, data), {
    idxResponse,
    nextStep,
    canceled
  });
}
async function getTokens(authClient, data) {
  let {
    meta,
    idxResponse
  } = data;
  const {
    interactionCode
  } = idxResponse;
  const {
    clientId,
    codeVerifier,
    ignoreSignature,
    redirectUri,
    urls,
    scopes
  } = meta;
  const tokenResponse = await authClient.token.exchangeCodeForTokens({
    interactionCode,
    clientId,
    codeVerifier,
    ignoreSignature,
    redirectUri,
    scopes
  }, urls);
  return tokenResponse.tokens;
}
async function finalizeData(authClient, data) {
  let {
    options,
    idxResponse,
    canceled,
    status
  } = data;
  const {
    exchangeCodeForTokens
  } = options;
  let shouldSaveResponse = false;
  let shouldClearTransaction = false;
  let clearSharedStorage = true;
  let interactionCode;
  let tokens;
  let enabledFeatures;
  let availableSteps;
  let messages;
  let terminal;
  if (idxResponse) {
    shouldSaveResponse = !!(idxResponse.requestDidSucceed || idxResponse.stepUp);
    enabledFeatures = getEnabledFeatures(idxResponse);
    availableSteps = getAvailableSteps(authClient, idxResponse, options.useGenericRemediator);
    messages = getMessagesFromResponse(idxResponse, options);
    terminal = isTerminalResponse(idxResponse);
  }
  if (terminal) {
    status = IdxStatus.TERMINAL;
    const hasActions = Object.keys(idxResponse.actions).length > 0;
    const hasErrors = !!messages.find(msg => msg.class === 'ERROR');
    const isTerminalSuccess = !hasActions && !hasErrors && idxResponse.requestDidSucceed === true;
    if (isTerminalSuccess) {
      shouldClearTransaction = true;
    } else {
      shouldSaveResponse = !!hasActions;
    }
    clearSharedStorage = false;
  } else if (canceled) {
    status = IdxStatus.CANCELED;
    shouldClearTransaction = true;
  } else if (idxResponse === null || idxResponse === void 0 ? void 0 : idxResponse.interactionCode) {
    interactionCode = idxResponse.interactionCode;
    if (exchangeCodeForTokens === false) {
      status = IdxStatus.SUCCESS;
      shouldClearTransaction = false;
    } else {
      tokens = await getTokens(authClient, data);
      status = IdxStatus.SUCCESS;
      shouldClearTransaction = true;
    }
  }
  return Object.assign(Object.assign({}, data), {
    status,
    interactionCode,
    tokens,
    shouldSaveResponse,
    shouldClearTransaction,
    clearSharedStorage,
    enabledFeatures,
    availableSteps,
    messages,
    terminal
  });
}
async function run(authClient, options = {}) {
  var _a;
  let data = {
    options,
    values: initializeValues(options)
  };
  data = initializeData(authClient, data);
  data = await getDataFromIntrospect(authClient, data);
  data = await getDataFromRemediate(authClient, data);
  data = await finalizeData(authClient, data);
  const {
    idxResponse,
    meta,
    shouldSaveResponse,
    shouldClearTransaction,
    clearSharedStorage,
    status,
    enabledFeatures,
    availableSteps,
    tokens,
    nextStep,
    messages,
    error,
    interactionCode
  } = data;
  if (shouldClearTransaction) {
    authClient.transactionManager.clear({
      clearSharedStorage
    });
  } else {
    saveTransactionMeta(authClient, Object.assign({}, meta));
    if (shouldSaveResponse) {
      const {
        rawIdxState: rawIdxResponse,
        requestDidSucceed
      } = idxResponse;
      authClient.transactionManager.saveIdxResponse({
        rawIdxResponse,
        requestDidSucceed,
        stateHandle: (_a = idxResponse.context) === null || _a === void 0 ? void 0 : _a.stateHandle,
        interactionHandle: meta === null || meta === void 0 ? void 0 : meta.interactionHandle
      });
    }
  }
  const {
    actions,
    context,
    neededToProceed,
    proceed,
    rawIdxState,
    requestDidSucceed,
    stepUp
  } = idxResponse || {};
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    status: status
  }, meta && {
    meta
  }), enabledFeatures && {
    enabledFeatures
  }), availableSteps && {
    availableSteps
  }), tokens && {
    tokens
  }), nextStep && {
    nextStep
  }), messages && messages.length && {
    messages
  }), error && {
    error
  }), stepUp && {
    stepUp
  }), {
    interactionCode,
    actions: actions,
    context: context,
    neededToProceed: neededToProceed,
    proceed: proceed,
    rawIdxState: rawIdxState,
    requestDidSucceed
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function authenticate(authClient, options = {}) {
  if (options.password && !options.authenticator) {
    options.authenticator = AuthenticatorKey.OKTA_PASSWORD;
  }
  return run(authClient, Object.assign(Object.assign({}, options), {
    flow: 'authenticate'
  }));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function cancel(authClient, options) {
  const meta = authClient.transactionManager.load();
  const flowSpec = getFlowSpecification(authClient, meta.flow);
  return run(authClient, Object.assign(Object.assign(Object.assign({}, options), flowSpec), {
    actions: ['cancel']
  }));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function urlParamsToObject(hashOrSearch) {
  var plus2space = /\+/g;
  var paramSplit = /([^&=]+)=?([^&]*)/g;
  var fragment = hashOrSearch || '';
  if (fragment.charAt(0) === '#' && fragment.charAt(1) === '/') {
    fragment = fragment.substring(2);
  }
  if (fragment.charAt(0) === '#' || fragment.charAt(0) === '?') {
    fragment = fragment.substring(1);
  }
  var obj = {};
  var param;
  while (true) {
    param = paramSplit.exec(fragment);
    if (!param) {
      break;
    }
    var key = param[1];
    var value = param[2];
    if (key === 'id_token' || key === 'access_token' || key === 'code') {
      obj[key] = value;
    } else {
      obj[key] = decodeURIComponent(value.replace(plus2space, ' '));
    }
  }
  return obj;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EmailVerifyCallbackError extends CustomError {
  constructor(state, otp) {
    super(`Enter the OTP code in the originating client: ${otp}`);
    this.name = 'EmailVerifyCallbackError';
    this.state = state;
    this.otp = otp;
  }
  /*LWC compiler v3.1.3*/
}
function isEmailVerifyCallbackError(error) {
  return error.name === 'EmailVerifyCallbackError';
}
function isEmailVerifyCallback(urlPath) {
  return /(otp=)/i.test(urlPath) && /(state=)/i.test(urlPath);
}
function parseEmailVerifyCallback(urlPath) {
  return urlParamsToObject(urlPath);
}
async function handleEmailVerifyCallback(authClient, search) {
  if (isEmailVerifyCallback(search)) {
    const {
      state,
      otp
    } = parseEmailVerifyCallback(search);
    if (authClient.idx.canProceed({
      state
    })) {
      return await authClient.idx.proceed({
        state,
        otp
      });
    } else {
      throw new EmailVerifyCallbackError(state, otp);
    }
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function canProceed(authClient, options = {}) {
  const meta = getSavedTransactionMeta(authClient, options);
  return !!(meta || options.stateHandle);
}
async function proceed(authClient, options = {}) {
  if (!canProceed(authClient, options)) {
    throw new AuthSdkError('Unable to proceed: saved transaction could not be loaded');
  }
  let {
    flow,
    state
  } = options;
  if (!flow) {
    const meta = getSavedTransactionMeta(authClient, {
      state
    });
    flow = meta === null || meta === void 0 ? void 0 : meta.flow;
  }
  return run(authClient, Object.assign(Object.assign({}, options), {
    flow
  }));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function poll(authClient, options = {}) {
  var _a;
  let transaction = await proceed(authClient, {
    startPolling: true
  });
  const meta = getSavedTransactionMeta(authClient);
  let availablePollingRemeditaions = (_a = meta === null || meta === void 0 ? void 0 : meta.remediations) === null || _a === void 0 ? void 0 : _a.find(remediation => remediation.includes('poll'));
  if (!(availablePollingRemeditaions === null || availablePollingRemeditaions === void 0 ? void 0 : availablePollingRemeditaions.length)) {
    warn('No polling remediations available at the current IDX flow stage');
  }
  if (Number.isInteger(options.refresh)) {
    return new Promise(function (resolve, reject) {
      setTimeout(async function () {
        var _a, _b;
        try {
          const refresh = (_b = (_a = transaction.nextStep) === null || _a === void 0 ? void 0 : _a.poll) === null || _b === void 0 ? void 0 : _b.refresh;
          if (refresh) {
            resolve(poll(authClient, {
              refresh
            }));
          } else {
            resolve(transaction);
          }
        } catch (err) {
          reject(err);
        }
      }, options.refresh);
    });
  }
  return transaction;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function startTransaction(authClient, options = {}) {
  authClient.transactionManager.clear();
  return run(authClient, Object.assign({
    exchangeCodeForTokens: false
  }, options));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function register(authClient, options = {}) {
  if (!hasSavedInteractionHandle(authClient)) {
    const {
      enabledFeatures
    } = await startTransaction(authClient, Object.assign(Object.assign({}, options), {
      flow: 'register',
      autoRemediate: false
    }));
    if (!options.activationToken && enabledFeatures && !enabledFeatures.includes(IdxFeature.REGISTRATION)) {
      throw new AuthSdkError('Registration is not supported based on your current org configuration.');
    }
  }
  return run(authClient, Object.assign(Object.assign({}, options), {
    flow: 'register'
  }));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function recoverPassword(authClient, options = {}) {
  const flowSpec = getFlowSpecification(authClient, 'recoverPassword');
  return run(authClient, Object.assign(Object.assign({}, options), flowSpec));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function handleInteractionCodeRedirect(authClient, url) {
  const meta = authClient.transactionManager.load();
  if (!meta) {
    throw new AuthSdkError('No transaction data was found in storage');
  }
  const {
    codeVerifier,
    state: savedState
  } = meta;
  const {
    searchParams
  } = new URL(url);
  const state = searchParams.get('state');
  const interactionCode = searchParams.get('interaction_code');
  const error = searchParams.get('error');
  if (error) {
    throw new OAuthError(error, searchParams.get('error_description'));
  }
  if (state !== savedState) {
    throw new AuthSdkError('State in redirect uri does not match with transaction state');
  }
  if (!interactionCode) {
    throw new AuthSdkError('Unable to parse interaction_code from the url');
  }
  const {
    tokens
  } = await authClient.token.exchangeCodeForTokens({
    interactionCode,
    codeVerifier
  });
  authClient.tokenManager.setTokens(tokens);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function unlockAccount(authClient, options = {}) {
  options.flow = 'unlockAccount';
  if (!hasSavedInteractionHandle(authClient)) {
    const {
      enabledFeatures
    } = await startTransaction(authClient, Object.assign(Object.assign({}, options), {
      autoRemediate: false
    }));
    if (enabledFeatures && !enabledFeatures.includes(IdxFeature.ACCOUNT_UNLOCK)) {
      throw new AuthSdkError('Self Service Account Unlock is not supported based on your current org configuration.');
    }
  }
  return run(authClient, Object.assign({}, options));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isInteractionRequiredError(error) {
  if (error.name !== 'OAuthError') {
    return false;
  }
  const oauthError = error;
  return oauthError.errorCode === 'interaction_required';
}
function isRefreshTokenInvalidError(error) {
  return isOAuthError(error) && error.errorCode === 'invalid_grant' && error.errorSummary === 'The refresh token is invalid or expired.';
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function hasTokensInHash(hash) {
  return /((id|access)_token=)/i.test(hash);
}
function hasAuthorizationCode(hashOrSearch) {
  return /(code=)/i.test(hashOrSearch);
}
function hasInteractionCode(hashOrSearch) {
  return /(interaction_code=)/i.test(hashOrSearch);
}
function hasErrorInUrl(hashOrSearch) {
  return /(error=)/i.test(hashOrSearch) || /(error_description)/i.test(hashOrSearch);
}
function isRedirectUri(uri, sdk) {
  var authParams = sdk.options;
  if (!uri || !authParams.redirectUri) {
    return false;
  }
  return uri.indexOf(authParams.redirectUri) === 0;
}
function isCodeFlow(options) {
  return options.pkce || options.responseType === 'code' || options.responseMode === 'query';
}
function getHashOrSearch(options) {
  var codeFlow = isCodeFlow(options);
  var useQuery = codeFlow && options.responseMode !== 'fragment';
  return useQuery ? window.location.search : window.location.hash;
}
function isLoginRedirect(sdk) {
  if (!isRedirectUri(window.location.href, sdk)) {
    return false;
  }
  var codeFlow = isCodeFlow(sdk.options);
  var hashOrSearch = getHashOrSearch(sdk.options);
  if (hasErrorInUrl(hashOrSearch)) {
    return true;
  }
  if (codeFlow) {
    var hasCode = hasAuthorizationCode(hashOrSearch) || hasInteractionCode(hashOrSearch);
    return hasCode;
  }
  return hasTokensInHash(window.location.hash);
}
function isInteractionRequired(sdk, hashOrSearch) {
  if (!hashOrSearch) {
    if (!isLoginRedirect(sdk)) {
      return false;
    }
    hashOrSearch = getHashOrSearch(sdk.options);
  }
  return /(error=interaction_required)/i.test(hashOrSearch);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createIdxAPI(sdk) {
  const boundStartTransaction = startTransaction.bind(null, sdk);
  const idx = {
    interact: interact.bind(null, sdk),
    introspect: introspect.bind(null, sdk),
    makeIdxResponse: makeIdxState.bind(null, sdk),
    authenticate: authenticate.bind(null, sdk),
    register: register.bind(null, sdk),
    start: boundStartTransaction,
    startTransaction: boundStartTransaction,
    poll: poll.bind(null, sdk),
    proceed: proceed.bind(null, sdk),
    cancel: cancel.bind(null, sdk),
    recoverPassword: recoverPassword.bind(null, sdk),
    handleInteractionCodeRedirect: handleInteractionCodeRedirect.bind(null, sdk),
    isInteractionRequired: isInteractionRequired.bind(null, sdk),
    isInteractionRequiredError,
    handleEmailVerifyCallback: handleEmailVerifyCallback.bind(null, sdk),
    isEmailVerifyCallback,
    parseEmailVerifyCallback,
    isEmailVerifyCallbackError,
    getSavedTransactionMeta: getSavedTransactionMeta.bind(null, sdk),
    createTransactionMeta: createTransactionMeta.bind(null, sdk),
    getTransactionMeta: getTransactionMeta.bind(null, sdk),
    saveTransactionMeta: saveTransactionMeta.bind(null, sdk),
    clearTransactionMeta: clearTransactionMeta.bind(null, sdk),
    isTransactionMetaValid,
    setFlow: flow => {
      sdk.options.flow = flow;
    },
    getFlow: () => {
      return sdk.options.flow;
    },
    canProceed: canProceed.bind(null, sdk),
    unlockAccount: unlockAccount.bind(null, sdk)
  };
  return idx;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const a = function (str) {
  return atob(str);
};
const b = function (str) {
  return btoa(str);
};
const c = typeof crypto === 'undefined' ? null : crypto;

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const isWindowsPhone = /windows phone|iemobile|wpdesktop/i;
function isBrowser() {
  return typeof document !== 'undefined' && typeof window !== 'undefined';
}
function isIE11OrLess() {
  if (!isBrowser()) {
    return false;
  }
  const documentMode = document.documentMode;
  return !!documentMode && documentMode <= 11;
}
function getUserAgent() {
  return navigator.userAgent;
}
function isFingerprintSupported() {
  const agent = getUserAgent();
  return agent && !isWindowsPhone.test(agent);
}
function isPopupPostMessageSupported() {
  if (!isBrowser()) {
    return false;
  }
  const documentMode = document.documentMode;
  var isIE8or9 = documentMode && documentMode < 10;
  if (typeof window.postMessage !== 'undefined' && !isIE8or9) {
    return true;
  }
  return false;
}
function isTokenVerifySupported() {
  return typeof c !== 'undefined' && c !== null && typeof c.subtle !== 'undefined' && typeof Uint8Array !== 'undefined';
}
function hasTextEncoder() {
  return typeof TextEncoder !== 'undefined';
}
function isPKCESupported() {
  return isTokenVerifySupported() && hasTextEncoder();
}
function isHTTPS() {
  if (!isBrowser()) {
    return false;
  }
  return window.location.protocol === 'https:';
}
function isLocalhost() {
  return isBrowser() && window.location.hostname === 'localhost';
}

var features = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getUserAgent: getUserAgent,
    hasTextEncoder: hasTextEncoder,
    isBrowser: isBrowser,
    isFingerprintSupported: isFingerprintSupported,
    isHTTPS: isHTTPS,
    isIE11OrLess: isIE11OrLess,
    isLocalhost: isLocalhost,
    isPKCESupported: isPKCESupported,
    isPopupPostMessageSupported: isPopupPostMessageSupported,
    isTokenVerifySupported: isTokenVerifySupported
});

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createOktaAuthBase(OptionsConstructor) {
  class OktaAuthBase {
    constructor(...args) {
      const options = new OptionsConstructor(args.length ? args[0] || {} : {});
      this.options = removeNils(options);
      this.emitter = new Emitter();
      this.features = features;
    }
  }
  OktaAuthBase.features = features;
  OktaAuthBase.constants = constants;
  OktaAuthBase.features = OktaAuthBase.prototype.features = features;
  Object.assign(OktaAuthBase, {
    constants
  });
  return OktaAuthBase;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinStorage(Base, StorageManager) {
  return class OktaAuthStorage extends Base {
    constructor(...args) {
      super(...args);
      const {
        storageManager,
        cookies,
        storageUtil
      } = this.options;
      this.storageManager = new StorageManager(storageManager, cookies, storageUtil);
    }
    clearStorage() {}
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class OktaUserAgent {
  constructor() {
    this.environments = [`okta-auth-js/${"7.4.1"}`];
  }
  addEnvironment(env) {
    this.environments.push(env);
  }
  getHttpHeader() {
    this.maybeAddNodeEnvironment();
    return {
      'X-Okta-User-Agent-Extended': this.environments.join(' ')
    };
  }
  getVersion() {
    return "7.4.1";
  }
  maybeAddNodeEnvironment() {
    if (isBrowser() || !process || !process.versions) {
      return;
    }
    const {
      node: version
    } = process.versions;
    this.environments.push(`nodejs/${version}`);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function setRequestHeader(authClient, headerName, headerValue) {
  authClient.options.headers = authClient.options.headers || {};
  authClient.options.headers[headerName] = headerValue;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinHttp(Base) {
  return class OktaAuthHttp extends Base {
    constructor(...args) {
      super(...args);
      this._oktaUserAgent = new OktaUserAgent();
      this.http = {
        setRequestHeader: setRequestHeader.bind(null, this)
      };
    }
    setHeaders(headers) {
      this.options.headers = Object.assign({}, this.options.headers, headers);
    }
    getIssuerOrigin() {
      return this.options.issuer.split('/oauth2/')[0];
    }
    webfinger(opts) {
      var url = '/.well-known/webfinger' + toQueryString(opts);
      var options = {
        headers: {
          'Accept': 'application/jrd+json'
        }
      };
      return get(this, url, options);
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function stringToBase64Url(str) {
  var b64 = b(str);
  return base64ToBase64Url(b64);
}
function base64ToBase64Url(b64) {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function base64UrlToBase64(b64u) {
  return b64u.replace(/-/g, '+').replace(/_/g, '/');
}
function base64UrlToString(b64u) {
  var b64 = base64UrlToBase64(b64u);
  switch (b64.length % 4) {
    case 0:
      break;
    case 2:
      b64 += '==';
      break;
    case 3:
      b64 += '=';
      break;
    default:
      throw new AuthSdkError('Not a valid Base64Url');
  }
  var utf8 = a(b64);
  try {
    return decodeURIComponent(escape(utf8));
  } catch (e) {
    return utf8;
  }
}
function stringToBuffer(str) {
  var buffer = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    buffer[i] = str.charCodeAt(i);
  }
  return buffer;
}
function base64UrlDecode(str) {
  return a(base64UrlToBase64(str));
}
function base64UrlToBuffer(b64u) {
  return Uint8Array.from(base64UrlDecode(b64u), c => c.charCodeAt(0));
}
function bufferToBase64Url(bin) {
  return b(new Uint8Array(bin).reduce((s, byte) => s + String.fromCharCode(byte), ''));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getOidcHash(str) {
  var buffer = new TextEncoder().encode(str);
  return c.subtle.digest('SHA-256', buffer).then(function (arrayBuffer) {
    var intBuffer = new Uint8Array(arrayBuffer);
    var firstHalf = intBuffer.slice(0, 16);
    var hash = String.fromCharCode.apply(null, firstHalf);
    var b64u = stringToBase64Url(hash);
    return b64u;
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function verifyToken$1(idToken, key) {
  key = clone(key);
  var format = 'jwk';
  var algo = {
    name: 'RSASSA-PKCS1-v1_5',
    hash: {
      name: 'SHA-256'
    }
  };
  var extractable = true;
  var usages = ['verify'];
  delete key.use;
  return c.subtle.importKey(format, key, algo, extractable, usages).then(function (cryptoKey) {
    var jwt = idToken.split('.');
    var payload = stringToBuffer(jwt[0] + '.' + jwt[1]);
    var b64Signature = base64UrlDecode(jwt[2]);
    var signature = stringToBuffer(b64Signature);
    return c.subtle.verify(algo, cryptoKey, signature, payload);
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    atob: a,
    base64ToBase64Url: base64ToBase64Url,
    base64UrlDecode: base64UrlDecode,
    base64UrlToBase64: base64UrlToBase64,
    base64UrlToBuffer: base64UrlToBuffer,
    base64UrlToString: base64UrlToString,
    btoa: b,
    bufferToBase64Url: bufferToBase64Url,
    getOidcHash: getOidcHash,
    stringToBase64Url: stringToBase64Url,
    stringToBuffer: stringToBuffer,
    verifyToken: verifyToken$1,
    webcrypto: c
});

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class PromiseQueue {
  constructor(options = {
    quiet: false
  }) {
    this.queue = [];
    this.running = false;
    this.options = options;
  }
  push(method, thisObject, ...args) {
    return new Promise((resolve, reject) => {
      if (this.queue.length > 0) {
        if (this.options.quiet !== false) {
          warn('Async method is being called but another async method is already running. ' + 'The new method will be delayed until the previous method completes.');
        }
      }
      this.queue.push({
        method,
        thisObject,
        args,
        resolve,
        reject
      });
      this.run();
    });
  }
  run() {
    if (this.running) {
      return;
    }
    if (this.queue.length === 0) {
      return;
    }
    this.running = true;
    var queueItem = this.queue.shift();
    var res = queueItem.method.apply(queueItem.thisObject, queueItem.args);
    if (isPromise$1(res)) {
      res.then(queueItem.resolve, queueItem.reject).finally(() => {
        this.running = false;
        this.run();
      });
    } else {
      queueItem.resolve(res);
      this.running = false;
      this.run();
    }
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2);
}
function getRandomString(length) {
  var a = new Uint8Array(Math.ceil(length / 2));
  c.getRandomValues(a);
  var str = Array.from(a, dec2hex).join('');
  return str.slice(0, length);
}
function generateVerifier(prefix) {
  var verifier = prefix || '';
  if (verifier.length < MIN_VERIFIER_LENGTH) {
    verifier = verifier + getRandomString(MIN_VERIFIER_LENGTH - verifier.length);
  }
  return encodeURIComponent(verifier).slice(0, MAX_VERIFIER_LENGTH);
}
function computeChallenge(str) {
  var buffer = new TextEncoder().encode(str);
  return c.subtle.digest('SHA-256', buffer).then(function (arrayBuffer) {
    var hash = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
    var b64u = stringToBase64Url(hash);
    return b64u;
  });
}
var PKCE = {
  DEFAULT_CODE_CHALLENGE_METHOD,
  generateVerifier,
  computeChallenge
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function decodeToken(token) {
  var jwt = token.split('.');
  var decodedToken;
  try {
    decodedToken = {
      header: JSON.parse(base64UrlToString(jwt[0])),
      payload: JSON.parse(base64UrlToString(jwt[1])),
      signature: jwt[2]
    };
  } catch (e) {
    throw new AuthSdkError('Malformed token');
  }
  return decodedToken;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getDefaultTokenParams(sdk) {
  const {
    pkce,
    clientId,
    redirectUri,
    responseType,
    responseMode,
    scopes,
    acrValues,
    maxAge,
    state,
    ignoreSignature
  } = sdk.options;
  const defaultRedirectUri = isBrowser() ? window.location.href : undefined;
  return removeNils({
    pkce,
    clientId,
    redirectUri: redirectUri || defaultRedirectUri,
    responseType: responseType || ['token', 'id_token'],
    responseMode,
    state: state || generateState(),
    nonce: generateNonce(),
    scopes: scopes || ['openid', 'email'],
    acrValues,
    maxAge,
    ignoreSignature
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function validateOptions(options) {
  if (!options.clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to get a token');
  }
  if (!options.redirectUri) {
    throw new AuthSdkError('The redirectUri passed to /authorize must also be passed to /token');
  }
  if (!options.authorizationCode && !options.interactionCode) {
    throw new AuthSdkError('An authorization code (returned from /authorize) must be passed to /token');
  }
  if (!options.codeVerifier) {
    throw new AuthSdkError('The "codeVerifier" (generated and saved by your app) must be passed to /token');
  }
}
function getPostData(sdk, options) {
  var params = removeNils({
    'client_id': options.clientId,
    'redirect_uri': options.redirectUri,
    'grant_type': options.interactionCode ? 'interaction_code' : 'authorization_code',
    'code_verifier': options.codeVerifier
  });
  if (options.interactionCode) {
    params['interaction_code'] = options.interactionCode;
  } else if (options.authorizationCode) {
    params.code = options.authorizationCode;
  }
  const {
    clientSecret
  } = sdk.options;
  if (clientSecret) {
    params['client_secret'] = clientSecret;
  }
  return toQueryString(params).slice(1);
}
function postToTokenEndpoint(sdk, options, urls) {
  validateOptions(options);
  var data = getPostData(sdk, options);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  return httpRequest(sdk, {
    url: urls.tokenUrl,
    method: 'POST',
    args: data,
    headers
  });
}
function postRefreshToken(sdk, options, refreshToken) {
  return httpRequest(sdk, {
    url: refreshToken.tokenUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    args: Object.entries({
      client_id: options.clientId,
      grant_type: 'refresh_token',
      scope: refreshToken.scopes.join(' '),
      refresh_token: refreshToken.refreshToken
    }).map(function ([name, value]) {
      return name + '=' + encodeURIComponent(value);
    }).join('&')
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getWellKnown(sdk, issuer) {
  var authServerUri = issuer || sdk.options.issuer;
  return get(sdk, authServerUri + '/.well-known/openid-configuration', {
    cacheResponse: true
  });
}
function getKey(sdk, issuer, kid) {
  var httpCache = sdk.storageManager.getHttpCache(sdk.options.cookies);
  return getWellKnown(sdk, issuer).then(function (wellKnown) {
    var jwksUri = wellKnown['jwks_uri'];
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[jwksUri];
    if (cachedResponse && Date.now() / 1000 < cachedResponse.expiresAt) {
      var cachedKey = find(cachedResponse.response.keys, {
        kid: kid
      });
      if (cachedKey) {
        return cachedKey;
      }
    }
    httpCache.clearStorage(jwksUri);
    return get(sdk, jwksUri, {
      cacheResponse: true
    }).then(function (res) {
      var key = find(res.keys, {
        kid: kid
      });
      if (key) {
        return key;
      }
      throw new AuthSdkError('The key id, ' + kid + ', was not found in the server\'s keys');
    });
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function validateClaims(sdk, claims, validationParams) {
  const aud = validationParams.clientId;
  const iss = validationParams.issuer;
  const nonce = validationParams.nonce;
  const acr = validationParams.acrValues;
  if (!claims || !iss || !aud) {
    throw new AuthSdkError('The jwt, iss, and aud arguments are all required');
  }
  if (nonce && claims.nonce !== nonce) {
    throw new AuthSdkError('OAuth flow response nonce doesn\'t match request nonce');
  }
  const now = Math.floor(Date.now() / 1000);
  if (claims.iss !== iss) {
    throw new AuthSdkError('The issuer [' + claims.iss + '] ' + 'does not match [' + iss + ']');
  }
  if (claims.aud !== aud) {
    throw new AuthSdkError('The audience [' + claims.aud + '] ' + 'does not match [' + aud + ']');
  }
  if (acr && claims.acr !== acr) {
    throw new AuthSdkError('The acr [' + claims.acr + '] ' + 'does not match acr_values [' + acr + ']');
  }
  if (claims.iat > claims.exp) {
    throw new AuthSdkError('The JWT expired before it was issued');
  }
  if (!sdk.options.ignoreLifetime) {
    if (now - sdk.options.maxClockSkew > claims.exp) {
      throw new AuthSdkError('The JWT expired and is no longer valid');
    }
    if (claims.iat > now + sdk.options.maxClockSkew) {
      throw new AuthSdkError('The JWT was issued in the future');
    }
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function verifyToken(sdk, token, validationParams) {
  if (!token || !token.idToken) {
    throw new AuthSdkError('Only idTokens may be verified');
  }
  const jwt = decodeToken(token.idToken);
  const configuredIssuer = (validationParams === null || validationParams === void 0 ? void 0 : validationParams.issuer) || sdk.options.issuer;
  const {
    issuer
  } = await getWellKnown(sdk, configuredIssuer);
  const validationOptions = Object.assign({
    clientId: sdk.options.clientId,
    ignoreSignature: sdk.options.ignoreSignature
  }, validationParams, {
    issuer
  });
  validateClaims(sdk, jwt.payload, validationOptions);
  if (validationOptions.ignoreSignature == true || !sdk.features.isTokenVerifySupported()) {
    return token;
  }
  const key = await getKey(sdk, token.issuer, jwt.header.kid);
  const valid = await verifyToken$1(token.idToken, key);
  if (!valid) {
    throw new AuthSdkError('The token signature is not valid');
  }
  if (validationParams && validationParams.accessToken && token.claims.at_hash) {
    const hash = await getOidcHash(validationParams.accessToken);
    if (hash !== token.claims.at_hash) {
      throw new AuthSdkError('Token hash verification failed');
    }
  }
  return token;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function validateResponse(res, oauthParams) {
  if (res['error'] && res['error_description']) {
    throw new OAuthError(res['error'], res['error_description']);
  }
  if (res.state !== oauthParams.state) {
    throw new AuthSdkError('OAuth flow response state doesn\'t match request state');
  }
}
async function handleOAuthResponse(sdk, tokenParams, res, urls) {
  const pkce = sdk.options.pkce !== false;
  if (pkce && (res.code || res.interaction_code)) {
    return sdk.token.exchangeCodeForTokens(Object.assign({}, tokenParams, {
      authorizationCode: res.code,
      interactionCode: res.interaction_code
    }), urls);
  }
  tokenParams = tokenParams || getDefaultTokenParams(sdk);
  urls = urls || getOAuthUrls(sdk, tokenParams);
  let responseType = tokenParams.responseType || [];
  if (!Array.isArray(responseType) && responseType !== 'none') {
    responseType = [responseType];
  }
  let scopes;
  if (res.scope) {
    scopes = res.scope.split(' ');
  } else {
    scopes = clone(tokenParams.scopes);
  }
  const clientId = tokenParams.clientId || sdk.options.clientId;
  validateResponse(res, tokenParams);
  const tokenDict = {};
  const expiresIn = res.expires_in;
  const tokenType = res.token_type;
  const accessToken = res.access_token;
  const idToken = res.id_token;
  const refreshToken = res.refresh_token;
  const now = Math.floor(Date.now() / 1000);
  if (accessToken) {
    const accessJwt = sdk.token.decode(accessToken);
    tokenDict.accessToken = {
      accessToken: accessToken,
      claims: accessJwt.payload,
      expiresAt: Number(expiresIn) + now,
      tokenType: tokenType,
      scopes: scopes,
      authorizeUrl: urls.authorizeUrl,
      userinfoUrl: urls.userinfoUrl
    };
  }
  if (refreshToken) {
    tokenDict.refreshToken = {
      refreshToken: refreshToken,
      expiresAt: Number(expiresIn) + now,
      scopes: scopes,
      tokenUrl: urls.tokenUrl,
      authorizeUrl: urls.authorizeUrl,
      issuer: urls.issuer
    };
  }
  if (idToken) {
    const idJwt = sdk.token.decode(idToken);
    const idTokenObj = {
      idToken: idToken,
      claims: idJwt.payload,
      expiresAt: idJwt.payload.exp - idJwt.payload.iat + now,
      scopes: scopes,
      authorizeUrl: urls.authorizeUrl,
      issuer: urls.issuer,
      clientId: clientId
    };
    const validationParams = {
      clientId: clientId,
      issuer: urls.issuer,
      nonce: tokenParams.nonce,
      accessToken: accessToken,
      acrValues: tokenParams.acrValues
    };
    if (tokenParams.ignoreSignature !== undefined) {
      validationParams.ignoreSignature = tokenParams.ignoreSignature;
    }
    await verifyToken(sdk, idTokenObj, validationParams);
    tokenDict.idToken = idTokenObj;
  }
  if (responseType.indexOf('token') !== -1 && !tokenDict.accessToken) {
    throw new AuthSdkError('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');
  }
  if (responseType.indexOf('id_token') !== -1 && !tokenDict.idToken) {
    throw new AuthSdkError('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');
  }
  return {
    tokens: tokenDict,
    state: res.state,
    code: res.code,
    responseType
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function exchangeCodeForTokens(sdk, tokenParams, urls) {
  urls = urls || getOAuthUrls(sdk, tokenParams);
  tokenParams = Object.assign({}, getDefaultTokenParams(sdk), clone(tokenParams));
  const {
    authorizationCode,
    interactionCode,
    codeVerifier,
    clientId,
    redirectUri,
    scopes,
    ignoreSignature,
    state,
    acrValues
  } = tokenParams;
  var getTokenOptions = {
    clientId,
    redirectUri,
    authorizationCode,
    interactionCode,
    codeVerifier
  };
  return postToTokenEndpoint(sdk, getTokenOptions, urls).then(response => {
    const responseType = ['token'];
    if (scopes.indexOf('openid') !== -1) {
      responseType.push('id_token');
    }
    const handleResponseOptions = {
      clientId,
      redirectUri,
      scopes,
      responseType,
      ignoreSignature,
      acrValues
    };
    return handleOAuthResponse(sdk, handleResponseOptions, response, urls).then(response => {
      response.code = authorizationCode;
      response.state = state;
      return response;
    });
  }).finally(() => {
    sdk.transactionManager.clear();
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function getUserInfo(sdk, accessTokenObject, idTokenObject) {
  if (!accessTokenObject) {
    accessTokenObject = (await sdk.tokenManager.getTokens()).accessToken;
  }
  if (!idTokenObject) {
    idTokenObject = (await sdk.tokenManager.getTokens()).idToken;
  }
  if (!accessTokenObject || !isAccessToken(accessTokenObject)) {
    return Promise.reject(new AuthSdkError('getUserInfo requires an access token object'));
  }
  if (!idTokenObject || !isIDToken(idTokenObject)) {
    return Promise.reject(new AuthSdkError('getUserInfo requires an ID token object'));
  }
  return httpRequest(sdk, {
    url: accessTokenObject.userinfoUrl,
    method: 'GET',
    accessToken: accessTokenObject.accessToken
  }).then(userInfo => {
    if (userInfo.sub === idTokenObject.claims.sub) {
      return userInfo;
    }
    return Promise.reject(new AuthSdkError('getUserInfo request was rejected due to token mismatch'));
  }).catch(function (err) {
    if (err.xhr && (err.xhr.status === 401 || err.xhr.status === 403)) {
      var authenticateHeader;
      if (err.xhr.headers && isFunction(err.xhr.headers.get) && err.xhr.headers.get('WWW-Authenticate')) {
        authenticateHeader = err.xhr.headers.get('WWW-Authenticate');
      } else if (isFunction(err.xhr.getResponseHeader)) {
        authenticateHeader = err.xhr.getResponseHeader('WWW-Authenticate');
      }
      if (authenticateHeader) {
        var errorMatches = authenticateHeader.match(/error="(.*?)"/) || [];
        var errorDescriptionMatches = authenticateHeader.match(/error_description="(.*?)"/) || [];
        var error = errorMatches[1];
        var errorDescription = errorDescriptionMatches[1];
        if (error && errorDescription) {
          err = new OAuthError(error, errorDescription);
        }
      }
    }
    throw err;
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function addListener(eventTarget, name, fn) {
  if (eventTarget.addEventListener) {
    eventTarget.addEventListener(name, fn);
  } else {
    eventTarget.attachEvent('on' + name, fn);
  }
}
function removeListener(eventTarget, name, fn) {
  if (eventTarget.removeEventListener) {
    eventTarget.removeEventListener(name, fn);
  } else {
    eventTarget.detachEvent('on' + name, fn);
  }
}
function loadFrame(src) {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = src;
  return document.body.appendChild(iframe);
}
function loadPopup(src, options) {
  var title = options.popupTitle || 'External Identity Provider User Authentication';
  var appearance = 'toolbar=no, scrollbars=yes, resizable=yes, ' + 'top=100, left=500, width=600, height=600';
  return window.open(src, title, appearance);
}
function addPostMessageListener(sdk, timeout, state) {
  var responseHandler;
  var timeoutId;
  var msgReceivedOrTimeout = new Promise(function (resolve, reject) {
    responseHandler = function responseHandler(e) {
      if (!e.data || e.data.state !== state) {
        return;
      }
      if (e.origin !== sdk.getIssuerOrigin()) {
        return reject(new AuthSdkError('The request does not match client configuration'));
      }
      resolve(e.data);
    };
    addListener(window, 'message', responseHandler);
    timeoutId = setTimeout(function () {
      reject(new AuthSdkError('OAuth flow timed out'));
    }, timeout || 120000);
  });
  return msgReceivedOrTimeout.finally(function () {
    clearTimeout(timeoutId);
    removeListener(window, 'message', responseHandler);
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function assertPKCESupport(sdk) {
  if (!sdk.features.isPKCESupported()) {
    var errorMessage = 'PKCE requires a modern browser with encryption support running in a secure context.';
    if (!sdk.features.isHTTPS()) {
      errorMessage += '\nThe current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol.';
    }
    if (!sdk.features.hasTextEncoder()) {
      errorMessage += '\n"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.';
    }
    throw new AuthSdkError(errorMessage);
  }
}
async function validateCodeChallengeMethod(sdk, codeChallengeMethod) {
  codeChallengeMethod = codeChallengeMethod || sdk.options.codeChallengeMethod || DEFAULT_CODE_CHALLENGE_METHOD;
  const wellKnownResponse = await getWellKnown(sdk);
  var methods = wellKnownResponse['code_challenge_methods_supported'] || [];
  if (methods.indexOf(codeChallengeMethod) === -1) {
    throw new AuthSdkError('Invalid code_challenge_method');
  }
  return codeChallengeMethod;
}
async function preparePKCE(sdk, tokenParams) {
  let {
    codeVerifier,
    codeChallenge,
    codeChallengeMethod
  } = tokenParams;
  codeChallenge = codeChallenge || sdk.options.codeChallenge;
  if (!codeChallenge) {
    assertPKCESupport(sdk);
    codeVerifier = codeVerifier || PKCE.generateVerifier();
    codeChallenge = await PKCE.computeChallenge(codeVerifier);
  }
  codeChallengeMethod = await validateCodeChallengeMethod(sdk, codeChallengeMethod);
  tokenParams = Object.assign(Object.assign({}, tokenParams), {
    responseType: 'code',
    codeVerifier,
    codeChallenge,
    codeChallengeMethod
  });
  return tokenParams;
}
async function prepareTokenParams(sdk, tokenParams = {}) {
  const defaults = getDefaultTokenParams(sdk);
  tokenParams = Object.assign(Object.assign({}, defaults), tokenParams);
  if (tokenParams.pkce === false) {
    return tokenParams;
  }
  return preparePKCE(sdk, tokenParams);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function convertTokenParamsToOAuthParams(tokenParams) {
  if (!tokenParams.clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to get a token');
  }
  if (isString(tokenParams.responseType) && tokenParams.responseType.indexOf(' ') !== -1) {
    throw new AuthSdkError('Multiple OAuth responseTypes must be defined as an array');
  }
  var oauthParams = {
    'client_id': tokenParams.clientId,
    'code_challenge': tokenParams.codeChallenge,
    'code_challenge_method': tokenParams.codeChallengeMethod,
    'display': tokenParams.display,
    'idp': tokenParams.idp,
    'idp_scope': tokenParams.idpScope,
    'login_hint': tokenParams.loginHint,
    'max_age': tokenParams.maxAge,
    'nonce': tokenParams.nonce,
    'prompt': tokenParams.prompt,
    'redirect_uri': tokenParams.redirectUri,
    'response_mode': tokenParams.responseMode,
    'response_type': tokenParams.responseType,
    'sessionToken': tokenParams.sessionToken,
    'state': tokenParams.state,
    'acr_values': tokenParams.acrValues,
    'enroll_amr_values': tokenParams.enrollAmrValues
  };
  oauthParams = removeNils(oauthParams);
  ['idp_scope', 'response_type', 'enroll_amr_values'].forEach(function (mayBeArray) {
    if (Array.isArray(oauthParams[mayBeArray])) {
      oauthParams[mayBeArray] = oauthParams[mayBeArray].join(' ');
    }
  });
  if (tokenParams.responseType.indexOf('id_token') !== -1 && tokenParams.scopes.indexOf('openid') === -1) {
    throw new AuthSdkError('openid scope must be specified in the scopes argument when requesting an id_token');
  } else if (tokenParams.scopes) {
    oauthParams.scope = tokenParams.scopes.join(' ');
  }
  return oauthParams;
}
function buildAuthorizeParams(tokenParams) {
  var oauthQueryParams = convertTokenParamsToOAuthParams(tokenParams);
  return toQueryString(Object.assign(Object.assign({}, oauthQueryParams), tokenParams.extraParams && Object.assign({}, tokenParams.extraParams)));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getToken(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new AuthSdkError('As of version 3.0, "getToken" takes only a single set of options'));
  }
  options = options || {};
  const popupWindow = options.popupWindow;
  options.popupWindow = undefined;
  return prepareTokenParams(sdk, options).then(function (tokenParams) {
    var sessionTokenOverrides = {
      prompt: 'none',
      responseMode: 'okta_post_message',
      display: null
    };
    var idpOverrides = {
      display: 'popup'
    };
    if (options.sessionToken) {
      Object.assign(tokenParams, sessionTokenOverrides);
    } else if (options.idp) {
      Object.assign(tokenParams, idpOverrides);
    }
    var requestUrl, endpoint, urls;
    urls = getOAuthUrls(sdk, tokenParams);
    endpoint = options.codeVerifier ? urls.tokenUrl : urls.authorizeUrl;
    requestUrl = endpoint + buildAuthorizeParams(tokenParams);
    var flowType;
    if (tokenParams.sessionToken || tokenParams.display === null) {
      flowType = 'IFRAME';
    } else if (tokenParams.display === 'popup') {
      flowType = 'POPUP';
    } else {
      flowType = 'IMPLICIT';
    }
    switch (flowType) {
      case 'IFRAME':
        var iframePromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        var iframeEl = loadFrame(requestUrl);
        return iframePromise.then(function (res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function () {
          var _a;
          if (document.body.contains(iframeEl)) {
            (_a = iframeEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(iframeEl);
          }
        });
      case 'POPUP':
        var oauthPromise;
        if (tokenParams.responseMode === 'okta_post_message') {
          if (!sdk.features.isPopupPostMessageSupported()) {
            throw new AuthSdkError('This browser doesn\'t have full postMessage support');
          }
          oauthPromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        }
        if (popupWindow) {
          popupWindow.location.assign(requestUrl);
        }
        var popupPromise = new Promise(function (resolve, reject) {
          var closePoller = setInterval(function () {
            if (!popupWindow || popupWindow.closed) {
              clearInterval(closePoller);
              reject(new AuthSdkError('Unable to parse OAuth flow response'));
            }
          }, 100);
          oauthPromise.then(function (res) {
            clearInterval(closePoller);
            resolve(res);
          }).catch(function (err) {
            clearInterval(closePoller);
            reject(err);
          });
        });
        return popupPromise.then(function (res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function () {
          if (popupWindow && !popupWindow.closed) {
            popupWindow.close();
          }
        });
      default:
        throw new AuthSdkError('The full page redirect flow is not supported');
    }
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getWithoutPrompt(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new AuthSdkError('As of version 3.0, "getWithoutPrompt" takes only a single set of options'));
  }
  options = clone(options) || {};
  Object.assign(options, {
    prompt: 'none',
    responseMode: 'okta_post_message',
    display: null
  });
  return getToken(sdk, options);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getWithPopup(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new AuthSdkError('As of version 3.0, "getWithPopup" takes only a single set of options'));
  }
  const popupWindow = loadPopup('/', options);
  options = clone(options) || {};
  Object.assign(options, {
    display: 'popup',
    responseMode: 'okta_post_message',
    popupWindow
  });
  return getToken(sdk, options);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function getWithRedirect(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new AuthSdkError('As of version 3.0, "getWithRedirect" takes only a single set of options'));
  }
  options = clone(options) || {};
  const tokenParams = await prepareTokenParams(sdk, options);
  const meta = createOAuthMeta(sdk, tokenParams);
  const requestUrl = meta.urls.authorizeUrl + buildAuthorizeParams(tokenParams);
  sdk.transactionManager.save(meta);
  if (sdk.options.setLocation) {
    sdk.options.setLocation(requestUrl);
  } else {
    window.location.assign(requestUrl);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function removeHash(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();
  var nativeDoc = sdk.token.parseFromUrl._getDocument();
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.search);
  } else {
    nativeLoc.hash = '';
  }
}
function removeSearch(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();
  var nativeDoc = sdk.token.parseFromUrl._getDocument();
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.hash);
  } else {
    nativeLoc.search = '';
  }
}
function getResponseMode(sdk) {
  var defaultResponseMode = sdk.options.pkce ? 'query' : 'fragment';
  var responseMode = sdk.options.responseMode || defaultResponseMode;
  return responseMode;
}
function parseOAuthResponseFromUrl(sdk, options) {
  options = options || {};
  if (isString(options)) {
    options = {
      url: options
    };
  } else {
    options = options;
  }
  var url = options.url;
  var responseMode = options.responseMode || getResponseMode(sdk);
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  var paramStr;
  if (responseMode === 'query') {
    paramStr = url ? url.substring(url.indexOf('?')) : nativeLoc.search;
  } else {
    paramStr = url ? url.substring(url.indexOf('#')) : nativeLoc.hash;
  }
  if (!paramStr) {
    throw new AuthSdkError('Unable to parse a token from the url');
  }
  return urlParamsToObject(paramStr);
}
function cleanOAuthResponseFromUrl(sdk, options) {
  const responseMode = options.responseMode || getResponseMode(sdk);
  responseMode === 'query' ? removeSearch(sdk) : removeHash(sdk);
}
async function parseFromUrl(sdk, options) {
  options = options || {};
  if (isString(options)) {
    options = {
      url: options
    };
  } else {
    options = options;
  }
  const res = parseOAuthResponseFromUrl(sdk, options);
  const state = res.state;
  const oauthParams = sdk.transactionManager.load({
    state
  });
  if (!oauthParams) {
    if (sdk.options.pkce) {
      throw new AuthSdkError('Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.', undefined);
    }
    throw new AuthSdkError('Unable to retrieve OAuth redirect params from storage');
  }
  const urls = oauthParams.urls;
  delete oauthParams.urls;
  if (!options.url) {
    cleanOAuthResponseFromUrl(sdk, options);
  }
  return handleOAuthResponse(sdk, oauthParams, res, urls).catch(err => {
    if (!isInteractionRequiredError(err)) {
      sdk.transactionManager.clear({
        state
      });
    }
    throw err;
  }).then(res => {
    sdk.transactionManager.clear({
      state
    });
    return res;
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isSameRefreshToken(a, b) {
  return a.refreshToken === b.refreshToken;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function renewTokensWithRefresh(sdk, tokenParams, refreshTokenObject) {
  const {
    clientId
  } = sdk.options;
  if (!clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to renew tokens');
  }
  try {
    const renewTokenParams = Object.assign({}, tokenParams, {
      clientId
    });
    const tokenResponse = await postRefreshToken(sdk, renewTokenParams, refreshTokenObject);
    const urls = getOAuthUrls(sdk, tokenParams);
    const {
      tokens
    } = await handleOAuthResponse(sdk, renewTokenParams, tokenResponse, urls);
    const {
      refreshToken
    } = tokens;
    if (refreshToken && !isSameRefreshToken(refreshToken, refreshTokenObject)) {
      sdk.tokenManager.updateRefreshToken(refreshToken);
    }
    return tokens;
  } catch (err) {
    if (isRefreshTokenInvalidError(err)) {
      sdk.tokenManager.removeRefreshToken();
    }
    throw err;
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function throwInvalidTokenError() {
  throw new AuthSdkError('Renew must be passed a token with an array of scopes and an accessToken or idToken');
}
function getSingleToken(originalToken, tokens) {
  if (isIDToken(originalToken)) {
    return tokens.idToken;
  }
  if (isAccessToken(originalToken)) {
    return tokens.accessToken;
  }
  throwInvalidTokenError();
}
async function renewToken(sdk, token) {
  if (!isIDToken(token) && !isAccessToken(token)) {
    throwInvalidTokenError();
  }
  let tokens = sdk.tokenManager.getTokensSync();
  if (tokens.refreshToken) {
    tokens = await renewTokensWithRefresh(sdk, {
      scopes: token.scopes
    }, tokens.refreshToken);
    return getSingleToken(token, tokens);
  }
  var responseType;
  if (sdk.options.pkce) {
    responseType = 'code';
  } else if (isAccessToken(token)) {
    responseType = 'token';
  } else {
    responseType = 'id_token';
  }
  const {
    scopes,
    authorizeUrl,
    userinfoUrl,
    issuer
  } = token;
  return getWithoutPrompt(sdk, {
    responseType,
    scopes,
    authorizeUrl,
    userinfoUrl,
    issuer
  }).then(function (res) {
    return getSingleToken(token, res.tokens);
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function renewTokens(sdk, options) {
  var _a;
  const tokens = (_a = options === null || options === void 0 ? void 0 : options.tokens) !== null && _a !== void 0 ? _a : sdk.tokenManager.getTokensSync();
  if (tokens.refreshToken) {
    return renewTokensWithRefresh(sdk, options || {}, tokens.refreshToken);
  }
  if (!tokens.accessToken && !tokens.idToken) {
    throw new AuthSdkError('renewTokens() was called but there is no existing token');
  }
  const accessToken = tokens.accessToken || {};
  const idToken = tokens.idToken || {};
  const scopes = accessToken.scopes || idToken.scopes;
  if (!scopes) {
    throw new AuthSdkError('renewTokens: invalid tokens: could not read scopes');
  }
  const authorizeUrl = accessToken.authorizeUrl || idToken.authorizeUrl;
  if (!authorizeUrl) {
    throw new AuthSdkError('renewTokens: invalid tokens: could not read authorizeUrl');
  }
  const userinfoUrl = accessToken.userinfoUrl || sdk.options.userinfoUrl;
  const issuer = idToken.issuer || sdk.options.issuer;
  options = Object.assign({
    scopes,
    authorizeUrl,
    userinfoUrl,
    issuer
  }, options);
  if (sdk.options.pkce) {
    options.responseType = 'code';
  } else {
    const {
      responseType
    } = getDefaultTokenParams(sdk);
    options.responseType = responseType;
  }
  return getWithoutPrompt(sdk, options).then(res => res.tokens);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function revokeToken(sdk, token) {
  let accessToken = '';
  let refreshToken = '';
  if (token) {
    accessToken = token.accessToken;
    refreshToken = token.refreshToken;
  }
  if (!accessToken && !refreshToken) {
    throw new AuthSdkError('A valid access or refresh token object is required');
  }
  var clientId = sdk.options.clientId;
  var clientSecret = sdk.options.clientSecret;
  if (!clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to revoke a token');
  }
  var revokeUrl = getOAuthUrls(sdk).revokeUrl;
  var args = toQueryString({
    token_type_hint: refreshToken ? 'refresh_token' : 'access_token',
    token: refreshToken || accessToken
  }).slice(1);
  var creds = clientSecret ? b(`${clientId}:${clientSecret}`) : b(clientId);
  return post(sdk, revokeUrl, args, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + creds
    }
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const hintMap = {
  accessToken: 'access_token',
  idToken: 'id_token',
  refreshToken: 'refresh_token'
};
async function oidcIntrospect(sdk, kind, token) {
  var _a;
  let issuer;
  let clientId = sdk.options.clientId;
  let clientSecret = sdk.options.clientSecret;
  if (!token) {
    token = sdk.tokenManager.getTokens()[kind];
  }
  if (!token) {
    throw new AuthSdkError(`unable to find ${kind} in storage or fn params`);
  }
  if (kind !== TokenKind.ACCESS) {
    issuer = token === null || token === void 0 ? void 0 : token.issuer;
  } else {
    issuer = (_a = token === null || token === void 0 ? void 0 : token.claims) === null || _a === void 0 ? void 0 : _a.iss;
  }
  issuer !== null && issuer !== void 0 ? issuer : issuer = sdk.options.issuer;
  if (!clientId) {
    throw new AuthSdkError('A clientId must be specified in the OktaAuth constructor to introspect a token');
  }
  if (!issuer) {
    throw new AuthSdkError('Unable to find issuer');
  }
  const {
    introspection_endpoint: introspectUrl
  } = await getWellKnown(sdk, issuer);
  const authHeader = clientSecret ? b(`${clientId}:${clientSecret}`) : b(clientId);
  const args = toQueryString({
    token_type_hint: hintMap[kind],
    token: token[kind]
  }).slice(1);
  return post(sdk, introspectUrl, args, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + authHeader
    }
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createEnrollAuthenticatorMeta(sdk, params) {
  const issuer = sdk.options.issuer;
  const urls = getOAuthUrls(sdk, params);
  const oauthMeta = {
    issuer,
    urls,
    clientId: params.clientId,
    redirectUri: params.redirectUri,
    responseType: params.responseType,
    responseMode: params.responseMode,
    state: params.state,
    acrValues: params.acrValues,
    enrollAmrValues: params.enrollAmrValues
  };
  return oauthMeta;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getDefaultEnrollAuthenticatorParams(sdk) {
  const {
    clientId,
    redirectUri,
    responseMode,
    state
  } = sdk.options;
  const defaultRedirectUri = isBrowser() ? window.location.href : undefined;
  return removeNils({
    clientId,
    redirectUri: redirectUri || defaultRedirectUri,
    responseMode,
    state: state || generateState(),
    responseType: 'none',
    prompt: 'enroll_authenticator'
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function prepareParams(params) {
  params = Object.assign(Object.assign({}, params), {
    responseType: 'none',
    prompt: 'enroll_authenticator',
    maxAge: 0
  });
  if (!params.enrollAmrValues) {
    throw new AuthSdkError('enroll_amr_values must be specified');
  }
  if (!params.acrValues) {
    throw new AuthSdkError('acr_values must be specified');
  }
  delete params.scopes;
  delete params.nonce;
  return params;
}
function prepareEnrollAuthenticatorParams(sdk, options) {
  return prepareParams(Object.assign(Object.assign({}, getDefaultEnrollAuthenticatorParams(sdk)), options));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function enrollAuthenticator(sdk, options) {
  options = clone(options) || {};
  const params = prepareEnrollAuthenticatorParams(sdk, options);
  const meta = createEnrollAuthenticatorMeta(sdk, params);
  const requestUrl = meta.urls.authorizeUrl + buildAuthorizeParams(params);
  sdk.transactionManager.save(meta);
  if (sdk.options.setLocation) {
    sdk.options.setLocation(requestUrl);
  } else {
    window.location.assign(requestUrl);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createTokenAPI(sdk, queue) {
  const useQueue = method => {
    return PromiseQueue.prototype.push.bind(queue, method, null);
  };
  const getWithRedirectFn = useQueue(getWithRedirect.bind(null, sdk));
  const parseFromUrlFn = useQueue(parseFromUrl.bind(null, sdk));
  const parseFromUrlApi = Object.assign(parseFromUrlFn, {
    _getHistory: function () {
      return window.history;
    },
    _getLocation: function () {
      return window.location;
    },
    _getDocument: function () {
      return window.document;
    }
  });
  const token = {
    prepareTokenParams: prepareTokenParams.bind(null, sdk),
    exchangeCodeForTokens: exchangeCodeForTokens.bind(null, sdk),
    getWithoutPrompt: getWithoutPrompt.bind(null, sdk),
    getWithPopup: getWithPopup.bind(null, sdk),
    getWithRedirect: getWithRedirectFn,
    parseFromUrl: parseFromUrlApi,
    decode: decodeToken,
    revoke: revokeToken.bind(null, sdk),
    renew: renewToken.bind(null, sdk),
    renewTokensWithRefresh: renewTokensWithRefresh.bind(null, sdk),
    renewTokens: renewTokens.bind(null, sdk),
    getUserInfo: (accessTokenObject, idTokenObject) => {
      return getUserInfo(sdk, accessTokenObject, idTokenObject);
    },
    verify: verifyToken.bind(null, sdk),
    isLoginRedirect: isLoginRedirect.bind(null, sdk),
    introspect: oidcIntrospect.bind(null, sdk)
  };
  const toWrap = ['getWithoutPrompt', 'getWithPopup', 'revoke', 'renew', 'renewTokensWithRefresh', 'renewTokens'];
  toWrap.forEach(key => {
    token[key] = useQueue(token[key]);
  });
  return token;
}
function createEndpoints(sdk) {
  return {
    authorize: {
      enrollAuthenticator: enrollAuthenticator.bind(null, sdk)
    }
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function validateToken(token, type) {
  if (!isIDToken(token) && !isAccessToken(token) && !isRefreshToken(token)) {
    throw new AuthSdkError('Token must be an Object with scopes, expiresAt, and one of: an idToken, accessToken, or refreshToken property');
  }
  if (type === 'accessToken' && !isAccessToken(token)) {
    throw new AuthSdkError('invalid accessToken');
  }
  if (type === 'idToken' && !isIDToken(token)) {
    throw new AuthSdkError('invalid idToken');
  }
  if (type === 'refreshToken' && !isRefreshToken(token)) {
    throw new AuthSdkError('invalid refreshToken');
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SdkClock {
  constructor(localOffset) {
    this.localOffset = parseInt(localOffset || 0);
  }
  static create() {
    var localOffset = 0;
    return new SdkClock(localOffset);
  }
  now() {
    var now = (Date.now() + this.localOffset) / 1000;
    return now;
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const EVENT_EXPIRED = 'expired';
const EVENT_RENEWED = 'renewed';
const EVENT_ADDED = 'added';
const EVENT_REMOVED = 'removed';
const EVENT_ERROR = 'error';
const EVENT_SET_STORAGE = 'set_storage';

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const DEFAULT_OPTIONS = {
  autoRenew: true,
  autoRemove: true,
  syncStorage: true,
  clearPendingRemoveTokens: true,
  storage: undefined,
  expireEarlySeconds: 30,
  storageKey: TOKEN_STORAGE_NAME
};
function defaultState() {
  return {
    expireTimeouts: {},
    renewPromise: null
  };
}
class TokenManager {
  constructor(sdk, options = {}) {
    this.sdk = sdk;
    this.emitter = sdk.emitter;
    if (!this.emitter) {
      throw new AuthSdkError('Emitter should be initialized before TokenManager');
    }
    options = Object.assign({}, DEFAULT_OPTIONS, removeNils(options));
    if (!isLocalhost()) {
      options.expireEarlySeconds = DEFAULT_OPTIONS.expireEarlySeconds;
    }
    this.options = options;
    const storageOptions = removeNils({
      storageKey: options.storageKey,
      secure: options.secure
    });
    if (typeof options.storage === 'object') {
      storageOptions.storageProvider = options.storage;
    } else if (options.storage) {
      storageOptions.storageType = options.storage;
    }
    this.storage = sdk.storageManager.getTokenStorage(Object.assign(Object.assign({}, storageOptions), {
      useSeparateCookies: true
    }));
    this.clock = SdkClock.create();
    this.state = defaultState();
  }
  on(event, handler, context) {
    if (context) {
      this.emitter.on(event, handler, context);
    } else {
      this.emitter.on(event, handler);
    }
  }
  off(event, handler) {
    if (handler) {
      this.emitter.off(event, handler);
    } else {
      this.emitter.off(event);
    }
  }
  start() {
    if (this.options.clearPendingRemoveTokens) {
      this.clearPendingRemoveTokens();
    }
    this.setExpireEventTimeoutAll();
    this.state.started = true;
  }
  stop() {
    this.clearExpireEventTimeoutAll();
    this.state.started = false;
  }
  isStarted() {
    return !!this.state.started;
  }
  getOptions() {
    return clone(this.options);
  }
  getExpireTime(token) {
    const expireEarlySeconds = this.options.expireEarlySeconds || 0;
    var expireTime = token.expiresAt - expireEarlySeconds;
    return expireTime;
  }
  hasExpired(token) {
    var expireTime = this.getExpireTime(token);
    return expireTime <= this.clock.now();
  }
  emitExpired(key, token) {
    this.emitter.emit(EVENT_EXPIRED, key, token);
  }
  emitRenewed(key, freshToken, oldToken) {
    this.emitter.emit(EVENT_RENEWED, key, freshToken, oldToken);
  }
  emitAdded(key, token) {
    this.emitter.emit(EVENT_ADDED, key, token);
  }
  emitRemoved(key, token) {
    this.emitter.emit(EVENT_REMOVED, key, token);
  }
  emitError(error) {
    this.emitter.emit(EVENT_ERROR, error);
  }
  clearExpireEventTimeout(key) {
    clearTimeout(this.state.expireTimeouts[key]);
    delete this.state.expireTimeouts[key];
    this.state.renewPromise = null;
  }
  clearExpireEventTimeoutAll() {
    var expireTimeouts = this.state.expireTimeouts;
    for (var key in expireTimeouts) {
      if (!Object.prototype.hasOwnProperty.call(expireTimeouts, key)) {
        continue;
      }
      this.clearExpireEventTimeout(key);
    }
  }
  setExpireEventTimeout(key, token) {
    if (isRefreshToken(token)) {
      return;
    }
    var expireTime = this.getExpireTime(token);
    var expireEventWait = Math.max(expireTime - this.clock.now(), 0) * 1000;
    this.clearExpireEventTimeout(key);
    var expireEventTimeout = setTimeout(() => {
      this.emitExpired(key, token);
    }, expireEventWait);
    this.state.expireTimeouts[key] = expireEventTimeout;
  }
  setExpireEventTimeoutAll() {
    var tokenStorage = this.storage.getStorage();
    for (var key in tokenStorage) {
      if (!Object.prototype.hasOwnProperty.call(tokenStorage, key)) {
        continue;
      }
      var token = tokenStorage[key];
      this.setExpireEventTimeout(key, token);
    }
  }
  resetExpireEventTimeoutAll() {
    this.clearExpireEventTimeoutAll();
    this.setExpireEventTimeoutAll();
  }
  add(key, token) {
    var tokenStorage = this.storage.getStorage();
    validateToken(token);
    tokenStorage[key] = token;
    this.storage.setStorage(tokenStorage);
    this.emitSetStorageEvent();
    this.emitAdded(key, token);
    this.setExpireEventTimeout(key, token);
  }
  getSync(key) {
    var tokenStorage = this.storage.getStorage();
    return tokenStorage[key];
  }
  async get(key) {
    return this.getSync(key);
  }
  getTokensSync() {
    const tokens = {};
    const tokenStorage = this.storage.getStorage();
    Object.keys(tokenStorage).forEach(key => {
      const token = tokenStorage[key];
      if (isAccessToken(token)) {
        tokens.accessToken = token;
      } else if (isIDToken(token)) {
        tokens.idToken = token;
      } else if (isRefreshToken(token)) {
        tokens.refreshToken = token;
      }
    });
    return tokens;
  }
  async getTokens() {
    return this.getTokensSync();
  }
  getStorageKeyByType(type) {
    const tokenStorage = this.storage.getStorage();
    const key = Object.keys(tokenStorage).filter(key => {
      const token = tokenStorage[key];
      return isAccessToken(token) && type === 'accessToken' || isIDToken(token) && type === 'idToken' || isRefreshToken(token) && type === 'refreshToken';
    })[0];
    return key;
  }
  getTokenType(token) {
    if (isAccessToken(token)) {
      return 'accessToken';
    }
    if (isIDToken(token)) {
      return 'idToken';
    }
    if (isRefreshToken(token)) {
      return 'refreshToken';
    }
    throw new AuthSdkError('Unknown token type');
  }
  emitSetStorageEvent() {
    if (isIE11OrLess()) {
      const storage = this.storage.getStorage();
      this.emitter.emit(EVENT_SET_STORAGE, storage);
    }
  }
  getStorage() {
    return this.storage;
  }
  setTokens(tokens, accessTokenCb, idTokenCb, refreshTokenCb) {
    const handleTokenCallback = (key, token) => {
      const type = this.getTokenType(token);
      if (type === 'accessToken') {
        accessTokenCb && accessTokenCb(key, token);
      } else if (type === 'idToken') {
        idTokenCb && idTokenCb(key, token);
      } else if (type === 'refreshToken') {
        refreshTokenCb && refreshTokenCb(key, token);
      }
    };
    const handleAdded = (key, token) => {
      this.emitAdded(key, token);
      this.setExpireEventTimeout(key, token);
      handleTokenCallback(key, token);
    };
    const handleRenewed = (key, token, oldToken) => {
      this.emitRenewed(key, token, oldToken);
      this.clearExpireEventTimeout(key);
      this.setExpireEventTimeout(key, token);
      handleTokenCallback(key, token);
    };
    const handleRemoved = (key, token) => {
      this.clearExpireEventTimeout(key);
      this.emitRemoved(key, token);
      handleTokenCallback(key, token);
    };
    const types = ['idToken', 'accessToken', 'refreshToken'];
    const existingTokens = this.getTokensSync();
    types.forEach(type => {
      const token = tokens[type];
      if (token) {
        validateToken(token, type);
      }
    });
    const storage = types.reduce((storage, type) => {
      const token = tokens[type];
      if (token) {
        const storageKey = this.getStorageKeyByType(type) || type;
        storage[storageKey] = token;
      }
      return storage;
    }, {});
    this.storage.setStorage(storage);
    this.emitSetStorageEvent();
    types.forEach(type => {
      const newToken = tokens[type];
      const existingToken = existingTokens[type];
      const storageKey = this.getStorageKeyByType(type) || type;
      if (newToken && existingToken) {
        handleRemoved(storageKey, existingToken);
        handleAdded(storageKey, newToken);
        handleRenewed(storageKey, newToken, existingToken);
      } else if (newToken) {
        handleAdded(storageKey, newToken);
      } else if (existingToken) {
        handleRemoved(storageKey, existingToken);
      }
    });
  }
  remove(key) {
    this.clearExpireEventTimeout(key);
    var tokenStorage = this.storage.getStorage();
    var removedToken = tokenStorage[key];
    delete tokenStorage[key];
    this.storage.setStorage(tokenStorage);
    this.emitSetStorageEvent();
    this.emitRemoved(key, removedToken);
  }
  async renewToken(token) {
    var _a;
    return (_a = this.sdk.token) === null || _a === void 0 ? void 0 : _a.renew(token);
  }
  validateToken(token) {
    return validateToken(token);
  }
  renew(key) {
    if (this.state.renewPromise) {
      return this.state.renewPromise;
    }
    try {
      var token = this.getSync(key);
      if (!token) {
        throw new AuthSdkError('The tokenManager has no token for the key: ' + key);
      }
    } catch (e) {
      return Promise.reject(e);
    }
    this.clearExpireEventTimeout(key);
    const renewPromise = this.state.renewPromise = this.sdk.token.renewTokens().then(tokens => {
      this.setTokens(tokens);
      const tokenType = this.getTokenType(token);
      return tokens[tokenType];
    }).catch(err => {
      this.remove(key);
      err.tokenKey = key;
      this.emitError(err);
      throw err;
    }).finally(() => {
      this.state.renewPromise = null;
    });
    return renewPromise;
  }
  clear() {
    const tokens = this.getTokensSync();
    this.clearExpireEventTimeoutAll();
    this.storage.clearStorage();
    this.emitSetStorageEvent();
    Object.keys(tokens).forEach(key => {
      this.emitRemoved(key, tokens[key]);
    });
  }
  clearPendingRemoveTokens() {
    const tokenStorage = this.storage.getStorage();
    const removedTokens = {};
    Object.keys(tokenStorage).forEach(key => {
      if (tokenStorage[key].pendingRemove) {
        removedTokens[key] = tokenStorage[key];
        delete tokenStorage[key];
      }
    });
    this.storage.setStorage(tokenStorage);
    this.emitSetStorageEvent();
    Object.keys(removedTokens).forEach(key => {
      this.clearExpireEventTimeout(key);
      this.emitRemoved(key, removedTokens[key]);
    });
  }
  updateRefreshToken(token) {
    const key = this.getStorageKeyByType('refreshToken') || REFRESH_TOKEN_STORAGE_KEY;
    var tokenStorage = this.storage.getStorage();
    validateToken(token);
    tokenStorage[key] = token;
    this.storage.setStorage(tokenStorage);
    this.emitSetStorageEvent();
  }
  removeRefreshToken() {
    const key = this.getStorageKeyByType('refreshToken') || REFRESH_TOKEN_STORAGE_KEY;
    this.remove(key);
  }
  addPendingRemoveFlags() {
    const tokens = this.getTokensSync();
    Object.keys(tokens).forEach(key => {
      tokens[key].pendingRemove = true;
    });
    this.setTokens(tokens);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var storageUtil = {
  browserHasLocalStorage: function () {
    try {
      var storage = this.getLocalStorage();
      return this.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  browserHasSessionStorage: function () {
    try {
      var storage = this.getSessionStorage();
      return this.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  testStorageType: function (storageType) {
    var supported = false;
    switch (storageType) {
      case 'sessionStorage':
        supported = this.browserHasSessionStorage();
        break;
      case 'localStorage':
        supported = this.browserHasLocalStorage();
        break;
      case 'cookie':
      case 'memory':
        supported = true;
        break;
      default:
        supported = false;
        break;
    }
    return supported;
  },
  getStorageByType: function (storageType, options) {
    let storageProvider;
    switch (storageType) {
      case 'sessionStorage':
        storageProvider = this.getSessionStorage();
        break;
      case 'localStorage':
        storageProvider = this.getLocalStorage();
        break;
      case 'cookie':
        storageProvider = this.getCookieStorage(options);
        break;
      case 'memory':
        storageProvider = this.getInMemoryStorage();
        break;
      default:
        throw new AuthSdkError(`Unrecognized storage option: ${storageType}`);
    }
    return storageProvider;
  },
  findStorageType: function (types) {
    let curType;
    let nextType;
    types = types.slice();
    curType = types.shift();
    nextType = types.length ? types[0] : null;
    if (!nextType) {
      return curType;
    }
    if (this.testStorageType(curType)) {
      return curType;
    }
    warn(`This browser doesn't support ${curType}. Switching to ${nextType}.`);
    return this.findStorageType(types);
  },
  getLocalStorage: function () {
    if (isIE11OrLess() && !window.onstorage) {
      window.onstorage = function () {};
    }
    return localStorage;
  },
  getSessionStorage: function () {
    return sessionStorage;
  },
  getCookieStorage: function (options) {
    const secure = options.secure;
    const sameSite = options.sameSite;
    const sessionCookie = options.sessionCookie;
    if (typeof secure === 'undefined' || typeof sameSite === 'undefined') {
      throw new AuthSdkError('getCookieStorage: "secure" and "sameSite" options must be provided');
    }
    const storage = {
      getItem: this.storage.get,
      setItem: (key, value, expiresAt = '2200-01-01T00:00:00.000Z') => {
        expiresAt = sessionCookie ? null : expiresAt;
        this.storage.set(key, value, expiresAt, {
          secure: secure,
          sameSite: sameSite
        });
      },
      removeItem: key => {
        this.storage.delete(key);
      }
    };
    if (!options.useSeparateCookies) {
      return storage;
    }
    return {
      getItem: function (key) {
        var data = storage.getItem();
        var value = {};
        Object.keys(data).forEach(k => {
          if (k.indexOf(key) === 0) {
            value[k.replace(`${key}_`, '')] = JSON.parse(data[k]);
          }
        });
        return JSON.stringify(value);
      },
      setItem: function (key, value) {
        var existingValues = JSON.parse(this.getItem(key));
        value = JSON.parse(value);
        Object.keys(value).forEach(k => {
          var storageKey = key + '_' + k;
          var valueToStore = JSON.stringify(value[k]);
          storage.setItem(storageKey, valueToStore);
          delete existingValues[k];
        });
        Object.keys(existingValues).forEach(k => {
          storage.removeItem(key + '_' + k);
        });
      },
      removeItem: function (key) {
        var existingValues = JSON.parse(this.getItem(key));
        Object.keys(existingValues).forEach(k => {
          storage.removeItem(key + '_' + k);
        });
      }
    };
  },
  inMemoryStore: {},
  getInMemoryStorage: function () {
    return {
      getItem: key => {
        return this.inMemoryStore[key];
      },
      setItem: (key, value) => {
        this.inMemoryStore[key] = value;
      }
    };
  },
  testStorage: function (storage) {
    var key = 'okta-test-storage';
    try {
      storage.setItem(key, key);
      storage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  },
  storage: {
    set: function (name, value, expiresAt, options) {
      const {
        sameSite,
        secure
      } = options;
      if (typeof secure === 'undefined' || typeof sameSite === 'undefined') {
        throw new AuthSdkError('storage.set: "secure" and "sameSite" options must be provided');
      }
      var cookieOptions = {
        path: options.path || '/',
        secure,
        sameSite
      };
      if (!!Date.parse(expiresAt)) {
        cookieOptions.expires = new Date(expiresAt);
      }
      api$1.set(name, value, cookieOptions);
      return this.get(name);
    },
    get: function (name) {
      if (!arguments.length) {
        return api$1.get();
      }
      return api$1.get(name);
    },
    delete: function (name) {
      return api$1.remove(name, {
        path: '/'
      });
    }
  }
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function provideOriginalUri(BaseClass) {
  return class WithOriginalUri extends BaseClass {
    setOriginalUri(originalUri, state) {
      const sessionStorage = storageUtil.getSessionStorage();
      sessionStorage.setItem(REFERRER_PATH_STORAGE_KEY, originalUri);
      state = state || this.options.state;
      if (state) {
        const sharedStorage = this.storageManager.getOriginalUriStorage();
        sharedStorage.setItem(state, originalUri);
      }
    }
    getOriginalUri(state) {
      state = state || this.options.state;
      if (state) {
        const sharedStorage = this.storageManager.getOriginalUriStorage();
        const originalUri = sharedStorage.getItem(state);
        if (originalUri) {
          return originalUri;
        }
      }
      const storage = storageUtil.getSessionStorage();
      return storage ? storage.getItem(REFERRER_PATH_STORAGE_KEY) || undefined : undefined;
    }
    removeOriginalUri(state) {
      const storage = storageUtil.getSessionStorage();
      storage.removeItem(REFERRER_PATH_STORAGE_KEY);
      state = state || this.options.state;
      if (state) {
        const sharedStorage = this.storageManager.getOriginalUriStorage();
        sharedStorage.removeItem && sharedStorage.removeItem(state);
      }
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinOAuth(Base, TransactionManagerConstructor) {
  var _a;
  const WithOriginalUri = provideOriginalUri(Base);
  return _a = class OktaAuthOAuth extends WithOriginalUri {
    constructor(...args) {
      super(...args);
      this.transactionManager = new TransactionManagerConstructor(Object.assign({
        storageManager: this.storageManager
      }, this.options.transactionManager));
      this.pkce = {
        DEFAULT_CODE_CHALLENGE_METHOD: PKCE.DEFAULT_CODE_CHALLENGE_METHOD,
        generateVerifier: PKCE.generateVerifier,
        computeChallenge: PKCE.computeChallenge
      };
      this._pending = {
        handleLogin: false
      };
      this._tokenQueue = new PromiseQueue();
      this.token = createTokenAPI(this, this._tokenQueue);
      this.tokenManager = new TokenManager(this, this.options.tokenManager);
      this.endpoints = createEndpoints(this);
    }
    clearStorage() {
      super.clearStorage();
      this.tokenManager.clear();
    }
    async isAuthenticated(options = {}) {
      const {
        autoRenew,
        autoRemove
      } = this.tokenManager.getOptions();
      const shouldRenew = options.onExpiredToken ? options.onExpiredToken === 'renew' : autoRenew;
      const shouldRemove = options.onExpiredToken ? options.onExpiredToken === 'remove' : autoRemove;
      let {
        accessToken
      } = this.tokenManager.getTokensSync();
      if (accessToken && this.tokenManager.hasExpired(accessToken)) {
        accessToken = undefined;
        if (shouldRenew) {
          try {
            accessToken = await this.tokenManager.renew('accessToken');
          } catch (_a) {}
        } else if (shouldRemove) {
          this.tokenManager.remove('accessToken');
        }
      }
      let {
        idToken
      } = this.tokenManager.getTokensSync();
      if (idToken && this.tokenManager.hasExpired(idToken)) {
        idToken = undefined;
        if (shouldRenew) {
          try {
            idToken = await this.tokenManager.renew('idToken');
          } catch (_b) {}
        } else if (shouldRemove) {
          this.tokenManager.remove('idToken');
        }
      }
      return !!(accessToken && idToken);
    }
    async signInWithRedirect(opts = {}) {
      const {
          originalUri
        } = opts,
        additionalParams = __rest(opts, ["originalUri"]);
      if (this._pending.handleLogin) {
        return;
      }
      this._pending.handleLogin = true;
      try {
        if (originalUri) {
          this.setOriginalUri(originalUri);
        }
        const params = Object.assign({
          scopes: this.options.scopes || ['openid', 'email', 'profile']
        }, additionalParams);
        await this.token.getWithRedirect(params);
      } finally {
        this._pending.handleLogin = false;
      }
    }
    async getUser() {
      const {
        idToken,
        accessToken
      } = this.tokenManager.getTokensSync();
      return this.token.getUserInfo(accessToken, idToken);
    }
    getIdToken() {
      const {
        idToken
      } = this.tokenManager.getTokensSync();
      return idToken ? idToken.idToken : undefined;
    }
    getAccessToken() {
      const {
        accessToken
      } = this.tokenManager.getTokensSync();
      return accessToken ? accessToken.accessToken : undefined;
    }
    getRefreshToken() {
      const {
        refreshToken
      } = this.tokenManager.getTokensSync();
      return refreshToken ? refreshToken.refreshToken : undefined;
    }
    async storeTokensFromRedirect() {
      const {
        tokens,
        responseType
      } = await this.token.parseFromUrl();
      if (responseType !== 'none') {
        this.tokenManager.setTokens(tokens);
      }
    }
    isLoginRedirect() {
      return isLoginRedirect(this);
    }
    isPKCE() {
      return !!this.options.pkce;
    }
    hasResponseType(responseType) {
      let hasResponseType = false;
      if (Array.isArray(this.options.responseType) && this.options.responseType.length) {
        hasResponseType = this.options.responseType.indexOf(responseType) >= 0;
      } else {
        hasResponseType = this.options.responseType === responseType;
      }
      return hasResponseType;
    }
    isAuthorizationCodeFlow() {
      return this.hasResponseType('code');
    }
    async invokeApiMethod(options) {
      if (!options.accessToken) {
        const accessToken = (await this.tokenManager.getTokens()).accessToken;
        options.accessToken = accessToken === null || accessToken === void 0 ? void 0 : accessToken.accessToken;
      }
      return httpRequest(this, options);
    }
    async revokeAccessToken(accessToken) {
      if (!accessToken) {
        accessToken = (await this.tokenManager.getTokens()).accessToken;
        const accessTokenKey = this.tokenManager.getStorageKeyByType('accessToken');
        this.tokenManager.remove(accessTokenKey);
      }
      if (!accessToken) {
        return Promise.resolve(null);
      }
      return this.token.revoke(accessToken);
    }
    async revokeRefreshToken(refreshToken) {
      if (!refreshToken) {
        refreshToken = (await this.tokenManager.getTokens()).refreshToken;
        const refreshTokenKey = this.tokenManager.getStorageKeyByType('refreshToken');
        this.tokenManager.remove(refreshTokenKey);
      }
      if (!refreshToken) {
        return Promise.resolve(null);
      }
      return this.token.revoke(refreshToken);
    }
    getSignOutRedirectUrl(options = {}) {
      let {
        idToken,
        postLogoutRedirectUri,
        state
      } = options;
      if (!idToken) {
        idToken = this.tokenManager.getTokensSync().idToken;
      }
      if (!idToken) {
        return '';
      }
      if (postLogoutRedirectUri === undefined) {
        postLogoutRedirectUri = this.options.postLogoutRedirectUri;
      }
      const logoutUrl = getOAuthUrls(this).logoutUrl;
      const idTokenHint = idToken.idToken;
      let logoutUri = logoutUrl + '?id_token_hint=' + encodeURIComponent(idTokenHint);
      if (postLogoutRedirectUri) {
        logoutUri += '&post_logout_redirect_uri=' + encodeURIComponent(postLogoutRedirectUri);
      }
      if (state) {
        logoutUri += '&state=' + encodeURIComponent(state);
      }
      return logoutUri;
    }
    async signOut(options) {
      options = Object.assign({}, options);
      const defaultUri = window.location.origin;
      const currentUri = window.location.href;
      const postLogoutRedirectUri = options.postLogoutRedirectUri === null ? null : options.postLogoutRedirectUri || this.options.postLogoutRedirectUri || defaultUri;
      const state = options === null || options === void 0 ? void 0 : options.state;
      let accessToken = options.accessToken;
      let refreshToken = options.refreshToken;
      const revokeAccessToken = options.revokeAccessToken !== false;
      const revokeRefreshToken = options.revokeRefreshToken !== false;
      if (revokeRefreshToken && typeof refreshToken === 'undefined') {
        refreshToken = this.tokenManager.getTokensSync().refreshToken;
      }
      if (revokeAccessToken && typeof accessToken === 'undefined') {
        accessToken = this.tokenManager.getTokensSync().accessToken;
      }
      if (!options.idToken) {
        options.idToken = this.tokenManager.getTokensSync().idToken;
      }
      if (revokeRefreshToken && refreshToken) {
        await this.revokeRefreshToken(refreshToken);
      }
      if (revokeAccessToken && accessToken) {
        await this.revokeAccessToken(accessToken);
      }
      const logoutUri = this.getSignOutRedirectUrl(Object.assign(Object.assign({}, options), {
        postLogoutRedirectUri
      }));
      if (!logoutUri) {
        const sessionClosed = await this.closeSession();
        const redirectUri = new URL(postLogoutRedirectUri || defaultUri);
        if (state) {
          redirectUri.searchParams.append('state', state);
        }
        if (postLogoutRedirectUri === currentUri) {
          window.location.href = redirectUri.href;
        } else {
          window.location.assign(redirectUri.href);
        }
        return sessionClosed;
      } else {
        if (options.clearTokensBeforeRedirect) {
          this.tokenManager.clear();
        } else {
          this.tokenManager.addPendingRemoveFlags();
        }
        window.location.assign(logoutUri);
        return true;
      }
    }
    /*LWC compiler v3.1.3*/
  }, _a.crypto = index, _a;
}

var pCancelable = {exports: {}};

class CancelError extends Error {
  constructor(reason) {
    super(reason || 'Promise was canceled');
    this.name = 'CancelError';
  }
  get isCanceled() {
    return true;
  }
  /*LWC compiler v3.1.3*/
}
class PCancelable {
  static fn(userFn) {
    return (...arguments_) => {
      return new PCancelable((resolve, reject, onCancel) => {
        arguments_.push(onCancel);
        // eslint-disable-next-line promise/prefer-await-to-then
        userFn(...arguments_).then(resolve, reject);
      });
    };
  }
  constructor(executor) {
    this._cancelHandlers = [];
    this._isPending = true;
    this._isCanceled = false;
    this._rejectOnCancel = true;
    this._promise = new Promise((resolve, reject) => {
      this._reject = reject;
      const onResolve = value => {
        if (!this._isCanceled || !onCancel.shouldReject) {
          this._isPending = false;
          resolve(value);
        }
      };
      const onReject = error => {
        this._isPending = false;
        reject(error);
      };
      const onCancel = handler => {
        if (!this._isPending) {
          throw new Error('The `onCancel` handler was attached after the promise settled.');
        }
        this._cancelHandlers.push(handler);
      };
      Object.defineProperties(onCancel, {
        shouldReject: {
          get: () => this._rejectOnCancel,
          set: boolean => {
            this._rejectOnCancel = boolean;
          }
        }
      });
      return executor(onResolve, onReject, onCancel);
    });
  }
  then(onFulfilled, onRejected) {
    // eslint-disable-next-line promise/prefer-await-to-then
    return this._promise.then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this._promise.catch(onRejected);
  }
  finally(onFinally) {
    return this._promise.finally(onFinally);
  }
  cancel(reason) {
    if (!this._isPending || this._isCanceled) {
      return;
    }
    this._isCanceled = true;
    if (this._cancelHandlers.length > 0) {
      try {
        for (const handler of this._cancelHandlers) {
          handler();
        }
      } catch (error) {
        this._reject(error);
        return;
      }
    }
    if (this._rejectOnCancel) {
      this._reject(new CancelError(reason));
    }
  }
  get isCanceled() {
    return this._isCanceled;
  }
}
Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);
pCancelable.exports = PCancelable;
pCancelable.exports.CancelError = CancelError;

var pCancelableExports = pCancelable.exports;
var PCancelable$1 = /*@__PURE__*/getDefaultExportFromCjs(pCancelableExports);

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const INITIAL_AUTH_STATE = null;
const DEFAULT_PENDING = {
  updateAuthStatePromise: null,
  canceledTimes: 0
};
const EVENT_AUTH_STATE_CHANGE = 'authStateChange';
const MAX_PROMISE_CANCEL_TIMES = 10;
const isSameAuthState = (prevState, state) => {
  if (!prevState) {
    return false;
  }
  return prevState.isAuthenticated === state.isAuthenticated && JSON.stringify(prevState.idToken) === JSON.stringify(state.idToken) && JSON.stringify(prevState.accessToken) === JSON.stringify(state.accessToken) && prevState.error === state.error;
};
class AuthStateManager {
  constructor(sdk) {
    if (!sdk.emitter) {
      throw new AuthSdkError('Emitter should be initialized before AuthStateManager');
    }
    this._sdk = sdk;
    this._pending = Object.assign({}, DEFAULT_PENDING);
    this._authState = INITIAL_AUTH_STATE;
    this._logOptions = {};
    this._prevAuthState = null;
    this._transformQueue = new PromiseQueue({
      quiet: true
    });
    sdk.tokenManager.on(EVENT_ADDED, (key, token) => {
      this._setLogOptions({
        event: EVENT_ADDED,
        key,
        token
      });
      this.updateAuthState();
    });
    sdk.tokenManager.on(EVENT_REMOVED, (key, token) => {
      this._setLogOptions({
        event: EVENT_REMOVED,
        key,
        token
      });
      this.updateAuthState();
    });
  }
  _setLogOptions(options) {
    this._logOptions = options;
  }
  getAuthState() {
    return this._authState;
  }
  getPreviousAuthState() {
    return this._prevAuthState;
  }
  async updateAuthState() {
    const {
      transformAuthState,
      devMode
    } = this._sdk.options;
    const log = status => {
      const {
        event,
        key,
        token
      } = this._logOptions;
      getConsole().group(`OKTA-AUTH-JS:updateAuthState: Event:${event} Status:${status}`);
      getConsole().log(key, token);
      getConsole().log('Current authState', this._authState);
      getConsole().groupEnd();
      this._logOptions = {};
    };
    const emitAuthStateChange = authState => {
      if (isSameAuthState(this._authState, authState)) {
        devMode && log('unchanged');
        return;
      }
      this._prevAuthState = this._authState;
      this._authState = authState;
      this._sdk.emitter.emit(EVENT_AUTH_STATE_CHANGE, Object.assign({}, authState));
      devMode && log('emitted');
    };
    const finalPromise = origPromise => {
      return this._pending.updateAuthStatePromise.then(() => {
        const curPromise = this._pending.updateAuthStatePromise;
        if (curPromise && curPromise !== origPromise) {
          return finalPromise(curPromise);
        }
        return this.getAuthState();
      });
    };
    if (this._pending.updateAuthStatePromise) {
      if (this._pending.canceledTimes >= MAX_PROMISE_CANCEL_TIMES) {
        devMode && log('terminated');
        return finalPromise(this._pending.updateAuthStatePromise);
      } else {
        this._pending.updateAuthStatePromise.cancel();
      }
    }
    const cancelablePromise = new PCancelable$1((resolve, _, onCancel) => {
      onCancel.shouldReject = false;
      onCancel(() => {
        this._pending.updateAuthStatePromise = null;
        this._pending.canceledTimes = this._pending.canceledTimes + 1;
        devMode && log('canceled');
      });
      const emitAndResolve = authState => {
        if (cancelablePromise.isCanceled) {
          resolve();
          return;
        }
        emitAuthStateChange(authState);
        resolve();
        this._pending = Object.assign({}, DEFAULT_PENDING);
      };
      this._sdk.isAuthenticated().then(() => {
        if (cancelablePromise.isCanceled) {
          resolve();
          return;
        }
        const {
          accessToken,
          idToken,
          refreshToken
        } = this._sdk.tokenManager.getTokensSync();
        const authState = {
          accessToken,
          idToken,
          refreshToken,
          isAuthenticated: !!(accessToken && idToken)
        };
        const promise = transformAuthState ? this._transformQueue.push(transformAuthState, null, this._sdk, authState) : Promise.resolve(authState);
        promise.then(authState => emitAndResolve(authState)).catch(error => emitAndResolve({
          accessToken,
          idToken,
          refreshToken,
          isAuthenticated: false,
          error
        }));
      });
    });
    this._pending.updateAuthStatePromise = cancelablePromise;
    return finalPromise(cancelablePromise);
  }
  subscribe(handler) {
    this._sdk.emitter.on(EVENT_AUTH_STATE_CHANGE, handler);
  }
  unsubscribe(handler) {
    this._sdk.emitter.off(EVENT_AUTH_STATE_CHANGE, handler);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AutoRenewService {
  constructor(tokenManager, options = {}) {
    this.started = false;
    this.tokenManager = tokenManager;
    this.options = options;
    this.renewTimeQueue = [];
    this.onTokenExpiredHandler = this.onTokenExpiredHandler.bind(this);
  }
  shouldThrottleRenew() {
    let res = false;
    this.renewTimeQueue.push(Date.now());
    if (this.renewTimeQueue.length >= 10) {
      const firstTime = this.renewTimeQueue.shift();
      const lastTime = this.renewTimeQueue[this.renewTimeQueue.length - 1];
      res = lastTime - firstTime < 30 * 1000;
    }
    return res;
  }
  requiresLeadership() {
    return !!this.options.syncStorage && isBrowser();
  }
  processExpiredTokens() {
    const tokenStorage = this.tokenManager.getStorage();
    const tokens = tokenStorage.getStorage();
    Object.keys(tokens).forEach(key => {
      const token = tokens[key];
      if (!isRefreshToken(token) && this.tokenManager.hasExpired(token)) {
        this.onTokenExpiredHandler(key);
      }
    });
  }
  onTokenExpiredHandler(key) {
    if (this.options.autoRenew) {
      if (this.shouldThrottleRenew()) {
        const error = new AuthSdkError('Too many token renew requests');
        this.tokenManager.emitError(error);
      } else {
        this.tokenManager.renew(key).catch(() => {});
      }
    } else if (this.options.autoRemove) {
      this.tokenManager.remove(key);
    }
  }
  canStart() {
    return (!!this.options.autoRenew || !!this.options.autoRemove) && !this.started;
  }
  async start() {
    if (this.canStart()) {
      this.tokenManager.on(EVENT_EXPIRED, this.onTokenExpiredHandler);
      if (this.tokenManager.isStarted()) {
        this.processExpiredTokens();
      }
      this.started = true;
    }
  }
  async stop() {
    if (this.started) {
      this.tokenManager.off(EVENT_EXPIRED, this.onTokenExpiredHandler);
      this.renewTimeQueue = [];
      this.started = false;
    }
  }
  isStarted() {
    return this.started;
  }
}

/**
 * returns true if the given object is a promise
 */
function isPromise(obj) {
  if (obj && typeof obj.then === 'function') {
    return true;
  } else {
    return false;
  }
}
Promise.resolve(false);
var PROMISE_RESOLVED_TRUE = Promise.resolve(true);
var PROMISE_RESOLVED_VOID = Promise.resolve();
function sleep(time, resolveWith) {
  if (!time) time = 0;
  return new Promise(function (res) {
    return setTimeout(function () {
      return res(resolveWith);
    }, time);
  });
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * https://stackoverflow.com/a/8084248
 */

function randomToken() {
  return Math.random().toString(36).substring(2);
}
var lastMs = 0;
var additional = 0;
/**
 * returns the current time in micro-seconds,
 * WARNING: This is a pseudo-function
 * Performance.now is not reliable in webworkers, so we just make sure to never return the same time.
 * This is enough in browsers, and this function will not be used in nodejs.
 * The main reason for this hack is to ensure that BroadcastChannel behaves equal to production when it is used in fast-running unit tests.
 */

function microSeconds$4() {
  var ms = new Date().getTime();
  if (ms === lastMs) {
    additional++;
    return ms * 1000 + additional;
  } else {
    lastMs = ms;
    additional = 0;
    return ms * 1000;
  }
}

var microSeconds$3 = microSeconds$4;
var type$3 = 'native';
function create$3(channelName) {
  var state = {
    messagesCallback: null,
    bc: new BroadcastChannel(channelName),
    subFns: [] // subscriberFunctions
  };

  state.bc.onmessage = function (msg) {
    if (state.messagesCallback) {
      state.messagesCallback(msg.data);
    }
  };
  return state;
}
function close$3(channelState) {
  channelState.bc.close();
  channelState.subFns = [];
}
function postMessage$3(channelState, messageJson) {
  try {
    channelState.bc.postMessage(messageJson, false);
    return PROMISE_RESOLVED_VOID;
  } catch (err) {
    return Promise.reject(err);
  }
}
function onMessage$3(channelState, fn) {
  channelState.messagesCallback = fn;
}
function canBeUsed$3() {
  if (typeof window === 'undefined') {
    return false;
  }
  if (typeof BroadcastChannel === 'function') {
    if (BroadcastChannel._pubkey) {
      throw new Error('BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill');
    }
    return true;
  } else {
    return false;
  }
}
function averageResponseTime$3() {
  return 150;
}
var NativeMethod = {
  create: create$3,
  close: close$3,
  onMessage: onMessage$3,
  postMessage: postMessage$3,
  canBeUsed: canBeUsed$3,
  type: type$3,
  averageResponseTime: averageResponseTime$3,
  microSeconds: microSeconds$3
};

/**
 * this is a set which automatically forgets
 * a given entry when a new entry is set and the ttl
 * of the old one is over
 */
var ObliviousSet = /** @class */function () {
  function ObliviousSet(ttl) {
    this.ttl = ttl;
    this.map = new Map();
    /**
     * Creating calls to setTimeout() is expensive,
     * so we only do that if there is not timeout already open.
     */
    this._to = false;
  }
  ObliviousSet.prototype.has = function (value) {
    return this.map.has(value);
  };
  ObliviousSet.prototype.add = function (value) {
    var _this = this;
    this.map.set(value, now());
    /**
     * When a new value is added,
     * start the cleanup at the next tick
     * to not block the cpu for more important stuff
     * that might happen.
     */
    if (!this._to) {
      this._to = true;
      setTimeout(function () {
        _this._to = false;
        removeTooOldValues(_this);
      }, 0);
    }
  };
  ObliviousSet.prototype.clear = function () {
    this.map.clear();
  };
  return ObliviousSet;
}();
/**
 * Removes all entries from the set
 * where the TTL has expired
 */
function removeTooOldValues(obliviousSet) {
  var olderThen = now() - obliviousSet.ttl;
  var iterator = obliviousSet.map[Symbol.iterator]();
  /**
   * Because we can assume the new values are added at the bottom,
   * we start from the top and stop as soon as we reach a non-too-old value.
   */
  while (true) {
    var next = iterator.next().value;
    if (!next) {
      return; // no more elements
    }

    var value = next[0];
    var time = next[1];
    if (time < olderThen) {
      obliviousSet.map.delete(value);
    } else {
      // We reached a value that is not old enough
      return;
    }
  }
}
function now() {
  return new Date().getTime();
}

function fillOptionsWithDefaults$1() {
  var originalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = JSON.parse(JSON.stringify(originalOptions)); // main

  if (typeof options.webWorkerSupport === 'undefined') options.webWorkerSupport = true; // indexed-db

  if (!options.idb) options.idb = {}; //  after this time the messages get deleted

  if (!options.idb.ttl) options.idb.ttl = 1000 * 45;
  if (!options.idb.fallbackInterval) options.idb.fallbackInterval = 150; //  handles abrupt db onclose events.

  if (originalOptions.idb && typeof originalOptions.idb.onclose === 'function') options.idb.onclose = originalOptions.idb.onclose; // localstorage

  if (!options.localstorage) options.localstorage = {};
  if (!options.localstorage.removeTimeout) options.localstorage.removeTimeout = 1000 * 60; // custom methods

  if (originalOptions.methods) options.methods = originalOptions.methods; // node

  if (!options.node) options.node = {};
  if (!options.node.ttl) options.node.ttl = 1000 * 60 * 2; // 2 minutes;

  /**
   * On linux use 'ulimit -Hn' to get the limit of open files.
   * On ubuntu this was 4096 for me, so we use half of that as maxParallelWrites default.
   */

  if (!options.node.maxParallelWrites) options.node.maxParallelWrites = 2048;
  if (typeof options.node.useFastPath === 'undefined') options.node.useFastPath = true;
  return options;
}

/**
 * this method uses indexeddb to store the messages
 * There is currently no observerAPI for idb
 * @link https://github.com/w3c/IndexedDB/issues/51
 * 
 * When working on this, ensure to use these performance optimizations:
 * @link https://rxdb.info/slow-indexeddb.html
 */
var microSeconds$2 = microSeconds$4;
var DB_PREFIX = 'pubkey.broadcast-channel-0-';
var OBJECT_STORE_ID = 'messages';
/**
 * Use relaxed durability for faster performance on all transactions.
 * @link https://nolanlawson.com/2021/08/22/speeding-up-indexeddb-reads-and-writes/
 */

var TRANSACTION_SETTINGS = {
  durability: 'relaxed'
};
var type$2 = 'idb';
function getIdb() {
  if (typeof indexedDB !== 'undefined') return indexedDB;
  if (typeof window !== 'undefined') {
    if (typeof window.mozIndexedDB !== 'undefined') return window.mozIndexedDB;
    if (typeof window.webkitIndexedDB !== 'undefined') return window.webkitIndexedDB;
    if (typeof window.msIndexedDB !== 'undefined') return window.msIndexedDB;
  }
  return false;
}
/**
 * If possible, we should explicitly commit IndexedDB transactions
 * for better performance.
 * @link https://nolanlawson.com/2021/08/22/speeding-up-indexeddb-reads-and-writes/
 */

function commitIndexedDBTransaction(tx) {
  if (tx.commit) {
    tx.commit();
  }
}
function createDatabase(channelName) {
  var IndexedDB = getIdb(); // create table

  var dbName = DB_PREFIX + channelName;
  /**
   * All IndexedDB databases are opened without version
   * because it is a bit faster, especially on firefox
   * @link http://nparashuram.com/IndexedDB/perf/#Open%20Database%20with%20version
   */

  var openRequest = IndexedDB.open(dbName);
  openRequest.onupgradeneeded = function (ev) {
    var db = ev.target.result;
    db.createObjectStore(OBJECT_STORE_ID, {
      keyPath: 'id',
      autoIncrement: true
    });
  };
  var dbPromise = new Promise(function (res, rej) {
    openRequest.onerror = function (ev) {
      return rej(ev);
    };
    openRequest.onsuccess = function () {
      res(openRequest.result);
    };
  });
  return dbPromise;
}
/**
 * writes the new message to the database
 * so other readers can find it
 */

function writeMessage(db, readerUuid, messageJson) {
  var time = new Date().getTime();
  var writeObject = {
    uuid: readerUuid,
    time: time,
    data: messageJson
  };
  var tx = db.transaction([OBJECT_STORE_ID], 'readwrite', TRANSACTION_SETTINGS);
  return new Promise(function (res, rej) {
    tx.oncomplete = function () {
      return res();
    };
    tx.onerror = function (ev) {
      return rej(ev);
    };
    var objectStore = tx.objectStore(OBJECT_STORE_ID);
    objectStore.add(writeObject);
    commitIndexedDBTransaction(tx);
  });
}
function getMessagesHigherThan(db, lastCursorId) {
  var tx = db.transaction(OBJECT_STORE_ID, 'readonly', TRANSACTION_SETTINGS);
  var objectStore = tx.objectStore(OBJECT_STORE_ID);
  var ret = [];
  var keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity);
  /**
   * Optimization shortcut,
   * if getAll() can be used, do not use a cursor.
   * @link https://rxdb.info/slow-indexeddb.html
   */

  if (objectStore.getAll) {
    var getAllRequest = objectStore.getAll(keyRangeValue);
    return new Promise(function (res, rej) {
      getAllRequest.onerror = function (err) {
        return rej(err);
      };
      getAllRequest.onsuccess = function (e) {
        res(e.target.result);
      };
    });
  }
  function openCursor() {
    // Occasionally Safari will fail on IDBKeyRange.bound, this
    // catches that error, having it open the cursor to the first
    // item. When it gets data it will advance to the desired key.
    try {
      keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity);
      return objectStore.openCursor(keyRangeValue);
    } catch (e) {
      return objectStore.openCursor();
    }
  }
  return new Promise(function (res, rej) {
    var openCursorRequest = openCursor();
    openCursorRequest.onerror = function (err) {
      return rej(err);
    };
    openCursorRequest.onsuccess = function (ev) {
      var cursor = ev.target.result;
      if (cursor) {
        if (cursor.value.id < lastCursorId + 1) {
          cursor["continue"](lastCursorId + 1);
        } else {
          ret.push(cursor.value);
          cursor["continue"]();
        }
      } else {
        commitIndexedDBTransaction(tx);
        res(ret);
      }
    };
  });
}
function removeMessagesById(db, ids) {
  var tx = db.transaction([OBJECT_STORE_ID], 'readwrite', TRANSACTION_SETTINGS);
  var objectStore = tx.objectStore(OBJECT_STORE_ID);
  return Promise.all(ids.map(function (id) {
    var deleteRequest = objectStore["delete"](id);
    return new Promise(function (res) {
      deleteRequest.onsuccess = function () {
        return res();
      };
    });
  }));
}
function getOldMessages(db, ttl) {
  var olderThen = new Date().getTime() - ttl;
  var tx = db.transaction(OBJECT_STORE_ID, 'readonly', TRANSACTION_SETTINGS);
  var objectStore = tx.objectStore(OBJECT_STORE_ID);
  var ret = [];
  return new Promise(function (res) {
    objectStore.openCursor().onsuccess = function (ev) {
      var cursor = ev.target.result;
      if (cursor) {
        var msgObk = cursor.value;
        if (msgObk.time < olderThen) {
          ret.push(msgObk); //alert("Name for SSN " + cursor.key + " is " + cursor.value.name);

          cursor["continue"]();
        } else {
          // no more old messages,
          commitIndexedDBTransaction(tx);
          res(ret);
          return;
        }
      } else {
        res(ret);
      }
    };
  });
}
function cleanOldMessages(db, ttl) {
  return getOldMessages(db, ttl).then(function (tooOld) {
    return removeMessagesById(db, tooOld.map(function (msg) {
      return msg.id;
    }));
  });
}
function create$2(channelName, options) {
  options = fillOptionsWithDefaults$1(options);
  return createDatabase(channelName).then(function (db) {
    var state = {
      closed: false,
      lastCursorId: 0,
      channelName: channelName,
      options: options,
      uuid: randomToken(),
      /**
       * emittedMessagesIds
       * contains all messages that have been emitted before
       * @type {ObliviousSet}
       */
      eMIs: new ObliviousSet(options.idb.ttl * 2),
      // ensures we do not read messages in parrallel
      writeBlockPromise: PROMISE_RESOLVED_VOID,
      messagesCallback: null,
      readQueuePromises: [],
      db: db
    };
    /**
     * Handle abrupt closes that do not originate from db.close().
     * This could happen, for example, if the underlying storage is
     * removed or if the user clears the database in the browser's
     * history preferences.
     */

    db.onclose = function () {
      state.closed = true;
      if (options.idb.onclose) options.idb.onclose();
    };
    /**
     * if service-workers are used,
     * we have no 'storage'-event if they post a message,
     * therefore we also have to set an interval
     */

    _readLoop(state);
    return state;
  });
}
function _readLoop(state) {
  if (state.closed) return;
  readNewMessages(state).then(function () {
    return sleep(state.options.idb.fallbackInterval);
  }).then(function () {
    return _readLoop(state);
  });
}
function _filterMessage(msgObj, state) {
  if (msgObj.uuid === state.uuid) return false; // send by own

  if (state.eMIs.has(msgObj.id)) return false; // already emitted

  if (msgObj.data.time < state.messagesCallbackTime) return false; // older then onMessageCallback

  return true;
}
/**
 * reads all new messages from the database and emits them
 */

function readNewMessages(state) {
  // channel already closed
  if (state.closed) return PROMISE_RESOLVED_VOID; // if no one is listening, we do not need to scan for new messages

  if (!state.messagesCallback) return PROMISE_RESOLVED_VOID;
  return getMessagesHigherThan(state.db, state.lastCursorId).then(function (newerMessages) {
    var useMessages = newerMessages
    /**
     * there is a bug in iOS where the msgObj can be undefined some times
     * so we filter them out
     * @link https://github.com/pubkey/broadcast-channel/issues/19
     */.filter(function (msgObj) {
      return !!msgObj;
    }).map(function (msgObj) {
      if (msgObj.id > state.lastCursorId) {
        state.lastCursorId = msgObj.id;
      }
      return msgObj;
    }).filter(function (msgObj) {
      return _filterMessage(msgObj, state);
    }).sort(function (msgObjA, msgObjB) {
      return msgObjA.time - msgObjB.time;
    }); // sort by time

    useMessages.forEach(function (msgObj) {
      if (state.messagesCallback) {
        state.eMIs.add(msgObj.id);
        state.messagesCallback(msgObj.data);
      }
    });
    return PROMISE_RESOLVED_VOID;
  });
}
function close$2(channelState) {
  channelState.closed = true;
  channelState.db.close();
}
function postMessage$2(channelState, messageJson) {
  channelState.writeBlockPromise = channelState.writeBlockPromise.then(function () {
    return writeMessage(channelState.db, channelState.uuid, messageJson);
  }).then(function () {
    if (randomInt(0, 10) === 0) {
      /* await (do not await) */
      cleanOldMessages(channelState.db, channelState.options.idb.ttl);
    }
  });
  return channelState.writeBlockPromise;
}
function onMessage$2(channelState, fn, time) {
  channelState.messagesCallbackTime = time;
  channelState.messagesCallback = fn;
  readNewMessages(channelState);
}
function canBeUsed$2() {
  var idb = getIdb();
  if (!idb) {
    return false;
  }
  return true;
}
function averageResponseTime$2(options) {
  return options.idb.fallbackInterval * 2;
}
var IndexeDbMethod = {
  create: create$2,
  close: close$2,
  onMessage: onMessage$2,
  postMessage: postMessage$2,
  canBeUsed: canBeUsed$2,
  type: type$2,
  averageResponseTime: averageResponseTime$2,
  microSeconds: microSeconds$2
};

/**
 * A localStorage-only method which uses localstorage and its 'storage'-event
 * This does not work inside of webworkers because they have no access to locastorage
 * This is basically implemented to support IE9 or your grandmothers toaster.
 * @link https://caniuse.com/#feat=namevalue-storage
 * @link https://caniuse.com/#feat=indexeddb
 */
var microSeconds$1 = microSeconds$4;
var KEY_PREFIX = 'pubkey.broadcastChannel-';
var type$1 = 'localstorage';
/**
 * copied from crosstab
 * @link https://github.com/tejacques/crosstab/blob/master/src/crosstab.js#L32
 */

function getLocalStorage() {
  var localStorage;
  if (typeof window === 'undefined') return null;
  try {
    localStorage = window.localStorage;
    localStorage = window['ie8-eventlistener/storage'] || window.localStorage;
  } catch (e) {// New versions of Firefox throw a Security exception
    // if cookies are disabled. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1028153
  }
  return localStorage;
}
function storageKey(channelName) {
  return KEY_PREFIX + channelName;
}
/**
* writes the new message to the storage
* and fires the storage-event so other readers can find it
*/

function postMessage$1(channelState, messageJson) {
  return new Promise(function (res) {
    sleep().then(function () {
      var key = storageKey(channelState.channelName);
      var writeObj = {
        token: randomToken(),
        time: new Date().getTime(),
        data: messageJson,
        uuid: channelState.uuid
      };
      var value = JSON.stringify(writeObj);
      getLocalStorage().setItem(key, value);
      /**
       * StorageEvent does not fire the 'storage' event
       * in the window that changes the state of the local storage.
       * So we fire it manually
       */

      var ev = document.createEvent('Event');
      ev.initEvent('storage', true, true);
      ev.key = key;
      ev.newValue = value;
      window.dispatchEvent(ev);
      res();
    });
  });
}
function addStorageEventListener(channelName, fn) {
  var key = storageKey(channelName);
  var listener = function listener(ev) {
    if (ev.key === key) {
      fn(JSON.parse(ev.newValue));
    }
  };
  window.addEventListener('storage', listener);
  return listener;
}
function removeStorageEventListener(listener) {
  window.removeEventListener('storage', listener);
}
function create$1(channelName, options) {
  options = fillOptionsWithDefaults$1(options);
  if (!canBeUsed$1()) {
    throw new Error('BroadcastChannel: localstorage cannot be used');
  }
  var uuid = randomToken();
  /**
   * eMIs
   * contains all messages that have been emitted before
   * @type {ObliviousSet}
   */

  var eMIs = new ObliviousSet(options.localstorage.removeTimeout);
  var state = {
    channelName: channelName,
    uuid: uuid,
    eMIs: eMIs // emittedMessagesIds
  };

  state.listener = addStorageEventListener(channelName, function (msgObj) {
    if (!state.messagesCallback) return; // no listener

    if (msgObj.uuid === uuid) return; // own message

    if (!msgObj.token || eMIs.has(msgObj.token)) return; // already emitted

    if (msgObj.data.time && msgObj.data.time < state.messagesCallbackTime) return; // too old

    eMIs.add(msgObj.token);
    state.messagesCallback(msgObj.data);
  });
  return state;
}
function close$1(channelState) {
  removeStorageEventListener(channelState.listener);
}
function onMessage$1(channelState, fn, time) {
  channelState.messagesCallbackTime = time;
  channelState.messagesCallback = fn;
}
function canBeUsed$1() {
  var ls = getLocalStorage();
  if (!ls) return false;
  try {
    var key = '__broadcastchannel_check';
    ls.setItem(key, 'works');
    ls.removeItem(key);
  } catch (e) {
    // Safari 10 in private mode will not allow write access to local
    // storage and fail with a QuotaExceededError. See
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#Private_Browsing_Incognito_modes
    return false;
  }
  return true;
}
function averageResponseTime$1() {
  var defaultTime = 120;
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
    // safari is much slower so this time is higher
    return defaultTime * 2;
  }
  return defaultTime;
}
var LocalstorageMethod = {
  create: create$1,
  close: close$1,
  onMessage: onMessage$1,
  postMessage: postMessage$1,
  canBeUsed: canBeUsed$1,
  type: type$1,
  averageResponseTime: averageResponseTime$1,
  microSeconds: microSeconds$1
};

var microSeconds = microSeconds$4;
var type = 'simulate';
var SIMULATE_CHANNELS = new Set();
function create(channelName) {
  var state = {
    name: channelName,
    messagesCallback: null
  };
  SIMULATE_CHANNELS.add(state);
  return state;
}
function close(channelState) {
  SIMULATE_CHANNELS["delete"](channelState);
}
function postMessage(channelState, messageJson) {
  return new Promise(function (res) {
    return setTimeout(function () {
      var channelArray = Array.from(SIMULATE_CHANNELS);
      channelArray.filter(function (channel) {
        return channel.name === channelState.name;
      }).filter(function (channel) {
        return channel !== channelState;
      }).filter(function (channel) {
        return !!channel.messagesCallback;
      }).forEach(function (channel) {
        return channel.messagesCallback(messageJson);
      });
      res();
    }, 5);
  });
}
function onMessage(channelState, fn) {
  channelState.messagesCallback = fn;
}
function canBeUsed() {
  return true;
}
function averageResponseTime() {
  return 5;
}
var SimulateMethod = {
  create: create,
  close: close,
  onMessage: onMessage,
  postMessage: postMessage,
  canBeUsed: canBeUsed,
  type: type,
  averageResponseTime: averageResponseTime,
  microSeconds: microSeconds
};

var METHODS = [NativeMethod,
// fastest
IndexeDbMethod, LocalstorageMethod];
function chooseMethod(options) {
  var chooseMethods = [].concat(options.methods, METHODS).filter(Boolean); // the line below will be removed from es5/browser builds

  if (options.type) {
    if (options.type === 'simulate') {
      // only use simulate-method if directly chosen
      return SimulateMethod;
    }
    var ret = chooseMethods.find(function (m) {
      return m.type === options.type;
    });
    if (!ret) throw new Error('method-type ' + options.type + ' not found');else return ret;
  }
  /**
   * if no webworker support is needed,
   * remove idb from the list so that localstorage is been chosen
   */

  if (!options.webWorkerSupport) {
    chooseMethods = chooseMethods.filter(function (m) {
      return m.type !== 'idb';
    });
  }
  var useMethod = chooseMethods.find(function (method) {
    return method.canBeUsed();
  });
  if (!useMethod) throw new Error("No useable method found in " + JSON.stringify(METHODS.map(function (m) {
    return m.type;
  })));else return useMethod;
}

/**
 * Contains all open channels,
 * used in tests to ensure everything is closed.
 */

var OPEN_BROADCAST_CHANNELS = new Set();
var lastId = 0;
var BroadcastChannel$1 = function BroadcastChannel(name, options) {
  // identifier of the channel to debug stuff
  this.id = lastId++;
  OPEN_BROADCAST_CHANNELS.add(this);
  this.name = name;
  this.options = fillOptionsWithDefaults$1(options);
  this.method = chooseMethod(this.options); // isListening

  this._iL = false;
  /**
   * _onMessageListener
   * setting onmessage twice,
   * will overwrite the first listener
   */

  this._onML = null;
  /**
   * _addEventListeners
   */

  this._addEL = {
    message: [],
    internal: []
  };
  /**
   * Unsend message promises
   * where the sending is still in progress
   * @type {Set<Promise>}
   */

  this._uMP = new Set();
  /**
   * _beforeClose
   * array of promises that will be awaited
   * before the channel is closed
   */

  this._befC = [];
  /**
   * _preparePromise
   */

  this._prepP = null;
  _prepareChannel(this);
}; // STATICS

/**
 * used to identify if someone overwrites
 * window.BroadcastChannel with this
 * See methods/native.js
 */

BroadcastChannel$1._pubkey = true;

BroadcastChannel$1.prototype = {
  postMessage: function postMessage(msg) {
    if (this.closed) {
      throw new Error('BroadcastChannel.postMessage(): ' + 'Cannot post message after channel has closed ' +
      /**
       * In the past when this error appeared, it was realy hard to debug.
       * So now we log the msg together with the error so it at least
       * gives some clue about where in your application this happens.
       */
      JSON.stringify(msg));
    }
    return _post(this, 'message', msg);
  },
  postInternal: function postInternal(msg) {
    return _post(this, 'internal', msg);
  },
  set onmessage(fn) {
    var time = this.method.microSeconds();
    var listenObj = {
      time: time,
      fn: fn
    };
    _removeListenerObject(this, 'message', this._onML);
    if (fn && typeof fn === 'function') {
      this._onML = listenObj;
      _addListenerObject(this, 'message', listenObj);
    } else {
      this._onML = null;
    }
  },
  addEventListener: function addEventListener(type, fn) {
    var time = this.method.microSeconds();
    var listenObj = {
      time: time,
      fn: fn
    };
    _addListenerObject(this, type, listenObj);
  },
  removeEventListener: function removeEventListener(type, fn) {
    var obj = this._addEL[type].find(function (obj) {
      return obj.fn === fn;
    });
    _removeListenerObject(this, type, obj);
  },
  close: function close() {
    var _this = this;
    if (this.closed) {
      return;
    }
    OPEN_BROADCAST_CHANNELS["delete"](this);
    this.closed = true;
    var awaitPrepare = this._prepP ? this._prepP : PROMISE_RESOLVED_VOID;
    this._onML = null;
    this._addEL.message = [];
    return awaitPrepare // wait until all current sending are processed
    .then(function () {
      return Promise.all(Array.from(_this._uMP));
    }) // run before-close hooks
    .then(function () {
      return Promise.all(_this._befC.map(function (fn) {
        return fn();
      }));
    }) // close the channel
    .then(function () {
      return _this.method.close(_this._state);
    });
  },
  get type() {
    return this.method.type;
  },
  get isClosed() {
    return this.closed;
  }
};
/**
 * Post a message over the channel
 * @returns {Promise} that resolved when the message sending is done
 */

function _post(broadcastChannel, type, msg) {
  var time = broadcastChannel.method.microSeconds();
  var msgObj = {
    time: time,
    type: type,
    data: msg
  };
  var awaitPrepare = broadcastChannel._prepP ? broadcastChannel._prepP : PROMISE_RESOLVED_VOID;
  return awaitPrepare.then(function () {
    var sendPromise = broadcastChannel.method.postMessage(broadcastChannel._state, msgObj); // add/remove to unsend messages list

    broadcastChannel._uMP.add(sendPromise);
    sendPromise["catch"]().then(function () {
      return broadcastChannel._uMP["delete"](sendPromise);
    });
    return sendPromise;
  });
}
function _prepareChannel(channel) {
  var maybePromise = channel.method.create(channel.name, channel.options);
  if (isPromise(maybePromise)) {
    channel._prepP = maybePromise;
    maybePromise.then(function (s) {
      // used in tests to simulate slow runtime

      /*if (channel.options.prepareDelay) {
           await new Promise(res => setTimeout(res, this.options.prepareDelay));
      }*/
      channel._state = s;
    });
  } else {
    channel._state = maybePromise;
  }
}
function _hasMessageListeners(channel) {
  if (channel._addEL.message.length > 0) return true;
  if (channel._addEL.internal.length > 0) return true;
  return false;
}
function _addListenerObject(channel, type, obj) {
  channel._addEL[type].push(obj);
  _startListening(channel);
}
function _removeListenerObject(channel, type, obj) {
  channel._addEL[type] = channel._addEL[type].filter(function (o) {
    return o !== obj;
  });
  _stopListening(channel);
}
function _startListening(channel) {
  if (!channel._iL && _hasMessageListeners(channel)) {
    // someone is listening, start subscribing
    var listenerFn = function listenerFn(msgObj) {
      channel._addEL[msgObj.type].forEach(function (listenerObject) {
        /**
         * Getting the current time in JavaScript has no good precision.
         * So instead of only listening to events that happend 'after' the listener
         * was added, we also listen to events that happended 100ms before it.
         * This ensures that when another process, like a WebWorker, sends events
         * we do not miss them out because their timestamp is a bit off compared to the main process.
         * Not doing this would make messages missing when we send data directly after subscribing and awaiting a response.
         * @link https://johnresig.com/blog/accuracy-of-javascript-time/
         */
        var hundredMsInMicro = 100 * 1000;
        var minMessageTime = listenerObject.time - hundredMsInMicro;
        if (msgObj.time >= minMessageTime) {
          listenerObject.fn(msgObj.data);
        }
      });
    };
    var time = channel.method.microSeconds();
    if (channel._prepP) {
      channel._prepP.then(function () {
        channel._iL = true;
        channel.method.onMessage(channel._state, listenerFn, time);
      });
    } else {
      channel._iL = true;
      channel.method.onMessage(channel._state, listenerFn, time);
    }
  }
}
function _stopListening(channel) {
  if (channel._iL && !_hasMessageListeners(channel)) {
    // noone is listening, stop subscribing
    channel._iL = false;
    var time = channel.method.microSeconds();
    channel.method.onMessage(channel._state, null, time);
  }
}

var browser = false;

var isNode = /*@__PURE__*/getDefaultExportFromCjs(browser);

/* global WorkerGlobalScope */
function add$2(fn) {
  if (typeof WorkerGlobalScope === 'function' && self instanceof WorkerGlobalScope) ; else {
    /**
     * if we are on react-native, there is no window.addEventListener
     * @link https://github.com/pubkey/unload/issues/6
     */
    if (typeof window.addEventListener !== 'function') return;
    /**
     * for normal browser-windows, we use the beforeunload-event
     */

    window.addEventListener('beforeunload', function () {
      fn();
    }, true);
    /**
     * for iframes, we have to use the unload-event
     * @link https://stackoverflow.com/q/47533670/3443137
     */

    window.addEventListener('unload', function () {
      fn();
    }, true);
  }
  /**
   * TODO add fallback for safari-mobile
   * @link https://stackoverflow.com/a/26193516/3443137
   */
}

var BrowserMethod = {
  add: add$2
};

// set to true to log events
function add$1(fn) {
  process.on('exit', function () {
    return fn();
  });
  /**
   * on the following events,
   * the process will not end if there are
   * event-handlers attached,
   * therefore we have to call process.exit()
   */

  process.on('beforeExit', function () {
    return fn().then(function () {
      return process.exit();
    });
  }); // catches ctrl+c event

  process.on('SIGINT', function () {
    return fn().then(function () {
      return process.exit();
    });
  }); // catches uncaught exceptions

  process.on('uncaughtException', function (err) {
    return fn().then(function () {
      console.trace(err);
      process.exit(1);
    });
  });
}
var NodeMethod = {
  add: add$1
};

var USE_METHOD = isNode ? NodeMethod : BrowserMethod;
var LISTENERS = new Set();
var startedListening = false;
function startListening() {
  if (startedListening) return;
  startedListening = true;
  USE_METHOD.add(runAll);
}
function add(fn) {
  startListening();
  if (typeof fn !== 'function') throw new Error('Listener is no function');
  LISTENERS.add(fn);
  var addReturn = {
    remove: function remove() {
      return LISTENERS["delete"](fn);
    },
    run: function run() {
      LISTENERS["delete"](fn);
      return fn();
    }
  };
  return addReturn;
}
function runAll() {
  var promises = [];
  LISTENERS.forEach(function (fn) {
    promises.push(fn());
    LISTENERS["delete"](fn);
  });
  return Promise.all(promises);
}

var LeaderElection = function LeaderElection(broadcastChannel, options) {
  var _this = this;
  this.broadcastChannel = broadcastChannel;
  this._options = options;
  this.isLeader = false;
  this.hasLeader = false;
  this.isDead = false;
  this.token = randomToken();
  /**
   * Apply Queue,
   * used to ensure we do not run applyOnce()
   * in parallel.
   */

  this._aplQ = PROMISE_RESOLVED_VOID; // amount of unfinished applyOnce() calls

  this._aplQC = 0; // things to clean up

  this._unl = []; // _unloads

  this._lstns = []; // _listeners

  this._dpL = function () {}; // onduplicate listener

  this._dpLC = false; // true when onduplicate called

  /**
   * Even when the own instance is not applying,
   * we still listen to messages to ensure the hasLeader flag
   * is set correctly.
   */

  var hasLeaderListener = function hasLeaderListener(msg) {
    if (msg.context === 'leader') {
      if (msg.action === 'death') {
        _this.hasLeader = false;
      }
      if (msg.action === 'tell') {
        _this.hasLeader = true;
      }
    }
  };
  this.broadcastChannel.addEventListener('internal', hasLeaderListener);
  this._lstns.push(hasLeaderListener);
};
LeaderElection.prototype = {
  /**
   * Returns true if the instance is leader,
   * false if not.
   * @async
   */
  applyOnce: function applyOnce(
  // true if the applyOnce() call came from the fallbackInterval cycle
  isFromFallbackInterval) {
    var _this2 = this;
    if (this.isLeader) {
      return sleep(0, true);
    }
    if (this.isDead) {
      return sleep(0, false);
    }
    /**
     * Already applying more then once,
     * -> wait for the apply queue to be finished.
     */

    if (this._aplQC > 1) {
      return this._aplQ;
    }
    /**
     * Add a new apply-run
     */

    var applyRun = function applyRun() {
      /**
       * Optimization shortcuts.
       * Directly return if a previous run
       * has already elected a leader.
       */
      if (_this2.isLeader) {
        return PROMISE_RESOLVED_TRUE;
      }
      var stopCriteria = false;
      var stopCriteriaPromiseResolve;
      /**
       * Resolves when a stop criteria is reached.
       * Uses as a performance shortcut so we do not
       * have to await the responseTime when it is already clear
       * that the election failed.
       */

      var stopCriteriaPromise = new Promise(function (res) {
        stopCriteriaPromiseResolve = function stopCriteriaPromiseResolve() {
          stopCriteria = true;
          res();
        };
      });
      var handleMessage = function handleMessage(msg) {
        if (msg.context === 'leader' && msg.token != _this2.token) {
          if (msg.action === 'apply') {
            // other is applying
            if (msg.token > _this2.token) {
              /**
               * other has higher token
               * -> stop applying and let other become leader.
               */
              stopCriteriaPromiseResolve();
            }
          }
          if (msg.action === 'tell') {
            // other is already leader
            stopCriteriaPromiseResolve();
            _this2.hasLeader = true;
          }
        }
      };
      _this2.broadcastChannel.addEventListener('internal', handleMessage);
      /**
       * If the applyOnce() call came from the fallbackInterval,
       * we can assume that the election runs in the background and
       * not critical process is waiting for it.
       * When this is true, we give the other intances
       * more time to answer to messages in the election cycle.
       * This makes it less likely to elect duplicate leaders.
       * But also it takes longer which is not a problem because we anyway
       * run in the background.
       */

      var waitForAnswerTime = isFromFallbackInterval ? _this2._options.responseTime * 4 : _this2._options.responseTime;
      var applyPromise = _sendMessage(_this2, 'apply') // send out that this one is applying
      .then(function () {
        return Promise.race([sleep(waitForAnswerTime), stopCriteriaPromise.then(function () {
          return Promise.reject(new Error());
        })]);
      }) // send again in case another instance was just created
      .then(function () {
        return _sendMessage(_this2, 'apply');
      }) // let others time to respond
      .then(function () {
        return Promise.race([sleep(waitForAnswerTime), stopCriteriaPromise.then(function () {
          return Promise.reject(new Error());
        })]);
      })["catch"](function () {}).then(function () {
        _this2.broadcastChannel.removeEventListener('internal', handleMessage);
        if (!stopCriteria) {
          // no stop criteria -> own is leader
          return beLeader(_this2).then(function () {
            return true;
          });
        } else {
          // other is leader
          return false;
        }
      });
      return applyPromise;
    };
    this._aplQC = this._aplQC + 1;
    this._aplQ = this._aplQ.then(function () {
      return applyRun();
    }).then(function () {
      _this2._aplQC = _this2._aplQC - 1;
    });
    return this._aplQ.then(function () {
      return _this2.isLeader;
    });
  },
  awaitLeadership: function awaitLeadership() {
    if ( /* _awaitLeadershipPromise */
    !this._aLP) {
      this._aLP = _awaitLeadershipOnce(this);
    }
    return this._aLP;
  },
  set onduplicate(fn) {
    this._dpL = fn;
  },
  die: function die() {
    var _this3 = this;
    this._lstns.forEach(function (listener) {
      return _this3.broadcastChannel.removeEventListener('internal', listener);
    });
    this._lstns = [];
    this._unl.forEach(function (uFn) {
      return uFn.remove();
    });
    this._unl = [];
    if (this.isLeader) {
      this.hasLeader = false;
      this.isLeader = false;
    }
    this.isDead = true;
    return _sendMessage(this, 'death');
  }
};
/**
 * @param leaderElector {LeaderElector}
 */

function _awaitLeadershipOnce(leaderElector) {
  if (leaderElector.isLeader) {
    return PROMISE_RESOLVED_VOID;
  }
  return new Promise(function (res) {
    var resolved = false;
    function finish() {
      if (resolved) {
        return;
      }
      resolved = true;
      leaderElector.broadcastChannel.removeEventListener('internal', whenDeathListener);
      res(true);
    } // try once now

    leaderElector.applyOnce().then(function () {
      if (leaderElector.isLeader) {
        finish();
      }
    });
    /**
     * Try on fallbackInterval
     * @recursive
     */

    var tryOnFallBack = function tryOnFallBack() {
      return sleep(leaderElector._options.fallbackInterval).then(function () {
        if (leaderElector.isDead || resolved) {
          return;
        }
        if (leaderElector.isLeader) {
          finish();
        } else {
          return leaderElector.applyOnce(true).then(function () {
            if (leaderElector.isLeader) {
              finish();
            } else {
              tryOnFallBack();
            }
          });
        }
      });
    };
    tryOnFallBack(); // try when other leader dies

    var whenDeathListener = function whenDeathListener(msg) {
      if (msg.context === 'leader' && msg.action === 'death') {
        leaderElector.hasLeader = false;
        leaderElector.applyOnce().then(function () {
          if (leaderElector.isLeader) {
            finish();
          }
        });
      }
    };
    leaderElector.broadcastChannel.addEventListener('internal', whenDeathListener);
    leaderElector._lstns.push(whenDeathListener);
  });
}
/**
 * sends and internal message over the broadcast-channel
 */

function _sendMessage(leaderElector, action) {
  var msgJson = {
    context: 'leader',
    action: action,
    token: leaderElector.token
  };
  return leaderElector.broadcastChannel.postInternal(msgJson);
}
function beLeader(leaderElector) {
  leaderElector.isLeader = true;
  leaderElector.hasLeader = true;
  var unloadFn = add(function () {
    return leaderElector.die();
  });
  leaderElector._unl.push(unloadFn);
  var isLeaderListener = function isLeaderListener(msg) {
    if (msg.context === 'leader' && msg.action === 'apply') {
      _sendMessage(leaderElector, 'tell');
    }
    if (msg.context === 'leader' && msg.action === 'tell' && !leaderElector._dpLC) {
      /**
       * another instance is also leader!
       * This can happen on rare events
       * like when the CPU is at 100% for long time
       * or the tabs are open very long and the browser throttles them.
       * @link https://github.com/pubkey/broadcast-channel/issues/414
       * @link https://github.com/pubkey/broadcast-channel/issues/385
       */
      leaderElector._dpLC = true;
      leaderElector._dpL(); // message the lib user so the app can handle the problem

      _sendMessage(leaderElector, 'tell'); // ensure other leader also knows the problem
    }
  };

  leaderElector.broadcastChannel.addEventListener('internal', isLeaderListener);
  leaderElector._lstns.push(isLeaderListener);
  return _sendMessage(leaderElector, 'tell');
}
function fillOptionsWithDefaults(options, channel) {
  if (!options) options = {};
  options = JSON.parse(JSON.stringify(options));
  if (!options.fallbackInterval) {
    options.fallbackInterval = 3000;
  }
  if (!options.responseTime) {
    options.responseTime = channel.method.averageResponseTime(channel.options);
  }
  return options;
}
function createLeaderElection(channel, options) {
  if (channel._leaderElector) {
    throw new Error('BroadcastChannel already has a leader-elector');
  }
  options = fillOptionsWithDefaults(options, channel);
  var elector = new LeaderElection(channel, options);
  channel._befC.push(function () {
    return elector.die();
  });
  channel._leaderElector = elector;
  return elector;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SyncStorageService {
  constructor(tokenManager, options = {}) {
    this.started = false;
    this.enablePostMessage = true;
    this.tokenManager = tokenManager;
    this.options = options;
    this.onTokenAddedHandler = this.onTokenAddedHandler.bind(this);
    this.onTokenRemovedHandler = this.onTokenRemovedHandler.bind(this);
    this.onTokenRenewedHandler = this.onTokenRenewedHandler.bind(this);
    this.onSetStorageHandler = this.onSetStorageHandler.bind(this);
    this.onSyncMessageHandler = this.onSyncMessageHandler.bind(this);
  }
  requiresLeadership() {
    return false;
  }
  isStarted() {
    return this.started;
  }
  canStart() {
    return !!this.options.syncStorage && isBrowser() && !this.started;
  }
  async start() {
    if (!this.canStart()) {
      return;
    }
    const {
      syncChannelName
    } = this.options;
    try {
      this.channel = new BroadcastChannel$1(syncChannelName);
    } catch (err) {
      throw new AuthSdkError('SyncStorageService is not supported in current browser.');
    }
    this.tokenManager.on(EVENT_ADDED, this.onTokenAddedHandler);
    this.tokenManager.on(EVENT_REMOVED, this.onTokenRemovedHandler);
    this.tokenManager.on(EVENT_RENEWED, this.onTokenRenewedHandler);
    this.tokenManager.on(EVENT_SET_STORAGE, this.onSetStorageHandler);
    this.channel.addEventListener('message', this.onSyncMessageHandler);
    this.started = true;
  }
  async stop() {
    var _a, _b;
    if (this.started) {
      this.tokenManager.off(EVENT_ADDED, this.onTokenAddedHandler);
      this.tokenManager.off(EVENT_REMOVED, this.onTokenRemovedHandler);
      this.tokenManager.off(EVENT_RENEWED, this.onTokenRenewedHandler);
      this.tokenManager.off(EVENT_SET_STORAGE, this.onSetStorageHandler);
      (_a = this.channel) === null || _a === void 0 ? void 0 : _a.removeEventListener('message', this.onSyncMessageHandler);
      await ((_b = this.channel) === null || _b === void 0 ? void 0 : _b.close());
      this.channel = undefined;
      this.started = false;
    }
  }
  onTokenAddedHandler(key, token) {
    var _a;
    if (!this.enablePostMessage) {
      return;
    }
    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.postMessage({
      type: EVENT_ADDED,
      key,
      token
    });
  }
  onTokenRemovedHandler(key, token) {
    var _a;
    if (!this.enablePostMessage) {
      return;
    }
    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.postMessage({
      type: EVENT_REMOVED,
      key,
      token
    });
  }
  onTokenRenewedHandler(key, token, oldToken) {
    var _a;
    if (!this.enablePostMessage) {
      return;
    }
    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.postMessage({
      type: EVENT_RENEWED,
      key,
      token,
      oldToken
    });
  }
  onSetStorageHandler(storage) {
    var _a;
    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.postMessage({
      type: EVENT_SET_STORAGE,
      storage
    });
  }
  onSyncMessageHandler(msg) {
    this.enablePostMessage = false;
    switch (msg.type) {
      case EVENT_SET_STORAGE:
        this.tokenManager.getStorage().setStorage(msg.storage);
        break;
      case EVENT_ADDED:
        this.tokenManager.emitAdded(msg.key, msg.token);
        this.tokenManager.setExpireEventTimeout(msg.key, msg.token);
        break;
      case EVENT_REMOVED:
        this.tokenManager.clearExpireEventTimeout(msg.key);
        this.tokenManager.emitRemoved(msg.key, msg.token);
        break;
      case EVENT_RENEWED:
        this.tokenManager.emitRenewed(msg.key, msg.token, msg.oldToken);
        break;
    }
    this.enablePostMessage = true;
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class LeaderElectionService {
  constructor(options = {}) {
    this.started = false;
    this.options = options;
    this.onLeaderDuplicate = this.onLeaderDuplicate.bind(this);
    this.onLeader = this.onLeader.bind(this);
  }
  onLeaderDuplicate() {}
  async onLeader() {
    var _a, _b;
    await ((_b = (_a = this.options).onLeader) === null || _b === void 0 ? void 0 : _b.call(_a));
  }
  isLeader() {
    var _a;
    return !!((_a = this.elector) === null || _a === void 0 ? void 0 : _a.isLeader);
  }
  hasLeader() {
    var _a;
    return !!((_a = this.elector) === null || _a === void 0 ? void 0 : _a.hasLeader);
  }
  async start() {
    if (this.canStart()) {
      const {
        electionChannelName
      } = this.options;
      this.channel = new BroadcastChannel$1(electionChannelName);
      this.elector = createLeaderElection(this.channel);
      this.elector.onduplicate = this.onLeaderDuplicate;
      this.elector.awaitLeadership().then(this.onLeader);
      this.started = true;
    }
  }
  async stop() {
    if (this.started) {
      if (this.elector) {
        await this.elector.die();
        this.elector = undefined;
      }
      if (this.channel) {
        this.channel.postInternal = () => Promise.resolve();
        await this.channel.close();
        this.channel = undefined;
      }
      this.started = false;
    }
  }
  requiresLeadership() {
    return false;
  }
  isStarted() {
    return this.started;
  }
  canStart() {
    return isBrowser() && !this.started;
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const AUTO_RENEW = 'autoRenew';
const SYNC_STORAGE = 'syncStorage';
const LEADER_ELECTION = 'leaderElection';
class ServiceManager {
  constructor(sdk, options = {}) {
    this.sdk = sdk;
    this.onLeader = this.onLeader.bind(this);
    const {
      autoRenew,
      autoRemove,
      syncStorage
    } = sdk.tokenManager.getOptions();
    options.electionChannelName = options.electionChannelName || options.broadcastChannelName;
    this.options = Object.assign({}, ServiceManager.defaultOptions, {
      autoRenew,
      autoRemove,
      syncStorage
    }, {
      electionChannelName: `${sdk.options.clientId}-election`,
      syncChannelName: `${sdk.options.clientId}-sync`
    }, removeNils(options));
    this.started = false;
    this.services = new Map();
    ServiceManager.knownServices.forEach(name => {
      const svc = this.createService(name);
      if (svc) {
        this.services.set(name, svc);
      }
    });
  }
  async onLeader() {
    if (this.started) {
      await this.startServices();
    }
  }
  isLeader() {
    var _a;
    return (_a = this.getService(LEADER_ELECTION)) === null || _a === void 0 ? void 0 : _a.isLeader();
  }
  isLeaderRequired() {
    return [...this.services.values()].some(srv => srv.canStart() && srv.requiresLeadership());
  }
  async start() {
    if (this.started) {
      return;
    }
    await this.startServices();
    this.started = true;
  }
  async stop() {
    await this.stopServices();
    this.started = false;
  }
  getService(name) {
    return this.services.get(name);
  }
  async startServices() {
    for (const [name, srv] of this.services.entries()) {
      if (this.canStartService(name, srv)) {
        await srv.start();
      }
    }
  }
  async stopServices() {
    for (const srv of this.services.values()) {
      await srv.stop();
    }
  }
  canStartService(name, srv) {
    let canStart = srv.canStart() && !srv.isStarted();
    if (name === LEADER_ELECTION) {
      canStart && (canStart = this.isLeaderRequired());
    } else if (srv.requiresLeadership()) {
      canStart && (canStart = this.isLeader());
    }
    return canStart;
  }
  createService(name) {
    const tokenManager = this.sdk.tokenManager;
    let service;
    switch (name) {
      case LEADER_ELECTION:
        service = new LeaderElectionService(Object.assign(Object.assign({}, this.options), {
          onLeader: this.onLeader
        }));
        break;
      case AUTO_RENEW:
        service = new AutoRenewService(tokenManager, Object.assign({}, this.options));
        break;
      case SYNC_STORAGE:
        service = new SyncStorageService(tokenManager, Object.assign({}, this.options));
        break;
      default:
        throw new Error(`Unknown service ${name}`);
    }
    return service;
  }
}
ServiceManager.knownServices = [AUTO_RENEW, SYNC_STORAGE, LEADER_ELECTION];
ServiceManager.defaultOptions = {
  autoRenew: true,
  autoRemove: true,
  syncStorage: true
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinCore(Base) {
  return class OktaAuthCore extends Base {
    constructor(...args) {
      super(...args);
      this.authStateManager = new AuthStateManager(this);
      this.serviceManager = new ServiceManager(this, this.options.services);
    }
    async start() {
      await this.serviceManager.start();
      this.tokenManager.start();
      if (!this.token.isLoginRedirect()) {
        await this.authStateManager.updateAuthState();
      }
    }
    async stop() {
      this.tokenManager.stop();
      await this.serviceManager.stop();
    }
    async handleRedirect(originalUri) {
      await this.handleLoginRedirect(undefined, originalUri);
    }
    async handleLoginRedirect(tokens, originalUri) {
      let state = this.options.state;
      if (tokens) {
        this.tokenManager.setTokens(tokens);
        originalUri = originalUri || this.getOriginalUri(this.options.state);
      } else if (this.isLoginRedirect()) {
        try {
          const oAuthResponse = await parseOAuthResponseFromUrl(this, {});
          state = oAuthResponse.state;
          originalUri = originalUri || this.getOriginalUri(state);
          await this.storeTokensFromRedirect();
        } catch (e) {
          await this.authStateManager.updateAuthState();
          throw e;
        }
      } else {
        return;
      }
      await this.authStateManager.updateAuthState();
      this.removeOriginalUri(state);
      const {
        restoreOriginalUri
      } = this.options;
      if (restoreOriginalUri) {
        await restoreOriginalUri(this, originalUri);
      } else if (originalUri) {
        window.location.replace(originalUri);
      }
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function sessionExists(sdk) {
  return sdk.session.get().then(function (res) {
    if (res.status === 'ACTIVE') {
      return true;
    }
    return false;
  }).catch(function () {
    return false;
  });
}
function getSession(sdk) {
  return get(sdk, '/api/v1/sessions/me', {
    withCredentials: true
  }).then(function (session) {
    var res = omit(session, '_links');
    res.refresh = function () {
      return post(sdk, getLink(session, 'refresh').href, {}, {
        withCredentials: true
      });
    };
    res.user = function () {
      return get(sdk, getLink(session, 'user').href, {
        withCredentials: true
      });
    };
    return res;
  }).catch(function () {
    return {
      status: 'INACTIVE'
    };
  });
}
function closeSession(sdk) {
  return httpRequest(sdk, {
    url: sdk.getIssuerOrigin() + '/api/v1/sessions/me',
    method: 'DELETE',
    withCredentials: true
  });
}
function refreshSession(sdk) {
  return post(sdk, '/api/v1/sessions/me/lifecycle/refresh', {}, {
    withCredentials: true
  });
}
function setCookieAndRedirect(sdk, sessionToken, redirectUrl) {
  redirectUrl = redirectUrl || window.location.href;
  window.location.assign(sdk.getIssuerOrigin() + '/login/sessionCookieRedirect' + toQueryString({
    checkAccountSetupComplete: true,
    token: sessionToken,
    redirectUrl: redirectUrl
  }));
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createSessionApi(sdk) {
  const session = {
    close: closeSession.bind(null, sdk),
    exists: sessionExists.bind(null, sdk),
    get: getSession.bind(null, sdk),
    refresh: refreshSession.bind(null, sdk),
    setCookieAndRedirect: setCookieAndRedirect.bind(null, sdk)
  };
  return session;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinSession(Base) {
  return class OktaAuthSession extends Base {
    constructor(...args) {
      super(...args);
      this.session = createSessionApi(this);
    }
    closeSession() {
      return this.session.close().then(async () => {
        this.clearStorage();
        return true;
      }).catch(function (e) {
        if (e.name === 'AuthApiError' && e.errorCode === 'E0000007') {
          return false;
        }
        throw e;
      });
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createOktaAuthCore(StorageManagerConstructor, OptionsConstructor, TransactionManagerConstructor) {
  const Base = createOktaAuthBase(OptionsConstructor);
  const WithStorage = mixinStorage(Base, StorageManagerConstructor);
  const WithHttp = mixinHttp(WithStorage);
  const WithSession = mixinSession(WithHttp);
  const WithOAuth = mixinOAuth(WithSession, TransactionManagerConstructor);
  const Core = mixinCore(WithOAuth);
  return Core;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const getEnrolledCredentials = (authenticatorEnrollments = []) => {
  const credentials = [];
  authenticatorEnrollments.forEach(enrollement => {
    if (enrollement.key === 'webauthn') {
      credentials.push({
        type: 'public-key',
        id: base64UrlToBuffer(enrollement.credentialId)
      });
    }
  });
  return credentials;
};
const buildCredentialCreationOptions = (activationData, authenticatorEnrollments) => {
  return {
    publicKey: {
      rp: activationData.rp,
      user: {
        id: base64UrlToBuffer(activationData.user.id),
        name: activationData.user.name,
        displayName: activationData.user.displayName
      },
      challenge: base64UrlToBuffer(activationData.challenge),
      pubKeyCredParams: activationData.pubKeyCredParams,
      attestation: activationData.attestation,
      authenticatorSelection: activationData.authenticatorSelection,
      excludeCredentials: getEnrolledCredentials(authenticatorEnrollments)
    }
  };
};
const buildCredentialRequestOptions = (challengeData, authenticatorEnrollments) => {
  return {
    publicKey: {
      challenge: base64UrlToBuffer(challengeData.challenge),
      userVerification: challengeData.userVerification,
      allowCredentials: getEnrolledCredentials(authenticatorEnrollments)
    }
  };
};
const getAttestation = credential => {
  const response = credential.response;
  const id = credential.id;
  const clientData = bufferToBase64Url(response.clientDataJSON);
  const attestation = bufferToBase64Url(response.attestationObject);
  return {
    id,
    clientData,
    attestation
  };
};
const getAssertion = credential => {
  const response = credential.response;
  const id = credential.id;
  const clientData = bufferToBase64Url(response.clientDataJSON);
  const authenticatorData = bufferToBase64Url(response.authenticatorData);
  const signatureData = bufferToBase64Url(response.signature);
  return {
    id,
    clientData,
    authenticatorData,
    signatureData
  };
};

var webauthn = /*#__PURE__*/Object.freeze({
    __proto__: null,
    buildCredentialCreationOptions: buildCredentialCreationOptions,
    buildCredentialRequestOptions: buildCredentialRequestOptions,
    getAssertion: getAssertion,
    getAttestation: getAttestation
});

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinIdx(Base) {
  var _a;
  return _a = class OktaAuthIdx extends Base {
    constructor(...args) {
      super(...args);
      this.idx = createIdxAPI(this);
    }
    /*LWC compiler v3.1.3*/
  }, _a.webauthn = webauthn, _a;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createOktaAuthIdx(StorageManagerConstructor, OptionsConstructor, TransactionManagerConstructor) {
  const Core = createOktaAuthCore(StorageManagerConstructor, OptionsConstructor, TransactionManagerConstructor);
  const WithIdx = mixinIdx(Core);
  return WithIdx;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createBaseOptionsConstructor() {
  return class BaseOptionsConstructor {
    constructor(args) {
      this.devMode = !!args.devMode;
    }
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getStorage() {
  const storageUtil$1 = Object.assign({}, storageUtil, {
    inMemoryStore: {}
  });
  return storageUtil$1;
}
const STORAGE_MANAGER_OPTIONS = {
  token: {
    storageTypes: ['localStorage', 'sessionStorage', 'cookie']
  },
  cache: {
    storageTypes: ['localStorage', 'sessionStorage', 'cookie']
  },
  transaction: {
    storageTypes: ['sessionStorage', 'localStorage', 'cookie']
  },
  'shared-transaction': {
    storageTypes: ['localStorage']
  },
  'original-uri': {
    storageTypes: ['localStorage']
  }
};
function getCookieSettings(args = {}, isHTTPS) {
  var cookieSettings = args.cookies || {};
  if (typeof cookieSettings.secure === 'undefined') {
    cookieSettings.secure = isHTTPS;
  }
  if (typeof cookieSettings.sameSite === 'undefined') {
    cookieSettings.sameSite = cookieSettings.secure ? 'none' : 'lax';
  }
  if (cookieSettings.secure && !isHTTPS) {
    warn('The current page is not being served with the HTTPS protocol.\n' + 'For security reasons, we strongly recommend using HTTPS.\n' + 'If you cannot use HTTPS, set "cookies.secure" option to false.');
    cookieSettings.secure = false;
  }
  if (cookieSettings.sameSite === 'none' && !cookieSettings.secure) {
    cookieSettings.sameSite = 'lax';
  }
  return cookieSettings;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createStorageOptionsConstructor() {
  const BaseOptionsConstructor = createBaseOptionsConstructor();
  return class StorageOptionsConstructor extends BaseOptionsConstructor {
    constructor(args) {
      super(args);
      this.cookies = getCookieSettings(args, isHTTPS());
      this.storageUtil = args.storageUtil || getStorage();
      this.storageManager = Object.assign(Object.assign({}, STORAGE_MANAGER_OPTIONS), args.storageManager);
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const appJsonContentTypeRegex = /application\/\w*\+?json/;
function readData(response) {
  if (response.headers.get('Content-Type') && response.headers.get('Content-Type').toLowerCase().indexOf('application/json') >= 0) {
    return response.json().catch(e => {
      return {
        error: e,
        errorSummary: 'Could not parse server response'
      };
    });
  } else {
    return response.text();
  }
}
function formatResult(status, data, response) {
  const isObject = typeof data === 'object';
  const headers = {};
  for (const pair of response.headers.entries()) {
    headers[pair[0]] = pair[1];
  }
  const result = {
    responseText: isObject ? JSON.stringify(data) : data,
    status: status,
    headers
  };
  if (isObject) {
    result.responseType = 'json';
    result.responseJSON = data;
  }
  return result;
}
function fetchRequest(method, url, args) {
  var body = args.data;
  var headers = args.headers || {};
  var contentType = headers['Content-Type'] || headers['content-type'] || '';
  if (body && typeof body !== 'string') {
    if (appJsonContentTypeRegex.test(contentType)) {
      body = JSON.stringify(body);
    } else if (contentType === 'application/x-www-form-urlencoded') {
      body = Object.entries(body).map(([param, value]) => `${param}=${encodeURIComponent(value)}`).join('&');
    }
  }
  var fetch = window.fetch || crossFetch;
  var fetchPromise = fetch(url, {
    method: method,
    headers: args.headers,
    body: body,
    credentials: args.withCredentials ? 'include' : 'omit'
  });
  if (!fetchPromise.finally) {
    fetchPromise = Promise.resolve(fetchPromise);
  }
  return fetchPromise.then(function (response) {
    var error = !response.ok;
    var status = response.status;
    return readData(response).then(data => {
      return formatResult(status, data, response);
    }).then(result => {
      var _a;
      if (error || ((_a = result.responseJSON) === null || _a === void 0 ? void 0 : _a.error)) {
        throw result;
      }
      return result;
    });
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createHttpOptionsConstructor() {
  const StorageOptionsConstructor = createStorageOptionsConstructor();
  return class HttpOptionsConstructor extends StorageOptionsConstructor {
    constructor(args) {
      super(args);
      this.issuer = args.issuer;
      this.transformErrorXHR = args.transformErrorXHR;
      this.headers = args.headers;
      this.httpRequestClient = args.httpRequestClient || fetchRequest;
      this.httpRequestInterceptors = args.httpRequestInterceptors;
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const enableSharedStorage = true;

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function assertValidConfig(args) {
  args = args || {};
  var scopes = args.scopes;
  if (scopes && !Array.isArray(scopes)) {
    throw new AuthSdkError('scopes must be a array of strings. ' + 'Required usage: new OktaAuth({scopes: ["openid", "email"]})');
  }
  var issuer = args.issuer;
  if (!issuer) {
    throw new AuthSdkError('No issuer passed to constructor. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }
  var isUrlRegex = new RegExp('^http?s?://.+');
  if (!isUrlRegex.test(issuer)) {
    throw new AuthSdkError('Issuer must be a valid URL. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }
  if (issuer.indexOf('-admin.') !== -1) {
    throw new AuthSdkError('Issuer URL passed to constructor contains "-admin" in subdomain. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})');
  }
}
function createOAuthOptionsConstructor() {
  const HttpOptionsConstructor = createHttpOptionsConstructor();
  return class OAuthOptionsConstructor extends HttpOptionsConstructor {
    constructor(options) {
      super(options);
      assertValidConfig(options);
      this.issuer = removeTrailingSlash(options.issuer);
      this.tokenUrl = removeTrailingSlash(options.tokenUrl);
      this.authorizeUrl = removeTrailingSlash(options.authorizeUrl);
      this.userinfoUrl = removeTrailingSlash(options.userinfoUrl);
      this.revokeUrl = removeTrailingSlash(options.revokeUrl);
      this.logoutUrl = removeTrailingSlash(options.logoutUrl);
      this.pkce = options.pkce === false ? false : true;
      this.clientId = options.clientId;
      this.redirectUri = options.redirectUri;
      if (isBrowser()) {
        this.redirectUri = toAbsoluteUrl(options.redirectUri, window.location.origin);
      }
      this.responseType = options.responseType;
      this.responseMode = options.responseMode;
      this.state = options.state;
      this.scopes = options.scopes;
      this.ignoreSignature = !!options.ignoreSignature;
      this.codeChallenge = options.codeChallenge;
      this.codeChallengeMethod = options.codeChallengeMethod;
      this.acrValues = options.acrValues;
      this.maxAge = options.maxAge;
      this.tokenManager = options.tokenManager;
      this.postLogoutRedirectUri = options.postLogoutRedirectUri;
      this.restoreOriginalUri = options.restoreOriginalUri;
      this.transactionManager = Object.assign({
        enableSharedStorage
      }, options.transactionManager);
      this.clientSecret = options.clientSecret;
      this.setLocation = options.setLocation;
      this.ignoreLifetime = !!options.ignoreLifetime;
      if (!options.maxClockSkew && options.maxClockSkew !== 0) {
        this.maxClockSkew = DEFAULT_MAX_CLOCK_SKEW;
      } else {
        this.maxClockSkew = options.maxClockSkew;
      }
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createCoreOptionsConstructor() {
  const OAuthOptionsConstructor = createOAuthOptionsConstructor();
  return class CoreOptionsConstructor extends OAuthOptionsConstructor {
    constructor(options) {
      super(options);
      this.services = options.services;
      this.transformAuthState = options.transformAuthState;
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createIdxOptionsConstructor() {
  const CoreOptionsConstructor = createCoreOptionsConstructor();
  return class IdxOptionsConstructor extends CoreOptionsConstructor {
    constructor(options) {
      super(options);
      this.flow = options.flow;
      this.activationToken = options.activationToken;
      this.recoveryToken = options.recoveryToken;
      this.idx = options.idx;
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class SavedObject {
  constructor(storage, storageName) {
    if (!storage) {
      throw new AuthSdkError('"storage" is required');
    }
    if (typeof storageName !== 'string' || !storageName.length) {
      throw new AuthSdkError('"storageName" is required');
    }
    this.storageName = storageName;
    this.storageProvider = storage;
  }
  getItem(key) {
    return this.getStorage()[key];
  }
  setItem(key, value) {
    return this.updateStorage(key, value);
  }
  removeItem(key) {
    return this.clearStorage(key);
  }
  getStorage() {
    var storageString = this.storageProvider.getItem(this.storageName);
    storageString = storageString || '{}';
    try {
      return JSON.parse(storageString);
    } catch (e) {
      throw new AuthSdkError('Unable to parse storage string: ' + this.storageName);
    }
  }
  setStorage(obj) {
    try {
      var storageString = obj ? JSON.stringify(obj) : '{}';
      this.storageProvider.setItem(this.storageName, storageString);
    } catch (e) {
      throw new AuthSdkError('Unable to set storage: ' + this.storageName);
    }
  }
  clearStorage(key) {
    if (!key) {
      if (this.storageProvider.removeItem) {
        this.storageProvider.removeItem(this.storageName);
      } else {
        this.setStorage();
      }
      return;
    }
    var obj = this.getStorage();
    delete obj[key];
    this.setStorage(obj);
  }
  updateStorage(key, value) {
    var obj = this.getStorage();
    obj[key] = value;
    this.setStorage(obj);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function logServerSideMemoryStorageWarning(options) {
  if (!isBrowser() && !options.storageProvider && !options.storageKey) {
    warn('Memory storage can only support simple single user use case on server side, please provide custom storageProvider or storageKey if advanced scenarios need to be supported.');
  }
}
class BaseStorageManager {
  constructor(storageManagerOptions, cookieOptions, storageUtil) {
    this.storageManagerOptions = storageManagerOptions;
    this.cookieOptions = cookieOptions;
    this.storageUtil = storageUtil;
  }
  getOptionsForSection(sectionName, overrideOptions) {
    return Object.assign({}, this.storageManagerOptions[sectionName], overrideOptions);
  }
  getStorage(options) {
    options = Object.assign({}, this.cookieOptions, options);
    if (options.storageProvider) {
      return options.storageProvider;
    }
    let {
      storageType,
      storageTypes
    } = options;
    if (storageType === 'sessionStorage') {
      options.sessionCookie = true;
    }
    if (storageType && storageTypes) {
      const idx = storageTypes.indexOf(storageType);
      if (idx >= 0) {
        storageTypes = storageTypes.slice(idx);
        storageType = undefined;
      }
    }
    if (!storageType) {
      storageType = this.storageUtil.findStorageType(storageTypes);
    }
    return this.storageUtil.getStorageByType(storageType, options);
  }
  getTokenStorage(options) {
    options = this.getOptionsForSection('token', options);
    logServerSideMemoryStorageWarning(options);
    const storage = this.getStorage(options);
    const storageKey = options.storageKey || TOKEN_STORAGE_NAME;
    return new SavedObject(storage, storageKey);
  }
  getHttpCache(options) {
    options = this.getOptionsForSection('cache', options);
    const storage = this.getStorage(options);
    const storageKey = options.storageKey || CACHE_STORAGE_NAME;
    return new SavedObject(storage, storageKey);
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createOAuthStorageManager() {
  return class OAuthStorageManager extends BaseStorageManager {
    constructor(storageManagerOptions, cookieOptions, storageUtil) {
      super(storageManagerOptions, cookieOptions, storageUtil);
    }
    getTransactionStorage(options) {
      options = this.getOptionsForSection('transaction', options);
      logServerSideMemoryStorageWarning(options);
      const storage = this.getStorage(options);
      const storageKey = options.storageKey || TRANSACTION_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
    getSharedTansactionStorage(options) {
      options = this.getOptionsForSection('shared-transaction', options);
      logServerSideMemoryStorageWarning(options);
      const storage = this.getStorage(options);
      const storageKey = options.storageKey || SHARED_TRANSACTION_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
    getOriginalUriStorage(options) {
      options = this.getOptionsForSection('original-uri', options);
      logServerSideMemoryStorageWarning(options);
      const storage = this.getStorage(options);
      const storageKey = options.storageKey || ORIGINAL_URI_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createCoreStorageManager() {
  return createOAuthStorageManager();
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createIdxStorageManager() {
  const CoreStorageManager = createCoreStorageManager();
  return class IdxStorageManager extends CoreStorageManager {
    constructor(storageManagerOptions, cookieOptions, storageUtil) {
      super(storageManagerOptions, cookieOptions, storageUtil);
    }
    getIdxResponseStorage(options) {
      let storage;
      if (isBrowser()) {
        try {
          storage = this.storageUtil.getStorageByType('memory', options);
        } catch (e) {
          warn('No response storage found, you may want to provide custom implementation for intermediate idx responses to optimize the network traffic');
        }
      } else {
        const transactionStorage = this.getTransactionStorage(options);
        if (transactionStorage) {
          storage = {
            getItem: key => {
              const transaction = transactionStorage.getStorage();
              if (transaction && transaction[key]) {
                return transaction[key];
              }
              return null;
            },
            setItem: (key, val) => {
              const transaction = transactionStorage.getStorage();
              if (!transaction) {
                throw new AuthSdkError('Transaction has been cleared, failed to save idxState');
              }
              transaction[key] = val;
              transactionStorage.setStorage(transaction);
            },
            removeItem: key => {
              const transaction = transactionStorage.getStorage();
              if (!transaction) {
                return;
              }
              delete transaction[key];
              transactionStorage.setStorage(transaction);
            }
          };
        }
      }
      if (!storage) {
        return null;
      }
      return new SavedObject(storage, IDX_RESPONSE_STORAGE_NAME);
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function isObjectWithProperties(obj) {
  if (!obj || typeof obj !== 'object' || Object.values(obj).length === 0) {
    return false;
  }
  return true;
}
function isOAuthTransactionMeta(obj) {
  if (!isObjectWithProperties(obj)) {
    return false;
  }
  return !!obj.redirectUri || !!obj.responseType;
}
function isCustomAuthTransactionMeta(obj) {
  if (!isObjectWithProperties(obj)) {
    return false;
  }
  const isAllStringValues = Object.values(obj).find(value => typeof value !== 'string') === undefined;
  return isAllStringValues;
}
function isTransactionMeta(obj) {
  if (isOAuthTransactionMeta(obj) || isCustomAuthTransactionMeta(obj)) {
    return true;
  }
  return false;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const MAX_ENTRY_LIFETIME = 30 * 60 * 1000;
function pruneSharedStorage(storageManager) {
  const sharedStorage = storageManager.getSharedTansactionStorage();
  const entries = sharedStorage.getStorage();
  Object.keys(entries).forEach(state => {
    const entry = entries[state];
    const age = Date.now() - entry.dateCreated;
    if (age > MAX_ENTRY_LIFETIME) {
      delete entries[state];
    }
  });
  sharedStorage.setStorage(entries);
}
function saveTransactionToSharedStorage(storageManager, state, meta) {
  const sharedStorage = storageManager.getSharedTansactionStorage();
  const entries = sharedStorage.getStorage();
  entries[state] = {
    dateCreated: Date.now(),
    transaction: meta
  };
  sharedStorage.setStorage(entries);
}
function loadTransactionFromSharedStorage(storageManager, state) {
  const sharedStorage = storageManager.getSharedTansactionStorage();
  const entries = sharedStorage.getStorage();
  const entry = entries[state];
  if (entry && entry.transaction && isTransactionMeta(entry.transaction)) {
    return entry.transaction;
  }
  return null;
}
function clearTransactionFromSharedStorage(storageManager, state) {
  const sharedStorage = storageManager.getSharedTansactionStorage();
  const entries = sharedStorage.getStorage();
  delete entries[state];
  sharedStorage.setStorage(entries);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createTransactionManager() {
  return class TransactionManager {
    constructor(options) {
      this.storageManager = options.storageManager;
      this.enableSharedStorage = options.enableSharedStorage === false ? false : true;
      this.saveLastResponse = options.saveLastResponse === false ? false : true;
      this.options = options;
    }
    clear(options = {}) {
      const transactionStorage = this.storageManager.getTransactionStorage();
      const meta = transactionStorage.getStorage();
      transactionStorage.clearStorage();
      if (this.enableSharedStorage && options.clearSharedStorage !== false) {
        const state = options.state || (meta === null || meta === void 0 ? void 0 : meta.state);
        if (state) {
          clearTransactionFromSharedStorage(this.storageManager, state);
        }
      }
    }
    save(meta, options = {}) {
      let storage = this.storageManager.getTransactionStorage();
      const obj = storage.getStorage();
      if (isTransactionMeta(obj) && !options.muteWarning) {
        warn('a saved auth transaction exists in storage. This may indicate another auth flow is already in progress.');
      }
      storage.setStorage(meta);
      if (this.enableSharedStorage && meta.state) {
        saveTransactionToSharedStorage(this.storageManager, meta.state, meta);
      }
    }
    exists(options = {}) {
      try {
        const meta = this.load(options);
        return !!meta;
      } catch (_a) {
        return false;
      }
    }
    load(options = {}) {
      let meta;
      if (this.enableSharedStorage && options.state) {
        pruneSharedStorage(this.storageManager);
        meta = loadTransactionFromSharedStorage(this.storageManager, options.state);
        if (isTransactionMeta(meta)) {
          return meta;
        }
      }
      let storage = this.storageManager.getTransactionStorage();
      meta = storage.getStorage();
      if (isTransactionMeta(meta)) {
        return meta;
      }
      return null;
    }
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createIdxTransactionManager() {
  const TransactionManager = createTransactionManager();
  return class IdxTransactionManager extends TransactionManager {
    constructor(options) {
      super(options);
    }
    clear(options = {}) {
      super.clear(options);
      if (options.clearIdxResponse !== false) {
        this.clearIdxResponse();
      }
    }
    saveIdxResponse(data) {
      if (!this.saveLastResponse) {
        return;
      }
      const storage = this.storageManager.getIdxResponseStorage();
      if (!storage) {
        return;
      }
      storage.setStorage(data);
    }
    loadIdxResponse(options) {
      if (!this.saveLastResponse) {
        return null;
      }
      const storage = this.storageManager.getIdxResponseStorage();
      if (!storage) {
        return null;
      }
      const storedValue = storage.getStorage();
      if (!storedValue || !isRawIdxResponse(storedValue.rawIdxResponse)) {
        return null;
      }
      if (options) {
        const {
          interactionHandle
        } = options;
        if (interactionHandle && storedValue.interactionHandle !== interactionHandle) {
          return null;
        }
      }
      return storedValue;
    }
    clearIdxResponse() {
      if (!this.saveLastResponse) {
        return;
      }
      const storage = this.storageManager.getIdxResponseStorage();
      storage === null || storage === void 0 ? void 0 : storage.clearStorage();
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class BaseTransaction {
  constructor(oktaAuth, options) {
    const {
      res
    } = options;
    const {
        headers
      } = res,
      rest = __rest(res, ["headers"]);
    if (headers) {
      this.headers = headers;
    }
    Object.keys(rest).forEach(key => {
      if (key === '_links') {
        return;
      }
      this[key] = rest[key];
    });
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class ProfileTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    const {
      createdAt,
      modifiedAt,
      profile
    } = options.res;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.profile = profile;
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class ProfileSchemaTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    this.properties = options.res.properties;
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EmailTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    const {
      accessToken,
      res
    } = options;
    const {
      id,
      profile,
      roles,
      status,
      _links
    } = res;
    this.id = id;
    this.profile = profile;
    this.roles = roles;
    this.status = status;
    this.get = async () => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'get',
        links: _links,
        transactionClassName: 'EmailTransaction'
      });
      return await fn();
    };
    this.delete = async () => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'delete',
        links: _links
      });
      return await fn();
    };
    this.challenge = async () => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'challenge',
        links: _links,
        transactionClassName: 'EmailChallengeTransaction'
      });
      return await fn();
    };
    if (_links.poll) {
      this.poll = async () => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'poll',
          links: _links,
          transactionClassName: 'EmailStatusTransaction'
        });
        return await fn();
      };
    }
    if (_links.verify) {
      this.verify = async payload => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'verify',
          links: _links
        });
        return await fn(payload);
      };
    }
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EmailStatusTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    const {
      res
    } = options;
    const {
      id,
      profile,
      expiresAt,
      status
    } = res;
    this.id = id;
    this.expiresAt = expiresAt;
    this.profile = profile;
    this.status = status;
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class EmailChallengeTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    const {
      accessToken,
      res
    } = options;
    const {
      id,
      expiresAt,
      profile,
      status,
      _links
    } = res;
    this.id = id;
    this.expiresAt = expiresAt;
    this.profile = profile;
    this.status = status;
    this.poll = async () => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'poll',
        links: _links,
        transactionClassName: 'EmailStatusTransaction'
      });
      return await fn();
    };
    this.verify = async payload => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'verify',
        links: _links
      });
      return await fn(payload);
    };
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class PhoneTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    const {
      res,
      accessToken
    } = options;
    const {
      id,
      profile,
      status,
      _links
    } = res;
    this.id = id;
    this.profile = profile;
    this.status = status;
    this.get = async () => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'get',
        links: _links,
        transactionClassName: 'PhoneTransaction'
      });
      return await fn();
    };
    this.delete = async () => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'delete',
        links: _links
      });
      return await fn();
    };
    this.challenge = async payload => {
      const fn = generateRequestFnFromLinks({
        oktaAuth,
        accessToken,
        methodName: 'challenge',
        links: _links
      });
      return await fn(payload);
    };
    if (_links.verify) {
      this.verify = async payload => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'verify',
          links: _links
        });
        return await fn(payload);
      };
    }
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var EmailRole;
(function (EmailRole) {
  EmailRole["PRIMARY"] = "PRIMARY";
  EmailRole["SECONDARY"] = "SECONDARY";
})(EmailRole || (EmailRole = {}));
var Status;
(function (Status) {
  Status["VERIFIED"] = "VERIFIED";
  Status["UNVERIFIED"] = "UNVERIFIED";
})(Status || (Status = {}));
var PasswordStatus;
(function (PasswordStatus) {
  PasswordStatus["NOT_ENROLLED"] = "NOT_ENROLLED";
  PasswordStatus["ACTIVE"] = "ACTIVE";
})(PasswordStatus || (PasswordStatus = {}));

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class PasswordTransaction extends BaseTransaction {
  constructor(oktaAuth, options) {
    super(oktaAuth, options);
    const {
      res,
      accessToken
    } = options;
    const {
      id,
      status,
      created,
      lastUpdated,
      _links
    } = res;
    this.id = id;
    this.status = status;
    this.created = created;
    this.lastUpdated = lastUpdated;
    if (this.status == PasswordStatus.NOT_ENROLLED) {
      this.enroll = async payload => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'enroll',
          links: _links,
          transactionClassName: 'PasswordTransaction'
        });
        return await fn(payload);
      };
    } else {
      this.get = async () => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'get',
          links: _links,
          transactionClassName: 'PasswordTransaction'
        });
        return await fn();
      };
      this.update = async payload => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'put',
          links: _links,
          transactionClassName: 'PasswordTransaction'
        });
        return await fn(payload);
      };
      this.delete = async () => {
        const fn = generateRequestFnFromLinks({
          oktaAuth,
          accessToken,
          methodName: 'delete',
          links: _links
        });
        return await fn();
      };
    }
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

async function sendRequest(oktaAuth, options) {
  const {
    accessToken: accessTokenObj
  } = oktaAuth.tokenManager.getTokensSync();
  const accessToken = options.accessToken || (accessTokenObj === null || accessTokenObj === void 0 ? void 0 : accessTokenObj.accessToken);
  const issuer = oktaAuth.getIssuerOrigin();
  const {
    url,
    method,
    payload
  } = options;
  const requestUrl = url.startsWith(issuer) ? url : `${issuer}${url}`;
  if (!accessToken) {
    throw new AuthSdkError('AccessToken is required to request MyAccount API endpoints.');
  }
  const res = await httpRequest(oktaAuth, Object.assign({
    headers: {
      'Accept': '*/*;okta-version=1.0.0'
    },
    accessToken,
    url: requestUrl,
    method
  }, payload && {
    args: payload
  }));
  const map = {
    EmailTransaction,
    EmailStatusTransaction,
    EmailChallengeTransaction,
    ProfileTransaction,
    ProfileSchemaTransaction,
    PhoneTransaction,
    PasswordTransaction
  };
  const TransactionClass = map[options.transactionClassName] || BaseTransaction;
  if (Array.isArray(res)) {
    return res.map(item => new TransactionClass(oktaAuth, {
      res: item,
      accessToken
    }));
  }
  return new TransactionClass(oktaAuth, {
    res,
    accessToken
  });
}
function generateRequestFnFromLinks({
  oktaAuth,
  accessToken,
  methodName,
  links,
  transactionClassName
}) {
  for (const method of ['GET', 'POST', 'PUT', 'DELETE']) {
    if (method.toLowerCase() === methodName) {
      const link = links.self;
      return async payload => sendRequest(oktaAuth, {
        accessToken,
        url: link.href,
        method,
        payload,
        transactionClassName
      });
    }
  }
  const link = links[methodName];
  if (!link) {
    throw new AuthSdkError(`No link is found with methodName: ${methodName}`);
  }
  return async payload => sendRequest(oktaAuth, {
    accessToken,
    url: link.href,
    method: link.hints.allow[0],
    payload,
    transactionClassName
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const getProfile = async (oktaAuth, options) => {
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/profile',
    method: 'GET',
    accessToken: options === null || options === void 0 ? void 0 : options.accessToken,
    transactionClassName: 'ProfileTransaction'
  });
  return transaction;
};
const updateProfile = async (oktaAuth, options) => {
  const {
    payload,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/profile',
    method: 'PUT',
    payload,
    accessToken,
    transactionClassName: 'ProfileTransaction'
  });
  return transaction;
};
const getProfileSchema = async (oktaAuth, options) => {
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/profile/schema',
    method: 'GET',
    accessToken: options === null || options === void 0 ? void 0 : options.accessToken,
    transactionClassName: 'ProfileSchemaTransaction'
  });
  return transaction;
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const getEmails = async (oktaAuth, options) => {
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/emails',
    method: 'GET',
    accessToken: options === null || options === void 0 ? void 0 : options.accessToken,
    transactionClassName: 'EmailTransaction'
  });
  return transaction;
};
const getEmail = async (oktaAuth, options) => {
  const {
    id,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/emails/${id}`,
    method: 'GET',
    accessToken,
    transactionClassName: 'EmailTransaction'
  });
  return transaction;
};
const addEmail = async (oktaAuth, options) => {
  const {
    accessToken,
    payload
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/emails',
    method: 'POST',
    payload,
    accessToken,
    transactionClassName: 'EmailTransaction'
  });
  return transaction;
};
const deleteEmail = async (oktaAuth, options) => {
  const {
    id,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/emails/${id}`,
    method: 'DELETE',
    accessToken
  });
  return transaction;
};
const sendEmailChallenge = async (oktaAuth, options) => {
  const {
    id,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/emails/${id}/challenge`,
    method: 'POST',
    accessToken,
    transactionClassName: 'EmailChallengeTransaction'
  });
  return transaction;
};
const getEmailChallenge = async (oktaAuth, options) => {
  const {
    emailId,
    challengeId,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/emails/${emailId}/challenge/${challengeId}`,
    method: 'POST',
    accessToken,
    transactionClassName: 'EmailChallengeTransaction'
  });
  return transaction;
};
const verifyEmailChallenge = async (oktaAuth, options) => {
  const {
    emailId,
    challengeId,
    payload,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/emails/${emailId}/challenge/${challengeId}/verify`,
    method: 'POST',
    payload,
    accessToken
  });
  return transaction;
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const getPhones = async (oktaAuth, options) => {
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/phones',
    method: 'GET',
    accessToken: options === null || options === void 0 ? void 0 : options.accessToken,
    transactionClassName: 'PhoneTransaction'
  });
  return transaction;
};
const getPhone = async (oktaAuth, options) => {
  const {
    accessToken,
    id
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/phones/${id}`,
    method: 'GET',
    accessToken,
    transactionClassName: 'PhoneTransaction'
  });
  return transaction;
};
const addPhone = async (oktaAuth, options) => {
  const {
    accessToken,
    payload
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/phones',
    method: 'POST',
    payload,
    accessToken,
    transactionClassName: 'PhoneTransaction'
  });
  return transaction;
};
const deletePhone = async (oktaAuth, options) => {
  const {
    id,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/phones/${id}`,
    method: 'DELETE',
    accessToken
  });
  return transaction;
};
const sendPhoneChallenge = async (oktaAuth, options) => {
  const {
    accessToken,
    id,
    payload
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/phones/${id}/challenge`,
    method: 'POST',
    payload,
    accessToken
  });
  return transaction;
};
const verifyPhoneChallenge = async (oktaAuth, options) => {
  const {
    id,
    payload,
    accessToken
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/phones/${id}/verify`,
    method: 'POST',
    payload,
    accessToken
  });
  return transaction;
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const getPassword = async (oktaAuth, options) => {
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/password`,
    method: 'GET',
    accessToken: options === null || options === void 0 ? void 0 : options.accessToken,
    transactionClassName: 'PasswordTransaction'
  });
  return transaction;
};
const enrollPassword = async (oktaAuth, options) => {
  const {
    accessToken,
    payload
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/password',
    method: 'POST',
    payload,
    accessToken,
    transactionClassName: 'PasswordTransaction'
  });
  return transaction;
};
const updatePassword = async (oktaAuth, options) => {
  const {
    accessToken,
    payload
  } = options;
  const transaction = await sendRequest(oktaAuth, {
    url: '/idp/myaccount/password',
    method: 'PUT',
    payload,
    accessToken,
    transactionClassName: 'PasswordTransaction'
  });
  return transaction;
};
const deletePassword = async (oktaAuth, options) => {
  const transaction = await sendRequest(oktaAuth, {
    url: `/idp/myaccount/password`,
    method: 'DELETE',
    accessToken: options === null || options === void 0 ? void 0 : options.accessToken
  });
  return transaction;
};

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

var api = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addEmail: addEmail,
    addPhone: addPhone,
    deleteEmail: deleteEmail,
    deletePassword: deletePassword,
    deletePhone: deletePhone,
    enrollPassword: enrollPassword,
    getEmail: getEmail,
    getEmailChallenge: getEmailChallenge,
    getEmails: getEmails,
    getPassword: getPassword,
    getPhone: getPhone,
    getPhones: getPhones,
    getProfile: getProfile,
    getProfileSchema: getProfileSchema,
    sendEmailChallenge: sendEmailChallenge,
    sendPhoneChallenge: sendPhoneChallenge,
    updatePassword: updatePassword,
    updateProfile: updateProfile,
    verifyEmailChallenge: verifyEmailChallenge,
    verifyPhoneChallenge: verifyPhoneChallenge
});

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinMyAccount(Base) {
  return class OktaAuthMyAccount extends Base {
    constructor(...args) {
      super(...args);
      this.myaccount = Object.entries(api).filter(([name]) => name !== 'default').reduce((acc, [name, fn]) => {
        acc[name] = fn.bind(null, this);
        return acc;
      }, {});
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function addStateToken(res, options) {
  var builtArgs = {};
  Object.assign(builtArgs, options);
  if (!builtArgs.stateToken && res.stateToken) {
    builtArgs.stateToken = res.stateToken;
  }
  return builtArgs;
}
function getStateToken(res) {
  return addStateToken(res);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function transactionStatus(sdk, args) {
  args = addStateToken(sdk, args);
  return post(sdk, sdk.getIssuerOrigin() + '/api/v1/authn', args, {
    withCredentials: true
  });
}
function resumeTransaction(sdk, tx, args) {
  if (!args || !args.stateToken) {
    var stateToken = getSavedStateToken(sdk);
    if (stateToken) {
      args = {
        stateToken: stateToken
      };
    } else {
      return Promise.reject(new AuthSdkError('No transaction to resume'));
    }
  }
  return transactionStatus(sdk, args).then(function (res) {
    return tx.createTransaction(res);
  });
}
function introspectAuthn(sdk, tx, args) {
  if (!args || !args.stateToken) {
    var stateToken = getSavedStateToken(sdk);
    if (stateToken) {
      args = {
        stateToken: stateToken
      };
    } else {
      return Promise.reject(new AuthSdkError('No transaction to evaluate'));
    }
  }
  return transactionStep(sdk, args).then(function (res) {
    return tx.createTransaction(res);
  });
}
function transactionStep(sdk, args) {
  args = addStateToken(sdk, args);
  return post(sdk, sdk.getIssuerOrigin() + '/api/v1/authn/introspect', args, {
    withCredentials: true
  });
}
function transactionExists(sdk) {
  return !!getSavedStateToken(sdk);
}
function postToTransaction(sdk, tx, url, args, options) {
  options = Object.assign({
    withCredentials: true
  }, options);
  return post(sdk, url, args, options).then(function (res) {
    return tx.createTransaction(res);
  });
}
function getSavedStateToken(sdk) {
  const storage = sdk.options.storageUtil.storage;
  return storage.get(STATE_TOKEN_KEY_NAME);
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function link2fn(sdk, tx, res, obj, link, ref) {
  if (Array.isArray(link)) {
    return function (name, opts) {
      if (!name) {
        throw new AuthSdkError('Must provide a link name');
      }
      var lk = find(link, {
        name: name
      });
      if (!lk) {
        throw new AuthSdkError('No link found for that name');
      }
      return link2fn(sdk, tx, res, obj, lk, ref)(opts);
    };
  } else if (link.hints && link.hints.allow && link.hints.allow.length === 1) {
    var method = link.hints.allow[0];
    switch (method) {
      case 'GET':
        return function () {
          return get(sdk, link.href, {
            withCredentials: true
          });
        };
      case 'POST':
        return function (opts) {
          if (ref && ref.isPolling) {
            ref.isPolling = false;
          }
          var data = addStateToken(res, opts);
          if (res.status === 'MFA_ENROLL' || res.status === 'FACTOR_ENROLL') {
            Object.assign(data, {
              factorType: obj.factorType,
              provider: obj.provider
            });
          }
          var params = {};
          var autoPush = data.autoPush;
          if (autoPush !== undefined) {
            if (typeof autoPush === 'function') {
              try {
                params.autoPush = !!autoPush();
              } catch (e) {
                return Promise.reject(new AuthSdkError('AutoPush resulted in an error.'));
              }
            } else if (autoPush !== null) {
              params.autoPush = !!autoPush;
            }
            data = omit(data, 'autoPush');
          }
          var rememberDevice = data.rememberDevice;
          if (rememberDevice !== undefined) {
            if (typeof rememberDevice === 'function') {
              try {
                params.rememberDevice = !!rememberDevice();
              } catch (e) {
                return Promise.reject(new AuthSdkError('RememberDevice resulted in an error.'));
              }
            } else if (rememberDevice !== null) {
              params.rememberDevice = !!rememberDevice;
            }
            data = omit(data, 'rememberDevice');
          } else if (data.profile && data.profile.updatePhone !== undefined) {
            if (data.profile.updatePhone) {
              params.updatePhone = true;
            }
            data.profile = omit(data.profile, 'updatePhone');
          }
          var href = link.href + toQueryString(params);
          return postToTransaction(sdk, tx, href, data);
        };
    }
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthPollStopError extends CustomError {
  constructor() {
    const message = 'The poll was stopped by the sdk';
    super(message);
  }
  /*LWC compiler v3.1.3*/
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function getPollFn(sdk, res, ref) {
  return function (options) {
    var delay$1;
    var rememberDevice;
    var autoPush;
    var transactionCallBack;
    if (isNumber(options)) {
      delay$1 = options;
    } else if (isObject(options)) {
      options = options;
      delay$1 = options.delay;
      rememberDevice = options.rememberDevice;
      autoPush = options.autoPush;
      transactionCallBack = options.transactionCallBack;
    }
    if (!delay$1 && delay$1 !== 0) {
      delay$1 = DEFAULT_POLLING_DELAY;
    }
    var pollLink = getLink(res, 'next', 'poll');
    function pollFn() {
      var opts = {};
      if (typeof autoPush === 'function') {
        try {
          opts.autoPush = !!autoPush();
        } catch (e) {
          return Promise.reject(new AuthSdkError('AutoPush resulted in an error.'));
        }
      } else if (autoPush !== undefined && autoPush !== null) {
        opts.autoPush = !!autoPush;
      }
      if (typeof rememberDevice === 'function') {
        try {
          opts.rememberDevice = !!rememberDevice();
        } catch (e) {
          return Promise.reject(new AuthSdkError('RememberDevice resulted in an error.'));
        }
      } else if (rememberDevice !== undefined && rememberDevice !== null) {
        opts.rememberDevice = !!rememberDevice;
      }
      var href = pollLink.href + toQueryString(opts);
      return post(sdk, href, getStateToken(res), {
        saveAuthnState: false,
        withCredentials: true
      });
    }
    ref.isPolling = true;
    var retryCount = 0;
    var recursivePoll = function () {
      if (!ref.isPolling) {
        return Promise.reject(new AuthPollStopError());
      }
      return pollFn().then(function (pollRes) {
        retryCount = 0;
        if (pollRes.factorResult && pollRes.factorResult === 'WAITING') {
          if (!ref.isPolling) {
            throw new AuthPollStopError();
          }
          if (typeof transactionCallBack === 'function') {
            transactionCallBack(pollRes);
          }
          return delay(delay$1).then(recursivePoll);
        } else {
          ref.isPolling = false;
          return sdk.tx.createTransaction(pollRes);
        }
      }).catch(function (err) {
        if (err.xhr && (err.xhr.status === 0 || err.xhr.status === 429) && retryCount <= 4) {
          var delayLength = Math.pow(2, retryCount) * 1000;
          retryCount++;
          return delay(delayLength).then(recursivePoll);
        }
        throw err;
      });
    };
    return recursivePoll().catch(function (err) {
      ref.isPolling = false;
      throw err;
    });
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function links2fns(sdk, tx, res, obj, ref) {
  var fns = {};
  for (var linkName in obj._links) {
    if (!Object.prototype.hasOwnProperty.call(obj._links, linkName)) {
      continue;
    }
    var link = obj._links[linkName];
    if (linkName === 'next') {
      linkName = link.name;
    }
    if (link.type) {
      fns[linkName] = link;
      continue;
    }
    switch (linkName) {
      case 'poll':
        fns.poll = getPollFn(sdk, res, ref);
        break;
      default:
        var fn = link2fn(sdk, tx, res, obj, link, ref);
        if (fn) {
          fns[linkName] = fn;
        }
    }
  }
  return fns;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function flattenEmbedded(sdk, tx, res, obj, ref) {
  obj = obj || res;
  obj = clone(obj);
  if (Array.isArray(obj)) {
    var objArr = [];
    for (var o = 0, ol = obj.length; o < ol; o++) {
      objArr.push(flattenEmbedded(sdk, tx, res, obj[o], ref));
    }
    return objArr;
  }
  var embedded = obj._embedded || {};
  for (var key in embedded) {
    if (!Object.prototype.hasOwnProperty.call(embedded, key)) {
      continue;
    }
    if (isObject(embedded[key]) || Array.isArray(embedded[key])) {
      embedded[key] = flattenEmbedded(sdk, tx, res, embedded[key], ref);
    }
  }
  var fns = links2fns(sdk, tx, res, obj, ref);
  Object.assign(embedded, fns);
  obj = omit(obj, '_embedded', '_links');
  Object.assign(obj, embedded);
  return obj;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

class AuthnTransactionImpl {
  constructor(sdk, tx, res = null) {
    this.data = undefined;
    this.status = undefined;
    if (res) {
      this.data = res;
      Object.assign(this, flattenEmbedded(sdk, tx, res, res, {}));
      delete this.stateToken;
      if (res.status === 'RECOVERY_CHALLENGE' && !res._links) {
        this.cancel = function () {
          return Promise.resolve(tx.createTransaction());
        };
      }
    }
  }
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function createAuthnTransactionAPI(sdk) {
  const tx = {
    status: transactionStatus.bind(null, sdk),
    resume(args) {
      return resumeTransaction(sdk, tx, args);
    },
    exists: transactionExists.bind(null, sdk),
    introspect(args) {
      return introspectAuthn(sdk, tx, args);
    },
    createTransaction: res => {
      return new AuthnTransactionImpl(sdk, tx, res);
    },
    postToTransaction: (url, args, options) => {
      return postToTransaction(sdk, tx, url, args, options);
    }
  };
  return tx;
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function fingerprint(sdk, options) {
  options = options || {};
  if (!isFingerprintSupported()) {
    return Promise.reject(new AuthSdkError('Fingerprinting is not supported on this device'));
  }
  var timeout;
  var iframe;
  var listener;
  var promise = new Promise(function (resolve, reject) {
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    listener = function listener(e) {
      if (!e || !e.data || e.origin !== sdk.getIssuerOrigin()) {
        return;
      }
      try {
        var msg = JSON.parse(e.data);
      } catch (err) {
        return;
      }
      if (!msg) {
        return;
      }
      if (msg.type === 'FingerprintAvailable') {
        return resolve(msg.fingerprint);
      }
      if (msg.type === 'FingerprintServiceReady') {
        e.source.postMessage(JSON.stringify({
          type: 'GetFingerprint'
        }), e.origin);
      }
    };
    addListener(window, 'message', listener);
    iframe.src = sdk.getIssuerOrigin() + '/auth/services/devicefingerprint';
    document.body.appendChild(iframe);
    timeout = setTimeout(function () {
      reject(new AuthSdkError('Fingerprinting timed out'));
    }, (options === null || options === void 0 ? void 0 : options.timeout) || 15000);
  });
  return promise.finally(function () {
    clearTimeout(timeout);
    removeListener(window, 'message', listener);
    if (document.body.contains(iframe)) {
      iframe.parentElement.removeChild(iframe);
    }
  });
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

function mixinAuthn(Base) {
  return class OktaAuthTx extends Base {
    constructor(...args) {
      super(...args);
      this.authn = this.tx = createAuthnTransactionAPI(this);
      this.fingerprint = fingerprint.bind(null, this);
    }
    async signIn(opts) {
      opts = clone(opts || {});
      const _postToTransaction = options => {
        delete opts.sendFingerprint;
        return this.tx.postToTransaction('/api/v1/authn', opts, options);
      };
      if (!opts.sendFingerprint) {
        return _postToTransaction();
      }
      return this.fingerprint().then(function (fingerprint) {
        return _postToTransaction({
          headers: {
            'X-Device-Fingerprint': fingerprint
          }
        });
      });
    }
    async signInWithCredentials(opts) {
      return this.signIn(opts);
    }
    forgotPassword(opts) {
      return this.tx.postToTransaction('/api/v1/authn/recovery/password', opts);
    }
    unlockAccount(opts) {
      return this.tx.postToTransaction('/api/v1/authn/recovery/unlock', opts);
    }
    verifyRecoveryToken(opts) {
      return this.tx.postToTransaction('/api/v1/authn/recovery/token', opts);
    }
    /*LWC compiler v3.1.3*/
  };
}

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const OptionsConstructor = createIdxOptionsConstructor();
const StorageManager = createIdxStorageManager();
const TransactionManager = createIdxTransactionManager();
const WithIdx = createOktaAuthIdx(StorageManager, OptionsConstructor, TransactionManager);
const WithMyAccount = mixinMyAccount(WithIdx);
const WithAuthn = mixinAuthn(WithMyAccount);
class OktaAuth extends WithAuthn {
  constructor(options) {
    super(options);
  }
  /*LWC compiler v3.1.3*/
}

class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.clientId = '';
  }
  connectedCallback() {
    console.log('haiii');
    const auth = new OktaAuth({
      clientId: '0oa79yd85chdQKJSQ5d7',
      redirectUri: 'localhost:3000',
      issuer: 'https://dev-23592845.okta.com/oauth2/default'
    });
    this.clientId = auth.options.clientId;
    console.log({
      auth
    });
  }
  /*LWC compiler v3.1.3*/
}
registerDecorators(App, {
  fields: ["clientId"]
});
var App$1 = registerComponent(App, {
  tmpl: _tmpl,
  sel: "x-app",
  apiVersion: 59
});

const elm = createElement("x-app", {
  is: App$1
});
document.body.appendChild(elm);
