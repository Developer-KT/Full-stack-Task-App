function deleteNote(noteId) {
    fetch("/delete-note", {                                 // Use fetch to send request to backend using JS
        method: "POST",
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
        window.location.href = "/";
    });
}