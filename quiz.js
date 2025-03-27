const questions = [
    {
      question: "What is AI used for in agriculture in India?",
      options: ["Weed detection", "Cooking", "Mining", "Space travel"],
      answer: "Weed detection"
    },
    {
      question: "Which sector is NOT currently impacted by AI in India?",
      options: ["Healthcare", "Transport", "Astrology", "Education"],
      answer: "Astrology"
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
    document.getElementById("options").innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === q.answer) score++;
        current++;
        if (current < questions.length) loadQuestion();
        else showResult();
      };
      document.getElementById("options").appendChild(btn);
    });
  }
  
  function showResult() {
    document.getElementById("quiz").innerHTML = `<h3>Your Score: ${score}/${questions.length}</h3>`;
  }
  
  window.onload = loadQuestion;
  