// ============================================================
// SMART MUSEUM
// Виртуальный музей казахских музыкальных инструментов
// SCRIPT.JS
// ============================================================


// ============================================================
// ПЕРЕВОДЫ
// ============================================================

const translations = {

    // ========================================================
    // ҚАЗАҚША
    // ========================================================

    kk: {

        select_lang: "Тілді таңдау:",

        title: "Қазақтың ұлттық музыкалық аспаптары",

        // ----------------------------------------------------
        // ДОМБЫРА
        // ----------------------------------------------------

        dombra_title: "Домбыра",

        dombra_short:
            "Домбыра — қазақ халқының ең танымал екі ішекті шертпелі музыкалық аспаптарының бірі.",

        dombra_desc:
            "Домбыра — қазақ халқының ең танымал ұлттық музыкалық аспаптарының бірі. Әдетте оның екі ішегі болады және ол шертпелі аспаптарға жатады. Домбыраның сыңғырлаған, таза әрі мәнерлі үні дәстүрлі күйлерді орындауға ерекше қолайлы. Домбыра халық әндерінде, отбасылық мерекелерде, концерттерде және қазіргі қазақ музыкасында кеңінен қолданылады.",


        // ----------------------------------------------------
        // ҚОБЫЗ
        // ----------------------------------------------------

        kobyz_title: "Қобыз",

        kobyz_short:
            "Қобыз — терең әрі ерекше үнімен танымал көне қазақ ысқышты музыкалық аспабы.",

        kobyz_desc:
            "Қобыз — терең, ерекше әрі мәнерлі үні бар көне қазақ ысқышты музыкалық аспабы. Оның дәстүрлі құрылысы ағаш корпус пен ішектерден тұрады. Қобыздың тарихы аңызға айналған Қорқыт есімімен тығыз байланысты. Бұл аспап қазақ халқының көне музыкалық мәдениеті мен дәстүрінде маңызды орын алады.",


        // ----------------------------------------------------
        // ЖЕТІГЕН
        // ----------------------------------------------------

        zhetygen_title: "Жетіген",

        zhetygen_short:
            "Жетіген — жұмсақ әрі әуезді үні бар көне қазақ көп ішекті шертпелі аспабы.",

        zhetygen_desc:
            "Жетіген — көне қазақ көп ішекті шертпелі музыкалық аспабы. Оның атауын дәстүрлі түрде жеті ішекпен байланыстырады. Аспаптың пішіні ұзынша болып келеді және жұмсақ, тыныш әрі әуезді үнімен ерекшеленеді. Жетіген Қазақстанның музыкалық мұрасының маңызды бөлігі болып саналады.",


        // ----------------------------------------------------
        // СЫБЫЗҒЫ
        // ----------------------------------------------------

        sybyzgy_title: "Сыбызғы",

        sybyzgy_short:
            "Сыбызғы — жұмсақ әрі табиғи үні бар көне қазақ үрмелі музыкалық аспабы.",

        sybyzgy_desc:
            "Сыбызғы — дәстүрлі түрде ағаштан немесе қамыстан жасалған көне қазақ үрмелі музыкалық аспабы. Дыбыс биіктігін өзгертуге арналған арнайы тесіктері болады. Сыбызғы жұмсақ, таза әрі тыныш тембрімен ерекшеленеді. Оның үні табиғатпен, кең даламен және қазақ халқының дәстүрлі мәдениетімен тығыз байланысты.",


        // ----------------------------------------------------
        // ШАҢҚОБЫЗ
        // ----------------------------------------------------

        shankobyz_title: "Шаңқобыз",

        shankobyz_short:
            "Шаңқобыз — ерекше дірілдеген үні бар шағын көне қазақ тілшелі музыкалық аспабы.",

        shankobyz_desc:
            "Шаңқобыз — ерекше дірілдеген тембрі бар шағын көне қазақ тілшелі музыкалық аспабы. Оның дыбысы арнайы тілшенің тербелуі арқылы пайда болады. Аспап шағын көлемімен және өзіне тән ерекше үнімен ерекшеленеді.",


        // ----------------------------------------------------
        // АСАТАЯҚ
        // ----------------------------------------------------

        asatayak_title: "Асатаяқ",

        asatayak_short:
            "Асатаяқ — қозғалған кезде ырғақты сыңғырлаған дыбыс шығаратын көне қазақ аспабы.",

        asatayak_desc:
            "Асатаяқ — негізінен ағаштан жасалған көне қазақ ұрмалы-шулы музыкалық аспабы. Аспапты қозғалтқан кезде сыңғырлаған ырғақты дыбыс пайда болады. Асатаяқ дәстүрлі салт-жораларда, мерекелерде және халықтық рәсімдерде қолданылған.",


        // ----------------------------------------------------
        // ДАУЫЛПАЗ
        // ----------------------------------------------------

        dauylpaz_title: "Дауылпаз",

        dauylpaz_short:
            "Дауылпаз — қатты әрі қуатты дыбыс шығаратын көне қазақ ұрмалы музыкалық аспабы.",

        dauylpaz_desc:
            "Дауылпаз — үлкен барабанға ұқсайтын көне қазақ ұрмалы музыкалық аспабы. Ол қатты, қуатты және алысқа естілетін дыбыс шығарады.",


        // ----------------------------------------------------
        // КЕРНЕЙ
        // ----------------------------------------------------

        kernei_title: "Керней",

        kernei_short:
            "Керней — ұзын түтік пішінді, қатты әрі қуатты үні бар көне қазақ үрмелі аспабы.",

        kernei_desc:
            "Керней — ұзын түтік пішінді көне қазақ үрмелі музыкалық аспабы. Ол қатты, қуатты және алысқа жететін үнімен ерекшеленеді.",


        // ----------------------------------------------------
        // САЗСЫРНАЙ
        // ----------------------------------------------------

        sazsyrnai_title: "Сазсырнай",

        sazsyrnai_short:
            "Сазсырнай — саз балшықтан жасалатын, жұмсақ әрі әуезді үні бар көне қазақ үрмелі аспабы.",

        sazsyrnai_desc:
            "Сазсырнай — саз балшықтан жасалған шағын көне қазақ үрмелі музыкалық аспабы. Ол жұмсақ, тыныш әрі әуезді үнімен ерекшеленеді.",


        // ----------------------------------------------------
        // КНОПКИ ОПИСАНИЯ
        // ----------------------------------------------------

        show_more: "Толық сипаттаманы оқу",

        show_less: "Қысқаша көрсету",


        // ----------------------------------------------------
        // ПОДБОР КЮЯ
        // ----------------------------------------------------

        mood_title:
            "🎶 Көңіл-күйге байланысты күй таңдау",

        mood_desc:
            "Көңіл-күйіңізді таңдап, қазақ күйінің ұсынысын алыңыз.",

        mood_opt_default:
            "-- Көңіл-күйді таңдаңыз --",

        mood_opt_happy:
            "😊 Көңілді",

        mood_opt_calm:
            "😌 Сабырлы",

        mood_opt_sad:
            "😔 Мұңлы",

        mood_opt_energetic:
            "⚡ Жігерлі",

        mood_opt_inspired:
            "✨ Шабытты",

        btn_recommend:
            "Күйді таңдау",

        result_default:
            "Ұсыныс",

        result_select_mood:
            "Өтінемін, көңіл-күйді таңдаңыз.",

        result_title:
            "🎵 Ұсынылатын күй:",


        // ----------------------------------------------------
        // ГОЛОСОВОЕ УПРАВЛЕНИЕ
        // ----------------------------------------------------

        voice_title:
            "🎤 Дауыспен басқару",

        voice_description:
            "Виртуалды музейді дауыс арқылы басқарыңыз. Музыкалық аспаптың атауын айтып, оның дыбысын қосыңыз. Сондай-ақ аспап туралы толық ақпаратты тыңдауға болады.",

        voice_button:
            "🎤 Дауыспен басқару",

        voice_status:
            "Батырманы басып, сөйлеңіз",

        voice_command:
            "Команда әлі танылған жоқ.",

        voice_live:
            "🎧 Мұнда танылған сөздер көрсетіледі.",

        voice_help_title:
            "Дауыстық командалар мысалдары:",

        voice_commands: [

            "🎵 «Домбыра» — домбыраның дыбысын қосу",

            "🎵 «Қобыз» — қобыздың дыбысын қосу",

            "🎵 «Жетіген» — жетігеннің дыбысын қосу",

            "🎵 «Сыбызғы» — сыбызғының дыбысын қосу",

            "🎵 «Шаңқобыз» — шаңқобыздың дыбысын қосу",

            "🎵 «Асатаяқ» — асатаяқтың дыбысын қосу",

            "🎵 «Дауылпаз» — дауылпаздың дыбысын қосу",

            "🎵 «Керней» — кернейдің дыбысын қосу",

            "🎵 «Сазсырнай» — сазсырнайдың дыбысын қосу",

            "🔊 «Домбыра туралы» — домбыра туралы толық ақпаратты тыңдау",

            "🔊 «Қобыз туралы» — қобыз туралы толық ақпаратты тыңдау",

            "⛔ «Тоқтат» — музыканы немесе дауысты тоқтату"

        ],


        footer:
            "© 2026 Қазақ ұлттық музыкалық аспаптарының виртуалды музейі"

    },


    // ========================================================
    // РУССКИЙ
    // ========================================================

    ru: {

        select_lang:
            "Выбор языка:",

        title:
            "Казахские национальные музыкальные инструменты",


        // ----------------------------------------------------
        // ДОМБРА
        // ----------------------------------------------------

        dombra_title:
            "Домбра",

        dombra_short:
            "Домбра — один из самых известных казахских национальных двухструнных щипковых инструментов.",

        dombra_desc:
            "Домбра — один из самых известных казахских национальных музыкальных инструментов. Обычно она имеет две струны и относится к щипковым инструментам. Её звонкий, чистый и выразительный звук особенно хорошо подходит для исполнения традиционных кюев. Домбра широко используется в народных песнях, семейных праздниках, концертах и современной казахской музыке.",


        // ----------------------------------------------------
        // КОБЫЗ
        // ----------------------------------------------------

        kobyz_title:
            "Кобыз",

        kobyz_short:
            "Кобыз — древний казахский смычковый инструмент с глубоким и необычным звучанием.",

        kobyz_desc:
            "Кобыз — древний казахский смычковый музыкальный инструмент с глубоким, необычным и выразительным звучанием. Его традиционная конструкция включает деревянный корпус и струны. История кобыза тесно связана с именем легендарного Коркыта. Инструмент занимает важное место в древней музыкальной культуре и традициях казахского народа.",


        // ----------------------------------------------------
        // ЖЕТЫГЕН
        // ----------------------------------------------------

        zhetygen_title:
            "Жетыген",

        zhetygen_short:
            "Жетыген — древний казахский многострунный щипковый инструмент с мягким и мелодичным звучанием.",

        zhetygen_desc:
            "Жетыген — древний многострунный казахский щипковый музыкальный инструмент. Его название традиционно связывают с семью струнами. Инструмент имеет вытянутую форму и отличается мягким, спокойным и мелодичным звучанием. Жетыген является важной частью музыкального наследия Казахстана.",


        // ----------------------------------------------------
        // СЫБЫЗГЫ
        // ----------------------------------------------------

        sybyzgy_title:
            "Сыбызгы",

        sybyzgy_short:
            "Сыбызгы — древний казахский духовой инструмент с мягким и естественным звучанием.",

        sybyzgy_desc:
            "Сыбызгы — древний казахский духовой музыкальный инструмент, который традиционно изготавливался из дерева или тростника. Он имеет отверстия для изменения высоты звука. Сыбызгы отличается мягким, чистым и спокойным тембром. Его звучание тесно связано с природой, степью и традиционной культурой казахского народа.",


        // ----------------------------------------------------
        // ШАНКОБЫЗ
        // ----------------------------------------------------

        shankobyz_title:
            "Шанкобыз",

        shankobyz_short:
            "Шанкобыз — небольшой древний казахский язычковый инструмент с характерным вибрирующим звучанием.",

        shankobyz_desc:
            "Шанкобыз — небольшой древний казахский язычковый музыкальный инструмент с необычным вибрирующим тембром. Его звук создаётся благодаря колебанию специального язычка. Инструмент отличается компактным размером и характерным звучанием.",


        // ----------------------------------------------------
        // АСАТАЯК
        // ----------------------------------------------------

        asatayak_title:
            "Асатаяк",

        asatayak_short:
            "Асатаяк — древний казахский инструмент, создающий звонкий ритмичный звук при движении.",

        asatayak_desc:
            "Асатаяк — древний казахский ударно-шумовой музыкальный инструмент, изготовленный преимущественно из дерева. При движении инструмент создаёт звонкий ритмичный звук. Асатаяк использовался во время традиционных обрядов, праздников и народных церемоний.",


        // ----------------------------------------------------
        // ДАУЫЛПАЗ
        // ----------------------------------------------------

        dauylpaz_title:
            "Дауылпаз",

        dauylpaz_short:
            "Дауылпаз — древний казахский ударный инструмент с громким и мощным звучанием.",

        dauylpaz_desc:
            "Дауылпаз — древний казахский ударный музыкальный инструмент, напоминающий большой барабан. Он создаёт громкий, мощный и далеко слышимый звук.",


        // ----------------------------------------------------
        // КЕРНЕЙ
        // ----------------------------------------------------

        kernei_title:
            "Керней",

        kernei_short:
            "Керней — древний казахский духовой инструмент в форме длинной трубы с мощным звучанием.",

        kernei_desc:
            "Керней — древний казахский духовой музыкальный инструмент, имеющий форму длинной трубы. Он отличается громким, мощным и далеко слышимым звучанием.",


        // ----------------------------------------------------
        // САЗСЫРНАЙ
        // ----------------------------------------------------

        sazsyrnai_title:
            "Сазсырнай",

        sazsyrnai_short:
            "Сазсырнай — небольшой древний казахский глиняный духовой инструмент с мягким звучанием.",

        sazsyrnai_desc:
            "Сазсырнай — небольшой древний казахский духовой музыкальный инструмент, изготовленный из глины. Он отличается мягким, спокойным и мелодичным звучанием.",


        // ----------------------------------------------------
        // КНОПКИ ОПИСАНИЯ
        // ----------------------------------------------------

        show_more:
            "Показать полное описание",

        show_less:
            "Скрыть полное описание",


        // ----------------------------------------------------
        // ПОДБОР КЮЯ
        // ----------------------------------------------------

        mood_title:
            "🎶 Подбор кюя по настроению",

        mood_desc:
            "Выберите своё настроение и получите рекомендацию казахского кюя.",

        mood_opt_default:
            "-- Выберите настроение --",

        mood_opt_happy:
            "😊 Весёлое",

        mood_opt_calm:
            "😌 Спокойное",

        mood_opt_sad:
            "😔 Грустное",

        mood_opt_energetic:
            "⚡ Энергичное",

        mood_opt_inspired:
            "✨ Вдохновение",

        btn_recommend:
            "Подобрать кюй",

        result_default:
            "Рекомендация",

        result_select_mood:
            "Пожалуйста, выберите настроение.",

        result_title:
            "🎵 Рекомендуемый кюй:",


        // ----------------------------------------------------
        // ГОЛОС
        // ----------------------------------------------------

        voice_title:
            "🎤 Голосовое управление",

        voice_description:
            "Управляйте виртуальным музеем с помощью голоса. Назовите музыкальный инструмент, чтобы включить его звучание. Также можно попросить помощника прочитать полное описание инструмента.",

        voice_button:
            "🎤 Голосовое управление",

        voice_status:
            "Нажмите кнопку и говорите",

        voice_command:
            "Команда пока не распознана.",

        voice_live:
            "🎧 Здесь будет отображаться распознанная речь.",

        voice_help_title:
            "Примеры голосовых команд:",

        voice_commands: [

            "🎵 «Домбра» — включить музыку домбры",

            "🎵 «Кобыз» — включить музыку кобыза",

            "🎵 «Жетыген» — включить музыку жетыгена",

            "🎵 «Сыбызгы» — включить музыку сыбызгы",

            "🎵 «Шанкобыз» — включить музыку шанкобыза",

            "🎵 «Асатаяк» — включить музыку асатаяка",

            "🎵 «Дауылпаз» — включить музыку дауылпаза",

            "🎵 «Керней» — включить музыку кернея",

            "🎵 «Сазсырнай» — включить музыку сазсырная",

            "🔊 «Описание домбры» — прочитать полное описание домбры",

            "🔊 «Описание кобыз» — прочитать полное описание кобыза",

            "⛔ «Стоп» — остановить музыку или озвучивание"

        ],


        footer:
            "© 2026 Виртуальный музей казахских музыкальных инструментов"

    },


    // ========================================================
    // ENGLISH
    // ========================================================

    en: {

        select_lang:
            "Language:",

        title:
            "Kazakh National Musical Instruments",


        // ----------------------------------------------------
        // DOMBRA
        // ----------------------------------------------------

        dombra_title:
            "Dombra",

        dombra_short:
            "The dombra is one of the best-known traditional Kazakh two-stringed plucked instruments.",

        dombra_desc:
            "The dombra is one of the best-known traditional Kazakh musical instruments. It usually has two strings and belongs to the family of plucked string instruments. Its bright, clear and expressive sound is especially well suited to performing traditional kuis. The dombra is widely used in folk songs, family celebrations, concerts and contemporary Kazakh music.",


        // ----------------------------------------------------
        // KOBYZ
        // ----------------------------------------------------

        kobyz_title:
            "Kobyz",

        kobyz_short:
            "The kobyz is an ancient Kazakh bowed instrument known for its deep and distinctive sound.",

        kobyz_desc:
            "The kobyz is an ancient Kazakh bowed musical instrument with a deep, distinctive and expressive sound. Its traditional construction includes a wooden body and strings. The history of the kobyz is closely associated with the legendary Korkyt. The instrument holds an important place in the ancient musical culture and traditions of the Kazakh people.",


        // ----------------------------------------------------
        // ZHETYGEN
        // ----------------------------------------------------

        zhetygen_title:
            "Zhetygen",

        zhetygen_short:
            "The zhetygen is an ancient Kazakh multi-stringed plucked instrument with a soft and melodic sound.",

        zhetygen_desc:
            "The zhetygen is an ancient Kazakh multi-stringed plucked musical instrument. Its name is traditionally associated with seven strings. The instrument has an elongated shape and is distinguished by its soft, calm and melodic sound. The zhetygen is an important part of Kazakhstan's musical heritage.",


        // ----------------------------------------------------
        // SYBYZGY
        // ----------------------------------------------------

        sybyzgy_title:
            "Sybyzgy",

        sybyzgy_short:
            "The sybyzgy is an ancient Kazakh wind instrument with a soft and natural tone.",

        sybyzgy_desc:
            "The sybyzgy is an ancient Kazakh wind instrument traditionally made from wood or reed. It has finger holes used to change the pitch. The sybyzgy is distinguished by its soft, clear and calm tone. Its sound is closely associated with nature, the steppe and the traditional culture of the Kazakh people.",


        // ----------------------------------------------------
        // SHANKOBYZ
        // ----------------------------------------------------

        shankobyz_title:
            "Shankobyz",

        shankobyz_short:
            "The shankobyz is a small ancient Kazakh reed instrument with a distinctive vibrating tone.",

        shankobyz_desc:
            "The shankobyz is a small ancient Kazakh reed musical instrument with a distinctive vibrating tone. Its sound is produced by the vibration of a special tongue or reed. The instrument is notable for its compact size and characteristic sound.",


        // ----------------------------------------------------
        // ASATAYAK
        // ----------------------------------------------------

        asatayak_title:
            "Asatayak",

        asatayak_short:
            "The asatayak is an ancient Kazakh instrument that produces a bright rhythmic sound when moved.",

        asatayak_desc:
            "The asatayak is an ancient Kazakh percussion and noise-making musical instrument made mainly of wood. When the instrument is moved, it produces a bright rhythmic sound. The asatayak was used during traditional rituals, celebrations and folk ceremonies.",


        // ----------------------------------------------------
        // DAUYLPAZ
        // ----------------------------------------------------

        dauylpaz_title:
            "Dauylpaz",

        dauylpaz_short:
            "The dauylpaz is an ancient Kazakh percussion instrument with a loud and powerful sound.",

        dauylpaz_desc:
            "The dauylpaz is an ancient Kazakh percussion instrument resembling a large drum. It produces a loud, powerful sound that can be heard from a considerable distance.",


        // ----------------------------------------------------
        // KERNEI
        // ----------------------------------------------------

        kernei_title:
            "Kernei",

        kernei_short:
            "The kernei is an ancient Kazakh wind instrument shaped like a long tube with a powerful sound.",

        kernei_desc:
            "The kernei is an ancient Kazakh wind instrument shaped like a long tube. It is distinguished by its loud, powerful sound that can be heard from a considerable distance.",


        // ----------------------------------------------------
        // SAZSYRNAI
        // ----------------------------------------------------

        sazsyrnai_title:
            "Sazsyrnai",

        sazsyrnai_short:
            "The sazsyrnai is a small ancient Kazakh clay wind instrument with a soft and melodic sound.",

        sazsyrnai_desc:
            "The sazsyrnai is a small ancient Kazakh wind instrument made of clay. It is distinguished by its soft, calm and melodic sound.",


        // ----------------------------------------------------
        // DESCRIPTION BUTTONS
        // ----------------------------------------------------

        show_more:
            "Show full description",

        show_less:
            "Hide full description",


        // ----------------------------------------------------
        // KUI BY MOOD
        // ----------------------------------------------------

        mood_title:
            "🎶 Kui Selection by Mood",

        mood_desc:
            "Choose your mood and get a Kazakh kui recommendation.",

        mood_opt_default:
            "-- Choose a mood --",

        mood_opt_happy:
            "😊 Happy",

        mood_opt_calm:
            "😌 Calm",

        mood_opt_sad:
            "😔 Sad",

        mood_opt_energetic:
            "⚡ Energetic",

        mood_opt_inspired:
            "✨ Inspired",

        btn_recommend:
            "Choose a Kui",

        result_default:
            "Recommendation",

        result_select_mood:
            "Please choose a mood.",

        result_title:
            "🎵 Recommended kui:",


        // ----------------------------------------------------
        // VOICE CONTROL
        // ----------------------------------------------------

        voice_title:
            "🎤 Voice Control",

        voice_description:
            "Control the virtual museum using your voice. Say the name of a musical instrument to play its sound. You can also ask the assistant to read the instrument's full description.",

        voice_button:
            "🎤 Voice Control",

        voice_status:
            "Press the button and speak",

        voice_command:
            "Command not recognized yet.",

        voice_live:
            "🎧 Recognized speech will appear here.",

        voice_help_title:
            "Voice command examples:",

        voice_commands: [

            "🎵 “Dombra” — play the dombra",

            "🎵 “Kobyz” — play the kobyz",

            "🎵 “Zhetygen” — play the zhetygen",

            "🎵 “Sybyzgy” — play the sybyzgy",

            "🎵 “Shankobyz” — play the shankobyz",

            "🎵 “Asatayak” — play the asatayak",

            "🎵 “Dauylpaz” — play the dauylpaz",

            "🎵 “Kernei” — play the kernei",

            "🎵 “Sazsyrnai” — play the sazsyrnai",

            "🔊 “Dombra description” — read the full description of the dombra",

            "🔊 “Kobyz description” — read the full description of the kobyz",

            "⛔ “Stop” — stop music or speech"

        ],


        footer:
            "© 2026 Virtual Museum of Kazakh Musical Instruments"

    }

};


