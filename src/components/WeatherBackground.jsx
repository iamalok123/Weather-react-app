import Thunderstorm from "../assets/Thunderstorm.gif";
import Rain from "../assets/Rain.gif";
import Snow from "../assets/Snow.gif";
import ClearDay from "../assets/ClearDay.gif";
import ClearNight from "../assets/ClearNight.gif";
import CloudsDay from "../assets/CloudsDay.gif";
import CloudsNight from "../assets/CloudsNight.gif";
import Haze from "../assets/Haze.gif";
import video from "../assets/video1.mp4";

const WeatherBackground = ({ condition }) => {
  const assetsMap = {
    Thunderstorm,
    Drizzle: Rain,
    Rain,
    Snow,
    Clear: { day: ClearDay, night: ClearNight },
    Clouds: { day: CloudsDay, night: CloudsNight },
    Mist: Haze,
    Smoke: Haze,
    Haze,
    Fog: Haze,
    default: video,
  };

  const getBackground = () => {
    if (!condition) return assetsMap.default;

    const asset = assetsMap[condition.main] || assetsMap.default;

    if (typeof asset === "object") {
      return condition.isDay ? asset.day : asset.night;
    }

    return asset;
  };

  const background = getBackground();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {background === video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover animate-fade-in"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={background}
          alt="weather-bg"
          className="w-full h-full object-cover opacity-50 animate-fade-in"
        />
      )}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default WeatherBackground;
