import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./counter.html";
class Counter extends LightningElement {
  constructor(...args) {
    super(...args);
    this.message = 'Increment and Decrement the counter value by clicking the buttons below.';
    this.count = 0;
  }
  handleIncrement() {
    this.count++;
  }
  handleDecrement() {
    this.count--;
  }
  /*LWC compiler v6.6.1*/
}
_registerDecorators(Counter, {
  fields: ["message", "count"]
});
export default _registerComponent(Counter, {
  tmpl: _tmpl,
  sel: "c-counter",
  apiVersion: 62
});