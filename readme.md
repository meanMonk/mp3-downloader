## Youtube Audio Downloader API.

- use express js to prepare the download api.

0. Prepare the list of youtube videos to download
    - Execute the `script/urlextractor.js` from browser console by opening the playlist in youtube which will give list of videos like below.
1. By invoking api below download the mp3 format songs for you in downloads folder.

### Start the server
`yarn start`

```javascript

var axios = require('axios');
var data = JSON.stringify({
  "list": [
    {
      "url": "/watch?v=e25zWcOnrh8",
      "name": "Saaj Hyo Tuza Song - Movie Baban | Marathi Songs 2018 | Onkarswaroop | Bhaurao Nanasaheb Karhade"
    }
    ]
});

var config = {
  method: 'post',
  url: 'localhost:3000/download',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


```


### https://www.youtube.com/watch?v=ULcyLYD3o_M&list=PLO7-VO1D0_6M1xUjj8HxTxskouWx48SNw
```json
[
    {
        "url": "/watch?v=ULcyLYD3o_M",
        "name": "King x Nick Jonas - Maan Meri Jaan (Afterlife) [Official Video]"
    },
    {
        "url": "/watch?v=n0IT7_n4n_U",
        "name": "O Bedardeya (Lyrical) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam | Arijit Singh | Amitabh B"
    },
    {
        "url": "/watch?v=q18sBAVMlMs",
        "name": "THAA - VARINDER BRAR (Official Video) | Latest Punjabi Songs 2023 | New Punjabi Song 2023"
    },
    {
        "url": "/watch?v=c20XsM9BWEM",
        "name": "Spain (Official Video with Extended Version) | Jassa Dhillon | thiarajxtt | VIBIN"
    },
    {
        "url": "/watch?v=BddP6PYo2gs",
        "name": "Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit Singh | Amitabh Bhattacharya"
    },
    {
        "url": "/watch?v=vdY5SFZBgnk",
        "name": "Pushpa: Saami Saami - Full Video Song | Allu Arjun, Rashmika Mandanna | Sunidhi C | DSP | Sukumar"
    },
    {
        "url": "/watch?v=u6xkrtxYzoU",
        "name": "Jai Shree Ram | Ram Setu Anthem | Akshay Kumar, Jacqueline F, Nushrratt B | Vikram M, Shekhar A"
    },
    {
        "url": "/watch?v=huxhqphtDrM",
        "name": "Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar"
    },
    {
        "url": "/watch?v=KUN5Uf9mObQ",
        "name": "Arabic Kuthu - Video Song | Beast | Thalapathy Vijay | Pooja Hegde | Sun Pictures | Nelson | Anirudh"
    },
    {
        "url": "/watch?v=55Kc0mIyeXM",
        "name": "Chola Chola - Full Video | Ponniyin Selvan - 1 | Tamil | Vikram | AR Rahman | Sathya Prakash"
    },
    {
        "url": "/watch?v=IMg_UUJVpMo",
        "name": "Tere Pyaar Mein (Full Video) Tu Jhoothi Main Makkaar| Ranbir,Shraddha| Pritam|Arijit,Nikhita,Amitabh"
    },
    {
        "url": "/watch?v=5Eqb_-j3FDA",
        "name": "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill"
    },
    {
        "url": "/watch?v=J1rOfVst-EQ",
        "name": "Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Pritam, Tanishk, Neeraj, Anees B, Bhushan K"
    },
    {
        "url": "/watch?v=IjvQeKQRfIk",
        "name": "Ratchasa Maamaney - Full Video | Ponniyin Selvan -1 | Tamil | AR Rahman | Karthi, Trisha| Shreya G"
    },
    {
        "url": "/watch?v=gvyUuxdRdR4",
        "name": "Raataan Lambiyan – Official Video | Shershaah | Sidharth – Kiara | Tanishk B| Jubin Nautiyal |Asees"
    },
    {
        "url": "/watch?v=_B6T8O15Ohk",
        "name": "Manike:Thank God | Nora Fatehi, Sidharth M | Tanishk,Yohani,Jubin,Surya R | Rashmi Virag | Bhushan K"
    },
    {
        "url": "/watch?v=j64M3CACcr4",
        "name": "Kaathuvaakula Rendu Kaadhal - Dippam Dappam Lyric| Vijay Sethupathi, Anirudh, Vignesh Shivan"
    },
    {
        "url": "/watch?v=WSH3vFydghs",
        "name": "Lafda (Official Video) R Nait Ft. KD DESI ROCK | Prerna | Anusmriti | Mix Singh | Josan Bros"
    },
    {
        "url": "/watch?v=6RrEQJNZwPQ",
        "name": "No Love (Official Audio) - Shubh"
    },
    {
        "url": "/watch?v=fzOPc-VtcTE",
        "name": "Galliyan Returns Song: Ek Villain Returns | John,Disha,Arjun,Tara | Ankit T,Manoj M, Mohit S,Ektaa K"
    },
    {
        "url": "/watch?v=Qg9LxRHLbAk",
        "name": "KR$NA - I Guess | Official Music Video"
    },
    {
        "url": "/watch?v=7c3-Gei5j4w",
        "name": "Chaand Baaliyan – Aditya A. | Trending Song 2022 | Official Video"
    },
    {
        "url": "/watch?v=9VpeTiz81gc",
        "name": "VIKRAM – Pathala Pathala Lyric | Kamal Haasan | Vijay Sethupathi | Lokesh Kanagaraj | Anirudh"
    },
    {
        "url": "/watch?v=1OjZnGZjOA0",
        "name": "Pathala Pathala Video | VIKRAM | Kamal Haasan | Anirudh Ravichander | Lokesh Kanagaraj"
    },
    {
        "url": "/watch?v=6xoB4ZiKKn0",
        "name": "THE LAST RIDE - Offical Video | Sidhu Moose Wala | Wazir Patar"
    },
    {
        "url": "/watch?v=A66TYFdz8YA",
        "name": "King - Tu Aake Dekhle | The Carnival | The Last Ride | Prod. by Shahbeatz | Latest Hit Songs 2020"
    },
    {
        "url": "/watch?v=RLhuPD2ASKE",
        "name": "We Rollin (Official Audio) - Shubh"
    },
    {
        "url": "/watch?v=tpFljbJxZiw",
        "name": "LEVELS - Official Video | Sidhu Moose Wala ft Sunny Malton | The Kidd"
    },
    {
        "url": "/watch?v=1pkcaeMRrns",
        "name": "Maiyya Mainu - Jersey | Shahid Kapoor, Mrunal T| Sachet-Parampara,Shellee| Gowtam T| 22nd April 2022"
    },
    {
        "url": "/watch?v=8FAUEv_E_xQ",
        "name": "Arabic Kuthu | Halamithi Habibo -Lyric Video| Beast| Thalapathy Vijay| Sun Pictures| Nelson| Anirudh"
    },
    {
        "url": "/watch?v=v2IGNN7CA4M",
        "name": "Pushpa: Srivalli - Lyrical (Hindi) | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar"
    },
    {
        "url": "/watch?v=V7LwfY5U5WI",
        "name": "Ranjha – Official Video | Shershaah | Sidharth–Kiara | B Praak | Jasleen Royal | Romy | Anvita Dutt"
    },
    {
        "url": "/watch?v=vX2cDW8LUWk",
        "name": "Excuses (Official Video) | AP Dhillon | Gurinder Gill | Intense"
    },
    {
        "url": "/watch?v=zjMtaw2mrrc",
        "name": "Illegal Weapon 2.0 - Street Dancer 3D | Varun D, Shraddha K | Tanishk B,Jasmine Sandlas,Garry Sandhu"
    },
    {
        "url": "/watch?v=VEkj2sanAeU",
        "name": "Saiyaan Ji ► Yo Yo Honey Singh, Neha Kakkar|Nushrratt Bharuccha| Lil G, Hommie D| Mihir G|Bhushan K"
    },
    {
        "url": "/watch?v=FpY6B-slnV8",
        "name": "Gehraiyaan Title Track - Official Video | Deepika Padukone, Siddhant, Ananya, Dhairya | OAFF, Savera"
    },
    {
        "url": "/watch?v=6eGCi4SVy94",
        "name": "Doobey - Official Video | Gehraiyaan | Deepika Padukone, Siddhant, Ananya, Dhairya | OAFF, Savera"
    },
    {
        "url": "/watch?v=fRD_3vJagxk",
        "name": "Master - Vaathi Coming Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj"
    },
    {
        "url": "/watch?v=uKHlnmepnNA",
        "name": "Nayan Video Song | Dhvani B Jubin N | Lijo G Dj Chetas Manoj M Manhar U | Radhika Vinay | Bhushan K"
    },
    {
        "url": "/watch?v=mIhIjeq3SZQ",
        "name": "Pagal Nahi Hona (Official Video) Sunanda Sharma | Sonu Sood | Jaani | Avvy Sra | B2gether | Sky"
    },
    {
        "url": "/watch?v=uJ6WU-u4i3w",
        "name": "Mehendi Wale Haath |Guru Randhawa Sanjana Sanghi |Sayeed Q Sachet-Parampara Arvindr |Bhushan Kumar"
    },
    {
        "url": "/watch?v=YPohR_9v6HA",
        "name": "Titliaan | Harrdy Sandhu | Sargun Mehta | Afsana Khan | Jaani | Avvy Sra | Arvindr Khaira"
    },
    {
        "url": "/watch?v=TCx1yMegJ4A",
        "name": "Naach Meri Rani: Guru Randhawa Feat. Nora Fatehi | Tanishk Bagchi | Nikhita Gandhi | Bhushan Kumar"
    },
    {
        "url": "/watch?v=rCoPr8UwRMc",
        "name": "Waalian : Harnoor (Full Song) Gifty | The Kidd | Rubbal GTR | Punjabi Song | JattLife Studios"
    },
    {
        "url": "/watch?v=2VOL-VWXMnQ",
        "name": "Don - Jalabulajangu Lyric | Sivakarthikeyan | Anirudh Ravichander | Cibi Chakaravarthi"
    },
    {
        "url": "/watch?v=AZmAgoir1Tc",
        "name": "Sumit Goswami - Feelings | KHATRI | Deepesh Goyal | Haryanvi Song 2020"
    },
    {
        "url": "/watch?v=EQlYzDdOLxI",
        "name": "Mirchi Lagi Toh - Coolie No.1 | VarunDhawan, Sara Ali Khan| Alka Yagnik, Kumar Sanu, Lijo, Dj Chetas"
    },
    {
        "url": "/watch?v=tLqtnGLfm4Q",
        "name": "Lyrical: Tum Hi Aana | Marjaavaan | Riteish D, Sidharth M, Tara S |Jubin Nautiyal,Payal Dev,Kunaal V"
    },
    {
        "url": "/watch?v=e0j_YW5QnoQ",
        "name": "Housefull 4: Shaitan Ka Saala Full Video | Akshay Kumar | Sohail Sen Feat. Vishal Dadlani"
    },
    {
        "url": "/watch?v=9-AKLAfpjrI",
        "name": "Lyrical: Khairiyat | Chhichhore | Nitesh Tiwari | Arijit Singh | Sushant, Shraddha | Pritam"
    },
    {
        "url": "/watch?v=w5Aioq5VYF0",
        "name": "DIVINE - MIRCHI Feat. Stylo G, MC Altaf & Phenom | Official Music Video"
    },
    {
        "url": "/watch?v=9i1dXa13CxA",
        "name": "Ammy Virk: Main Suneya Video Song Feat. Simran Hundal, Rohaan |SunnyV, Raj |Navjit B | Bhushan Kumar"
    },
    {
        "url": "/watch?v=ZTBwxy4wsBQ",
        "name": "B Praak: Dil Tod Ke Official Song | Rochak Kohli , Manoj M |Abhishek S, Kaashish V | Bhushan Kumar"
    },
    {
        "url": "/watch?v=ww3hx_z-Gq8",
        "name": "LUDO: Aabaad Barbaad | Abhishek B, Aditya K, Rajkummar R, Sanya M, Fatima S | Arijit, Pritam,Sandeep"
    },
    {
        "url": "/watch?v=pr-4GbR4DpQ",
        "name": "Dil Bechara- Taare Ginn |Official Video|Sushant, Sanjana|A.R.Rahman|Mohit, Shreya|Mukesh C|Amitabh B"
    },
    {
        "url": "/watch?v=UY15igCWc2U",
        "name": "Tere Naal Video Song | Tulsi Kumar, Darshan Raval | Gurpreet Saini, Gautam G Sharma | Bhushan Kumar"
    },
    {
        "url": "/watch?v=2mDCVzruYzQ",
        "name": "#AlaVaikunthapurramuloo - ButtaBomma Full Video Song (4K) | Allu Arjun | Thaman S | Armaan Malik"
    },
    {
        "url": "/watch?v=fIip0BH6z7I",
        "name": "Ek Tarfa - Darshan Raval | Official Music Video | Romantic Song 2020 | Indie Music Label"
    },
    {
        "url": "/watch?v=T_NtMcaCEYE",
        "name": "Bheegi Bheegi Official Music Video | Neha Kakkar, Tony Kakkar | Prince Dubey | Bhushan Kumar"
    },
    {
        "url": "/watch?v=4wub_PF4Oaw",
        "name": "DEAR MAMA (Full Video) Sidhu Moose Wala |Kidd| HunnyPK Films | GoldMedia | Latest Punjabi Songs 2020"
    },
    {
        "url": "/watch?v=IPkHvVtYnOI",
        "name": "RINGTONE - Preetinder | Jannat Zubair & Siddharth Nigam | Rajat Nagpal | Vicky Sandhu | Anshul Garg"
    },
    {
        "url": "/watch?v=RKioDWlajvo",
        "name": "Lehanga : Jass Manak (Official Video) Satti Dhillon | Punjabi Songs | GK Digital | Geet MP3"
    },
    {
        "url": "/watch?v=QiBeywmJoRY",
        "name": "Teri Mitti - Tribute | Akshay Kumar | B Praak | Arko | Manoj Muntashir | Kesari | Zee Music Company"
    },
    {
        "url": "/watch?v=zqzwIxptTPo",
        "name": "Proud To Be Desi (Official Video) | Khan Bhaini ft Fateh | Syco Style | Latest Punjabi Songs 2020"
    },
    {
        "url": "/watch?v=n5WnMJ0J6qA",
        "name": "GOA BEACH - @TonyKakkar Neha Kakkar | Aditya Narayan | Kat | Anshul Garg | Hindi Song 2020"
    },
    {
        "url": "/watch?v=Bg8Yb9zGYyA",
        "name": "#AlaVaikunthapurramuloo - Ramuloo Ramulaa Full Video Song || Allu Arjun || Trivikram | Thaman S"
    },
    {
        "url": "/watch?v=hMy5za-m5Ew",
        "name": "FILHALL | Akshay Kumar Ft Nupur Sanon | BPraak | Jaani | Arvindr Khaira | Ammy Virk | DESI MELODIES"
    },
    {
        "url": "/watch?v=8WWv5_k8D14",
        "name": "8 Parche | Baani Sandhu | Gur Sidhu | Gurneet Dosanjh | Punjabi Song | White Hill Music"
    },
    {
        "url": "/watch?v=XjJTtKTbR84",
        "name": "Neeli Neeli Aakasam Full Video Song - 30 Rojullo Preminchadam Ela | Pradeep Machiraju | Sid Sriram"
    },
    {
        "url": "/watch?v=l75z7FrYRXI",
        "name": "Full Song: Muqabla | Street Dancer 3D |A.R. Rahman, Prabhudeva, Varun D, Shraddha K, Tanishk B"
    },
    {
        "url": "/watch?v=zaCbuB3w0kg",
        "name": "EMIWAY - FIRSE MACHAYENGE (OFFICIAL MUSIC VIDEO)"
    },
    {
        "url": "/watch?v=K-lNCGrkLB0",
        "name": "GULZAAR CHHANIWALA - BHAGAT ( Full Song ) | Latest Haryanvi Song 2020"
    },
    {
        "url": "/watch?v=q_0uF80IZXM",
        "name": "Garmi Song | Street Dancer 3D | Varun D, Nora F, Shraddha K, Badshah, Neha K | Remo D | T-Series"
    },
    {
        "url": "/watch?v=4uMchksQJng",
        "name": "Sheikh (Full Video) Karan Aujla I Rupan Bal I Manna I Latest Punjabi Songs 2020"
    },
    {
        "url": "/watch?v=IuL-IN2mkbo",
        "name": "SUPERSTAR - Riyaz Aly & Anushka Sen | Neha Kakkar | Vibhor Parashar | Sarmad | Raghav | Babbu"
    },
    {
        "url": "/watch?v=9mWdw-09dso",
        "name": "Dheeme Dheeme - @TonyKakkar | Neha Sharma | Official Music Video"
    },
    {
        "url": "/watch?v=OCg6BWlAXSw",
        "name": "#AlaVaikunthapurramuloo - Samajavaragamana Full Video Song (4K) | Allu Arjun | Trivikram | Thaman S"
    },
    {
        "url": "/watch?v=WJP1HWB21EI",
        "name": "KALLA SOHNA NAI - Neha Kakkar | Asim Riaz & Himanshi Khurana | Babbu | Rajat Nagpal | Anshul Garg"
    },
    {
        "url": "/watch?v=LYEqeUr-158",
        "name": "Sauda Khara Khara |Good Newwz| Akshay kumar , Kareena , Diljit , Kiara| Sukhbir,Dhvani,Lijo,DjChetas"
    },
    {
        "url": "/watch?v=rvKujnIUQIY",
        "name": "Mera Bhai | Bhavin & Vishal | Vikas Naidu, Shubham Singh | Zee Music Originals"
    },
    {
        "url": "/watch?v=K0ibsAQTyRQ",
        "name": "Aaj Bhi (Official Video) - Vishal Mishra | Ali Fazal, Surbhi Jyoti | VYRLOriginals"
    },
    {
        "url": "/watch?v=0NhiNqI0SFs",
        "name": "Jinke Liye (Official Video) | Neha Kakkar Feat. Jaani | B Praak | Arvindr Khaira | Bhushan Kumar"
    },
    {
        "url": "/watch?v=fbZpz9KbiAY",
        "name": "Moscow Mashuka: YO YO Honey Singh Feat. Neha Kakkar | Bhushan Kumar | T-Series"
    },
    {
        "url": "/watch?v=xCBF6mvSDZc",
        "name": "AEROPLANE - Mr. Faisu & Jannat Zubair | Vibhor Parashar | Rajat Nagpal | Anshul Garg"
    },
    {
        "url": "/watch?v=IVMquMDUQZY",
        "name": "Muqabla - Street Dancer 3D |A.R. Rahman, Prabhudeva, Varun D, Shraddha K, Tanishk B, Yash ,Parampara"
    },
    {
        "url": "/watch?v=3fSlGG_qnzs",
        "name": "Bhula Dunga - Darshan Raval | Official Video | Sidharth Shukla | Shehnaaz Gill | Indie Music Label"
    },
    {
        "url": "/watch?v=miALiNbU0wY",
        "name": "Mere Angne Mein | Jacqueline F, Asim Riaz | Neha K, Raja H, Tanishk B | Radhika - Vinay | Bhushan K"
    },
    {
        "url": "/watch?v=yehE83hDQcA",
        "name": "Tiger Shroff | I Am A Disco Dancer 2.0 | Benny Dayal |Salim Sulaiman | Bosco | Official Music Video"
    },
    {
        "url": "/watch?v=Mc3Vt37d04M",
        "name": "Akull - Laal Chunariya (Official Video) | Chetna Pande | Mellow D, Dhruv Yogi | VYRL Originals"
    },
    {
        "url": "/watch?v=gzmXpwF_MK4",
        "name": "MANJHA - Aayush Sharma & Saiee M Manjrekar | Vishal Mishra | Riyaz Aly | Anshul Garg"
    },
    {
        "url": "/watch?v=PHskP9wglJ8",
        "name": "Baaghi 3: Do You Love Me | Disha Patani | Tiger S, Shraddha K | René Bendali | Tanishk B | Nikhita"
    },
    {
        "url": "/watch?v=yJqcJE2RL8E",
        "name": "Yeh Dooriyan - Official Music Video | Love Aaj Kal | Sara & Kartik | Pritam | Mohit Chouhan"
    },
    {
        "url": "/watch?v=vjOKuvBjkS8",
        "name": "Baaghi 3: Dus Bahane 2.0 | Vishal & Shekhar FEAT. KK, Shaan & Tulsi Kumar | Tiger S, Shraddha K"
    },
    {
        "url": "/watch?v=xeqJU7PLseg",
        "name": "Baaghi 3: BHANKAS | Tiger S, Shraddha K | Bappi Lahiri,Dev Negi,Jonita Gandhi | Tanishk Bagchi"
    },
    {
        "url": "/watch?v=SN958msmXeI",
        "name": "SWAG SE SOLO Song: Salman Khan | Remo D'souza | Sachet Tandon, Tanishk Bagchi Vayu | Bhushan Kumar"
    },
    {
        "url": "/watch?v=GND-hpSMlFk",
        "name": "Tu Bhi Royega - Bhavin, Sameeksha, Vishal | Jyotica Tangri | Vivek Kar| Kumaar | Zee Music Originals"
    },
    {
        "url": "/watch?v=5LBB6OV3Ano",
        "name": "Mere Liye Tum Kaafi Ho Song | Shubh Mangal Zyada Saavdhan | Ayushman Khurana,Jeetu | Tanishk - Vayu"
    },
    {
        "url": "/watch?v=cd-ozdPSAIA",
        "name": "Hui Malang | MALANG | Aditya R K, Disha P, Anil K, Kunal K | Asees K | 7th Feb 2020"
    },
    {
        "url": "/watch?v=6BYIKEH0RCQ",
        "name": "Ritviz - Liggi [Official Music Video]"
    }
]
```


