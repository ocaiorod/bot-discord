const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bailao")
        .setDescription("Ativar o modo bailão"),

    async execute(interaction) {
        await interaction.reply("Pega seu juju e curte essa aqui: https://open.spotify.com/playlist/2SJPZjP4j7ZBkw6412hoan?si=020b8ff09fe74648")
    }
}