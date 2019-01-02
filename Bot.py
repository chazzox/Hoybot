import discord
import asyncio

client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

@client.event
async def on_message(message):
    print(message.channel)
    if message.content.startswith('hb!'):
        counter = 0
        tmp = await  message.channel.send('Hello')
        async for log in client.logs_from(message.channel, limit=100):
            if log.author == message.author:
                counter += 1

        await client.edit_message(tmp, 'You have {} messages.'.format(counter))
    elif message.content.startswith('!sleep'):
        await asyncio.sleep(5)
        await message.channel.send(message.channel, 'Done sleeping')

client.run('NTI1MDI5NzA0NjAwOTExODgy.Dvxo_w.SEa9sTIgvg-YIoZYue14ho_Bp-Y')
