import React, { useState, useEffect } from "react";
import {
  Send,
  X,
  Home,
  HelpCircle,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  Building2,
  Users,
  LayoutGrid,
  Globe,
} from "lucide-react";
import axios from "axios";
import "./Chatbot.css";

// Translations for static content
const TRANSLATIONS = {
  en: {
    faq: [
      {
        question: "How can I start exporting my products?",
        answer:
          "To start exporting, you first need to apply for an IEC (Import Export Code) from DGFT. Then, identify your product's HS Code and research which countries have demand for it. After that, arrange logistics, fulfill documentation requirements, and ship through an authorized channel.",
        image: "/src/assets/images/export-start.png",
      },
      {
        question: "Can MPIDC help me in export?",
        answer:
          "Yes, MPIDC's Export Cell supports you at every stage of your export journey. We help with documentation, market access, buyer-seller matchmaking, and government incentives. Whether you're a beginner or scaling up, our team connects you to global opportunities.",
        image: "/src/assets/images/mpidc-help.png",
      },
      {
        question: "What are the basic requirements to begin exporting?",
        answer:
          "You need an IEC code, GST registration, a current account, and a clear understanding of your product. Proper packaging, labeling, and product certification might also be required depending on the destination. Our Export Cell guides you in preparing everything as per Indian and international standards.",
        image: "/src/assets/images/export-requirements.jpg",
      },
      {
        question: "What are the benefits of exporting?",
        answer:
          "Exporting increases your revenue by tapping into international markets. You gain foreign exchange earnings, better pricing, and access to global customers. Additionally, exporters can avail government schemes, duty drawbacks, and other incentives.",
        image: "/src/assets/images/export-benefits.jpg",
      },
    ],
    help: [
      {
        title: "How to start a business (Startup Support)",
        content:
          "Starting a business begins with choosing the right structure (proprietorship, partnership, company, etc.) and registering it through government portals like Udyam or MCA. You also need GST registration, a current bank account, and basic licenses. MPIDC can guide you through government schemes, financial support, and incubation opportunities in Madhya Pradesh.",
        icon: Home,
        image: "/src/assets/images/startup.png",
      },
      {
        title: "What is the Export Cell?",
        content:
          "The Export Cell is a dedicated division under MPIDC that supports businesses aiming to go global. It helps exporters with documentation, certifications, market research, trade fairs, and more. The Cell also works closely with embassies, industry bodies, and buyers to open global trade doors for MP businesses.",
        icon: Building2,
        image: "/src/assets/images/export-cell.webp",
      },
      {
        title: "How does export work in India?",
        content:
          "Exporting in India begins with obtaining an IEC (Import Export Code) from DGFT. You must identify the correct HS Code, understand customs regulations, and comply with shipping, invoicing, and packaging norms. Government bodies like MPIDC and DGFT offer handholding and connect you with export promotion councils.",
        icon: LayoutGrid,
        image: "/src/assets/images/export-india.webp",
      },
      {
        title: "How does international matchmaking work?",
        content:
          "MPIDC identifies product demand from different countries and connects local businesses with international buyers and distributors. This is done through trade delegations, virtual B2B meetings, export promotion events, and embassy partnerships. The goal is to help exporters find genuine buyers and build lasting trade relationships.",
        icon: Users,
        image: "/src/assets/images/matchmaking.jpg",
      },
    ],
    welcomeMessages: [
      {
        sender: "bot",
        text: "Hello! I'm Maitreyee, your MPIDC Export Helpline Assistant.",
      },
      {
        sender: "bot",
        text: "I'm here to guide you through your export journey.",
      },
      { sender: "bot", text: "How can I assist you today?" },
    ],
    ui: {
      homeTitle: "Welcome to MPIDC Export Helpline",
      homeSubtitle:
        "Hi, I'm Maitreyee – here to guide you through your export journey – ask me anything!",
      sendMessage: "Send us a message",
      replySoon: "We will reply as soon as we can",
      typeMessage: "Type your query...",
      back: "Back",
      home: "Home",
      messages: "Messages",
      help: "Help",
    },
  },
  hi: {
    faq: [
      {
        question: "मैं अपना सामान विदेश कैसे भेज सकता हूँ?",
        answer:
          "सबसे पहले आपको DGFT से IEC (Import Export Code) बनवाना होगा। फिर अपने उत्पाद का HS कोड पता करके उस उत्पाद की विदेशों में माँग को समझना होगा। डॉक्यूमेंटेशन पूरा करके आप अधिकृत लॉजिस्टिक्स के माध्यम से निर्यात कर सकते हैं।",
        image: "/src/assets/images/export-start.jpg",
      },
      {
        question: "क्या MPIDC एक्सपोर्ट में मेरी मदद कर सकता है?",
        answer:
          "हाँ, MPIDC की एक्सपोर्ट सेल निर्यात से जुड़ी हर जरूरत में आपकी सहायता करती है। हम दस्तावेज़, मार्केट एक्सेस, खरीदारों से मिलवाने और सरकारी योजनाओं में गाइड करते हैं। चाहे आप नए हों या अनुभवी, हम आपको अंतरराष्ट्रीय बाज़ार से जोड़ने में मदद करते हैं।",
        image: "/src/assets/images/mpidc-help.jpg",
      },
      {
        question: "एक्सपोर्ट शुरू करने के लिए क्या-क्या जरूरी है?",
        answer:
          "आपको IEC कोड, GST रजिस्ट्रेशन, चालू बैंक खाता और उत्पाद की अच्छी समझ चाहिए। साथ ही, पैकिंग, लेबलिंग और कुछ देशों के लिए विशेष सर्टिफिकेट भी लग सकते हैं। MPIDC आपकी सहायता करता है कि सभी प्रक्रिया सही तरीके से पूरी हो सके।",
        image: "/src/assets/images/export-requirements.jpg",
      },
      {
        question: "एक्सपोर्ट करने से क्या लाभ होता है?",
        answer:
          "निर्यात करने से आप वैश्विक बाजार तक पहुँचते हैं और आपकी कमाई बढ़ती है। विदेशी मुद्रा आती है, ब्रांड की प्रतिष्ठा बढ़ती है और कीमतें बेहतर मिलती हैं। सरकार से सब्सिडी, टैक्स लाभ और स्कीमों का फायदा भी मिलता है।",
        image: "/src/assets/images/export-benefits.jpg",
      },
    ],
    help: [
      {
        title: "स्टार्टअप कैसे शुरू करें?",
        content:
          "स्टार्टअप शुरू करने के लिए सबसे पहले आपको व्यवसाय की संरचना (जैसे प्रोप्राइटरशिप, प्राइवेट लिमिटेड) तय करनी होती है। उसके बाद रजिस्ट्रेशन, GST, बैंक खाता और जरूरी लाइसेंस लेने होते हैं। MPIDC आपको सरकारी योजनाओं, प्रशिक्षण और वित्तीय सहायता में मार्गदर्शन करता है।",
        icon: Home,
        image: "/src/assets/images/startup.jpg",
      },
      {
        title: "एक्सपोर्ट सेल क्या है?",
        content:
          "एक्सपोर्ट सेल, MPIDC की एक विशेष इकाई है जो निर्यातकों को हर स्तर पर सहयोग देती है। यह दस्तावेज़ीकरण, प्रमाणीकरण, मार्केटिंग और अंतरराष्ट्रीय एक्सपोजर में मदद करती है। इसके जरिए आपको खरीदारों से मिलने, कार्यक्रमों में भाग लेने और वैश्विक बाजार से जुड़ने का मौका मिलता है।",
        icon: Building2,
        image: "/src/assets/images/export-cell.webp",
      },
      {
        title: "भारत में निर्यात कैसे होता है?",
        content:
          "भारत में निर्यात शुरू करने के लिए आपको IEC कोड लेना होता है और फिर कस्टम्स व लॉजिस्टिक्स नियमों का पालन करना होता है। उत्पाद के अनुसार HS कोड पहचानना, इनवॉइस तैयार करना और शिपिंग की प्रक्रिया पूरी करनी होती है। सरकार व एजेंसियाँ जैसे MPIDC आपको स्टेप-बाय-स्टेप गाइड करती हैं।",
        icon: LayoutGrid,
        image: "/src/assets/images/export-india.webp",
      },
      {
        title: "मैचमेकिंग कैसे काम करती है?",
        content:
          "MPIDC विदेशों से खरीदारों की माँग प्राप्त करता है और मध्य प्रदेश के उत्पादकों से उनका मेल कराता है। यह वर्चुअल मीटिंग, व्यापार मेले, और एम्बेसी कार्यक्रमों के माध्यम से होता है। इससे स्थानीय उद्यमियों को वैश्विक खरीदारों से सीधे व्यापार के अवसर मिलते हैं।",
        icon: Users,
        image: "/src/assets/images/matchmaking.jpg",
      },
    ],
    welcomeMessages: [
      {
        sender: "bot",
        text: "नमस्कार! मैं मैत्रयी, एमपीआईडीसी की एक्सपोर्ट हेल्पलाइन चैटबोट हूं।",
      },
      {
        sender: "bot",
        text: "मैं आपके निर्यात यात्रा में आपका मार्गदर्शन करने के लिए यहाँ हूँ।",
      },
      { sender: "bot", text: "आज मैं आपकी कैसे मदद कर सकती हूँ?" },
    ],
    ui: {
      homeTitle: "एमपीआईडीसी एक्सपोर्ट हेल्पलाइन में आपका स्वागत है",
      homeSubtitle:
        "हाय, मैं मैत्रयी हूँ – आपकी निर्यात यात्रा में मार्गदर्शन के लिए यहाँ हूँ – मुझसे कुछ भी पूछें!",
      sendMessage: "हमें एक संदेश भेजें",
      replySoon: "हम जितनी जल्दी हो सके जवाब देंगे",
      typeMessage: "अपना सवाल टाइप करें...",
      back: "वापस",
      home: "होम",
      messages: "संदेश",
      help: "सहायता",
    },
  },
};

