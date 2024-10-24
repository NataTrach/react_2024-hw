import React, {FC} from 'react';
import {apiProducts} from "../../date";
import {IProductModel} from "../models/IProductModel";
import Product from "../product/Product";

const Products: FC = () => {
    let products: IProductModel[] = apiProducts.products;
    return (
        <div>
            {
                products.map((product:IProductModel)=>(<Product item={product}/>))
            }

        </div>
    );
};

export default Products;