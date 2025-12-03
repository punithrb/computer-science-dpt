import adminModel from "../../model/adminModel.js";

export const adminDashboard = async (req, res) => {
  const { id, role } = req.user;
  // const reqURL = req.originalUrl;
  // const reqRole = reqURL.split("/")[1];
  // console.log(reqRole);
  if (!(role == "admin")) {
    return res.status(401).json({
      success: false,
      message: "UnAuthorized!!!",
    });
  }
  try {
    const adminUser = await adminModel
      .findOne({
        _id: id,
      })
      .select("-password");
    // console.log(adminUser);

    if (!adminUser) {
      return res.status(401).json({
        success: false,
        message: "UnAuthorized!!!",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Authorized successfully!!!",
      adminUser,
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "failed to authorize!!!",
    });
  }
};
