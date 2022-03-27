import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, ValidatorFn, 
    AbstractControl, ValidationErrors, FormGroup, 
    FormControl } from "@angular/forms";

    /*
const signupForm = new FormGroup({
    'userName': new FormControl(),
    'email': new FormControl(),
    'password': new FormControl(),
    'confirmPassword': new FormControl()
    },
    { validators: passwordsMatchValidator });
    */

function validatePasswords(): ValidatorFn{
    return (control: AbstractControl) => {
        let isValid = false;
        if (control && control instanceof FormGroup) {
            let group = control as FormGroup;
            if (group.controls['password'] && group.controls['confirmPassword'])
            {
                isValid = group.controls['password'].value === 
                group.controls['confirmPassword'].value;
            }
        }
        if (isValid){
            return null;
        }
        else
        {
            return { 'passwordCheck': 'failed' }
        }
    }
};

@Directive({
    selector: '[appCheckPassword]',
    providers: [{ provide: NG_VALIDATORS,
    useExisting: CheckPasswordDirective,
    multi: true}]
})
export class CheckPasswordDirective
implements Validator {
    private valFn: ValidatorFn;

    constructor() {
        this.valFn = validatePasswords();
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.valFn(control);
    }
}