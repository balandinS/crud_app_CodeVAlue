export type ProductTyped = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  date: string;
};

export interface IProductsState {
  products: ProductTyped[] | null;
  pageNumber: number;
}

export interface IPropsItemProduct extends ProductTyped {
  onDelete: (id: string) => void;
  onClickItem: (id: string) => void;
}

export interface IPropsSearchProduct {
  searchInput: string;
  handleOnChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IPropsSortProduct {
  sortByCriteria: string;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface IPropsTitleProductDetails {
  title: string;
}
