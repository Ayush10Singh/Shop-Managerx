const Discord = require("discord.js");
const { swap_pages2 } = require("../../utilfunctions")
const { Roles } = require("../../../settings.json");
const emoji = require("../../../emoji")
module.exports = {
    name: require("path").parse(__filename).name, 
    category: "Setup", 
    aliases: [  ], 
    description: "", 
    run: async (client, message, args, prefix) => {
        if (message.member.roles.highest.rawPosition < message.guild.roles.cache.get(Roles.OwnerRoleId).rawPosition)
            return message.reply(`<:no:933239221836206131> You are not allowed to execute this Command!`);//no emoji
        client.setups.set(message.guild.id, !client.setups.get(message.guild.id, "ticketsystem8.enabled"), "ticketsystem8.enabled")
        return message.reply(`> ✅ **The CUSTOM CODE ORDERING SYSTEM Is Now: \`${client.setups.get(message.guild.id, "ticketsystem8.enabled") ? "Enabled" : "Disabled"}\`**`)
    }
}