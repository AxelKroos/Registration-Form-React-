import React, {Component} from 'react'
import classes from './App.module.css';
import Form from "./Form/Form";
import Result from "./Result/Result";

class App extends Component {

  state = {
        num: 1,
        name: '',
        surname: '',
        patronymic: '',
        mail: '',
        birthday: '',
        password: '',
        passwordDouble: '',
        style: {
          color: 'red',
          display: 'none',
        },
        result: false
  }

  /*Текущее значение инпута Имени*/
  currentName = (event) => {
    event.target.value = event.target.value.replace(/[а-яА-Я]/g, '');
    this.setState({name: event.target.value})
  }
  /*Текущее значение инпута Фамилии*/
  currentSurname = (event) => {
    event.target.value = event.target.value.replace(/[а-яА-Я]/g, '');
    this.setState({surname: event.target.value})
  }
  /*Текущее значение инпута Отчества*/
  currentPatronymic = (event) => {
    event.target.value = event.target.value.replace(/[а-яА-Я]/g, '');
    this.setState({patronymic: event.target.value})
  }
  /*Текущее значение инпута Почта*/
  currentMail = (event) => {
    this.setState({mail: event.target.value})
  }
  /*Текущее значение инпута Даты рождения*/
  currentBirthday = (event) => {
    this.setState({birthday: event.target.value})
  }
  /*Текущее значение инпута Пароля*/
  currentPassword = (event) => {
    this.setState({password: event.target.value})
  }
  /*Текущее значение инпута повторного Пароля*/
  currentPasswordDouble = (event) => {
    this.setState({passwordDouble: event.target.value})
  }

/*Проверка каждого поля перед переходом к след. этапу регистрации*/
  count = () => {

    /*Поле ФИО*/
    if (this.state.num === 1) {
      if (this.state.name === '' || this.state.surname === '' || this.state.patronymic === '' ||
      this.state.name.length < 3 || this.state.surname.length < 3 || this.state.patronymic.length < 3) {
        this.setState({style: {...this.state.style, display: 'block'}});
      } else {
        this.setState({num: this.state.num + 1})
        this.setState({style: {...this.state.style, display: 'none'}});
      }

      /*Поле дня рождения*/
    } else if (this.state.num === 2) {
      if (this.state.birthday === '') {
        this.setState({style: {...this.state.style, display: 'block'}});
      } else {
        this.setState({num: this.state.num + 1})
        this.setState({style: {...this.state.style, display: 'none'}});
      }

      /*Поле Почты*/
    } else if (this.state.num === 3) {
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (this.state.mail === '' || reg.test(this.state.mail) === false) {
        this.setState({style: {...this.state.style, display: 'block'}});
      } else {
        this.setState({num: this.state.num + 1})
        this.setState({style: {...this.state.style, display: 'none'}});
      }

      /*Поле пароля*/
    } else if (this.state.num === 4) {
      if (this.state.password != this.state.passwordDouble || this.state.password === '' || this.state.passwordDouble === '') {
        this.setState({style: {...this.state.style, display: 'block'}});
      } else {
        this.setState({result: true})
        this.setState({style: {...this.state.style, display: 'none'}});
      }
    }
  }

  render() {
    return <div className={classes.form}>
      {this.state.result ?
            <Result name={this.state.name}
                    surname={this.state.surname}
                    patronymic={this.state.patronymic}
                    birthday={this.state.birthday}
                    mail={this.state.mail} />
      :
          <div>
            <h2>Регистрация пользователя</h2>
            <Form currentName={this.currentName}
                  currentSurname={this.currentSurname}
                  currentPatronymic={this.currentPatronymic}
                  currentBirthday={this.currentBirthday}
                  currentMail={this.currentMail}
                  currentPassword={this.currentPassword}
                  currentPasswordDouble={this.currentPasswordDouble}
                  style={this.state.style}
                  num={this.state.num}/>
            <button onClick={this.count}>Далее</button>
          </div>
      }
    </div>
  }
}

export default App;
