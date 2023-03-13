const Label = require("../models/label.js");
class LabelController {
  async getLabels(req, res) {
    try {
      const labels = await Label.find();
      return res.json(labels);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async createLabel(req, res) {
    try {
      const  {name}  = req.body;
      
      const newLabel = await Label.create(
        { name },
        {  new: true }
      );
      res.json(newLabel);
    } 
    catch (e) {
      res.status(500).json(e);
    }
  }
  async getOneLabel(req, res) {
    const { id } = req.params;
    const label = await Label.findById(id);
    return res.json(label);
  }
  async updateLabel(req, res) {
    try {
      const label = req.body;
      if (!label._id) {
        res.status(400).json({ message: "Id error" });
      }
      const updateLabel = await Label.findByIdAndUpdate(label._id, label, {
        new: true,
      });
      return res.json(updateLabel);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteLabel(req, res) {
    const { id } = req.params;
    const label = await Label.findByIdAndDelete(id);
    res.json(label);
  }
}

module.exports = new LabelController();
