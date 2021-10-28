 calendar = new Date();
 day = calendar.getDay();
 month = calendar.getMonth();
 date = calendar.getDate();
 year = calendar.getYear();
 if (year < 1000)
 year+=1900
 cent = parseInt(year/100);
 g = year % 19;
 k = parseInt((cent - 17)/25);
 i = (cent - parseInt(cent/4) - parseInt((cent - k)/3) + 19*g + 15) % 30;
 i = i - parseInt(i/28)*(1 - parseInt(i/28)*parseInt(29/(i+1))*parseInt((21-g)/11));
 j = (year + parseInt(year/4) + i + 2 - cent + parseInt(cent/4)) % 7;
 l = i - j;
 emonth = 3 + parseInt((l + 40)/44);
 edate = l + 28 - 31*parseInt((emonth/4));
 emonth--;
 var dayname = new Array ("Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
 var monthname = 
 new Array ("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember" );
 document.write("<center><b>Info hari ini :&nbsp;</b>");
 document.write(dayname[day] + ", ");
 if (date< 10) document.write("0" + date + " ");
         else document.write(date + " ");
document.write(monthname[month] + " ");
 document.write(year + "    <br></center>");
 // Easter
 if ((month == emonth) && (date == edate)) document.write("Easter Sunday (Western)   ");
 // January
 if ((month == 0) && (date == 1)) document.write("New Year's Day");
 // February
 if ((month == 1) && (date == 2)) document.write("Groundhog Day");
 // March
 if ((month == 2) && (date == 3)) document.write("Girl's Day (Japan)");
 // April
 if ((month == 3) && (date == 1)) document.write("April Fools' Day");
 if ((month == 3) && (day == 0) && (date > 0) && (date< 8)) document.write("Daylight Savings Time Begins");
 // May
 if ((month == 4) && (day == 1) && (date > 24)) document.write("Memorial Day");
 // June
 if ((month == 5) && (day == 0) && (date > 15) && (date< 24)) document.write("Father's Day");
 // July
 if ((month == 6) && (date == 1)) document.write("Independence Day (Canada)");
 // August
 if ((month == 7) && (date == 1)) document.write("Confederation Day (Switzerland)");
 // September
 if ((month == 8) && (date == 7)) document.write("Independence Day (Brazil)");
 // October
 if ((month == 9) && (date == 1)) document.write("German Reunufication (1990)");
 // November
 if ((month == 10) && (day == 4) && (date > 27) && (date< 30)) document.write("Thanksgiving (USA)");
 if ((month == 10) && (date == 30) && (day == 4)) document.write("Thanksgiving (USA)");
 // December
 if ((month == 11) && (date > 1) && (date < 31)) document.write("<center><p><h6>JADWAL KHATIB JUMAT<br>BULAN AGUSTUS MINGGU KE-1<br>Tanggal : 12 Agustus 2020</p></center><table><tr><td><b>JAMA'AH</b><br>1. Bantargedang</td><td><b>KHATIB</b><br>: Tatang Muttaqin</td></tr></table>");
 document.write("<br />");
//-->