// ============================================================
// ТЕКУЩИЙ ЯЗЫК
// ============================================================
//
// ВАЖНО:
// Если пользователь ещё ни разу не выбирал язык,
// сайт открывается НА КАЗАХСКОМ.
//
// Если пользователь уже выбирал язык,
// запоминаем его выбор.
// ============================================================

let currentLanguage =
    localStorage.getItem("museumLanguage") || "kk";


// ============================================================
// ИНСТРУМЕНТЫ
// ============================================================

const instruments = {

    dombra: {

        name: {
            kk: "Домбыра",
            ru: "Домбра",
            en: "Dombra"
        },

        audio: "audio-dombra",

        shortKey: "dombra_short",

        descriptionKey: "dombra_desc"

    },


    kobyz: {

        name: {
            kk: "Қобыз",
            ru: "Кобыз",
            en: "Kobyz"
        },

        audio: "audio-kobyz",

        shortKey: "kobyz_short",

        descriptionKey: "kobyz_desc"

    },


    zhetygen: {

        name: {
            kk: "Жетіген",
            ru: "Жетыген",
            en: "Zhetygen"
        },

        audio: "audio-zhetygen",

        shortKey: "zhetygen_short",

        descriptionKey: "zhetygen_desc"

    },


    sybyzgy: {

        name: {
            kk: "Сыбызғы",
            ru: "Сыбызгы",
            en: "Sybyzgy"
        },

        audio: "audio-sybyzgy",

        shortKey: "sybyzgy_short",

        descriptionKey: "sybyzgy_desc"

    },


    shankobyz: {

        name: {
            kk: "Шаңқобыз",
            ru: "Шанкобыз",
            en: "Shankobyz"
        },

        audio: "audio-shankobyz",

        shortKey: "shankobyz_short",

        descriptionKey: "shankobyz_desc"

    },


    asatayak: {

        name: {
            kk: "Асатаяқ",
            ru: "Асатаяк",
            en: "Asatayak"
        },

        audio: "audio-asatayak",

        shortKey: "asatayak_short",

        descriptionKey: "asatayak_desc"

    },


    dauylpaz: {

        name: {
            kk: "Дауылпаз",
            ru: "Дауылпаз",
            en: "Dauylpaz"
        },

        audio: "audio-dauylpaz",

        shortKey: "dauylpaz_short",

        descriptionKey: "dauylpaz_desc"

    },


    kernei: {

        name: {
            kk: "Керней",
            ru: "Керней",
            en: "Kernei"
        },

        audio: "audio-kernei",

        shortKey: "kernei_short",

        descriptionKey: "kernei_desc"

    },


    sazsyrnai: {

        name: {
            kk: "Сазсырнай",
            ru: "Сазсырнай",
            en: "Sazsyrnai"
        },

        audio: "audio-sazsyrnai",

        shortKey: "sazsyrnai_short",

        descriptionKey: "sazsyrnai_desc"

    }

};
// ============================================================
// РЕКОМЕНДАЦИИ КЮЕВ ПО НАСТРОЕНИЮ
// ============================================================

