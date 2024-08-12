const getContacts = () =>  {
    return JSON.parse(localStorage.getItem("contacts")) || [];
};

const saveContacts = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}


export const addContact = (newContact) => {
    const contacts = getContacts();
    contacts.push(newContact);
    console.log(contacts);
    saveContacts(contacts);
};

export const editContact = (index, editedContact) => {
    const contacts = getContacts();
    contacts[index] = editedContact;
    saveContacts(contacts);
}

export const deleteContact = (index) => {
    const contacts = getContacts();
    contacts.splice(index, 1);
    saveContacts(contacts);
}

