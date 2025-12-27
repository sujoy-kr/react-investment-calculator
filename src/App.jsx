// src/App.jsx
import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            }
        })
    }

    const isInputValid = userInput.duration > 0

    return (
        <>
            <Header />
            <main className='main-container'>
                <div className='input-section'>
                    <UserInput
                        handleChange={handleChange}
                        userInput={userInput}
                    />
                </div>

                <div className='result-section'>
                    {isInputValid ? (
                        <Result userInput={userInput} />
                    ) : (
                        <p className='center errorMessage'>
                            Please enter a duration greater than zero.
                        </p>
                    )}
                </div>
            </main>
        </>
    )
}

export default App
