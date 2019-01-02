import discord
import asyncio

client = discord.Client()

bot_out = ""




@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

@client.event
async def on_message(message):
    
    print(message.channel)
    
    messag = message.content    
    messag = str(messag).lower()

    print(messag)

    if messag.startswith('hb!'):
        bot_out = str(input("Enter message to send"))
        await  message.channel.send(bot_out, tts = True)

    elif message.content.startswith('!sleep'):
        await asyncio.sleep(5)
        await message.channel.send('Done sleeping')




client.run('NTI1MDI5NzA0NjAwOTExODgy.Dvxo_w.SEa9sTIgvg-YIoZYue14ho_Bp-Y')
