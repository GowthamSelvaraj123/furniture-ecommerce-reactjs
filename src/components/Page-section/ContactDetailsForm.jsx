import React, { useState } from 'react';
export default function ContactDetailsForm() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = () => {
        window.Email.send({
            Host: "smtp.gmail.com",
            Username: "gowthamdesigner94@gmail.com", // Your Gmail address
            Password: "mppgydldnmnrjnqt", // Your generated App password
            To: 'gowthamdesigner94@gmail.com', // Recipient's email
            From: "gowthamdesigner94@gmail.com", // Your Gmail address
            Subject: `New message from ${fname} ${lname}`,
            Body: message,
            Port: 587,
            Secure: false
        })
        .then((message) => alert("Mail sent successfully"))
        .catch((error) => alert(`Failed to send email: ${error}`));
    };

    return (
        <div className="untree_co-section">
            <div className="container">
                <div className="block">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8 pb-4">
                            <form onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="fname">First name</label>
                                            <input type="text" className="form-control" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="lname">Last name</label>
                                            <input type="text" className="form-control" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="text-black" htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mb-5">
                                    <label className="text-black" htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" cols="30" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary-hover-outline">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
