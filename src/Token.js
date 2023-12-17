import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  BsPersonCircle,
  BsFillPersonFill,
  BsFillBellFill,
  BsGeoAltFill,
  BsFillGearFill,
  BsBoxArrowRight,
  BsGiftFill,
} from "react-icons/bs";
import './App.css';

function Token() {
  const [securedData, setSecuredData] = useState();
  const navigate = useNavigate();

  const [inputText, setinputText] = useState('');
  const [instruction, setInstruction] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkToken = async () => {
    const role = localStorage.getItem('role');
    if (role !== 'ADMIN') {
      setSecuredData(" ");
      alert('You are not an admin!');
      return;
    }
    if (!inputText) {
      setSecuredData(" ");
      setinputText('/ch ');
      return;
    }
    try {
      var tokenCode = "";
      if (inputText.startsWith('/ch')) {
        tokenCode = inputText.substring('/ch'.length).trim();
        console.log(tokenCode);
      } else {
        setSecuredData(" ");
        setinputText('/ch ');
        alert('Invalid command input!');
        return;
      }

      const response = await axios.get('http://localhost:8080/demo-controller', {
        headers: {
          'Authorization': `Bearer ${tokenCode}`,
        },
      });

      if (!response.data) {
        throw new Error('Empty response data');
      } else {
        const responseData = await response.data;
        console.log(responseData);
        setSecuredData(responseData);
      }

    } catch (error) {
      console.error('Error fetching secured data:', error);
      console.error('Error details:', error.message, error.stack);
    }
  };

  const handleInstructionChange = (e) => {
    setInstruction(e.target.value);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='main-div-token-page'>
      <div className='second-div-token-page'>
        <h2>Admin console</h2>
        <div className='input-fields'>
          <label className='token'>Input Field Console:</label>
          <textarea
            className='input-command-admin'
            type="text"
            placeholder=""
            rows={5}
            value={inputText}
            onChange={(e) => setinputText(e.target.value)}
          />
        </div>
        <button className="enter-button" onClick={checkToken}>
          Enter
        </button>
        <div className="menu-container">
          <button className="menu-buttonn" onClick={handleMenuToggle}>
            Инструкция
          </button>
          {isMenuOpen && (
            <div className="menu-dropdown">
              {/* <label>Instruction:</label> */}
              <textarea
                value={instruction}
                onChange={handleInstructionChange}
                placeholder="Это проверка Токена! Чтобы проверить токен, необходимо написать команду /Ch [token] Пример: /Ch 3784rryeihgndf2"
              />
            </div>
          )}
        </div>
        {securedData ? (
          <p>{securedData}</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Token;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import {
//   BsPersonCircle,
//   BsFillPersonFill,
//   BsFillBellFill,
//   BsGeoAltFill,
//   BsFillGearFill,
//   BsBoxArrowRight,
//   BsGiftFill,
// } from "react-icons/bs";
// import './App.css';
// function Token() {
//   const [securedData, setSecuredData] = useState();
//   const navigate = useNavigate();

//   const [inputText, setinputText] = useState('');

//   const checkToken = async () => {
//     const role = localStorage.getItem('role');
//     if(role != "ADMIN")
//     {
//       setSecuredData(" ");
//       alert("You are not admin!")
//       return;
//     }
//     if (!inputText) {
//       setSecuredData(" ");
//       setinputText("/ch ");
//         return;
//     }
//     try {        
//         var tokenCode = "";
//         if (inputText.startsWith('/ch')) {
//           tokenCode = inputText.substring('/ch'.length).trim();
      
//           console.log(tokenCode);
//         }
//         else {
//           setSecuredData(" ");
//           setinputText("/ch ");
//           alert("Invalid command inputed!");
//           return;
//         }

//         const response = await axios.get('http://localhost:8080/demo-controller', {
//         headers: {
//             'Authorization': `Bearer ${tokenCode}`,
//         },
//         });



//         if (!response.data) {
//             throw new Error('Empty response data');
//         }
//         else 
//         {
//           const responseData = await response.data;
//           console.log(responseData);
//           setSecuredData(responseData);
//         }

//     } catch (error) {
//         console.error('Error fetching secured data:', error);
//         console.error('Error details:', error.message, error.stack);
//     }
// };
// const [isOpen, setOpen] = useState(false);
//   return (
//     <div className='main-div-token-page'>
//       <div className='second-div-token-page'>
//         <h2>Admin console</h2>
//         <div className="input-fields">
//           <label className='token'>Input Field Console:</label>
//           <textarea
//             className='input-command-admin'
//             type="text"
//             placeholder=""
//             rows={5}
//             value={inputText}
//             onChange={(e) => setinputText(e.target.value)}
//           />
//         </div>
//         <button className="enter-button" onClick={checkToken}>
//           Enter
//         </button>
//         {securedData ? (
//           <p>{securedData}</p>
//         ) : (
//           <p></p>
//         )}
//       </div>      
//     </div>
//   );
// }

// export default Token;
