import PropTypes from 'prop-types'; // Import PropTypes

function BlogPost({
  title, content, metaDescription, keywords,
}) {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div className="cta">
        <p>
          Interested in professional translation services?
          <a href="/contact">Contact us</a>
          {' '}
          today!
        </p>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a string
  content: PropTypes.string.isRequired, // Ensure content is a string
  metaDescription: PropTypes.string.isRequired, // Ensure metaDescription is a string
  keywords: PropTypes.string.isRequired, // Ensure keywords is a string
};

export default BlogPost;
