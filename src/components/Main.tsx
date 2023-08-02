import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

const Main = () => {
   const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
} = useSpeechRecognition();

    return (
        <div>
            {hasRecognitionSupport ? (
                <>
                <div>
                    <button onClick={startListening}>Start listening</button>
                </div>

                <div>
                    <button onClick={stopListening}>Stop listening</button>
                </div>

                {isListening ? (
                    <div>Your browser is currently listening</div>
                ) : null}
                {text}
                </>
            ): (
                <h1>Your Browser has no speech recognition support</h1>
            )}
        </div>
    )
};

export default Main;