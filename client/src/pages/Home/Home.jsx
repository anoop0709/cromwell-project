import './Home.css'
import { Header } from '../../components/Header/Header';
import { Promotion } from '../../components/Promotion/Promotion';
import { ProductList } from '../../components/Products/Products';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
    return (
        <div>
            <Header/>
            <div className='homePageContainer'>
               <Promotion/>
               <ProductList/>
            </div>
            <Footer/>
        </div>
    )
}