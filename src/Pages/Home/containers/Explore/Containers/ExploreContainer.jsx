function ExploreContainer({ children }) {
  return (
    <section className="section-explore" id="explore">
      <div className="container">
        <div className="Explore">
          <div className="heading-primary">Explore</div>
          <div className="Explore__boxes">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default ExploreContainer;
