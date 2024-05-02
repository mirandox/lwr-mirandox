import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./users.css";

import _implicitScopedStylesheets from "./users.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}>${"t1"}</div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, i: api_iterator} = $api;
  return api_iterator($cmp.users, function (user) {
    return api_static_fragment($fragment1, api_key(1, user.id), [api_static_part(1, null, api_dynamic_text(user.name))]);
  });
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
tmpl.stylesheetToken = "lwc-1k5ppl0a508";
tmpl.legacyStylesheetToken = "c-users_users";
freezeTemplate(tmpl);
