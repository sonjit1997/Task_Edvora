import React, { useState, useEffect } from "react";
import Sidebar from "../Component/Sidebar";
import "../Style/Home.css";
import { Customer, Orders, Products } from "../Api/Api";
import MaterialTable from "@material-table/core";
import { ExportPdf } from "@material-table/exporters";

const Home = () => {
  const [user, setUser] = useState(false);
  const [product, setProduct] = useState(true);
  const [order, setOrder] = useState(false);

  const showProduct = () => {
    setProduct(true);
    setUser(false);
    setOrder(false);
  };
  const showUser = () => {
    setUser(true);
    setProduct(false);
    setOrder(false);
  };

  const showOrder = () => {
    setOrder(true);
    setProduct(false);
    setUser(false);
  };

  const customerDetails = Customer();
  //console.log(customerDetails)

  const productsDetails = Products();
  //console.log(productsDetails);

  const orderDetails = Orders();
  //console.log(orderDetails);

  return (
    <>
      <div className="all min-vh-100" id="night">
        <div className="row">
          <div className="col-1">
           <Sidebar />
          </div>
          <div className="container col m-2  ">
            <h1 className="text-center" id="main">
              WELCOME{" "}
            </h1>
            <h6 className=" text-muted text-center " id="submain">
              Take a quick look at your stats below{" "}
            </h6>
            <div className="row my-5 mx-2 text-center mr-2">
              <div className="col my-1 ">
                <div
                  className="rounded-pill bg-warning bg-opacity-25 ms-5 "
                  id="border-a"
                  style={{ width: 15 + "rem" }}
                  onClick={showOrder}
                >
                  <div className="cardbody p-1 ">
                    <h5 className="card-subtitle my-1" id="yellow">
                      <i className="bi bi-cart-check mx-2" id="pen-a"></i>
                      ORDER
                    </h5>
                    <br />
                    <div className="row pb-1 "></div>
                  </div>
                </div>
              </div>

              <div className="col my-1">
                <div
                  className="rounded-pill bg-danger bg-opacity-25 ms-5"
                  id="border-c"
                  style={{ width: 15 + "rem" }}
                  onClick={showProduct}
                >
                  <div className="cardbody p-1 ">
                    <h5 className="card-subtitle my-1" id="red">
                      <i className="bi bi-columns-gap mx-2" id="pen-c"></i>
                      PRODUCT
                    </h5>
                    <br />
                  </div>
                </div>
              </div>

              <div className="col my-1">
                <div
                  className="rounded-pill bg-info bg-opacity-25 ms-5"
                  id="border-d"
                  style={{ width: 15 + "rem" }}
                  onClick={showUser}
                >
                  <div className="cardbody p-1 ">
                    <h5 className="card-subtitle my-1" id="blue">
                      <i className="bi bi-person-circle mx-2" id="pen-d"></i>
                      CUSTOMER
                    </h5>
                    <br />
                    <div className="row pb-1"></div>
                  </div>
                </div>
              </div>
            </div>

         <div id="dds">
         {user ? (
              <MaterialTable
                data={customerDetails}
                columns={[
                  {
                    title: "CUSTOMER ID",
                    field: "user_id",
                  },
                  { title: "NAME", field: "name" },
                ]}
                options={{
                  exportMenu: [
                    {
                      label: "Export Pdf",
                      exportFunc: (cols, datas) =>
                        ExportPdf(cols, datas, "Ticket Records"),
                    },
                  ],
                  headerStyle: {
                    backgroundColor: "#2495ab",
                    color: "#fff",
                  },
                  rowStyle: {
                    backgroundColor: "#eee",
                  },
                }}
                title="CUSTOMER DETAILS"
              />
            ) : (
              ""
            )}
            

           
            {product ? (
              <MaterialTable
                data={productsDetails}
                columns={[
                  {
                    title: "PRODUCT ID",
                    field: "product_id",
                  },
                  { title: "PRODUCT", field: "name" },
                  { title: "SELLING PRICE", field: "selling_price" },
                  { title: "STOCK", field: "stock" },
                ]}
                options={{
                  exportMenu: [
                    {
                      label: "Export Pdf",
                      exportFunc: (cols, datas) =>
                        ExportPdf(cols, datas, "Ticket Records"),
                    },
                  ],
                  headerStyle: {
                    backgroundColor: "#c3422b",
                    color: "#fff",
                  },
                  rowStyle: {
                    backgroundColor: "#eee",
                  },
                }}
                title="PRODUCT DETAILS"
              />
            ) : (
              ""
            )}

            {order ? (
              <MaterialTable
                data={orderDetails}
                columns={[
                  {
                    title: "ORDER ID",
                    field: "order_id",
                  },
                  { title: "PRODUCT ID", field: "product_id" },
                  { title: "QUANTITY", field: "quantity" },
                  { title: "CUSTOMER ID", field: "user_id" },
                ]}
                options={{
                  exportMenu: [
                    {
                      label: "Export Pdf",
                      exportFunc: (cols, datas) =>
                        ExportPdf(cols, datas, "Ticket Records"),
                    },
                  ],
                  headerStyle: {
                    backgroundColor: "#94a91e",
                    color: "#fff",
                  },
                  rowStyle: {
                    backgroundColor: "#eee",
                  },
                }}
                title="ORDER DETAILS"
              />
            ) : (
              ""
            )}
         </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
