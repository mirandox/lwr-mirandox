import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./users.html";
class Users extends LightningElement {
  constructor(...args) {
    super(...args);
    this.users = [];
  }
  connectedCallback() {
    fetch('/api/users').then(response => response.json()).then(data => {
      this.users = data.users;
    });
  }
  /*LWC compiler v6.6.1*/
}
_registerDecorators(Users, {
  track: {
    users: 1
  }
});
export default _registerComponent(Users, {
  tmpl: _tmpl,
  sel: "c-users",
  apiVersion: 62
});