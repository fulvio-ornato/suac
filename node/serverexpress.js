#!/usr/bin/env node

var express = require('express');
var MPlayer = require('mplayer');

var app = express();
var player = new MPlayer();

app.get('/', function(req, res) {
  res.sendFile('/home/fulvio/suac/node/menu.html');
});
app.get('/suona', function(req, res) {
  player.openFile('/home/fulvio/msc/Modà - Forse non lo sai - Videoclip Ufficiale-32aoS7yFAP8.opus');
  return res.redirect('/');
});
app.get('/pausa', function(req, res) {
  player.pause();
  return res.redirect('/');
});
app.get('/play', function(req, res) {
  player.play();
  return res.redirect('/');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
