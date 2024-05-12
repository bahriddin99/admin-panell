export interface GetParams {
    color: "string",
    cost: "number",
    count:" number",
    made_in: "string",
    product_name: "string" | undefined,
  
  }
  
  export interface ProducteStore {
    data: any[];
    getData: (params: GetParams) => Promise<any>;
  }
  
  export interface RequestProducts {
    get_product: (params: GetParams) => any;
  }