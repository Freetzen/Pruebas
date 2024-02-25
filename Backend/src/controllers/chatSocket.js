
const chatSocket = (req, res) => {
    res.sendFile(process.cwd() + '/Frontend/src/components/chatSocket/ChatSocket.jsx')
}

module.exports = chatSocket