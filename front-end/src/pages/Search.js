import Layout from "../components/layout/Layout.js";
import React from "react";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="containter">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.lenght < 1
              ? "No Product Found "
              : `Found ${values?.results.lenght}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="card m-2 m-auto mt-3"
                style={{ width: "18rem" }}
                key={p._id}
              >
                <img
                  src={`/api/v1/products/products-photo/${p._id}`}
                  className="card-img-top"
                  height={"200px"}
                  alt={p.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                  <p className="card-text">${p.price}</p>
                  <button href="#" class="btn btn-primary ms-1">
                    See Details
                  </button>
                  <button href="#" class="btn btn-success ms-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