### Jubin
```json
[
    {
        "url": "/watch?v=TmRgK-pXH9c",
        "name": "Official Video: Humnava Mere Song | Jubin Nautiyal | Manoj Muntashir | Rocky - Shiv | Bhushan Kumar"
    },
    {
        "url": "/watch?v=tLqtnGLfm4Q",
        "name": "Lyrical: Tum Hi Aana | Marjaavaan | Riteish D, Sidharth M, Tara S |Jubin Nautiyal,Payal Dev,Kunaal V"
    },
    {
        "url": "/watch?v=VAZxSoKb65o",
        "name": "Taaron Ke Shehar Song: Neha Kakkar, Sunny Kaushal | Jubin Nautiyal,Jaani | Bhushan Kumar | Arvindr K"
    },
    {
        "url": "/watch?v=1--qqQrimMA",
        "name": "Dil Galti Kar Baitha Hai | Meet Bros Ft. Jubin Nautiyal | Mouni Roy | Manoj M | Ashish P | Bhushan K"
    },
    {
        "url": "/watch?v=SVjkxdjivts",
        "name": "Meri Aashiqui Song | Rochak Kohli Feat. Jubin Nautiyal | Ihana D | Shree Anwar Sagar | Bhushan Kumar"
    },
    {
        "url": "/watch?v=sMoM0fYO-Qg",
        "name": "Bewafa Tera Masoom Chehra | Rochak Kohli Feat. Jubin Nautiyal, Rashmi V | Karan Mehra, Ihana Dhillon"
    },
    {
        "url": "/watch?v=uKHlnmepnNA",
        "name": "Nayan Video Song | Dhvani B Jubin N | Lijo G Dj Chetas Manoj M Manhar U | Radhika Vinay | Bhushan K"
    },
    {
        "url": "/watch?v=Z7XiKx_rj2I",
        "name": "Wafa Na Raas Aayee Song Jubin Nautiyal Ft.Himansh K,Arushi N, Meet Bros|Rashmi V|Ashish P| Bhushan K"
    },
    {
        "url": "/watch?v=VYslt8bc-4Q",
        "name": "Meri Zindagi Hai Tu (Song) Satyameva Jayate 2 | John A, Divya K | Rochak ft Jubin, Neeti | Manoj M"
    },
    {
        "url": "/watch?v=pgQPquFKKpc",
        "name": "Dil Chahte Ho | Jubin Nautiyal, Mandy Takhar | Payal Dev, A.M.Turaz | Navjit Buttar | Bhushan Kumar"
    },
    {
        "url": "/watch?v=VFTSW817JlI",
        "name": "Tum Hi Aana Video | Marjaavaan | Riteish D, Sidharth M, Tara S | Jubin Nautiyal | Payal Dev Kunaal V"
    },
    {
        "url": "/watch?v=AV8xUbIFhdc",
        "name": "Chitthi Video Song | Feat. Jubin Nautiyal & Akanksha Puri | Kumaar | New Song 2019 | T-Series"
    },
    {
        "url": "/watch?v=Tc8kb5HBNrA",
        "name": "Video: Mast Nazron Se | Rochak K ft Jubin Nautiyal, Nikita Dutta | Manoj M | Ashish P | Bhushan K"
    },
    {
        "url": "/watch?v=jcV7i0WM9jU",
        "name": "Lo Safar Song With Lyrics | Baaghi 2 | Tiger Shroff | Disha Patani | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=-JEPg3gsiII",
        "name": "Bewafa Tera Muskurana Song | Meet Bros Ft. Jubin Nautiyal |Himansh K,Akanksha P|Rashmi V Bhushan K"
    },
    {
        "url": "/watch?v=ITyHqStTDeg",
        "name": "Zindagi Kuch Toh Bata (Reprise) Full Song with LYRICS Pritam | Salman Khan | Bajrangi Bhaijaan"
    },
    {
        "url": "/watch?v=LZ-Qn4q3sbU",
        "name": "Tumse Pyaar Karke (Video) Tulsi Kumar, Jubin N, Gurmeet C, Ihana D, Payal, Kunaal, Navjit, Bhushan K"
    },
    {
        "url": "/watch?v=huXCTt-lYzs",
        "name": "So Gaya Yeh Jahan Video | Bypass Road | Neil Nitin Mukesh, Adah S | Jubin Nautiyal, Nitin M,Saloni T"
    },
    {
        "url": "/watch?v=_YG_tdQTOvM",
        "name": "Dil Chahte Ho (LYRICAL) Jubin Nautiyal, Mandy Takhar | Payal Dev, AM Turaz |Navjit B | Bhushan Kumar"
    },
    {
        "url": "/watch?v=1-H12t6CYrM",
        "name": "O Aasman Wale (Official Video) Ft Jubin Nautiyal, Neha Khan | Rochak K, Manoj M, Navjit B |Bhushan K"
    },
    {
        "url": "/watch?v=oTYb7dzYQQk",
        "name": "Haiya Ho Full Video | Marjaavaan | Sidharth M, Rakul Preet | Tulsi Kumar, Jubin Nautiyal ,Tanishk B"
    },
    {
        "url": "/watch?v=C0KbzZj3UjA",
        "name": "Kisi Se Pyar Ho Jaye Song (Video) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=q73giedzg7U",
        "name": "Toh Aagaye Hum | Mithoon Feat Jubin Nautiyal | Sayeed Quadri | Ashish Panda | Bhushan Kumar"
    },
    {
        "url": "/watch?v=LMGFhElKlIY",
        "name": "Meri Tarah (Video) | Jubin N, Payal D | Himansh K, Heli, Gautam G | Kunaal V | Navjit B | Bhushan K"
    },
    {
        "url": "/watch?v=BxOsU5cmnCU",
        "name": "Lyrical: Phir Mulaaqat | WHY CHEAT INDIA | Emraan Hashmi Shreya D | Jubin Nautiyal Kunaal Rangon"
    },
    {
        "url": "/watch?v=_pWYaGi_FiM",
        "name": "Mere Baba Song: Jubin Nautiyal | Payal Dev | Manoj Muntashir | Kashan Shahid | Bhushan K"
    },
    {
        "url": "/watch?v=O65JHeSDhuc",
        "name": "Kaabil Hoon Song (Video) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal, Palak"
    },
    {
        "url": "/watch?v=Is3lBP4PW90",
        "name": "Jubin Nautiyal: Teri Galliyon Se | Gurmeet Choudhary, Arushi, Navjit | Meet Bros, Rashmi | Bhushan K"
    },
    {
        "url": "/watch?v=1qmPNot9NJs",
        "name": "Jubin Nautiyal: Shri Krishna Govind Hare Murari | Raaj Aashoo, Murali A | Bhushan Kumar | T-Series"
    },
    {
        "url": "/watch?v=2tq1IxE8o1Q",
        "name": "Kaabil Hoon Song (Audio) Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal, Palak"
    },
    {
        "url": "/watch?v=fD6SzYIRr4c",
        "name": "Romantic Hits By Jubin Nautiyal | Audio Jukebox | Latest Hindi Romantic Songs | T-Series"
    },
    {
        "url": "/watch?v=MeNb9SKZNGc",
        "name": "Dil Pe Zakhm (Video) Rochak ft Jubin Nautiyal, Gurmeet C, Arjun, Kashika, Manoj M, Ashish, Bhushan K"
    },
    {
        "url": "/watch?v=CFXSGDyi3Aw",
        "name": "Jubin Nautiyal, Payal Dev: Meethi Meethi | Rashmi Virag | Shanvi Srivastava | Vijay,Bosco| Bhushan K"
    },
    {
        "url": "/watch?v=eDjiMyXvOng",
        "name": "Full Video: So Gaya Yeh Jahan | Bypass Road | Neil Nitin Mukesh, Adah S | Jubin Nautiyal, Nitin M"
    },
    {
        "url": "/watch?v=4s2mSWiraSg",
        "name": "Kinna Sona Video | Marjaavaan | Sidharth M, Tara S | Meet Bros, Kumaar, Jubin N, Dhvani Bhanushali"
    },
    {
        "url": "/watch?v=PSxYv2F_xN8",
        "name": "Ik Vaari Aa/Nadaan Parindey/Tum Ho Toh | Shirley Setia,Jubin Nautiyal Abhijit V | Bhushan K Ahmed K"
    },
    {
        "url": "/watch?v=O-Rnan8IOZo",
        "name": "Jubin Nautiyal: Barsaat Ho Jaaye | Love Song 2022 | Shivin N, Ridhi D| Payal D, Rashmi V | Bhushan K"
    },
    {
        "url": "/watch?v=AJyIqxp9yqM",
        "name": "Marjaavaan: Haiya Ho | Sidharth M, Rakul Preet | Tulsi Kumar, Jubin Nautiyal ,Tanishk B"
    },
    {
        "url": "/watch?v=LwlrImJSuEg",
        "name": "Lyrical: Kaash Tu Mila Hota | Code Blue | Alok Nath, Sushmita Mukherjee | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=bqP-CVhtQfc",
        "name": "'Zindagi Kuch Toh Bata (Reprise) Full AUDIO Song Pritam | Salman Khan, Kareena K | Bajrangi Bhaijaan"
    },
    {
        "url": "/watch?v=_OWnl5hlDi8",
        "name": "Full Video:Tum Hi Aana (Duet Version)| Riteish D,Sidharth M,Tara S|Jubin Nautiyal, Dhvani Bhanushali"
    },
    {
        "url": "/watch?v=bKi3ElqWhBY",
        "name": "Jaya Kishori, Jubin Nautiyal : Mere Kanha | New Bhajan 2022 | Raaj A, Seepi J, Lovesh N | Bhushan K"
    },
    {
        "url": "/watch?v=gNVC5olXqpU",
        "name": "Dotara (Video) Jubin Nautiyal, Mouni Roy, Payal Dev | Darsh Kothari,Vayu, BLM Studios| Bhushan Kumar"
    },
    {
        "url": "/watch?v=vxegdVn9BZs",
        "name": "Cover Version : Humnava Mere Song | Jubin Nautiyal | Amrita Nayak"
    },
    {
        "url": "/watch?v=7U8aFju2RM4",
        "name": "LYRICAL: Haiya Ho | Marjaavaan | Sidharth M, Rakul Preet | Tulsi Kumar, Jubin Nautiyal ,Tanishk B"
    },
    {
        "url": "/watch?v=CLJ7qlH7XEo",
        "name": "Jubin Nautiyal: Main Balak Tu Mata | Gulshan Kumar | Manan B | Manoj M | Akanksha P | Bhushan Kumar"
    },
    {
        "url": "/watch?v=EwIljm4gFoE",
        "name": "Bawara Mann Full Video | Jolly LL.B 2 | Akshay Kumar, Huma Qureshi | Jubin Nautiyal & Neeti Mohan"
    },
    {
        "url": "/watch?v=xuMFlMMz--4",
        "name": "Bawara Mann Video Song | Jolly LL.B 2 | Akshay Kumar, Huma Qureshi | Jubin Nautiyal & Neeti Mohan |"
    },
    {
        "url": "/watch?v=7NdEeYdKZGA",
        "name": "Tu Mera Hogaya Hai Song | Tadap | Ahan Shetty, Tara Sutaria | Pritam, Jubin Nautiyal | 3 Dec 21'"
    },
    {
        "url": "/watch?v=FGuH7XUrOtQ",
        "name": "Jubin Nautiyal ft. Yohani: Tu Saamne Aaye | Sakshi Joshi, Mateen Vakil |Rocky K,Navjit B | Bhushan K"
    },
    {
        "url": "/watch?v=8B0a0XgobB4",
        "name": "Jubin Nautiyal : Haaye Dil (Full Song) | T-Series"
    },
    {
        "url": "/watch?v=Qego0XtU5J8",
        "name": "Tera Junoon Video Song | Machine | Jubin Nautiyal |Mustafa & Kiara Advani |T-Series"
    },
    {
        "url": "/watch?v=9xcFFz8nZgI",
        "name": "Jubin Nautiyal: Govind Bolo Song | Raaj Aashoo | Aditya D, Pankaj N | Bhushan Kumar | T-Series"
    },
    {
        "url": "/watch?v=9W6U5OBICnY",
        "name": "Kisi Se Pyar Ho Jaye Song (Lyrical Video) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=ivvauWrXPmg",
        "name": "Tera Junoon Full Video Song | Machine | Jubin Nautiyal | Mustafa Kiara Advani Eshan Shanker|T-Series"
    },
    {
        "url": "/watch?v=_FTHYBUGfB8",
        "name": "Kabira 2 (कबीर दोहे): Jubin Nautiyal | Kabir Das | Shakti A | Raaj Aashoo | Lovesh N | Bhushan Kumar"
    },
    {
        "url": "/watch?v=rfF6vDzaPjs",
        "name": "Dil Jisse Zinda Hain | Nusrat Fateh Ali Khan |Gurmeet, Giorgia |Meet Bros,Jubin,Youngveer |Bhushan K"
    },
    {
        "url": "/watch?v=_KgB9lLIh1o",
        "name": "Kuch Din Video Song | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal | T-Series"
    },
    {
        "url": "/watch?v=XRvizAylhDo",
        "name": "Kaun Kehte Hain Bhagwan Aate Nahi (Achyutam Keshavam) Tulsi K, Jubin N, Payal D, Lovesh N |Bhushan K"
    },
    {
        "url": "/watch?v=Usng5mo30lk",
        "name": "Kaabil Hoon (Full Video Song) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal, Palak"
    },
    {
        "url": "/watch?v=A4yr7su3z6Y",
        "name": "Hai Pyaar Kya? Video | Jubin Nautiyal, Kritika Kamra | Rocky - Jubin | Love Song 2019 | T-Series"
    },
    {
        "url": "/watch?v=Db5xeR6HlEU",
        "name": "Akh Lad Jaave Song | T-Series Acoustics | JUBIN NAUTIYAL | Loveyatri"
    },
    {
        "url": "/watch?v=XqTlgbrqfLU",
        "name": "Taaron Ke Shehar Lyrical Song: Neha Kakkar, Sunny Kaushal | Jubin Nautiyal,Jaani | Bhushan Kumar"
    },
    {
        "url": "/watch?v=WQ2rC2m6vsk",
        "name": "Full Video: Tum Hi Aana (Sad Version) | Riteish D, Sidharth M, Tara S |Jubin Nautiyal, Payal Dev"
    },
    {
        "url": "/watch?v=1jDkrhxWLUA",
        "name": "Full Audio: Tum Hi Aana | Marjaavaan |Riteish D,Sidharth M,Tara S |Jubin Nautiyal | Payal D,Kunaal V"
    },
    {
        "url": "/watch?v=MT6-vqZyCiY",
        "name": "DIL JAANIYE Video | Khandaani Shafakhana | Sonakshi Sinha |Jubin Nautiyal,Payal Dev | Love Song 2019"
    },
    {
        "url": "/watch?v=nj62MrCR0ts",
        "name": "Making of Tum Hi Aana | Marjaavaan | Riteish D, Sidharth M, Tara S | Jubin Nautiyal | Payal Dev"
    },
    {
        "url": "/watch?v=RZgDCFUauZE",
        "name": "Hai Kaisi Kaisi (Video) Jubin Nautiyal | Rocky Khanna | Crevixa | Samyra | Bhushan Kumar"
    },
    {
        "url": "/watch?v=QajiwYezaFY",
        "name": "Meri Aashiqui Lyrical | Rochak Kohli, Jubin Nautiyal | Ihana D | Shree Anwar Sagar | Bhushan Kumar"
    },
    {
        "url": "/watch?v=AgdhiCNqwEI",
        "name": "Super 7 : Best Of JUBIN NAUTIYAL Songs | Video Jukebox | Latest Hindi Romantic Songs"
    },
    {
        "url": "/watch?v=dKhI0wE9Zy8",
        "name": "Kaash Tu Mila Hota Video | Code Blue | Alok Nath, Sushmita Mukherjee | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=fYKFpdgQxDA",
        "name": "Full Audio:Tum Hi Aana (Duet Version)| Riteish D,Sidharth M,Tara S|Jubin Nautiyal, Dhvani Bhanushali"
    },
    {
        "url": "/watch?v=13mSfhhtSPA",
        "name": "Ganesha Song | Jubin Nautiyal | Arjan Bajwa & Hritiqa Chheber | Murali Agarwal | Raaj Aashoo"
    },
    {
        "url": "/watch?v=pwVQmA4FVkE",
        "name": "Kuch Din Full Song (Audio) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=0cQ7IyXjM_o",
        "name": "GHAR AAJA: ELECTRO FOLK | Jubin Nautiyal, Juggy Sandhu | Aditya Dev & Javed Bashir | Rocky - Shiv"
    },
    {
        "url": "/watch?v=IRFQAf_l5_c",
        "name": "Tujhe Paane Ko Video | Shalin Bhanot,Priyanka Agrawal | Jubin Nautiyal Neeti Mohan Abhijit V Manoj M"
    },
    {
        "url": "/watch?v=TJ4d7X8-s9Y",
        "name": "Kisi Se Pyar Ho Jaye Song (Audio) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=vmiloEv8iIw",
        "name": "Kuch Din (Full Video Song) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal | T-Series"
    },
    {
        "url": "/watch?v=QgM-xZdGGpg",
        "name": "Tera Junoon Full Audio Song | Machine | Jubin Nautiyal |Mustafa & Kiara Advani |T-Series"
    },
    {
        "url": "/watch?v=KHARyHcM2mY",
        "name": "Full Audio: Tum Hi Aana (Happy Version) | Riteish D, Sidharth M, Tara S | Jubin Nautiyal, Payal Dev"
    },
    {
        "url": "/watch?v=UPZ8qT0weVU",
        "name": "Lyrical :Chitthi Video | Feat. Jubin Nautiyal & Akanksha Puri | Kumaar | New Song 2019 | T-Series"
    },
    {
        "url": "/watch?v=z1_YqTE0y0Y",
        "name": "Meri Maa Song | Jubin Nautiyal | Javed-Mohsin | Mother’s Day Special Song | T-Series"
    },
    {
        "url": "/watch?v=_hZG0gazawg",
        "name": "Kuch Din Lyrical Video Song | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal | T-Series"
    },
    {
        "url": "/watch?v=7VIyDowYIa4",
        "name": "Nayan Song Teaser: Dhvani Bhanushali, Jubin Nautiyal | Bhushan Kumar | Radhika,Vinay|Releasing 8 Dec"
    },
    {
        "url": "/watch?v=kPuRw2h7XGg",
        "name": "So Gaya Yeh Jahan (With Lyrics) | Bypass Road | Neil Nitin Mukesh, Adah S |Jubin Nautiyal, Nitin M"
    },
    {
        "url": "/watch?v=8WKwJfYge7Q",
        "name": "Humnava Mere | T-Series Acoustics | Jubin Nautiyal | Romantic Songs"
    },
    {
        "url": "/watch?v=1SrR3PL8Wec",
        "name": "Ae Mere Des Video Song | Jubin Nautiyal | Lalit Prabhakar | Latest Hindi Song 2019 | T-Series"
    },
    {
        "url": "/watch?v=FsKHQ81Cbdk",
        "name": "10 Minute Yoga Back Stretches For Pain, How To Routine | Beginners Yoga Jen Hilman"
    },
    {
        "url": "/watch?v=A1U3LiaFeoM",
        "name": "Finito Video Song | AMAVAS | Sachiin J Joshi, Vivan, Navneet | Jubin Nautiyal, Sukriti Kakar, Ikka"
    },
    {
        "url": "/watch?v=vyFfIKiPOzU",
        "name": "Song Teaser: Meri Aashiqui | Rochak Kohli Feat. Jubin Nautiyal | Bhushan Kumar | Releasing ► 3 JUNE"
    },
    {
        "url": "/watch?v=fGWN9BDcbBM",
        "name": "Toh Aagaye Hum Teaser | Mithoon | Jubin Nautiyal | Sayeed Quadri | Releasing 5 Jan 2021"
    },
    {
        "url": "/watch?v=Qwwj19OwgTI",
        "name": "Taaron Ke Shehar Audio Song: Neha Kakkar, Sunny Kaushal | Jubin Nautiyal,Jaani | Bhushan Kumar"
    },
    {
        "url": "/watch?v=wBNcXF6psDs",
        "name": "Dil Chahte Ho (AUDIO) Jubin Nautiyal, Mandy Takhar | Payal Dev, AM Turaz |Navjit B | Bhushan Kumar"
    },
    {
        "url": "/watch?v=9fhZiZ5r7Dk",
        "name": "Toh Aagaye Hum Teaser 2 | Mithoon | Jubin Nautiyal | Sayeed Quadri | Releasing 5 Jan 2021"
    },
    {
        "url": "/watch?v=yM8xTEEYNE8",
        "name": "Hai Pyaar Kya? (Song Teaser) | JUBIN NAUTIYAL | Kritika Kamra | Song Out 1 August"
    },
    {
        "url": "/watch?v=qOzNvmv6APE",
        "name": "Dil Chahte Ho Teaser | Jubin Nautiyal,Mandy Takhar | Payal Dev | Bhushan Kumar | Releasing 27 August"
    },
    {
        "url": "/watch?v=QdSruzbz2Gw",
        "name": "Full Audio: Tum Hi Aana (Sad Version) | Riteish D, Sidharth M, Tara S |Jubin Nautiyal, Payal Dev"
    },
    {
        "url": "/watch?v=-HTa0cJLOvI",
        "name": "Meri Aashiqui- Behind the Scenes | Rochak Kohli, Jubin Nautiyal | Ihana D | Shree Anwar Sagar"
    },
    {
        "url": "/watch?v=uSggSYy3zeQ",
        "name": "Bawara Mann Audio Song |Jolly LL.B 2 | Akshay Kumar, Huma Qureshi | Jubin Nautiyal & Neeti Mohan"
    },
    {
        "url": "/watch?v=RqLU1lYygFI",
        "name": "Song Teaser: Tujhe Paane Ko | Feat. Shalin Bhanot & Priyanka Agrawal | Jubin Nautiyal & Neeti Mohan"
    },
    {
        "url": "/watch?v=RVH7GZ_Kbdw",
        "name": "Kaabil Hoon - Sad Version (Full Video) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=lnYAzXOwxrM",
        "name": "Dil Beparwah Lyrical | Phamous | Jimmy Sheirgill | Shriya Saran | Jubin Nautiyal & Jonita Gandhi"
    },
    {
        "url": "/watch?v=IOaH0CkpUzw",
        "name": "Lyrical: Hai Pyaar Kya? | Jubin Nautiyal, Kritika Kamra | Rocky - Jubin | T-Series"
    },
    {
        "url": "/watch?v=BAeZ7pwzDhs",
        "name": "Bawara Mann Lyrical Video | Akshay Kumar, Huma Qureshi | Jubin Nautiyal & Neeti Mohan | | T-Series"
    },
    {
        "url": "/watch?v=hzM2-VvP-qQ",
        "name": "Udd Jaa Parindey (Full Video) Radhe Shyam | Prabhas, Pooja Hegde | Mithoon, Jubin Nautiyal"
    },
    {
        "url": "/watch?v=drexK7HD0fA",
        "name": "Meri Aashiqui (Audio) Rochak Kohli Feat. Jubin Nautiyal | Ihana D |Shree Anwar Sagar | Bhushan Kumar"
    },
    {
        "url": "/watch?v=q4rLOB_o4oA",
        "name": "Aawargi Lyrical Video Song | THE DARK SIDE OF LIFE – MUMBAI CITY | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=8GprIiEbeZE",
        "name": "Haiya Ho Full Audio | Marjaavaan | Sidharth M, Rakul Preet | Tulsi Kumar, Jubin Nautiyal ,Tanishk B"
    },
    {
        "url": "/watch?v=-8yLQumUwFs",
        "name": "Aagaz Video | CYPHER | Jubin Nautiyal & Dhvani Bhanushali | Sagar Pathak | Bharat Kamal"
    },
    {
        "url": "/watch?v=uoPDZTuPnpM",
        "name": "Song Teaser ► Ae Mere Des | Jubin Nautiyal | Lalit Prabhakar | VIDEO RELEASING SOON"
    },
    {
        "url": "/watch?v=Kaoxv3f5ZmI",
        "name": "Bewafa Tera Masoom Chehra TEASER Feat. Karan Mehra, Ihana Dhillon | Jubin Nautiyal | Release 16 Nov"
    },
    {
        "url": "/watch?v=czTRSfoiZYY",
        "name": "Kaabil Hoon - Sad Version Song (Audio) | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=w6rOLnMhHOg",
        "name": "Dil Beparwah Song | Phamous | Jimmy Sheirgill | Shriya Saran | Jubin Nautiyal & Jonita Gandhi"
    },
    {
        "url": "/watch?v=jaS3OyJghps",
        "name": "Full Audio: Baarish | HUME TUMSE PYAAR KITNA | Karanvir B | Priya B | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=NYMo6f9bxdI",
        "name": "\"Tanha Tanha\" by Jubin Nautiyal & Aditi Paul | Dil Jo Na Keh Saka | Himansh Kohli & Priya Banerjee"
    },
    {
        "url": "/watch?v=gBEyHn_n5zY",
        "name": "Song Teaser: Ik Vaari Aa/Nadaan Parindey/Tum Ho Toh | Shirley Setia |Jubin Nautiyal |AbhijitVaghani"
    },
    {
        "url": "/watch?v=lkS-0tesojA",
        "name": "Jubin Nautiyal: Main Balak Tu Mata (Lyrical) Gulshan Kumar | Manan B,Manoj M,Akanksha P | Bhushan K"
    },
    {
        "url": "/watch?v=0Q5jrzIwov4",
        "name": "Making Of \"Kaabil Hoon\" Video Song | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal, Palak"
    },
    {
        "url": "/watch?v=JG6tbYYkeug",
        "name": "Kisi Se Pyar Ho Jaye - Unplugged Song || T-Series Acoustics || Jubin Nautiyal || T-Series"
    },
    {
        "url": "/watch?v=AyZrD_uvvko",
        "name": "Bypass Road: So Gaya Yeh Jahan Song Making | Neil Nitin Mukesh, Adah S | Jubin Nautiyal, Nitin"
    },
    {
        "url": "/watch?v=0Yu6vr3hrUg",
        "name": "YAAD HAI NA (UNPLUGGED) Full Video Song | Raaz Reboot | Jubin Nautiyal | T-Series"
    },
    {
        "url": "/watch?v=Z1w-DTmPLIc",
        "name": "Making Of Humnava Mere Song | Jubin Nautiyal | Manoj Muntashir | Rocky - Shiv"
    },
    {
        "url": "/watch?v=RDJX6q2KRvw",
        "name": "Tujhe Paane Ko Lyrical |Shalin Bhanot,Priyanka Agrawal |Jubin Nautiyal,Neeti Mohan,Abhijit V,Manoj M"
    },
    {
        "url": "/watch?v=dSzjNuV4R3g",
        "name": "Finito Full Song | AMAVAS | Sachiin J Joshi, Vivan, Navneet | Jubin Nautiyal, Sukriti Kakar, Ikka"
    },
    {
        "url": "/watch?v=c5ejnWCPcGU",
        "name": "Govind Bolo Full Audio | Jubin Nautiyal | Raaj Aashoo | Aditya D, Pankaj N | Bhushan Kumar"
    },
    {
        "url": "/watch?v=quZgrXwW97g",
        "name": "Aawargi Full Audio | THE DARK SIDE OF LIFE – MUMBAI CITY | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=H1laBiGxYxY",
        "name": "Tanha Tanha Full Song (Lyrics) | Dil Jo Na Keh Saka | Jubin Nautiyal | Himansh Kohli Priya Banerjee"
    },
    {
        "url": "/watch?v=ESiCCz98fBE",
        "name": "GHAR AAJA: ELECTRO FOLK Full Audio|Jubin Nautiyal,Juggy Sandhu |Aditya Dev&Javed Bashir |Rocky-Shiv"
    },
    {
        "url": "/watch?v=AGt8s7Ld3z8",
        "name": "LYRICAL:ELECTRO FOLK | GHAR AAJA |Jubin Nautiyal,Juggy Sandhu| Aditya Dev &Javed Bashir |Rocky-Shiv"
    },
    {
        "url": "/watch?v=Mftb5zcBZH4",
        "name": "Making Of Ik Vaari Aa/Nadaan Parindey/Tum Ho Toh | Shirley Setia,Jubin Nautiyal Abhijit V"
    },
    {
        "url": "/watch?v=IgqcDaVWAj8",
        "name": "Udd Jaa Parindey Audio | Radhe Shyam | Prabhas, Pooja Hegde | Mithoon, Jubin Nautiyal | Bhushan K"
    },
    {
        "url": "/watch?v=SdNZTbSbnuE",
        "name": "Full Audio: Hai Pyaar Kya? | Jubin Nautiyal, Kritika Kamra | Rocky - Jubin | Love Song 2019"
    },
    {
        "url": "/watch?v=-G99fb0L-xs",
        "name": "Jubin Nautiyal: Main Balak Tu Mata (Audio) Gulshan Kumar | Manan B,Manoj M,Akanksha P | Bhushan K"
    },
    {
        "url": "/watch?v=4r6Atr7luw4",
        "name": "Audio Making Of \"Kaabil Hoon\" Song | Kaabil | Hrithik Roshan, Yami Gautam | Jubin Nautiyal, Palak"
    },
    {
        "url": "/watch?v=5FXs1MzJTPA",
        "name": "Official Song Teaser: DIL BUDDHU | Jubin Nautiyal | Vishwajeet & Asheema Vardhan"
    },
    {
        "url": "/watch?v=1yf6htijDfM",
        "name": "The Care Concert - Jubin Nautiyal | PM CARES FUND | T-Series | Red FM"
    },
    {
        "url": "/watch?v=1wdLiccNcXw",
        "name": "Full Song: DIL JAANIYE | Khandaani Shafakhana | Sonakshi S | Jubin Nautiyal,Tulsi Kumar, Payal Dev"
    },
    {
        "url": "/watch?v=QGv5dd6jP2I",
        "name": "Meri Maa Full Audio Song | Jubin Nautiyal | Javed-Mohsin | Danish Sabri | T-Series"
    },
    {
        "url": "/watch?v=zYXtuKJzmVQ",
        "name": "Song Teaser 2 ► Ae Mere Des | Jubin Nautiyal | Lalit Prabhakar |VIDEO RELEASING ► 21st January 2019"
    },
    {
        "url": "/watch?v=FkbJB5Kb234",
        "name": "YAAD HAI NA (UNPLUGGED) Video Song | Raaz Reboot | Jubin Nautiyal | T-Series"
    },
    {
        "url": "/watch?v=gJDvepb8lnM",
        "name": "FULL AUDIO: Kaash Tu Mila Hota | Code Blue | Alok Nath, Sushmita Mukherjee | Jubin Nautiyal"
    },
    {
        "url": "/watch?v=SNALHVjGEKQ",
        "name": "Making Finito Video | AMAVAS | Sachiin J Joshi, Vivan, Navneet | Jubin Nautiyal, Sukriti Kakar, Ikka"
    },
    {
        "url": "/watch?v=QsZRvU45FqM",
        "name": "T-Series Mixtape : Tu Jo Mila /Raabta Song | 3 Days to Go | Shirley Setia & Jubin Nautiyal"
    },
    {
        "url": "/watch?v=CjRUiuZaZZA",
        "name": "Bawara Mann Song Making | Akshay Kumar, Huma Qureshi | Jubin Nautiyal & Neeti Mohan | T-Series"
    },
    {
        "url": "/watch?v=pA2GgZ9ugjs",
        "name": "T-Series Mixtape : Tu Jo Mila /Raabta Song | ►Releasing Tomorrow | Shirley Setia & Jubin Nautiyal"
    },
    {
        "url": "/watch?v=x7AxsFkL4Lo",
        "name": "T-Series Mixtape : Making of Tu Jo Mila/Raabta Song | Shirley Setia & Jubin Nautiyal"
    },
    {
        "url": "/watch?v=qCyjh1_F40A",
        "name": "Dil Beparwah Full Audio | Phamous | Jimmy Sheirgill | Shriya Saran | Jubin Nautiyal & Jonita Gandhi"
    },
    {
        "url": "/watch?v=eiD9Dvst0wc",
        "name": "Haaye Dil (Song Teaser) | Jubin Nautiyal | Releasing 12th February 2017"
    },
    {
        "url": "/watch?v=q5GGU209vL4",
        "name": "Tanha Tanha Audio Song | Dil Jo Na Keh Saka | Jubin Nautiyal | Himansh Kohli Priya Banerjee"
    },
    {
        "url": "/watch?v=haqZfXX6jQI",
        "name": "Jubin Nautiyal : Haaye Dil (Full Audio Song) | T-Series"
    },
    {
        "url": "/watch?v=OMQ6I15bL_A",
        "name": "T-Series Mixtape : Tu Jo Mila /Raabta Song | 2 Days to Go | Shirley Setia & Jubin Nautiyal"
    },
    {
        "url": "/watch?v=Emh924oP4G4",
        "name": "Full Audio: Aagaz | CYPHER | Sagar Pathak | Jubin Nautiyal, Dhvani Bhanushali | Bharat Kamal"
    },
    {
        "url": "/watch?v=DvuXl-mH0nA",
        "name": "Exclusive Interview: Jubin Nautiyal & Kritika Kamra | Hai Pyaar Kya?"
    },
    {
        "url": "/watch?v=fqhuilZn8XA",
        "name": "YouTube - One Nation : Jubin Nautiyal | #OneNationAtHome"
    },
    {
        "url": "/watch?v=mXN2Az46i2E",
        "name": "Jubin Nautiyal: Main Balak Tu Mata LoFi Mix By KEDROCK & SD Style | Manan Bhardwaj, Manoj Muntashir"
    },
    {
        "url": "/watch?v=HiyzqBkI27g",
        "name": "Haaye Dil (Motion Poster) | Jubin Nautiyal | Releasing 12th February 2017"
    },
    {
        "url": "/watch?v=6MoyUvPnYGk",
        "name": "Hate Story IV : Music Concert | Armaan Malik, Neeti Mohan, Jubin Nautiyal, Neha Kakkar, Tony Kakkar"
    }
]
```
### Sorted

