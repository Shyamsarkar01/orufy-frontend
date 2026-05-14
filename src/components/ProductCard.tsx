import "./Productcard.css";

type Props = {

  product: {

    _id: string;

    productId: string;

    title: string;

    description: string;

    price: number;

    image: string;
  };

  onDelete?: (id: string) => void;
};

function ProductCard({
  product,
  onDelete
}: Props) {

  return (

    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt=""
        />

      </div>

      <div className="product-content">

        {/* Product ID */}

        <span className="product-id">

          {product.productId}

        </span>

        {/* Title */}

        <h2>
          {product.title}
        </h2>

        {/* Description */}

        <p>
          {product.description}
        </p>

        {/* Price */}

        <h3 className="price">
          ₹ {product.price}
        </h3>

        {/* Delete Button */}

        {
          onDelete && (

            <button
              className="delete-btn"
              onClick={() => onDelete(product._id)}
            >
              Delete
            </button>

          )
        }

      </div>

    </div>
  );
}

export default ProductCard;