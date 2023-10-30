const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("loud")
        .setDescription("A maior do Brasil"),

    async execute(interaction) {
        await interaction.reply(
    `**Ave Aspas, cheio de facas,
a Operator é convosco,
bendita sois Less entre os costinhas
e bendito é o fruto do vossa creche,
Tuyz e Cauazin.
Santo Manito, pai da LOUD,
popai por nós torcedores,
agora e na hora da nossa vitória.**`)
    }
}