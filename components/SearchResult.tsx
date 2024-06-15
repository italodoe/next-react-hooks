import React, { useEffect, useState } from "react";
import { type Product, searchProducts } from "@/lib/products";
import ProductComponent from "./ProductComponent";

type SearchResultProps = {
  search: string;
};

export default function SearchResult({ search }: SearchResultProps) {
  const [productResults, setProductResult] = useState<Product[] | null>(null);
  useEffect(() => {
    searchProducts(search).then(setProductResult);
  }, [search]);
  if (productResults == null) {
    return <div>Loading...</div>;
  }

  if (productResults.length === 0) {
    return <div>No results</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-6 grid grid-cols-3 gap-4 max-w-screen-lg m-auto">
        {productResults.map((prod) => (
          <ProductComponent
            key={String(prod.id)}
            product={prod}
          ></ProductComponent>
        ))}
      </div>
    </div>
  );
}
