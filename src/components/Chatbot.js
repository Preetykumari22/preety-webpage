import React, { useState, useRef, useEffect } from 'react';
import chatbotIcon from '../assets/img/professional.png'; // Import your image

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ text: "👋 What would you like to know about me?", sender: "bot" }]);
    const [userInput, setUserInput] = useState("");

    // Ref for scrolling to the latest message
    const chatBodyRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        if (!userInput.trim()) return; // Prevent sending empty messages
        
        // Add user's message
        const updatedMessages = [...messages, { text: userInput, sender: "user" }];
        setMessages(updatedMessages);
        setUserInput(""); // Clear input field

        // Generate bot response after a delay
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
        }, 1000);
    };

    const getBotResponse = (input) => {
        const responses = {
            "hii": "hello! what would you like to know about Preety",
            "hello": "hello! what would you like to know about Preety",
            "who are you": "🤖 I'm Preety's personal chatbot! Ask me anything about her.",
            "your name": "👩‍💻 I'm Preety's chatbot assistant! 🤗",
            "skills": "💼 Preety is skilled in Front-end, AWS, Python, Cloud technologies, designing, and ML! 🚀",
            "projects": "📂 Preety has worked on front-end, ML, and cloud automation. Check her GitHub for more https://github.com/Preetykumari22! 🌐",
            "achievements": "🏆 Preety has achieved the Google Cloud Skill Badge, Leader of department newsletter, Secretary of IEEEGGV, and completed multiple internships! 🎉",
            "contact": "📧 You can contact Preety via email at preetyprincess2212@gmail.com.",
            "education": "🎓 Preety is currently pursuing a degree in Electronics and Communication Engineering.",
            "hobbies": "🎨 Preety enjoys learning about emerging technologies and developing apps! 📱 Also loves to sketch.",
            "internships": "💼 Preety has interned at Linux World Pvt Ltd, Presear Software Pvt Ltd, IEEE Bombay section.",
            "future plans": "🚀 Preety aims to work in Cloud and DevOps to make a significant impact in tech!",
            "thankyou": "You're welcome! 😊 I'm here to help you learn more about Preety!",
            "great": "Thanks! I'm glad you're finding this helpful! 😄",
            "awesome": "Happy to hear that! Let me know if you have more questions! 😎",
            "good": "I'm glad you liked it! Feel free to ask more! 👍",
            "nyc":"I'm glad you liked it! Feel free to ask more! 👍",
            "nice":"I'm glad you liked it! Feel free to ask more! 👍"
        };

        // Check if any keyword is present in the user's input
        const keywords = Object.keys(responses);
        for (const keyword of keywords) {
            if (input.toLowerCase().includes(keyword)) {
                return responses[keyword];
            }
        }

        return "❓ I didn't catch that. Try asking about Preety's skills, projects, or achievements!";
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    // Scroll to the bottom of chat when messages update
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chatbot">
            <div className="chat-icon" onClick={toggleChat}>
                <p>Ask anything<br /> about Preety!</p>
                <img src={chatbotIcon} alt="Chatbot Icon" />
            </div>
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        🗨️ Preety's Chatbot
                        <span className="close-btn" onClick={toggleChat}>✖</span>
                    </div>
                    <div className="chat-body" ref={chatBodyRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type your message..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="send-btn" onClick={handleSend}>📤 Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
