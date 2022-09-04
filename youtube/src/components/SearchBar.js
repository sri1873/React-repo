import React, { useState,useEffect } from 'react'


const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const SearchBar = ({ onSearch }) => {
    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState('');
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    }

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input value={note} onChange={(e) => { setNote(e.target.value) }} placeholder='search' type={'text'} />
            <button type='button' onClick={() => setIsListening(prevState => !prevState)}>{isListening ? <i class="fa-solid fa-microphone"></i> : <i class="fa-solid fa-microphone-slash"></i>}</button>
            <button type='submit' onClick={() => { setTerm(note) }}>Search</button>
        </form>
    )
}
// class SearchBar extends React.Component{
//     state={term:''}
//     onChange = (e) => {
//         this.setState({ term: e.target.value })
//     }
//     onSubmit = (e) => {
//         e.preventDefault(); 
//         this.props.onSearch(this.state.term);
//     }


//     render() {
//         return (
//             <form onSubmit={this.onSubmit}>
//                 <input onChange={this.onChange} placeholder='Search' type={'text'}/>
//             </form>
//         )
//     }
// }
export default SearchBar