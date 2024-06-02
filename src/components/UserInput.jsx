

export default function UserInput({valueChange, userInput}) {



  return <section id="user-input">
    <div className="input-group">
      <p>
        <label >초기 투자금</label>
        <input type="number"
          required
          value={userInput.initialInvestment || ""}
          onChange={(e) => valueChange('initialInvestment', e.target.value)} />
      </p>
      <p>
        <label>연간 투자금</label>
        <input type="number"
          required
          value={userInput.annualInvestment || ""}
          onChange={(e) => valueChange('annualInvestment', e.target.value)} />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label >기대수익률</label>
        <input type="number"
          required
          value={userInput.expectedReturn || ""}
          onChange={(e) => valueChange('expectedReturn', e.target.value)} />
      </p>
      <p>
        <label>지속기간</label>
        <input type="number"
          required
          value={userInput.duration || ""}
          onChange={(e) => valueChange('duration', e.target.value)} />
      </p>
    </div>
  </section>
}