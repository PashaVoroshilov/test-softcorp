import { Layout } from "./components/modules/Layout";
import { Header } from "./components/modules/Header";
import { PageContent } from "./components/modules/PageContent";
import { Footer } from "./components/modules/Footer";

function App() {
  return (
      <Layout>
          <Header />
          <PageContent />
          <Footer />
      </Layout>
  );
}

export default App;
