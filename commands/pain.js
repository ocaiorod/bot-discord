const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pain")
        .setDescription("Você disse Vice Gaming"),

    async execute(interaction) {
        await interaction.reply("**PORQUE MEU TECLADO ESCREVE ᵖᵃⁱⁿ ASSIM?**")
    }
}