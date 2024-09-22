import bcrypt from 'bcrypt';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
import { faker } from '@faker-js/faker'

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

faker.locale = 'es'

export const generateMock = async () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: await bcrypt.hash('coder123', 10),
        role: faker.datatype.boolean({ probability: 0.3 })? "admin" : "user"
    }
}