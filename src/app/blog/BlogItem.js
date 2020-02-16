import React from 'react'
import {Link} from 'react-router-dom';

/* Markdown module allowed me to truncate blog posts  and add formatting */
import * as Markdown from 'react-markdown'

import './BlogItem.css';
import moment from 'moment';
//This component will represent each blog article posted
const BlogItem = (props) => (
  <div>
    <article className="entry snippet">
      <header className="entry-header">
        <Link   to={{
          pathname: `/blog/${props.path}`,
          state: { props }
        }}
      >
          <h2>{props.title}</h2>
        </Link>
        
        
        <div className="entry-meta">
          <span className="posted-on">
            <p className="entry-date published">{ moment(props.date).format('MMM Do YYYY') }</p>
          </span>
         
          <Markdown source={props.content.split(" ").splice(0,40).join(" ").concat('...')} />
          <Link className="read-more" to={{ pathname: `/blog/${props.path}`, state: { props }}}>
              <p>Read More...</p>
          </Link>
        </div>
       
      


      </header>
    </article>
  </div>
)

export default BlogItem