const kuiRecommendations = {

    "весёлое": {

        kk: {
            title: "Балбырауын",
            description:
                "Қуанышты және мерекелік көңіл-күй сыйлайтын жігерлі күй."
        },

        ru: {
            title: "Балбырауын",
            description:
                "Весёлый и праздничный кюй с энергичным характером."
        },

        en: {
            title: "Balbyrauyn",
            description:
                "A joyful and festive kui with an energetic character."
        },

        audio: "kuis/balbyrauyn.mp3"
    },


    "спокойное": {

        kk: {
            title: "Аққу",
            description:
                "Жұмсақ әрі тыныш әуені бар нәзік күй."
        },

        ru: {
            title: "Аққу",
            description:
                "Нежный и спокойный кюй с мягким и мелодичным характером."
        },

        en: {
            title: "Akku",
            description:
                "A gentle and peaceful kui with a soft melodic character."
        },

        audio: "kuis/akku.mp3"
    },


    "грустное": {

        kk: {
            title: "Көңіл толқыны",
            description:
                "Ойлануға және терең сезімдерге арналған лирикалық күй."
        },

        ru: {
            title: "Көңіл толқыны",
            description:
                "Лирический кюй для спокойного размышления и глубоких чувств."
        },

        en: {
            title: "Konil Tolkyny",
            description:
                "A lyrical kui for quiet reflection and deep emotions."
        },

        audio: "kuis/konil_tolkyny.mp3"
    },


    "энергичное": {

        kk: {
            title: "Адай",
            description:
                "Күшті, жігерлі, еркіндік пен қозғалысты бейнелейтін күй."
        },

        ru: {
            title: "Адай",
            description:
                "Мощный и энергичный кюй, передающий силу, свободу и движение."
        },

        en: {
            title: "Adai",
            description:
                "A powerful and energetic kui expressing strength, freedom and movement."
        },

        audio: "kuis/adai.mp3"
    },


    "вдохновение": {

        kk: {
            title: "Ерке сылқым",
            description:
                "Жеңіл әрі әсерлі әуені бар әдемі және шабыттандыратын күй."
        },

        ru: {
            title: "Ерке сылқым",
            description:
                "Красивый и вдохновляющий кюй с лёгким и выразительным характером."
        },

        en: {
            title: "Erke Sylkym",
            description:
                "A beautiful and inspiring kui with a light and expressive character."
        },

        audio: "kuis/erke_sylkym.mp3"
    }

};

