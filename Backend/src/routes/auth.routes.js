import { Router } from "express";
import { registrarse, iniciarSesion, cerrarSesion } from "../controller/auth.controller.js";

const router = Router();

router.post("/register", registrarse);
router.post("/login", iniciarSesion);
router.post("/logout", cerrarSesion);

export default router;