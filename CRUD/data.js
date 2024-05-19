let users = [] // временная замена бд
let currentID = 1


module.exports = {
    createUser: (user) => {
        user.id = currentID++;
        users.push(user);
        return `New user is successfully created`;
    },
    deleteUser: (id) => {
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            return `User ${id} is successfully deleted`;
        }
        return 'Error: user ID does not exist. Please, check ID again';
    },
    getUser: (id) => users[users.findIndex(u => u.id === id)],
    getUsers: () => users,
    updateUser: (id, newData) => {
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index] = {...users[index], ...newData};
            return `User ${id} is successfully updated`;
        }
        return 'Error: please, check ID and new data again';
    }
}