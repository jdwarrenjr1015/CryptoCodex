export async function generateDiscordInvite(): Promise<string> {
  const channelId = process.env.DISCORD_CHANNEL_ID!
  const botToken = process.env.DISCORD_BOT_TOKEN!

  const res = await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
    method: 'POST',
    headers: {
      Authorization: `Bot ${botToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      max_age: 604800,  // 7 days
      max_uses: 1,      // single use
      unique: true,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Discord invite failed: ${err}`)
  }

  const data = await res.json()
  return `https://discord.gg/${data.code}`
}
