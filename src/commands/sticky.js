export default {
  name: 'sticky',
  description: 'Postavi sticky poruku u kanal',
  async execute(message, args) {
    if (!args.length) return message.reply('Upiši tekst za sticky poruku!')
    const content = args.join(' ')
    const sent = await message.channel.send(content)
    // sačuvaj u bazu ili Map
  }
}
