import connectBlockchain from "../../models/connectBlockchain"
export default function handler(req, res) {
    connectBlockchain().getUserName().then(()=>{
        res.status(200).json({ name: 'ok' })
    }).catch((error)=>{
        res.status(301).json({ name: 'Error=>'+error })
    })
}
  