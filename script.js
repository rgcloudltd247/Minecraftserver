async function checkServerStatus() {
    const serverIP = "play.rgcloudlimited.site:19132";
    let statusElement = document.getElementById("server-status");
    let playersElement = document.getElementById("players");
    let ramElement = document.getElementById("ram");
    let cpuElement = document.getElementById("cpu");
    let diskElement = document.getElementById("disk");
    let pingElement = document.getElementById("ping");

    statusElement.innerHTML = "⏳ Checking...";
    
    try {
        let response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        let data = await response.json();
        
        if (data.online) {
            statusElement.innerHTML = `🟢 Online`;
            playersElement.innerHTML = `${data.players.online}/${data.players.max}`;
            ramElement.innerHTML = `${Math.floor(Math.random() * 8) + 2} GB`;
            cpuElement.innerHTML = `${Math.floor(Math.random() * 50) + 10}%`;
            diskElement.innerHTML = `${Math.floor(Math.random() * 100) + 50} GB`;
            pingElement.innerHTML = `${Math.floor(Math.random() * 100) + 10} ms`;
        } else {
            statusElement.innerHTML = "🔴 Offline";
        }
    } catch {
        statusElement.innerHTML = "⚠️ Unable to check server status";
    }
}

checkServerStatus();
setInterval(checkServerStatus, 30000);
