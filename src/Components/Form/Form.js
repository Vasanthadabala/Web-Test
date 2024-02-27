import './Form.css'
export default function Form(){
    return(
        <div className='book'>
      <div className='set-1'>
        <h1>Book an appointment to visit our chemical plants</h1>
        <ul>
          <li>Learn more about how we operate and work with chemicals.</li>
          <li>Inspire people you bring by showing how machineries and chemicals work together to create a safe place.</li>
          <li>Inspire people you bring by showing how machineries and chemicals work together to create a safe place.</li>
        </ul>
      </div>
      <div className='set-2'>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
          <br />

          <div className='container'>
  <div className='set-3'>
    <form>
      <label htmlFor='school'>Representing</label>
      <input type='text' id='school' placeholder='School' defaultValue='School ' /> 
    </form>
  </div>

  <div className='set-4'>
    <form>
      <label htmlFor='date'>Date</label>
      <input type='text' id='date' placeholder='2024/2/27' defaultValue='2024/2/27'/>
    </form>
  </div>
</div>
          <button type="submit" id='btn'>Submit Request</button>
        </form>
      </div>
    </div>
    )
}