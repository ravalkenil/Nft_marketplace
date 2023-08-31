import "../styles/globals.css";
import { Navbar, Footer } from "../Componets/Com_index";
import { NFTmarketplaceprovider } from "../context/NFTmarketplaceContext";

// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon ,sepolia} from 'wagmi/chains'

// const chains = [mainnet,sepolia]
// const projectId = 'a28c7bc7b556786d322dbdedeb8a4153';

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)

const App = ({ Component, pageProps }) => {
  
  return (
    <div>
      {/* <WagmiConfig config={wagmiConfig}> */}
      <NFTmarketplaceprovider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NFTmarketplaceprovider>
      {/* </WagmiConfig> */}
      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </div>
  );
};

export default App;

// 