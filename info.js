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
 document.write("<center><b>SEKARANG</b><br>");
 document.write(dayname[day] + ", ");
 if (date< 10) document.write("0" + date + " ");
         else document.write(date + " ");
document.write(monthname[month] + " ");
 document.write(year + "    <br></center>");
 // Easter
 if ((month == emonth) && (date == edate)) document.write("Easter Sunday (Western)   ");
 // January
 if ((month == 0) && (date == 1)) document.write("New Year's Day");
 if ((month == 0) && (date == 15)) document.write("Adults Day (Japan)");
 if ((month == 0) && (date == 27)) document.write("Wolfgang Amadeus Mozart born (1756)");
 if ((month == 0) && (day == 1) && (date > 14) && (date< 22)) document.write("Martin Luther King's Birthday");
 // February
 if ((month == 1) && (date == 2)) document.write("Groundhog Day");
 if ((month == 1) && (date == 8)) document.write("Jules Verne born (1828)");
 if ((month == 1) && (date == 11)) document.write("National Foundation Day (Japan)");
 if ((month == 1) && (date== 12)) document.write("Lincoln's Birthday");
 if ((month == 1) && (date == 14)) document.write("St. Valentine's Day");
 if ((month == 1) && (date == 15)) document.write("Galileo Galilei born (1564)");
 if ((month == 1) && (date == 22)) document.write("Washington's Birthday");
 if ((month == 1) && (date == 29)) document.write("Leap Day");
 // March
 if ((month == 2) && (date == 3)) document.write("Girl's Day (Japan)");
 if ((month == 2) && (date == 17)) document.write("St. Patrick's Day");
 if ((month == 2) && (date == 21)) document.write("J.S. Bach born (1685)");
 // April
 if ((month == 3) && (date == 1)) document.write("April Fools' Day");
 if ((month == 3) && (date == 8)) document.write("Buddha born");
 if ((month == 3) && (date == 15) && (day != 0)) document.write("Income Tax Day (USA),   ");
 if ((month == 3) && (date == 16) && (day == 1)) document.write("Income Tax Day (USA) ");
 if ((month == 3) && (date == 15)) document.write("Leonardo da Vinci born (1452)");
 if ((month == 3) && (date == 22)) document.write("Earth Day");
 if ((month == 3) && (date == 29)) document.write("Emperor's Birthday (Japan)");
 if ((month == 3) && (day == 0) && (date > 0) && (date< 8)) document.write("Daylight Savings Time Begins");
 // May
 if ((month == 4) && (date == 1)) document.write("May Day,   Boy's Day (Japan)");
 if ((month == 4) && (date == 2)) document.write("Constitution Day (Japan)");
 if ((month == 4) && (date == 5)) document.write("Cinco de Mayo (Mexico),   Children's Day (Japan)");
 if ((month == 4) && (date == 14)) document.write("Independence Day (Paraguay)");
 if ((month == 4) && (day == 0) && (date > 7) && (date< 16)) document.write("Mother's Day");
 if ((month == 4) && (day == 1) && (date > 24)) document.write("Memorial Day");
 // June
 if ((month == 5) && (date == 5)) document.write("Constitution Day (Denmark)");
 if ((month == 5) && (date == 6)) document.write("D-Day (USA)");
 if ((month == 5) && (date == 11)) document.write("Kamehameha (Hawaii)");
 if ((month == 5) && (date == 14)) document.write("FlagDay (USA)");
 if ((month == 5) && (date == 21)) document.write("Summer Solstice");
 if((month == 5) && (date == 24)) document.write("St. Jean Baptiste Day (Canada)");
 if ((month == 5) && (date == 30)) document.write("Independence Day (Zaire)");
 if ((month == 5) && (day == 0) && (date > 15) && (date< 24)) document.write("Father's Day");
 // July
 if ((month == 6) && (date == 1)) document.write("Independence Day (Canada)");
 if ((month == 6) && (date == 4)) document.write("Independence Day (USA)");
 if ((month == 6) && (date == 14)) document.write("Bastille Day (France)");
 // August
 if ((month == 7) && (date == 1)) document.write("Confederation Day (Switzerland)");
 if ((month == 7) && (date > 20) && (date< 30)) document.write("<table><th>asa</th><td>asa</td></table>Agustusan we lah<br>aaa<br>asasasasa");
 if ((month == 7) && (date > 25) && (date< 29)) document.write("<br><br>Tes jadwal ngaji<br>aaa<br>asasasasa<br>asasasasa<br>asasasasa<br>asasasasa<br>asasasasa<br>asasasasa<br>asasasasa<br>asasasasa");
 if ((month == 7) && (date == 10)) document.write("Independence Day (Ecuador)");
 if ((month == 7) && (date == 15)) document.write("Independence Day (India)");
 // September
 if ((month == 8) && (date == 7)) document.write("Independence Day (Brazil)");
 if ((month == 8) && (date == 15)) document.write("Respect for the Aged Day (Japan)");
 if ((month == 8) && (date == 16)) document.write("Independence Day (Mexico)");
 if ((month == 8) && (day== 1)&& (date > 0) && (date< 8)) document.write("Labor Day (USA)");
 // October
 if ((month == 9) && (date == 1)) document.write("German Reunufication (1990)");
 if ((month == 9) && (date == 10)) document.write("Health-Sports Day (Japan)");
 if ((month == 9) && (day == 1) && (date > 7) && (date< 16)) document.write("Columbus Day (USA)");
 if ((month == 9) && (day == 0) && (date > 24) && (date< 31)) document.write("Daylight Savings Time Ends");
 if ((month == 9) && (day == 0) && (date == 31)) document.write("Daylight Savings Time Ends<BR>");
 if ((month == 9) && (date == 24)) document.write("United Nations Day");
 if ((month == 9) && (date == 31)) document.write("Halloween");
 // November
 if ((month == 10) && (date == 1)) document.write("All Saints Day");
 if ((month == 10) && (date == 2)) document.write("All Souls Day");
 if ((month == 10) && (date == 3)) document.write("Culture Day (Japan)");
 if ((month == 10) && (date == 11)) document.write("Veteran's Day (USA),    Remembrance Day (Canada)");
 if ((month == 10) && (date ==20)) document.write("Revolution Day (Mexico)");
 if ((month == 10) && (date == 23)) document.write("Labor Thanksgiving Day (Japan)");
 if ((month == 10) && (day == 4) && (date > 23) && (date< 30)) document.write("Thanksgiving (USA)");
 if ((month == 10) && (date == 30) && (day == 4)) document.write("Thanksgiving (USA)");
 // December
 if ((month == 11) && (date > 1) && (date < 31)) document.write("<center><p><h6>JADWAL KHATIB JUMAT<br>BULAN AGUSTUS MINGGU KE-1<br>Tanggal : 12 Agustus 2020</p></center><table><tr><td><b>JAMA'AH</b><br>1. Bantargedang</td><td><b>KHATIB</b><br>: Tatang Muttaqin</td></tr></table>");
 if ((month == 11) && (date == 24)) document.write("Christmas Eve");
 if ((month == 11) && (date == 25)) document.write("Christmas");
 if ((month == 11) && (date == 26)) document.write("Boxing Day");
 if ((month == 11) && (date == 31)) document.write("New Year's Eve");
 document.write("<br />");
//-->
