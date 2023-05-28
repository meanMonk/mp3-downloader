var express = require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path')
const once = require('node:events');
const Ffmpeg = require('fluent-ffmpeg');
const readline = require('readline');
var router = express.Router();


async function download(song) {

  return new Promise((resolve, reject) => {
    let stream = ytdl(`https://www.youtube.com${song.url}`,
      {
        filter: 'audio'
      })

    Ffmpeg(stream)
      .audioBitrate(128)
      .save(`downloads/${song.name}.mp3`)
      .on('progress', p => {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${p.targetSize}kb downloaded`);
      })
      .on('end', () => {
        console.log(`\ndone, thanks - ${song.name}`);
        resolve('Success')
      })
      .on('error', () => {
        reject('Error')
      });


  })


}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/download', async function (req, res, next) {

  const list = req.body.list;

  for (let i = 0; i < list.length; i++) {
    let song = list[ i ];
    try {
      await download(song);
    } catch (e) {
      console.log('error', e)
    }
  }

  res.json({
    ...req.body,
    success: 'downloaded',
  });
});

module.exports = router;
