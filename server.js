
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Node.js CI/CD</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 80px;">
        <h1>Node.js Application Deployed Successfully!</h1>
        <p>Hosted on AWS EC2 with GitHub Actions CI/CD.</p>
        <p>Deployment is working!</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Application running on port ${PORT}`);
});
