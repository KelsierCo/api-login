import pool from "../config/db.js";

export const getAllUsers = async () => {
  const result = await pool.query("SELECT id, name FROM users");
  return result.rows;
};

export const getUserById = async (id) => {
  const result = await pool.query(
    "SELECT id, name, email, confirmemail FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

export const getUserByEmail = async (email) => {
    const result = await pool.query(
        "SELECT id, name, email, confirmemail  FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
}

export const createUser = async ({ name, email, password }) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2) RETURNING *",
    [name, email, password]
  );
  return result.rows[0];
};

export const updateUser = async (id, { name }) => {
  const result = await pool.query(
    "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  return result.rows[0];
};

export const updateUserPassword = async (id, password) => {
    const result = await pool.query(
        "UPDATE users SET password = $1 WHERE id = $2 RETURNING *",
        [password, id]
    );
    return result.rows[0];
}

export const updateConfirmEmail = async (id) => {
  const result = await pool.query(
    "UPDATE users SET confirmEmail = true WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}

export const deleteUser = async (id, email) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 AND email = $2 RETURNING *",
    [id, email]
  );
  return result.rows[0];
};
