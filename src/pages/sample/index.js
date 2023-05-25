import React, { useState } from "react"
import { postTweet } from "../../api/tweet"

export default function Sample() {

    const [tweet, setTweet] = useState("")
    const [image, setImage] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        postTweet({
            tweet:tweet,
            image:image
        }).then(res => {
            if(res.data.success) { 
                alert("post tweet success")
            } else { 

            }
        })
        .catch(err => {

        })
        alert("success")
    } 

    return (
        <div style={{ textAlign:'left'}}>
            <h2> Post Tweet </h2>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:'20px'}}>
                    <label style={{marginBottom:10}}> Tweet </label> <br></br>
                    <textarea rows={10} cols={30} name="tweet" value={tweet}
                        onChange={(e) => setTweet(e.target.value)}
                    ></textarea>
                    {tweet}
                </div>
                <div style={{marginBottom:'20px'}}>
                    <label style={{marginBottom:10}}> Image </label> <br></br>
                    <input type='file' onChange={(e) => {
                        setImage(e.target.files[0])
                    }}></input>
                   
                </div>
                <div style={{marginBottom:'20px'}}>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}