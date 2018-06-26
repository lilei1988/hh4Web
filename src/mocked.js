import fetchMock from "fetch-mock";

const mocked=function(){
    fetchMock.get('*', {
        "token":"12345",
        "name": "brickspert",
        "intro": "please give me a star"
    });

}


// Unmock.
// fetchMock.restore();

export default mocked;