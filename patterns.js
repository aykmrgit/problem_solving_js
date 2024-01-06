

function starPattern1(n){
    let string="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
starPattern1(5);
//**************************************
function starPattern2(n){
    let string="";
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
starPattern2(5);
//**************************************
function starPattern3(n){
    let string="";
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            string+=j+1;
        }
        string+="\n";
    }
    console.log(string);
}
starPattern3(5);
//**************************************
function starPattern4(n){
    let string="";
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            string+=i+1;
        }
        string+="\n";
    }
    console.log(string);
}
starPattern4(5);
//**************************************
function starPattern5(n){
    let string="";
    for(let i=n;i>0;i--){
        for(let j=0;j<i;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
starPattern5(5);
//**************************************
function starPattern6(n){
    let string="";
    for(let i=n;i>0;i--){
        for(let j=0;j<i;j++){
            string+=j+1;
        }
        string+="\n";
    }
    console.log(string);
}
starPattern6(5);
//**************************************
function starPattern7(n){
    let string="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            string+=" ";
        }
        for(let j=0;j<2*i+1;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
starPattern7(5);
//**************************************
function starPattern8(n){
    let string="";
    for(let i=n;i>0;i--){
        for(let j=0;j<n-i;j++){
            string+=" ";
        }
        for(let j=0;j<2*i-1;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
starPattern8(5);
//**************************************
function starPattern9(n){
    let string1="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            string1+=" ";
        }
        for(let j=0;j<2*i+1;j++){
            string1+="*";
        }
        string1+="\n";
    }
    let string2="";
    for(let i=n;i>0;i--){
        for(let j=0;j<n-i;j++){
            string2+=" ";
        }
        for(let j=0;j<2*i-1;j++){
            string2+="*";
        }
        string2+="\n";
    }
    console.log(string1+string2);
}
starPattern9(5);
//**************************************
function starPattern10(n){
    let string="";
    for(let i=0;i<2*n-1;i++){
        if(i<n){
            for(let j=0;j<=i;j++){
                string+="*";
            }
        }
        else{
            for(let j=0;j<2*n-1-i;j++){
                string+="*";
            }
        }
        string+="\n";
    }
    console.log(string);
}
starPattern10(5);