```json 

[
    {
        "url": "/watch?v=FjKTtTsNU7c",
        "name": "Purab Se (Om Namah Shivay) | Banaras | Shreya Ghoshal | AVS"
    },
    {
        "url": "/watch?v=mNuhKUOD_A0",
        "name": "Deva Deva - Extended Film Version|Brahmāstra|Amitabh B|Ranbir"
    },
    {
        "url": "/watch?v=ElZfdU54Cp8",
        "name": "Apna Bana Le - Bhediya | Varun Dhawan, Kriti Sanon| Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya"
    },
    {
        "url": "/watch?v=UKA31XLzsNA",
        "name": "Thumkeshwari - Bhediya | Varun Dhawan, Kriti S, Shraddha K | Sachin-Jigar,Rashmeet, Ash K, Amitabh B"
    },
    {
        "url": "/watch?v=w4ClQO0FFQg",
        "name": "Param Sundari -Official Video | Mimi | Kriti Sanon, Pankaj Tripathi | @ARRahman| Shreya |Amitabh"
    },
    {
        "url": "/watch?v=-eFqg8JnohY",
        "name": "Breathless | Shankar Mahadevan [Full Version] Lyrics"
    },
    {
        "url": "/watch?v=ZzKmHpE9EAY",
        "name": "Yaaron Sab Dua Karo | Aparshakti K, Jasmin B| Meet Bros, Stebin Ben, Danish, Kumaar| New Song 2022"
    }
]

```


