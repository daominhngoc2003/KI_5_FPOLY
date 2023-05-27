function loadScript(src, callback) {
    const script = document.createElement("script"); //<script>
    script.src = src; // <script src="https://javascript.info/callbacks">
    script.onload = () => callback(10);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script); // <head><script src="https://javascript.info/callbacks"></head>
}
loadScript("https://javascript.info/callbacks", function (error, data) {
    loadScript("https://javascript.info/callbacks2", function (data2) {
        loadScript("https://javascript.info/callbacks3", function (data2) {
            loadScript("https://javascript.info/callbacks3", function (data2) {});
        });
    });
});
