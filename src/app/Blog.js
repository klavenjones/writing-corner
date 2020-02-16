
import React from 'react';

import BlogItem from './blog/BlogItem'
import Header from './layout/Header'
import Router from './layout/Router';



import * as contentful from 'contentful'; //We will import this the Contentful framework in order to make requests to the Contentful API




class Blog extends React.Component {

    state = {
        postings: []
    }

    /* 
        This will create the contentful client object containing the accesstoken and spaceId in order to communicate
        with a specific API from contentful
    */
    client = contentful.createClient({
        space: '1hoco400p0b2',
        accessToken: 'ced52ba8857945c2f606b40709e4d2df7f71a654faee249972a28d4f3b3a8048'
    });

    //This will call the fetch post function and the setPosts function
    componentDidMount(){
      this.fetchPosts().then(this.setPosts);
     
    }
    
    //This function will fetch all the Contentful API Data 
    fetchPosts = () => this.client.getEntries(
    {
            order: '-sys.createdAt'
           
     })
    
    //This function will change the state of the component and put data in the postings array  
    setPosts = response => {
      this.setState({
        postings: response.items
        
      })

    }

    render(){
        return (
            //This will list all the existing blog entries available
            <div>
                { this.state.postings.map(({fields}, i) => <BlogItem key={i} {...fields} /> ) }
           </div>
           

        )
    }

}

export default Blog;