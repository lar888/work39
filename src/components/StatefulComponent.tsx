import { useState } from 'react';

interface Props {
  title: string;
  author: string;
  date: string;
  summary: string;
  description: string;
  imageUrl: string;
}

const StatefulComponent = ({
  title,
  author,
  date,
  summary,
  description,
  imageUrl,
}: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="post-card">
      <img src={imageUrl} alt={title} className="post-card-image" />
      <div className="post-card-content">
        <h2>{title}</h2>
        <p className="post-card-meta">By {author} • {date}</p>
        <p>{summary}</p>
        {showDescription && <p className="post-description">{description}</p>}
        <button className="read-more" onClick={() => setShowDescription(prev => !prev)}>
          {showDescription ? 'Hide Description' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default StatefulComponent;
