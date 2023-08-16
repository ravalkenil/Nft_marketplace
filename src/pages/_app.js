import "@/styles/globals.css";
import { Navbar, Footer } from "@/Componets/Com_index";
import { NFTmarketplaceprovider } from "../context/NFTmarketplaceContext";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <NFTmarketplaceprovider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NFTmarketplaceprovider>
    </div>
  );
};

export default App;

// 