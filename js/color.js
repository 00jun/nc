<script src="js/hangul.js"></script>
function change(){
    // 폼 객체 선택
    var frm = document.forms['frm'];
    
       //이름 분리
    var pname1 = frm['pname'].value;
    var pname2 = pname1.substr(1);
    var pname3 = Hangul.disassemble(pname2);
    
    var cenname = pname1.substr(1,1);
    var cenname1 = Hangul.disassemble(cenname);
    
    event.preventDefault();
    
    let ja_score = new Map([
        ["ㄱ",1],["ㄴ",2],["ㄷ",3],["ㄹ",4],["ㅁ",5],["ㅂ",6],["ㅅ",7],["ㅇ",8],["ㅈ",9],["ㅊ",1],["ㅋ",2],["ㅌ",3],["ㅍ",4],["ㅎ",5],["ㅏ",0],["ㅑ",0],["ㅓ",0],["ㅕ",0],["ㅗ",0],["ㅛ",0],["ㅜ",0],["ㅠ",0],["ㅡ",0],["ㅣ",0],["ㅐ",0],["ㅒ",0],["ㅖ",0],["ㅔ",0]
    ])
    
    let mo_score = new Map([
        ["ㅏ",1],["ㅑ",2],["ㅓ",3],["ㅕ",4],["ㅗ",5],["ㅛ",6],["ㅜ",7],["ㅠ",8],["ㅡ",9],["ㅣ",1],["ㅐ",2],["ㅒ",3],["ㅖ",5],["ㅔ",4],["ㄱ",0],["ㄴ",0],["ㄷ",0],["ㄹ",0],["ㅁ",0],["ㅂ",0],["ㅅ",0],["ㅇ",0],["ㅈ",0],["ㅊ",0],["ㅋ",0],["ㅌ",0],["ㅍ",0],["ㅎ",0]
    ])
    
    let jm_score = new Map([
        ["ㄱ",1],["ㄴ",2],["ㄷ",3],["ㄹ",4],["ㅁ",5],["ㅂ",6],["ㅅ",7],["ㅇ",8],["ㅈ",9],["ㅊ",1],["ㅋ",2],["ㅌ",3],["ㅍ",4],["ㅎ",5],["ㅏ",1],["ㅑ",2],["ㅓ",3],["ㅕ",4],["ㅗ",5],["ㅛ",6],["ㅜ",7],["ㅠ",8],["ㅡ",9],["ㅣ",1],["ㅐ",2],["ㅒ",3],["ㅖ",5],["ㅔ",4]
    ])
    

    if(pname3.length == 7){
        var scnn = mo_score.get(pname3[0]) + mo_score.get(pname3[1]) + mo_score.get(pname3[2]) + mo_score.get(pname3[3]) + mo_score.get(pname3[4]) + mo_score.get(pname3[5]) + mo_score.get(pname3[6]);
        var prsn = ja_score.get(pname3[0]) + ja_score.get(pname3[1]) + ja_score.get(pname3[2]) + ja_score.get(pname3[3]) + ja_score.get(pname3[4]) + ja_score.get(pname3[5]) + ja_score.get(pname3[6]);
    }else if(pname3.length == 6){
        var scnn = mo_score.get(pname3[0]) + mo_score.get(pname3[1]) + mo_score.get(pname3[2]) + mo_score.get(pname3[3]) + mo_score.get(pname3[4]) + mo_score.get(pname3[5]);
        var prsn = ja_score.get(pname3[0]) + ja_score.get(pname3[1]) + ja_score.get(pname3[2]) + ja_score.get(pname3[3]) + ja_score.get(pname3[4]) + ja_score.get(pname3[5]);
    }else if(pname3.length == 5){
        var scnn = mo_score.get(pname3[0]) + mo_score.get(pname3[1]) + mo_score.get(pname3[2]) + mo_score.get(pname3[3]) + mo_score.get(pname3[4]);
        var prsn = ja_score.get(pname3[0]) + ja_score.get(pname3[1]) + ja_score.get(pname3[2]) + ja_score.get(pname3[3]) + ja_score.get(pname3[4]);
    }else if(pname3.length == 4){
        var scnn = mo_score.get(pname3[0]) + mo_score.get(pname3[1]) + mo_score.get(pname3[2]) + mo_score.get(pname3[3]);
        var prsn = ja_score.get(pname3[0]) + ja_score.get(pname3[1]) + ja_score.get(pname3[2]) + ja_score.get(pname3[3]);
    }else if(pname3.length == 3){
        var scnn = mo_score.get(pname3[0]) + mo_score.get(pname3[1]) + mo_score.get(pname3[2]);
        var prsn = ja_score.get(pname3[0]) + ja_score.get(pname3[1]) + ja_score.get(pname3[2]);
    }else{
        var scnn = mo_score.get(pname3[0]) + mo_score.get(pname3[1]);
        var prsn = ja_score.get(pname3[0]) + ja_score.get(pname3[1]);
    }
    
    if(cenname1.length == 4){
        var grwn = jm_score.get(cenname1[0]) + jm_score.get(cenname1[1]) + jm_score.get(cenname1[2]) + jm_score.get(cenname1[3]);
    }else if(cenname1.length == 3){
        var grwn = jm_score.get(cenname1[0]) + jm_score.get(cenname1[1]) + jm_score.get(cenname1[2]);
    }else{
        var grwn = jm_score.get(cenname1[0]) + jm_score.get(cenname1[1]);
    }
    
    if(grwn == 11){
        frm['grw'].value = ('2 & 11')
        document.getElementById('grwi').src="colorbottle9/2.png";
    }else if(grwn == 22){
        frm['grw'].value = ('4 & 22')
        document.getElementById('grwi').src="colorbottle9/4.png";
    }else if(grwn > 9){
        var grwn1 = grwn.toString();
        var grwn11 = grwn1.split('');
        var grwn111 = parseInt(grwn11[0]) + parseInt(grwn11[1])
        frm['grw'].value = grwn111
        document.getElementById('grwi').src="colorbottle9/"+grwn111+".png";
        if(grwn111 == 10){
            frm['grw'].value = ('1')
            document.getElementById('grwi').src="colorbottle9/1.png";
        }
    }else{
        frm['grw'].value = grwn
        document.getElementById('grwi').src="colorbottle9/"+grwn+".png";
    }
    //소울 컬러 넘버

    if(scnn == 11){
        frm['scnn'].value = ('2 & 11')
        document.getElementById('soi').src="colorbottle9/2.png";
    }else if(scnn == 22){
        frm['scnn'].value = ('4 & 22')
        document.getElementById('soi').src="colorbottle9/4.png";
    }else if(scnn > 9){
        var scnn1 = scnn.toString();
        var scnn11 = scnn1.split('');
        var scnn111 = parseInt(scnn11[0]) + parseInt(scnn11[1])
        frm['scnn'].value = scnn111
        document.getElementById('soi').src="colorbottle9/"+scnn111+".png";
        if(scnn111 == 10){
            frm['scnn'].value = ('1')
            document.getElementById('soi').src="colorbottle9/1.png";
        }
    }else{
        frm['scnn'].value = scnn
        document.getElementById('soi').src="colorbottle9/"+scnn+".png";
    }
    
    //페르소나 컬러 넘버
    
    
    if(prsn == 11){
        frm['prsn'].value = ('2 & 11')
        document.getElementById('pri').src="colorbottle9/2.png";
    }else if(prsn == 22){
        frm['prsn'].value = ('4 & 22')
        document.getElementById('pri').src="colorbottle9/4.png";
    }else if(prsn > 9){
        var prsn1 = prsn.toString();
        var prsn11 = prsn1.split('');
        var prsn111 = parseInt(prsn11[0]) + parseInt(prsn11[1])
        frm['prsn'].value = prsn111
        document.getElementById('pri').src="colorbottle9/"+prsn111+".png";
        if(prsn111 == 10){
            frm['prsn'].value = ('1')
            document.getElementById('pri').src="colorbottle9/1.png";
        }
        if(prsn111 == 11){
            frm['prsn'].value = ('2 & 11')
            document.getElementById('pri').src="colorbottle9/2.png";
        }
    }else{
        frm['prsn'].value = prsn
        document.getElementById('pri').src="colorbottle9/"+prsn+".png";
    }
    
    //운명 컬러 넘버 = 소울 + 페르소나
    var dstn = scnn + prsn
    
    if(dstn == 11){
        frm['dstn'].value = ('2 & 11')
        document.getElementById('dti').src="colorbottle9/2.png";
    }else if(dstn == 22){
        frm['dstn'].value = ('4 & 22')
        document.getElementById('dti').src="colorbottle9/4.png";
    }else if(dstn > 9){
        var dstn1 = dstn.toString();
        var dstn11 = dstn1.split('');
        var dstn111 = parseInt(dstn11[0]) + parseInt(dstn11[1])
        frm['dstn'].value = dstn111
        document.getElementById('dti').src="colorbottle9/"+dstn111+".png";
        if(dstn111 == 10){
            frm['dstn'].value = ('1')
            document.getElementById('dti').src="colorbottle9/1.png";
        }
        if(dstn111 == 11){
            frm['dstn'].value = ('2 & 11')
            document.getElementById('dti').src="colorbottle9/2.png";
        }
        if(dstn111 > 9){
            var dstn111 = dstn111.toString();
            var dstn111 = dstn111.split('');
            var dstn111 = parseInt(dstn111[0]) + parseInt(dstn111[1])
            frm['dstn'].value = dstn111
            document.getElementById('dti').src="colorbottle9/"+dstn111+".png";
        }
        var dstn = dstn111
    }else{
        frm['dstn'].value = dstn
        document.getElementById('dti').src="colorbottle9/"+dstn+".png";
    }
    
}