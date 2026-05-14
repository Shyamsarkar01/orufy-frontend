import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  return (

    <div className="products">

      <div className="products-grid">

        {
          products.map((product: any) => (

            <ProductCard
              key={product._id}
              product={product}
            />

          ))
        }

      </div>

    </div>
  );
}

export default Products;