// ============================================================
// СОСТОЯНИЕ ГОЛОСОВОГО УПРАВЛЕНИЯ
// ============================================================

let recognition = null;

let voiceActive = false;

let isSpeaking = false;

let commandBuffer = "";

let commandTimer = null;


// ============================================================
// ОСТАНОВИТЬ ВСЮ МУЗЫКУ
// ============================================================

function stopAllAudio() {

    document
        .querySelectorAll("audio")
        .forEach(audio => {

            try {
                audio.pause();
            }
            catch (_) {}

            try {
                audio.currentTime = 0;
            }
            catch (_) {}

        });

}


// ============================================================
// ОСТАНОВИТЬ ОЗВУЧИВАНИЕ
// ============================================================

function stopSpeech() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

    isSpeaking = false;

}


// ============================================================
// ПОЛУЧИТЬ НАЗВАНИЕ ИНСТРУМЕНТА
// ============================================================

function getInstrumentName(key) {

    const instrument = instruments[key];

    if (!instrument) {
        return "";
    }

    return (
        instrument.name[currentLanguage] ||
        instrument.name.kk
    );

}


// ============================================================
// ПОЛУЧИТЬ КРАТКОЕ ОПИСАНИЕ
// ============================================================

function getInstrumentShortDescription(key) {

    const instrument = instruments[key];

    if (!instrument) {
        return "";
    }

    const translation =
        translations[currentLanguage] ||
        translations.kk;

    return (
        translation[instrument.shortKey] ||
        ""
    );

}


// ============================================================
// ПОЛУЧИТЬ ПОЛНОЕ ОПИСАНИЕ
// ============================================================

function getInstrumentDescription(key) {

    const instrument = instruments[key];

    if (!instrument) {
        return "";
    }

    const translation =
        translations[currentLanguage] ||
        translations.kk;

    return (
        translation[instrument.descriptionKey] ||
        ""
    );

}


// ============================================================
// СОЗДАНИЕ КНОПОК "ПОЛНОЕ ОПИСАНИЕ"
// ============================================================
//
// Функция работает с существующими карточками из index.html.
// Она заменяет обычный текст описания на:
//
// 1. краткое описание;
// 2. полное описание, скрытое по умолчанию;
// 3. кнопку "показать полное описание".
//
// Поэтому вручную добавлять кнопки в каждую карточку HTML
// не требуется.
// ============================================================

function setupInstrumentDescriptions() {

    Object.keys(instruments).forEach(key => {

        const descriptionElement =
            document.getElementById(
                "desc-" + key
            );

        if (!descriptionElement) {
            return;
        }


        // ----------------------------------------------------
        // Создаём контейнер
        // ----------------------------------------------------

        let wrapper =
            document.getElementById(
                "description-wrapper-" + key
            );


        if (!wrapper) {

            wrapper =
                document.createElement("div");

            wrapper.id =
                "description-wrapper-" + key;

            wrapper.className =
                "instrument-description-wrapper";


            // Вставляем контейнер перед старым описанием

            descriptionElement.parentNode.insertBefore(
                wrapper,
                descriptionElement
            );


            // Перемещаем старый элемент описания внутрь контейнера

            wrapper.appendChild(
                descriptionElement
            );

        }


        // ----------------------------------------------------
        // Краткое описание
        // ----------------------------------------------------

        descriptionElement.textContent =
            getInstrumentShortDescription(key);

        descriptionElement.classList.add(
            "short-description"
        );


        // ----------------------------------------------------
        // Полное описание
        // ----------------------------------------------------

        let fullDescription =
            document.getElementById(
                "full-desc-" + key
            );


        if (!fullDescription) {

            fullDescription =
                document.createElement("p");

            fullDescription.id =
                "full-desc-" + key;

            fullDescription.className =
                "card-description full-description";

            fullDescription.style.display =
                "none";

            wrapper.appendChild(
                fullDescription
            );

        }


        fullDescription.textContent =
            getInstrumentDescription(key);


        // ----------------------------------------------------
        // Кнопка
        // ----------------------------------------------------

        let button =
            document.getElementById(
                "description-button-" + key
            );


        if (!button) {

            button =
                document.createElement("button");

            button.id =
                "description-button-" + key;

            button.type =
                "button";

            button.className =
                "description-toggle-btn";

            button.dataset.instrument =
                key;

            button.dataset.expanded =
                "false";

            wrapper.appendChild(
                button
            );


            // ------------------------------------------------
            // Нажатие на кнопку
            // ------------------------------------------------

            button.addEventListener(
                "click",
                function() {

                    const instrumentKey =
                        this.dataset.instrument;

                    toggleInstrumentDescription(
                        instrumentKey
                    );

                }
            );

        }


        // ----------------------------------------------------
        // По умолчанию показываем краткое описание
        // ----------------------------------------------------

        if (
            button.dataset.expanded !==
            "true"
        ) {

            fullDescription.style.display =
                "none";

            button.textContent =
                translations[
                    currentLanguage
                ].show_more;

        }
        else {

            fullDescription.style.display =
                "block";

            button.textContent =
                translations[
                    currentLanguage
                ].show_less;

        }

    });

}


// ============================================================
// ПОКАЗАТЬ / СКРЫТЬ ПОЛНОЕ ОПИСАНИЕ
// ============================================================

function toggleInstrumentDescription(key) {

    const fullDescription =
        document.getElementById(
            "full-desc-" + key
        );

    const button =
        document.getElementById(
            "description-button-" + key
        );


    if (
        !fullDescription ||
        !button
    ) {

        return;

    }


    const expanded =
        button.dataset.expanded ===
        "true";


    if (expanded) {

        fullDescription.style.display =
            "none";

        button.dataset.expanded =
            "false";

        button.textContent =
            translations[
                currentLanguage
            ].show_more;

    }
    else {

        fullDescription.style.display =
            "block";

        button.dataset.expanded =
            "true";

        button.textContent =
            translations[
                currentLanguage
            ].show_less;

    }

}


// ============================================================
// ОБНОВЛЕНИЕ ОПИСАНИЙ ПОСЛЕ СМЕНЫ ЯЗЫКА
// ============================================================

