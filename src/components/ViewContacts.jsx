import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faChevronLeft,
  faFloppyDisk,
  faPen,
  faPhone,
  faTrashCan,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { deleteContact, editContact } from "./contactManagement";

const ViewContacts = () => {
  const [contact, setContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const contact = contacts[index];
    if (contact) {
      setContact(contact);
      setEditedContact(contact);
    }
  }, [index]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    editContact(index, editedContact);
    setContact(editedContact);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteContact(index);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className=" h-screen w-screen px-5  md:w-2/3">
        <div className="flex items-center justify-between lg:justify-around py-7">
          <div className="flex items-center justify-center">
            {isEditing ? (
              <></>
            ) : (
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => navigate("/")}
                className="text-2xl cursor-pointer"
              />
            )}
            <p className="text-3xl ml-5">{editedContact.name}</p>
          </div>
          <div className="flex items-center">
            {isEditing ? (
              <FontAwesomeIcon
                icon={faFloppyDisk}
                onClick={handleSave}
                className="mx-5 text-2xl text-blue-500 hover:text-blue-600 active:text-blue-700"
              />
            ) : (
              <FontAwesomeIcon
                icon={faPen}
                onClick={handleEditClick}
                className="mx-5 text-2xl text-blue-500 hover:text-blue-600 active:text-blue-700"
              />
            )}
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={handleDelete}
              className="mx-5 text-2xl text-red-600 hover:text-red-700 active:text-red-600"
            />
          </div>
        </div>
        <form className="flex flex-col items-center justify-center gap-5 text-xl">
          <div className="flex items-center border border-gray-300 px-7 rounded-md lg:w-1/2">
            <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
            <input
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={
                isEditing
                  ? "border border-black bg-slate-50 rounded-md p-4 ml-2"
                  : "border-none bg-blue-50 p-4"
              }
            />
          </div>
          <div className="flex items-center border border-gray-300 px-7 rounded-md lg:w-1/2">
            <FontAwesomeIcon icon={faAt} className="text-2xl mr-3" />
            <input
              type="email"
              name="email"
              value={editedContact.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={
                isEditing
                  ? "border border-black bg-slate-50 rounded-md p-4 ml-2"
                  : "border-none bg-blue-50 p-4"
              }
            />
          </div>
          <div className="flex items-center border border-gray-300 px-7 rounded-md lg:w-1/2">
            <FontAwesomeIcon icon={faPhone} className="text-2xl mr-3" />
            <input
              type="tel"
              name="contactNumber"
              value={editedContact.number}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={
                isEditing
                  ? "border border-black bg-slate-50 rounded-md p-4 ml-2"
                  : "border-none bg-blue-50 p-4"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewContacts;
