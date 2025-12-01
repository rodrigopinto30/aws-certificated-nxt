// import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
// import * as bcrypt from "bcryptjs";

// @Entity("users") 
// export class User {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     // ⚠️ Agregado: Campo 'name'
//     @Column()
//     name!: string;

//     // ⚠️ Agregado: Campo 'lastName'
//     @Column()
//     lastName!: string;

//     @Column({ unique: true })
//     email!: string;

//     // ⚠️ Cambiado: El campo en la base de datos ahora se llama 'password_hash'
//     @Column({ name: 'password_hash' }) 
//     password!: string; // Almacena el hash, usamos 'password' en la clase para la lógica

//     // ⚠️ Agregado: Campo 'created_at' para coincidir con el esquema SQL
//     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//     created_at!: Date;


//     @BeforeInsert()
//     async hashPassword() {
//         // Hashea la contraseña antes de guardarla
//         this.password = await bcrypt.hash(this.password, 10);
//     }

//     // Método para comparar la contraseña durante el login
//     async comparePassword(password: string): Promise<boolean> {
//         // Compara la contraseña entrante con el hash almacenado en password_hash (que mapea a this.password)
//         return bcrypt.compare(password, this.password);
//     }
// }