const express = require('express')
const { Expo } = require('expo-server-sdk')

const router = express.Router()

var expo = new Expo()

router.post('/sendtoken', async (req, res) => {

    try
    {

        const { token } = req.body

        var message = []

        if(!Expo.isExpoPushToken(token))
        {
            res.status(422).send({ error: 'Expo push token is invalid' })

            return
        }
        message.push({
            to: token,
            sound: 'default',
            body: 'This is a test notification',
            data: { withSome: 'data' }
        })

        const ticket = await expo.sendPushNotificationsAsync(message)

        console.log(ticket)

        return res.status(200).send("Successfully sent the notification")

    } catch(e)
    {
        console.log(e)
    }

})

module.exports = router
