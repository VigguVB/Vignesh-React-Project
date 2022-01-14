import React,{useState} from "react";
import emailjs from 'emailjs-com'
import classes from './Form.module.css';

const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e2v2zwv', 'template_orinesc', e.target, 'user_y9j9WzksORmNJvBSP7sch').then(res => {
            console.log(res);
            if(res.status===200){
                setToggleParagraph(true);
                setDisabled(true);
                
            }else{
                setErrorMessage(true)
            }
        }).catch(err => { console.log(err) })


    }



    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredCompany, setEnteredCompany] = useState("");
    const [enteredContact, setEnteredContact] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const [enteredCountry, setEnteredCountry] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [toggleParagraph, setToggleParagraph] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)

    



    const nameHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const emailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const companyHandler = (event) => {
        setEnteredCompany(event.target.value)
    }
    const contactHandler = (event) => {
        setEnteredContact(event.target.value)
    }
    const cityHandler = (event) => {
        setEnteredCity(event.target.value)
    }
    const countryHandler = (event) => {
        setEnteredCountry(event.target.value)
    }

    // const sendHandler = () => {
        //  if(enteredName.trim()==="" || enteredEmail.trim()==="" ||enteredCompany.trim()==="" ||enteredContact.trim()==="" ||enteredCity.trim()==="" ||enteredCountry.trim()===""){
        //     window.alert("Please enter all the details before submiting the form");
        // }
        // else{
        // setToggleParagraph(true);
        // setDisabled(true);
        // }   
        // }


        // //     setEnteredName("");
        // //     setEnteredEmail("");
        // //     setEnteredCompany("");
        // //     setEnteredContact("");
        // //     setEnteredCity("");
        // //     setEnteredCountry("");
    // }

    return (
        <div className={classes.formDiv}>

            <h2 className={classes.heading}>
                Fill your contact details below and submit form. We will revert at the earliest on your inquiry.
            </h2>

            <form onSubmit={submitHandler}>
                
                <div className={classes.elementControl}>
                    <label className={classes.label}>Name: </label><br></br>
                    <input className={classes.input} onChange={nameHandler} value={enteredName} name="name" type="text" minLength="1" maxLength="25" required />
                
                    <label className={classes.label}>Email: </label><br></br>
                    <input className={classes.input} onChange={emailHandler} value={enteredEmail} name="email" type="email" required />
               
               
                    <label className={classes.label}>Company: </label><br></br>
                    <input className={classes.input} onChange={companyHandler} value={enteredCompany} name="company" type="text" minLength="1" maxLength="50" required />
               
                    <label className={classes.label}>Contact No: </label><br></br>
                    <input className={classes.input} onChange={contactHandler} value={enteredContact} name="contact" type="text" minLength="1" maxLength="16" required />
                
                    <label className={classes.label}>City: </label><br></br>
                    <input className={classes.input} onChange={cityHandler} value={enteredCity} name="city" type="text" minLength="1" maxLength="25" required />
                
                    <label className={classes.label}>Country: </label><br></br>
                    <input className={classes.input} onChange={countryHandler} value={enteredCountry} name="country" type="text" minLength="1" maxLength="25" required />
                
                    <label className={classes.label}>Comments: </label><br></br>
                    <textarea className={classes.inputComment} name="comments" type="message" rows="4" />
                
                    {/* <label className={classes.label}>Design File: </label><br></br>
                    <input className={classes.inputUpload} name="design" type="file" accept=".pdf" required />
                    <br></br>
                    <br></br>
                    <label className={classes.label}>BOM Upload: </label><br></br>
                    <input className={classes.inputUpload} name="bom" type="file" accept=".xls, .pdf, .ods" required /> */}
                </div>
                {!disabled && <button  className={classes.button} type="submit">SUBMIT</button>}
            {toggleParagraph && <p className={classes.paragraph}>Thank you, we will get back to you soon !</p>}
            {errorMessage && <p className={classes.error}>Sorry..... Something went wrong !</p>}
            </form>

        </div>
    )
        
}

export default Form;