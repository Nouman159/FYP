import React, { useState, useEffect } from 'react';
import '../Styles/Product.css';
import { message } from 'antd';
import productService from '../Services/productService';
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../Redux/loaderSlice";

const Products = () => {
    const [products, setProducts] = useState(null);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await productService.getAllApprovedProducts();
            console.log(response)
            setProducts(response);
        } catch (error) {
            message.error(error.response.data);
        }
        dispatch(HideLoading());
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(ShowLoading());
        fetchProducts();
    }, []);

    return (
        <div className='Products'>
            <h1 className='title'>Products</h1>
            {products ?
                <div className='products-container'>
                    {products.map((product, index) => (
                        <div key={index} className='product-card'>
                            <img src={product.image} alt={product.name}/>
                            <div className='name'>{product.name}</div>
                            <div className='description'>{product.description}</div>
                            <label className='owner-label' htmlFor='owner-name'>Owner Name</label>
                            <div id='owner-name'>{product.user.name}</div>
                        </div>
                    ))
                    }
                </div>
                :
                <h4 className='no-products'>No Products Yet</h4>
            }
        </div>
    )
};

export default Products;