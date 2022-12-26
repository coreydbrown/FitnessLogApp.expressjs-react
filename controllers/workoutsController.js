const createWorkout = async (req, res) => {
  res.send("create workout");
};

const getAllWorkouts = async (req, res) => {
  res.send("get all workouts");
};

const updateWorkout = async (req, res) => {
  res.send("update workout");
};

const deleteWorkout = async (req, res) => {
  res.send("delete workout");
};

export { createWorkout, getAllWorkouts, updateWorkout, deleteWorkout };
