window.addEventListener("load", function () {
    let random_words = ["appraise", "arbitrary", "ambiguous", "alliteration", "abstract", "aberration", "acquiesce",
        "acumen", "advocate", "adamant", "aesthetic", "aegis", "affinity", "affluent", "agnostic", "agile", "aisle",
        "ajar", "akimbo", "allusion", "allegory", "ambiguity", "ambivalent", "antagonist", "anecdote", "analogy",
        "aorta", "apathy", "apprehensive", "aqueous", "articulate", "arduous", "assonance", "attrition", "autonomy",
        "auspicious", "avarice", "aversion", "awry", "awe", "axiom", "azure", "bane", "banal", "benevolent",
        "belligerent", "benign", "bias", "bigot", "boisterous", "bourgeois", "bureaucracy", "burden", "capricious",
        "cacophony", "capitalism", "censure", "cessation", "stopping", "circumspect", "circumvent", "cite",
        "connotation", "communism", "condescending", "contemporary", "cunning", "cursory", "daunting", "data", "demeanor",
        "dearth", "disdain", "diction", "discombobulate", "dogma", "docile", "dubious", "duplicity"];
    /** default easy level */
    let level = 7;
    let score = 0;
    let timer = level;
    let time_interval;
    let is_game_start = false;
    const user_level = document.getElementById("level");
    const user_time = document.getElementById("time");
    const user_score = document.getElementById("score");
    const user_word = document.getElementById("word");
    const game_result = document.getElementById("game_result");
    const user_input = document.getElementById("user_input");

    function change_level(value) {
        level = value;
    }

    function reset_game() {
        clearInterval(time_interval);
        timer = level;
        user_time.innerText = timer;
        score = 0;
        user_score.innerText = score;
        game_result.innerText = "Start typing";
        user_input.innerText = "";
        is_game_start = false;
    }

    user_level.addEventListener("change", function () {
        change_level(+user_level.value);
        reset_game()
    });

    user_input.addEventListener("focusin", function () {
        if (!is_game_start)
            play();
    });

    user_input.addEventListener("keypress", function () {
        check_word();
    });


    function play() {
        display_random_word();
        time_interval = setInterval(decrement_timer, 1000);
    }

    function stop() {
        clearInterval(time_interval);
        game_result.innerText = "Game Over!!!";
        user_input.disabled = true;
    }

    function check_word() {
        if (user_word.innerText === user_input.value) {
            display_random_word();
            user_input.value = "";
            timer += 1;
            score += 1;
            user_score.innerText = score;
            user_time.innerText = timer;
            game_result.innerText = "Correct!!!";
        } else {
            game_result.innerText = "Wrong!!!";
        }
    }

    function decrement_timer() {
        if (timer > 0) {
            timer--;
            user_time.innerText = timer;
        } else if (timer === 0)
            stop()

    }

    function display_random_word() {
        user_word.innerText = random_words[Math.floor(Math.random() * random_words.length)];
    }
});
