// script.js

import { Client, Account, ID } from "https://cdn.jsdelivr.net/npm/appwrite@14.0.0/+esm";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("YOUR_PROJECT_ID");

const account = new Account(client);

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");


// SIGNUP

document.getElementById("signupBtn").addEventListener("click", async () => {

    try {

        await account.create(
            ID.unique(),
            email.value,
            password.value,
            name.value
        );

        message.innerText = "Signup Successful";

    } catch(error){

        message.innerText = error.message;
    }

});


// LOGIN

document.getElementById("loginBtn").addEventListener("click", async () => {

    try {

        await account.createEmailPasswordSession(
            email.value,
            password.value
        );

        message.innerText = "Login Successful";

    } catch(error){

        message.innerText = error.message;
    }

});