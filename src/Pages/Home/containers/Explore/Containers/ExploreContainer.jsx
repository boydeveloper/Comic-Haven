import { useAppContext } from '../../../../../context/AppContex';
function ExploreContainer({ children }) {
  const { exploreSection } = useAppContext();
  return (
    <section className="section-explore" ref={exploreSection}>
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
