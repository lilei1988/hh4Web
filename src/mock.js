import fetchMock from "fetch-mock";

const mocked=function(){
    fetchMock.get('/api/user.json', {
        "token":"1234567",
        "name": "brickspert",
        "intro": "please give me a star"
    });

}


// Unmock.
// fetchMock.restore();

export default mocked;