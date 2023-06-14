import ProductCrudCard from "components/ProductCrudCard";

const List = () => {

  const product = {
    id: 1,
    name: 'The Lord of the Rings',
    price: 90.5,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
    date: '2020-07-13T20:50:07.123450Z',
    categories: [
      {
        id: 2,
        name: 'Eletrônicos',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  return (
    <div>
      <button className="btn btn-primary text-white">ADICIONAR</button>
      <div>Search bar</div>
      <ProductCrudCard product={product}/>
      <ProductCrudCard product={product}/>
      <ProductCrudCard product={product}/>
    </div>
  );
};
export default List;
