import Pen from "../model/Pen";

const homeController = (req, res) => {
  res.render("screens/home");
};

const penController = async (req, res) => {
  const result = await Pen.find({}, {});

  return res.render("screens/pen", { pen: result });
};

export const globalController = {
  homeController,
  penController,
};

export default globalController;
