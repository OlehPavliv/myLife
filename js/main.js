var age = (function(){
    function set(e){
        return document.querySelector(e);
    }
    function baby(){
        alert('Learn to walk and to talk');
    };
    function child(){
        alert('Prepearing to school');
    };
    function childContinue(){
        alert('Go to school');
    };
    function teenager(){
        alert('Schooling')
    };
    function endSchool(){
        alert('graduated from school');
    };
    function enterUniver(){
        alert('entered the University');
    }
    function studyUniver(){
        alert('studies at university')
    }
    function endUniver(){
        alert('graduated from the University');
    };
    return function init(){
        var formInf = document.forms.chooseAge;
        formInf.btn.addEventListener('click',function(){
            var res = formInf.myAge.value; 
            if(res>=0 && res<=3)baby();
            if(res>=4 && res<=5)child();
            if(res==6)childContinue();
            if(res>=7 && res<=15)teenager();
            if(res==16)endSchool();
            if(res==17)enterUniver();
            if(res>=18 && res<=22)studyUniver();
            if(res==23)endUniver();
        });
    }
    
})();
age();
