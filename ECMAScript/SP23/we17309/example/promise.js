function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script"); //<script>
        script.src = src; // <script src="https://javascript.info/callbacks">
        script.onload = () => resolve(10);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script); // <head><script src="https://javascript.info/callbacks"></head>
    });
}
loadScript("https://javascript.info/callbacks")
    .then((data) => data + "Có thêm cái nhà")
    .then((data2) => console.log(data2))
    .catch((error) => console.log(error));
