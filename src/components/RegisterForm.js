import React from "react";

const RegisterForm = () => {
    return (
        <div className="row gtr-uniform gtr-50">
            <div className="col-6 col-12-xsmall">
                <input type="text" name="vorname" id="vorname" placeholder="Vorname" />
            </div>
            <div className="col-6 col-12-xsmall">
                <input type="text" name="nachname" id="nachname" placeholder="Nachname" />
            </div>
            <div className="col-6 col-12-xsmall">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div className="col-6 col-12-xsmall">
                <input
                    type="text"
                    pattern="[0-9]*"
                    name="numberOfGuests"
                    id="numberOfGuests"
                    placeholder="Anzahl der Gäste"
                />
            </div>
            <div className="col-4 col-12-medium">
                <input
                    type="radio"
                    id="overstay"
                    defaultChecked
                />
                <label htmlFor="priority-low">Ja, ich/wir kommen und bleiben über Nacht</label>
            </div>
            <div className="col-4 col-12-medium">
                <input
                    type="radio"
                    id="non-overstay"
                />
                <label htmlFor="priority-low">Ja, ich/wir kommen und bleiben nicht über Nacht</label>
            </div>
            <div className="col-4 col-12-medium">
                <input
                    type="radio"
                    id="exclude"
                />
                <label htmlFor="priority-low">Nein, ich/wir können nicht kommen</label>
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
    )
};

export default RegisterForm;
