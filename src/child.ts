import { stdout } from "process";
import * as vscode from 'vscode';

var exec = require('child_process').exec, child;


function getChild(){
        child = exec('java -jar /home/h/Documentos/VSCODEABERSIAHORASI/Java/main.jar "2" "3"',
        function (error: string | null, stdout: string, stderr: string){
        console.log('stdout: ' + stdout);
        const suma = stdout;   
        vscode.window.showInformationMessage("desde JAVA "+String(suma)); 
        console.log('stderr: ' + stderr);
        if(error !== null){
        console.log('exec error: ' + error);
        }
        return suma;
    });     

};

export { getChild };

