import './Home.css'
import { Navbar } from '../../components/Navbar/Navbar';
import { Promotion } from '../../components/Promotion/Promotion';
import { ProductList } from '../../components/Products/Products';

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='homePageContainer'>
               <Promotion/>
               <ProductList/>
            </div>
        </div>
    )
}