### Heartbreak

```json
[
    {
        "url": "/watch?v=cAMHx-m9oh8",
        "name": "Kya Loge Tum | Akshay Kumar | Amyra Dastur | BPraak | Jaani | Arvindr Khaira | Zohrajabeen"
    },
    {
        "url": "/watch?v=ElZfdU54Cp8",
        "name": "Apna Bana Le - Bhediya | Varun Dhawan, Kriti Sanon| Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya"
    },
    {
        "url": "/watch?v=8sLS2knUa6Y",
        "name": "Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,Amitabh"
    },
    {
        "url": "/watch?v=sWelsbLlJLs",
        "name": "Tu Meri Roja | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Javed Ali | Hesham Abdul Wahab"
    },
    {
        "url": "/watch?v=FYIDBhtSuzw",
        "name": "Jai Shri Ram (Hindi) Adipurush | Prabhas | Ajay-Atul, Manoj Muntashir Shukla | Om Raut | Bhushan K"
    },
    {
        "url": "/watch?v=YxWlaYCA8MU",
        "name": "Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal & Sheykhar, Arijit Singh, Sukriti, Kumaar"
    },
    {
        "url": "/watch?v=huxhqphtDrM",
        "name": "Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar"
    },
    {
        "url": "/watch?v=BddP6PYo2gs",
        "name": "Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit Singh | Amitabh Bhattacharya"
    },
    {
        "url": "/watch?v=lzEop75AeOk",
        "name": "Naiyo Lagda - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan & Pooja Hegde | Himesh R, Kamaal K, Palak M"
    },
    {
        "url": "/watch?v=ha3QcOXcUyY",
        "name": "MAIN KHILADI ( Selfiee ) - Akshay Kumar | Emraan Hashmi | Anu Malik | Tanishk | Udit N | Abhijeet |"
    },
    {
        "url": "/watch?v=xb59o_op8Z0",
        "name": "Yentamma - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan,Ram Charan,Venkatesh,Pooja| Vishal,Payal,Raftaar"
    },
    {
        "url": "/watch?v=EdftT8GMU1U",
        "name": "O Bedardeya (Full Video) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam,Arijit Singh, Amitabh B"
    },
    {
        "url": "/watch?v=HZsRjrYW-lk",
        "name": "Pyaar Hota Kayi Baar Hai (Song) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam, Arijit, Amitabh"
    },
    {
        "url": "/watch?v=zBlklssMFEo",
        "name": "Tere Pyaar Mein (Song) Tu Jhoothi Main Makkaar| Ranbir, Shraddha| Pritam| Arijit, Nikhita | Amitabh"
    },
    {
        "url": "/watch?v=KgpFBdapobY",
        "name": "Show Me The Thumka (Song) Tu Jhoothi Main Makkaar |Ranbir,Shraddha|Pritam|Sunidhi,Shashwat|Amitabh B"
    },
    {
        "url": "/watch?v=sAzlWScHTc4",
        "name": "Naacho Naacho (Full Video) RRR - NTR, Ram Charan | M M Kreem | SS Rajamouli | Vishal Mishra & Rahul"
    },
    {
        "url": "/watch?v=_B6T8O15Ohk",
        "name": "Manike:Thank God | Nora Fatehi, Sidharth M | Tanishk,Yohani,Jubin,Surya R | Rashmi Virag | Bhushan K"
    },
    {
        "url": "/watch?v=wDm7PtFXUQo",
        "name": "Achha Sila Diya | Jaani & B Praak Feat. Nora Fatehi & Rajkummar Rao | Nikhil-Vinay,Yogesh |Bhushan K"
    },
    {
        "url": "/watch?v=5bAxTGjcLs4",
        "name": "Billi Billi - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan | Pooja Hegde | Venkatesh D | Sukhbir | Kumaar"
    },
    {
        "url": "/watch?v=V5cV30yFXLA",
        "name": "Kudiyee Ni Teri (Selfiee) – Akshay Kumar | Mrunal Thakur | The PropheC | Tanishk B | Zahrah S Khan"
    },
    {
        "url": "/watch?v=J1rOfVst-EQ",
        "name": "Bhool Bhulaiyaa 2 (Title Track) Kartik A, Kiara A, Tabu |Pritam, Tanishk, Neeraj, Anees B, Bhushan K"
    },
    {
        "url": "/watch?v=ZfeofMXu9is",
        "name": "Jee Rahe The Hum (Falling in Love) - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan & Pooja Hegde | Amaal M"
    },
    {
        "url": "/watch?v=rIvnoryqXGY",
        "name": "Character Dheela 2.0 (Video) Shehzada | Kartik, Kriti | Neeraj, Pritam | Rohit D | Bhushan Kumar"
    },
    {
        "url": "/watch?v=OkJdnxuvYjA",
        "name": "Sab Gazab - Goldkartz | Badshah | Ileana D'Cruz | Tanu Rawat | Sana Khan | New Songs 2023 | SagaHits"
    },
    {
        "url": "/watch?v=hp_-RlwNg04",
        "name": "Maine Pi Rakhi Hai (Song) Tu Jhoothi Main Makkaar: Ranbir Shraddha Pritam Shreya G Divya K Amitabh B"
    },
    {
        "url": "/watch?v=UKA31XLzsNA",
        "name": "Thumkeshwari - Bhediya | Varun Dhawan, Kriti S, Shraddha K | Sachin-Jigar,Rashmeet, Ash K, Amitabh B"
    },
    {
        "url": "/watch?v=eizIc5eQiEM",
        "name": "Deewaane (Selfiee) - Akshay K | Jacqueline F | Emraan H | Aditya Y | Stebin B | Tanishk B | Kunaal V"
    },
    {
        "url": "/watch?v=7CNeqA9PBYE",
        "name": "Kyaa Baat Haii 2.0 | Govinda Naam Mera | Vicky, Kiara | Harrdy, Tanishk, Nikhita, Jaani, B Praak"
    },
    {
        "url": "/watch?v=df3Id8Kuf-w",
        "name": "Current Laga Re: Cirkus | Ranveer, Deepika | Nakash, Dhvani, Jonita, Lijo | Dj Chetas, Kumaar"
    },
    {
        "url": "/watch?v=jpYkoa-uE_c",
        "name": "Jehda Nasha: An Action Hero | Ayushmann, Nora Fatehi | Tanishk Faridkot Amar IP Singh Yohani Harjot"
    },
    {
        "url": "/watch?v=KfFbnOXWt4A",
        "name": "Rabba Janda - Mission Majnu | Sidharth Malhotra, Rashmika Mandanna | Jubin N, Tanishk B, Shabbir A"
    },
    {
        "url": "/watch?v=1UZbI-GZ-Bg",
        "name": "Neha Kakkar, Rohanpreet: Baarish Mein Tum | Gauahar K, Zaid D | Showkidd, Harsh, Samay | Bhushan K"
    },
    {
        "url": "/watch?v=I6KjFLDyBUs",
        "name": "Munda Sona Hoon Main (Video) Shehzada | Kartik, Kriti | Diljit, Nikhita | Pritam, Kumaar | Rohit"
    },
    {
        "url": "/watch?v=qNSv9I0Flac",
        "name": "Jaadui (Song) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam | Jubin Nautiyal | Amitabh B"
    },
    {
        "url": "/watch?v=TxJIfNtvPj4",
        "name": "O Balle Balle - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan | Sukhbir | Kumaar"
    },
    {
        "url": "/watch?v=WjAPDofGg28",
        "name": "Deva Deva - Brahmāstra | Amitabh B | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit | Amitabh | Jonita"
    },
    {
        "url": "/watch?v=hdNg1TAtAHg",
        "name": "Fitoor Song | Shamshera | Ranbir Kapoor, Vaani Kapoor | Arijit Singh, Neeti Mohan | Mithoon, Karan M"
    },
    {
        "url": "/watch?v=fzOPc-VtcTE",
        "name": "Galliyan Returns Song: Ek Villain Returns | John,Disha,Arjun,Tara | Ankit T,Manoj M, Mohit S,Ektaa K"
    },
    {
        "url": "/watch?v=bSAlE_WgHxY",
        "name": "RANGISARI (Video) | JugJugg Jeeyo | Varun D, Kiara A, Anil K, Neetu K | Kanishk & Kavita |"
    },
    {
        "url": "/watch?v=pVBmn5uJNKE",
        "name": "Bijli | Govinda Naam Mera | Vicky Kaushal, Kiara Advani |Sachin-Jigar, Mika Singh, Neha Kakkar, Vayu"
    },
    {
        "url": "/watch?v=HVJCot-2Gbg",
        "name": "Chedkhaniyan (Video) Shehzada | Kartik, Kriti | Arijit, Nikhita | Pritam, IP Singh, Shloke L"
    },
    {
        "url": "/watch?v=ICc0gPAhjlI",
        "name": "Coka 2.0 | Liger | Vijay Deverakonda, Ananya Panday | Jaani, Lijo George, DJ Chetas, Sukhe, Lisa M."
    },
    {
        "url": "/watch?v=I3t9agGhWyI",
        "name": "Ra Ra Rakkamma Full Video Song [Kannada] | Vikrant Rona | Kichcha Sudeep | Jacqueline Fernandez|Anup"
    },
    {
        "url": "/watch?v=VICFSC7_kvw",
        "name": "Aafat|Official Music Video | Liger |Vijay Deverakonda, Ananya Panday |Tanishk, Zahrah, Rashmi Virag"
    },
    {
        "url": "/watch?v=c6ri-MFdNLY",
        "name": "THE PUNJAABBAN SONG (Video) JugJugg Jeeyo | Varun Kiara Anil Neetu | Tanishk Gippy Zahrah Romy Abrar"
    },
    {
        "url": "/watch?v=ZIihoTi4pzI",
        "name": "Rasiya - Brahmāstra | Amitabh B | Ranbir Kapoor | Alia Bhatt | Pritam | Amitabh | Tushar | Shreya"
    },
    {
        "url": "/watch?v=qXmVVXzBNBU",
        "name": "Aap Jaisa Koi (Video) An Action Hero | Ayushmann Khurrana, Malaika | Tanishk, Zahrah S K, Altamash F"
    },
    {
        "url": "/watch?v=5GQoYRb4Jz0",
        "name": "Dil De Diya Hai: Thank God | Sidharth M, Rakul | Anand Raaj Anand, Rochak K, Rashmi Virag, Sameer"
    },
    {
        "url": "/watch?v=1lmSuckzzJ0",
        "name": "Nain Ta Heere (Video) JugJugg Jeeyo | Varun, Kiara | Vishal S | Guru Randhawa, Asees K | Bhushan K"
    },
    {
        "url": "/watch?v=PrGylftXLnw",
        "name": "Ghodey Pe Sawaar | Qala | Tripti Dimri, Babil Khan | Amit Trivedi, Amitabh Bhattacharya, Sireesha B."
    },
    {
        "url": "/watch?v=2JBYnvUlAEc",
        "name": "MOVIE: Dhokha Song | Arijit Singh | Khushalii Kumar, Parth, Nishant, Manan B, Mohan S V, Bhushan K"
    },
    {
        "url": "/watch?v=sCbbMZ-q4-I",
        "name": "Lut Gaye (Full Song) Emraan Hashmi, Yukti | Jubin N, Tanishk B, Manoj M | Bhushan K | Radhika-Vinay"
    },
    {
        "url": "/watch?v=EdftT8GMU1U",
        "name": "O Bedardeya (Full Video) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam,Arijit Singh, Amitabh B"
    },
    {
        "url": "/watch?v=KVh4KtUSW3A",
        "name": "Baarish Ban Jaana (Official Video) Payal Dev, Stebin Ben | Hina Khan, Shaheer Sheikh | Kunaal Vermaa"
    },
    {
        "url": "/watch?v=hGf8rOwFzvo",
        "name": "Chhor Denge: Parampara Tandon | Sachet-Parampara | Nora Fatehi, Ehan Bhat | Arvindr K, Bhushan Kumar"
    },
    {
        "url": "/watch?v=TmRgK-pXH9c",
        "name": "Official Video: Humnava Mere Song | Jubin Nautiyal | Manoj Muntashir | Rocky - Shiv | Bhushan Kumar"
    },
    {
        "url": "/watch?v=y_RHQ4mBDKA",
        "name": "Bedardi Se Pyaar Ka Song|Jubin N,Meet B,Manoj M|Gurmeet C,Sherine S,Kaashish V | Ashish P| Bhushan K"
    },
    {
        "url": "/watch?v=_iktURk0X-A",
        "name": "Phir Bhi Tumko Chaahunga - Full Song | Arijit Singh | Arjun K & Shraddha K | Mithoon , Manoj M"
    },
    {
        "url": "/watch?v=Z7XiKx_rj2I",
        "name": "Wafa Na Raas Aayee Song Jubin Nautiyal Ft.Himansh K,Arushi N, Meet Bros|Rashmi V|Ashish P| Bhushan K"
    },
    {
        "url": "/watch?v=8-gxHIOSZNA",
        "name": "Dhokebaaz (Video) Jaani | Afsana Khan | Vivek Anand Oberoi, Tridha Choudhury | VYRL Originals"
    },
    {
        "url": "/watch?v=fzOPc-VtcTE",
        "name": "Galliyan Returns Song: Ek Villain Returns | John,Disha,Arjun,Tara | Ankit T,Manoj M, Mohit S,Ektaa K"
    },
    {
        "url": "/watch?v=A_huhqaSLlM",
        "name": "Dil Lauta Do Song | Jubin Nautiyal, Payal Dev | Sunny K, Saiyami K | Kunaal V | Navjit B | Bhushan K"
    },
    {
        "url": "/watch?v=l6GroAW51Os",
        "name": "Akull - Yaad Na Aaye (Official Video) | Angel Rai | Mellow D, Dhruv Yogi | VYRL Originals"
    },
    {
        "url": "/watch?v=jfosQWnUOK8",
        "name": "Dil: Ek Villain Returns |John,Disha,Arjun,Tara Raghav Kaushik-Guddu | Mohit S Kunaal V Ektaa Bhushan"
    },
    {
        "url": "/watch?v=eY3m3ji1q84",
        "name": "Tu Bhi Sataya Jayega (Official Video) Vishal Mishra | Aly Goni, Jasmin Bhasin | VYRL Originals"
    },
    {
        "url": "/watch?v=Yn7RIRt33Pc",
        "name": "Tujhse Pyaar Karta Hoon | Freddy | Kartik Aaryan, Alaya F | Pritam | Raghav Chaitanya | Irshad Kamil"
    },
    {
        "url": "/watch?v=adMIQTu5qYc",
        "name": "Iss Baarish Mein | Jasmin Bhasin | Shaheer Sheikh | Official Video| Neeti Mohan |Yasser Desai|Aditya"
    },
    {
        "url": "/watch?v=AgX2II9si7w",
        "name": "Full Song: Tujhe Kitna Chahne Lage | Kabir Singh | Mithoon Feat. Arijit Singh | Shahid K, Kiara A"
    },
    {
        "url": "/watch?v=-JEPg3gsiII",
        "name": "Bewafa Tera Muskurana Song | Meet Bros Ft. Jubin Nautiyal |Himansh K,Akanksha P|Rashmi V Bhushan K"
    },
    {
        "url": "/watch?v=3bJ2AJogLnU",
        "name": "Mohabbat Hai (Video) Mohit Suri | Jeet Gannguli | Stebin Ben | Hina Khan, Shaheer Sheikh | Kunaal V"
    },
    {
        "url": "/watch?v=-gTxcvBXTac",
        "name": "Chaha Hai Tujhko | Pearl V Puri, Sanjeeda Shaikh | Sanjeev Rathod | Sanjeev-Darshan | Arvindr Khaira"
    },
    {
        "url": "/watch?v=hXh35CtnSyU",
        "name": "Bulleya – Ae Dil Hai Mushkil | Karan Johar | Aishwarya, Ranbir, Anushka | Pritam | Amit Mishra"
    },
    {
        "url": "/watch?v=jHNNMj5bNQw",
        "name": "\"Kabira Full Song\" Yeh Jawaani Hai Deewani | Pritam | Ranbir Kapoor, Deepika Padukone"
    },
    {
        "url": "/watch?v=284Ov7ysmfA",
        "name": "Channa Mereya Full Video - ADHM|Ranbir Kapoor, Anushka|Arijit Singh|Pritam|Karan Johar"
    },
    {
        "url": "/watch?v=5GQoYRb4Jz0",
        "name": "Dil De Diya Hai: Thank God | Sidharth M, Rakul | Anand Raaj Anand, Rochak K, Rashmi Virag, Sameer"
    },
    {
        "url": "/watch?v=WdJbv1jkdyM",
        "name": "O DILBAR YAARA (Official Video) | Stebin Ben | Shaheer Sheikh | Shivangi Joshi | New Hindi Song 2021"
    },
    {
        "url": "/watch?v=8uPEaJ00OU4",
        "name": "Duniya Song | B Praak | Jaani | Ft. Sunny Singh | Saiee Manjrekar | #duniya #bpraak #jaani"
    },
    {
        "url": "/watch?v=URsqQ6UYtkQ",
        "name": "Javed Ali : Bahut Bewafa Hai Wo Ft. Zain Imam & Reem Shaikh | Abhishek Thakur | Hindi Song 2022"
    }
]


```


