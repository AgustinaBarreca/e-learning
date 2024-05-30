import React, {useState} from 'react'

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setMessage('Subscription successful!');
        setEmail('');
      } else {
        setMessage('Subscription failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  }

    return ( <form onSubmit={subscribe}>
    <div className="footer__subscribe-input mb-15">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">
        <i className="fas fa-arrow-right"></i>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
    {message && <p>{message}</p>}
  </form>)
}



