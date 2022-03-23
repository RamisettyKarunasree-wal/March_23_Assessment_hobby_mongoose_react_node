const Hobby = require('../models/hobby');
const gethobbies = (req, res) => {
  Hobby.find((error, hobbies_list) => {
    if (error) {
      res.json(error);
    } else {
      res.json(hobbies_list);
    }
  });
};
const posthobbies = (req, res) => {
  const hobbyObj = new Hobby(req.body);
  hobbyObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 'added hobby successfully' });
    }
  });
};
const deletehobbies = (req, res) => {
  Hobby.findByIdAndDelete(req.params.id, req.body, function (err) {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `removed hobby with id ${req.params.id}` });
    }
  });
};
module.exports = { gethobbies, posthobbies, deletehobbies };
