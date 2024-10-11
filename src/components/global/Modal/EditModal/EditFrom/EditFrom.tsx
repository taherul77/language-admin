"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path according to your structure
import axios from "axios";
import { usePathname } from "next/navigation";
interface EditFormProps {
  rowData: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
}

const EditForm: React.FC<EditFormProps> = ({ rowData }) => {
  const [formData, setFormData] = useState(rowData);
  const pathname = usePathname(); // Get the current path

  // Extract the dynamic page name from the route. Assuming the page name is the last part of the route.
  const currentPageName = pathname
    ? pathname.split("/").pop()
    : "defaultPageName"; // Add a fallback

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/${currentPageName}/${formData._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      console.log("Update successful:", response.data);
      // Add any further actions, such as reloading the data or showing a success message
    } catch (error) {
      console.error("Error updating the row:", error);
      // Handle the error, possibly by showing an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
};

export default EditForm;
