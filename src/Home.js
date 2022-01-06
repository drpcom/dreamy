import React from 'react';
import './Home.css';
import FeaturedBlurb from './FeaturedBlurb.js';
import LatestBlurb from './LatestBlurb.js';
import pineapple from './images/pineapple.jpg';
import plainwater from './images/plainwater.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="welcome-container">
                <div className="welcome-title">
                    <p>dreamy.io</p>
                </div>
            </div>
            <div className="section-one">
                <FeaturedBlurb 
                heading="Featured Entry" 
                title="Classic Fall Dream"
                image={pineapple} 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. In nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed. Habitant morbi tristique senectus et netus et. Sit amet facilisis magna etiam tempor orci eu. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Malesuada nunc vel risus commodo viverra. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Cras tincidunt lobortis feugiat vivamus at augue eget. Tempus urna et pharetra pharetra massa massa ultricies mi. Nullam vehicula ipsum a arcu. Non nisi est sit amet facilisis magna etiam tempor orci. Montes nascetur ridiculus mus mauris vitae. Ultricies leo integer malesuada nunc vel. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Iaculis urna id volutpat lacus laoreet non curabitur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Egestas erat imperdiet sed euismod nisi. Quis risus sed vulputate odio ut. In aliquam sem fringilla ut. Faucibus nisl tincidunt eget nullam non."
                url="http://drpcom.proboards.com"
                />
                <FeaturedBlurb 
                heading="Newest Entry" 
                title="You Killed Kenny!"
                image={plainwater} 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. In nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed. Habitant morbi tristique senectus et netus et. Sit amet facilisis magna etiam tempor orci eu. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Malesuada nunc vel risus commodo viverra. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Cras tincidunt lobortis feugiat vivamus at augue eget. Tempus urna et pharetra pharetra massa massa ultricies mi. Nullam vehicula ipsum a arcu. Non nisi est sit amet facilisis magna etiam tempor orci. Montes nascetur ridiculus mus mauris vitae. Ultricies leo integer malesuada nunc vel. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Iaculis urna id volutpat lacus laoreet non curabitur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Egestas erat imperdiet sed euismod nisi. Quis risus sed vulputate odio ut. In aliquam sem fringilla ut. Faucibus nisl tincidunt eget nullam non."
                url="http://drpcom.proboards.com"
                />
            </div>
            <div className="section-two">
                <LatestBlurb 
                heading="Latest"
                titleOne="You Killed Kenny!"
                titleTwo="Planet Jumping"
                titleThree="Fall Dream"
                titleFour="Why am I always in school?"
                titleFive="Confusion Illusion"
                />
            </div>
            <div className="section-three">
                <FeaturedBlurb 
                heading="Discover" 
                title="Why am I always in school?"
                image={plainwater} 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. In nisl nisi scelerisque eu ultrices vitae auctor. Elementum curabitur vitae nunc sed. Habitant morbi tristique senectus et netus et. Sit amet facilisis magna etiam tempor orci eu. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Malesuada nunc vel risus commodo viverra. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Cras tincidunt lobortis feugiat vivamus at augue eget. Tempus urna et pharetra pharetra massa massa ultricies mi. Nullam vehicula ipsum a arcu. Non nisi est sit amet facilisis magna etiam tempor orci. Montes nascetur ridiculus mus mauris vitae. Ultricies leo integer malesuada nunc vel. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Iaculis urna id volutpat lacus laoreet non curabitur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Egestas erat imperdiet sed euismod nisi. Quis risus sed vulputate odio ut. In aliquam sem fringilla ut. Faucibus nisl tincidunt eget nullam non."
                url="http://drpcom.proboards.com"
                />
            </div>
        </div>
    )
}

export default Home
