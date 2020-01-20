#!/usr/bin/env node
const readline = require('readline');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');

clear();

console.log(
    figlet.textSync('COLORDEV', { horizontalLayout: 'full' })
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    // console.log(`Received: ${input}`);
});

function write(what,where){
    return new Promise((resolve, reject)=>{

        fs.writeFile(where, what, function(err) {
            if(err) {
                reject()
            }
            resolve()
        }); 
    })
}

  

rl.question('Do what? ', (answer) => {

    var a = path.basename(__dirname)
    var b = process.cwd();
    // var page1 = require('./indexroot.js')
    // var stringify = JSON.parse(page1)
    // console.log(path)
    var indexNode = answer.indexOf('node')
    var indexHtml = answer.indexOf('html')
    var indexChatbot = answer.indexOf('chatbot')

    if(indexNode!==-1&&indexHtml===-1&&indexChatbot===-1){
        write(`
        var utils = require('coloringautils');
        var write = require('coloringautils/writefile');
        var colorxjs = require('colorxjs');
        `, 
        path.join(b, '/index.js')).then(res=>{
      
                  write(`
      {
          "name": "colordummy",
          "version": "1.0.0",
          "description": "change me",
          "main": "index.js",
          "scripts": {
              "test": "echo \\"Error: no test specified\\" && exit 1"
          },
          "author": "Matheus Loures",
          "license": "ISC"
      }
                  `, 
                  path.join(b, '/package.json')).then(res=>{
      
                      console.log("See Yaaaaa!");
                  },err=>{
                      console.log("Deu ruim no finalzinho");
                  })
        },err=>{
          console.log("Deu ruim");
        })
    }else if(indexNode!==-1&&indexHtml!==-1&&indexChatbot===-1){
        write(`
        var utils = require('coloringautils');
        var write = require('coloringautils/writefile');
        var colorxjs = require('colorxjs');
        `, 
        path.join(b, '/index.js')).then(res=>{
      
                  write(`
      {
          "name": "colordummy",
          "version": "1.0.0",
          "description": "change me",
          "main": "index.js",
          "scripts": {
              "test": "echo \\"Error: no test specified\\" && exit 1"
          },
          "author": "Matheus Loures",
          "license": "ISC"
      }
                  `, 
                  path.join(b, '/package.json')).then(res=>{

                                write(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>This is the title!</title>
    <meta name="description" content="Your gorgeous description">
    <!-- Mobile Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.png">
    
    <!-- TODO https://www.google.com/webmasters/markup-helper/?hl=en -->

    <link rel="stylesheet" href="./css>

    <meta name="og:title" property="og:title" content="Your Awesome Open Graph Title">
    <meta name="og:description" property="og:description" content="Your Awesome Open Graph description">
    <meta name="robots" content="index, follow">
    <meta name="author" content="">

  </head>
  <body>

    <h1>Your irresistibly appealing heading</h1>
    <img src="url" alt="Your clear-cut image description">
    <p>This is an example paragraph. Anything in the <strong>body</strong> tag will appear on the page, just like this <strong>p</strong> tag and its contents.</p>

  </body>
</html>
                                            `, 
                                            path.join(b, '/index.html')).then(res=>{
                                
                                                console.log("See Yaaaaa!");
                                            },err=>{
                                                console.log("Deu ruim no finalzinho");
                                            })                  
      
                      console.log("See Yaaaaa!");
                  },err=>{
                      console.log("Deu ruim no finalzinho");
                  })
        },err=>{
          console.log("Deu ruim");
        })
    }
  
  
  rl.close();
})