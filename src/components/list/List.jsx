import React, { useState } from 'react';
import Card from '../card/Card';

function List({ posts }) {
  const [updatedPosts, setUpdatedPosts] = useState(posts);

  const handleDelete = (postId) => {
    // Update the state to exclude the deleted post
    const updated = updatedPosts.filter((post) => post.id !== postId);
    setUpdatedPosts(updated);
  };

  return (
    <div className='list'>
      {updatedPosts.length > 0 ? (
        updatedPosts.map(item => (
          <Card key={item.id} item={item} onDelete={handleDelete} />
        ))
      ) : (
        <p>No posts to view at the moment.</p>
      )}
    </div>
  );
}

export default List;
