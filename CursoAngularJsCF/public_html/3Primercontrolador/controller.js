//El nombre del modulo tiene que ir referenciado
//Todas las aplicaciones se crean apartir de modulos
//Despues del nombre del segundo modulo, son los modulos de angular que vamos a importar a la aplicacion
//La instruccion retorna una referencia a la aplicacion y apartir de esa referencia se puede+
//ejecutar el metodo controller
var app=angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
   $scope.nombre="Trejo" ;
});
