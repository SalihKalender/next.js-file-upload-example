import {useState} from "react";

export default function Home() {
    const [ImageFile, setImageFile] = useState('')
    const [Image, setImage] = useState('')
    const getImage = (e) => {
        const file = e.target.files[0]
        setImageFile(URL.createObjectURL(file))
        setImage(Image)
    }
    const sendServer = async () => {
        const data = new FormData()
        data.append('file', Image)
        await fetch('/api/upload', {method: 'POST', body: data})
    }
    return (
        <>
            <img src={ImageFile}/>
            <input type='file' name='image' id='image' onChange={getImage}/>
            <button onClick={sendServer}> Send to Server</button>
        </>
    )
}
