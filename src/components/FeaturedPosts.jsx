import { POST_FEATURED_LIMIT } from '../utils/constants';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';

const FeaturedPosts = ({ posts, loading }) => {
  const skeletonArray = Array.from({ length: POST_FEATURED_LIMIT });

  if (!loading && posts.length === 0) {
    return (
      <section className="section top-posts">
        <h2 className="section-title">Featured Posts (Top 3)</h2>
        <div className="no-posts">
          <p>
            No posts found matching your search or filters. <br />
            The API misbehaves sometimes so... 😕 Please try refreshing.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section top-posts">
      <h2 className="section-title">Featured Posts (Top 3)</h2>
      <div className="top-post-grid">
        {loading
          ? skeletonArray.map((_, idx) => <PostCardSkeleton key={idx} />)
          : posts.map((post) => <PostCard key={post.urn} post={post} />)}
      </div>
    </section>
  );
};

export default FeaturedPosts;
