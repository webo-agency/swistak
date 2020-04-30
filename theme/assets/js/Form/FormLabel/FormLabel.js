class FormLabel {
    constructor() {
        this.inputs = document.querySelectorAll('.ks-input');
        this.activeClassName = 'active';
        this.acfFieldClassName = '.acf-field';
    }

    toggleLabelClassNameIfEmpty(input, value) {
        const parentField = input.closest(this.acfFieldClassName);
        if(!value) {
            parentField.classList.remove(this.activeClassName);
        }
        else {
            parentField.classList.add(this.activeClassName);
        }
    }

    eachInputInit() {
        this.inputs.forEach(input => {
            this.toggleLabelClassNameIfEmpty(input, input.value)
            input.addEventListener('change', (e) => {
                this.toggleLabelClassNameIfEmpty(input, e.target.value)
            })
        })
    }
}

export default FormLabel;