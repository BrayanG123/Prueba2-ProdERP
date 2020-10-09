export class Usuariocrear {

    // El orden si importa, en parte, por los parametros opcionales
    constructor( 
        public ci     : String,
        public nombre : String,
        public apellido:String,
        public sexo   : String,
        public rol_id : Number,
        public departament_id:Number,
        public email  : String,
        public created_at?  : String,
        public updated_at?  : String,
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