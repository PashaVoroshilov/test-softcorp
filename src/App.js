import { Layout } from "components/modules/Layout";
import { Header } from "components/modules/Header";
import { PageContent } from "components/modules/PageContent";
import { Footer } from "components/modules/Footer";
import {BannerSlider} from "components/widgets/BannerSlider";
import {CategoriesWidget} from "components/widgets/CategoriesWidget";
import {BannerSection} from "components/widgets/BannerSection";
import {Advantages} from "components/widgets/Advantages";

function App() {
  return (
      <Layout>
          <Header />
          <PageContent>
              <BannerSlider />
              <CategoriesWidget />
              <BannerSection />
              <Advantages />
          </PageContent>
          <Footer />
      </Layout>
  );
}

export default App;
