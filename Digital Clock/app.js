const clock = document.querySelector(".clock");

function tick() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const html = `
    <div><span>${day < 10 ? '0' + day : day}/
    ${month < 10 ? '0' + month : month}/
    ${year}</span></div>
    <div><span>${h} :</span>
    <span>${m < 10 ? '0' + m : m} :</span>
    <span>${s < 10 ? '0' + s : s}</span></div>
    `;
    clock.innerHTML = html;
}

tick();

setInterval(tick, 1000);
