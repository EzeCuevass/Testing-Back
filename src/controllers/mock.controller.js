import { usersService } from "../services/index.js";

const getMocks = async(req,res) => {
    try {
        const response = await usersService.getAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        return error
    }
}

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

export default {getMocks, createMock}