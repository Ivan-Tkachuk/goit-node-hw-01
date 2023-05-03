const fs = require('fs/promises');

const readFile = async() => {
    const text = await fs.readFile("./db/contacts.json", "utf-8");
    console.log(text);
}

readFile();

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