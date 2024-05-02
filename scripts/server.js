import { createServer } from "lwr";

const lwrServer = createServer({ serverType: "express" });

const app = lwrServer.getInternalServer();

app.get("/api/users", (req, res) => {
    res.json({ 
        users: [
            { id: 1, name: "Felipe" }, 
            { id: 2, name: "Leonardo" }, 
            { id: 3, name: "Gabriel" }
        ] 
    });
});

app.post("/api/lead", (req, res) => {
    const body = req.body;
    // jsforce to create a lead in salesforce...
});

lwrServer.listen(({ port, serverMode }) => {
    console.log(`Server running on port http://localhost:${port} in ${serverMode} mode`);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});