async function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      const response = await fetch('http://localhost:3001/api/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      es.status(500).json({ message: 'Adding comment failed' });
    }
  }

  if (req.method === 'GET') {
    try {
      const response = await fetch(`http://localhost:3001/api/comments/${eventId}`);
      const data = await response.json();
      console.log(data);
      res.status(200).json({ comments: data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }
}

export default handler;
