import '@/styles/globals.css'
import { Navbar,Footer } from '@/Componets/Com_index';

const App =({ Component, pageProps }) =>{

    return(
        <div>  
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}


export default App;