function updateInstrumentDescriptions() {

    Object.keys(instruments).forEach(key => {

        const shortDescription =
            document.getElementById(
                "desc-" + key
            );

        const fullDescription =
            document.getElementById(
                "full-desc-" + key
            );

        const button =
            document.getElementById(
                "description-button-" + key
            );


        // ----------------------------------------------------
        // Краткое описание
        // ----------------------------------------------------

        if (shortDescription) {

            shortDescription.textContent =
                getInstrumentShortDescription(
                    key
                );

        }


        // ----------------------------------------------------
        // Полное описание
        // ----------------------------------------------------

        if (fullDescription) {

            fullDescription.textContent =
                getInstrumentDescription(
                    key
                );

        }


        // ----------------------------------------------------
        // Текст кнопки
        // ----------------------------------------------------

        if (button) {

            const expanded =
                button.dataset.expanded ===
                "true";


            button.textContent =
                expanded

                    ? translations[
                        currentLanguage
                    ].show_less

                    : translations[
                        currentLanguage
                    ].show_more;

        }

    });

}


// ============================================================
// ДОПОЛНИТЕЛЬНЫЙ СТИЛЬ ДЛЯ КНОПОК ОПИСАНИЯ
// ============================================================
//
// Добавляем CSS через JavaScript,
// чтобы вам не пришлось сейчас вручную менять style.css.
// ============================================================

function addDescriptionStyles() {

    if (
        document.getElementById(
            "descriptionStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "descriptionStyles";


    style.textContent = `

        .instrument-description-wrapper {
            margin-top: 12px;
            margin-bottom: 12px;
        }

        .short-description {
            margin-bottom: 10px !important;
        }

        .full-description {
            margin-top: 10px !important;
            padding-top: 10px;
            border-top: 1px solid #e2c75c;
        }

        .description-toggle-btn {
            display: inline-block;
            margin: 4px auto 12px;
            padding: 9px 17px;
            border: 2px solid #087ed3;
            border-radius: 20px;
            background: white;
            color: #087ed3;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
        }

        .description-toggle-btn:hover {
            background: #087ed3;
            color: white;
        }

    `;


    document.head.appendChild(
        style
    );

}


// ============================================================
// НОРМАЛИЗАЦИЯ РАСПОЗНАННОЙ РЕЧИ
// ============================================================

function normalizeSpeechText(text) {

    return String(text)

        .toLowerCase()

        .replace(/ё/g, "е")

        .replace(
            /[.,!?;:()[\]{}"'«»]/g,
            " "
        )

        .replace(
            /\s+/g,
            " "
        )

        .trim();

}


// ============================================================
// ОПРЕДЕЛИТЬ, ПРОСИТ ЛИ ПОЛЬЗОВАТЕЛЬ ОПИСАНИЕ
// ============================================================

function isDescriptionRequest(text) {

    const value =
        normalizeSpeechText(text);


    return (

        // Қазақша

        value.includes("туралы") ||

        value.includes("жайлы") ||

        value.includes("ақпарат") ||

        value.includes("ақпарат бер") ||

        value.includes("айтып бер") ||

        value.includes("сипаттап бер") ||

        value.includes("сипаттамасы") ||


        // Русский

        value.includes("описание") ||

        value.includes("опиши") ||

        value.includes("расскажи") ||

        value.includes("расскажи про") ||

        value.includes("расскажи о") ||

        value.includes("что такое") ||


        // English

        value.includes("description") ||

        value.includes("describe") ||

        value.includes("tell me") ||

        value.includes("tell me about") ||

        value.includes("about")

    );

}


// ============================================================
// ВЫБОР ГОЛОСА ДЛЯ ОЗВУЧИВАНИЯ
// ============================================================

function getBestSpeechVoice(language) {

    if (
        !("speechSynthesis" in window)
    ) {

        return null;

    }


    const voices =
        window.speechSynthesis.getVoices();


    if (
        !voices ||
        voices.length === 0
    ) {

        return null;

    }


    const target =
        language.toLowerCase();


    const short =
        target.split("-")[0];


    // --------------------------------------------------------
    // Сначала ищем точное совпадение языка
    // --------------------------------------------------------

    let voice =
        voices.find(
            item =>
                item.lang &&
                item.lang.toLowerCase() ===
                target
        );


    if (voice) {
        return voice;
    }


    // --------------------------------------------------------
    // Затем любой голос этого языка
    // --------------------------------------------------------

    voice =
        voices.find(
            item =>
                item.lang &&
                item.lang
                    .toLowerCase()
                    .startsWith(short)
        );


    if (voice) {
        return voice;
    }


    // --------------------------------------------------------
    // Для казахского языка:
    // если казахского голоса в браузере нет,
    // пробуем русский голос.
    //
    // Это только запасной вариант.
    // --------------------------------------------------------

    if (short === "kk") {

        voice =
            voices.find(
                item =>
                    item.lang &&
                    item.lang
                        .toLowerCase()
                        .startsWith("ru")
            );


        if (voice) {
            return voice;
        }

    }


    return voices[0] || null;

}
// ============================================================
// ОЗВУЧИВАНИЕ ПОЛНОГО ТЕКСТА
// ============================================================

function speakFullText(text) {

    if (
        !text ||
        !text.trim()
    ) {
        return;
    }


    // Останавливаем распознавание речи,
    // чтобы микрофон не распознавал голос помощника

    stopVoiceRecognition();


    // Останавливаем музыку

    stopAllAudio();


    // Останавливаем предыдущую озвучку

    stopSpeech();


    // --------------------------------------------------------
    // Язык озвучивания
    // --------------------------------------------------------

    let speechLanguage = "kk-KZ";

    if (currentLanguage === "ru") {

        speechLanguage = "ru-RU";

    }
    else if (currentLanguage === "en") {

        speechLanguage = "en-US";

    }


    const utterance =
        new SpeechSynthesisUtterance(
            text
        );


    utterance.lang =
        speechLanguage;

    utterance.rate =
        1.0;

    utterance.pitch =
        1.0;

    utterance.volume =
        1.0;


    const bestVoice =
        getBestSpeechVoice(
            speechLanguage
        );


    if (bestVoice) {

        utterance.voice =
            bestVoice;

    }


    // --------------------------------------------------------
    // Начало озвучивания
    // --------------------------------------------------------

    utterance.onstart =
        function () {

            isSpeaking = true;


            const button =
                document.getElementById(
                    "voiceButton"
                );


            const status =
                document.getElementById(
                    "voiceStatus"
                );


            if (button) {

                button.classList.remove(
                    "listening"
                );

                button.classList.add(
                    "speaking"
                );


                button.textContent =
                    currentLanguage === "kk"

                        ? "🔊 Оқып жатырмын..."

                        : currentLanguage === "en"

                            ? "🔊 Speaking..."

                            : "🔊 Озвучивание...";

            }


            if (status) {

                status.textContent =
                    currentLanguage === "kk"

                        ? "🔊 Аспап туралы ақпаратты оқып жатырмын..."

                        : currentLanguage === "en"

                            ? "🔊 Reading the instrument description..."

                            : "🔊 Читаю описание инструмента...";

            }

        };


    // --------------------------------------------------------
    // Конец озвучивания
    // --------------------------------------------------------

    utterance.onend =
        function () {

            isSpeaking = false;


            const button =
                document.getElementById(
                    "voiceButton"
                );


            const status =
                document.getElementById(
                    "voiceStatus"
                );


            if (button) {

                button.classList.remove(
                    "speaking"
                );

                button.textContent =
                    translations[
                        currentLanguage
                    ].voice_button;

            }


            if (status) {

                status.textContent =
                    translations[
                        currentLanguage
                    ].voice_status;

            }

        };


    // --------------------------------------------------------
    // Ошибка озвучивания
    // --------------------------------------------------------

    utterance.onerror =
        function (event) {

            isSpeaking = false;


            console.log(
                "Speech error:",
                event.error
            );


            const button =
                document.getElementById(
                    "voiceButton"
                );


            const status =
                document.getElementById(
                    "voiceStatus"
                );


            if (button) {

                button.classList.remove(
                    "speaking"
                );

                button.textContent =
                    translations[
                        currentLanguage
                    ].voice_button;

            }


            if (status) {

                status.textContent =
                    currentLanguage === "kk"

                        ? "❌ Дауыс шығару қатесі"

                        : currentLanguage === "en"

                            ? "❌ Speech error"

                            : "❌ Ошибка озвучивания";

            }

        };


    // Небольшая задержка помогает некоторым браузерам

    setTimeout(
        function () {

            window.speechSynthesis.resume();

            window.speechSynthesis.speak(
                utterance
            );

        },
        100
    );

}


// ============================================================
// ОЗВУЧИТЬ ПОЛНОЕ ОПИСАНИЕ ИНСТРУМЕНТА
// ============================================================

function speakDescription(key) {

    const name =
        getInstrumentName(key);


    const description =
        getInstrumentDescription(key);


    if (
        !name ||
        !description
    ) {

        return;

    }


    // Озвучиваем название + ПОЛНОЕ описание

    const text =
        name +
        ". " +
        description;


    speakFullText(
        text
    );

}


// ============================================================
// ВОСПРОИЗВЕСТИ ЗВУК ИНСТРУМЕНТА
// ============================================================

function playInstrument(key) {

    const instrument =
        instruments[key];


    if (!instrument) {
        return;
    }


    // Останавливаем озвучивание

    stopSpeech();


    // Останавливаем предыдущую музыку

    stopAllAudio();


    const audio =
        document.getElementById(
            instrument.audio
        );


    if (!audio) {

        console.error(
            "Audio not found:",
            instrument.audio
        );

        return;

    }


    audio.currentTime = 0;


    audio.play()

        .then(
            function () {

                const status =
                    document.getElementById(
                        "voiceStatus"
                    );


                if (status) {

                    status.textContent =
                        "🎵 " +
                        getInstrumentName(
                            key
                        );

                }

            }
        )

        .catch(
            function (error) {

                console.log(
                    "Audio playback error:",
                    error
                );

            }
        );

}


// ============================================================
// КОМАНДА "СТОП"
// ============================================================

function processStopCommand() {

    stopAllAudio();

    stopSpeech();


    const status =
        document.getElementById(
            "voiceStatus"
        );


    if (status) {

        status.textContent =
            currentLanguage === "kk"

                ? "⛔ Тоқтатылды"

                : currentLanguage === "en"

                    ? "⛔ Stopped"

                    : "⛔ Остановлено";

    }

}


// ============================================================
// ОБРАБОТКА ГОЛОСОВОЙ КОМАНДЫ
// ============================================================

function processVoiceCommand(rawText) {

    const text =
        normalizeSpeechText(
            rawText
        );


    console.log(
        "VOICE COMMAND:",
        text
    );


    // ========================================================
    // СТОП
    // ========================================================

    if (

        text === "стоп" ||

        text.includes("стоп") ||

        text.includes("останови") ||

        text.includes("остановить") ||

        text.includes("хватит") ||

        text.includes("выключи музыку") ||

        text.includes("тоқтат") ||

        text.includes("тоқта") ||

        text.includes("музыканы тоқтат") ||

        text === "stop" ||

        text.includes("stop music") ||

        text.includes("stop audio")

    ) {

        processStopCommand();

        return;

    }


    // ========================================================
    // ДОМБРА / ДОМБЫРА
    // ========================================================

    const isDombra =

        text.includes("домбра") ||

        text.includes("домбру") ||

        text.includes("домбры") ||

        text.includes("домбыра") ||

        text.includes("домбыраны") ||

        text.includes("домбыраның") ||

        text.includes("dombra") ||

        text.includes("dombyra");


    if (isDombra) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "dombra"
            );

        }
        else {

            playInstrument(
                "dombra"
            );

        }


        return;

    }


    // ========================================================
    // КОБЫЗ / ҚОБЫЗ
    // ========================================================

    const isKobyz =

        text.includes("кобыз") ||

        text.includes("кобыза") ||

        text.includes("кобызе") ||

        text.includes("қобыз") ||

        text.includes("қобыздың") ||

        text.includes("қобыз туралы") ||

        text.includes("kobyz");


    if (isKobyz) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "kobyz"
            );

        }
        else {

            playInstrument(
                "kobyz"
            );

        }


        return;

    }


    // ========================================================
    // ЖЕТЫГЕН / ЖЕТІГЕН
    // ========================================================

    const isZhetygen =

        text.includes("жетыген") ||

        text.includes("жетыгена") ||

        text.includes("жетыгене") ||

        text.includes("жетіген") ||

        text.includes("жетігеннің") ||

        text.includes("zhetygen");


    if (isZhetygen) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "zhetygen"
            );

        }
        else {

            playInstrument(
                "zhetygen"
            );

        }


        return;

    }


    // ========================================================
    // СЫБЫЗГЫ / СЫБЫЗҒЫ
    // ========================================================

    const isSybyzgy =

        text.includes("сыбызги") ||

        text.includes("сыбызгы") ||

        text.includes("сыбызғы") ||

        text.includes("сыбызғының") ||

        text.includes("sybyzgy");


    if (isSybyzgy) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "sybyzgy"
            );

        }
        else {

            playInstrument(
                "sybyzgy"
            );

        }


        return;

    }


    // ========================================================
    // ШАНКОБЫЗ / ШАҢҚОБЫЗ
    // ========================================================

    const isShankobyz =

        text.includes("шанкобыз") ||

        text.includes("шанкобыза") ||

        text.includes("шан кобыз") ||

        text.includes("шаңқобыз") ||

        text.includes("шаңқобыздың") ||

        text.includes("shankobyz");


    if (isShankobyz) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "shankobyz"
            );

        }
        else {

            playInstrument(
                "shankobyz"
            );

        }


        return;

    }


    // ========================================================
    // АСАТАЯК / АСАТАЯҚ
    // ========================================================

    const isAsatayak =

        text.includes("асатаяк") ||

        text.includes("асатаяка") ||

        text.includes("асатаяқ") ||

        text.includes("асатаяқтың") ||

        text.includes("asatayak");


    if (isAsatayak) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "asatayak"
            );

        }
        else {

            playInstrument(
                "asatayak"
            );

        }


        return;

    }


    // ========================================================
    // ДАУЫЛПАЗ
    // ========================================================

    const isDauylpaz =

        text.includes("дауылпаз") ||

        text.includes("дауылпаза") ||

        text.includes("дауылпас") ||

        text.includes("дауылпаздың") ||

        text.includes("dauylpaz");


    if (isDauylpaz) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "dauylpaz"
            );

        }
        else {

            playInstrument(
                "dauylpaz"
            );

        }


        return;

    }


    // ========================================================
    // КЕРНЕЙ
    // ========================================================

    const isKernei =

        text.includes("керней") ||

        text.includes("кернея") ||

        text.includes("кернейдің") ||

        text.includes("kernei") ||

        text.includes("kerney");


    if (isKernei) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "kernei"
            );

        }
        else {

            playInstrument(
                "kernei"
            );

        }


        return;

    }


    // ========================================================
    // САЗСЫРНАЙ
    // ========================================================

    const isSazsyrnai =

        text.includes("сазсырнай") ||

        text.includes("сазсырная") ||

        text.includes("сазсырнаю") ||

        text.includes("саз сырнай") ||

        text.includes("сазсырнайдың") ||

        text.includes("sazsyrnai") ||

        text.includes("sazsyrnay");


    if (isSazsyrnai) {

        if (
            isDescriptionRequest(
                text
            )
        ) {

            speakDescription(
                "sazsyrnai"
            );

        }
        else {

            playInstrument(
                "sazsyrnai"
            );

        }


        return;

    }


    // ========================================================
    // КОМАНДА НЕ РАСПОЗНАНА
    // ========================================================

    const status =
        document.getElementById(
            "voiceStatus"
        );


    if (status) {

        status.textContent =
            currentLanguage === "kk"

                ? "❓ Команда танылмады"

                : currentLanguage === "en"

                    ? "❓ Command not recognized"

                    : "❓ Команда не распознана";

    }

}


