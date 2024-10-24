import {IDimentionModel} from "./IDimentionModel";
import {IRevewModel} from "./IRevewModel";

export interface IProductModel {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags": string[],
    "brand"?: string,
    "sku": string,
    "weight": number,
    "dimensions": IDimentionModel,
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": IRevewModel[],
    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string
    },
    "images": string[],
    "thumbnail": string
}