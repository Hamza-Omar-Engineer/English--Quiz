// --- Global State ---
let studentName = "";
let studentGender = "male";
let currentQuestionIndex = 0;
let score = 0;
let timer;
let secondsElapsed = 0;

// Placeholder Data (We will replace this with JSON later)
const questions = [

    // --- القسم الأول: القواعد (15 سؤالاً) ---
    // الـ -ing form (8 أسئلة)
    {
        question: "1. _____ includes lighting, shading, and reflections to make images realistic.",
        options: ["Render", "Rendering", "Rendered", "To render"],
        answer: "Rendering",
        explanation: "هنا نستخدم الـ Gerund كمبتدأ للجملة (Subject)."
    },
    {
        question: "2. Computers generate graphics by _____ mathematical calculations.",
        options: ["perform", "performing", "performed", "to perform"],
        answer: "performing",
        explanation: "بعد حرف الجر (by) نستخدم دائماً صيغة الـ Gerund (-ing)."
    },
    {
        question: "3. I enjoy _____ photos with professional filters.",
        options: ["edit", "editing", "edits", "to edit"],
        answer: "editing",
        explanation: "الفعل (enjoy) يتبعه دائماً Gerund."
    },
    {
        question: "4. Designers avoid _____ bitmaps when high scalability is needed.",
        options: ["use", "using", "uses", "to use"],
        answer: "using",
        explanation: "الفعل (avoid) يتبعه دائماً Gerund."
    },
    {
        question: "5. In the phrase 'a specialized printing device', 'printing' acts as an _____.",
        options: ["Adjective", "Gerund", "Verb", "Object"],
        answer: "Adjective",
        explanation: "كلمة printing هنا تصف الاسم (device) فهي تعمل كصفة."
    },
    {
        question: "6. She is _____ a new layout for the magazine.",
        options: ["design", "designing", "designed", "designs"],
        answer: "designing",
        explanation: "هنا Present Participle لأنها جزء من زمن الحاضر المستمر."
    },
    {
        question: "7. He is interested in _____ 3D wireframe models.",
        options: ["create", "creating", "creates", "to create"],
        answer: "creating",
        explanation: "بعد حرف الجر (in) نستخدم Gerund."
    },
    {
        question: "8. _____ information via multimedia kiosks is very effective.",
        options: ["Provide", "Provided", "Providing", "Provides"],
        answer: "Providing",
        explanation: "استخدام Gerund كاسم في بداية الجملة."
    },
    // ترتيب الصفات (7 أسئلة)
    {
        question: "9. Choose the correct order: We bought a _____ imagesetter.",
        options: ["new, expensive, digital", "expensive, new, digital", "digital, new, expensive", "expensive, digital, new"],
        answer: "expensive, new, digital",
        explanation: "الترتيب الصحيح: الرأي (expensive) -> العمر (new) -> النوع (digital)."
    },
    {
        question: "10. He uses a _____ computer for DTP.",
        options: ["powerful, modern, Apple", "Apple, powerful, modern", "modern, Apple, powerful", "powerful, Apple, modern"],
        answer: "powerful, modern, Apple",
        explanation: "الترتيب: الرأي (powerful) -> العمر (modern) -> المنشأ/الماركة (Apple)."
    },
    {
        question: "11. It is a _____ layout program.",
        options: ["user-friendly, new, page", "page, new, user-friendly", "new, user-friendly, page", "user-friendly, page, new"],
        answer: "user-friendly, new, page",
        explanation: "الترتيب: الرأي (user-friendly) -> العمر (new) -> الغرض (page)."
    },
    {
        question: "12. Look at that _____ music system.",
        options: ["Japanese, advanced, digital", "advanced, digital, Japanese", "advanced, Japanese, digital", "digital, advanced, Japanese"],
        answer: "advanced, Japanese, digital",
        explanation: "الترتيب: الرأي (advanced) -> المنشأ (Japanese) -> النوع (digital)."
    },
    {
        question: "13. I need a _____ printer.",
        options: ["portable, small, laser", "small, portable, laser", "laser, small, portable", "portable, laser, small"],
        answer: "small, portable, laser",
        explanation: "الترتيب: الحجم (small) -> الاستخدام (portable) -> النوع (laser)."
    },
    {
        question: "14. They use _____ plates for printing.",
        options: ["rectangular, metal, silver", "silver, metal, rectangular", "metal, rectangular, silver", "silver, rectangular, metal"],
        answer: "rectangular, metal, silver",
        explanation: "الترتيب: الشكل (rectangular) -> المادة (metal) -> اللون (silver)."
    },
    {
        question: "15. It is a _____ multimedia encyclopedia.",
        options: ["comprehensive, online, Britannica", "Britannica, online, comprehensive", "online, comprehensive, Britannica", "comprehensive, Britannica, online"],
        answer: "comprehensive, online, Britannica",
        explanation: "الترتيب: الرأي (comprehensive) -> المكان/النوع (online) -> الماركة (Britannica)."
    },

    // --- القسم الثاني: المفردات والتعاريف (15 سؤالاً) ---
    {
        question: "16. _____ are geometrical figures with special properties (like self-similarity).",
        options: ["Bitmaps", "Fractals", "Filters", "Vectors"],
        answer: "Fractals",
        explanation: "الفركتلات هي أشكال هندسية ذات خصائص تكرارية خاصة."
    },
    {
        question: "17. A _____ is a representation of a 3D object using only edges and contour lines.",
        options: ["Rendering", "Wireframe", "Solid model", "Bitmap"],
        answer: "Wireframe",
        explanation: "الهيكل السلكي يظهر الحواف والخطوط الخارجية فقط."
    },
    {
        question: "18. The number of pixels per inch in an image is called _____.",
        options: ["Resolution", "Scaling", "Kerning", "Tracking"],
        answer: "Resolution",
        explanation: "الدقة (Resolution) هي عدد البكسلات في البوصة."
    },
    {
        question: "19. Adjusting the space between two specific characters is known as _____.",
        options: ["Leading", "Tracking", "Kerning", "Text flow"],
        answer: "Kerning",
        explanation: "الـ Kerning هو ضبط المسافة بين زوج من الأحرف."
    },
    {
        question: "20. A _____ machine creates the metal plates used in commercial printing.",
        options: ["Scanner", "Imagesetter", "Platesetter", "Synthesizer"],
        answer: "Platesetter",
        explanation: "الـ Platesetter هي الآلة التي تصنع صفائح الطباعة المعدنية."
    },
    {
        question: "21. _____ is a technique that adds realism (lighting, shadows) to a 3D model.",
        options: ["Compositing", "Rendering", "Scaling", "Filtering"],
        answer: "Rendering",
        explanation: "الصيرورة (Rendering) هي عملية إضفاء الواقعية على النموذج."
    },
    {
        question: "22. Images made of pixels are called _____ graphics.",
        options: ["Vector", "Raster (Bitmap)", "Fractal", "Wireframe"],
        answer: "Raster (Bitmap)",
        explanation: "الرسوم النقطية تتكون من بكسلات."
    },
    {
        question: "23. Text that contains links to other documents is called _____.",
        options: ["Hypermedia", "Hypertext", "Streaming", "Webcast"],
        answer: "Hypertext",
        explanation: "النص التشعبي يحتوي على روابط لفقرات أو وثائق أخرى."
    },
    {
        question: "24. A(n) _____ allows you to record music and play it back on a PC.",
        options: ["Imagesetter", "Sound card", "Video card", "Platesetter"],
        answer: "Sound card",
        explanation: "بطاقة الصوت هي المسؤولة عن التسجيل والمعالجة الصوتية."
    },
    {
        question: "25. The standard interface for connecting electronic musical instruments is _____.",
        options: ["USB", "DAW", "MIDI", "MP3"],
        answer: "MIDI",
        explanation: "MIDI هي الواجهة القياسية للآلات الموسيقية الإلكترونية."
    },
    {
        question: "26. _____ means playing audio or video files while they are still downloading.",
        options: ["Ripping", "Burning", "Streaming", "Buffering"],
        answer: "Streaming",
        explanation: "البث (Streaming) هو التشغيل أثناء التحميل."
    },
    {
        question: "27. Digital Audio Workstation is abbreviated as _____.",
        options: ["DAW", "DTP", "CAD", "MIDI"],
        answer: "DAW",
        explanation: "DAW هي اختصار لمحطة عمل الصوت الرقمي."
    },
    {
        question: "28. A(n) _____ is a public computer that provides information via multimedia.",
        options: ["Imagesetter", "Kiosk", "Synthesizer", "Workstation"],
        answer: "Kiosk",
        explanation: "الكشك (Kiosk) هو جهاز معلوماتي عام."
    },
    {
        question: "29. Special effects that can be applied to pictures are called _____.",
        options: ["Fractals", "Filters", "Bitmaps", "Scales"],
        answer: "Filters",
        explanation: "الفلاتر هي تأثيرات برمجية تضاف للصور."
    },
    {
        question: "30. The feature that wraps text around a graphic is _____.",
        options: ["Kerning", "Leading", "Text flow", "Tracking"],
        answer: "Text flow",
        explanation: "انسياب النص (Text flow) هو التفاف النص حول الرسم."
    },

    // --- القسم الثالث: فهم النصوص والأفخاخ التقنية (10 أسئلة) ---
    {
        question: "31. [Trap] What happens to a bitmap image when you scale it up (enlarge it)?",
        options: ["It becomes clearer", "It shows jagged edges", "It turns into a vector", "Nothing changes"],
        answer: "It shows jagged edges",
        explanation: "الصور النقطية تفقد دقتها وتظهر حوافها مسننة عند التكبير."
    },
    {
        question: "32. [Trap] Vector graphics are better for logos because they _____.",
        options: ["Use more pixels", "Are made of mathematical equations", "Are always smaller", "Can't be scaled"],
        answer: "Are made of mathematical equations",
        explanation: "الـ Vector يعتمد على معادلات رياضية مما يجعله قابلاً للتكبير دون فقدان الدقة."
    },
    {
        question: "33. Which format is commonly used to exchange vector drawings?",
        options: ["JPEG", "GIF", "EPS", "TIFF"],
        answer: "EPS",
        explanation: "حسب النص، EPS هو التنسيق القياسي لتبادل الرسوم المتجهة."
    },
    {
        question: "34. DTP stands for _____.",
        options: ["Digital Text Printing", "Desktop Publishing", "Data Transfer Protocol", "Design Technology Program"],
        answer: "Desktop Publishing",
        explanation: "DTP تعني النشر المكتبي."
    },
    {
        question: "35. Why is PDF popular for DTP?",
        options: ["It only works on Macs", "It keeps the layout and fonts the same on any PC", "It is used for recording music", "It is a vector format only"],
        answer: "It keeps the layout and fonts the same on any PC",
        explanation: "الـ PDF يحافظ على التنسيق والخطوط بغض النظر عن نظام التشغيل."
    },
    {
        question: "36. Modern commercial printing uses CTP, which sends files directly to the _____.",
        options: ["Laser printer", "Metal plates", "Service bureau", "Scanner"],
        answer: "Metal plates",
        explanation: "تقنية Computer-To-Plate ترسل الملفات مباشرة لصفائح الطباعة."
    },
    {
        question: "37. Multimedia 'interactivity' means _____.",
        options: ["Watching a video without moving", "The user is involved and makes choices", "The computer is very fast", "Printing a colorful book"],
        answer: "The user is involved and makes choices",
        explanation: "التفاعلية تعني مشاركة المستخدم واتخاذ القرارات."
    },
    {
        question: "38. Encyclopedia Britannica is now available _____.",
        options: ["Only in print", "Online and on DVD", "Only on the radio", "Only as a Word file"],
        answer: "Online and on DVD",
        explanation: "ذكر النص أن الموسوعة انتقلت للنسخ الرقمية."
        },
    {
        question: "39. A 'CD ripper' program is used to _____.",
        options: ["Destroy a CD", "Extract music and save it as MP3", "Burn music onto a CD", "Design a CD cover"],
        answer: "Extract music and save it as MP3",
        explanation: "برنامج الـ Ripper يستخرج الموسيقى ويحولها لتنسيق رقمي."
    },
    {
        question: "40. Car designers use CAD to _____.",
        options: ["Listen to music", "Model and test designs before building them", "Send emails", "Calculate taxes"],
        answer: "Model and test designs before building them",
        explanation: "يستخدم CAD لاختبار التصاميم افتراضياً قبل التصنيع."
    },

    // --- القسم الرابع: الترجمة والمصطلحات (10 أسئلة بناءً على خط اليد) ---
    {
        question: "41. الترجمة الصحيحة لكلمة 'Jagged' حسب ملاحظات الصورة هي _____.",
        options: ["ناعم", "مشوه / مسنن", "مستقيم", "دائري"],
        answer: "مشوه / مسنن",
        explanation: "وردت في الملاحظات المكتوبة لوصف حواف البكسلات."
    },
    {
        question: "42. ماذا يعني مصطلح 'Desktop Publishing' باللغة العربية؟",
        options: ["برمجة المكتب", "النشر المكتبي", "إدارة الملفات", "تصنيع الحواسيب"],
        answer: "النشر المكتبي",
        explanation: "الترجمة الرسمية للـ DTP."
    },
    {
        question: "43. كلمة 'Rendering' في سياق التصميم تعني _____.",
        options: ["المسح الضوئي", "الإظهار المعماري / الصيرورة", "تغيير الخط", "إرسال الملف"],
        answer: "الإظهار المعماري / الصيرورة",
        explanation: "هي عملية المعالجة النهائية للصورة."
    },
    {
        question: "44. ترجمة 'Wireframe' هي _____.",
        options: ["إطار الصور", "هيكل سلكي", "سلك كهربائي", "برواز خبي"],
        answer: "هيكل سلكي",
        explanation: "التمثيل الأولي للجسم الثلاثي الأبعاد."
    },
    {
        question: "45. ماذا تعني 'Multimedia Kiosks'؟",
        options: ["مكتبات رقمية", "أكشاك الوسائط المتعددة", "سماعات الرأس", "أفلام سينما"],
        answer: "أكشاك الوسائط المتعددة",
        explanation: "محطات معلوماتية عامة."
    },
    {
        question: "46. ترجمة 'Text flow' هي _____.",
        options: ["حجم النص", "انسياب أو تدفق النص", "لون النص", "نوع الخط"],
        answer: "انسياب أو تدفق النص",
        explanation: "حسب الملاحظات، تعني التفاف النص حول الأجسام."
    },
    {
        question: "47. مصطلح 'Hypermedia' يعني _____.",
        options: ["نص تشعبي", "وسائط فائقة", "صورة ثابتة", "تسجيل صوتي"],
        answer: "وسائط فائقة",
        explanation: "النسخة التفاعلية من الوسائط المتعددة."
    },
    {
        question: "48. 'Imagesetter' تترجم إلى _____.",
        options: ["ماسح ضوئي", "راسمة الصور (عالية الدقة)", "طابعة ليزر عادية", "شاشة عرض"],
        answer: "راسمة الصور (عالية الدقة)",
        explanation: "جهاز يستخدم في المطابع لإنتاج الأفلام أو الصور بدقة عالية."
    },
    {
        question: "49. ترجمة 'Solid modeling' هي _____.",
        options: ["النمذجة الصلبة", "التلوين اليدوي", "تصميم الورق", "تحرير الصوت"],
        answer: "النمذجة الصلبة",
        explanation: "تقنية تصميم الأجسام ذات الحجم (Volume)."
    },
    {
        question: "50. 'Digital Audio Workstation' تعني _____.",
        options: ["برنامج رسم", "محطة عمل الصوت الرقمي", "لوحة مفاتيح", "مكبر صوت"],
        answer: "محطة عمل الصوت الرقمي",
        explanation: "النظام المتكامل لتسجيل وتحرير الموسيقى."
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
    document.getElementById(oldId).classList.remove("active");
    setTimeout(() => {
        document.getElementById(oldId).style.display = "none";
        document.getElementById(newId).style.display = "block";
        setTimeout(() => document.getElementById(newId).classList.add("active"), 10);
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
    
    // Arabic-friendly grammar check for English (Gender context if needed)
    document.getElementById("result-message").innerText = msg;

    function sendDataToSheet(name, score, gender, time) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwxsvB7BKEcL9ec6TH7k-wZTk1g48srAVyGposfUWuTSVwkFIZTA5GS9GmCA6xo_GBg/exec"
    
    const data = {
        name: name,
        score: score + "%",
        gender: gender,
        time: time
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