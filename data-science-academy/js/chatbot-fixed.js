// Fixed Knodee Personal AI Chatbot - Complete working version
class KnodeeChatbot {
  constructor() {
    this.chatMessages = document.getElementById('chatMessages');
    this.chatWindow = document.getElementById('chatWindow');
    this.chatToggle = document.getElementById('chatToggle');
    this.chatInput = document.getElementById('chatInput');
    this.chatSend = document.getElementById('chatSend');
    
    this.responses = {
      'hello': ['Hi there! 👋 Welcome to Data Science Academy. Ask me about Data Science, Data Analysis, or courses!', 'Hello! Ready to master Data Science? What would you like to learn today?'],
      'data science': ['Great choice! Our Data Science course covers: Python, Pandas, Machine Learning, SQL, Visualization (Seaborn/Plotly), 10+ projects. Visit Data Science page for full roadmap! 🚀', 'Data Science = Math + Python + ML + Projects. Perfect for ML Engineer roles. Check the roadmap!'],
      'data analyst': ['Data Analyst course: Excel Advanced, SQL queries, Power BI/Tableau dashboards, business insights, statistics. Job-ready in 3 months! 📊 See Data Analyst page.'],
      'courses': ['Available courses: Data Science, Data Analyst, Excel, Power BI, SQL, Python Libraries, Machine Learning, Web Dev. Full list on Courses page! 🎓'],
      'about': ['Taught by Raza - Software Engineer with 5+ years experience. Focus on practical projects, real-world applications, and interview preparation. About page has full bio! 💼'],
      'roadmap': ['Data Science roadmap: 1. Math 2. Python 3. Data Cleaning 4. Viz 5. SQL 6. ML 7. Projects 8. Interviews. Detailed on respective pages!'],
      'python': ['Python section covers Pandas, NumPy, Matplotlib. Essential for data manipulation & visualization. Included in Data Science course! 🐍'],
      'enroll': ['Click "Start Learning" buttons or visit Courses page. Each course has detailed roadmap and projects! Let\'s begin your journey! 🎯'],
      'price': ['Courses are structured for maximum value. Check Courses page for details and enrollment! 💰'],
      'default': ['I can help with courses, roadmaps, or recommendations. Try asking "Data Science course" or "What about Python?" 😊']
    };
    
    this.init();
  }
  
  init() {
    if (!this.chatToggle || !this.chatWindow || !this.chatInput || !this.chatSend || !this.chatMessages) {
      console.log('Chatbot elements not found');
      return;
    }
    
    this.chatToggle.addEventListener('click', () => this.toggleChat());
    this.chatSend.addEventListener('click', () => this.sendMessage());
    this.chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }
  
  toggleChat() {
    const isVisible = this.chatWindow.style.display === 'flex';
    this.chatWindow.style.display = isVisible ? 'none' : 'flex';
  }
  
  sendMessage() {
    const message = this.chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    this.addMessage(message, 'user');
    
    // Get bot response
    const response = this.getResponse(message.toLowerCase());
    this.chatInput.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
      this.addMessage(response, 'bot');
    }, 800);
  }
  
  getResponse(message) {
    for (let key in this.responses) {
      if (message.includes(key)) {
        const responses = this.responses[key];
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return this.responses.default[Math.floor(Math.random() * this.responses.default.length)];
  }
  
  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'mb-3 text-end' : 'mb-3';
    
    const bubbleClass = sender === 'user' ? 'bg-primary text-white' : 'bg-light';
    messageDiv.innerHTML = `
      <div class="d-inline-block p-3 rounded shadow-sm" style="max-width: 75%; border-radius: 18px; font-size: 0.9rem;">
        ${text}
      </div>
    `;
    
    this.chatMessages.appendChild(messageDiv);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    
    // Clear input for new message
    if (sender === 'user') {
      this.chatInput.focus();
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new KnodeeChatbot();
  
  // Close chatbot when clicking close button
  const closeBtn = document.querySelector('.chat-header .fa-times');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const chatWindow = document.getElementById('chatWindow');
      if (chatWindow) chatWindow.style.display = 'none';
    });
  }
});

