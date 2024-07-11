function loadXML() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parseXML(this.responseXML);
    }
  };
  xhttp.open("GET",  "movie.xml", true); //A  เติม URL ของไฟล์ XML ที่ต้องการโหลด
  xhttp.send();
}
  
  function parseXML(xml) {
    let movieList = xml.getElementsByTagName("movie");

    let container = document.getElementById("xmlDataContainer");
    container.innerHTML = "";
  
    for (let i = 0; i < movieList.length; i++) {
      let title = movieList[i].getElementsByTagName("title")[0].textContent;
      let genre = movieList[i].getElementsByTagName("genre")[0].textContent; // B ดึงค่าเนื้อหาของแท็ก <genre> ของภาพยนตร์เรื่องที่ i จากรายการ movieList
      let year = movieList[i].getElementsByTagName("year")[0].textContent; // C
      let director = movieList[i].getElementsByTagName("director")[0].textContent; //D
      let duration = movieList[i].getElementsByTagName("duration")[0].textContent;  //E

      let cast = movieList[i].getElementsByTagName("actor"); // F
      let castList = "";
      for (let j = 0; j < cast.length; j++) {
        castList += cast[j].textContent + ", ";
      }
      
      // Remove the trailing comma and space
      castList = castList.slice(0, -2);

      let movieDiv = document.createElement("div");
      movieDiv.innerHTML = "<strong>Title:</strong> " + title + "<br>" +
                            "<strong>Genre:</strong> " + genre + "<br>" +       // G เพิ่มข้อมูลของประเภท (Genre) ของภาพยนตร์ลงใน movieDiv โดยแสดงด้วย <strong> เพื่อทำให้ข้อความเป็นตัวหนา
                            "<strong>Year:</strong> " + year + "<br>" +         // H
                            "<strong>Director:</strong> " + director + "<br>" + //I
                            "<strong>Cast:</strong> " + castList + "<br>" +     // J
                            "<strong>Duration:</strong> " + duration +"<br><br>"; //K
      container.appendChild(movieDiv);
    }
  }
  