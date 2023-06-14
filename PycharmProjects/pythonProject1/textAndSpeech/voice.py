# import pyttsx3

# input = int(input("press 1 for  female and 2 for male"))
# engine = pyttsx3.init()

# def speak(text, voiceId):
#     engine = pyttsx3.init()
#     engine.setProperty('rate', 150)
#     voices = engine.getProperty('voices')
#     engine.setProperty('voice', voices[voiceId].id)
#     engine.say(text)
#     engine.runAndWait()
#
#
# if input == 1:
#     speak("Hello world",1)
#
# elif input == 2:
#     speak("Hello world",0)
#
# else:
#     print("Enter correct number")

# voices = engine.getProperty("voices")
# print("Male Voice : {0}". format(voices[0].id))
# print("Female Voice : {0}". format(voices[1].id))
#
# engine.setProperty("voice", voices[1].id)
#
# engine.say("hello in python")
# engine.runAndWait()
