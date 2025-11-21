import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SocialBanners from '../components/SocialBanners';
import UserNote from '../components/UserNotes';
import Footer from '../components/Footer';
import Question from '../components/Question';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BeeNotes = () => {
  useScrollAnimation();

  return (
    <>
      <Header
        title="BEEE 2 Marks Questions"
        subtitle="Important Questions and Answers for Exam Preparation"
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

        <Question number="1" text="What is meant by semiconductors?">
          <p>A semiconductor is a material whose electrical properties lie in between those of insulators and good conductors. Examples of such materials include germanium and silicon.</p>
        </Question>

        <Question number="2" text="Describe extrinsic semiconductors.">
          <p>Extrinsic or impurity semiconductors are intrinsic semiconductors to which a suitable impurity or doping agent has been added in extremely small amounts (about 1 part in 10<sup>8</sup>).</p>
        </Question>

        <Question number="3" text="How P-N Junction is formed?">
          <p>A P-N junction is formed by manufacturing a single piece of semiconductor material where one half is doped with a P-type impurity and the other half is doped with an N-type impurity. The plane dividing these two zones is the P-N junction.</p>
        </Question>

        <Question number="4" text="Define barrier voltage.">
          <p>Barrier voltage (or junction potential) is the electric potential difference established across the junction due to charge separation caused by oppositely charged fixed rows of ions on the two sides of the depletion layer.</p>
        </Question>

        <Question number="5" text="Discuss the forward biased in P-N junction diode.">
          <p>A P-N junction is forward-biased when the positive battery terminal is connected to the P-region and the negative terminal is connected to the N-region. This arrangement permits easy flow of current across the junction.</p>
        </Question>

        <Question number="6" text="Discuss the reverse biased in P-N junction diode.">
          <p>A P-N junction is reverse-biased when the negative battery terminal is connected to the P-region and the positive terminal is connected to the N-region. In this condition, majority carriers move away from the junction, and no current flows as the junction offers high resistance.</p>
        </Question>

        <Question number="7" text="List the application of LEDs.">
          <p>Applications include:</p>
          <ul>
            <li>Burglar-alarm systems.</li>
            <li>Solid-state video displays and image sensing circuits.</li>
            <li>Optical fiber communication systems and data links.</li>
            <li>Remote controllers and alphanumeric/numeric displays (calculators).</li>
          </ul>
        </Question>

        <Question number="8" text="What is meant by rectifier?">
          <p>A rectifier is a circuit that employs one or more diodes to convert alternating current (AC) voltage into pulsating direct current (DC) voltage.</p>
        </Question>

        <Question number="9" text="Write the Efficiency of half wave rectifier.">
          <p>The efficiency of rectification (η) is the ratio of the output DC power to the total AC input power. For a half-wave rectifier, the maximum possible efficiency is 40.6%.</p>
        </Question>

        <Question number="10" text="Name the three regions of transistors.">
          <p>The three regions of a transistor are the Emitter, the Base, and the Collector.</p>
        </Question>

        <Question number="11" text="Mention the two Transistor Biasing condition.">
          <p>For proper transistor operation:</p>
          <ul>
            <li>The emitter-base junction is always forward-biased.</li>
            <li>The collector-base junction is always reverse-biased.</li>
          </ul>
        </Question>

        <Question number="12" text="Distinguish the relation between α and β.">
          <p>The relationship between the current amplification factors is defined as:</p>
          <div className="concept-box">
            <p>β = α / (1 - α)</p>
            <p>α = β / (1 + β)</p>
          </div>
        </Question>

        <Question number="13" text="Name the transistor static characteristics.">
          <p>The three important characteristics are:</p>
          <ul>
            <li>Input characteristic.</li>
            <li>Output characteristic.</li>
            <li>Constant-current transfer characteristic.</li>
          </ul>
        </Question>

        <Question number="14" text="Describe the common emitter static characteristics.">
          <ul>
            <li><span className="key-point">Input Characteristic</span>: Relates the input current (I<sub>B</sub>) to the input voltage (V<sub>BE</sub>) for various constant levels of output voltage (V<sub>CE</sub>).</li>
            <li><span className="key-point">Output Characteristic</span>: Relates the output current (I<sub>C</sub>) to the output voltage (V<sub>CE</sub>) for constant levels of input current (I<sub>B</sub>).</li>
          </ul>
        </Question>

        <Question number="15" text="Define emitter, base and collector region in transistor.">
          <ul>
            <li><span className="key-point">Emitter</span>: The heavily doped region that supplies majority charge carriers to the base.</li>
            <li><span className="key-point">Base</span>: The very thin (10<sup>-6</sup>m) and lightly doped middle section.</li>
            <li><span className="key-point">Collector</span>: The region that collects majority charge carriers coming from the emitter through the base.</li>
          </ul>
        </Question>
      </div>

      {/* PART B */}
      <div className="part fade-in" id="section-b">
        <div className="part-header">
          <div className="part-title">SECTION B</div>
          <div className="part-marks">(4 × 5 = 20 Marks)</div>
        </div>

        <Question number="1" text="Explain Intrinsic Semiconductor.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-atom"></i> Definition</div>
            <p>An <span className="key-point">Intrinsic Semiconductor</span> is a semiconductor material in its extremely pure form. It is chemically pure and contains no impurities.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-microchip"></i> Key Characteristics</div>
            <ul>
              <li><span className="key-point">Carrier Concentration</span>: In an intrinsic semiconductor, the number of conduction electrons is equal to the number of holes (n = p).</li>
              <li><span className="key-point">Energy Gap</span>: Common examples include pure Germanium (Ge) and Silicon (Si), which possess forbidden energy gaps of 0.72 eV and 1.1 eV, respectively.</li>
              <li><span className="key-point">Conduction Mechanism</span>: Electric conduction is caused by thermally-generated electron-hole pairs.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-calculator"></i> Carrier Density Formula</div>
            <p>The intrinsic carrier density (n<sub>i</sub>) is given by the equation:</p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', margin: '10px 0' }}>
              n<sub>i</sub> = N exp(-E<sub>g</sub>/2kT)
            </p>
            <p>Where:</p>
            <ul>
              <li>N is a constant</li>
              <li>E<sub>g</sub> is the band gap energy</li>
              <li>k is Boltzmann's constant</li>
              <li>T is temperature in Kelvin</li>
            </ul>
          </div>
        </Question>

        <Question number="2" text="Explain Extrinsic Semiconductors.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-flask"></i> Definition</div>
            <p><span className="key-point">Extrinsic or Impurity Semiconductors</span> are intrinsic semiconductors to which a suitable impurity or "dopant" has been added in extremely small amounts (approximately 1 part in 10<sup>8</sup>).</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-vial"></i> Doping Agents</div>
            <ul>
              <li><span className="key-point">Pentavalent Atoms (Donors)</span>: These have five valence electrons (e.g., Arsenic, Antimony). They donate one electron.</li>
              <li><span className="key-point">Trivalent Atoms (Acceptors)</span>: These have three valence electrons (e.g., Gallium, Indium). They accept one electron.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-layer-group"></i> Classification</div>
            <p>Depending on the type of impurity added, extrinsic semiconductors are subdivided into two classes:</p>
            <ul>
              <li><span className="key-point">N-type Semiconductors</span>: Created by adding pentavalent impurities.</li>
              <li><span className="key-point">P-type Semiconductors</span>: Created by adding trivalent impurities.</li>
            </ul>
          </div>
        </Question>

        <Question number="3" text="Discuss the formation of Majority and Minority Carriers in P-type and N-type.">
          <div className="order-example">
            <div className="order-card">
              <div className="order-name"><i className="fas fa-plus-circle"></i> P-type Material</div>
              <div className="order-example-text">
                <p><strong>Formation:</strong> Obtained when a trivalent impurity (like Boron) is added to a pure semiconductor. This impurity creates holes in the valence band.</p>
                <div className="divider"></div>
                <p><strong>Majority Carriers:</strong> The number of <span className="key-point">holes</span> is much larger than the number of electrons.</p>
                <p><strong>Minority Carriers:</strong> A very small number of <span className="key-point">electrons</span> are thermally generated.</p>
              </div>
            </div>
            <div className="order-card">
              <div className="order-name"><i className="fas fa-minus-circle"></i> N-type Material</div>
              <div className="order-example-text">
                <p><strong>Formation:</strong> Obtained when a pentavalent impurity (like Antimony) is added. The impurity atoms contribute free electrons.</p>
                <div className="divider"></div>
                <p><strong>Majority Carriers:</strong> The number of <span className="key-point">electrons</span> is much larger than the number of holes.</p>
                <p><strong>Minority Carriers:</strong> The small number of <span className="key-point">holes</span> generated thermally.</p>
              </div>
            </div>
          </div>
        </Question>

        <Question number="4" text="Distinguish relation between α and β for transistor configuration.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-book"></i> Definitions</div>
            <ul>
              <li><span className="key-point">α (dc alpha)</span>: Ratio of collector current to emitter current (CB): <br /> α = I<sub>C</sub>/I<sub>E</sub></li>
              <li><span className="key-point">β (dc beta)</span>: Ratio of collector current to base current (CE): <br /> β = I<sub>C</sub>/I<sub>B</sub></li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-project-diagram"></i> Derivation</div>
            <p>The emitter current is the sum of base and collector currents:</p>
            <p style={{ textAlign: 'center' }}>I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub></p>
            <p>Dividing by I<sub>C</sub> and rearranging gives:</p>
            <p style={{ textAlign: 'center' }}>β = I<sub>C</sub>/(I<sub>E</sub> - I<sub>C</sub>)</p>
          </div>
          <div className="highlight-box">
            <div className="concept-title"><i className="fas fa-check-double"></i> Final Relations</div>
            <p><strong>β in terms of α:</strong></p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>β = α/(1 - α)</p>
            <div className="divider"></div>
            <p><strong>α in terms of β:</strong></p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>α = β/(1 + β)</p>
          </div>
        </Question>

        <Question number="5" text="Explain N-type Extrinsic Semiconductor.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-project-diagram"></i> Formation</div>
            <p>Obtained by adding a pentavalent impurity like antimony (Sb) to a pure germanium crystal.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-atom"></i> Bonding</div>
            <p>Four of the five valence electrons of the antimony atom form covalent bonds. The fifth electron is loosely bound.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-bolt"></i> Conduction</div>
            <p>The loosely bound fifth electron can be easily excited into the conduction band.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-users"></i> Carriers</div>
            <p>Electrons are the majority carriers, and holes are the minority carriers.</p>
          </div>
        </Question>

        <Question number="6" text="Explain P-type Extrinsic Semiconductor.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-project-diagram"></i> Formation</div>
            <p>Obtained by adding a trivalent impurity like boron (B) to a pure germanium crystal.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-atom"></i> Bonding</div>
            <p>The three valence electrons of boron form covalent bonds. One bond remains incomplete, giving rise to a hole.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-hand-holding"></i> Acceptor</div>
            <p>Boron is an acceptor impurity because it accepts electrons, creating positive holes.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-users"></i> Carriers</div>
            <p>Holes constitute the majority carriers, and electrons are the minority carriers.</p>
          </div>
        </Question>

        <Question number="7" text="Examine the formation of Depletion Layer in diode.">
          <ul>
            <li><span className="key-point">Diffusion:</span> Holes from P-region diffuse to N-region, and electrons from N-region diffuse to P-region.</li>
            <li><span className="key-point">Recombination:</span> Mobile carriers recombine near the junction.</li>
            <li><span className="key-point">Ion Formation:</span> Impurity atoms become ionized (fixed ions).</li>
            <li><span className="key-point">Depletion Layer:</span> These rows of fixed ions form a region devoid of free charge carriers.</li>
            <li><span className="key-point">Barrier Potential:</span> The fixed ions create an electric potential difference across the junction.</li>
          </ul>
        </Question>

        <Question number="8" text="Apply the transistor biasing condition for PNP and NPN transistor with diagram.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-ruler-combined"></i> Biasing Rule</div>
            <p>Emitter-base junction is always forward-biased, and collector-base junction is always reverse-biased.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-microchip"></i> PNP Biasing</div>
            <p>Positive terminal of V<sub>EE</sub> to P-type emitter, negative terminal of V<sub>CC</sub> to P-type collector.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-microchip"></i> NPN Biasing</div>
            <p>Emitter connected to negative terminal, collector connected to positive terminal.</p>
          </div>
        </Question>

        <Question number="9" text="Explain the various methods of configuration in PNP transistor circuit.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-network-wired"></i> Common-Base (CB)</div>
            <p>Base is common. Input between emitter-base, output between collector-base.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-network-wired"></i> Common-Emitter (CE)</div>
            <p>Emitter is common. Input between base-emitter, output between collector-emitter.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-network-wired"></i> Common-Collector (CC)</div>
            <p>Collector is common. Input between base-collector, output between emitter-collector.</p>
          </div>
        </Question>

        <Question number="10" text="Explain the characteristics of PNP transistor in common base configuration.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Input Characteristic</div>
            <p>Plots I<sub>E</sub> versus V<sub>BE</sub> while keeping V<sub>CB</sub> constant.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Output Characteristic</div>
            <p>Plots I<sub>C</sub> versus V<sub>CB</sub> while keeping I<sub>E</sub> constant.</p>
            <ul>
              <li><span className="key-point">Active Region:</span> I<sub>C</sub> ≈ I<sub>E</sub>.</li>
              <li><span className="key-point">Saturation Region:</span> Very low/negative voltages.</li>
              <li><span className="key-point">Cut-off Region:</span> I<sub>E</sub> = 0, I<sub>C</sub> = 0.</li>
            </ul>
          </div>
        </Question>
      </div>

      {/* PART C */}
      <div className="part fade-in" id="section-c">
        <div className="part-header">
          <div className="part-title">SECTION C</div>
          <div className="part-marks">(2 × 10 = 20 Marks)</div>
        </div>

        <Question number="1" text="Illustrate the characteristics and its working of P-N Junction diode.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-bolt"></i> Working Principles</div>
            <ul>
              <li><span className="key-point">Forward Bias:</span> Barrier potential reduced. Current flows easily above knee voltage.</li>
              <li><span className="key-point">Reverse Bias:</span> Depletion layer widens. Only small leakage current flows.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> V-I Characteristics</div>
            <ul>
              <li><span className="key-point">Forward Region:</span> Current increases rapidly after knee voltage.</li>
              <li><span className="key-point">Reverse Region:</span> Constant small saturation current until Breakdown Voltage.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-calculator"></i> Equation</div>
            <p>Boltzmann diode equation: I = I<sub>0</sub>(e<sup>V/ηV<sub>T</sub></sup> - 1)</p>
          </div>
        </Question>

        <Question number="2" text="Illustrate the characteristics and its working of Zener diode.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-info-circle"></i> Definition</div>
            <p>A reverse-biased, heavily doped P-N junction diode operated in the breakdown region.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Working</div>
            <ul>
              <li><span className="key-point">Zener Breakdown:</span> Low voltage diodes (&lt; 6V). Strong electric field breaks bonds.</li>
              <li><span className="key-point">Avalanche Breakdown:</span> High voltage diodes (&gt; 6V). Minority carriers collide with atoms.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Characteristics</div>
            <ul>
              <li>Forward characteristic is like a normal diode.</li>
              <li>Reverse characteristic shows sharp breakdown at V<sub>Z</sub>. Voltage remains constant.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-lightbulb"></i> Application</div>
            <p>Used primarily as voltage regulators.</p>
          </div>
        </Question>

        <Question number="3" text="Analyse the efficiency of single-phase half wave rectifier with waveform.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-circuit-board"></i> Circuit</div>
            <p>Consists of an AC source, a diode, and a load resistor R<sub>L</sub>.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Working</div>
            <ul>
              <li><span className="key-point">Positive Half-Cycle:</span> Diode conducts.</li>
              <li><span className="key-point">Negative Half-Cycle:</span> Diode off.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-percentage"></i> Efficiency (η)</div>
            <p>Ratio of DC output power to AC input power.</p>
            <p className="highlight">The maximum efficiency is 40.6%</p>
          </div>
        </Question>

        <Question number="4" text="Analyse the efficiency of single-phase full wave rectifier with waveform.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-circuit-board"></i> Circuit</div>
            <p>Uses a center-tapped transformer and two diodes.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Working</div>
            <ul>
              <li><span className="key-point">Positive Half-Cycle:</span> D<sub>1</sub> conducts.</li>
              <li><span className="key-point">Negative Half-Cycle:</span> D<sub>2</sub> conducts.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-percentage"></i> Efficiency (η)</div>
            <p className="highlight">The maximum efficiency is 81.2%</p>
          </div>
        </Question>

        <Question number="5" text="Explain the construction and working of Light Emitting Diode (LED).">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-lightbulb"></i> Principle</div>
            <p>A forward-biased P-N junction that emits visible light due to recombination.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-tools"></i> Construction</div>
            <ul>
              <li>Uses GaAs, GaP, or GaAsP.</li>
              <li>P-type layer deposited on N-type substrate.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-bolt"></i> Working</div>
            <ul>
              <li>When forward-biased, electrons recombine with holes.</li>
              <li>Energy released as light (photons).</li>
            </ul>
          </div>
        </Question>

        <Question number="6" text="Explain the construction and working of Photo voltaic or Solar Cell.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-sun"></i> Principle</div>
            <p>Converts light energy into electrical energy via photovoltaic action.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-tools"></i> Construction</div>
            <ul>
              <li>P-N junction (usually Silicon). Top P-layer is thin.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Working</div>
            <ul>
              <li>Light generates electron-hole pairs.</li>
              <li>Electric field separates carriers, creating potential difference.</li>
            </ul>
          </div>
        </Question>

        <Question number="7" text="Explain the characteristics of PNP transistor in common emitter configuration.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Input Characteristic</div>
            <p>Plots I<sub>B</sub> vs. V<sub>BE</sub>. Behaves like a forward-biased diode.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Output Characteristic</div>
            <p>Plots I<sub>C</sub> vs. V<sub>CE</sub>.</p>
            <ul>
              <li><span className="key-point">Active Region:</span> Used for amplification.</li>
              <li><span className="key-point">Saturation Region:</span> I<sub>C</sub> rises rapidly.</li>
              <li><span className="key-point">Cut-off Region:</span> Only leakage current flows.</li>
            </ul>
          </div>
        </Question>

        <Question number="8" text="Explain the characteristics of PNP transistor in common collector configuration.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-project-diagram"></i> Configuration</div>
            <p>Collector is the common terminal.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Input Characteristic</div>
            <p>Relates I<sub>B</sub> to V<sub>BC</sub>. Depends largely on output voltage.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-star"></i> Features</div>
            <ul>
              <li>High input impedance, Low output impedance.</li>
              <li>Voltage gain less than unity.</li>
            </ul>
          </div>
        </Question>

        <Question number="9" text="Explain the characteristics with working of MOSFET.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-microchip"></i> Types</div>
            <p>Depletion-Enhancement (DE) MOSFET and Enhancement-only (E-only) MOSFET.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Working</div>
            <ul>
              <li><span className="key-point">Depletion Mode:</span> Negative gate voltage reduces conductivity.</li>
              <li><span className="key-point">Enhancement Mode:</span> Positive gate voltage increases conductivity.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Characteristics</div>
            <ul>
              <li><span className="key-point">Drain Characteristics:</span> I<sub>D</sub> vs. V<sub>DS</sub>.</li>
              <li><span className="key-point">Transfer Characteristics:</span> I<sub>D</sub> vs. V<sub>GS</sub>.</li>
            </ul>
          </div>
        </Question>

        <Question number="10" text="Explain the characteristics with working of JFET.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-tools"></i> Construction</div>
            <p>N-type bar with P-type gates on sides.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Operation</div>
            <ul>
              <li><span className="key-point">V<sub>GS</sub> = 0:</span> Current flows freely. Pinch-off occurs at saturation.</li>
              <li><span className="key-point">V<sub>GS</sub> &lt; 0:</span> Depletion layers widen, reducing current.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-chart-line"></i> Characteristics</div>
            <ul>
              <li><span className="key-point">Transfer Characteristic:</span> Follows Shockley's equation: I<sub>D</sub> = I<sub>DSS</sub> (1 - V<sub>GS</sub>/V<sub>P</sub>)<sup>2</sup></li>
            </ul>
          </div>
        </Question>
      </div>

      <Footer title="BEEE 2 Marks Questions – Assignment Notes by Shankar" />
    </>
  );
};

export default BeeNotes;