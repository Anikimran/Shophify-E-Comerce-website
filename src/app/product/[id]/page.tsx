import AddToCardButton from "@/components/header/AddToCardButton";
import Container from "@/components/header/Container";
import ProductImage from "@/components/header/ProductImage";
import ProductPrice from "@/components/header/ProductPrice";
import { getData } from "@/helpers";
import { productType } from "@/index";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product: productType = await getData(
    `https://dummyjson.com/products/${id}`
  );

  return (
    <Container className="py-10 gap-10 grid grid-cols-1 md:grid-cols-2">
      <ProductImage images={product.images} />
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-bold">{product.title}</p>
        <div className="flex items-center justify-between gap-4">
          <ProductPrice item={product} />
          <div className="flex items-center gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <p
                key={index}
                className={`${
                  index < product.rating ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </p>
            ))}
            <p className="text-medium font-bold text-blue-500">
              {`  ${product.rating.toFixed(1)} Reviews`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-md text-red-800 pl-5">Saving to from</span>
          <p className=" text-md font-bold text-red-800">
            {product.discountPercentage}
          </p>
        </div>
        <p className="text-md font-bold capitalize">{product.category}</p>
        <p className="text-sm pl-5 ">{product.description}</p>
        <ProductPrice item={product} />
        <div>
          <AddToCardButton product={product} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
