const TelegramBot = require('node-telegram-bot-api')
const token = '6589441107:AAFSz0Pf9zMMaf6nej_5nkcdYZn2V-TB0zE'
const { students } = require("./options")

const bot = new TelegramBot(token, { polling: true })

const password = "qwerty"


bot.on("message", async (msg) => {
    const text = msg.text
    const chatId = msg.chat.id

    if (text === "/start") {
        return (
            await bot.sendMessage(
                chatId,
                "Salom Davomat botga xush kelibsiz!!!"
            ),
            await bot.sendMessage(
                chatId,
                "Shaxsingizni anig'lash uchun parolni kiriting:"
            )
        )
    }
})

bot.on("message", async (msg) => {
    const text = msg.text
    const chatId = msg.chat.id

    if (text === password) {
        return await bot.sendMessage(
            chatId,
            "Sinfingiz: 11-'L'",
            students
        )
    }

})