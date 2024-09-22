
import { generateMock } from "../utils/index.js";
import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getUserByEmail = (email) =>{
        return this.getBy({email});
    }
    getUserById = (id) =>{
        return this.getBy({_id:id})
    }
    createMock = async (cant) => {
        try {
            const userMocks = []
            for (let i=0; i <= cant; i++){
                const user = await generateMock();
                userMocks.push(user)
            }
        return await this.create(userMocks)
        } catch (error) {
            console.log(error);
            return error
        }
    }
}