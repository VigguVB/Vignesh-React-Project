import React from "react";
import classes from './Header.module.css';
import prashanthLogo from '../Assets/prashanthLogo.jpeg'

const Header = () =>{

    const serviceScrollHandler = (event)=>{
        window.scrollBy(0,600);
        event.preventDefault();
    }


    const productHandler=()=>{
        window.alert("We are arriving soon on products")
    }

    const aboutScrollHandler = (event)=>{
        window.scrollBy(0,2150);
        event.preventDefault();
    }

    const contactScrollHandler = (event)=>{
        window.scrollBy(0,2560);
        event.preventDefault();
    }

    const termsScrollHandler = event =>{
        window.scrollBy(0,2870);
        event.preventDefault();
    }
    
    
    return(
        <div className={classes.headerDiv}>
            <img src={prashanthLogo} className={classes.logo} />
            <div>
                <header>
                    <h1 className={classes.company}>
                        SRI VINAYAKA TECHNOLOGIES
                    </h1>
                   
                    <p className={classes.tagline}>(AN EMBEDDED HUB)</p>
                </header>
            </div>
            <div className={classes.navigationDiv}>
                <ul className={classes.menulist}>
                    
                    <li onClick={serviceScrollHandler}><a href="">SERVICES</a></li>
                    <li onClick={productHandler}><a href="">PRODUCTS</a></li>
                    <li onClick={aboutScrollHandler}><a href="">ABOUT US</a></li>
                    <li onClick={contactScrollHandler}><a href="">CONTACT US</a></li>
                    <li onClick={termsScrollHandler}><a href="">T&C</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;