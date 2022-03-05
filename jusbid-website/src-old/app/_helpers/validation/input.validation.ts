import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const InputValidationConstants = {
    REGEX: {
        EMAIL: /^(([\w-\s]+)|([\w-]+(?:\.[\w-]+)*)|([\w-\s]+)([\w-]+(?:\.[\w-])*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
        // EMAIL_2: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$)/,
        PASSWORD: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}',
        PHONE_0_OR_10_LEN: /^[]{0}$|^[0-9]{10}$/
    }
}

@Injectable({ providedIn: 'root' })
export class InputValidation {
    numericOnly(event: any): boolean {
        if (event.metaKey && event.key === 'v') {
            return true;
        }
        let patt = /^([0-9])$/;
        let result = patt.test(event.key);
        return result;
    }

    numericSpaceOnly(event: any): boolean {
        let patt = /^([0-9 ])$/;
        let result = patt.test(event.key);
        return result;
    }

    numericDotOnly(event: any): boolean {
        let patt = /^([0-9.])$/;
        let result = patt.test(event.key);
        return result;
    }

    alphaNumericOnly(event: any): boolean {
        let patt = /^\w+$/;
        let result = patt.test(event.key);
        return result;
    }

    alphaNumericAndSpecialCharOnly(event: any): boolean {
        let patt = /^[a-zA-Z0-9()&#-', ]*$/;
        let result = patt.test(event.key);
        return result;
    }

    alphabetsAndSpaceOnly(event: any): boolean {
        let patt = /^[a-zA-Z ]*$/;
        let result = patt.test(event.key);
        return result;
    }

    emailValidator(email: string): boolean {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(email)) {
            return false;
        }
        return true;
    }

    phoneValidator(number: any): boolean {
        var PHONE_REGEXP = /^([0-9]\d{9,9})$/;
        if (!PHONE_REGEXP.test(number)) {
            return false;
        }
        return true;
    }

    static emailsLenghtAndFormat(control: AbstractControl): ValidationErrors | null {
        const email = control.value;
        const responseKo = { invalid: true };
        const responseOk = null;
        const responseKoMaxLength = { maxlength: true };

        if (!email) {
            return responseOk;
        }

        if (email.length > 100) {
            return responseKoMaxLength;
        }

        const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email !== '' && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return responseKo;
        }

        return responseOk;
    }

}