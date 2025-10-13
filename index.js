document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'https://avatars.githubusercontent.com/u/6939218', // github
        '/img/last.fm-avatar.gif',
        '/img/openvk-avatar.png', // openvk avatar by mitsvalen
        '/img/noelle.jpg', // default
        '/img/among-us-avatar.png', // among us
        '/img/infinite_by_prekoler.png', // моя коммишка от vk.com/prekoler
        '/img/rekvizit.png', // я не придумал, я просто люблю эту пикчу
        '/img/CY-ZPKxcFU0.jpg', // default
        'https://img.guildedcdn.com/UserAvatar/ba5945958bb2f482717e0e795d30d447-Large.webp?w=450&h=450', // guilded / tatsumaki
        'https://ru.gravatar.com/userimage/184665281/3093176e9bb3b54c049fd1e80570835c?size=original' // gravatar
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('avatar').src = randomImage;
});

document.addEventListener('DOMContentLoaded', function () {
    const icons = ['/img/sad.ico', '/img/smirk.ico', '/img/tired.ico', '/img/nervous.ico'];
    const randomIndex = Math.floor(Math.random() * icons.length);
    const randomIcon = icons[randomIndex];
    document.getElementById('icon').href = randomIcon;
});

$(document).ready(function () {
    $.getJSON("/last.fm_api.php", function (data) {
        if (data.recenttracks.track[0].date) {
            $("#status").text("/ igodra");
        } else {
            const trackName = data.recenttracks.track[0].name;
            const artistName = data.recenttracks.track[0].artist["#text"];
            const url = "https://www.last.fm/music/" + encodeURIComponent(artistName) + "/_/" + encodeURIComponent(trackName);
            const html = "<div><span class='status'> is listening <a class='song unselectable' href='" + url + "'>" + artistName + " — " + trackName + "</a></span></div>";
            $("#status").html(html).attr("href", url);
        }
    });
});