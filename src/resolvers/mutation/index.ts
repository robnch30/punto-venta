import { NonEmptyArray } from "type-graphql";
import { ProductMutation } from './product'
import { SupplierMutation } from "./supplier";
import { TaxeMutation } from "./taxe";

export const mutations : NonEmptyArray<Function> = [
    ProductMutation,
    SupplierMutation,
    TaxeMutation
]