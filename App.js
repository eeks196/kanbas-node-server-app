import express from "express";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://https://a5--jocular-semifreddo-273014.netlify.app/"],
}));
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);