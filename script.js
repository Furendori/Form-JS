    const mdp = document.querySelector("#mdp");
    const mdpc = document.querySelector("#mdpc");
    const form = document.querySelector("form");
    const dateNaissanceInput = document.querySelector("#datenaissance");

    form.addEventListener("submit", function(e) {
        if (mdp.value !== mdpc.value) {
            alert("Les mots de passe ne correspondent pas");
            e.preventDefault();
        }
    });
  
    form.addEventListener("submit", function(e) {
      const dateDeNaissance = new Date(dateNaissanceInput.value);
      const age = getAge(dateDeNaissance);
  
      if (age < 13) {
        alert("Vous devez avoir au moins 13 ans !");
        e.preventDefault();
      }
    });
  
    function getAge(dateDeNaissance) {
      const today = new Date();
      let age = today.getFullYear() - dateDeNaissance.getFullYear();
      const monthDiff = today.getMonth() - dateDeNaissance.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateDeNaissance.getDate())) {
        age--;
      }
      return age;
    }