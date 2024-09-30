const express = require('express');
const passport = require('passport');
const { login_post } = require('./site-controller');

module.exports = {
    index: (request, response) => {
        response.json("This is the webmaster index page in development")
    },
    login: (request, response) => {

        response.json("Webmaster login page")
        // response.render('pages/', {
        //     layout: 'layout',
        //     header: false,
        //     footer: false
        // });
    },
    login_post: (request, response) => {
        const { username, password } = request.body;
        console.log('Login attempt:', { username, password });
        // Here, you can implement your own login logic without session management
        //response.redirect('/admin/panel');
    },
    panel: (request, response) => {
        response.json('Rendering admin panel');
        
    },
    password_error: (request, response) => {
        response.json('Password error');
    }

    
}