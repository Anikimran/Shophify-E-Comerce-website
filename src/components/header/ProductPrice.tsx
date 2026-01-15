import { props } from "@/index";

const ProductPrice = ({ item }: props) => {
  const price = item.price;

  const discountPrice = price - (price * item.discountPercentage) / 100;

  const formattedOriginalPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const formattedDiscountPrice = discountPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="flex items-center gap-2">
      {/* Original Price */}
      <p className="text-sm line-through text-gray-400">
        {formattedOriginalPrice}
      </p>

      {/* Discounted Price */}
      <p className="text-lg font-semibold text-red-500">
        {formattedDiscountPrice}
      </p>
    </div>
  );
};

export default ProductPrice;
