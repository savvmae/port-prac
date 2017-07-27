import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="app-body offset col-lg-10 col-lg-offset-1">
                <h2 className="col-lg-offset-2 headings white">Contact</h2>
                <ul>
                    <li className="contact-item"><a href="tel:843-906-3556">Phone</a></li>
                    <li className="contact-item"><a href="mailto:savannah.cosby123@gmail.com">Email</a></li>
                    <li className="contact-item"><a href="#">LinkedIn</a></li>
                    <li className="contact-item"><a href="#">Facebook</a></li>
                </ul>

            </div>
        );
    }
}

export default Contact;