import React from 'react';
import Article from './Article.js';
import pineapple from '../images/pineapple.jpg';

const Falling = () => {
    return (
        <React.Fragment>
                <Article 
                title="Classic Fall Dream"
                image={pineapple}
                tags={['dunces', 'flavor of the week', 'platts', 'gorin', 'Alabaster', 'fern', 'dove']}
                overview=
                "Recently, there has been a renewed interest in emo, especially midwest emo. These bands are heavily influenced by Cap'n Jazz and often have a strong bent towards math rock and post-rock in their song structure and guitar work. A few examples of these twinkledaddy bands are Street Smart Cyclist, Snowing, Algernon Cadwallader, The World Is A Beautiful Place & I Am No Longer Afraid to Die, and Glocca Morra. As this scene grew and grew in popularity, #emorevival became a near-mainstream style of indie rock which took from various facets of Midwest, screamo, and emo pop, as played by bands such as the Hotelier, Free Throw, and late-period You Blew It! There is even an emo pop revival scene centered around Midwest-influenced indie rock bands with mildly intricate guitar work and deeply personal, confessional lyrics. These bands include Modern Baseball, Sorority Noise, and the Front Bottoms. Within this scene is a style known as sparklepunk, which combines Braid-like twinkles with lo-fi, noodly college rock guitar work, built around a base of pop-punk. Sparklepunk bands include Mom Jeans, Darkle, and Donovan Wolfington."
                interpretation="I really didn’t expect The Brothers Karamazov to have much of an effect on me after I finished it. It didn’t knock me off my feet. But I’ve caught myself thinking about the characters a lot. The characters really do stay with you. Each one is so well-drawn. Mitya, Ivan, Alyosha, #Grushenka, Katerina Ivanovna, Smerdyakov, Lise, Madame Khokhlakov. Even characters like Snegiryov and Kolya Krasotkin. There’s just no flatness to any of them. Dostovesky didn’t know how to write a flat character."
                />
        </React.Fragment>
    )
}

export default Falling
