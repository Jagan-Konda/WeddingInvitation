import './index.css'
const RSVP = () => {
    return (
        <div className="rsvp-bg-container">
            <form className='rsvp-form'>
                <h1 className='form-heading'>Are You Attending?</h1>
                <label htmlFor='name' className='form-label'>Name</label>
                <input id="name" type="text" className='form-input' />
                <label className='form-label'>Email</label>
                <input id="email" type="text" className='form-input' />
                <div className='mt-3 mb-4'>
                    <input name="attendance" id="attending" type="radio" className='me-2' />
                    <label htmlFor='attending ' className='form-label me-3'>Yes, I will be there</label>
                    <input name="attendance" id='notAttending' type="radio" className='me-2' />
                    <label htmlFor='notAttending' className='form-label me-3'>Sorry, I can't come</label>
                </div>
                <label htmlFor='numberOfGuests' className='form-label'>Number of Guests</label>
                <input id='numberOfGuests' className='form-input' type='number' min="1" />
                <label htmlFor='whatAttending' className='form-label'>What Will You Be Attending</label>
                <input id='whatAttending' className='form-input' type="text" />
                <button type="button" className='rsvp-button'>RSVP</button>
            </form>
        </div>
    )
}

export default RSVP