// ============================================================
// ОСТАНОВИТЬ РАСПОЗНАВАНИЕ РЕЧИ
// ============================================================

function stopVoiceRecognition() {

    voiceActive = false;


    // Останавливаем таймер команды

    if (commandTimer) {

        clearTimeout(
            commandTimer
        );

        commandTimer = null;

    }


    commandBuffer = "";


    // Останавливаем SpeechRecognition

    if (recognition) {

        try {

            recognition.abort();

        }
        catch (_) {}

    }


    recognition = null;


    const button =
        document.getElementById(
            "voiceButton"
        );


    if (button) {

        button.classList.remove(
            "listening"
        );


        if (!isSpeaking) {

            button.textContent =
                translations[
                    currentLanguage
                ].voice_button;

        }

    }

}


// ============================================================
// ЗАПУСК РАСПОЗНАВАНИЯ РЕЧИ
// ============================================================

function startVoiceRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    // --------------------------------------------------------
    // Проверяем поддержку браузером
    // --------------------------------------------------------

    if (!SpeechRecognition) {

        alert(

            currentLanguage === "kk"

                ? "Браузеріңіз дауысты тануды қолдамайды. Microsoft Edge немесе Google Chrome қолданыңыз."

                : currentLanguage === "en"

                    ? "Your browser does not support speech recognition. Please use Microsoft Edge or Google Chrome."

                    : "Ваш браузер не поддерживает распознавание речи. Используйте Microsoft Edge или Google Chrome."

        );


        return;

    }


    // --------------------------------------------------------
    // Повторное нажатие останавливает микрофон
    // --------------------------------------------------------

    if (voiceActive) {

        stopVoiceRecognition();

        return;

    }


    // --------------------------------------------------------
    // Если помощник сейчас говорит — останавливаем его
    // --------------------------------------------------------

    if (isSpeaking) {

        stopSpeech();

        return;

    }


    voiceActive = true;

    commandBuffer = "";


    const button =
        document.getElementById(
            "voiceButton"
        );


    const status =
        document.getElementById(
            "voiceStatus"
        );


    const command =
        document.getElementById(
            "voiceCommand"
        );


    const live =
        document.getElementById(
            "voiceLiveText"
        );


    // --------------------------------------------------------
    // Кнопка
    // --------------------------------------------------------

    if (button) {

        button.classList.remove(
            "speaking"
        );

        button.classList.add(
            "listening"
        );


        button.textContent =
            currentLanguage === "kk"

                ? "🔴 Тыңдап тұрмын..."

                : currentLanguage === "en"

                    ? "🔴 Listening..."

                    : "🔴 Слушаю...";

    }


    // --------------------------------------------------------
    // Статус
    // --------------------------------------------------------

    if (status) {

        status.textContent =
            currentLanguage === "kk"

                ? "Анық сөйлеңіз..."

                : currentLanguage === "en"

                    ? "Speak clearly..."

                    : "Говорите чётко...";

    }


    // --------------------------------------------------------
    // Пример команды
    // --------------------------------------------------------

    if (command) {

        command.textContent =
            currentLanguage === "kk"

                ? "Мысалы: «Домбыра туралы»"

                : currentLanguage === "en"

                    ? 'For example: "Tell me about dombra"'

                    : "Например: «Расскажи про домбру»";

    }


    if (live) {

        live.textContent =
            currentLanguage === "kk"

                ? "🎧 Тыңдап тұрмын..."

                : currentLanguage === "en"

                    ? "🎧 Listening..."

                    : "🎧 Слушаю...";

    }


    // --------------------------------------------------------
    // Создаём распознавание
    // --------------------------------------------------------

    recognition =
        new SpeechRecognition();


    recognition.lang =
        currentLanguage === "kk"

            ? "kk-KZ"

            : currentLanguage === "en"

                ? "en-US"

                : "ru-RU";


    recognition.continuous =
        true;


    recognition.interimResults =
        true;


    recognition.maxAlternatives =
        5;


    // ========================================================
    // ПОЛУЧЕН РЕЗУЛЬТАТ
    // ========================================================

    recognition.onresult =
        function (event) {

            let finalText = "";

            let interimText = "";


            for (
                let i = event.resultIndex;
                i < event.results.length;
                i++
            ) {

                const result =
                    event.results[i];


                const transcript =
                    result[0].transcript;


                if (result.isFinal) {

                    finalText +=
                        transcript + " ";

                }
                else {

                    interimText +=
                        transcript + " ";

                }

            }


            finalText =
                normalizeSpeechText(
                    finalText
                );


            interimText =
                interimText.trim();


            // ------------------------------------------------
            // Показываем распознаваемый текст
            // ------------------------------------------------

            if (live) {

                if (finalText) {

                    live.textContent =
                        "🎧 " +
                        finalText;

                }
                else if (interimText) {

                    live.textContent =
                        "🎧 " +
                        interimText;

                }

            }


            // =================================================
            // ФИНАЛЬНАЯ ФРАЗА
            // =================================================

            if (finalText) {

                commandBuffer +=
                    " " +
                    finalText;


                commandBuffer =
                    normalizeSpeechText(
                        commandBuffer
                    );


                // Показываем полученную команду

                if (command) {

                    command.textContent =
                        currentLanguage === "kk"

                            ? "Команда: " +
                              commandBuffer

                            : currentLanguage === "en"

                                ? "Command: " +
                                  commandBuffer

                                : "Команда: " +
                                  commandBuffer;

                }


                // ------------------------------------------------
                // Ждём короткую паузу.
                //
                // Это нужно, потому что браузер иногда делит
                // фразу "Домбыра туралы" на две части:
                //
                // "Домбыра"
                // "туралы"
                //
                // ------------------------------------------------

                if (commandTimer) {

                    clearTimeout(
                        commandTimer
                    );

                }


                commandTimer =
                    setTimeout(
                        function () {

                            const commandToProcess =
                                commandBuffer;


                            commandBuffer = "";

                            commandTimer = null;


                            if (commandToProcess) {

                                processVoiceCommand(
                                    commandToProcess
                                );

                            }

                        },
                        850
                    );

            }

        };


    // ========================================================
    // ОШИБКИ РАСПОЗНАВАНИЯ
    // ========================================================

    recognition.onerror =
        function (event) {

            console.log(
                "SpeechRecognition error:",
                event.error
            );


            // ------------------------------------------------
            // Нет разрешения на микрофон
            // ------------------------------------------------

            if (
                event.error ===
                "not-allowed"
            ) {

                voiceActive = false;


                if (status) {

                    status.textContent =
                        currentLanguage === "kk"

                            ? "❌ Микрофонға рұқсат берілмеді"

                            : currentLanguage === "en"

                                ? "❌ Microphone access denied"

                                : "❌ Доступ к микрофону запрещён";

                }


                return;

            }


            // ------------------------------------------------
            // Микрофон недоступен
            // ------------------------------------------------

            if (
                event.error ===
                "audio-capture"
            ) {

                voiceActive = false;


                if (status) {

                    status.textContent =
                        currentLanguage === "kk"

                            ? "❌ Микрофон табылмады"

                            : currentLanguage === "en"

                                ? "❌ Microphone not found"

                                : "❌ Микрофон не найден";

                }


                return;

            }


            // no-speech не считаем серьёзной ошибкой

            if (
                event.error ===
                "no-speech"
            ) {

                return;

            }

        };


    // ========================================================
    // РАСПОЗНАВАНИЕ ЗАВЕРШИЛОСЬ
    // ========================================================

    recognition.onend =
        function () {

            recognition = null;

            voiceActive = false;


            if (button) {

                button.classList.remove(
                    "listening"
                );


                if (!isSpeaking) {

                    button.textContent =
                        translations[
                            currentLanguage
                        ].voice_button;

                }

            }

        };


    // ========================================================
    // ЗАПУСК МИКРОФОНА
    // ========================================================

    try {

        recognition.start();

    }
    catch (error) {

        console.error(
            "Recognition start error:",
            error
        );


        voiceActive = false;

    }

}
// ============================================================
// ПОДБОР КЮЯ ПО НАСТРОЕНИЮ
// ============================================================

