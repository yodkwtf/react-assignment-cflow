const RepostCard = ({ resharedPost, link }) => {
  if (!resharedPost) return null;

  const resharedText = resharedPost.text || '';
  const authorName =
    resharedPost.author?.fullName || resharedPost.company?.name || 'Unknown';
  const resharedVideo = resharedPost.video?.video?.[0]?.url;
  const resharedImage = resharedPost.image?.[0]?.url;

  return (
    <a href={link} target="_blank" rel="noreferrer" className="reshared-link">
      <div className="reshared">
        <small>
          🔁 Reshared from <strong>{authorName}</strong>
        </small>
        <p>{resharedText}</p>

        {resharedVideo ? (
          <video controls width="100%">
            <source src={resharedVideo} type="video/mp4" />
          </video>
        ) : resharedImage ? (
          <img
            src={resharedImage}
            alt="Reshared Media"
            className="reshared-media"
          />
        ) : null}
      </div>
    </a>
  );
};

export default RepostCard;
