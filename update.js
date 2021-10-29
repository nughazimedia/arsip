//store the quotations in arrays
quotes = [];
authors = [];
authors[0] = "https://play.google.com/apps/test/com.nughazimedia.kanalpersis/10102";
//calculate a random index number
index = Math.floor(Math.random() * quotes.length);
//display the quotation
document.write("<center>\n");
document.write("" + "<a href=" + authors[index] + ">UPDATE ke Versi 1.3.4</a>" + "");
document.write("</center>\n");
//done
