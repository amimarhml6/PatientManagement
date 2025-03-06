import './Home.css';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div 
            className='HomePage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div 
                className="picture"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
            </motion.div>

            <motion.div 
                className="texttt"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="textHome">
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        Welcome to <span id='spn' style={{color:"#1B5C9E"}}>Med</span><span id='spn' style={{color:"#1BB13C"}}>link</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        Our clinic is a place where you can feel safe and comfortable. 
                        We have the best doctors who are always ready to help you. 
                        We have the best equipment and the best service for you.
                    </motion.p>
                </div>

                <motion.div 
                    className="Statistic"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <motion.div 
                        className="card"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h1>+10</h1>
                        <p>Years of experience</p>
                    </motion.div>
                    <motion.div 
                        className="card"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h1>+50</h1>
                        <p>Doctors</p>
                    </motion.div>
                    <motion.div 
                        className="card"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h1>+1000</h1>
                        <p>Patients</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
