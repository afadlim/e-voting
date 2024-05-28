let dateStart = new Date("2024-05-28T12:00");
let dateEnd = new Date("2024-05-28T18:00");

let progres = 0;
let y = dateStart.getFullYear();
let m = dateStart.getMonth()+1;
let d = dateStart.getDate();
let hh = dateStart.getHours();
let mm = dateStart.getMinutes();

let txtProses = document.getElementById("txtProses");
let txtInfo = document.getElementById("txtInfo");
let moreInfo = document.getElementById("moreInfo");

let dateNow = new Date();
if(dateNow>=dateEnd){
	progres = 2;
    txtProses.innerHTML = 'telah <b class="text-orange">selesai</b>';
    txtInfo.innerHTML = "Lihat Hasil";
    moreInfo.setAttribute('href', "#result");
} else if (dateNow>=dateStart){
	progres = 1;
    y = dateEnd.getFullYear();
    m = dateEnd.getMonth()+1;
    d = dateEnd.getDate();
    hh = dateEnd.getHours();
    mm = dateEnd.getMinutes();
    txtProses.innerHTML = 'akan <b class="text-orange">berakhir</b> dalam:';
    txtInfo.innerHTML = "Pilih Sekarang";
    moreInfo.setAttribute('href', "#vote");
}

// document.getElementById("demo").innerHTML = progres;
//document.getElementById("demo").innerHTML = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes();

// console.log(y+'-'+m+'-'+d+' '+hh+':'+mm);

simplyCountdown(".simply-countdown", {
    year: y, // required
    month: m, // required
    day: d, // required
    hours: hh, // Default is 0 [0-23] integer
    minutes: mm, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: {
        //words displayed into the countdown
        days: { singular: "hari", plural: "hari" },
        hours: { singular: "jam", plural: "jam" },
        minutes: { singular: "menit", plural: "menit" },
        seconds: { singular: "detik", plural: "detik" },
    },

    onEnd: function () {
        // your code
        console.log(progres);
        if (progres !== 2) {
            document.getElementById("redirec").click();
        }

        return;
    },
    refres: 1000, //default refresh every 1s
});