import maskInput from './js/mask.js';

class GeneralClass {
    constructor() {
        this.$field = document.querySelector('.input-date');
        
        this.setMaskInput();
        this.setSubmitEvnt();
    }
    
    setMaskInput() {
        maskInput(this.$field);
    }
    
    setSubmitEvnt() {
        let $form = document.querySelector('.submit-date');
        $form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.$field.value) {
                let [day, month, year] = this.formatDate(this.$field.value);
                this.setTextDate(day, month, year);
            }
        }, false);
    }

    setTextDate(year, month, day) {
        let $p = document.querySelector('.msg');
        $p.innerHTML = `${year}${month}${day}`;
    }

    formatDate(value) {
        return value.split('/', 3);
    }
}

window.onload = function () {
    new GeneralClass();
}