import { List, ProductCard, PageLayout } from "../../components";
import { useProducts } from "../../hooks/useProducts";

export const ProductsPage = () => {
  const query = useProducts();
  return (
    <PageLayout>
      {query.error && query.error.message}
      {query.isLoading && "Loading..."}
      {query.data && (
        <List>
          {query.data.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </List>
      )}
      {query.data?.length === 0 && "There are no products to show..."}
    </PageLayout>
  );
};
