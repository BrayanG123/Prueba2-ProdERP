export class Usuarioget {

    // El orden si importa, en parte, por los parametros opcionales
    constructor( 
                 public id:number,
                 public email:string,
                 public password_creada:boolean,
                 public employee_id:number,
                 public rol_id:string,
                 public created_at: string,
                 public updated_at: string,
    ){
        
    }
    
    // "ci":"47D31d",
    // "nombre":"Michael",
    // "apellido":"Bolton",
    // "sexo":"M",
    // "rol_id":1,
    // "departament_id":1,
    // "email":"copitas1@yopmail.com"

}