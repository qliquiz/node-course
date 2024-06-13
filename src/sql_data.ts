import { AppDataSource } from './dataSource';
import { User } from './user';


const userRepo = AppDataSource.getRepository(User);

const createUser = async (user: { name: string, age: number }) => {
    const newUser = await userRepo.create(user);
    await userRepo.save(newUser);
    return newUser;
}

const deleteUser = async (id: number) => {
    try { return await userRepo.delete({ id: id }); }
    catch (err) { return null; }
}

const getUser = async (id: number) => {
    try { return await userRepo.findOneBy({ id: id }); }
    catch (err) { return null; }
}

const getUsers = async () => {
    try { return await userRepo.find(); }
    catch (err) { return null; }
}

const updateUser = async (id: number, newData: { name: string, age: number }) => {
    try {
        await userRepo.update({ id: id }, newData);
        await userRepo.save({ id: id });
        return await userRepo.findOneBy({ id: id });
    } catch (err) { return null; }
}

export { createUser, deleteUser, getUser, getUsers, updateUser };