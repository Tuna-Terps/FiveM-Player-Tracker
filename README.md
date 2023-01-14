# FiveM-Player-Tracker
A simple nodejs script that reads logs from txAdmin utilizing discord's API

## Overview ##
A nodejs script intended to be run outside the scripting environment of your fivem gameserver. 

## Requirements ##
1.) Node.js v14+ 
2.) MongoDB account, (a free cluster is sufficient for well over 100,000 entries)
3.) Create a Discord bot via discord developer portal 
4.) This script was created and tested with txAdmin recipe, other builds may have to configure slightly differently 

## Installation ## 
1.) Download zip from direct download 
2.) Extract contents of FiveM-Player-Tracker to your txAdmin folder 
3.) Extract node_modules folder to your FiveM-Player-Tracker folder
4.) Edit .env folder with the desired credentials **more detail to follow** 
5.) Utilizing either powershell cd to folder and invoke node index.js or you can use .bat in directory
