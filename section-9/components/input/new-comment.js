import { useState } from 'react';
import classes from './new-comment.module.css';

// new and imporved version
function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInput;
    const enteredName = nameInput;
    const enteredComment = commentInput;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment(
      {
        email: enteredEmail,
        name: enteredName,
        text: enteredComment,
      },
      () => {
        setEmailInput('');
        setNameInput('');
        setCommentInput('');
      },
    );
  }

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea
          id="comment"
          rows="5"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        ></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={classes.btn}>Submit</button>
    </form>
  );
}

export default NewComment;
