    const mdp = document.querySelector("#mdp");
    const mdpc = document.querySelector("#mdpc");
    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        if (mdp.value !== mdpc.value) {
            alert("Les mots de passe ne correspondent pas");
            e.preventDefault();
        }
    });