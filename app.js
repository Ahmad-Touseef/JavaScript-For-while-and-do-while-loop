for(i=0; i<5; i++){                               //for loop
          document.write(i+"<br>")
}
document.write("Ahmad Touseef"+"<br>")

var i=0;                                          //Intialization
for(; i<5; i++){                                  //Intialization is on top
          document.write(i+"<br>");
}
document.write("Rest Of the Code"+"<br>");

var i=0;
for(; ; i++){
          if(i==4)
          {
                    break;
          }
          document.write(i+"<br>")
}


for(i=0; i<3; i++){                               //Nested for loop
          document.write("<strong>Outer loop</strong>"+i+"<br>");
          for(j=0; j<5; j++){
                    document.write("inner loop"+j+"<br>")
          }
}

var i=0;
while(i<5)                              //While loop
{
          document.write(i);
          i++;
          document.write("<br>");
}
 
var i=0;
while(true){
          if(i==3){
                    break;                        //Break statement
          }
          document.write(i);
          i++;
          document.write("<br>");
}


var i=0;
while(i<3){                                       //Nested While loop
          document.write("<strong>Outerloop</strong>");
          document.write(i);
          i++;
          document.write("<br>");
          var j=0;
          while(j<5){
                    document.write("Inner while loop");
                    document.write(j);
                    j++;
                    document.write("<br>");
          }
}


var i=0;
do{                             //do while loop
          document.write(i);
          i++;
          document.write("<br>");
}while(i<5);


var i=0;
do{                     //break statement
          if(i==3){ 
                    break;
          }
          document.write(i);
          i++;
          document.write("<br>");
}while(true);


var i=0;
do{                                     //Nested do while loop
          document.write("<strong>Outer loop</strong>");
          document.write(i);
          i++;
          document.write("<br>");

          var j=0;
          do{
                    document.write("Inner loop");
                    document.write(j);
                    j++;
                    document.write("<br>");
          }while(j<5);
}while(i<3);







