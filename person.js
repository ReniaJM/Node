const axios = require('axios');
const fs =require('fs')

function getUserID(id) {
        const url= `https://jsonplaceholder.typicode.com/users/${id}`
        return axios(url)
            .then(response => response.data)
}

function getAlbum(id) {
    const url= `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    return axios(url)
        .then(response => response.data)
}

function getPhoto(id) {
    const url= `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    return axios(url)
        .then(response => response.data)
}

const writeFile = promisify(writeFile);

getUserID(6)
    .then (user =>{
        console.log(user.id)
        return getAlbum(user.id)
    })
    .then(albums =>{
        const [firstAlbum]= albums
        console.log(albums.lenght)
        console.log(firstAlbum.title)
        return getPhoto(firstAlbum.id)
    })
    .then(photos =>{
        console.log(photos.lenght)
        photos.forEach(photo =>{
            console.log(photo.title)
        })
    })
    .then(photos =>{
        const photoToString= JSON.parse(photos)
        return writeFile('photo.json', photoToString )
    })
    .catch (error => console.log(error.message))