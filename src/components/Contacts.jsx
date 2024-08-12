import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  return (
    <div className="flex items-center justify-center bg-blue-50 ">
      <div className="h-screen w-screen px-5  md:w-2/3">
        <div className="flex flex-wrap items-center md:justify-between py-7">
          <p className="text-4xl font-medium">Contacts App</p>
          <Link to="/add">
            <p className="px-5 py-3 rounded-md w-max my-5 text-md lg:text-lg bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">
              <FontAwesomeIcon icon={faUserPlus} className="text-xl mr-3" />{" "}
              Create New Contact
            </p>
          </Link>
        </div>

        <ul className="flex flex-col gap-3">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <Link to={`/view/${index}`}>
                <li
                  key={index}
                  className="flex items-center justify-between p-5 rounded-md border border-gray-300 hover:bg-slate-200 active:bg-slate-300 w-full"
                >
                  <p className="text-2xl text-slate-900">{contact.name}</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </Link>
            ))
          ) : (
            <p>No Contacts Available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
