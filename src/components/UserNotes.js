import React from 'react';

const UserNote = () => {
  return (
    <section className="user-note" aria-labelledby="note-title" role="region">
      <h3 id="note-title">Note</h3>
      <p>
        I am partially wrong in the 2-mark Question 2 answer — there were actually two answers for that question
        (found on pages <span className="highlight">80–82 of <em>UNIT III.pdf</em></span>).
      </p>
      <p>
        I’m sorry for the mistake; I’m also a student like you, and mistakes can happen while I prepare.
        Some of you even mocked or scolded me for it, but still, I’m trying my best.
      </p>
      <center>
        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          If you feel my notes don’t suit you, please use your notes
        </span>
      </center>
    </section>
  );
};

export default UserNote;
