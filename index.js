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
    // var page1 = require('./indexroot.js')
    // var stringify = JSON.parse(page1)
    console.log(path)
  write(`
  var utils = require('coloringautils');
  var write = require('coloringautils/writefile');
  var colorxjs = require('colorxjs');
  `, 
  path.join(__dirname, '/index.js')).then(res=>{

            write(`
            {
                "name": "colordummy",
                "version": "1.0.0",
                "description": "change me",
                "main": "index.js",
                "scripts": {
                  "test": "echo \"Error: no test specified\" && exit 1"
                },
                "author": "Matheus Loures",
                "license": "ISC"
            };
            `, 
            path.join(__dirname, '/package.json')).then(res=>{

                console.log("See Yaaaaa!");
            },err=>{
                console.log("Deu ruim no finalzinho");
            })
  },err=>{
    console.log("Deu ruim");
  })
  
  rl.close();
})