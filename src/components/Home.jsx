import React from "react";

export default function Home({productList}) {
  console.log(productList);
  return (
    <div>
      {productList &&
        productList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      hello from home
    </div>
  );
}
