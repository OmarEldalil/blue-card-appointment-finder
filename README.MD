## Description
This repo is an automation script to automate your clicks based on your inputs (answers) to notify you whenever there's an available timeslot to book for a blue card appointment in Berlin.

## Prerequisites
Have [node.js](https://nodejs.org/en) installed on your machine.

## How it works

- clone the repo into your local machine
- run ```npm install```
- run ```npm start```

It will start to ask you some questions like your nationality, do you live alone and what is your spouse nationality.
it will also ask you for telegram token with detailed steps how to get one.

It will open the browser and simulate the steps you'd normally do to book an appointment.
when it finds an available slot, it will send you the link on telegram, open it as soon as you get it and book the appointment

It will also retry until it finds an appointment, and if there's a failure, it will start over again.

It only stops when an appointment is found. so if someone was faster than you and booked the appointment, please run the script again. 

## Disclaimer
Use it at your own risk, I've no responsibility towards the usage of this repo.

---
Thanks to Anna Sychugina who had the idea and basic implementation.
