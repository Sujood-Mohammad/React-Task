import logo from './logo.svg';
import './App.css';
import useValidation from './useValidation'
function App() {

    //calling the hook
    const {
        isEmailValid,
        isPasswordValid,
        email,
        password,
        setEmail,
        setPassword,
    } = useValidation();

    const handleSubmit = () => {
        //code for submitting code
        alert("Welcome!");
      
    };
 
    return (
        <div className='App'>
            <h2>Email</h2>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <span>{isEmailValid ? "Valid" : "Invalid"}</span>
            <h2>Pasword</h2>
            <input
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={false}
            />
            <span>{isPasswordValid ? "Valid" : "Invalid"}</span>
            <button
                type='submit'
                onClick={handleSubmit}
                disabled={!(isEmailValid && isPasswordValid)}
                autoComplete={false}
            >
                Submit
            </button>
        </div>
    );
}

export default App;
