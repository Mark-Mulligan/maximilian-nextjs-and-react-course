import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="feedback" ref={feedbackInputRef}>
            Your Feedback
          </label>
          <textarea id="feedback"></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
