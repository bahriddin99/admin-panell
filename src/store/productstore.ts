import { create } from "zustand";

import product from "../service/products/products";

import { ProductsStore } from "../interface/product";
import Notifation from "../utils/notifation";

const useProductsStore = create<ProductsStore>((set) => ({
  data: [],
  isLoading: false,
  getData: async (params: any) => {
    try {
      set({ isLoading: true });
      const response = await product.get_products(params);
      console.log(response);
      if (response.status === 200) {
        response?.data?.products?.forEach((item: any, index: number) => {
          item.index = index + 1;
        });
        set({ data: response?.data?.products });
      }
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
  createProduct: async (data: any) => {
    try {
      const response = await product.create_product(data);
      if (response.status === 201) {
        Notifation({
          title: "Product successfully created",
          type: "success",
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductsStore;
