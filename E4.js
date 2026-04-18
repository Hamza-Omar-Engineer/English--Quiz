// --- Global State ---
let studentName = "";
let studentGender = "male";
let currentQuestionIndex = 0;
let score = 0;
let timer;
let secondsElapsed = 0;

// Placeholder Data (We will replace this with JSON later)
    const questions = [
    {
        question: "1. Which term refers to the process of adjusting the space between characters?",
        options: ["Text flow", "Kerning", "Font", "Platesetter"],
        answer: "Kerning",
        explanation: "Based on page 106 (Exercise , kerning is defined as \"the process of adjusting the space between characters.\""
    },
    {
        question: "2. A machine that creates the printing plates is called a:",
        options: ["Scanner", "Imagesetter", "Platesetter", "Laser printer"],
        answer: "Platesetter",
        explanation: "Page 105 states that the machine that generates plates for a printing press is called a \"platesetter.\""
    },
    {
        question: "3. The ability to put text around graphic objects in a variety of ways is:",
        options: ["Kerning", "Text flow", "Formatting", "Desktop publishing"],
        answer: "Text flow",
        explanation: "Page 105 defines \"text flow\" as the feature that allows you to wrap text around images or graphic objects."
    },
    {
        question: "4. What are \"raster graphics\" also commonly called?",
        options: ["Vectors", "Fractals", "Bitmaps", "Wireframes"],
        answer: "Bitmaps",
        explanation: "Page 101 explicitly states that \"Raster graphics, or bitmaps, are stored as a collection of pixels.\""
    },
    {
        question: "5. What does the acronym \"MIDI\" stand for?",
        options: ["Multimedia Interface Digital Instrument", "Musical Instrument Digital Interface", "Musical Instruction Data Information", "Multimedia Interactive Digital Interface"],
        answer: "Musical Instrument Digital Interface",
        explanation: "Page 111 identifies MIDI as the \"Musical Instrument Digital Interface.\""
    },
    {
        question: "6. Which software is used to develop, model, and test car designs?",
        options: ["DTP", "GIS", "CAD", "DAW"],
        answer: "CAD",
        explanation: "Page 101 mentions that \"Mechanical engineers use CAD (Computer Aided Design) software to develop, model and test car designs.\""
    },
    {
        question: "7. A live event broadcast over the Internet is a:",
        options: ["Podcast", "Webcast", "Stream", "Hypertext"],
        answer: "Webcast",
        explanation: "Page 111 defines a \"webcast\" as the broadcast of an event over the Web."
    },
    {
        question: "8. The \"sharpness\" of an image, which depends on pixel density, is called:",
        options: ["Dimension", "Contrast", "Resolution", "Saturation"],
        answer: "Resolution",
        explanation: "Page 101 defines \"resolution\" as the sharpness of an image depending on the density of pixels."
    },
    {
        question: "9. Which is the correct order for a software description?",
        options: ["A desktop publishing user-friendly software", "A user-friendly desktop publishing software", "A software user-friendly desktop publishing", "A user-friendly software desktop publishing"],
        answer: "A user-friendly desktop publishing software",
        explanation: "According to page 106, Opinion (user-friendly) comes before Purpose (desktop publishing)."
    },
    {
        question: "10. Choose the correct arrangement:",
        options: ["A German graphic design industry", "A graphic design German industry", "A German industry graphic design", "An industry German graphic design"],
        answer: "A German graphic design industry",
        explanation: "Following the table on page 106, Origin/Place (German) must precede the Headword/Purpose (graphic design industry)."
    },
    {
        question: "11. Which sentence follows the correct adjective order?",
        options: ["A portable new Sony music player", "A Sony new portable music player", "A new Sony portable music player", "A portable Sony new music player"],
        answer: "A portable new Sony music player",
        explanation: "According to the student's handwritten notes and the table on page 106, the order is: Description (portable) + Age (new) + Origin (Sony)."
        },
    {
        question: "12. \"Brand names\" (like Microsoft or Sony) are categorized as adjectives of:",
        options: [" Opinion", " Material", " Origin/Place", " Purpose"],
        answer: " Origin/Place",
        explanation: "The \"Help box\" on page 106 states: \"Brand names (Microsoft, Sony, etc.) are considered adjectives of origin/place.\""
    },
    {
        question: "13. In \"PCs generate graphics by performing calculations,\" the word \"performing\" is:",
        options: [" A present participle (part of a continuous tense)", " A gerund (acting as a noun after a preposition)", " An adjective", " A main verb"],
        answer: " A gerund (acting as a noun after a preposition)",
        explanation: "Page 102 explains that we use gerunds after prepositions (by)."
    },
    {
        question: "14. In the phrase \"an amazing fractal,\" the word \"amazing\" is:",
        options: [" A gerund", " An adjective", " A main verb", " A preposition"],
        answer: " An adjective",
        explanation: "The \"Help box\" on page 102 lists \"amazing\" as an example of an -ing form used as an adjective."
    },
    {
        question: "15. In \"Designing is a present participle,\" the word \"Designing\" is:",
        options: [" An adjective", " A gerund acting as a subject", " A verb in the past tense", " A preposition"],
        answer: " A gerund acting as a subject",
        explanation: "Page 102 (Help Box) notes that -ing forms can act as the subject of a sentence, which is a gerund."
    },
    {
        question: "16. If you _ your digital video camera, we can make a movie.",
        options: [" brought", " bring", " will bring", " brings"],
        answer: " bring",
        explanation: "This is a First Conditional (real/possible situation). Page 112 states the \"if\" clause uses the Present Simple."
    },
    {
        question: "17. If I could afford it, I _ a new game console.",
        options: [" will buy", " would buy", " buy", " bought"],
        answer: " would buy",
        explanation: "This is a Second Conditional (hypothetical). Page 112 states the main clause uses \"would + verb.\""
    },
    {
        question: "18. You won't be able to play those files if you _ the correct plug-in.",
        options: [" don't have", " didn't have", " won't have", " doesn't have"],
        answer: " don't have",
        explanation: "Page 112 (Exercise  requires the Present Simple negative for the \"if\" clause in a real/possible situation."
    },
    {
        question: "19. \"Unless\" in conditional sentences means:",
        options: [" As long as", " If not", " Because", " Only if"],
        answer: " If not",
        explanation: "The \"Help box\" on page 112 explicitly states: \"Unless means if not.\""
    },
    {
        question: "20. What is a \"service bureau\"?",
        options: [" A shop that sells cameras", " A company that specializes in printing other people's files", " A website for downloading music", " A government department"],
        answer: " A company that specializes in printing other people's files",
        explanation: "Page 105 defines it as a company specializing in printing services for others."
    },
    {
        question: "21. Which program is needed to view a PDF document?",
        options: [" Adobe InDesign", " Adobe Acrobat Reader", " QuarkXPress", " Microsoft PowerPoint"],
        answer: " Adobe Acrobat Reader",
        explanation: "Page 105 states: \"To open a PDF file, only the Adobe Acrobat Reader (a free downloa is required.\""
    },
    {
        question: "22. \"Rendering\" in computer graphics includes:",
        options: [" Typing text", " Lighting, shading, and shadows", " Connecting to the Internet", " Buying a new monitor"],
        answer: " Lighting, shading, and shadows",
        explanation: "Page 101 mentions that rendering includes \"lighting and shading as well as effects that simulate shadows and reflections.\""
    },
    {
        question: "23. What are \"Fractals\"?",
        options: [" Mathematical errors", " Geometrical patterns repeated at small scales", " Names of printing plates", " Hardware components"],
        answer: " Geometrical patterns repeated at small scales",
        explanation: "Page 101 defines fractals as \"geometrical patterns that are repeated at small scales to generate irregular shapes.\""
    },
    {
        question: "24. A \"CD ripper\" is a program that:",
        options: [" Breaks a CD into pieces", " Extracts music tracks and saves them as MP3s", " Plays videos on the web", " Creates 3D models"],
        answer: " Extracts music tracks and saves them as MP3s",
        explanation: "Page 111 defines a CD ripper as a program that extracts music tracks from CDs."
    },
    {
        question: "25. The Arabic translation for \"Text Flow\" as written in the notes is:",
        options: [" معالجة الكلمات", " انسياب النص", " تباعد الحروف", " الخط"],
        answer: " انسياب النص",
        explanation: "The handwritten notes on page 105/106 translate \"Text flow\" to \"انسياب النص\"."
    },
    {
        question: "26. The term \"صفائح الطباعة\" refers to:",
        options: [" Printing plates", " Platesetter", " Desktop publishing", " Word processing"],
        answer: " Printing plates",
        explanation: "Page 106 (Exercise D, item 4) shows \"printing plates\" translated/glossed as \"صفائح الطباعة\"."
    },
    {
        question: "27. The Arabic note for \"User-friendly\" (page 106) is:",
        options: [" قديم", " سهل الاستخدام", " حديث", " معقد"],
        answer: " سهل الاستخدام",
        explanation: "The handwritten notes on page 106 translate \"user-friendly\" to \"سهل الاستخدام\"."
    },
    {
        question: "28. \"Hardware company\" was translated in the notes as:",
        options: [" شركة برمجيات", " شركة معدات (هاردوير)", " شركة اتصالات", " شركة تصميم"],
        answer: " شركة معدات (هاردوير)",
        explanation: "The handwritten note on page 106 translates \"hardware\" to \"معدات\"."
    },
    {
        question: "29. The term \"Output\" in the context of DTP (page 105) translates to:",
        options: [" مدخلات", " مخرجات", " معالجة", " تخزين"],
        answer: " مخرجات",
        explanation: "In technical computing context (Unit 21), \"output\" refers to \"مخرجات\"."
    },
    {
        question: "30. The word \"Portable\" in \"Portable Document Format\" (PDF) means:",
        options: [" ثابت", " محمول / سهل النقل", " غالي الثمن", " معقد"],
        answer: " محمول / سهل النقل",
        explanation: "Page 105 and handwritten notes indicate \"portable\" refers to \"محمول\" or \"خفيف\" (easy to move/transfer between systems)."
    }
];
   


