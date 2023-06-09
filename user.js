 const chalk = require('chalk');
 const fs = require('fs');
 const log = console.log;
 const addUser = function(id, name, email) {
     const user = loadUser();
     const isId = user.find(function(user) {
         return user.email === email;
     })
     if (!isId) {
         const isAdd = user.push({
             id: id,
             name: name,
             email: email
         });
         const userStr = JSON.stringify(user);
         fs.writeFileSync('user.json', userStr);
         if (isAdd)
             log(chalk.bgGreen('User added successfully'), isId)
     } else {
         log(chalk.bgGreen(`${email +' already User added'}`))
     }
 }
 const getUsers = function() {
     const user = loadUser();
     user.forEach(element => {
         log(chalk.bgGreen(element.name))
     });
 }
 const removeUser = function(email) {
     let user = loadUser();
     log('useruser', user)
     const isUser = user.find(element => element.email === email);
     if (isUser) {
         user = user.filter(element => element.email !== email);
         const userStr = JSON.stringify(user);
         fs.writeFileSync('user.json', userStr);
         log(chalk.bgGreen(`${email + 'Removed successfully'}`))
     } else {
         log(chalk.bgGreen(`${email + 'Not available'}`))
     }

 }
 const updateUser = function(name, email) {
     let user = loadUser();
     user = user.map((element) => {
         if (element.email === email) {
             element.name = name
         }
         return element
     })
     const userStr = JSON.stringify(user);
     fs.writeFileSync('user.json', userStr);
     log(chalk.bgGreen(`${email + 'updated successfully'}`))

 }
 const loadUser = function() {
     try {
         const userdata = fs.readFileSync('user.json');
         const user = userdata.toString();
         return user ? JSON.parse(user) : [];
     } catch (e) {
         console.error("loading user.json", e)
         return [];
     }
 }
 module.exports = {
     addUser: addUser,
     getUsers: getUsers,
     removeUser: removeUser,
     updateUser: updateUser
 }