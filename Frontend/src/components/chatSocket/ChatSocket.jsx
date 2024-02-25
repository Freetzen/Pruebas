import { useEffect, useState } from 'react'
import io from 'socket.io-client' //
const socket = io('https://wedevelop-production.up.railway.app/')
 const ChatSocket = () => {

    const [sendMessage, setSendMessage] = useState('')
    const [messageReceived, setMessageReceived] = useState([])

    useEffect(() => {
      socket.on('messageBroadcast', message => {
        setMessageReceived([...messageReceived, message])
    })
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', sendMessage)
    }

     return (
    <div style={{marginTop: '150px'}}>
        <h1>CHAT WEDEVELOP</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="message"
            id="input"
            placeholder="Type a message"
            autoComplete="off"
            onChange={(e) => setSendMessage(e.target.value)}
            />

            <button type="submit">Send</button>
        </form>
        <ul>
            {
                messageReceived.map((e) => (
                    <li>
                        {e}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ChatSocket