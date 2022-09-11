import connectBlockchain from "../../models/connectBlockchain"
export default function handler(req, res) {
    connectBlockchain().getUserName().then((response)=>{
        res.status(200).json({ name: response })
    }).catch((error)=>{
        res.status(301).json({ name: 'Error=>'+error })
    })
}
  