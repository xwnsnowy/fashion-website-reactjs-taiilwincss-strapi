import { useState } from "react";

const Detail = () => {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="mb-1 space-x-3">
        <span
          onClick={() => handleTabClick("details")}
          className={`inline-block cursor-pointer text-base font-medium uppercase text-neutral-600 underline-offset-8 ${
            activeTab === "details" ? "underline" : ""
          }`}
        >
          details
        </span>
        <span
          onClick={() => handleTabClick("sizeFit")}
          className={`inline-block cursor-pointer text-base font-medium uppercase text-neutral-600 underline-offset-8 ${
            activeTab === "sizeFit" ? "underline" : ""
          }`}
        >
          size & Fit
        </span>
        <span
          onClick={() => handleTabClick("deliveryReturns")}
          className={`inline-block cursor-pointer text-base font-medium uppercase text-neutral-600 underline-offset-8 ${
            activeTab === "deliveryReturns" ? "underline" : ""
          }`}
        >
          delivery & returns
        </span>
      </div>
      <hr />
      {/* Content for detail */}
      {activeTab === "details" && (
        <div>
          <h1 className="mb-2 mt-6 text-3xl font-bold uppercase">
            Saint laurent
          </h1>
          <p className="text-base font-normal text-neutral-800">
            Turtle neck Saint Laurent dress
          </p>
          <ul className="pl-7">
            <li className="list-disc">Dress</li>
            <li className="list-disc">Linen</li>
            <li className="list-disc">Mother-of-pearl buttons</li>
            <li className="list-disc">Camp collar</li>
            <li className="list-disc">Short sleeves</li>
            <li className="list-disc">Chest pocket</li>
          </ul>
        </div>
      )}

      {/* Content for size & fit */}
      {activeTab === "sizeFit" && <div>sizeFit</div>}

      {/* Content for delivery & returns */}
      {activeTab === "deliveryReturns" && <div>deliveryReturns</div>}
    </div>
  );
};

export default Detail;
