import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import Article from '../components/Article';
import SkeletonLoader from '../components/SkeletonLoader';

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
         
            // setIsLoading(true); 
         
         
          const response = await fetch("http://localhost:3000/posts");
          const data = await response.json();
          setPosts(data);
       
            // setIsLoading(false); 

       
        } catch (error) {
          console.error("Error fetching data:", error);
          // setIsLoading(false); 
        }
      };
  
      fetchData();
      }, []);

      // if (isLoading) {
      //   return <SkeletonLoader />;
      // }

  return (
    <div className="flex flex-col">
    
    <div className="border-t border-gray-200">
        {posts.map((post) => {
            if (post.type === "content" || "ads") {
            return <Content key={post.id} post={post} />;
            } 
            if (post.type === "article") {
            return <Article key={post.id} post={post} />;
            }
            return null; 
        })}
</div>
  </div>
  )
}

export default Posts
