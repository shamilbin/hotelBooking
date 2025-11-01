import userModel from "../models/User.js";
import { Webhook } from "svix";

const clerkWebHook = async (req, res) => {
  try {
    // Create a svix with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // getting Header
    const header = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamps": req.headers["svix-timestamps"],
      "svix-signature": req.headers["svix-signature"],
    };
    // Verifying Headers
    await whook.verify(JSON.stringify(req.body), headers);
    // Getting Data from request body
    const { data, type } = req.body;
    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      userName: data.first_name + " " + data.last_name,
      image: data.image_url,
    };
    console.log(userData)
    // Switch Case for diff events
    switch (type) {
      case "user.created": {
        await userModel.create(userData);
        break;
      }

      case "user.updated": {
        await userModel.findByIdAndUpdate(data.id, userData);
        break;
      }

      case "user.deleted": {
        await userModel.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }
    res.json({ success: true, message: "webHook Recieved" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};



export default clerkWebHook;
