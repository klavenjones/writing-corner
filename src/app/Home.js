import React from 'react';
import BlogPost from './layout/BlogPost'
import './layout/Blog-Post.css'


/* About me component that will have a brief biography of the poet.*/

const Home = () => (
   
    <div className="site-content">
            <article className="entry">
                <header className="entry-header">
                    <h1>About Me</h1>
                </header>
                <div className="entry-content">
                    <p>  
                    
                    Hello Everyone! My name is Curtis. Originally born in Brooklyn New York, and was raised in the Bronx with my two brothers, At 16, we moved to Mississippi. 
                    Once I moved down south that's when I really got into poetry. 
                    I felt more comfortable with conveying my emotions in writing as opposed to saying them out loud. I told stories through my poetry. 
                    Poetry became something I enjoyed. So much so, I even published some poetry with my mother, in our book called <a href="https://www.amazon.com/Family-Affair-Thoughts-Flowing-Mother/dp/1597440205">A Family Affair: Thoughts Flowing From The Soul</a>. 
                    Now I want to share some of my poetry with everyone with this blog and I hope you all enjoy some of my work. 

                   </p>
                </div>
            </article>
        </div>

);

export default Home;