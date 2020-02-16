
import axios from 'axios';

const apiKey = 'CxcmGJyHRXJeKaoR9wPkBifoIoOidjwUaQERppYpNia5nOCArX';
const secretKey = 'dEXZXsBHyO0dGclmX0YqgdAzJDvfz2mG2QgNhHZKDvNIxLqkWj';



const Tumblr = {

    
    getInfo(){
        axios.get(`https://api.tumblr.com/v2/blog/writingsilhouette.tumblr.com/info?api_key=${apiKey}`).then(result => {
            const postings = result.data.response;
            return postings;
    });
    },
    
    
    getPosts(){

        axios.get(`https://api.tumblr.com/v2/blog/writingsilhouette.tumblr.com/posts/text?api_key=${apiKey}&filter=text`).then(result => {
                const postings = result.data.response.posts;
                return postings;
                
        });
    },

    getPhoto(){
        axios.get(`https://api.tumblr.com/v2/blog/writingsilhouette.tumblr.com/posts/photo?api_key=${apiKey}`).then(result => {
            const postings = result.data.response.posts;
            return postings;
        });
    }
   


}

export default Tumblr;