var db = require("../models");

module.exports = function (app) {

  app.get("/api/workouts", function (req, res) {
    db.Workout.findAll({}).then(function (workout) {
      res.json(workout);
    });
  });
  app.post("/api/workouts", ({ body }, res) => {
    Exercise.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
}