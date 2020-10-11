export class Activitie {

    constructor (
        public user_id: string,
        public action: string,
        public nombre: string,
        public apellido: string,
        public email: string,
        public date: string,
        public content: string,
        public id: number,
    ) { }

}

// action: "ERP-LOGIN"
// apellido: "Castro"
// content: ""login:error""
// date: "2020-10-11"
// email: "abc@gmail.com"
// id: 1
// nombre: "Cristian"
// user_id: 1