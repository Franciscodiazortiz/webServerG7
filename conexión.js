let myslq = require("mysql");


let conexión = myslq.createConnection({
    host: "127.0.0.1",
    database: "colegio",
    user: "root",
    password: "nogamenolife"
})

conexión.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexión exitosa");
    }
});


const alumnos = "select *from alumnos";
conexión.query(alumnos,function(error,lista){
    if(error){
        throw error;
    }else{
        console.log(lista);
        conexión.end();
    }
})