import React from "react";
import StudentCard from "./StudentCard.jsx";


const students = [
  { id: "S001", name: "Thariga Shrinithi.R" },
  { id: "S002", name: "Tejashwini.M" },
  { id: "S003", name: "Luttika Jenifer.J.C" },
];

const StudentList = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Student List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.id} name={student.name} id={student.id} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
