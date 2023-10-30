const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coito")
        .setDescription("Ouça a melhor playlist de coito!"),

    async execute(interaction) {
        await interaction.reply("Aqui está uma playlist de músicas para coito: https://open.spotify.com/playlist/5TDS9qhhAqmBfjJXS95v4p?si=06551bc588a14f51S")
    }
}