// تصدير المصفوفة للاستخدام في ملف العرض



// --- Eye Tracking Logic ---
document.addEventListener("mousemove", (e) => {
    const eyes = document.querySelectorAll(".pupil");
    eyes.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const distance = Math.min(rect.width / 4, Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 10);
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        pupil.style.transform =` translate(${x}px, ${y}px)`;
    });
});

// --- Theme & Setup ---
const genderBtns = document.querySelectorAll(".gender-btn");
genderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        genderBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        studentGender = btn.dataset.gender;
        document.body.className =` ${studentGender}-theme`;
    });
});

// --- Start Quiz ---
document.getElementById("start-btn").addEventListener("click", () => {
    const nameInput = document.getElementById("student-name").value.trim();
    if (!nameInput) {
        alert("Please enter your name first!");
        return;
    }
    studentName = nameInput;
    questions.forEach(q => shuffle(q.options)); // لخلط الخيارات داخل كل سؤال
    switchSection("landing-page", "quiz-page");
    startTimer();
    showQuestion();
});
    // (أكمل باقي الدوال switchSection, showQuestion, checkAnswer من الكود السابق هنا)

function switchSection(oldId, newId) {
    const oldElem = document.getElementById(oldId);
    const newElem = document.getElementById(newId);
    
    oldElem.classList.remove("active");
    setTimeout(() => {
        oldElem.style.display = "none";
        newElem.style.display = "block";
        setTimeout(() => newElem.classList.add("active"), 10);
    }, 400);
}


