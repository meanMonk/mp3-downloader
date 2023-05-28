function main() {
  let list = document.querySelectorAll("ytd-playlist-panel-video-renderer")
  let data = []

  list.forEach((vid) => {
    let id = vid.querySelector('a').getAttribute("href");
    let url = id.split('&list')[ 0 ];
    let name = vid.querySelector('span#video-title').innerText;
    data.push({
      url,
      name

    })
  })
}


/* 
  Run below script on copying list to 📋 
  
  1 - Right-click the console.log() output
  2 - Click "Store as global variable"
  3 - Run copy(temp1)
  4 - Ctrl-V it wherever you want

*/
main()