# Server Time

A super light weight package to compensate for the difference in time on the server and client.

>This is a [Meteor][meteor] package with part of it's code published as a companion NPM package made to work with React Native. This allows your Meteor and React Native projects that use this package to share code between them to give you a competitive advantage when bringing your mobile and web application to market.

- [Server Time](#server-time)
    - [Supporting the Project](#supporting-the-project)
    - [Meteor Installation](#meteor-installation)
    - [React Native Installation](#react-native-installation)
    - [API](#api)
    - [Usage Example](#usage-example)

## Supporting the Project
In the spirit of keeping this and all of the packages in the [Socialize](https://atmospherejs.com/socialize) set alive, I ask that if you find this package useful, please donate to it's development.

![Litecoin](http://gdurl.com/xnOe)

[Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Meteor Installation

```shell
$ meteor add socialize:server-time
```

## React Native Installation

```shell
$ npm install --save @socialize/server-time
```

> **Note**
>
>  When using with React Native, you'll need to connect to a server which hosts the server side Meteor code for your app using `Meteor.connect` as per the [@socialize/react-native-meteor](https://www.npmjs.com/package/@socialize/react-native-meteor#example-usage) documentation.

 ```javascript
Meteor.connect('ws://192.168.X.X:3000/websocket');
 ```

## API

`ServerTime.now()` - returns a difference compensated timestamp representing the current time on the server.

`ServerTime.date()` - returns a difference compensated Date() object representing the current date on the server.

## Usage Example

```javascript
// Meteor
import { ServerTime } from 'meteor/socialize:server-time';
```

```javascript
// React
import { ServerTime } from 'meteor/socialize:server-time';
```

```javascript
let compensatedDate = ServerTime.date();
```

[meteor]: https://meteor.com
