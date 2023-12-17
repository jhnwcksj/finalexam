import './index.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuthentication = async () => {
    try {
        const postResponse = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        });

        if (!postResponse.ok) {
          throw new Error(`HTTP error! Status: ${postResponse.status}`);
        }
        else {
            const responseData = await postResponse.json(); // Parse the JSON response
            const token = responseData.token;
            const roleAuth = responseData.role;
            const fullnameAuth = responseData.fullname;
            alert(`Token: ${token}`);
            console.log(token);
            localStorage.setItem('fullname', fullnameAuth);
            localStorage.setItem('role', roleAuth);
            navigate('/');
        }

      } catch (postError) {
        console.log(JSON.stringify({
            email: username,
            password: password,
          }));
        console.error('Error during registration:', postError);
      }
  };
  
  

  return (
    <div className='main-div-login'>
      <div className='second-login-page-div'>
        <div className='action-menu'>
          <div className="top-buttons">
            <button className="selected-act">Войти</button>
            <button className="not-selected-act"><Link to="/register">Зарегистрироваться</Link></button>
          </div>

          <div className="input-fields">
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

          <button className="enter-button" onClick={handleAuthentication}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
