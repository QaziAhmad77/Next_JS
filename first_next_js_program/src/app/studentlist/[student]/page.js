"use client"
const StudentDetails = ({params}) => {
    console.log(params.student,"params")
  return (
    <div>
      <h1>Student {params.student} Details</h1>
      <h1>Name: {params.student}</h1>
    </div>
  );
};

export default StudentDetails;
