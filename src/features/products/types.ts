export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

export type ProductApiResponse = {
  data: Product[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export type ProductFilter = {
  page?: number,
  search?: string,
  minPrice?: string,
  maxPrice?: string,
  sort?: string
}

export type ProductCardProps = {
  product: Product;
};

export type ProductFilterProps = {
  initialValues: ProductFilter;
  onSubmit: (values: ProductFilter) => void;
};

export type ProductsState = {
  products: Product[];
  page: number;
  totalPages: number;
  limit: number;
  loading: boolean;
  error: string | null;
};