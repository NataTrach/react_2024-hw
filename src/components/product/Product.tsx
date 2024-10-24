import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

type TypeProps = { item: IProductModel }

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.id}</h3>
            <h2>{item.title}</h2>
            <h2>{item.description}</h2>
            <h1>{item.price}</h1>
            <h3>{item.discountPercentage}</h3>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;