const stickyMap = new Map()

export async function handleSticky(message) {
  if (message.author.bot) return
  const sticky = stickyMap.get(message.channel.id)
  if (!sticky) return

  try {
    const old = await message.channel.messages.fetch(sticky.messageId)
    await old.delete()
  } catch {}

  const newMsg = await message.channel.send(sticky.content)
  stickyMap.set(message.channel.id, { messageId: newMsg.id, content: sticky.content })
}

export function setSticky(channelId, messageId, content) {
  stickyMap.set(channelId, { messageId, content })
}

export function removeSticky(channelId) {
  stickyMap.delete(channelId)
}
