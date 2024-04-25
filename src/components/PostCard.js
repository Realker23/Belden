import React from "react";

const PostCard = ({officeArray}) => {
  return (
    <div>
      <div className="grid grid-cols-1 pt-8 sm:grid-cols-2 lg:grid-cols-4 ">
        {officeArray.map((e) => {
          return (
            <div className="flex flex-col w-9/12 h-auto mx-auto my-8 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:shadow-gray-700 hover:scale-95 transition  duration-300">
              <h2 className="font-bold text-lg p-4 text-center">{e.Name}</h2>
              <hr className="border-t-2 border-gray-200" />
              <div className="p-4">
                <div className="flex justify-between items-center my-2">
                  <p className="text-sm">Post Office Type:</p>
                  <p className="font-semibold">{e.BranchType}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-sm">Delivery Status:</p>
                  <p
                    className={`font-semibold ${
                      e.DeliveryStatus === "Delivery"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {e.DeliveryStatus === "Delivery" ? "✔" : "❌"}
                  </p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-sm">Circle:</p>
                  <p className="font-semibold">{e.Circle}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-sm">State:</p>
                  <p className="font-semibold">{e.State}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-sm">Country:</p>
                  <p className="font-semibold">{e.Country}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-sm">Pincode:</p>
                  <p className="font-semibold">{e.Pincode}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostCard;