```json
[
    {
        "url": "/watch?v=yrPbhKqdez8",
        "name": "Shivratri Special 2020 || Damru Bajaya || Hansraj Raghuwanshi || Official Music Video"
    },
    {
        "url": "/watch?v=gmWfiNyfJvw",
        "name": "Laagi Lagan Shankara | Hansraj Raghuwanshi | Komal Saklani | Holi Special 2021 | Ricky | Jamie"
    },
    {
        "url": "/watch?v=gaJR15qWTDA",
        "name": "Mera Bhola Hai Bhandari | Hansraj Raghuwanshi | Suresh Verma | Offical Video | Paramjeet Pammi |iSur"
    },
    {
        "url": "/watch?v=LkP65QD0xZ4",
        "name": "Shiv sama rahe official video| शिव समा रहे | Hansraj Raghuwanshi | Ricky T giftrulers | One man army"
    },
    {
        "url": "/watch?v=tH93lLehjCs",
        "name": "हम कथा सुनाते राम सकल गुण धाम की | Hum Katha Sunate video song | Tilak"
    },
    {
        "url": "/watch?v=tabGtc0MmZ4",
        "name": "NISHANKH HOI RE MANA - TARAKMANTRA BY ANURADHA PAUDWAL || TRADITIONAL - DEVOTIONAL SONGS"
    },
    {
        "url": "/watch?v=Eq4hR7GCDwE",
        "name": "Gurucharitache Kar Paraayan |Lyrical Song | Deool Band Songs"
    }
]

```

