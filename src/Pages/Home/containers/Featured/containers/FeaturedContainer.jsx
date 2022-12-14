function FeaturedContainer({ children }) {
  return (
    <div className="section-featured">
      <div className="container">
        <div className="featured">
          <h1 className="heading-primary">Featured</h1>
          <div className="featured__boxes">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedContainer;
