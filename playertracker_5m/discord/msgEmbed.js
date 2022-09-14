const { ActionRowBuilder, SelectMenuBuilder} = require('discord.js')

msgEmbed = () => {
    const selectMenu = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setCustomId('2na_tracker_5m')
            .setPlaceholder('Choose a task to perform')
            .addOptions(
                {
                    label: 'Single Read',
                    description: `Reads the most current server.log`,
                    value: 'single',
                },
                {
                    label: 'Batch Read',
                    description: 'This reads all server.log files',
                    value: 'multi',
                },
                {
                    label: 'Refresh Command',
                    description: `Refresh from last option`,
                    value: 'refresh',
                },
            ),
    );
    return selectMenu
}

module.exports = {
    msgEmbed
}