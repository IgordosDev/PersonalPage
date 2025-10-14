document.addEventListener('DOMContentLoaded', function () {
	const images = [
		'https://avatars.githubusercontent.com/u/6939218', // github
		'/img/last.fm-avatar.gif',
		'/img/openvk-avatar.png', // openvk avatar by mitsvalen
		'/img/noelle.jpg', // default
		'/img/among-us-avatar.png', // among us
		'/img/infinite_by_prekoler.png', // моя коммишка от vk.com/prekoler
		'/img/rekvizit.png', // я не придумал, просто люблю эту пикчу
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
			displayStatusSong(artistName, trackName, url)
		}
	});
});

function displayStatusSong(author, title, url = "") {
	document.getElementById("status").style.display = "inline";
	document.getElementById("statusSong").href = url;
	document.getElementById("statusSongArtist").innerText = author;
	document.getElementById("statusSongTitle").innerText = title;
}
// displayStatusSong("example artist", "example title")
// displayStatusSong("VERY VERY LONG EXAMPLE ARTIST NAME", "VERY VERY LONG EXAMPLE TRACK NAME")

function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (!element.classList.contains('lang-switcher')) {
            if (element.getAttribute('data-lang') === lang) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }
    });
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
        if (switcher.getAttribute('data-lang') === lang) {
            switcher.style.opacity = '1';
            switcher.style.fontWeight = 'bold';
        } else {
            switcher.style.opacity = '0.6';
            switcher.style.fontWeight = 'normal';
        }
    });
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
        switcher.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Initialize with English as default
    switchLanguage('en');
});