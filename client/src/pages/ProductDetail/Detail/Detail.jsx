import { useState } from "react";
import PropTypes from "prop-types";

const Detail = ({ productDetail }) => {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container min-h-[380px] py-10">
      <div className="mb-1 space-x-4">
        <span
          onClick={() => handleTabClick("details")}
          className={`inline-block cursor-pointer text-base font-medium uppercase text-neutral-600 underline-offset-8 dark:text-white ${
            activeTab === "details" ? "underline" : ""
          }`}
        >
          details
        </span>
        <span
          onClick={() => handleTabClick("deliveryReturns")}
          className={`inline-block cursor-pointer text-base font-medium uppercase text-neutral-600 underline-offset-8 dark:text-white  ${
            activeTab === "deliveryReturns" ? "underline" : ""
          }`}
        >
          delivery & returns
        </span>
      </div>
      <hr />
      {/* Content for detail */}
      {activeTab === "details" && (
        <div className="flex max-w-[768px] flex-col gap-2">
          <h1 className="mt-6 text-3xl font-bold uppercase dark:text-[#7DFFAF]">
            {productDetail?.attributes?.name}
          </h1>
          <p className="py-2 text-lg font-normal text-neutral-800 dark:text-neutral-400">
            {productDetail?.attributes?.description}
          </p>
          <p>
            <span className="text-lg font-medium dark:text-white">
              Materials:
            </span>
            <span className="dark:text-neutral-400">
              {productDetail?.attributes?.materials}
            </span>
          </p>
          <p>
            <span className="text-lg font-medium dark:text-white">Care: </span>
            <span className="dark:text-neutral-400">
              {productDetail?.attributes?.care}
            </span>
          </p>
          <p>
            <span className="text-lg font-medium dark:text-white">Made: </span>
            <span className="dark:text-neutral-400">
              {productDetail?.attributes?.made}
            </span>
          </p>
        </div>
      )}

      {/* Content for delivery & returns */}
      {activeTab === "deliveryReturns" && (
        <div className="mt-3 flex flex-col gap-1">
          <h4 className="font-bold">Delivery:</h4>
          <ul className="pl-4">
            <li className="list-disc">
              <span className="font-medium">Standard Delivery:</span> Typically
              arrives within 3-5 business days.
            </li>
            <li className="list-disc">
              <span className="font-medium">Express Delivery:</span> Need it
              fast? Receive your items within 1-2 business days.
            </li>
            <li className="list-disc">
              <span className="font-medium">International Delivery:</span> We
              offer worldwide shipping.
            </li>
          </ul>
          <h4 className="font-bold">Returns & Exchanges:</h4>
          <ul className="pl-4">
            <li className="list-disc">
              <span className="font-medium">Return Policy:</span> Hassle-free
              returns within 30 days of delivery.
            </li>
            <li className="list-disc">
              <span className="font-medium">Refund Policy:</span> Full refunds
              for unworn, unwashed items with tags attached.
            </li>
          </ul>
          <h4 className="font-bold">Support:</h4>
          <ul className="pl-4">
            <li className="list-disc">Free returns for domestic orders.</li>
            <li className="list-disc">
              Refunds issued to the original payment method within 3-5 business
              days.
            </li>
          </ul>
          <h4 className="font-bold">Need Assistance?</h4>
          <p>
            Contact us with any questions or concerns regarding delivery or
            returns. We're here to assist you!
          </p>
        </div>
      )}
    </div>
  );
};

Detail.propTypes = {
  productDetail: PropTypes.object.isRequired,
};

export default Detail;
