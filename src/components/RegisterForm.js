import React from "react";
import {useState} from "react";

const RegisterForm = () => {
    const [vorname, setVorname] = useState(false);
    const [nachname, setNachname] = useState(false);
    const [email, setEmail] = useState(false);
    const [numberOfGuests, setNumberOfGuests] = useState(false);
    const [, setRadioButton] = useState(false);

    let reply = '';

    const formObject = {
        vorname: '',
        nachname: '',
        email: '',
        numberOfGuest: '',
        reply: ''
    };
    const handleVorname = (e) => {
        setVorname(e.target.value)
    };
    const handleNachname = (e) => {
        setNachname(e.target.value)
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleNumberOfGuests = (e) => {
        setNumberOfGuests(e.target.value)
    };
    const handleRadioButton = (e) => {
        setRadioButton(true);
        reply = e.target.value;
    };

    const onSubmit = () => {
        formObject.vorname = vorname;
        formObject.nachname = nachname;
        formObject.email = email;
        formObject.numberOfGuests = numberOfGuests;
        formObject.reply = reply;
    };


    return (
        <section>
            <form action="https://getform.io/f/1cecb171-471c-4fbf-b745-2a2eb4e97556" method="post">
                <div className="row gtr-uniform gtr-50">
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="vorname" id="vorname" placeholder="Vorname"
                               onChange={e => handleVorname(e)}/>
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="nachname" id="nachname" placeholder="Nachname"
                               onChange={e => handleNachname(e)}/>
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-Mail"
                            onChange={e => handleEmail(e)}
                        />
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input
                            type="text"
                            pattern="[0-9]*"
                            name="numberOfGuests"
                            id="numberOfGuests"
                            placeholder="Anzahl der Gäste"
                            onChange={e => handleNumberOfGuests(e)}
                        />
                    </div>
                    <div className="col-4 col-12-medium">
                        <input
                            type="radio"
                            id="overstay"
                            name="overstayDefinition"
                            value="overstay"
                            onChange={e => handleRadioButton(e)}
                            defaultChecked
                        />
                        <label htmlFor="overstay">Ja, ich/wir kommen und bleiben über Nacht</label>
                    </div>
                    <div className="col-4 col-12-medium">
                        <input
                            type="radio"
                            id="non-overstay"
                            name="overstayDefinition"
                            value="non-overstay"
                            onChange={e => handleRadioButton(e)}
                        />
                        <label htmlFor="non-overstay">Ja, ich/wir kommen und bleiben nicht über Nacht</label>
                    </div>
                    <div className="col-4 col-12-medium">
                        <input
                            type="radio"
                            id="exclude"
                            name="overstayDefinition"
                            value="exclude"
                            onChange={e => handleRadioButton(e)}
                        />
                        <label htmlFor="exclude">Nein, ich/wir können nicht kommen</label>
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value="Anmeldung senden"
                                    className="primary"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>
    )
};

export default RegisterForm;
