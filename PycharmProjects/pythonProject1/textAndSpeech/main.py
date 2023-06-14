import pyttsx3
import speech_recognition as sr

r = sr.Recognizer()

def speak(text, voiceId):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[voiceId].id)
    engine.say(text)
    engine.runAndWait()

def speechToText():
    while 1:  # while(1>0)
        try:
            with sr.Microphone() as source2:
                r.adjust_for_ambient_noise(source2, duration=0.1)
                audio2 = r.listen(source2)
                text1 = r.recognize_google(audio2)
                text1 = text1.lower()

                print("Did you say: ", text1)
        except:
            print("Some error occurred")


inputOption = int(input("""
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    |   Choose any one option:     |
    |     1. Text   -> Speech      |
    |     2. Speech -> Text        |
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    =>
"""))

if inputOption == 1:
    inputOption2 = int(input("""
    => Press 1 for Female
    => Press 2 for male
    """))
    # text = input("Enter your text: ")
    if inputOption2 == 1:
        text = input("Enter your text: ")
        speak(text, 1)
    elif inputOption2 == 2:
        text = input("Enter your text: ")
        speak(text, 0)
    else:
        print("Enter correct number")

elif inputOption == 2:
    print("Speak what you want me to write")
    speechToText()
else:
    print("ENTER CORRECT INPUT!")
