 const yargs = require('yargs');
 const user = require('./user');
 const log = console.log;

 yargs.command({
     command: "add",
     description: "Add description",
     builder: {
         id: {
             description: "id",
             demandOption: true,
             type: "string",
         },
         name: {
             description: "Add name",
             demandOption: true,
             type: "string",
         },
         email: {
             description: "email",
             demandOption: true,
             type: "string"
         }
     },
     handler: function(ags) {
         log(ags.id, ags.name, ags.email)
         user.addUser(ags.id, ags.name, ags.email);
     }
 });
 yargs.command({
     command: "list",
     description: "List description",
     handler: function(tags) {
         user.getUsers()
     }

 })
 yargs.command({
     command: "remove",
     description: "Remove description",
     builder: {
         email: {
             description: "email",
             demandOption: true,
             type: "string"
         },

     },
     handler: function(tags) {
         user.removeUser(tags.email)
     }
 })
 yargs.command({
     command: "update",
     description: "Update description",
     builder: {
         name: {
             description: "name",
             demandOption: true,
             type: "string"
         },
         email: {
             description: "email",
             demandOption: true,
             type: "string"
         }
     },
     handler: function(agrs) {
         user.updateUser(agrs.name, agrs.email)
     }
 })

 yargs.parse();