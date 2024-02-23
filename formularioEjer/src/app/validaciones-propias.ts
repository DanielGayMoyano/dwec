import { NonNullAssert } from "@angular/compiler";
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class ValidacionesPropias {

    email='';
    emailRepeat='';
    pass='';
    passRepeat='';
    constructor(email:string, emailRepeat: string, pass: string, passRepeat : string) {
        this.email = email;
        this.emailRepeat = emailRepeat;
        this.pass = pass;
        this.passRepeat = passRepeat;
    }

    static emailFormat(control: AbstractControl): ValidationErrors | null {
        let REG_EXP=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        let email=control.value;
        if(REG_EXP.test(email)){
            return null;    
        }else{
            return {emailFormat:true};
        }
        
    }
    static passwordFormat(control: AbstractControl):ValidationErrors |null{
        let REG_EXP=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        let pass=control.value;
        if(REG_EXP.test(pass)){
            return null;
        }else{
            return {pass:true};
        }
        
    }

}
