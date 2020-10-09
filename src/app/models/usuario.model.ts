export class Usuario {

    // El orden si importa, en parte, por los parametros opcionales
    constructor( 
                 public email:string,
                 public password:string,
                 public nombre?:string,
                 public img?:string,
                 public role?:string,
                 public _id?:string,
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