var i, j;
document.write("<table border>");
for (j = 1; j < 21; j++) {
  document.write("<td>")
  for (i = 1; i < 11; i++) {
    document.write(j + " x " + i + " = " + j * i + "<br>");
  }
    document.write("</td>")
    if((j%4) == 0){
   document.write("<tr>") 
  }
}



