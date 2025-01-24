interface PostData {
    Username: string;
    id: string;
    imgUrl?: string;
    PostText: string;
    Story: {
        StoryImg: string;
        Time: number;
    }

};
function RandomTime() {
    return Math.floor(Math.random() * 23 + 1);
}
const PostAdress = [
    { imgUrl: { uri: "https://images.alphacoders.com/135/135673.jpg" }, Username: "shersingh", id: "6", PostText: "Enjoying the beautiful scenery!", Story: { StoryImg: { uri: "https://images.alphacoders.com/135/135673.jpg" }, Time: RandomTime() } },
    { imgUrl: { uri: "https://artfiles.alphacoders.com/154/thumb-800-154147.webp" }, Username: "puneet", id: "7", PostText: "A day well spent!", Story: { StoryImg: { uri: "https://artfiles.alphacoders.com/154/thumb-800-154147.webp" }, Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post2.jpg"), Username: "sumit", id: "8", PostText: "Loving the vibes here.", Story: { StoryImg: require("../../assets/images/post2.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post3.jpg"), Username: "lucky", id: "9", PostText: "What a wonderful day!", Story: { StoryImg: require("../../assets/images/post3.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post4.jpg"), Username: "siddharath", id: "10", PostText: "Feeling blessed.", Story: { StoryImg: require("../../assets/images/post4.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post3.jpg"), Username: "mahipal", id: "11", PostText: "Cherishing every moment.", Story: { StoryImg: require("../../assets/images/post3.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post2.jpg"), Username: "narendra", id: "12", PostText: "Life is beautiful.", Story: { StoryImg: require("../../assets/images/post2.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post4.jpg"), Username: "rishabh", id: "13", PostText: "Making memories.", Story: { StoryImg: require("../../assets/images/post4.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post3.jpg"), Username: "hitesh", id: "14", PostText: "Living the dream.", Story: { StoryImg: require("../../assets/images/post3.jpg"), Time: RandomTime() } },
    { imgUrl: require("../../assets/images/post1.jpg"), Username: "kamlesh", id: "15", PostText: "Adventure awaits.", Story: { StoryImg: require("../../assets/images/post1.jpg"), Time: RandomTime() } },
];

export default PostAdress;
