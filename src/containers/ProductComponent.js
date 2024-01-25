import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id} className="w-full h-100 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 transform transition-transform hover:scale-110 m-4">
        <Link to={`/product/${id}`}>
        <div className="rounded overflow-hidden shadow-xl m-4 border-t-2 border-slate-100">
          <img className="w-full h-40 object-contain" src={image} alt={title} />
          <div className="px-6 py-4 overflow-hidden h-10">
            <div className="font-bold text-xl mb-2">{title}</div>
          </div>
          <div className="px-6 pt-4 pb-4">
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-wrap justify-center gap-2" >{renderList}</div>;
};

export default ProductComponent;