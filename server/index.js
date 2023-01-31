import express from "express";
import cors from "cors";
import { Users } from "./users.js";

const app = express();

app.use(cors());

app.get("/", (request, response) => {
    const {query_string} = request.query;

    const keys = ["first_name", "last_name", "email", "gender"];

    const search = (data) => {
        return data.filter((user) => 
            keys.some((key) => user[key].toLowerCase().includes(query_string))
        );
    }

    query_string ? response.send(search(Users).slice(0, 10)) : response.send(Users.slice(0, 10));

});

app.listen(8080, () => {
    console.log("Listen on the port 8080...");
});