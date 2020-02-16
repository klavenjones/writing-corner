import React from 'react'
import { Link } from 'react-router-dom'
  /* Markdown allowed me to do some formatting to the content */
import * as Markdown from 'react-markdown'



import './Blog-Post.css';
import moment from 'moment';


//Component will show the entire blog post
const BlogPost = ({ location: { state: { props } }}) => {

   
    let imgURL = props.image;
  



   return (
        <div className="site-content">
            
           <article className="entry">
                <header className="entry-header">
                    { imgURL ? <img src={imgURL} /> : <div></div> }
                    <h2>{props.title}</h2>
                    <div className="entry-meta">
                        <span className="posted-on">
                           <p className="entry-date published">{ moment(props.date).format('MMM Do YYYY') }</p>
                        </span>
                    </div>
                </header>
                <div className="entry-content">
                    <div className="entry-text">
                    
                      <Markdown source={props.content} />    
                    </div>
                </div>
            </article>
            <Link className="go-back" to={`/blog`}>
                <p>All Posts</p>
            </Link>
            {console.log(props)}
        </div>
   
    )

}

export default BlogPost;