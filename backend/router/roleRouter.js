import express from "express";
import { GetAllRole, Login, Signup, addNewRole, getChild } from "../controllers/RoleController.js";

var router= express.Router()

router.post('/add-role',addNewRole)
router.post('/signup',Signup)
router.post('/login',Login)
router.get('/get-role',GetAllRole)
router.post('/home',getChild)

export default router