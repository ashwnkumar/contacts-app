import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addContact } from "./contactManagement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = { name, email, number };

    addContact(newContact);

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className=" h-screen w-screen px-5 md:w-2/3">
        <div className="flex items-center py-7 text-lg lg:text-2xl lg:pl-80">
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} className="mr-5" />
          </Link>
          <p>Add New Contact</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-5 mt-10"
        >
          <div className="flex flex-col py-3 w-full lg:w-1/3">
            <label htmlFor="" className="text-xl">
              Enter Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className=" p-3 w-full placeholder-gray-500 capitalize bg-slate-200 rounded-md hover:bg-slate-300"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-3 w-full lg:w-1/3">
            <label htmlFor="" className="text-xl">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              className="p-3 w-full placeholder-gray-500 bg-slate-200 rounded-md  hover:bg-slate-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-3 w-full lg:w-1/3">
            <label htmlFor="" className="text-xl">
              Enter Contact
            </label>
            <input
              type="tel"
              name="contact"
              required
              pattern="\d{10}"
              placeholder="123-456-7890"
              className=" p-3 w-full placeholder-gray-500 bg-slate-200 rounded-md hover:bg-slate-300"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="border border-custom-950 w-max p-3 rounded-md  bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
