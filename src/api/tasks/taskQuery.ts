export const taskQuery = {
    createTask: `INSERT INTO tasks (title, description) VALUES (?, ?) RETURNING *;`,
    findAll: `SELECT * FROM tasks;`,
    findById: `SELECT * FROM tasks WHERE id = ?;`,
    updateTask: `UPDATE tasks SET title = ?, description = ? WHERE id = ? RETURNING *;`,
    removeTask: `DELETE FROM tasks WHERE id = ? RETURNING *;`
};