// System prompts for different languages
const SYSTEM_PROMPTS = {
  en: (detectedLang) => `
    You are Maitreyee, a professional and friendly chatbot created by MPIDC to assist users with queries related to exports and business support. Your role is to provide short, helpful, and professional answers using the provided FAQ as the primary source. If the answer is not in the FAQ, use trusted government or trade-related sources for accurate information. Always maintain a polite, knowledgeable, and approachable tone, like a government helpdesk officer. 
    
    Respond in "English", "Hindi" or "Hinglish" based on the user's input language.
  `,
  hi: (detectedLang) => `
    आप मैत्रयी हैं, MPIDC द्वारा बनाया गया एक पेशेवर और दोस्ताना चैटबॉट, जो निर्यात और व्यवसाय सहायता से संबंधित सवालों में उपयोगकर्ताओं की मदद करता है। आपका काम प्रदान किए गए FAQ का उपयोग करके संक्षिप्त, सहायक और पेशेवर उत्तर देना है। यदि FAQ में उत्तर नहीं है, तो विश्वसनीय सरकारी या व्यापार-संबंधी स्रोतों से सटीक जानकारी लें। हमेशा विनम्र, ज्ञानवर्धक और सुलभ स्वर बनाए रखें, जैसे एक सरकारी हेल्पडेस्क अधिकारी। 
    
    उपयोगकर्ता के इनपुट भाषा के अनुसार "हिंग्लिश", "अंग्रेजी" या "हिंदी" में उत्तर दें।
  `,
};

