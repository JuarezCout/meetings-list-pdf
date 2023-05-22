const { Reunion: ReunionModel } = require("../models/Reunion");

const reunionController = {
  create: async (req, res) => {
    try {
      const response = await ReunionModel.create(req.body);
      res.status(201).json({ response, msg: "Reunion created with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const reunions = await ReunionModel.find({});
      res.status(200).json(reunions);
    } catch (error) {
      console.log(error.message);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const reunion = await ReunionModel.findById(id);
      res.status(200).json(reunion);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await ReunionModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: `Reunion with id ${id} deleted with success` });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const Reunion = await ReunionModel.findByIdAndUpdate(id, req.body);
      if (!Reunion)
        return res
          .status(404)
          .json({ message: `Reunion with id ${id} don't exist` });

      const updatedReunion = await ReunionModel.findById(id);
      res.status(200).json(updatedReunion);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = reunionController;
