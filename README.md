# [PeerDrop](https://0x00a.github.io/peerdrop/)

**A FLOSS, cross-platform Airdrop alternative**

Made at [Offline Camp](http://offlinefirst.org/camp/)

## SETUP

After cloning and installing dependecies, run **`npm start`**. It launches the [Electron](https://electron.atom.io/) binary, wrapped in a [nodemon](https://nodemon.io/) to make development more comfortable. 

You can also run `npm run git-deamon` to [launch a one-off git server](https://gist.github.com/datagrok/5080545). It will tell you how others can then clone and pull directly from your machine.

## AVATAR

Drop an image to your own bubble at the bottom. PeerDrop will persist this at `~/avatar/`

![image](https://cloud.githubusercontent.com/assets/170145/25565945/3aaed0e0-2dd1-11e7-8960-4e29b5ae6274.png)


## BUILD

### Linux

`npm run build-linux` builds deb/zip packages

#### System Dependencies

##### Arch Linux

* graphicsmagick
* libicns (AUR)

### Mac

`npm run build-mac` builds app/dmg/zip packages


