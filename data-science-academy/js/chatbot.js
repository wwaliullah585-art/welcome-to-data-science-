// Chatbot Logic - Knodee Personal AI (Mock JS-based)
class Chatbot {
  constructor() {
    this.messages = [];
    this.responses = {
      'hello': ['Hi! Welcome to Data Science Academy. How can I help with Data Science or Data Analysis courses?', 'Hello! Ready to learn Data Science? Ask about courses!'],
      'data science': ['Our Data Science course covers Python, ML, SQL, visualization with Pandas, Seaborn, more. Check the Data Science page!', 'Data Science roadmap: Math → Python → Data Cleaning → ML Projects. Start with Home → Data Science.'],
      'data analyst': ['Data Analyst course: Excel, SQL, Power BI, Tableau, statistics. Perfect for business insights! See Data Analyst page.'],
      'courses': ['We offer: Data Science, Data Analyst, Excel/Google Sheets, Power BI/Tableau, SQL, Python/ML, Web Dev. View Courses page!'],
      'about': ['Taught by experienced Software Engineer. Focus on practical projects & interview prep. See About page.'],
      'enroll': ['Click "Start Learning" buttons on Home or course pages. Ready for real projects!'],
      'default': ['I can help with Data Science, Data Analysis courses, roadmaps. Try: "Data Science course" or "What is taught?"'],
    };
    this.chatWindow = document.getElementById('chatWindow');
null; // not used
    this.chatToggle = document.getElementById('chatToggle');
    this.chatInput = document.getElementById('chatInput');
    this.chatSend = document.getElementById('chatSend');
    
    this.init();
  }
  
  init() {
    this.chatToggle.onclick = () => this.toggle();
    this.chatSend.onclick = () => this.sendMessage();
    this.chatInput.onkeypress = (e) => {
      if (e.key === 'Enter') this.sendMessage();
    };
  }
  
  toggle() {
    this.chatWindow.style.display = this.chatWindow.style.display === 'flex' ? 'none' : 'flex';
  }
  
  sendMessage() {
    const input = this.chatInput.value.trim().toLowerCase();
    if (!input) return;
    
    this.addMessage(input, 'user');
    const response = this.getResponse(input);
    setTimeout(() => this.addMessage(response, 'bot'), 500);
    
    this.chatInput.value = '';
  }
  
  getResponse(input) {
    for (let key in this.responses) {
      if (input.includes(key)) {
        return this.responses[key][Math.floor(Math.random() * this.responses[key].length)];
      }
    }
    return this.responses.default[Math.floor(Math.random() * this.responses.default.length)];
  }
  
  addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `mb-3 ${sender === 'user' ? 'text-end' : ''}`;
    div.innerHTML = `
      <div class="d-inline-block p-2 rounded ${sender === 'user' ? 'bg-primary text-white' : 'bg-light'}" style="max-width:80%; border-radius:15px;">
        ${text}
      </div>
    `;
this.chatMessages.appendChild(div);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }
}

// Initialize when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  new Chatbot();
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Loading screen
  window.addEventListener('load', () => {
    document.querySelector('.loading').style.opacity = '0';
    setTimeout(() => document.querySelector('.loading').style.display = 'none', 500);
  });
});
</content>
</xai:function_call name="create_file">
<parameter name="absolute_path">data-science-academy/index.html
