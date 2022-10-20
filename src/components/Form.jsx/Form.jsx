import { useState } from "react";
import s from "./Form.module.scss";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlSubmit = e => {

    }

    return (
        <div>
            <h2 className={s.title}>Reach out to us!</h2>
            <form encType='multipart/form-data' onSubmit={handlSubmit} id='add-contact'>
                <input type='text' name="name" className={s.input} placeholder="Your name" value={name} />
                
                <input type='text' name="email" className={s.input} placeholder="Your e-mail" value={email} />
                
                <input type='text' name="message" className={s.input} placeholder="Your message" value={message} />
                
                <button type="submit" className={s.submitBtn} >Send message</button>
            </form>
        </div>
    )
}