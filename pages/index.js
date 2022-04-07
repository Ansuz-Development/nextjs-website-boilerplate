import SEOItem from "../components/items/SEOItem";
import renderSection from "../components/sections";

const Home = ({ homepage, options }) => {
  return (
    <div>
      <SEOItem seo={homepage.attributes?.seo} />
      <main>
        {homepage.attributes?.sections?.map((section) => {
          return <div key={section.__typename}>{renderSection(section, options)}</div>;
        })}
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const homepage = {};
  const posts = [];

  return {
    props: {
      homepage,
      options: { posts },
    },
    // revalidate: 60,
  };
}
