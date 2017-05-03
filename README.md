# SYNOPSIS
An airdrop clone

# Notes on the GitHub pages site

- so far no tooling – it's a single, static, self-contained html page
- to update the screenshot paste it into a GitHub issue and replace the link

# AVATAR

Drop an image to your own bubble at the bottom. PeerDrop will persist this at `~/avatar/`

![image](https://cloud.githubusercontent.com/assets/170145/25565945/3aaed0e0-2dd1-11e7-8960-4e29b5ae6274.png)


# BUILD

## Linux

`npm run build-linux` builds deb/zip packages

### System Dependencies

#### Arch Linux

* graphicsmagick
* libicns (AUR)

# RUN
To run the app, use the bin in the `node_modules` directory.

```bash
./node_modules/.bin/electron ./index.js
```

or run with nodemon to restart on changes

```bash
./node_modules/.bin/nodemon ./node_modules/.bin/electron ./index.js
```

which is also wrapped with

```bash
npm start
```
