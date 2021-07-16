student=[];
function submit(){
    var name1=document.getElementById("name_of_the_student_1").value;
    var name2=document.getElementById("name_of_the_student_2").value;
    var name3=document.getElementById("name_of_the_student_3").value;
    var name4=document.getElementById("name_of_the_student_4").value;
    student.push(name1);
    student.push(name2);
    student.push(name3);
    student.push(name4);
    var display=[];
    for(var k=0;k<4;k++){
        display.push("<h4>NAME - " + student[k] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display;
    document.getElementById("display_name_without_commas").innerHTML=display.join("");
    document.getElementById("Submit").style.display="none";
    document.getElementById("Sort1").style.display="inline-block";
}