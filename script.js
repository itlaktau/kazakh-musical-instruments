function chooseMusic() {

    const mood = document.getElementById("moodSelect").value;

    const result = document.getElementById("result");

    const player = document.getElementById("player");

    if (mood === "") {

        result.innerHTML =
            "<p>Пожалуйста, выберите настроение.</p>";

        return;
    }

    let title = "";
    let description = "";
    let audioFile = "";

    switch (mood) {

        case "весёлое":

            title = "Балбырауын";
            description =
                "Весёлый и жизнерадостный кюй Курмангазы.";

            audioFile = "kuis/balbyrauyn.mp3";

            break;

        case "спокойное":

            title = "Аққу";
            description =
                "Нежный и спокойный кюй о прекрасном лебеде. Помогает расслабиться и отдохнуть.";

            audioFile = "kuis/akku.mp3";
   
            break;

        case "грустное":   

            title = "Көңіл толқыны";
            description =
                "Лирический кюй для размышлений и душевного покоя.";

            audioFile = "kuis/konil_tolkyny.mp3";


            break;

        case "энергичное":

            title = "Адай";
            description =
                "Мощный и энергичный кюй, наполненный силой и движением.";

            audioFile = "kuis/adai.mp3";

            break;

case "вдохновение":

    title = "Ерке сылқым";

    description =
        "Красивый и вдохновляющий кюй. Дарит лёгкость, вдохновение и хорошее настроение.";

    audioFile = "kuis/erke_sylkym.mp3";

    break;


    }

    result.innerHTML = `
        <h3>🎵 Рекомендуемый кюй:</h3>

        <h2>${title}</h2>

        <p>${description}</p>
    `;

    player.style.display = "block";

    player.src = audioFile;

    player.load();

    player.play()
        .catch(() => {
            console.log("Автовоспроизведение заблокировано браузером");
        });
}