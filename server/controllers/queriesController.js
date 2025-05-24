import queriesModel from "../models/queriesModel.js";

const queriesPostController = async (req, res) => {
  try {
    const { name, email, company, phone, website, message } = req.body;
    const newQuery = new queriesModel({
      name,
      email,
      company,
      phone,
      website,
      message,
    });
    await newQuery.save();
    res.status(201).json({
      message: "Query uploaded successfully",
      success: true,
      data: newQuery,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export { queriesPostController };
