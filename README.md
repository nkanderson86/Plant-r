
## PlantR App Project - React Native, Node, MongoDB
Ever think your green thumb isn't so green? Hate the idea of going away and possibly starving your plants, or if you're like me, you need a reminder to water your plants and even then sometimes forget? Fret no more, we have built an easy to use app to take the guesswork and worry away! 

The project used React Native for the mobile app, Node and MongoDB for the backend and database. For the app and watering system to function the user has a main controller (Raspberry Pi) and a watering devices(Arduino) for each plant to be watered, that syncs with the main controller. 

The project is still being iterated on to add more features and functionality for the user. 

**Current features:**
* Create an account and register your main controller
* Secure login 
* Dashboard where listener is running to pick up newly plugged in watering device for your plant
* Dashboard to display the status of your watering device(s) for each plant
* Screen to edit/add a schedule to your watering device by day of the week, time, and amount to water
* Screen to show the device schedule
* Easy to use and intuitive! Set it and forget it

**Roadmap:**
* Allow more sensor data reporting (temperature, humidity, moisture, light, water amount)
* More robust statuses
* Ability to see historical data in easy to digest graph format
* Reset password
* Enhanced data reporting

**Project Repositories:**
* [Plantr App React Native code](https://github.com/bretgithub/project-x-)
* [API code](https://github.com/eblouin876/project-x-api)
* [Main controller and watering device code](https://github.com/eblouin876/project-x-pi)

**To Demo the App:**
Phone: (must have expo App downloaded on your phone) 
  1. Log into Expo with the credentials: 
      user: bretallan
      pw: 1234
  2. Scan the QR code below with your phone and open in Expo
  
  <p align="left">
  <img src="https://github.com/bretgithub/works/blob/master/qr.png"  width="100" title="QR code">
  </p>
  
  3. Use the credentials below to log in:
      user: Bret
      pw: bret
      
Browser (not recommended, very slow with the emulator): 
  1. Click the [Expo project link](https://expo.io/@nkanderson86/projectx)
  2. Click tap to play and wait for your turn in the queue
  3. When page loads, scroll down to click the button 'Open project using Expo'
  4. Log in to the app using the credentials below: 
      user: Bret
      pw: bret
