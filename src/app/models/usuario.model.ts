export class Usuario {

    // El orden si importa, en parte, por los parametros opcionales
    constructor( 
                 public email:string,
                 public password:string,
                 public access_token?:string,
                 public token_type?: string,
                 public expires_at?: string,
                 public role_id?:string,
                 public role_name?:string,
                //  public _id?:string,
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