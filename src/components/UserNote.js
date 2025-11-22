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
      <p> Yesterday, due to an issue with my previous hosting platform, the website stopped working unexpectedly. I’ve now moved everything to <strong>GitHub Pages</strong> for better stability and reliability. </p> <p> This entire website is built using <strong>React</strong>, and I manage all updates through Git and GitHub. If you're curious about the code or want to suggest improvements, you can check it out here:<br/> <a href="https://github.com/shankarx415/notes" target="_blank">github.com/shankarx415/notes</a> </p>
    </section>
  );
};

export default UserNote;