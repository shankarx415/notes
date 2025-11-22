import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SocialBanners from '../components/SocialBanners';
import UserNote from '../components/UserNote';
import Footer from '../components/Footer';
import Question from '../components/Question';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ItNotes = () => {
  useScrollAnimation();

  return (
    <>
      <Header
        title="Computer Networks & E-commerce Notes"
        subtitle="Comprehensive Answers for Academic Excellence in Networking and Digital Commerce"
      />
      <Navbar />
      <SocialBanners />
      <UserNote />

      {/* PART A */}
      <div className="part fade-in" id="section-a">
        <div className="part-header">
          <div className="part-title">SECTION A</div>
          <div className="part-marks">(5 × 2 = 10 Marks)</div>
        </div>

        <Question number="1" text="Explain the main types of computer networks.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-network-wired"></i> Types of Networks</div>
            <ul>
              <li><span className="key-point">LAN (Local Area Network)</span>: Confined to a small area like a home or office.</li>
              <li><span className="key-point">WAN (Wide Area Network)</span>: Covers a large geographical area, like the internet.</li>
              <li><span className="key-point">MAN (Metropolitan Area Network)</span>: Spans a city or campus.</li>
              <li><span className="key-point">PAN (Personal Area Network)</span>: Used for devices close to a single user (e.g., Bluetooth).</li>
            </ul>
          </div>
        </Question>

        <Question number="2" text="Explain Switch and its types.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-random"></i> Definition</div>
            <p>A <span className="key-point">Switch</span> is a networking device that connects devices within a single network (LAN) and facilitates node-to-node communication by deciding the best way to transmit data.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> Switching Methods</div>
            <ul>
              <li><span className="key-point">Store-and-Forward Switching</span></li>
              <li><span className="key-point">Cut-Through Switching</span></li>
              <li><span className="key-point">Fragment-Free Switching</span></li>
            </ul>
          </div>
        </Question>

        <Question number="3" text="What is a Router?">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-route"></i> Definition</div>
            <p>A <span className="key-point">Router</span> is a physical networking device that connects different networks (e.g., LAN to WAN) and directs data packets between them. It analyzes data and determines the best path (route) for packets to reach their destination.</p>
          </div>
        </Question>

        <Question number="4" text="Explain Twisted Pair Cable and its types.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-plug"></i> Definition</div>
            <p><span className="key-point">Twisted Pair Cable</span> is a widely used wired medium consisting of pairs of insulated copper wires twisted together to reduce electromagnetic interference.</p>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-layer-group"></i> Types</div>
            <ul>
              <li><span className="key-point">Unshielded Twisted Pair (UTP)</span>: Common in LANs/Ethernet.</li>
              <li><span className="key-point">Shielded Twisted Pair (STP)</span>: Has additional shielding for high-interference environments.</li>
            </ul>
          </div>
        </Question>

        <Question number="5" text="List and briefly explain the OSI Layers.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-project-diagram"></i> OSI Model</div>
            <p>The <span className="key-point">OSI (Open Systems Interconnection)</span> model consists of 7 layers:</p>
            <ol>
              <li><span className="key-point">Physical Layer</span></li>
              <li><span className="key-point">Data Link Layer</span></li>
              <li><span className="key-point">Network Layer</span></li>
              <li><span className="key-point">Transport Layer</span></li>
              <li><span className="key-point">Session Layer</span></li>
              <li><span className="key-point">Presentation Layer</span></li>
              <li><span className="key-point">Application Layer</span></li>
            </ol>
          </div>
        </Question>

        <Question number="6" text="Discuss the benefits of E-commerce.">
          <div className="order-example">
            <div className="order-card">
              <div className="order-name"><i className="fas fa-building"></i> For Businesses</div>
              <div className="order-example-text">
                <ul>
                  <li><span className="key-point">Global Reach</span>: Selling to a global audience 24/7.</li>
                  <li><span className="key-point">Lower Costs</span>: Saving on rent/utilities compared to physical stores.</li>
                </ul>
              </div>
            </div>
            <div className="order-card">
              <div className="order-name"><i className="fas fa-user"></i> For Consumers</div>
              <div className="order-example-text">
                <ul>
                  <li><span className="key-point">Anytime, Anywhere shopping</span>: 24/7 access.</li>
                  <li><span className="key-point">Home Delivery</span>: Products delivered to your doorstep.</li>
                </ul>
              </div>
            </div>
          </div>
        </Question>

        <Question number="7" text="Explain B2C (Business-to-Consumer) e-commerce model.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-store"></i> Definition</div>
            <p><span className="key-point">B2C (Business-to-Consumer)</span> is the most common e-commerce model where businesses sell products or services directly to individual consumers. Examples include websites like Amazon and Walmart.</p>
          </div>
        </Question>

        <Question number="8" text="What is M-Commerce?">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-mobile-alt"></i> Definition</div>
            <p><span className="key-point">Mobile Commerce (M-Commerce)</span> refers to buying and selling goods and services through wireless handheld devices like smartphones and tablets. It includes mobile shopping, banking, and payments.</p>
          </div>
        </Question>

        <Question number="9" text="Discuss the advantages and disadvantages of E-commerce.">
          <div className="order-example">
            <div className="order-card">
              <div className="order-name"><i className="fas fa-check-circle"></i> Advantages</div>
              <div className="order-example-text">
                <ul>
                  <li><span className="key-point">Convenience</span>: Shopping from home.</li>
                  <li><span className="key-point">Global Reach</span>: For businesses to access worldwide markets.</li>
                  <li><span className="key-point">Broader Product Selection</span>: More options than physical stores.</li>
                </ul>
              </div>
            </div>
            <div className="order-card">
              <div className="order-name"><i className="fas fa-exclamation-triangle"></i> Disadvantages</div>
              <div className="order-example-text">
                <ul>
                  <li><span className="key-point">Lack of Hands-on Experience</span>: Cannot try products before buying.</li>
                  <li><span className="key-point">Security Risks</span>: Potential for data theft and fraud.</li>
                  <li><span className="key-point">Technology Dependency</span>: Relies entirely on functioning technology.</li>
                </ul>
              </div>
            </div>
          </div>
        </Question>
      </div>

      {/* PART B */}
      <div className="part fade-in" id="section-b">
        <div className="part-header">
          <div className="part-title">SECTION B</div>
          <div className="part-marks">(4 × 5 = 20 Marks)</div>
        </div>

        <Question number="1" text="Explain Routing.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-route"></i> Definition</div>
            <span className="key-point">Routing</span> in computer networks is the process of selecting paths across a network to send data from one device to another. Specialized devices called <span className="key-point">Routers</span> perform this function.
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-list"></i> Key Concepts</div>
            <ul>
              <li><span className="key-point">Data Packet</span>: A small unit of data containing destination information.</li>
              <li><span className="key-point">Routing Table</span>: A database within a router that holds information about possible paths.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-network-wired"></i> Types of Routing</div>
            <ul>
              <li><span className="key-point">Static Routing</span>: Routes are manually set by an administrator.</li>
              <li><span className="key-point">Dynamic Routing</span>: Routes are automatically determined by protocols.</li>
            </ul>
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-cogs"></i> How it Works</div>
            When a packet arrives, the router checks the destination IP, looks up the best path in its routing table, and forwards the packet to the next router.
          </div>
        </Question>

        <Question number="2" text="Write a note on Wireless LAN (WLAN).">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-wifi"></i> Definition</div>
            A <span className="key-point">Wireless Local Area Network (WLAN)</span> is a network that connects devices within a limited area using wireless communication.
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-broadcast-tower"></i> Key Features</div>
            <ul>
              <li><span className="key-point">Wireless Communication</span>: Uses radio waves (Wi-Fi).</li>
              <li><span className="key-point">Access Points (APs)</span>: Hardware devices that transmit and receive signals.</li>
              <li><span className="key-point">Security</span>: Must use protocols like WPA2 or WPA3.</li>
            </ul>
          </div>
          <div className="order-example">
            <div className="order-card">
              <div className="order-name"><i className="fas fa-check-circle"></i> Advantages</div>
              <div className="order-example-text">
                <ul>
                  <li><span className="key-point">Mobility</span>: Users can move freely.</li>
                  <li><span className="key-point">Scalability</span>: Easy to add new devices.</li>
                </ul>
              </div>
            </div>
            <div className="order-card">
              <div className="order-name"><i className="fas fa-exclamation-triangle"></i> Disadvantages</div>
              <div className="order-example-text">
                <ul>
                  <li><span className="key-point">Interference</span>: Signals can be disrupted.</li>
                  <li><span className="key-point">Security Risks</span>: More susceptible to interception.</li>
                </ul>
              </div>
            </div>
          </div>
        </Question>

        <Question number="3" text="Define E-Commerce and list its types.">
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-shopping-cart"></i> Definition</div>
            <span className="key-point">E-commerce (Electronic Commerce)</span> is the process of trading online. It encompasses all online activity involved in buying and selling products and services.
          </div>
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-layer-group"></i> Types of E-Commerce Models</div>
            <ul>
              <li><span className="key-point">Business-to-Consumer (B2C)</span>: Businesses sell to consumers (e.g., Amazon).</li>
              <li><span className="key-point">Business-to-Business (B2B)</span>: Businesses sell to other businesses (e.g., Alibaba).</li>
              <li><span className="key-point">Consumer-to-Consumer (C2C)</span>: Consumers sell to consumers (e.g., eBay).</li>
              <li><span className="key-point">Consumer-to-Business (C2B)</span>: Individuals sell to businesses (e.g., Upwork).</li>
              <li><span className="key-point">Business-to-Government (B2G)</span>: Businesses sell to government agencies.</li>
              <li><span className="key-point">Mobile Commerce (M-Commerce)</span>: Transactions via mobile devices.</li>
            </ul>
          </div>
        </Question>

        <Question number="4" text="Discuss the Ethical and Security issues in E-commerce.">
          <div className="highlight-box">
            While E-commerce offers convenience, it presents several ethical, security, and disadvantageous issues:
          </div>
          <ul>
            <li><span className="key-point">Scams and Misinformation</span>: Difficult to verify if a product is real or fake.</li>
            <li><span className="key-point">Privacy and Data Collection</span>: Collecting sensitive customer information introduces privacy risks.</li>
            <li><span className="key-point">Security Risks</span>: Cyber threats, theft of financial details.</li>
            <li><span className="key-point">Sustainability</span>: Excess packaging and shipping increase carbon footprints.</li>
            <li><span className="key-point">Impersonal Experience</span>: Lack of human interaction.</li>
          </ul>
        </Question>
      </div>

      {/* PART C */}
      <div className="part fade-in" id="section-c">
        <div className="part-header">
          <div className="part-title">SECTION C</div>
          <div className="part-marks">(2 × 10 = 20 Marks)</div>
        </div>

        <Question number="1" text="Explain in detail Network Topologies and the TCP/IP Model.">
          {/* Part I: Network Topologies */}
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-project-diagram"></i> Part I: Network Topologies (5 Marks)</div>
            <p>Network Topology refers to the physical or logical arrangement of devices (nodes) and how they are interconnected in a network.</p>

            <div className="order-example" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-minus"></i> 1. Bus Topology</div>
                <div className="order-example-text">
                  <strong>Structure:</strong> All devices connect to a single central "backbone cable".<br />
                  <strong>Data Flow:</strong> Messages are broadcast to all stations.<br />
                  <strong>Key Feature:</strong> Uses CSMA/CD.<br />
                  <strong>Advantage:</strong> Simple, less cabling.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-circle"></i> 2. Ring Topology</div>
                <div className="order-example-text">
                  <strong>Structure:</strong> Devices are connected in a closed loop.<br />
                  <strong>Data Flow:</strong> Unidirectional.<br />
                  <strong>Access Method:</strong> Token Passing.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-star"></i> 3. Star Topology</div>
                <div className="order-example-text">
                  <strong>Structure:</strong> Every node connects to a central device (Hub/Switch).<br />
                  <strong>Operation:</strong> Central device manages network.<br />
                  <strong>Popularity:</strong> Most common.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-th"></i> 4. Mesh Topology</div>
                <div className="order-example-text">
                  <strong>Structure:</strong> Multiple redundant interconnections.<br />
                  <strong>Types:</strong> Full Mesh and Partial Mesh.<br />
                  <strong>Reliability:</strong> Highly fault-tolerant.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-sitemap"></i> 5. Tree Topology</div>
                <div className="order-example-text">
                  <strong>Structure:</strong> Hierarchical layout combining Bus and Star.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-random"></i> 6. Hybrid Topology</div>
                <div className="order-example-text">
                  <strong>Structure:</strong> Combination of two or more different topologies.
                </div>
              </div>
            </div>
          </div>

          {/* Part II: TCP/IP Model */}
          <div className="concept-box" style={{ marginTop: '25px' }}>
            <div className="concept-title"><i className="fas fa-server"></i> Part II: TCP/IP Model (5 Marks)</div>
            <p>The TCP/IP (Transmission Control Protocol/Internet Protocol) is the standard framework for internet communication, consisting of four layers.</p>
            <div className="order-example">
              <div className="order-card">
                <div className="order-name"><i className="fas fa-layer-group"></i> 1. Application Layer</div>
                <div className="order-example-text">
                  <p><strong>Function:</strong> Interface for applications.</p>
                  <p><strong>Key Protocols:</strong> HTTP/HTTPS, FTP, SMTP, DNS.</p>
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-exchange-alt"></i> 2. Transport Layer</div>
                <div className="order-example-text">
                  <p><strong>Function:</strong> End-to-end communication, reliability.</p>
                  <p><strong>Key Protocols:</strong> TCP, UDP.</p>
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-route"></i> 3. Internet Layer</div>
                <div className="order-example-text">
                  <p><strong>Function:</strong> Logical addressing and routing.</p>
                  <p><strong>Key Protocols:</strong> IP, ICMP, ARP.</p>
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-wifi"></i> 4. Network Access Layer</div>
                <div className="order-example-text">
                  <p><strong>Function:</strong> Physical transmission.</p>
                  <p><strong>Key Protocols:</strong> Ethernet, Wi-Fi.</p>
                </div>
              </div>
            </div>
          </div>
        </Question>

        <Question number="2" text="Explain in detail the types of E-commerce models (B2C and B2B).">
          {/* B2C E-Commerce */}
          <div className="concept-box">
            <div className="concept-title"><i className="fas fa-user-tie"></i> 1. Business-to-Consumer (B2C) E-Commerce</div>
            <p>B2C involves businesses selling products or services directly to individual consumers (e.g., Amazon).</p>
            <div className="concept-box" style={{ marginTop: '15px', background: '#f0f9ff', borderColor: '#a0d2ff' }}>
              <div className="concept-title"><i className="fas fa-cogs"></i> Key Elements of B2C</div>
              <ul>
                <li><span className="key-point">Online Storefronts</span>: Digital websites.</li>
                <li><span className="key-point">Customer Experience</span>: Responsive design, intuitive navigation.</li>
                <li><span className="key-point">Logistics</span>: Efficient shipping and fulfillment.</li>
              </ul>
            </div>
            <div className="concept-box" style={{ marginTop: '15px', background: '#f0f9ff', borderColor: '#a0d2ff' }}>
              <div className="concept-title"><i className="fas fa-layer-group"></i> Types of B2C Models</div>
              <ul>
                <li><span className="key-point">Direct-to-Consumer (D2C)</span>: Manufacturers sell directly.</li>
                <li><span className="key-point">Online Retailing</span>: Reselling goods.</li>
                <li><span className="key-point">Marketplace Model</span>: Platform connecting buyers/sellers (eBay).</li>
                <li><span className="key-point">Subscription-Based Model</span>: Recurring fee (Netflix).</li>
                <li><span className="key-point">Flash Sales Model</span>: Limited time discounts.</li>
              </ul>
            </div>
          </div>

          {/* B2B E-Commerce */}
          <div className="concept-box" style={{ marginTop: '25px' }}>
            <div className="concept-title"><i className="fas fa-building"></i> 2. Business-to-Business (B2B) E-Commerce</div>
            <p>B2B involves transactions between two businesses.</p>
            <h4 style={{ marginTop: '20px', color: 'var(--primary)' }}>Primary B2B Models:</h4>
            <div className="order-example" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-industry"></i> Supplier-Oriented Model</div>
                <div className="order-example-text">
                  <strong>Concept:</strong> Supplier sets up marketplace.<br />
                  <strong>Use Case:</strong> Selling raw materials.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-shopping-basket"></i> Buyer-Oriented Model</div>
                <div className="order-example-text">
                  <strong>Concept:</strong> Buyers invite suppliers to bid.<br />
                  <strong>Use Case:</strong> Automotive industry.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-hands-helping"></i> Intermediary-Oriented Model</div>
                <div className="order-example-text">
                  <strong>Concept:</strong> Neutral third-party platform.<br />
                  <strong>Use Case:</strong> Alibaba.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-truck-loading"></i> Direct Sales Model</div>
                <div className="order-example-text">
                  <strong>Concept:</strong> Manufacturers sell directly to businesses.<br />
                  <strong>Example:</strong> Dell.
                </div>
              </div>
              <div className="order-card">
                <div className="order-name"><i className="fas fa-dolly-flatbed"></i> Distribution-Oriented Model</div>
                <div className="order-example-text">
                  <strong>Concept:</strong> Distributors act as middlemen.<br />
                  <strong>Example:</strong> Office supply companies.
                </div>
              </div>
            </div>
          </div>
        </Question>
      </div>

      <Footer title="Computer Networks & E-commerce – Assignment Notes by Shankar" />
    </>
  );
};

export default ItNotes;