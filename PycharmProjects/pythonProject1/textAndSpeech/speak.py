import speech_recognition as sr

r = sr.Recognizer()
while(1): #while(1>0)
    try:
        with sr.Microphone() as source2:
            r.adjust_for_ambient_noise(source2, duration=0.2)
            audio2 = r.listen(source2)
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()

            print("Did you say: ", MyText)
            # SpeakText(MyText)

    except:
        print("Some error occured")