// --- Quiz Logic ---
function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = q.question;
    document.getElementById("question-number").innerText =` Question ${currentQuestionIndex + 1}/${questions.length}`;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    document.getElementById("explanation-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";

    q.options.forEach(opt => {
        const btn = document.createElement("div");
        btn.className = "option";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, element) {
    const q = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");
    
    // Disable all options
    options.forEach(opt => opt.style.pointerEvents = "none");

    if (selected === q.answer) {
        element.classList.add("correct");
        score++;
    } else {
        element.classList.add("wrong");
        // Show correct answer
        options.forEach(opt => {
            if (opt.innerText === q.answer) opt.classList.add("correct");
        });
    }
    document.getElementById("explanation-text").innerText = q.explanation;
    document.getElementById("explanation-container").style.display = "block";
    document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// --- Results & Timer ---
function startTimer() {
    timer = setInterval(() => {
        secondsElapsed++;
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        document.getElementById("timer").innerText =`Time: ${mins}:${secs}`;
    }, 1000);
}

function showResults() {
    clearInterval(timer);
    switchSection("quiz-page", "result-page");
    
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById("display-name").innerText = studentName;
    document.getElementById("final-score").innerText = `${percentage}%`;
    
    let msg = "";
    if (percentage >= 75) {
        msg =` Congratulations, ${studentName}! You achieved an Excellent level.;`
    } else if (percentage >= 50) {
        msg =` Good job, ${studentName}! You achieved a Good level.;`
    } else {
        msg =` Keep practicing, ${studentName}! You need to study harder.`;
    }
    
    // Arabic-friendly grammar check for English (Gender context if neede
    document.getElementById("result-message").innerText = msg;

    function sendDataToSheet(name, score, gender, time) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwxsvB7BKEcL9ec6TH7k-wZTk1g48srAVyGposfUWuTSVwkFIZTA5GS9GmCA6xo_GBg/exec"
    
    const data = {
        name: name,
        score: score + "%",
        gender: gender,
        time: time,
    };

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // لضمان الإرسال السريع دون مشاكل التوافق
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(() => console.log("Data sent successfully!"))
    .catch(error => console.error('Error!', error.message));
}

// استدعِ الدالة داخل showResults
sendDataToSheet(studentName, percentage, studentGender, document.getElementById("timer").innerText);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}