import './index.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {
    if(category == "")
    {
        alert("Выберите роль!");
        return;
    }
    try {
        const postResponse = await fetch('http://localhost:8080/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: category,
          }),
        });

        if (!postResponse.ok) {
          throw new Error(`HTTP error! Status: ${postResponse.status}`);
        }
        else {
          const responseData = await postResponse.json(); // Parse the JSON response
            const token = responseData.token;
            alert(`Name - ${firstname}: Token: ${token}`);
            console.log(token);
            localStorage.setItem('fullname', firstname + " " + lastname);
            localStorage.setItem('role', category);

            navigate('/');
        }

      } catch (postError) {
        console.log(JSON.stringify({
            email: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: category,
          }));
        console.error('Error during registration:', postError);
      }
  };
  
  

  return (
    <div className='main-div-login'>
      <div className='second-login-page-div'>
        <div className='action-menu'>
          <div className="top-buttons">
            <button className="not-selected-act"><Link to="/authenticate">Войти</Link></button>
            <button className="selected-act">Зарегистрироваться</button>
          </div>

          <div className="input-fields">
            <label>Имя:</label>
            <input
              type="text"
              placeholder=""
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />

            <label>Фамилия:</label>
            <input
              type="text"
              placeholder=""
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            <label htmlFor="category">Роль</label>    
            <select className='selecter-input' value={category} onChange={(e) => setCategory(e.target.value)} >                
                <option value="">Выбрать роль</option>
                <option value="USER">Пользователь</option>
                <option value="ADMIN">Админ</option>
                <option value="MANAGER">Менеджер</option>
            </select>

            <label>Электронный почта:</label>
            <input
              type="text"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Пароль:</label>
            <input type="password"
             placeholder=""
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
             />
          </div>

          <button className="enter-button" onClick={handleRegistration}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
