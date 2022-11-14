'use strict';

class Validator {
    constructor(form) {
        // названия свойств соответствуют именам селекторов - это обязательно
        // регулярные выражения выступают в качестве правил
        //  в patterns прописаны инструкции
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };
        // в объекте errors прописаны ошибки для каждого инпута
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errorClass = 'error-msg'; // отмечает класс красным цветом
        this.form = form;
        this.valid = false; // самое важное свойство из всех - valid. Именно от valid зависит валидна или не валидна моя форма. Изначально считаю, что форма не валидна, тк она не заполнена
        this._validateForm();
    }
    validate(regexp, value) {
        regexp.test(value)
    }

    _validateForm() {
        // в этом методе ищем все формы и в форме ищем все элементы с ошибкой
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors) {
            error.remove(); // удаляем каждую ошибку
        }
        // находим в форме все инпуты с ошибками, распаковываем коллекцию и подсчечиваем ошибку пользователю
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields) {
            this._validate(field);
        }
        if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
            this.valid = true;
        }
    }

    _validate(field) {
        // проверка на ошибки 
        if (this.patterns[field.name]) {
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid'); // добавляет красную рамку
                this._addErrorMsg(field);
                this._watchField(field);
            }
        }
    }
    _addErrorMsg(field) {
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div> `;
        // ставит текст с ошибкой перед тегом label, parentNode ищет тег
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }
    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrorMsg(field);
                }
            }
        })
    }
}










