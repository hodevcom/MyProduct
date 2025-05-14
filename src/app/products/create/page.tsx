'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProductRequest } from '@/features/products/productsSlice';
import { Product } from '@/features/products/types';
import { useRouter } from 'next/navigation'

const ProductForm = () => {
  const dispatch = useDispatch();
  const route = useRouter()

  const initialValues = {
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nome é obrigatório'),
    category: Yup.string().required('Categoria é obrigatória'),
    price: Yup.number()
      .typeError('Informe um número')
      .positive('Preço deve ser positivo')
      .required('Preço é obrigatório'),
    description: Yup.string().required('Descrição é obrigatória'),
    image: Yup.string().url('URL inválida').required('Imagem é obrigatória'),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    try {
      const newProduct: Product = {
        id: Math.floor(Math.random() * 100000), // ou use uuid
        ...values,
        price: parseFloat(values.price),
      };

      dispatch(addProductRequest(newProduct));

      route.push("/")
    } catch(e){
      alert("Ocorreu um erro. Contate o administrador.")
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Produto</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm">Nome</label>
            <Field name="name" className="border border-gray-300 p-2 w-full rounded" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm">Categoria</label>
            <Field as="select" name="category" className="border border-gray-300 p-2 pt-2.5 pb-2.5 w-full rounded">
              <option value="">Selecione</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Livros">Livros</option>
              <option value="Roupas">Roupas</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm">Preço</label>
            <Field name="price" className="border border-gray-300 p-2 w-full rounded" />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm">Descrição</label>
            <Field name="description" as="textarea" className="border border-gray-300 p-2 w-full rounded" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm">URL da Imagem</label>
            <Field name="image" className="border border-gray-300 p-2 w-full rounded" />
            <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            Adicionar Produto
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductForm;
