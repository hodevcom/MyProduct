import { ProductFilterProps } from '@/features/products/types';
import { Field, Form, Formik } from 'formik';
import React from 'react';


const ProductFilterItems: React.FC<ProductFilterProps> = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="mb-4 flex flex-wrap gap-4">
        <Field
          type="text"
          name="search"
          placeholder="Buscar por nome"
          className="border border-gray-300 p-2 rounded"
        />
        <Field
          type="number"
          name="minPrice"
          placeholder="Preço mín"
          className="border border-gray-300 p-2 rounded"
        />
        <Field
          type="number"
          name="maxPrice"
          placeholder="Preço máx"
          className="border border-gray-300 p-2 rounded"
        />
        <Field as="select" name="sort" className="border border-gray-300 p-2 rounded">
          <option value="">Ordenar por</option>
          <option value="price_asc">Preço ↑</option>
          <option value="price_desc">Preço ↓</option>
          <option value="name_asc">Nome A-Z</option>
          <option value="name_desc">Nome Z-A</option>
        </Field>
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          Filtrar
        </button>
      </Form>
    </Formik>
  );
};

export default ProductFilterItems;