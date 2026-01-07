import { AppDataSource } from "../config/DB.js";
import { User } from "../entities/user.entity.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js"; 

export const registrarse = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userRepository = AppDataSource.getRepository(User);
        const existingUser = await userRepository.findOneBy({ email });
        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }
        const newUser = userRepository.create({ username, email, password });
        await userRepository.save(newUser);
        res.status(201).json({ message: "Usuario registrado exitosamente" });
    }catch (error) {
  console.error(error);
  res.status(500).json({
    message: error.message,
    detail: error.detail
  });
    }
};

export const iniciarSesion = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .getOne();
        if (!user) {
            return res.status(400).json({ message: "Credenciales inválidas" });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Credenciales inválidas" });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const cerrarSesion = (req, res) => {
    res.status(200).json({ message: "Cierre de sesión exitoso" });
}