### kids

```json 

[
    {
        "url": "/watch?v=xk3pJVYI5gY",
        "name": "wheels on bus song | Cocomelon song | Kids Rhymes @CoComelon"
    },
    {
        "url": "/watch?v=VERUT3dooEY",
        "name": "Apples and Bananas + Five Senses Song! | Learn & Educational | CoComelon Nursery Rhymes & Kids Songs"
    },
    {
        "url": "/watch?=020g-0hhCAU",
        "name": "Baby Shark | CoComelon Nursery Rhymes & Kids Songs"
    }
]

```


### Uncut Bollywood

```json
[
    {
        "url": "/watch?v=KUpwupYj_tY",
        "name": "Tere Hawaale (Full Video) Laal Singh Chaddha | Aamir,Kareena | Arijit,Shilpa | Pritam,Amitabh,Advait"
    },
    {
        "url": "/watch?v=mn8ywyrgPwQ",
        "name": "DIL KO KARRAR AAYA Reprise - Neha Kakkar | Rajat Nagpal | Rana | Anshul Garg | Hindi Song 2021"
    },
    {
        "url": "/watch?v=7vNQZEMgo4w",
        "name": "Teri Mitti Female Version - Kesari | Arko feat. Parineeti Chopra | Akshay Kumar | Manoj Muntashir"
    },
    {
        "url": "/watch?v=RtO6vXgzPco",
        "name": "Tera Chehra/Jaan Meri★Ep- 1|Tulsi/Jubin|T-Series MixtapeRewindSeason 3|Abhijit V lAhmed K |Bhushan K"
    },
    {
        "url": "/watch?v=guN4GPzFmoI",
        "name": "Ali Zafar | Jhoom (R&B version) | Official video"
    },
    {
        "url": "/watch?v=aDOs442shYU",
        "name": "Rasiya Reprise - Brahmāstra | Amitabh B | Ranbir | Alia | Pritam | Arijit | Amitabh"
    },
    {
        "url": "/watch?v=7LSOgn6APzE",
        "name": "Ranjha Reprise - Shershaah | Jasleen Royal | Sidharth–Kiara | B Praak | Romy | Anvita Dutt"
    },
    {
        "url": "/watch?v=dr2TXMRgL38",
        "name": "Ik Mulaqaat Unplugged Ft Ayushmann Khurrana - Dream Girl | Nushrat B | Meet Bros | Shabbir Ahmed"
    },
    {
        "url": "/watch?v=ZDjpGhiJtio",
        "name": "Ranjha (Sid x Kiara Version) | Official Extended Audio | Sidharth Malhotra, Kiara Advani | Jasleen"
    },
    {
        "url": "/watch?v=S1ITw5_Y3l4",
        "name": "Dil Na Jaaneya - Arijit Singh | Good Newwz | Akshay Kumar, Kareena Kapoor, Diljit, Kiara | Rochak K"
    },
    {
        "url": "/watch?v=t2akyYDbLuw",
        "name": "Aye Mere Humsafar/Ab Mujhe Raat Din★Ep-5 |Palak M,Armaan M |T-Series Mixtape S3|Abhijit Vl Bhushan K"
    },
    {
        "url": "/watch?v=s8oz0QYsKm0",
        "name": "Do Dil Mil Rahe Hain Song Cover by Rahul Jain | Unplugged Cover Songs"
    },
    {
        "url": "/watch?v=1j3kGHAwkyU",
        "name": "Mere Yaaraa REPRISE Feat. Neeti Mohan | Kaushik-Guddu, Akash (JAM8) | T-Series Acoustics"
    },
    {
        "url": "/watch?v=Ry9fTLYIem0",
        "name": "Kasoor (From \"Dhamaka\") Acoustic | Kartik Aaryan, Mrunal | Ram Madhvani |Prateek Kuhad| NetflixIndia"
    },
    {
        "url": "/watch?v=TX__5mcnA34",
        "name": "Mere Sohneya Acoustic | Sachet Tandon & Parampara Tandon | T-Series"
    },
    {
        "url": "/watch?v=MugOPvr9cbg",
        "name": "Nain Ta Heere (Video) By Lisa - JugJugg Jeeyo | Varun, Kiara | Vishal S | Guru R, Lisa M | Bhushan K"
    },
    {
        "url": "/watch?v=ss6O4qtpyCM",
        "name": "Dil Ke Paas Unplugged Video Song | Ft.Armaan Malik & Tulsi Kumar | T-Series Acoustics | T-Series"
    },
    {
        "url": "/watch?v=AuuzRogTdnc",
        "name": "Aap Ki Nazron Ne Samjha - Jonita Gandhi FT. Keba Jeremiah | Official Cover Song"
    },
    {
        "url": "/watch?v=RfPQsvig6b0",
        "name": "Humsafar Song | Dhvani Bhanushali | T-Series Acoustics | Akhil Sachdeva |Ahmed Khan |Tanishk Bagchi"
    },
    {
        "url": "/watch?v=6mbzgt6Pgn0",
        "name": "Iktara (MTV Unplugged Version)"
    },
    {
        "url": "/watch?v=PYzFp5o4lhE",
        "name": "Channa Mereya Unplugged Lyric Video - ADHM|Ranbir, Anushka|Arijit|Pritam|Karan Johar"
    },
    {
        "url": "/watch?v=AStsF9sfZ1E",
        "name": "Heer Ranjha (Reprise)"
    },
    {
        "url": "/watch?v=BouYTtZakaE",
        "name": "Rabba Janda Song [Acoustic Version] : Jubin Nautiyal | Tanishk Bagchi | Shabbir Ahmed"
    },
    {
        "url": "/watch?v=cMLzEbXVef8",
        "name": "Arjun kanungo | Zara Zara | Unplugged version | Unwind with MTV | Rehnaa Hai Tere Dil Mein"
    },
    {
        "url": "/watch?v=t1ms8r6dL4o",
        "name": "Phir Na Aisi Raat Aayegi (Reprise)| Laal Singh Chaddha (Extended)| Aamir, Kareena | Pritam,Amitabh B"
    }
]

```


