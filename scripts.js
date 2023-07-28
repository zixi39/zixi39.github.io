function switchHover() {
    let lastTouchTime = 0;
    function enableHover() {
        if (new Date() - lastTouchTime < 500) return
        document.body.classList.add('isHover');
    }

    function disableHover() {
        document.body.classList.remove('isHover');
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

function wechatInfo(){
    document.getElementById('canvas').scrollHeight = document.getElementById('wechat-panel').clientHeight
    let logoWidth = document.getElementById('navbar-image-box').clientWidth*0.5;
    document.getElementById('navbar-image-box').style.left = 'calc(50% - '+logoWidth+'px)';
    document.getElementById('nav-back-button').style.visibility = 'visible';
    document.getElementById('nav-back-button').style.opacity = '1';
    document.getElementById('wechat-panel').style.left = '0';
    document.getElementById('wechat-panel').style.visibility = 'visible';
    document.getElementById('wechat-panel').scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('home').style.transitionDuration = '1s';
    document.getElementById('home').style.transitionTimingFunction = 'ease';
    document.getElementById('home').style.transitionDelay = '0s';
    document.getElementById('home').style.visibility = 'hidden';
    document.getElementById('home').style.opacity = '0';
}

function toHome(){
    document.getElementById('canvas').scrollHeight = document.getElementById('home').clientHeight;
    document.getElementById('nav-back-button').style.visibility = 'hidden';
    document.getElementById('nav-back-button').style.opacity = '0';
    document.getElementById('navbar-image-box').style.left = '0';
    document.getElementById('wechat-panel').style.left = 'calc(100vw + 10px)';
    document.getElementById('wechat-panel').style.visibility = 'hidden';
    document.getElementById('home').scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('home').style.transitionTimingFunction= 'ease-in';
    document.getElementById('home').style.transitionDuration = '2.5s';
    document.getElementById('home').style.transitionDelay = '0.3s';
    document.getElementById('home').style.visibility = 'visible';
    document.getElementById('home').style.opacity = '1';
}

function centerLogo(){
    let pos_wechatPanel = document.getElementById('wechat-panel').getBoundingClientRect().left;
    if(pos_wechatPanel===0){
        let logoWidth = document.getElementById('navbar-image-box').clientWidth*0.5;
        document.getElementById('navbar-image-box').style.left = 'calc(50% - '+logoWidth+'px)';
    }
}

function resizeInner(){
    let home = document.getElementById('home');
    let wechat_panel = document.getElementById('wechat-panel');
    if(home.scrollHeight<=home.clientHeight){
        document.getElementById('home-inner').style.height = 'calc(100% + 1px)';
    }else{
        document.getElementById('home-inner').style.height = 'auto';
    }
    if(wechat_panel.scrollHeight<=wechat_panel.clientHeight){
        document.getElementById('wechat-panel-inner').style.height = 'calc(100% + 1px)';
    }else{
        document.getElementById('wechat-panel-inner').style.height = 'auto';
    }
}

window.onload = function(){
    window.setTimeout(function(){
        document.getElementById('twitter-button').style.visibility = 'visible';
        document.getElementById('twitter-button').style.opacity = '1';
    }, 500);
    window.setTimeout(function(){
        document.getElementById('tg-channel-button').style.visibility = 'visible';
        document.getElementById('tg-channel-button').style.opacity = '1';
    }, 1100);
    window.setTimeout(function(){
        document.getElementById('tg-group-button').style.visibility = 'visible';
        document.getElementById('tg-group-button').style.opacity = '1';
    }, 1800);
    window.setTimeout(function(){
        document.getElementById('wechat-button').style.visibility = 'visible';
        document.getElementById('wechat-button').style.opacity = '1';
    }, 2600);
    window.setTimeout(function(){
        document.getElementById('threads-button').style.visibility = 'visible';
        document.getElementById('threads-button').style.opacity = '1';
    }, 3400);
    window.setTimeout(function(){
        document.getElementById('github-button').style.visibility = 'visible';
        document.getElementById('github-button').style.opacity = '1';
    }, 4200);
};

switchHover();
resizeInner();
window.addEventListener('resize', centerLogo);
window.addEventListener('resize', resizeInner);