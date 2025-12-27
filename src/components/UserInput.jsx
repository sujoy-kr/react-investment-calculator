const UserInput = ({ handleChange, userInput }) => {
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>প্রাথমিক বিনিয়োগ (Initial)</label>
                    <input
                        type='number'
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) =>
                            handleChange('initialInvestment', e.target.value)
                        }
                    />
                </p>
                <p>
                    <label>বার্ষিক বিনিয়োগ (Yearly)</label>
                    <input
                        type='number'
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) =>
                            handleChange('annualInvestment', e.target.value)
                        }
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>প্রত্যাশিত মুনাফা (% Return)</label>
                    <input
                        type='number'
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) =>
                            handleChange('expectedReturn', e.target.value)
                        }
                    />
                </p>
                <p>
                    <label>মেয়াদ (Duration)</label>
                    <input
                        type='number'
                        required
                        placeholder='কত বছর?'
                        value={userInput.duration}
                        onChange={(e) =>
                            handleChange('duration', e.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput
