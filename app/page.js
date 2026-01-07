import Categories from "@/components/categories/categories";

import Videos from "@/components/heroSection/videos";

function App() {
  return (
    <>
      <div className="HeroSection">
        <div className="categoryWrapper">
          <Categories />
        </div>
        <div className="videoSection">
          <Videos />
        </div>
      </div>
    </>
  );
}

export default App;
