import React,{Fragment} from "react";
import classes from './Services.module.css';


const Services = () =>{
    return(
        <React.Fragment>
          <h1 className={classes.service}><strong>OUR SERVICES</strong></h1>
            <div className={classes.container}>
            
                <div className={classes.box}>
                    <ul className={classes.description}>
                        <li className={classes.description}>Sri Vinayaka Technologies (SVT) main focus on Engineering Services and supplying of genuine electronic components to valuable customers. </li>
                        <li className={classes.description}>In the Engineering Services SVT can provide complete Hardware solutions from brainstorming to design like Hardware Architecture, Circuit Design, PCB layout, Gerber Generation, BOM Preparation, PCB manufacturing, Components procurement, Assembling of Boards with EMS, Testing/Debugging in Customers' place.</li>
                        <li className={classes.description}>Our Support will be there till the completion of prototype also for mass production.</li>
                        <li className={classes.description}>SVT has its own global distributor chain to support on complete BOM sourcing of genuine passive and active components with competent price.</li>
                        <li className={classes.description}>SVT’s main target includes Automotive, Industrial & Railways. </li>
                    </ul>
                </div>
                <div className={classes.box}>
                    <h3 className={classes.description}>Our Business Philosophy : </h3>
                    <ul className={classes.description}>
                        <li className={classes.description}>SVT always focuses on commitment, sincerity and Creativity. SVT committed to its customers to deliver high value services as well as quality products in quick time of delivery. </li>
                        <li className={classes.description}>Our competitive pricing allows us to offer cost effective but hi-tech solutions to our customers.</li>
                        <li className={classes.description}>We work with our customer sincerely from Day one until completion of project/product by communicating each and every movement of design stages. </li>
                        <li className={classes.description}>SVT has its own ideas and innovations are an add-on advantage and can suggest customer’s during their product design discussion.</li>
                    </ul>
                </div>
        </div>
            </React.Fragment>
        
    )
}

export default Services;