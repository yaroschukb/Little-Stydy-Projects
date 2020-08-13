import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as axios from 'axios';
import Post from './component/Post'
import Pagination from './component/Pagination';


const App = () => {

  const [posts, setPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [postPerPage] = useState(10)


  useEffect (()=>{
    const fetchPost = async ()=> {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPost(res.data)
      setLoading(false)
    }
    fetchPost()
  }, [])


  //Get current post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  //Change page
  const pagination = pageNumber => setCurrentPage(pageNumber)


      return (
    <div className="container mt-4">
       <h1 className='text-primary mb-3'>Title</h1>
      <Pagination postsPerPage={postPerPage} totalPost={posts.length} pagination={pagination}/>
      <Post posts={currentPost} loading={loading}/>
    </div>
  );
}

export default App;



/*



//Change page
const paginate = pageNumber => setCurrentPage(pageNumber)
*/
