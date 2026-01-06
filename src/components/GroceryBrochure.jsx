import React from "react";

const products = [
  {
    name: "Rice",
    regularQty: "1 Kg",
    regularOld: 75,
    regularNew: 65,
    largeQty: "5 Kg",
    largeOld: 375,
    largeNew: 325,
  },
  {
    name: "Toor Dal",
    regularQty: "1 Kg",
    regularOld: 160,
    regularNew: 145,
    largeQty: "5 Kg",
    largeOld: 780,
    largeNew: 720,
  },
  {
    name: "Urad Dal",
    regularQty: "1 Kg",
    regularOld: 140,
    regularNew: 125,
    largeQty: "5 Kg",
    largeOld: 690,
    largeNew: 620,
  },
  {
    name: "Sugar",
    regularQty: "1 Kg",
    regularOld: 55,
    regularNew: 48,
    largeQty: "5 Kg",
    largeOld: 270,
    largeNew: 235,
  },
  {
    name: "Wheat Flour",
    regularQty: "1 Kg",
    regularOld: 60,
    regularNew: 52,
    largeQty: "5 Kg",
    largeOld: 295,
    largeNew: 260,
  },
  {
    name: "Cooking Oil",
    regularQty: "1 L",
    regularOld: 165,
    regularNew: 150,
    largeQty: "5 L",
    largeOld: 820,
    largeNew: 750,
  },
  {
    name: "Red Chilli",
    regularQty: "1 Kg",
    regularOld: 90,
    regularNew: 78,
    largeQty: "5 Kg",
    largeOld: 440,
    largeNew: 390,
  },
];

const GroceryBrochure = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-[#eef2f7]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Grocery Price Brochure
          </h2>
          <p className="text-gray-600 mt-2">
            Best Quality • Best Price • Trusted Supply
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.name}
              </h3>

              {/* Regular */}
              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  Regular Pack ({item.regularQty})
                </p>
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-400">
                    ₹{item.regularOld}
                  </span>
                  <span className="text-green-600 font-semibold text-lg">
                    ₹{item.regularNew}
                  </span>
                </div>
              </div>

              {/* Large */}
              <div>
                <p className="text-sm text-gray-500">
                  Large Pack ({item.largeQty})
                </p>
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-400">
                    ₹{item.largeOld}
                  </span>
                  <span className="text-green-600 font-semibold text-lg">
                    ₹{item.largeNew}
                  </span>
                </div>
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
};

export default GroceryBrochure;
