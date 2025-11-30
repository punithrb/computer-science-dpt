import mongoose from "mongoose";
import express from "express";
import router from "./routes/indexRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "role"],
  })
);
app.use(router);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.MONGO_BASE_URL)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
    //can try retry mechanism using setTimout
  });



import bcrypt from "bcrypt";
import Admin from "./model/adminModel.js";
// import Admin from "./models/admin.js"; // adjust path
// import mongoose from "mongoose";

export async function seedAdmins() {
  try {
    // SAMPLE PASSWORD FOR ALL ADMINS (change as needed)
    const plainPassword = "Admin@123";

    // Hash password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const sampleAdmins = [
      {
        username: "admin01",
        fullName: "John Doe",
        avatar: "https://example.com/avatars/admin01.png",
        password: hashedPassword,
        email: "admin01@example.com",
        phoneNumber: "+15550123456",
        role: "admin",
      },
      {
        username: "admin02",
        fullName: "Sarah Smith",
        avatar: "https://example.com/avatars/admin02.png",
        password: hashedPassword,
        email: "admin02@example.com",
        phoneNumber: "+15550120099",
        role: "admin",
      },
      {
        username: "superadmin",
        fullName: "Michael Johnson",
        avatar: "https://example.com/avatars/superadmin.png",
        password: hashedPassword,
        email: "superadmin@example.com",
        phoneNumber: "+15550178900",
        role: "superadmin",
      },
    ];

    // Remove existing admins then insert fresh data
    await Admin.deleteMany({});
    await Admin.insertMany(sampleAdmins);

    console.log("✔ Admin sample data inserted successfully!");
  } catch (error) {
    console.error("❌ Error seeding admin data:", error);
  } finally {
    mongoose.connection.close();
  }
}





// import bcrypt from "bcrypt";
// import mongoose from "mongoose";
import Staff from "./model/staffModel.js";  // adjust path!
export async function seedStaff() {
  try {
    const plainPassword = "Staff@123"; // change if needed
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Example ObjectId values — replace with your real Course & Assignment IDs later
    const fakeCourse1 = new mongoose.Types.ObjectId();
    const fakeCourse2 = new mongoose.Types.ObjectId();
    const fakeAssignment1 = new mongoose.Types.ObjectId();

    const sampleStaff = [
      {
        username: "staff01",
        name: "Alice Johnson",
        avatar: "https://example.com/avatars/staff01.png",
        employeeId: "EMP001",
        email: "staff01@example.com",
        phoneNumber: "+15550110001",
        designation: "Instructor",
        role: "staff",
        courses: [fakeCourse1, fakeCourse2],
        password: hashedPassword,
        assignment: [fakeAssignment1],
      },
      {
        username: "staff02",
        name: "Brian Smith",
        avatar: "https://example.com/avatars/staff02.png",
        employeeId: "EMP002",
        email: "staff02@example.com",
        phoneNumber: "+15550110002",
        designation: "Assistant Instructor",
        role: "staff",
        courses: [fakeCourse1],
        password: hashedPassword,
        assignment: [],
      },
      {
        username: "staff03",
        name: "Carla Williams",
        avatar: "https://example.com/avatars/staff03.png",
        employeeId: "EMP003",
        email: "staff03@example.com",
        phoneNumber: "+15550110003",
        designation: "Not Assigned",
        role: "staff",
        courses: [],
        password: hashedPassword,
        assignment: [],
      }
    ];

    await Staff.deleteMany({});
    await Staff.insertMany(sampleStaff);

    console.log("✔ Staff sample data inserted successfully!");
  } catch (error) {
    console.error("❌ Error seeding staff data:", error);
  }
}



// seedStaff()