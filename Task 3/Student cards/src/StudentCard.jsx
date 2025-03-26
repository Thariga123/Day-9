import React from "react";

const StudentCard = ({ name, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-72 hover:shadow-xl transition duration-300">
      <img
        src="https://via.placeholder.com/150"
        alt="Student"
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">ID: {id}</p>
      </div>
    </div>
  );
};

export default StudentCard;
