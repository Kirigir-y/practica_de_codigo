import { EntitySchema } from "typeorm";
import bcrypt from "bcryptjs";

export const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        username: {
            type: "varchar",
            unique: true,
        },
        email: {
            type: "varchar",
            unique: true,
        },
        password: {
            type: "varchar",
        },
        createdAt: {
            type: "timestamp", 
            createDate: true,
        },
    },
    beforeInsert: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
    },
});