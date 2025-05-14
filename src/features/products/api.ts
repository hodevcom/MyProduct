import { ProductApiResponse } from './types';

export const fetchProductsApi = async (page: number, limit: number): Promise<ProductApiResponse> => {
  const res = await fetch(`/api/products?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error('Erro ao buscar produtos');
  return res.json();
};
