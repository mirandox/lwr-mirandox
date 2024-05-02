import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {

    message = 'Increment and Decrement the counter value by clicking the buttons below.';
    
    count = 0;

    handleIncrement() {
        this.count++;
    }

    handleDecrement() {
        this.count--;
    }

}