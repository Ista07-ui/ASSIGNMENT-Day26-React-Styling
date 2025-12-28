type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <article className="p-3 rounded-xl bg-white shadow">
      <div
        className="aspect-square rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <p className="font-bold mt-2">{name}</p>
      <p className="text-sm text-gray-500">${price}</p>
    </article>
  );
};

export default ProductCard;