### mix - music of india 

```json
[
    {
        "url": "/watch?v=e25zWcOnrh8",
        "name": "Saaj Hyo Tuza Song - Movie Baban | Marathi Songs 2018 | Onkarswaroop | Bhaurao Nanasaheb Karhade"
    },
    {
        "url": "/watch?v=pB1UzFncNzc",
        "name": "Jagnyala Pankh Futle Song - Movie Baban | Marathi Songs 2018 | Harsshit Abhiraj | Bhaurao Karhade"
    },
    {
        "url": "/watch?v=eIcz71oxlbU",
        "name": "Kevadyacha Paan Tu | Ajay Gogavale, Aarya Ambekar | Vijay Gavande | Onkar Isha | Sarla Ek Koti"
    },
    {
        "url": "/watch?v=6dmH5DfEn4o",
        "name": "Govyachya Kinaryav | SUHRUD WARDEKAR | PRAVIN KOLI, KUMAR DIVEKAR| OFFICIAL MUSIC VIDEO 2018"
    },
    {
        "url": "/watch?v=hejXc_FSYb8",
        "name": "SIMMBA: Tere Bin | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi, Rahat Fateh Ali Khan, Asees Kaur"
    },
    {
        "url": "/watch?v=Y5FgIB98iEw",
        "name": "Merre Liye (Studio Version) | Himesh Ke Dil Se The Album | Himesh Reshammiya | Mohammad Faiz|"
    },
    {
        "url": "/watch?v=6zoKKPTzWUE",
        "name": "Dhaga Dhaga Song Video - Daagdi Chaawl | Marathi Song | Ankush Chaudhari, Pooja Sawant"
    },
    {
        "url": "/watch?v=kTXilT_KbUM",
        "name": "Lyrical:Tum Jo Aaye |Once Upon A Time In Mumbai| Ajay Devgn,Rahat Fateh Ali Khan,Tulsi Kumar, Pritam"
    },
    {
        "url": "/watch?v=j6muwUGdvXw",
        "name": "Ve Maahi | Kesari | Akshay Kumar & Parineeti Chopra | Arijit Singh & Asees Kaur | Tanishk Bagchi"
    },
    {
        "url": "/watch?v=2x_lFOIcbTk",
        "name": "Dhagan Aabhal (Official Song) Raundal | Harsshit Abhiraj I Javed Ali, Vaishali Made"
    },
    {
        "url": "/watch?v=HexFqifusOk",
        "name": "Jogi - Lyrical |Shaadi Mein Zaroor Aana |Rajkummar Rao,Kriti K|Arko ft Aakanksha Sharma"
    },
    {
        "url": "/watch?v=x0AUAR2eKSY",
        "name": "देवाक काळजी रे | Dewak Kalaji Re | Video Song | Ajay Gogavale | Vijay Gavande | Redu Marathi Movie"
    },
    {
        "url": "/watch?v=YZLKoG_vhDY",
        "name": "Dil Meri Na Sune Lyrical - Genius | Utkarsh, Ishita | Atif Aslam | Himesh Reshammiya | Manoj"
    },
    {
        "url": "/watch?v=0Osonz_lVKI",
        "name": "मोहनी | Mohni - Video Song | Deepak Sahu & Pooja Sharma | Monika & Toshant | Dj As Vil | Cg Song"
    },
    {
        "url": "/watch?v=FxGvi8O3mxM",
        "name": "Fandry Song - Ajay Atul"
    },
    {
        "url": "/watch?v=b2Au9ofkO3o",
        "name": "Chaiyya Chaiyya 4k Video Song | ❤️ Shahrukh Khan, Malaika Arora, Sukhwinder Singh❤️"
    },
    {
        "url": "/watch?v=GjfxDRRLXAQ",
        "name": "Rabba Janda - Full Video | Mission Majnu | Sidharth Malhotra, Rashmika | Jubin N, Tanishk B, Shabbir"
    },
    {
        "url": "/watch?v=OinGHNpnGtc",
        "name": "Taal Se Taal Mila | A.R Rahman | Alka Yagnik | Udit Narayan | Taal (1999)"
    },
    {
        "url": "/watch?v=r6tU3GvJ5so",
        "name": "Chandra Official Song | Chandramukhi | Marathi Song 2022 | Ajay - Atul feat. Shreya Ghoshal | Amruta"
    },
    {
        "url": "/watch?v=C5Eb8nNcA_s",
        "name": "Lyrical: Awara | Dabangg 3 | Salman Khan,Sonakshi S,Saiee M | Salman Ali, Muskaan | Sajid Wajid"
    },
    {
        "url": "/watch?v=WqUXVw0WlXc",
        "name": "Dilbaro - Full Video | Raazi | Alia Bhatt | Harshdeep Kaur, Vibha Saraf & Shankar Mahadevan"
    },
    {
        "url": "/watch?v=g5XXGBRFt9s",
        "name": "Baharla Ha Madhumas - Marathi Song | Maharashtra Shaheer | Ajay-Atul, Guru T, Shreya | Ankush, Sana"
    },
    {
        "url": "/watch?v=cRKNTAbnYRs",
        "name": "देवा तुझ्या गाभाऱ्याला | Deva Tujhya Gabharyala | Duniyadari | Sai, Swwapnil, Ankush | Amitraj"
    },
    {
        "url": "/watch?v=se9DDAwwGQY",
        "name": "Channa Ve - Full Video | Bhoot - Part One: The Haunted Ship | Vicky K & Bhumi P | Akhil & Mansheel"
    },
    {
        "url": "/watch?v=JbDktrsnH40",
        "name": "Moh Moh Ke Dhaage | Lyrical Song | Dum Laga Ke Haisha | Ayushmann, Bhumi | Monali | Anu Malik, Varun"
    }
]

```
