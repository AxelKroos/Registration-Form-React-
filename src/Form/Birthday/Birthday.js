import React from 'react'

const Birthday = (props) => {
        return <div>
                <div style={props.style}>Ошибка!<br/>Пожалуйста, выберите дату своего рождения</div>
                <input type="date" onChange={props.birthday}/>
        </div>
}

export default Birthday