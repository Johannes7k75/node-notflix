<h1 align="center">NOTFLIX</h1>
<p align="center">f@#k netflix use notflix a tool which search magnet links and stream it with peerflix</p>

##
<p align="center">
<img src="./preview.gif" alt="Video Preview" width="500px">
</p>

> Watch this video to understand - [bugswriter's notflix](https://youtu.be/FbE19_omaWY)

### How does this work?

This is a shell script. It scrape 1337x and get the magnet link.
After this it use [peerflix](https://github.com/mafintosh/peerflix) to stream the video from magnet link.
For scraping script use node-fetch and regex.

## Requirements
* [nodejs](https://nodejs.org/en/)
* [peerflix](https://github.com/mafintosh/peerflix) - A tool to stream torrent. `sudo npm install peerflix -g`

## Installation

```sh
$ npm install
$ git clone https://github.com/Johannes7k75/node-notflix
```
- To update just do `git pull`

## License
This project is licensed under [GPL-3.0](https://raw.githubusercontent.com/Illumina/licenses/master/gpl-3.0.txt).

