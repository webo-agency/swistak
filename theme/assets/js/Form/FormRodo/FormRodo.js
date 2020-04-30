class FormRodo {
    constructor() {
        this.checkbox = document.querySelector('#form-rodo-checkbox input[type="checkbox"]');
        this.formBtn = document.querySelector('#contact-form-submit');
        this.checkbox.checked = false;
    }

    toggleActiveSubmitButton() {
        this.checkbox.addEventListener('click', () => {
            this.formBtn.toggleAttribute('disabled');
        })
    }

    init() {
        this.formBtn.setAttribute('disabled', 'true');
        this.toggleActiveSubmitButton();
    }
}

export default FormRodo;