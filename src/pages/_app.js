import '@/styles/globals.css'
import { Navbar } from '@/Componets/Com_index';

const App =({ Component, pageProps }) =>{

    return(
        <div>  
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}


export default App;
