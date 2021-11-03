function navbar(){
    return`<div><img id="mainlogo" src="https://images.ctfassets.net/00atxywtfxvd/2MlqAOzmHjSPtssv6HlNox/1cb35b40775835a5f574ebc5509907a1/coursera-wordmark-blue.svg"></div>
    <div id="explore">
        <span id="extext1">Explore </span>
        <span class="material-icons" id="arrow">
            expand_more
            </span>
    </div>
    <div><input id="searchinput" placeholder="What do you want to learn?" type="text" oninput="fillPreviousSearched()">
        <button class="material-icons" id="searchicon">
            search
        </button></div>
    <div id="enterPrises"><a>For Enterprises</a></div>
    <div id="forStu"><a>For Students</a></div>
    <!-- <div id="bell sign">bell sign</div> -->
    <div id="login"><a>Log In</a></div>
    <div id="jff"><a>Join for Free</a></div>`
}
export default navbar