import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { useEffect } from "react";
import axios from "axios";

const Search = ({ bigText = false }) => {
  const [content, setContent] = useState("");

  const [data, setData] = useState([]);
  const [filteredData, setFiltertedData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://127.0.0.1:3000/papers/fetch");

      const data = await response.data.data;
      setData(data);
    })();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(content.toLowerCase()) ||
        item.author.toLowerCase().includes(content.toLowerCase()) ||
        item.date.toLowerCase().includes(content.toLowerCase())
      );
    });
    setFiltertedData(filtered);
  }, [content, data]);

  return (
    <form
      className={`bg-[#F9F9F9] relative w-full rounded-2xl flex justify-center ${
        bigText ? "relative p-2" : "items-center"
      }`}
    >
      <span
        className={
          bigText
            ? "w-[24px] h-[24px] my-[7px] mr-2"
            : "w-[24px] h-[24px] mx-[12px]"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>

      <div className="relative w-full">
        {bigText ? (
          <textarea
            className="outline-0 w-full py-[10px] pr-[10px]"
            placeholder="Search research papers"
            rows={4}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        ) : (
          <input
            className="outline-0 w-full py-[10px] pr-[10px]"
            placeholder="Search research papers"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        )}
      </div>
      {content ? (
        <span
          className={`${bigText ? "mt-3 mr-3" : "mx-5"} cursor-pointer`}
          onClick={() => setContent("")}
        >
          <svg
            viewPort="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
          >
            <line
              x1="1"
              y1="11"
              x2="11"
              y2="1"
              stroke="black"
              stroke-width="1"
            />
            <line
              x1="1"
              y1="1"
              x2="11"
              y2="11"
              stroke="black"
              stroke-width="1"
            />
          </svg>
        </span>
      ) : (
        ""
      )}

      {content.length > 0 ? (
        <div className="absolute top-[50px] p-2 max-h-[300px] z-50 overflow-auto shadow-md bg-white w-full rounded-b-sm">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <DropdownItem
                key={index}
                number={index + 1}
                title={item.title}
                author={item.author}
                date={item.date}
              />
            ))
          ) : (
            <span>No results found</span>
          )}
          {/* <DropdownItem title={"Development"} /> */}
        </div>
      ) : (
        ""
      )}
      {/* Dropdown content */}
    </form>
  );
};

export default Search;
