import { LightningElement, track } from 'lwc';

export default class Users extends LightningElement {
    
    @track
    users = [];

    connectedCallback() {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                this.users = data.users;
            });
    }

}