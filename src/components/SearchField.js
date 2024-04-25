import React, {useState} from "react";
import PostCard from "./PostCard";
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from "@mui/material";
// import {Translate} from "@mui/icons-material";

const SearchField = () => {
  const [officeArray, setOfficeArray] = useState([]);
  const [pincode, setPincode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (pincode) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await res.json();
      console.log(data);
      setOfficeArray(data[0].PostOffice);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchQuery = (pincode) => {
    fetchData(pincode);
    setPincode("");
  };

  return (
    <>
      <div className="flex items-center justify-center p-4 pt-12 ">
        <div className="flex items-center justify-center space-x-4">
          <input
            className="border border-gray-300 w-64 py-2 px-4 rounded-lg focus:outline-none focus:border-purple-500"
            type="text"
            placeholder="Enter 6-digit PINCODE"
            value={pincode}
            onChange={(e) => {
              const pincode = e.target.value;
              if (/^\d+$/.test(pincode) && pincode.length <= 6) {
                setPincode(pincode);
                if (pincode.length === 6) {
                  handleSearchQuery(pincode);
                }
              }
            }}
          />
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            onClick={() => handleSearchQuery(pincode)}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center font-bold">
        <p className="text-xl">
          Post Offices Found:{" "}
          <span className="text-purple-800">
            {officeArray ? officeArray.length : "0"}
          </span>
        </p>
      </div>
      {isLoading ? (
        <Box className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {officeArray?.length ? (
            <PostCard officeArray={officeArray} />
          ) : (
            <div className="text-center m-4">
              Want to know Post Office Branches ? Enter Pincode..
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchField;
