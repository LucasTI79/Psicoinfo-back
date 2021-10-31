import { EntitySchema } from 'typeorm';

export default Users = new EntitySchema({
  name: 'Users',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    username: {
        type: "varchar"
    },
    email: {
      type: "varchar"
    },
    password: {
      type: "varchar"
    }
  },
})