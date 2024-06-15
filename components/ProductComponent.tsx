import { Product } from "@/lib/products";
import Image from "next/image";

type ProductComponentProps = {
  product: Product;
};

export default function ProductComponent({ product }: ProductComponentProps) {
  const { title, description, id, thumbnail } = product;
  return (
    <div className="col-span-1 flex flex-col bg-black border border-zinc-800 p-4 rounded-xl ">
      <div className=" ">
        <Image alt={title} src={thumbnail} width="100" height="100"></Image>
        <div>
          <h3 className="text-3lg">
            {title} [{String(id)}]
          </h3>
          <div className="text-xs text-slate-400">{description}</div>
        </div>
      </div>
    </div>
  );
}
