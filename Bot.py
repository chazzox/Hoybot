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
    bot_out = ""
    
    print(message.channel)
    
    messag = message.content    
    messag = str(messag).lower()

    print(messag)
    for i in range (0,50):
            bot_out  = bot_out + ":raised_hands::skin-tone-4:"
    await  message.channel.send(bot_out, tts = True)





client.run('NTI1MDI5NzA0NjAwOTExODgy.Dvxo_w.SEa9sTIgvg-YIoZYue14ho_Bp-Y')
