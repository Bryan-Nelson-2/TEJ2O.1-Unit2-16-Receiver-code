/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bryan
 * Created on: Dec 18
 * This program recieves the message to close when  sonar from another microbit is too close
*/

// setup
radio.setGroup(16)
basic.clearScreen()
basic.showIcon(IconNames.Happy)


// receiver code
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})


