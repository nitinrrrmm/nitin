import { useState } from "react";
import React from "react";

function App() {
  const [submitData, setSubmitData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setSubmitData((prev) => [...prev, data]); 
    form.reset(); // ✅ Reset the form
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
        />
        <br />
        Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <br />
        Mobile No:{" "}
        <input
          type="number"
          name="number"
          placeholder="Enter Mobile No"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitData.length > 0 && (
        <table
          border="1"
          cellPadding="8"
          cellSpacing="0"
          style={{ marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {submitData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
