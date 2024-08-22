import { ProductTyped } from "../types/product.type";

export const sortByCriteriaCalc = (
  criteria: "name" | "date_desc" | "date_asc" | "",
  productsList: ProductTyped[]
): ProductTyped[] => {
  if (criteria === "name") {
    const sortedProductList = [...productsList].sort(
      (a: ProductTyped, b: ProductTyped) => a.name.localeCompare(b.name)
    );
    return sortedProductList;
  }
  if (criteria === "date_desc") {
    const sortedProductList = [...productsList].sort(
      (a: ProductTyped, b: ProductTyped) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return sortedProductList;
  }

  if (criteria === "date_asc") {
    const sortedProductList = [...productsList].sort(
      (a: ProductTyped, b: ProductTyped) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return sortedProductList;
  }

  return productsList;
};
