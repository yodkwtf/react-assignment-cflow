const PostCardSkeleton = () => {
  return (
    <div className="post-card skeleton-card">
      <div className="skeleton-header">
        <div className="skeleton-avatar" />
        <div className="skeleton-lines">
          <div className="skeleton-line short" />
          <div className="skeleton-line" />
        </div>
      </div>

      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />

      <div className="skeleton-media" />

      <div className="post-footer">
        <div className="skeleton-line short" />
        <div className="skeleton-button" />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
