import { useState } from 'react';
import RepostCard from './RepostCard';
import { POST_BODY_MAX_LENGTH } from '../utils/constants';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = POST_BODY_MAX_LENGTH;

  const author = post.author || {};
  const profilePic = author.profilePictures?.[0]?.url;
  const headline = author.headline || '';
  const fullName = author.fullName || 'Unknown';
  const postText = post.text || '';
  const postDate = new Date(post.postedDateTimestamp).toLocaleString();
  const reactions = post.socialActivityCountsInsight?.totalReactionCount || 0;
  const link = post.url;

  const media = post.video?.video?.[0]?.url || post.image?.[0]?.url || null;

  const isLongText = postText.length > maxLength;
  const displayText = expanded ? postText : postText.slice(0, maxLength);

  return (
    <div className="post-card">
      <div className="post-header">
        {profilePic && <img src={profilePic} alt="Author" />}
        <div>
          <strong>{fullName}</strong>
          <br />
          <small>{headline}</small>
        </div>
      </div>

      <p className="post-text">
        {displayText}
        {isLongText && (
          <span className="read-toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? ' Show less' : '... Read more'}
          </span>
        )}
      </p>

      {media && (
        <div className="post-media">
          {media.endsWith('.mp4') ? (
            <div className="media-wrapper">
              <video controls>
                <source src={media} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="media-wrapper">
              <img src={media} alt="Post Media" />
            </div>
          )}
        </div>
      )}

      {post.reposted && post.resharedPost && (
        <RepostCard resharedPost={post.resharedPost} link={post.url} />
      )}

      <div className="post-footer">
        <div className="post-meta">
          <span>{reactions} reactions</span>
          <span>{postDate}</span>
        </div>
        <a
          className="linkedin-btn"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default PostCard;
