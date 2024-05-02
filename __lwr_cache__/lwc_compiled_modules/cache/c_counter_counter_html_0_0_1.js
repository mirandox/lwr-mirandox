import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./counter.css";

import _implicitScopedStylesheets from "./counter.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}>${"t1"}</p>`;
const $fragment2 = parseFragment`<button${3}>Increment</button>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, b: api_bind} = $api;
  const {_m0, _m1} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(1, null, api_dynamic_text($cmp.message) + ": " + api_dynamic_text($cmp.count))]), api_static_fragment($fragment2, 3, [api_static_part(0, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleIncrement))
    }
  }, null)])];
  /*LWC compiler v6.6.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-27vud7s34on";
tmpl.legacyStylesheetToken = "c-counter_counter";
freezeTemplate(tmpl);