function chooseMusic() {

    const select =
        document.getElementById(
            "moodSelect"
        );

    const result =
        document.getElementById(
            "result"
        );

    const player =
        document.getElementById(
            "player"
        );


    if (
        !select ||
        !result ||
        !player
    ) {
        return;
    }


    const mood =
        select.value;


    // --------------------------------------------------------
    // Настроение не выбрано
    // --------------------------------------------------------

    if (!mood) {

        result.innerHTML = `

            <div class="recommendation-box">

                <p>
                    ${
                        translations[
                            currentLanguage
                        ].result_select_mood
                    }
                </p>

            </div>

        `;


        player.pause();

        player.removeAttribute(
            "src"
        );

        player.style.display =
            "none";


        return;

    }


    const kui =
        kuiRecommendations[mood];


    if (!kui) {
        return;
    }


    const info =
        kui[currentLanguage] ||
        kui.kk;


    // Останавливаем другие звуки

    stopSpeech();

    stopAllAudio();


    // --------------------------------------------------------
    // Показываем рекомендацию
    // --------------------------------------------------------

    result.innerHTML = `

        <div class="recommendation-box">

            <h3>
                ${
                    translations[
                        currentLanguage
                    ].result_title
                }
            </h3>

            <h2>
                ${info.title}
            </h2>

            <p class="recommendation-description">
                ${info.description}
            </p>

        </div>

    `;


    // --------------------------------------------------------
    // Загружаем аудио
    // --------------------------------------------------------

    player.src =
        kui.audio;


    player.style.display =
        "block";


    player.load();


    player.play()
        .catch(
            function () {

                console.log(
                    "Автоматическое воспроизведение заблокировано браузером."
                );

            }
        );


    // Запоминаем выбранное настроение

    localStorage.setItem(
        "selectedMood",
        mood
    );


    // Плавно прокручиваем к результату

    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ============================================================
// ПОКАЗАТЬ ТЕКУЩИЙ ВЫБРАННЫЙ КЮЙ
// ============================================================
//
// Эта функция нужна после переключения языка.
// Музыку повторно не запускаем,
// а только переводим название/описание результата.
// ============================================================

function showCurrentKui(mood) {

    const result =
        document.getElementById(
            "result"
        );


    if (!result) {
        return;
    }


    const kui =
        kuiRecommendations[mood];


    if (!kui) {
        return;
    }


    const info =
        kui[currentLanguage] ||
        kui.kk;


    result.innerHTML = `

        <div class="recommendation-box">

            <h3>
                ${
                    translations[
                        currentLanguage
                    ].result_title
                }
            </h3>

            <h2>
                ${info.title}
            </h2>

            <p class="recommendation-description">
                ${info.description}
            </p>

        </div>

    `;

}


// ============================================================
// ОБНОВИТЬ СПИСОК НАСТРОЕНИЙ
// ============================================================

function updateMoodOptions(lang) {

    const select =
        document.getElementById(
            "moodSelect"
        );


    if (!select) {
        return;
    }


    // Запоминаем текущее значение,
    // чтобы оно не исчезало при смене языка.

    const oldValue =
        select.value;


    select.innerHTML = `

        <option value="">
            ${translations[lang].mood_opt_default}
        </option>

        <option value="весёлое">
            ${translations[lang].mood_opt_happy}
        </option>

        <option value="спокойное">
            ${translations[lang].mood_opt_calm}
        </option>

        <option value="грустное">
            ${translations[lang].mood_opt_sad}
        </option>

        <option value="энергичное">
            ${translations[lang].mood_opt_energetic}
        </option>

        <option value="вдохновение">
            ${translations[lang].mood_opt_inspired}
        </option>

    `;


    if (
        oldValue &&
        kuiRecommendations[oldValue]
    ) {

        select.value =
            oldValue;

    }

}


// ============================================================
// СМЕНА ЯЗЫКА
// ============================================================

function changeLanguage(lang) {

    // Если передан неизвестный язык,
    // используем казахский.

    if (!translations[lang]) {

        lang = "kk";

    }


    currentLanguage =
        lang;


    // Запоминаем язык

    localStorage.setItem(
        "museumLanguage",
        lang
    );


    // Меняем язык страницы

    document.documentElement.lang =
        lang === "kk"
            ? "kk"
            : lang;


    // ========================================================
    // ОБЫЧНЫЕ ЭЛЕМЕНТЫ data-i18n
    // ========================================================

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            element => {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                // Описания карточек здесь НЕ обновляем.
                // Они обновляются отдельной функцией,
                // потому что теперь имеют краткий и полный текст.

                if (
                    key &&
                    (
                        key.endsWith("_desc") ||
                        key.endsWith("_short")
                    )
                ) {

                    return;

                }


                if (
                    translations[lang][key] !==
                    undefined
                ) {

                    element.textContent =
                        translations[lang][key];

                }

            }
        );


    // ========================================================
    // ОБНОВЛЯЕМ КРАТКИЕ И ПОЛНЫЕ ОПИСАНИЯ
    // ========================================================

    updateInstrumentDescriptions();


    // ========================================================
    // ГОЛОСОВОЙ БЛОК
    // ========================================================

    const voiceTitle =
        document.querySelector(
            ".voice-section h2"
        );


    const voiceDescription =
        document.querySelector(
            ".voice-section > p"
        );


    const voiceButton =
        document.getElementById(
            "voiceButton"
        );


    const voiceStatus =
        document.getElementById(
            "voiceStatus"
        );


    const voiceCommand =
        document.getElementById(
            "voiceCommand"
        );


    const voiceLiveText =
        document.getElementById(
            "voiceLiveText"
        );


    const voiceHelpTitle =
        document.querySelector(
            ".voice-help h3"
        );


    const voiceExamples =
        document.querySelectorAll(
            ".voice-help p"
        );


    // --------------------------------------------------------
    // Заголовок голосового блока
    // --------------------------------------------------------

    if (voiceTitle) {

        voiceTitle.textContent =
            translations[
                lang
            ].voice_title;

    }


    // --------------------------------------------------------
    // Описание голосового блока
    // --------------------------------------------------------

    if (voiceDescription) {

        voiceDescription.textContent =
            translations[
                lang
            ].voice_description;

    }


    // --------------------------------------------------------
    // Кнопка
    // --------------------------------------------------------

    if (
        voiceButton &&
        !isSpeaking &&
        !voiceActive
    ) {

        voiceButton.textContent =
            translations[
                lang
            ].voice_button;

    }


    // --------------------------------------------------------
    // Статус
    // --------------------------------------------------------

    if (
        voiceStatus &&
        !isSpeaking &&
        !voiceActive
    ) {

        voiceStatus.textContent =
            translations[
                lang
            ].voice_status;

    }


    // --------------------------------------------------------
    // Команда
    // --------------------------------------------------------

    if (voiceCommand) {

        voiceCommand.textContent =
            translations[
                lang
            ].voice_command;

    }


    // --------------------------------------------------------
    // Живой распознанный текст
    // --------------------------------------------------------

    if (voiceLiveText) {

        voiceLiveText.textContent =
            translations[
                lang
            ].voice_live;

    }


    // --------------------------------------------------------
    // Заголовок примеров команд
    // --------------------------------------------------------

    if (voiceHelpTitle) {

        voiceHelpTitle.textContent =
            translations[
                lang
            ].voice_help_title;

    }


    // --------------------------------------------------------
    // Примеры команд
    // --------------------------------------------------------

    voiceExamples.forEach(
        (element, index) => {

            const list =
                translations[
                    lang
                ].voice_commands;


            if (
                list &&
                list[index] !==
                undefined
            ) {

                element.textContent =
                    list[index];

            }
            else {

                // Если в HTML старых строк больше,
                // чем переводов, скрываем лишние.

                element.style.display =
                    "none";

            }

        }
    );


    // Снова показываем нужные строки,
    // если язык поменяли несколько раз.

    voiceExamples.forEach(
        (element, index) => {

            const list =
                translations[
                    lang
                ].voice_commands;


            if (
                list &&
                list[index] !==
                undefined
            ) {

                element.style.display =
                    "";

            }

        }
    );


    // ========================================================
    // СПИСОК НАСТРОЕНИЙ
    // ========================================================

    updateMoodOptions(
        lang
    );


    // ========================================================
    // ЕСЛИ УЖЕ БЫЛ ВЫБРАН КЮЙ,
    // ПЕРЕВОДИМ РЕЗУЛЬТАТ
    // ========================================================

    const moodSelect =
        document.getElementById(
            "moodSelect"
        );


    if (
        moodSelect &&
        moodSelect.value
    ) {

        showCurrentKui(
            moodSelect.value
        );

    }

}


