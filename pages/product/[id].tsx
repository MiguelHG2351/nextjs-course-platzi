import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const [data, setData] = useState<TProduct | any>({});
  const { query } = useRouter();
  useEffect(() => {
    if (!query.id) return;

    const res = fetch(`/api/avo/${query.id}`);
    res
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [query.id]);
  console.log(data)

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      {data.id && <h2>{data?.name}</h2>}
    </section>
  );
};

export default ProductPage;
