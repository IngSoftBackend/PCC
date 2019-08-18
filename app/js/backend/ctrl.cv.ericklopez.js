angular.module('EG-PROYECT', [])
.controller('inicial',['$scope',function($scope){
    $scope.infoPersonal = {
        nombre : "Erick Gallardo",
        correo : "autodidacta.dev.backend@gmail.com",
        titulo : "Ingenieria en TIC",
        añosExperiencia : 4
    }
    $scope.conocimientos = [
        'Git','Bitbucket','Git hub',
        'Groovy', 'Grails','Java','Servlet', 'Spring', 'Hibernate', 'Struts',
        'Java Script','Angular JS', 'Jquery','Vue','ExtJS',
        'Maven', 'Gradle',
        'Tomcat', 'Docker','Apache',
        'MySQL','PostgresSQL','Maria DB','Oracle','Retink', 'Minio', 'RabbitMQ',
        ,'XML','JSON','Joda Time','Talent studio','SOAP', 'REST',
        'UML', 'CMMI', 'Diagramas de Gant', 'Scrum', 'Lite server', 'iReport',
        'Netbeans', 'Eclipse', 'VS code', 'Android Studio'
    ]
    $scope.experiencias = [
        {
            trabajo : "Analista programador en Desarrollo de sofware UNI",
            duracion : 3 ,
            descripcion : "Desarrollo de diversos proyectos, utilizando el Modelo de CMMI, fueron diversos proyectos entre ellos un administrador de clientes y un gestor de bitacoras ",
            herramientas : ['PostgresSQL', 'MySQL', 'MariaDB', 'Groovy','Grails', 'AngularJS','GIT','Bitbucket','Docker','Apache Tom cat', 'Talend Studio', 'VS Code', 'WorkBeanch','iReport','Spring security','Servlets','UML']
        },
        {
            trabajo : "Analista programador en QR",
            duracion : 1,
            descripcion : "Creación de un sistema para una startup ",
            herramientas : ['MySQL', 'Groovy','Grails', 'AngularJS','GIT','Bitbucket','Docker', 'Talend Studio', 'VS Code', 'WorkBeanch', 'Lite server', 'Rabbit MQ', 'iReport', 'Spring security', 'Quartz', 'REST']
        },
        {
            trabajo : "Trabajo actual",
            duracion : 1,
            descripcion : "Mantenimiento de proyectos ya existentes",
            herramientas : ['Oracle SQL', 'Java','Hibernate', 'ExtJS','Spring','Jira','SVN', 'iReport', 'Eclipse','SOAP']
        }
    ]
}]);