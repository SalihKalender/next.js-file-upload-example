import {useState} from "react";

export default function Home() {
  const [ImageUrl, setImageUrl] = useState('')
  const [image, setImage] = useState(null)
  const getImage = async (e) => {
    setImage(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setImageUrl(url);
  }
  const sendServer = async () => {
    const body = new FormData()
    body.append('file', image)
    const response = await fetch('/api/upload', {method: 'POST', body})
  }
  return (
    <>
      <img src={ImageUrl} />
      <input type='file' id='image' name='image' onChange={getImage} />
      <button type='button' onClick={sendServer}>Send to Server</button>
    </>
  )
}
