# Data Server

This is a very simple Node.js server that utilizes express to provide very minimal data.

## Running the server

You will need some modern version of Node installed.

Run `yarn && yarn start` in this folder and open `./index.html` in your browser.

## The Data

The data sent from the server will have a format similar to below.

### Exclusion list

```json
[
  { "PartNumber": "1111-Invoice", "Description": "Invoice line" },
  { "PartNumber": "1234-abcd", "Description": "Test Part Number" },
  { "PartNumber": "9999-charge", "Description": "Stealth charge added for rude customers" }
]
```

### Parts list

```json
[
  { "PartNumber": "1234-asdf", "Description": "Discombobulator" },
  { "PartNumber": "9876-1234", "Description": "Piston return springs" },
  { "PartNumber": "3142-q1w2e3", "Description": "Dipstick Extender" }
]
```
