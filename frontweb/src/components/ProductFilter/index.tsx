import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';

import './styles.css';
import { Category } from 'types/category';
import { Controller, set, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';

type ProductFilterData = {
  name?: string;
  category?: Category | null;
};

const ProductFilter = () => {
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);

  const { register, handleSubmit, control, setValue, getValues } =
    useForm<ProductFilterData>();

  const onSubmit = (formData: ProductFilterData) => {
    console.log('onSubmit', formData);
  };

  const handleChangeCategory = (category: Category) => {
    setValue('category', category);

    const obj: ProductFilterData = {
      name: getValues('name'),
      category: getValues('category'),
    };

    console.log('enviou', obj);
  };

  const handlerFormClear = () => {
    setValue('name', '');
    setValue('category', null);
  };

  useEffect(() => {
    requestBackend({ url: '/categories' }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  return (
    <div className="base-card product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            {...register('name', {})}
            type="text"
            className="form-control"
            placeholder="Nome do produto"
            name="name"
          />
          <button className="product-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="product-filter-bottom-container">
          <div className="product-filter-category-container">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={selectCategories}
                  placeholder="Categorias"
                  isClearable
                  onChange={(value) => handleChangeCategory(value as Category)}
                  classNamePrefix={'product-filter-select'}
                  getOptionLabel={(category: Category) => category.name}
                  getOptionValue={(category: Category) => String(category.id)}
                />
              )}
            />
          </div>
          <button
            onClick={handlerFormClear}
            className="btn btn-outline-secondary"
          >
            <span>LIMPAR </span>
            <span className="btn-product-filter-word">FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
