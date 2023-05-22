const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  date: String,
  day: String,
  hour: String,
  local: String,
  elder: String,
});

const serviceExtraSchema = new mongoose.Schema({
  name: String,
  meetings_extra: [meetingSchema],
  obs: [
    {
      text_obs: String,
      bold: Boolean,
    },
  ],
});

const serviceSchema = new mongoose.Schema({
  name: String,
  meetings: [meetingSchema],
});

const diverseSchema = new mongoose.Schema({
  services_extra: [serviceExtraSchema],
  obs: [
    {
      text_obs: String,
      bold: Boolean,
    },
  ],
});

const localSchema = new mongoose.Schema({
  name: String,
  services: [serviceSchema],
  diverse: [diverseSchema],
});

const reunionSchema = new mongoose.Schema(
  {
    name: String,
    date: String,
    locals: [localSchema],
  },
  { timestamps: true }
);

const Reunion = mongoose.model("Reunion", reunionSchema);

module.exports = { Reunion };
