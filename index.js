const contacts = require("./contacts/contacts");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "read":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
    }
}

invokeAction({action: "read"});