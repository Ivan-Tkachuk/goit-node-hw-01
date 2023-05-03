const fs = require('fs/promises');
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(__dirname);


const listContacts = async() => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

module.exports = {
    listContacts,
}

// fs.readFile("./db/contacts.json")
// .then(data => console.log(data))
// .catch(error => console.log(error.message))






// /*
//  * Розкоментуйте і запиши значення
//  * const contactsPath = ;
//  */

// // TODO: задокументувати кожну функцію
// function listContacts() {
//     // ...твій код
//   }
  
//   function getContactById(contactId) {
//     // ...твій код
//   }
  
//   function removeContact(contactId) {
//     // ...твій код
//   }
  
//   function addContact(name, email, phone) {
//     // ...твій код
//   }