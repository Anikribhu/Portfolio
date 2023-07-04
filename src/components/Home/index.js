import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const[letterClass,setletterClass] = useState('text-animate')
    const nameArray = ['r','e','s','t','h','a']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        return setTimeout(() => {
            setletterClass('text-animate-hover')
        },4000)
    },[])
    


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                /></h1>
                <h2>Google Cloud/Frontend Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>

            </div> 
            <Logo />
        </div>
        
    );
}


export default Home