// ============================================================
// ПЕРВЫЙ ЗАПУСК САЙТА
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // ====================================================
        // СТИЛИ КНОПОК ОПИСАНИЯ
        // ====================================================

        addDescriptionStyles();


        // ====================================================
        // ВЫБОР ЯЗЫКА
        // ====================================================

        const langSelect =
            document.getElementById(
                "langSelect"
            );


        const savedLanguage =
            localStorage.getItem(
                "museumLanguage"
            );


        // ----------------------------------------------------
        // Если язык раньше выбирали,
        // используем сохранённый.
        //
        // Если сайт открывается впервые —
        // используем КАЗАХСКИЙ.
        // ----------------------------------------------------

        if (
            savedLanguage &&
            translations[savedLanguage]
        ) {

            currentLanguage =
                savedLanguage;

        }
        else {

            currentLanguage =
                "kk";

        }


        // ====================================================
        // СОЗДАЁМ КРАТКИЕ / ПОЛНЫЕ ОПИСАНИЯ
        // ====================================================

        setupInstrumentDescriptions();


        // ====================================================
        // ПРИМЕНЯЕМ ЯЗЫК
        // ====================================================

        if (langSelect) {

            langSelect.value =
                currentLanguage;


            changeLanguage(
                currentLanguage
            );


            // -----------------------------------------------
            // Переключение языка пользователем
            // -----------------------------------------------

            langSelect.addEventListener(
                "change",
                function () {

                    // Останавливаем голос и микрофон
                    // при переключении языка.

                    stopVoiceRecognition();

                    stopSpeech();


                    changeLanguage(
                        this.value
                    );

                }
            );

        }
        else {

            changeLanguage(
                currentLanguage
            );

        }


        // ====================================================
        // КНОПКА ГОЛОСОВОГО УПРАВЛЕНИЯ
        // ====================================================

        const voiceButton =
            document.getElementById(
                "voiceButton"
            );


        if (voiceButton) {

            voiceButton.addEventListener(
                "click",
                startVoiceRecognition
            );

        }


        // ====================================================
        // КНОПКА "ПОДОБРАТЬ КЮЙ"
        // ====================================================

        const recommendButton =
            document.getElementById(
                "recommendButton"
            );


        if (recommendButton) {

            recommendButton.addEventListener(
                "click",
                chooseMusic
            );

        }


        // ====================================================
        // ВОССТАНОВЛЕНИЕ РАНЕЕ ВЫБРАННОГО НАСТРОЕНИЯ
        // ====================================================

        const moodSelect =
            document.getElementById(
                "moodSelect"
            );


        const savedMood =
            localStorage.getItem(
                "selectedMood"
            );


        if (
            moodSelect &&
            savedMood &&
            kuiRecommendations[savedMood]
        ) {

            moodSelect.value =
                savedMood;


            // Показываем рекомендацию,
            // но НЕ запускаем музыку автоматически.

            showCurrentKui(
                savedMood
            );

        }

    }
);


// ============================================================
// ЗАГРУЗКА ДОСТУПНЫХ ГОЛОСОВ БРАУЗЕРА
// ============================================================

if (
    "speechSynthesis" in window
) {

    window.speechSynthesis.onvoiceschanged =
        function () {

            window.speechSynthesis
                .getVoices();

        };

}