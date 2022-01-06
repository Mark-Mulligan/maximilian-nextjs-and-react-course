async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(({ data }) => {
        console.log(data);
        res.status(201).json({ message: 'Signed up!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Inserting data failed' });
      });
  }
}

export default handler;
