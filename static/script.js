function addSubject() {
    const subjectInput = document.getElementById("subject");
    const subjectList = document.getElementById("subjectList");

    const subject = subjectInput.value.trim();

    if (subject === "") {
        alert("Please enter a subject.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = subject;

    subjectList.appendChild(listItem);

    subjectInput.value = "";
}
