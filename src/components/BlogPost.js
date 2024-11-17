import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ sharedData }) => {
  const { postId } = useParams();
  const data = sharedData[postId - 1];
  return (
    <div>
      BlogPost
      <div key={data.id}>
        <p>Post ID - {data.id}</p>
        <p>Title - {data.title}</p>
        <p>Main Content - {data.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
