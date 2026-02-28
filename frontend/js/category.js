function selectCategory(category){
    localStorage.setItem("category", category);
    window.location.href = "options.html";
}