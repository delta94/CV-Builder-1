import React from 'react';
import styles from './Homepage.scss';



// import Test from './../Test/Test';
import CvMaker from './../CvMaker/CvMaker';
import CvMaker1 from './../CvMaker1/CvMaker1';
import TopBar from './../CvMaker/TopBar';
import NavBar from './../CvMaker/NavBar';
import HomePage1 from './../HomePage1/HomePage1';
import Footer from './../../Footer/Footer'

class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                {/* <HomePage1 /> */}
                <div className={styles.header}>
                    <TopBar />
                    <NavBar /> 
                </div>
                <CvMaker1 />
                <Footer />


                </React.Fragment>
        )
    }
}

export default Homepage;