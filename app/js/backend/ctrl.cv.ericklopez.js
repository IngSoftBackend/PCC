angular.module('EG-PROYECT', [ 'ngSanitize','ngToast'])
.config(['ngToastProvider', function(ngToastProvider) {
    ngToastProvider.configure({
      animation: 'slide' // or 'fade'
    });
}])
.controller('inicial', ['$scope', 'ngToast',function($scope, ngToast){
    ngToast.create('Bienvenido seas a mi CV ...');
    $scope.infoPersonal = {
        nombre : "Erick Gallardo",
        correo : "autodidacta.dev.backend@gmail.com",
        titulo : "Ingenieria en TIC",
        añosExperiencia : 4,
        conocimientos : [
            {tipo : "Versionamiento",herramientas : ['Git','Bitbucket','Git hub','SVN']},
            {tipo : "Backend", herramientas : ['Groovy', 'Grails','Java','Servlet', 'Spring', 'Hibernate', 'Struts','Joda Time']},
            {tipo : "Frontend", herramientas : ['Java Script','Angular JS', 'Jquery','Vue','ExtJS']},
            {tipo : "Base de datos", herramientas : ['MySQL','PostgresSQL','Maria DB','Oracle','Retink']},
            {tipo : "Mensajeria", herramientas : ['Minio', 'RabbitMQ']},
            {tipo : "Servidor", herramientas : ['Tomcat', 'Docker','Apache','Minio', 'RabbitMQ', 'Lite server']},
            {tipo : "Adm Project", herramientas : ['CMMI', 'Scrum',  'UML',  'Diagramas de Gant']},
            {tipo : "Dependencia", herramientas : ['Maven', 'Gradle']},
            {tipo : "Comunicación", herramientas : ['SOAP', 'REST','XML','JSON']},
            {tipo : "Protocolos", herramientas : ['Tomcat', 'Docker','Apache','Minio', 'RabbitMQ', 'Lite server']},
            {tipo : "Tools", herramientas : [ 'Netbeans', 'Eclipse', 'VS code', 'Android Studio','Talent studio', 'Workbeanch','iReport']},      
        ],
        experiencias : [
            {
                trabajo : "Analista programador",
                duracion : 3 ,
                descripcion : "Desarrollo de diversos proyectos, utilizando el Modelo de CMMI, fueron diversos proyectos entre ellos un administrador de clientes y un gestor de bitacoras ",
                herramientas : ['PostgresSQL', 'MySQL', 'MariaDB', 'Groovy','Grails', 'AngularJS','GIT','Bitbucket','Docker','Apache Tom cat', 'Talend Studio', 'VS Code', 'WorkBeanch','iReport','Spring security','Servlets','UML']
            },
            {
                trabajo : "Analista programador",
                duracion : 1,
                descripcion : "Creación de un sistema para una startup ",
                herramientas : ['MySQL', 'Groovy','Grails', 'AngularJS','GIT','Bitbucket','Docker', 'Talend Studio', 'VS Code', 'WorkBeanch', 'Lite server', 'Rabbit MQ', 'iReport', 'Spring security', 'Quartz', 'REST']
            },
            {
                trabajo : "Analista programador",
                duracion : 1,
                descripcion : "Mantenimiento de proyectos ya existentes",
                herramientas : ['Oracle SQL', 'Java','Hibernate', 'ExtJS','Spring','Jira','SVN', 'iReport', 'Eclipse','SOAP']
            }
        ]
    }
}]);