const HelpSection = ({ selectedHelp, setSelectedHelp, language }) => {
  const t = TRANSLATIONS[language].help;
  if (selectedHelp) {
    return (
      <div className="help-detail-container">
        <div className="help-detail-header">
          <button onClick={() => setSelectedHelp(null)} className="back-button">
            <ArrowLeft size={16} className="me-2" />
            {TRANSLATIONS[language].ui.back}
          </button>
        </div>
        <div className="help-detail-content">
          <div className="container">
            <h2 className="help-title">{selectedHelp.title}</h2>
            <div className="row">
              <div className="col-md-6">
                <p
                  className="help-text"
                  dangerouslySetInnerHTML={{
                    __html: selectedHelp.content.replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" target="_blank">$1</a>'
                    ),
                  }}
                />
              </div>
              <div className="col-md-6">
                <div className="help-image-container">
                  <img
                    src={selectedHelp.image}
                    alt={selectedHelp.title}
                    className="help-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="help-section-container">
      <div className="help-list">
        {t.map((section, index) => {
          const Icon = section.icon;
          return (
            <button
              key={index}
              onClick={() => setSelectedHelp(section)}
              className="help-card"
            >
              <div className="help-card-content">
                <div className="help-icon-container">
                  <Icon size={18} className="help-icon" />
                </div>
                <span className="help-card-title">{section.title}</span>
              </div>
              <ChevronRight size={16} className="help-card-arrow" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [selectedHelp, setSelectedHelp] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatStartTime, setChatStartTime] = useState(null);
  const [language, setLanguage] = useState("en");
  const [detectedLanguage, setDetectedLanguage] = useState("en");
  const messagesEndRef = React.useRef(null);

  // Language detection function
  const detectLanguage = (text) => {
    if (!text.trim()) return detectedLanguage;

    // Common Hindi words in Roman script
    const hindiWords = [
      "mujhe",
      "muje",
      "kaise",
      "kese",
      "kya",
      "hai",
      "mein",
      "me",
      "kar",
      "ho",
      "aur",
      "ke",
      "ki",
      "ko",
      "se",
      "par",
      "tak",
    ];

    // Check for Devanagari (Hindi script)
    const hasHindiScript = /[\u0900-\u097F]/.test(text);

    if (hasHindiScript) {
      return "hi";
    }

    const words = text.toLowerCase().split(/\s+/);
    let hindiWordCount = 0;
    let englishWordCount = 0;

    words.forEach((word) => {
      if (hindiWords.includes(word)) {
        hindiWordCount++;
      } else if (/^[a-z]+$/i.test(word)) {
        englishWordCount++;
      }
    });

    if (hindiWordCount > 0) {
      return "hi"; // Treat Roman-script Hindi as Hindi
    }

    return "en";
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setMessages([]);
  };

  const renderMessages = () => (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user" ? "message-user" : "message-bot"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="message-avatar">
                <img
                  src="/src/assets/images/avatar.png"
                  alt="Bot Avatar"
                  className="message-avatar-img"
                />
              </div>
            )}
            <div
              className={`message-content ${
                msg.sender === "user"
                  ? "message-content-user"
                  : "message-content-bot"
              }`}
            >
              <p className="message-text">{msg.text}</p>
              <span className="message-time">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message message-bot">
            <div className="message-avatar">
              <img
                src="/src/assets/images/avatar.png"
                alt="Bot Avatar"
                className="message-avatar-img"
              />
            </div>
            <div className="typing-indicator">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <form onSubmit={sendMessage} className="chat-input-form">
          <input
            type="text"
            placeholder={TRANSLATIONS[language].ui.typeMessage}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-send-button">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    const detectedLang = detectLanguage(userMessage);

    setDetectedLanguage(detectedLang);
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    if (!chatStartTime) setChatStartTime(Date.now());

    // Prepare the messages for the API (last 4 + current user message)
    const apiMessages = [
      ...messages.slice(-4).map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: userMessage },
    ];

    try {
      const response = await axios.post(
        import.meta.env.VITE_OPENAI_API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPTS[detectedLang](detectedLang),
            },
            ...apiMessages,
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      let botResponse =
        response.data.choices?.[0]?.message?.content ||
        "Error generating response.";

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        detectedLang === "hi"
          ? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
          : "Sorry, I encountered an error. Please try again.";
      setMessages((prev) => [...prev, { sender: "bot", text: errorMessage }]);
    } finally {
      setIsTyping(false);
    }
  };

  const addMessagesSequentially = async () => {
    const welcomeMessages = TRANSLATIONS[language].welcomeMessages;
    for (let i = 0; i < welcomeMessages.length; i++) {
      setIsTyping(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessages((prev) => [...prev, welcomeMessages[i]]);
      setIsTyping(false);
      if (i < welcomeMessages.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  };

  useEffect(() => {
    if (isOpen && activeSection === "messages" && messages.length === 0) {
      addMessagesSequentially();
    }
  }, [isOpen, activeSection, language]);

  const renderHome = () => (
    <div className="home-container">
      <div className="home-header">
        <div className="home-header-text">
          <h1 className="home-title">{TRANSLATIONS[language].ui.homeTitle}</h1>
          <h2 className="home-subtitle">
            {TRANSLATIONS[language].ui.homeSubtitle}
          </h2>
        </div>
        <div className="home-avatar">
          <img
            src="/src/assets/images/avatar.png"
            alt="Maitreyee Avatar"
            className="home-avatar-img"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="faq-container">
          {TRANSLATIONS[language].faq.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedFAQ(faq)}
              className="faq-card"
            >
              <span className="faq-question">{faq.question}</span>
              <ChevronRight size={16} className="faq-arrow" />
            </button>
          ))}
        </div>
        <button
          onClick={() => setActiveSection("messages")}
          className="contact-button"
        >
          <div className="contact-title">
            {TRANSLATIONS[language].ui.sendMessage}
          </div>
          <div className="contact-subtitle">
            {TRANSLATIONS[language].ui.replySoon}
          </div>
        </button>
      </div>
    </div>
  );

  const renderFAQDetail = () => (
    <div className="faq-detail-container">
      <div className="faq-detail-header">
        <button onClick={() => setSelectedFAQ(null)} className="back-button">
          <ArrowLeft size={16} className="me-2" />
          {TRANSLATIONS[language].ui.back}
        </button>
      </div>
      <div className="faq-detail-content">
        <div className="container">
          <h2 className="faq-title">{selectedFAQ.question}</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="faq-answer">{selectedFAQ.answer}</p>
            </div>
            <div className="col-md-6">
              <div className="faq-image-container">
                <img
                  src={selectedFAQ.image}
                  alt={selectedFAQ.question}
                  className="faq-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getChatbotDimensions = () => {
    if (window.innerWidth <= 640) {
      return {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "9999",
      };
    } else if (window.innerWidth <= 1024) {
      return selectedFAQ || selectedHelp
        ? { width: "600px", height: "500px" }
        : { width: "350px", height: "500px" };
    } else {
      return selectedFAQ || selectedHelp
        ? { width: "800px", height: "600px" }
        : { width: "400px", height: "600px" };
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-toggle-button"
        >
          <img
            src="/src/assets/images/avatar.png"
            alt="Bot Avatar"
            className="message-avatar-img"
          />
        </button>
      ) : (
        <div className="chatbot-window" style={getChatbotDimensions()}>
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-logo">
                <img
                  src="/src/assets/images/mpidc-logo.png"
                  alt="Logo"
                  className="logo-img"
                />
              </div>
              <div className="language-toggle">
                <Globe size={18} stroke="#fff" className="me-2" />
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="language-select"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                </select>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-button">
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="chatbot-body">
            {selectedFAQ ? (
              renderFAQDetail()
            ) : (
              <>
                {activeSection === "home" && renderHome()}
                {activeSection === "messages" && renderMessages()}
                {activeSection === "help" && (
                  <HelpSection
                    selectedHelp={selectedHelp}
                    setSelectedHelp={setSelectedHelp}
                    language={language}
                  />
                )}
              </>
            )}
          </div>
          <div className="chatbot-footer">
            <div className="chatbot-nav">
              {[
                {
                  section: "home",
                  icon: Home,
                  label: TRANSLATIONS[language].ui.home,
                },
                {
                  section: "messages",
                  icon: MessageSquare,
                  label: TRANSLATIONS[language].ui.messages,
                },
                {
                  section: "help",
                  icon: HelpCircle,
                  label: TRANSLATIONS[language].ui.help,
                },
              ].map(({ section, icon: Icon, label }) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setSelectedFAQ(null);
                  }}
                  className={`nav-button ${
                    activeSection === section ? "nav-button-active" : ""
                  }`}
                >
                  <Icon size={18} className="nav-icon" />
                  <span className="nav-label">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
