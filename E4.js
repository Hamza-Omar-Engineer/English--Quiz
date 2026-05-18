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
    question: "Who developed the Java programming language based on the provided texts?",
    options: [
      "Microsoft",
      "IBM",
      "Sun Microsystems",
      "AT&T"
    ],
    answer: "Sun Microsystems",
    explanation: "بناءً على نص الصفحة الثالثة (Image 3) والصفحة الرابعة (Image 4)، فإن لغة الجافا تم تطويرها بواسطة شركة Sun Microsystems في عام 1995."
  },
  {
   question: "What extension does a Java source code file have before it is compiled?",
   options: [
      ".class",
      ".java",
      ".txt",
      ".swf"
    ],
    answer: ".java",
    explanation: "وفقاً للفقرة الثانية في الصفحة الثالثة (Image 3)، فإن السورس كود الخاص بالجافا يحمل اللاحقة (.java extension)."
  },
  {
   question: "What is the intermediate format called that Java source code is compiled into?",
   options: [
      "Machine code",
      "Bytecode",
      "Applet",
      "Object code"
    ],
    answer: "Bytecode",
    explanation: "تذكر الصفحة الثالثة (Image 3) أن الكود المصدري يُترجم (compiled) إلى صيغة وسيطة تسمى بت كود (bytecode) وتحمل اللاحقة .class."
  },
  {
   question: "What component executes the compiled Java bytecode on a target operating system?",
   options: [
      "Java Compiler",
      "Java Interpreter (Java Virtual Machine)",
      "Assembler",
      "Web Editor"
    ],
    answer: "Java Interpreter (Java Virtual Machine)",
    explanation: "الـ Bytecode يتم تنفيذه ومحاكاته بواسطة مفسر الجافا المعروف باسم آلة جافا الافتراضية (Java Virtual Machines - JVM) لتشغيله على الأنظمة المختلفة."
  },
  {
   question: "What does the term 'multi-threaded' mean in the context of the Java language?",
   options: [
      "The program can run only on one operating system.",
      "The language can only be used for web pages.",
      "A Java program can have multiple parts executing independently and continuously.",
      "The language uses pre-defined HTML tags."
    ],
    answer: "A Java program can have multiple parts executing independently and continuously.",
    explanation: "كما ورد في الصفحة الثالثة، 'multi-threaded, meaning a Java program can have multiple threads (parts) - that is, many different things processing independently and continuously'."
  },
  {
   question: "Which Java platform is specifically designed and widely used for mobile devices?",
   options: [
      "Java SE",
      "Java EE",
      "Java ME (Java Micro Edition)",
      "Java Script"
    ],
    answer: "Java ME (Java Micro Edition)",
    explanation: "تذكر الصفحة الأولى والثالثة أن منصة Java Micro Edition (Java ME) تُستخدم على نطاق واسع في الأجهزة المحمولة والهواتف لتشغيل الألعاب والتطبيقات."
  },
  {
   question: "Microsoft's C# language is described as a alternative to Java. How is it pronounced?",
   options: [
      "C hash",
      "C sharp",
      "C number",
      "C plus"
    ],
    answer: "C sharp",
    explanation: "جاء في الصفحة الأولى والثالثة أن لغة سي شارب التابعة لمايكروسوفت تُلفظ وتُنطق 'C sharp'."
  },
  {
   question: "What is the name of the scripting language used by Adobe Flash technology to support graphics and streaming?",
   options: [
      "JavaScript",
      "ActionScript",
      "VBScript",
      "VoiceXML"
    ],
    answer: "ActionScript",
    explanation: "حسب نص البدائل المتاحة للجافا في الصفحة الثالثة، فإن تقنية Adobe Flash تعتمد على لغة برمجية نصية (scripting language) تُسمى ActionScript."
  },
  {
   question: "Which computer language was developed by IBM in 1954 for scientific and engineering applications?",
   options: [
      "COBOL",
      "BASIC",
      "FORTRAN",
      "PASCAL"
    ],
    answer: "FORTRAN",
    explanation: "توضح الصفحة الرابعة (Image 4) في قسم أمثلة لغات البرمجة العالية المستوى أن لغة FORTRAN تم تطويرها بواسطة IBM عام 1954 للأغراض العلمية والهندسية."
    },
  {
    question: "What are the small Java programs that run automatically on web pages called?",
     options: [
      "Plug-ins",
      "Applets",
      "Tags",
      "Threads"
    ],
    answer: "Applets",
    explanation: "تُعرف الصفحة الثالثة والسابعة الـ Applets بأنها برامج صغيرة تعمل تلقائياً داخل صفحات الويب لتوفر التفاعل والرسوم المتحركة."
  },
  {
    question: "How is the '-ed' ending pronounced in the word 'watched'?",
     options: [
      "/t/",
      "/d/",
      "/ɪd/",
      "/ed/"
    ],
    answer: "/t/",
    explanation: "تنص قاعدة النطق في الصفحة الأولى على أن الـ -ed تُلفظ /t/ إذا جاءت بعد صوت ساكن غير ملفوظ (voiceless) مثل صوت /tʃ/ في نهاية watch."
  },
  {
    question: "How is the '-ed' ending pronounced in the word 'designed'?",
     options: [
      "/t/",
      "/d/",
      "/ɪd/",
      "/de/"
    ],
    answer: "/d/",
    explanation: "تُلفظ الـ -ed كـ /d/ إذا جاءت بعد صوت ملفوظ (voiced sound) مثل صوت /n/ في نهاية كلمة design."
  },
  {
    question: "How is the '-ed' ending pronounced in the word 'executed'?",
     options: [
      "/t/",
      "/d/",
      "/ɪd/",
      "/id/"
    ],
    answer: "/ɪd/",
    explanation: "وفقاً لجدول النطق في الصفحة الأولى، يلفظ المقطع كـ /ɪd/ عندما ينتهي الفعل الأصلي بصوت /t/ أو /d/، والفعل هنا ينتهي بصوت /t/."
  },
  {
    question: "Which modal verb is used to express absolute obligation or technical necessity in: 'To view a PDF file, you __ have Adobe Acrobat Reader.'?",
     options: [
      "can",
      "should",
      "must",
      "might"
    ],
    answer: "must",
    explanation: "يُستخدم الفعل المساعد 'must' للتعبير عن الإلزام أو الضرورة القصوى (obligation or necessity) كما هو موضح في تمارين القواعد بالصفحة الثانية والسابعة."
  },
  {
    question: "Complete the sentence from the text: 'Websites with graphics are more inviting, so you __ like to insert some graphics into your documents.'",
     options: [
      "must",
      "needn't",
      "should",
      "may / might"
    ],
    answer: "may / might",
    explanation: "تُستخدم الأفعال 'may' أو 'might' هنا للتعبير عن الاحتمالية النصية أو الاقتراح الخفيف (possibility) بناءً على سياق الجملة في الصفحة الثانية والسابعة."
  },
  {
    question: "Complete the sentence using the correct infinitive form: 'We use symbolic languages __ instructions to the computer.'",
     options: [
      "communicate",
      "communicating",
      "to communicate",
      "for communicate"
    ],
    answer: "to communicate",
    explanation: "تُستخدم صيغة المصدر المسبوق بـ to للتعبير عن الغرض (To express purpose) كما هو مذكور في قاعدة الـ HELP box بالصفحة السادسة."
  },
  {
    question: "Based on grammar rules, choose the correct form: 'BASIC was widely used in the past because it was easy __.'",
     options: [
      "learn",
      "learning",
      "to learn",
      "for learning"
    ],
    answer: "to learn",
    explanation: "تتبع الصفات (مثل easy أو difficult) دائماً بصيغة المصدر الكامل (Infinitive with to) وفق القاعدة المشروحة بالصفحة السادسة (After adjectives)."
  },
  {
    question: "Complete the following sentence: 'He refuses __ the project with me.'",
     options: [
      "do",
      "doing",
      "to do",
      "done"
    ],
    answer: "to do",
    explanation: "ينتمي الفعل 'refuse' (يرفض) إلى قائمة الأفعال المحددة التي يجب أن يلحق بها مصدر بـ to مباشرة (After certain verbs) كما في تمرين الصفحة السادسة."
  },
  {
    question: "Choose the correct grammatical structure for this warning: 'The engineers warned the employees not __ the cables.'",
     options: [
      "touch",
      "touching",
      "to touch",
      "for touching"
    ],
    answer: "to touch",
    explanation: "عند استخدام أفعال التوجيه والتحذير متبوعة بمفعول به مثل (warn + object)، يكون التركيب في حالة النفي هو (not + to + infinitive) طبقاً للصفحة السادسة."
    },
  {
    question: "Complete the sentence: 'Spyware can make your PC __ more slowly.'",
     options: [
      "perform",
      "performing",
      "to perform",
      "performed"
    ],
    answer: "perform",
    explanation: "الفعل السببي 'make' عندما يتبعه مفعول به يتطلب استخدام مصدر مجرد بدون to (bare infinitive)، والتركيب هو (make + object + bare infinitive)."
  },
  {
    question: "Complete the grammatical rule derived from the text: 'Java lets you __ animated characters on web pages.'",
     options: [
      "watch",
      "watching",
      "to watch",
      "watched"
    ],
    answer: "watch",
    explanation: "الفعل 'let' يتبع بمفعول به ثم فعل مجرد تماماً (bare infinitive) بدون إضافات وبدون to، بناءً على الملاحظات المكتوبة بالصفحة السابعة والسادسة."
  },
  {
    question: "Fill in the blank with the correct form: 'I'm not interested in __ that computer language.'",
     options: [
      "learn",
      "learning",
      "to learn",
      "learned"
    ],
    answer: "learning",
    explanation: "الاسم المجرور أو صيغة الفعل المنتهي بـ -ing (Gerund) هو ما يجب استخدامه مباشرة بعد حروف الجر مثل 'in' للتعبير عن الاهتمام بشيء."
  },
  {
    question: "What does the abbreviation WYSIWYG stand for in web page design?",
     options: [
      "What You See Is What You Get",
      "Web Yield System Inside Web Yahoo Group",
      "Wide YouTube Style Integrated Web Graphics",
      "Word Yahoo System In Web YouTube Guide"
    ],
    answer: "What You See Is What You Get",
    explanation: "مذكور صراحة في الصفحة الثامنة (Image 8) في سطر محرري الويب أن الاختصار يعني 'What You See Is What You Get' (ما تراه هو ما تحصل عليه)."
  },
  {
    question: "What is defined as 'a mechanism for adding styles to web documents, including fonts, colors, and layout'?",
     options: [
      "Hypertext",
      "Cascading Style Sheets (CSS)",
      "RSS feeds",
      "XML tags"
    ],
    answer: "Cascading Style Sheets (CSS)",
    explanation: "هذا هو التعريف التقني الدقيق لآلية صفحات الأنماط الانسيابية (CSS) كما جاء في الصفحة السابعة والثامنة."
  },
  {
    question: "What is the primary function of a 'plug-in' based on the text matching exercise?",
     options: [
      "It is a database for storing user passwords.",
      "It is a small program used for handling audio, video and animation files.",
      "It translates high-level code into machine code line by line.",
      "It allows users to define their own custom tags."
    ],
    answer: "It is a small program used for handling audio, video and animation files.",
    explanation: "وفقاً للتوصيل في الصفحة السابعة (تمرين B، النقطة 4 مصلت بـ b)، الـ plug-in هو برنامج مساعد مخصص للتعامل مع ملفات الصوت والفيديو والأنيميشن."
  },
  {
    question: "What does the commercial computer language abbreviation COBOL stand for?",
     options: [
      "Computer Business Oriented Language",
      "Common Business Oriented Language",
      "Complex Binary Object Language",
      "Core Basic Output Language"
    ],
    answer: "Common Business Oriented Language",
    explanation: "مذكور في تفصيل اللغات بالصفحة الرابعة (Image 4) أن اختصار لغة كوبول يعود إلى (Common Business Oriented Language) وتستخدم للتطبيقات التجارية."
  },
  {
    question: "Which markup language allows developers to define their own tags and is not limited to a fixed set?",
     options: [
      "HTML",
      "XML (Extensible Markup Language)",
      "VoiceXML",
      "FORTRAN"
    ],
    answer: "XML (Extensible Markup Language)",
    explanation: "تشرح الصفحة الرابعة والسابعة أن لغة XML تمكن المبرمجين من تحديد وسومهم الخاصة (define our own tags) ولا تقتصر على مجموعة وسوم ثابتة كـ HTML."
  },
  {
    question: "Complete the word-building sentence: '__ is the process of writing a program using a computer language.'",
     options: [
      "Program",
      "Programmer",
      "Programming",
      "Programmable"
    ],
    answer: "Programming",
    explanation: "حسب تمرين اشتقاق الكلمات (Word building) في الصفحة التاسعة (Image 9، الجملة الأولى)، فإن العملية نفسها كاسم مصدر هي 'Programming'."
  },
  {
    question: "Complete the text statement: 'A source program is converted into machine code by software called a __.'",
     options: [
      "compiler",
      "bug",
      "debugger",
      "compilation"
    ],
    answer: "compiler",
    explanation: "البرمجية التي تحول البرنامج المصدر بالكامل إلى لغة الآلة تسمى المترجم (compiler) كما جاء في اشتقاقات وتدريبات الصفحة التاسعة والصفحة الرابعة."
  },
  {
    question: "What is the technical term for 'any error or malfunction of a computer program'?",
     options: [
      "bug",
      "debug",
      "debugger",
      "debugging"
    ],
    answer: "bug",
    explanation: "تُعرف الصفحة التاسعة في التمرين الثامن الـ 'bug' (العلة/الخطأ البرمجي) بأنه أي خطأ أو خلل وظيفي يحدث داخل برنامج الكمبيوتر."
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
        pupil.style.transform =`translate(${x}px, ${y}px)`;
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