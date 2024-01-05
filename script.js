function hoverevent(ele){
    ele.children[0].style.opacity = '1';
    ele.children[0].style.marginBottom = '-50';
}

function outevent(ele){
    ele.children[0].style.opacity = '0';
    ele.children[0].style.marginBottom = '-60';
}

function cfphoverevent(ele){
    ele.children[1].style.opacity = '1';
    ele.children[1].style.marginBottom = '-50';
    document.getElementById('cfpdropdown').style.opacity = '1';
    document.getElementById('cfptext').style.display = 'inline-block';
    document.getElementById('cfptext').style.height = '20px';
    document.getElementById('cfpdropdown').style.height = '80px';

}

function cfpoutevent(ele){
    ele.children[1].style.opacity = '0';
    ele.children[1].style.marginBottom = '-60';
    document.getElementById('cfpdropdown').style.opacity = '0';
    document.getElementById('cfpdropdown').style.height = '0';
    document.getElementById('cfptext').style.height = '0px';
    document.getElementById('cfptext').style.display = 'none';
}

function cfpdrop(){
    document.getElementById('cfpdropdown').style.opacity = '1';
    document.getElementById('cfptext').style.display = 'inline-block';
    document.getElementById('cfptext').style.height = '20px';
    document.getElementById('cfpdropdown').style.height = '80px';
    var cfptext = document.getElementById('cfp');
    cfptext.style.color = 'red';
}

function cfpin(){
    var cfptext = document.getElementById('cfp');
    cfptext.style.color = 'rgb(128, 128, 128)';
    document.getElementById('cfpdropdown').style.opacity = '0';
    document.getElementById('cfptext').style.height = '0px';
    document.getElementById('cfptext').style.display = 'none';
    document.getElementById('cfpdropdown').style.height = '0px';
}

let isregis1open = false;

function regis1open(){
    let icon = document.querySelector('#regis1icon');
    let panel = document.querySelector('#regis1open');
    if(!isregis1open){
        icon.style.transform = 'rotateZ(-90deg)';
        panel.style.height = '350px';
        panel.style.bottom = '90px';
        panel.style.visibility = 'visible';
        panel.style.opacity = '1';
        isregis1open = true;
    }else{
        icon.style.transform = 'rotateZ(0deg)';
        panel.style.height = '0px';
        panel.style.bottom = '70px';
        panel.style.visibility = 'hidden';
        panel.style.opacity = '0';
        isregis1open = false;
    }
}

let isthpanelopen = false;
function thpanel(){
    let panel = document.querySelector('#thpanel');
    if(!isthpanelopen){
        panel.style.top = '40';
        isthpanelopen = true;
    }else{
        panel.style.top = '-450';
        isthpanelopen = false;
    }
}