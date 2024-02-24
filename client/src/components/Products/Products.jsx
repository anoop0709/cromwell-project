import './Products.css';
import { productCategoryList } from '../../assets/config/productConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

export const ProductList = () => {
    return (
        <div className='productContainer'>
            <div className='categoryHeading'>
              <h1>Browse Our Categories</h1>
            </div>
            <div className="productWrapper">
            {
                productCategoryList.map((category) => (
                    <div className='categoryContainer' key={category.id}>
                        <div className='imgDiv'>
                            <img src={category.img} alt="" />
                        </div>
                        <div className='categoryLink'>
                            <p>{category.link}</p>
                            <FontAwesomeIcon className= 'arrowIcon' icon={faGreaterThan}/>
                        </div>
                    </div>

                ))
            }
            </div>
        </div>
    )
}