import userModel from "../dao/models/User.js";
import { usersService } from "../services/index.js";

const createMock =  async(req,res)=>{
    try {
        const {cant} = req.query
        const response = await usersService.createMock(cant)
        res.json(response)
    } catch (error) {
        console.log(error);
        return error
    }
}

export default {createMock}