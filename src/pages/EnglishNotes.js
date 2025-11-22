import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SocialBanners from '../components/SocialBanners';
import UserNote from '../components/UserNote';
import Footer from '../components/Footer';
import Question from '../components/Question';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EnglishNotes = () => {
  useScrollAnimation();

  return (
    <>
      <Header 
        title="English Grammar and Phonetics Notes" 
        subtitle="Comprehensive Assignment on Grammar Rules, Pronunciation Guidelines, and Phonetics" 
      />
      <Navbar />
      <SocialBanners />
      <UserNote />

      {/* PART A */}
      <div className="part fade-in" id="part-a">
        <div className="part-header">
          <div className="part-title">Part A</div>
          <div className="part-marks">(5×2=10 Marks)</div>
        </div>

        <Question number="1" text="Describe comma splice with example.">
          A comma splice occurs when two independent clauses are incorrectly joined using only a comma. This is a grammatical error as it can impact the clarity and flow of the sentence.
          <div className="illustration">
            <span className="key-point">Example</span>: Ted finished his chores, he felt tired.
          </div>
        </Question>

        <Question number="2" text="How do you fix the comma splice using conjunction?">
          You can fix a comma splice by keeping the comma and adding a conjunction.
          <ul>
            <li><span className="key-point">Coordinating Conjunction</span>: Add a word like "and," "but," or "so" after the comma to connect the two clauses.</li>
            <li><span className="key-point">Subordinating Conjunction</span>: Add a subordinating conjunction (like "although" or "because") to one of the clauses to make it dependent on the other.</li>
          </ul>
        </Question>

        <Question number="3" text="Outline the fused sentence and its correction of error.">
          A fused sentence (also known as a run-on sentence) occurs when two independent clauses are incorrectly linked together without any punctuation or conjunction.
          <br /><br />
          Fused sentences can be corrected in three main ways:
          <ul>
            <li>Dividing them into two smaller sentences using a full stop (period).</li>
            <li>Connecting the two clauses with a semi-colon.</li>
            <li>Adding a conjunction (like 'so', 'and', 'but') between the clauses to link them logically.</li>
          </ul>
        </Question>

        <Question number="4" text="Explain intonation with example.">
          Intonation describes how the voice rises and falls in speech; it is essentially the "music of speech". It is important because it can change the meaning of a sentence based on how something is said, rather than just what is said.
          <div className="illustration">
            <span className="key-point">Example (Falling Intonation)</span>: A simple statement typically uses a falling pitch at the end, such as: "Pleased to meet you".
          </div>
        </Question>

        <Question number="5" text="Write any two rules of pronunciation guidelines to consonants and vowels.">
          Here are two rules for pronunciation:
          <ul>
            <li><span className="key-point">Pronounce double consonants as a single letter</span>: In English, double letters (like ll, ss, ff) are not pronounced differently than single letters. For example, the 'ss' in "missing" or 'rr' in "occur".</li>
            <li><span className="key-point">Silent E rule</span>: When a word ends in 'e', the 'e' is typically not pronounced. Instead, it often causes the vowel that comes before it to become a long vowel sound, as in "rope" or "bite".</li>
          </ul>
        </Question>
      </div>

      {/* PART B */}
      <div className="part fade-in" id="part-b">
        <div className="part-header">
          <div className="part-title">Part B</div>
          <div className="part-marks">(4×5=20 Marks)</div>
        </div>

        <Question number="6" text="Fill in the blanks with the correct form of the verb.">
          <table className="pronunciation-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a) Benito ______ know the answer.</td>
                <td>doesn't</td>
              </tr>
              <tr>
                <td>b) One of my sisters ______ going on a trip to France.</td>
                <td>is</td>
              </tr>
              <tr>
                <td>c) The man with all the birds ______ on my street.</td>
                <td>lives</td>
              </tr>
              <tr>
                <td>d) The movie, including all the previews, ______ about two hours to watch.</td>
                <td>takes</td>
              </tr>
              <tr>
                <td>e) The players, as well as the captain, ______ to win.</td>
                <td>want</td>
              </tr>
            </tbody>
          </table>
        </Question>

        <Question number="7" text="Explain sentence fragment and how do you fix the sentence fragment?">
          A sentence fragment is an incomplete sentence or clause. It falls short of being a complete sentence because it is missing one of three critical components: a subject, a verb, or a complete thought.
          <div className="illustration">
            <span className="key-point">Example</span>: "Because of the rain" is a fragment. It doesn't form a complete thought, leaving the reader wondering what happened.
          </div>
          <br />
          There are two primary ways to fix a sentence fragment:
          <ul>
            <li><span className="key-point">Add the missing components</span>: Fortify the fragment with the missing subject or verb to turn it into an independent clause.
              <div className="highlight-box">
                Fragment: Looking forward to seeing you.<br />
                Corrected: I'm looking forward to seeing you.
              </div>
            </li>
            <li><span className="key-point">Attach the fragment to an independent clause</span>: Fasten the fragment onto a nearby complete sentence.
              <div className="highlight-box">
                Fragment: Because of the rain.<br />
                Corrected: Because of the rain, the party was canceled.
              </div>
            </li>
          </ul>
        </Question>

        <Question number="8" text="Outline the silent and non-silent letters with examples.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-volume-mute"></i> Silent Letters</div>
            A silent letter is a letter or combination of letters in a word that is generally not pronounced.
            <br /><br />
            <span className="key-point">Examples of Silent Consonants</span>:
            <ul>
              <li>b in dumb, thumb</li>
              <li>k in knee, know, knob</li>
              <li>l in calf, talk, would</li>
              <li>t in castle, listen</li>
              <li>w in wrap, wrong, write</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-volume-up"></i> Non-Silent Letters</div>
            <ul>
              <li>The letter V is <span className="key-point">never silent</span> in English words.</li>
              <li>Some letters that are often silent are pronounced in specific patterns (e.g., T in -tly).
                <div className="illustration">
                  <span className="key-point">Examples</span>: mostly, justly, softly, swiftly.
                </div>
              </li>
            </ul>
          </div>
        </Question>

        <Question number="9" text="Discuss the spelling rules and the words often misspelled with examples.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-spell-check"></i> Spelling Rules</div>
            <ul>
              <li><span className="key-point">I Before E, Except After C</span>: "ie" is common (achieve), but switches to "ei" after 'c' (receive). Exception: sound "ay" (neigh).</li>
              <li><span className="key-point">The Silent E</span>: Makes the vowel sound before it longer.
                <div className="highlight-box">Example: kit vs kite.</div>
              </li>
              <li><span className="key-point">Double Consonants (Floss Rule)</span>: Single-syllable words ending in F, L, or S usually double the final consonant.
                <div className="highlight-box">Examples: staff, fill, hiss.</div>
              </li>
              <li><span className="key-point">Plural Suffixes</span>: Add -es if word ends in -x, -z, -ch, -sh, or -s.
                <div className="highlight-box">Examples: bus → buses, box → boxes.</div>
              </li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-exclamation-triangle"></i> Words Often Misspelled</div>
            <ul>
              <li>Pronunciation (often misspelled as "pronounciation")</li>
              <li>Salmon (the 'l' is silent)</li>
              <li>Subtle (the 'b' is silent)</li>
              <li>Wednesday (often mispronounced "Wenz-day")</li>
              <li>Pseudonym (the 'p' is silent)</li>
            </ul>
          </div>
        </Question>
      </div>

      {/* PART C */}
      <div className="part fade-in" id="part-c">
        <div className="part-header">
          <div className="part-title">Part C</div>
          <div className="part-marks">(2×10=20 Marks)</div>
        </div>

        <Question number="10" text="Illustrate the Misplaced Modifiers, Squinting Modifiers, and Dangling modifiers.">
          <div className="modifier-example">
            <div className="modifier-card">
              <div className="modifier-type">1. Misplaced Modifiers</div>
              <p>A misplaced modifier is a word, phrase, or clause that is grammatically separated from the word it is intended to describe.</p>
              <div className="problem">Problem Example: The dealer sold the Cadillac to the buyer with leather seats.</div>
              <div className="correction">Correction: The dealer sold the Cadillac with leather seats to the buyer.</div>
            </div>
            <div className="modifier-card">
              <div className="modifier-type">2. Dangling Modifiers</div>
              <p>A dangling modifier is a phrase or clause that does not clearly and logically relate to any word in the sentence.</p>
              <div className="problem">Problem Example: When nine years old, my mother enrolled in medical school.</div>
              <div className="correction">Correction: When I was nine years old, my mother enrolled in medical school.</div>
            </div>
            <div className="modifier-card">
              <div className="modifier-type">3. Squinting Modifiers</div>
              <p>A squinting modifier is ambiguous because it could modify either the word before it or the word after it.</p>
              <div className="problem">Problem Example: Cycling up hills quickly strengthens your quadriceps.</div>
              <div className="correction">Correction Option 1: Cycling up hills strengthens your quadriceps quickly.</div>
              <div className="correction">Correction Option 2: Quickly cycling up hills strengthens your quadriceps.</div>
            </div>
          </div>
        </Question>

        <Question number="11" text="Explain Mother tongue influence (MTI) and various techniques for neutralization of Mother Tongue.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-language"></i> Mother Tongue Influence (MTI)</div>
            MTI refers to the impact that a speaker's native language has on their ability to speak a second language, such as English. It manifests in:
            <ul>
              <li>Difficulty with pronunciation of certain words</li>
              <li>Inability to distinguish between different sounds (e.g., 'f' and 'ph', or 'v', 'b', and 'w')</li>
              <li>Speaking with the rhythm or intonation patterns of the native language</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-microphone-alt"></i> Techniques for Neutralization</div>
            <ul>
              <li><span className="key-point">Practice Speaking</span>: Engage in regular English speaking practice.</li>
              <li><span className="key-point">Listen and Imitate</span>: Listen to English songs, movies, and conversations.</li>
              <li><span className="key-point">Focus on Pronunciation</span>: Learn correct intonation and rhythm.</li>
              <li><span className="key-point">Self-Correction</span>: Record your own voice and listen back.</li>
              <li><span className="key-point">Pacing</span>: Slow down your speech.</li>
            </ul>
          </div>
        </Question>

        <Question number="12" text="Articulate the 44 symbols in Phonetics with examples.">
          <p>The 44 symbols in English phonetics are divided into vowels (pure vowels and diphthongs) and consonants.</p>
          <div className="divider"></div>
          
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-music"></i> Pure Vowels (12)</div>
            <div className="phonetics-grid">
              {/* Pure Vowels */}
              <div className="phonetic-card"><div className="symbol">/A/</div><div className="examples">But, Up, son</div></div>
              <div className="phonetic-card"><div className="symbol">/æ/</div><div className="examples">hand, Cat, bad</div></div>
              <div className="phonetic-card"><div className="symbol">/e/</div><div className="examples">Bet, Met, set</div></div>
              <div className="phonetic-card"><div className="symbol">/i:/</div><div className="examples">heap, feet, see</div></div>
              <div className="phonetic-card"><div className="symbol">/I/</div><div className="examples">lift, hit, sit</div></div>
              <div className="phonetic-card"><div className="symbol">/ɒ/</div><div className="examples">Of, On, hot</div></div>
              <div className="phonetic-card"><div className="symbol">/U/</div><div className="examples">Food, Cook, put</div></div>
              <div className="phonetic-card"><div className="symbol">/u:/</div><div className="examples">To, You, lose, rule</div></div>
              <div className="phonetic-card"><div className="symbol">/ɜ:/</div><div className="examples">Earl, Sir, work, bird</div></div>
              <div className="phonetic-card"><div className="symbol">/ɔ:/</div><div className="examples">Mall, Hall, all, taught</div></div>
              <div className="phonetic-card"><div className="symbol">/a:/</div><div className="examples">Start, Ask, class, half</div></div>
              <div className="phonetic-card"><div className="symbol">/ə/</div><div className="examples">The, About, alike</div></div>
            </div>
          </div>

          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-wave-square"></i> Diphthongs (8)</div>
            <div className="phonetics-grid">
              <div className="phonetic-card"><div className="symbol">[ei]</div><div className="examples">cake, came, day</div></div>
              <div className="phonetic-card"><div className="symbol">[ai]</div><div className="examples">eye, cry, five</div></div>
              <div className="phonetic-card"><div className="symbol">[ɔi]</div><div className="examples">toy, voice, boy</div></div>
              <div className="phonetic-card"><div className="symbol">[əu]</div><div className="examples">hope, no, boat</div></div>
              <div className="phonetic-card"><div className="symbol">[au]</div><div className="examples">house, hour, how</div></div>
              <div className="phonetic-card"><div className="symbol">[iə]</div><div className="examples">here, clear, dear</div></div>
              <div className="phonetic-card"><div className="symbol">[eə]</div><div className="examples">There, care, mare</div></div>
              <div className="phonetic-card"><div className="symbol">[uə]</div><div className="examples">tour, poor</div></div>
            </div>
          </div>

          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-waveform"></i> Consonants (24)</div>
            <div className="phonetics-grid">
              <div className="phonetic-card"><div className="symbol">/p/</div><div className="examples">pet, paper</div></div>
              <div className="phonetic-card"><div className="symbol">/b/</div><div className="examples">bet, trouble</div></div>
              <div className="phonetic-card"><div className="symbol">/t/</div><div className="examples">Tim, better</div></div>
              <div className="phonetic-card"><div className="symbol">/d/</div><div className="examples">dim, order</div></div>
              <div className="phonetic-card"><div className="symbol">/k/</div><div className="examples">came, talking</div></div>
              <div className="phonetic-card"><div className="symbol">/g/</div><div className="examples">game, bigger</div></div>
              <div className="phonetic-card"><div className="symbol">/f/</div><div className="examples">fine, offer</div></div>
              <div className="phonetic-card"><div className="symbol">/v/</div><div className="examples">vine, saving</div></div>
              <div className="phonetic-card"><div className="symbol">/θ/</div><div className="examples">thin, method</div></div>
              <div className="phonetic-card"><div className="symbol">/ð/</div><div className="examples">then, other</div></div>
              <div className="phonetic-card"><div className="symbol">/s/</div><div className="examples">seal, missing</div></div>
              <div className="phonetic-card"><div className="symbol">/z/</div><div className="examples">zeal, crazy</div></div>
              <div className="phonetic-card"><div className="symbol">/ʃ/</div><div className="examples">show, pushing</div></div>
              <div className="phonetic-card"><div className="symbol">/ʒ/</div><div className="examples">measure, vision</div></div>
              <div className="phonetic-card"><div className="symbol">/h/</div><div className="examples">heal, perhaps</div></div>
              <div className="phonetic-card"><div className="symbol">/m/</div><div className="examples">mail, humour</div></div>
              <div className="phonetic-card"><div className="symbol">/n/</div><div className="examples">nail, funny</div></div>
              <div className="phonetic-card"><div className="symbol">/ŋ/</div><div className="examples">sing, singer</div></div>
              <div className="phonetic-card"><div className="symbol">/l/</div><div className="examples">love, follow</div></div>
              <div className="phonetic-card"><div className="symbol">/r/</div><div className="examples">real, correct</div></div>
              <div className="phonetic-card"><div className="symbol">/j/</div><div className="examples">you, beyond</div></div>
              <div className="phonetic-card"><div className="symbol">/w/</div><div className="examples">we, showing</div></div>
              <div className="phonetic-card"><div className="symbol">/tʃ/</div><div className="examples">choke, watching</div></div>
              <div className="phonetic-card"><div className="symbol">/dʒ/</div><div className="examples">joke, damage</div></div>
            </div>
          </div>
        </Question>
      </div>

      <Footer title="English Grammar and Phonetics Assignment Notes" />
    </>
  );
};

export default EnglishNotes;