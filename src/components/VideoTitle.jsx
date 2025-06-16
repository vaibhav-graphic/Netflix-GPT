const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[24%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg justify-between cursor-pointer hover:bg-white/80">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg justify-between cursor-pointer">
          more info.
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
