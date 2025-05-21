import { POST_LIST_LIMIT } from '../utils/constants';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';

const PostList = ({ posts, loading }) => {
  const skeletonArray = Array.from({ length: POST_LIST_LIMIT });

  if (!loading && posts.length === 0) {
    return (
      <div className="no-posts">
        <p>
          No posts found matching your search or filters. <br />
          The API misbehaves sometimes so... 😕 Please try refreshing.
        </p>
      </div>
    );
  }

  return (
    <div className="post-list">
      {loading
        ? skeletonArray.map((_, idx) => <PostCardSkeleton key={idx} />)
        : posts.map((post) => <PostCard key={post.urn} post={post} />)}
    </div>
  );
};

export default PostList;
