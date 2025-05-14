'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { Product, ProductFilter } from '@/features/products/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '@/features/products/productsSlice';
import { RootState } from '@/store';
import Pagination from '@/components/Pagination';
import ProductFilterItems from '@/components/products/ProductFilterItems';
import Loading from '@/components/Loading';

export default function HomePage() {
  const dispatch = useDispatch();
  const { products, page, totalPages, loading } = useSelector((state: RootState) => state.products);

  const handleFetch = (pageToFetch: number, filter?: ProductFilter) => {
    dispatch(fetchProductsRequest({
      page: pageToFetch,
      search: filter?.search || undefined,
      minPrice: filter?.minPrice ? Number(filter?.minPrice) : undefined,
      maxPrice: filter?.maxPrice ? Number(filter?.maxPrice) : undefined,
      sort: filter?.sort || undefined,
    }));
  };

  useEffect(() => {
    handleFetch(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchProductsRequest({ page: newPage }));
    }
  };

  const handleFilterSubmit = (values: ProductFilter) => {
    handleFetch(1, values); 
  };

  return (
    <div className="container mx-auto px-4 mb-10">
      <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
      <ProductFilterItems initialValues={{
          search: '',
          minPrice: '',
          maxPrice: '',
          sort: '',
        }}
        onSubmit={handleFilterSubmit} />

      {loading && <Loading />}
      {!loading && products.length > 0 &&
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      }

      {!loading && products.length == 0 && 
        <>
          Nenhum produto encontrado. Revise os filtros
        </>
      }

      <Pagination currentPage={page} totalCount={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}