const express = require("express");
const app = express();
app.use(express.json());
var users = [
  {
    name: "Raj",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  const numberOfKidney = johnKidney.length;

  let numberOfHealthyKidney = 0;
  for (let index = 0; index < johnKidney.length; index++) {
    if (johnKidney[index].healthy) {
      numberOfHealthyKidney += 1;
    }
  }
  const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

  res.json({
    numberOfKidney,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney,
  });
});
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.put("/", function (req, res) {
  for (let index = 0; index < users[0].kidneys.length; index++) {
    users[0].kidneys[index].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let index = 0; index < users[0].kidneys.length; index++) {
    if (users[0].kidneys[index].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({});
});

app.listen(3000);
