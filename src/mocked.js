import fetchMock from "fetch-mock";

const mocked=function(){
    fetchMock.get('*', {
        "name": "brickspert",
        "intro": "please give me a star"
    });

}


// Unmock.
// fetchMock.restore();

export default mocked;