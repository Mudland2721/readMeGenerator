// dependencies 
const fs = require("fs");
const inquirer = require("inquirer");
const api = require('./gitHubApi');

inquirer
// console prompts 
    .prompt([{
        type: "input",
        name: "title",
        message: "Insert project title:"
    }, {
        type: "input",
        name: "description",
        message: "Insert description of your Project. Be as specific as possible:"
    }, {
        type: "input",
        name: "tableOfContents0",
        message: "Insert the first entry for a table of contents for this project:"
    },{
        type: "input",
        name: "tableOfContents1",
        message: "Insert the second entry for a table of contents for this project:"
    },{
        type: "input",
        name: "tableOfContents2",
        message: "Insert the third entry for a table of contents for this project:"
    },{
        type: "input",
        name: "installation",
        message: "Insert steps taken to install this application:"
    }, {
        type: "input",
        name: "usage",
        message: "Insert instructions on how to use this application:"
    }, {
        type: "input",
        name: "license",
        message: "Insert licensing for this project:"
    }, {
        type: "input",
        name: "contributing",
        message: "Insert if anyone else worked on this project with you:"
    }, {
        type: "input",
        name: "tests",
        message: "Insert different ways this application can be tested:"
    }, {
        type: "input",
        name: "username",
        message: "Insert Github username:"
    }, 

        ]).then(function (responses) {
        console.log(responses);
        username = responses.username;
        api.getUser(username).then(function (res) {
            console.log(res.data[0].payload.commits[0].author.email);
            const userEmail = res.data[0].payload.commits[0].author.email;
            const userProfile = res.data[0].actor.avatar_url;
            let title = responses.title;
            let description = responses.description;
            let tableOfContents = responses.tableOfContents0;
            let tableOfContents1 = responses.tableOfContents1;
            let tableOfContents2 = responses.tableOfContents2;
            let installation = responses.installation;
            let usage = responses.usage;
            let license = responses.license;
            let contributing = responses.contributing;
            let tests = responses.tests;
            let answers = "<h2>" + title + "</h2>" + "\n" + "\n" +

                "<h3>Snapshot</h3>" + "\n" + description + "\n" + "\n" +

                "<h3>How to Install</h3>" + "\n" + installation + "\n" + "\n" +

                "<h3>Table of Contents</h3>" + "\n" + "\n" +

                "<ul>" + "<li>" + 
                
                tableOfContents + "</li>" + "\n" + "\n" +
                
                "<li>" + tableOfContents1 + "</li>" + "\n" + "\n" +
                
                "<li>" + tableOfContents2 + "</li>" + "\n" + "\n" + "</ul>" + "\n" + "\n" +

                "<h3>Screenshots of Usage</h3>" + "\n" + usage + "\n" + "\n" +

                "<h3>Licensing</h3>" + "\n" + license + "\n" + "\n" +

                "<h3>Contributors</h3>" + "\n" + contributing + "\n" + "\n" +

                "<h3>Screenshots of code</h3>" + "\n" + tests + "\n" + "\n" +

                userEmail + "\n" + "\n" +

                "![](" + userProfile + ")";
                //write response to readme
            fs.writeFile("readMe.md", answers, () => {});
        });
    });



    