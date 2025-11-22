import React from 'react';

const UserNote = () => {
  return (
    <section className="user-note" aria-labelledby="note-title" role="region">
      <style>
        {`
          .user-note {
            max-width: 720px;
            margin: 16px auto;
            padding: 16px;
            border-radius: 8px;
            background: #d50000;
            border: 1px solid #b00000;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
            color: #ffffff;
            font-weight: bold;
            line-height: 1.5;
          }
          .user-note h3 {
            margin: 0 0 8px;
            font-size: 1.10rem;
            color: #ffffff;
            font-weight: bold;
          }
          .user-note p {
            margin: 8px 0;
          }
          .user-note .highlight {
            text-decoration: underline;
          }
        `}
      </style>

      <h3 id="note-title">Note</h3>
      <center>
      <p> Yesterday, due to an issue with my hosting platform, the website wasn’t working. Now I’ve shifted everything to GitHub Pages. If you want to view my code, you can pull it from: <a href="https://github.com/shankarx415/notes" target="_blank">github.com/shankarx415/notes</a> </p>
      </center>
    </section>
  );
};

export default UserNote;