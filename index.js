window.scroller = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DXLY3NSWTG');